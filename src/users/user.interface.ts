import { Appointment } from 'src/appointments/appointment.interface';
import { Social } from 'src/socials/social.interface';

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
