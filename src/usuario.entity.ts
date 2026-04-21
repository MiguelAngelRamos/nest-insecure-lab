import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;

  // Contraseña en texto plano
  @Column()
  password: string;

  @Column({ default: 'empleado' })
  rol: string; // Roles: 'admin', 'empleado', 'cliente' (sin validación ni control de acceso)

  @Column({ default: true })
  activo: boolean;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fechaCreacion: Date;
}
