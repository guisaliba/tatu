import { Studio } from 'src/studios/interfaces/studio.interface';
import { User } from 'src/users/interfaces/user.interface';

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
