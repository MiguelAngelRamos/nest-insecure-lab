import { Controller, Get, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service.js';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}


  @Get('usuarios')
  getUsuarios() {
    return this.adminService.getUsuarios();
  }

  @Get('logs')
  getLogs() {
    return this.adminService.getLogs();
  }
  
  @Post('reset-password')
  resetPassword(@Body() body: { email: string; newPassword: string }) {
    return this.adminService.resetPassword(body.email, body.newPassword);
  }
}
