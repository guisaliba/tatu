export enum UserRole {
  ARTIST = 'artist',
  OWNER = 'owner',
  ADMIN = 'admin',
}

export enum PaymentModel {
  PERCENTAGE = 'percentage',
  FIXED_FEE = 'fixed_fee',
}

export enum AppointmentStatus {
  SCHEDULED = 'scheduled',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export enum PaymentStatus {
  PENDING = 'pending',
  PAID = 'paid',
  OVERDUE = 'overdue',
}
