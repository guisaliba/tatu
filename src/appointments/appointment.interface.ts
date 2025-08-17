import { Studio } from 'src/studios/studio.interface';
import { User } from 'src/users/user.interface';

export interface Appointment {
  id: string;
  user: User;
  studio: Studio;
  date: Date;
  duration: number;
  description: string;
  value: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
