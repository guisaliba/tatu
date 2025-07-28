import { Appointment } from 'src/appointments/appointment.entity';
import { Payment } from 'src/payments/payment.entity';
import { Social } from 'src/socials/social.entity';
import { StudioMembership } from 'src/studio-membership/studio-membership.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Relation,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @OneToMany(() => StudioMembership, (membership) => membership.user)
  memberships: Relation<StudioMembership[]>;

  @OneToMany(() => Social, (social) => social.user)
  socials: Relation<Social[]>;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Relation<Appointment[]>;

  @OneToMany(() => Payment, (payment) => payment.user)
  payments: Relation<Payment[]>;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
