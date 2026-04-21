import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service.js';
import { LoginDto, RegisterDto } from './dto/login.dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // Sin rate limiting ni protección contra fuerza bruta
  // TODO: agregar rate limiting @nestjs/throttler
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Request() req) {
    return this.authService.getProfile(req.user.userId);
  }

  // Logout sin invalidar el token (solo a nivel cliente)
  @Post('logout')
  async logout() {
    return { message: 'Sesión cerrada (solo cliente)' };
  }
}
