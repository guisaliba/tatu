import type {
  Studio,
  Social,
  StudioMembership,
  Appointment,
  StudioPayment,
  Address,
} from '@prisma/client';

export type StudioType = Studio;

export type StudioWithAddress = Studio & {
  address: Address;
};

export type StudioWithSocials = Studio & {
  socials: Social[];
};

export type StudioWithMemberships = Studio & {
  memberships: (StudioMembership & {
    user: {
      id: string;
      username: string;
      firstName: string;
      lastName: string;
    };
  })[];
};

export type StudioWithAppointments = Studio & {
  appointments: Appointment[];
};

export type StudioWithPayments = Studio & {
  paymentsReceived: StudioPayment[];
};

export type StudioWithAll = Studio & {
  address: Address;
  socials: Social[];
  memberships: (StudioMembership & {
    user: {
      id: string;
      username: string;
      firstName: string;
      lastName: string;
    };
  })[];
  appointments: Appointment[];
  paymentsReceived: StudioPayment[];
};

export type CreateStudioInput = Omit<Studio, 'id'>;

export type UpdateStudioInput = Partial<Omit<Studio, 'id'>>;

export type StudioWithAddressInput = {
  email?: string;
  description?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
};
