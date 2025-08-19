import { Address } from 'src/studios/interfaces/address.interface';
import { Appointment } from 'src/appointments/interfaces/appointment.interface';
import { Social } from 'src/users/interfaces/social.interface';

export interface Studio {
  id: string;
  name: string;
  description?: string;
  address?: Address;
  socials?: Social[];
  appointments?: Appointment[];
  createdAt: Date;
  updatedAt: Date;
}
