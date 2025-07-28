import { Address } from 'src/addresses/address.entity';
import { Appointment } from 'src/appointments/appointment.entity';
import { Social } from 'src/socials/social.entity';
import { StudioMembership } from 'src/studio-membership/studio-membership.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Relation,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity('studios')
export class Studio {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToOne(() => Address, (address) => address.studio, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'address_id' })
  address: Relation<Address>;

  @OneToMany(() => StudioMembership, (membership) => membership.studio)
  memberships: Relation<StudioMembership[]>;

  @OneToMany(() => Social, (social) => social.studio, {
    nullable: true,
    cascade: true,
  })
  socials: Relation<Social[]>;

  @OneToMany(() => Appointment, (appointment) => appointment.studio, {
    nullable: true,
  })
  appointments: Relation<Appointment[]>;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
