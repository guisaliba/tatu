import { v4 } from 'uuid';

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

let users: User[] = [
  {
    id: v4(),
    name: 'guisaliba',
    email: 'guisaliba@email.com',
    phone: '31994728390',
  },
  {
    id: v4(),
    name: 'bieu-bobo',
    email: 'bieu-bobo@email.com',
    phone: '31994327874',
  },
  {
    id: v4(),
    name: 'ellenp.ink',
    email: 'ellenp.ink@email.com',
    phone: '3199423784',
  },
];

class UserRepository {
  constructor() {}

  public findAll = async (): Promise<User[]> => {
    return new Promise((resolve) => {
      resolve(users);
    });
  };

  public findOneBy = async (id: string): Promise<User> => {
    return new Promise((resolve) =>
      resolve(users.find((user) => user.id === id))
    );
  };

  public delete = async (id: string): Promise<void> => {
    return new Promise((resolve) => {
      users = users.filter((user) => user.id !== id);
      resolve();
    });
  };
}

export default new UserRepository();
