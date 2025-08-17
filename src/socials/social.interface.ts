import { Studio } from 'src/studios/studio.interface';
import { User } from 'src/users/user.interface';

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
