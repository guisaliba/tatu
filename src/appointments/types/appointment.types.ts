import type {
  Appointment,
  CustomerCharge,
  StudioPayment,
} from '@prisma/client';

// Basic Appointment type from Prisma
export type AppointmentType = Appointment;

// Appointment with relations
export type AppointmentWithStudio = Appointment & {
  studio: {
    id: string;
    email: string | null;
    description: string | null;
  };
};

export type AppointmentWithArtist = Appointment & {
  artist: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
  };
};

export type AppointmentWithPayments = Appointment & {
  customerCharge?: CustomerCharge | null;
  studioPayment?: StudioPayment | null;
};

// Complete appointment with all relations
export type AppointmentWithAll = Appointment & {
  studio: {
    id: string;
    email: string | null;
    description: string | null;
  };
  artist: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
  };
  customerCharge?: CustomerCharge | null;
  studioPayment?: StudioPayment | null;
};

// Input types for creating/updating appointments
export type CreateAppointmentInput = Omit<
  Appointment,
  'id' | 'createdAt' | 'updatedAt'
>;

export type UpdateAppointmentInput = Partial<
  Omit<Appointment, 'id' | 'createdAt' | 'updatedAt'>
>;
