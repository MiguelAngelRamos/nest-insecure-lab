import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../usuario.entity.js';
import { Empleado } from '../empleados/empleado.entity.js';

@Injectable()
export class DatabaseSeederService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    @InjectRepository(Empleado)
    private empleadoRepository: Repository<Empleado>,
  ) {}

  async onApplicationBootstrap() {
    const count = await this.usuarioRepository.count();
    if (count > 0) return;

    console.log('🌱 Sembrando base de datos en memoria...');


    const usuarios = [
      {
        nombre: 'Administrador Sistema',
        email: 'admin@techcorp.cl',
        password: 'admin123',
        rol: 'admin',
        activo: true,
      },
      {
        nombre: 'Juan Empleado',
        email: 'empleado@techcorp.cl',
        password: 'empleado123',
        rol: 'empleado',
        activo: true,
      },
      {
        nombre: 'María González',
        email: 'rrhh@techcorp.cl',
        password: 'rrhh2024',
        rol: 'rrhh',
        activo: true,
      },
      {
        nombre: 'Carlos Gerente',
        email: 'gerencia@techcorp.cl',
        password: 'gerencia456',
        rol: 'gerencia',
        activo: true,
      },
    ];

    for (const u of usuarios) {
      await this.usuarioRepository.save(this.usuarioRepository.create(u));
    }

    // === EMPLEADOS ===
    const empleados = [
      {
        nombre: 'Alejandro Muñoz Pérez',
        rut: '12.345.678-5',
        cargo: 'Desarrollador Senior',
        departamento: 'TI',
        salario: 2800000,
        email: 'amunoz@techcorp.cl',
        telefono: '+56 9 1234 5678',
        fechaIngreso: '2020-03-15',
        activo: true,
      },
      {
        nombre: 'Catalina Rodríguez López',
        rut: '15.678.432-1',
        cargo: 'Analista de RRHH',
        departamento: 'RRHH',
        salario: 1500000,
        email: 'crodriguez@techcorp.cl',
        telefono: '+56 9 8765 4321',
        fechaIngreso: '2021-07-01',
        activo: true,
      },
      {
        nombre: 'Roberto Soto Vargas',
        rut: '10.234.567-K',
        cargo: 'Gerente de Finanzas',
        departamento: 'Finanzas',
        salario: 4200000,
        email: 'rsoto@techcorp.cl',
        telefono: '+56 9 5555 1234',
        fechaIngreso: '2018-01-10',
        activo: true,
      },
      {
        nombre: 'Francisca Díaz Contreras',
        rut: '16.789.012-3',
        cargo: 'Diseñadora UX',
        departamento: 'TI',
        salario: 1800000,
        email: 'fdiaz@techcorp.cl',
        telefono: '+56 9 4444 5678',
        fechaIngreso: '2022-02-20',
        activo: true,
      },
      {
        nombre: 'Sebastián Herrera Morales',
        rut: '14.567.890-2',
        cargo: 'Contador General',
        departamento: 'Finanzas',
        salario: 2100000,
        email: 'sherrera@techcorp.cl',
        telefono: '+56 9 3333 9876',
        fechaIngreso: '2019-06-15',
        activo: true,
      },
      {
        nombre: 'Valentina Torres Fuentes',
        rut: '17.890.123-4',
        cargo: 'Desarrolladora Junior',
        departamento: 'TI',
        salario: 1200000,
        email: 'vtorres@techcorp.cl',
        telefono: '+56 9 2222 3456',
        fechaIngreso: '2023-09-01',
        activo: true,
      },
      {
        nombre: 'Diego Fernández Araya',
        rut: '13.456.789-6',
        cargo: 'Gerente General',
        departamento: 'Gerencia',
        salario: 4500000,
        email: 'dfernandez@techcorp.cl',
        telefono: '+56 9 1111 7890',
        fechaIngreso: '2015-04-01',
        activo: true,
      },
      {
        nombre: 'Camila Espinoza Reyes',
        rut: '18.123.456-7',
        cargo: 'Asistente de RRHH',
        departamento: 'RRHH',
        salario: 900000,
        email: 'cespinoza@techcorp.cl',
        telefono: '+56 9 6666 5432',
        fechaIngreso: '2024-01-15',
        activo: true,
      },
    ];

    for (const e of empleados) {
      await this.empleadoRepository.save(this.empleadoRepository.create(e));
    }

    console.log(
      `✅ Seed completado: ${usuarios.length} usuarios, ${empleados.length} empleados`,
    );
  }
}
