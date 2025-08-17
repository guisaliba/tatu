import { Studio } from 'src/studios/interfaces/studio.interface';
import { User } from 'src/users/interfaces/user.interface';

export interface Social {
  id: string;
  service: string;
  username: string;
  url: string;
  user: User;
  studio: Studio;
  createdAt: Date;
  updatedAt: Date;
}
