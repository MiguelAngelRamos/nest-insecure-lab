import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('empleados')
export class Empleado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  rut: string; // RUT chileno ej: 12.345.678-9

  @Column()
  cargo: string;

  @Column()
  departamento: string;

  @Column('decimal', { precision: 12, scale: 2 })
  salario: number;

  @Column()
  email: string;

  @Column()
  telefono: string;

  @Column({ type: 'date' })
  fechaIngreso: Date;

  @Column({ default: true })
  activo: boolean;
}
