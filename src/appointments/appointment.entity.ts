import { AppointmentStatus } from 'src/common/enums';
import { Payment } from 'src/payments/payment.entity';
import { Studio } from 'src/studios/studio.entity';
import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Relation,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';

@Entity('appointments')
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.appointments)
  user: Relation<User>;

  @ManyToOne(() => Studio, (studio) => studio.appointments)
  studio: Relation<Studio>;

  @Column({ type: 'timestamptz' })
  date: Date;

  // Duration in minutes
  @Column()
  duration: number;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  value: number;

  @Column({
    type: 'enum',
    enum: AppointmentStatus,
    default: AppointmentStatus.SCHEDULED,
  })
  status: AppointmentStatus;

  @OneToOne(() => Payment, (payment) => payment.appointment)
  payment: Relation<Payment>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
