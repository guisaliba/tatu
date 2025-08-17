import { Address } from 'src/addresses/address.interface';
import { Appointment } from 'src/appointments/appointment.interface';
import { Social } from 'src/socials/social.interface';

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
