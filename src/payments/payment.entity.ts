import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Relation,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Studio } from '../studios/studio.entity';
import { Appointment } from '../appointments/appointment.entity';
import { PaymentStatus } from '../common/enums';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Appointment, (appointment) => appointment.payment)
  @JoinColumn({ name: 'appointment_id' })
  appointment: Relation<Appointment>;

  @ManyToOne(() => User, (user) => user.payments)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;

  @ManyToOne(() => Studio)
  @JoinColumn({ name: 'studio_id' })
  studio: Relation<Studio>;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'amount_due' })
  amountDue: number;

  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  status: PaymentStatus;

  @Column({ type: 'timestamptz', name: 'due_date' })
  dueDate: Date;

  @Column({ type: 'timestamptz', name: 'paid_at', nullable: true })
  paidAt: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
