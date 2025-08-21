import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all users message', () => {
      const result = controller.findAll();
      expect(result).toBe('This action returns all users');
    });
  });

  describe('find', () => {
    it('should return user by id message', () => {
      const id = '123';
      const result = controller.find(id);
      expect(result).toBe(`This action returns user with id: ${id}`);
    });
  });

  describe('create', () => {
    it('should return create user message', () => {
      const createUserDto = { name: 'John Doe', email: 'john@example.com' };
      const result = controller.create(createUserDto);
      expect(result).toBe(
        `This action creates a new user with data: ${JSON.stringify(createUserDto)}`
      );
    });
  });

  describe('update', () => {
    it('should return update user message', () => {
      const id = '123';
      const updateUserDto = { name: 'Jane Doe' };
      const result = controller.update(id, updateUserDto);
      expect(result).toBe(
        `This action updates user with id: ${id} with data: ${JSON.stringify(updateUserDto)}`
      );
    });
  });

  describe('delete', () => {
    it('should return delete user message', () => {
      const id = '123';
      const result = controller.delete(id);
      expect(result).toBe(`This action deletes user with id: ${id}`);
    });
  });
});
