import { User } from 'src/users/user.interface';
import { Studio } from 'src/studios/studio.interface';

export interface StudioMembership {
  userId: string;
  studioId: string;
  role: string;
  transferType: string;
  user: User;
  studio: Studio;
}
