import type { StudioMembership, UserRole, PaymentModel } from '@prisma/client';

export type StudioMembershipType = StudioMembership;

export type StudioMembershipWithUser = StudioMembership & {
  user: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
  };
};

export type StudioMembershipWithStudio = StudioMembership & {
  studio: {
    id: string;
    email: string | null;
    description: string | null;
  };
};

export type StudioMembershipWithAll = StudioMembership & {
  user: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  studio: {
    id: string;
    email: string | null;
    description: string | null;
  };
};

export type CreateMembershipInput = {
  userId: string;
  studioId: string;
  role?: UserRole;
  paymentModel: PaymentModel;
  paymentValue: number;
};

export type UpdateMembershipInput = Partial<
  Pick<StudioMembership, 'role' | 'paymentModel' | 'paymentValue'>
>;
