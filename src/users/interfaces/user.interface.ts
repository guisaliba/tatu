import { Appointment } from 'src/appointments/interfaces/appointment.interface';
import { Social } from 'src/users/interfaces/social.interface';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  socials: Social[];
  appointments: Appointment[];
  createdAt: Date;
  updatedAt: Date;
}
