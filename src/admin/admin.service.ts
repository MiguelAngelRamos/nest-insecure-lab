import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../usuario.entity.js';

@Injectable()
export class AdminService {
  private readonly logger = new Logger(AdminService.name);

  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async getUsuarios() {
    return this.usuarioRepository.find();
  }

  async getLogs() {
    return [
      { timestamp: '2024-03-15 10:30:00', action: 'LOGIN', user: 'admin@techcorp.cl', ip: '192.168.1.100' },
      { timestamp: '2024-03-15 10:31:00', action: 'VIEW_EMPLEADOS', user: 'admin@techcorp.cl', ip: '192.168.1.100' },
      { timestamp: '2024-03-15 10:45:00', action: 'LOGIN', user: 'rrhh@techcorp.cl', ip: '192.168.1.105' },
      { timestamp: '2024-03-15 11:00:00', action: 'UPDATE_SALARIO', user: 'rrhh@techcorp.cl', details: 'empleado_id=3, salario=2500000' },
      { timestamp: '2024-03-15 11:15:00', action: 'LOGIN_FAILED', user: 'empleado@techcorp.cl', ip: '10.0.0.50', details: 'password incorrecto' },
      { timestamp: '2024-03-15 12:00:00', action: 'RESET_PASSWORD', user: 'admin@techcorp.cl', details: 'target=empleado@techcorp.cl' },
    ];
  }

  async resetPassword(email: string, newPassword: string) {
    const usuario = await this.usuarioRepository.findOne({ where: { email } });
    if (!usuario) {
      throw new NotFoundException(`Usuario con email ${email} no encontrado`);
    }

    usuario.password = newPassword;
    await this.usuarioRepository.save(usuario);

    this.logger.log(`Password reset for user: ${email}, new password: ${newPassword}`);

    return { message: `Contraseña de ${email} actualizada exitosamente` };
  }
}
