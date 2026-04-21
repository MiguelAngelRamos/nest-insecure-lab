import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empleado } from './empleado.entity.js';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Empleado)
    private empleadoRepository: Repository<Empleado>,
  ) {}

  async findAll() {
    return this.empleadoRepository.find();
  }

  async findOne(id: number) {
    const empleado = await this.empleadoRepository.findOne({ where: { id } });
    if (!empleado) {
      throw new NotFoundException(`Empleado con ID ${id} no encontrado`);
    }
    return empleado;
  }

  async create(empleadoData: any) {
    const empleado = this.empleadoRepository.create(empleadoData);
    return this.empleadoRepository.save(empleado);
  }

  async update(id: number, updateData: any) {
    const empleado = await this.findOne(id);
    // se permite modificar cualquier campo sin validación ni sanitización
    // campos sensibles como salario o fechaIngreso pueden ser modificados sin restricciones
    Object.assign(empleado, updateData);
    return this.empleadoRepository.save(empleado);
  }

  async remove(id: number) {
    const empleado = await this.findOne(id);
    await this.empleadoRepository.remove(empleado);
    return { message: `Empleado con ID ${id} eliminado` };
  }
}
