export type DomainUser = {
  id: string;
  email: string;
  username?: string; // Temporary field: included for legacy user migration. Will be removed after migration is complete
  firstName?: string; // Temporary field: included for legacy user migration. Will be removed after migration is complete
  lastName?: string; // Temporary field: included for legacy user migration. Will be removed after migration is complete
  createdAt: Date;
};
