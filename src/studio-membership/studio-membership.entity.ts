import { User } from 'src/users/user.entity';
import { Studio } from 'src/studios/studio.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  type Relation,
} from 'typeorm';
import { PaymentModel, UserRole } from 'src/common/enums';

@Entity('studio_memberships')
export class StudioMembership {
  @PrimaryColumn({ type: 'uuid' })
  userId: string;

  @PrimaryColumn({ type: 'uuid' })
  studioId: string;

  @ManyToOne(() => User, (user) => user.memberships)
  @JoinColumn({ name: 'userId' })
  user: Relation<User>;

  @ManyToOne(() => Studio, (studio) => studio.memberships)
  @JoinColumn({ name: 'studioId' })
  studio: Relation<Studio>;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.ARTIST,
  })
  role: UserRole;

  @Column({
    type: 'enum',
    enum: PaymentModel,
    name: 'payment_model',
  })
  paymentModel: PaymentModel;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'payment_value' })
  paymentValue: number;
}
