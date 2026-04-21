import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module.js';
import { EmpleadosModule } from './empleados/empleados.module.js';
import { AdminModule } from './admin/admin.module.js';
import { BusquedaModule } from './busqueda/busqueda.module.js';
import { ConfigController } from './config/config.controller.js';
import { Usuario } from './usuario.entity.js';
import { Empleado } from './empleados/empleado.entity.js';
import { DatabaseSeederService } from './database/database-seeder.service.js';

@Module({
  imports: [
    // Base de datos SQLite en memoria — no requiere instalar PostgreSQL
    // sql.js es SQLite compilado en WebAssembly, sin dependencias nativas
    TypeOrmModule.forRoot({
      type: 'sqljs',
      entities: [Usuario, Empleado],
      synchronize: true,
      autoSave: false,
    }),
    // Repositorios necesarios para el seeder automático
    TypeOrmModule.forFeature([Usuario, Empleado]),
    AuthModule,
    EmpleadosModule,
    AdminModule,
    BusquedaModule,
  ],
  controllers: [ConfigController],
  providers: [DatabaseSeederService],
})
export class AppModule {}
