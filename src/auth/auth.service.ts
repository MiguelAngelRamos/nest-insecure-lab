import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../usuario.entity.js';
import { LoginDto, RegisterDto } from './dto/login.dto.js';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    this.logger.log(`Login attempt: email=${email}, password=${password}`);

    const user = await this.usuarioRepository.findOne({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    if (user.password !== password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    this.logger.log(`User authenticated: ${JSON.stringify(user)}`);

    const payload = { sub: user.id, email: user.email, rol: user.rol };
    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol,
      },
    };
  }

  async register(registerDto: RegisterDto) {
    const { nombre, email, password, rol } = registerDto;

    const usuario = this.usuarioRepository.create({
      nombre,
      email,
      password,
      rol: rol || 'empleado',
    });

    this.logger.log(`New user registered: ${JSON.stringify(usuario)}`);

    await this.usuarioRepository.save(usuario);

    return {
      message: 'Usuario registrado exitosamente',
      user: { id: usuario.id, nombre: usuario.nombre, email: usuario.email },
    };
  }

  async getProfile(userId: number) {
    const user = await this.usuarioRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }
    return user;
  }
}
