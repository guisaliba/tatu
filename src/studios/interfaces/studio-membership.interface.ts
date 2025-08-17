import { User } from 'src/users/interfaces/user.interface';
import { Studio } from 'src/studios/interfaces/studio.interface';

export interface StudioMembership {
  userId: string;
  studioId: string;
  role: string;
  transferType: string;
  user: User;
  studio: Studio;
}
