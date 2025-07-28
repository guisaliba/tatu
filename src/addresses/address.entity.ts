import { Studio } from 'src/studios/studio.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  Relation,
} from 'typeorm';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column({ name: 'complementary_info', nullable: true })
  complementaryInfo: string;

  @Column({ name: 'postal_code' })
  postalCode: string;

  @Column()
  country: string;

  @OneToOne(() => Studio, (studio) => studio.address)
  studio: Relation<Studio>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
