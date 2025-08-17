import { Studio } from 'src/studios/interfaces/studio.interface';

export interface Address {
  id: number;
  street: string;
  city: string;
  state: string;
  complementaryInfo: string;
  postalCode: string;
  country: string;
  studio?: Studio;
  createdAt: Date;
  updatedAt: Date;
}
