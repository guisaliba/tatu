import { Studio } from 'src/studios/studio.entity';
import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Relation,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('socials')
export class Social {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  service: string; // e.g., 'instagram', 'tiktok'

  @Column()
  username: string;

  @Column()
  url: string;

  @ManyToOne(() => User, (user) => user.socials, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  user: Relation<User>;

  @ManyToOne(() => Studio, (studio) => studio.socials, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  studio: Relation<Studio>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
