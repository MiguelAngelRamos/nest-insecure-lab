import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller.js';
import { AdminService } from './admin.service.js';
import { Usuario } from '../usuario.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
