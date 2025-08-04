import { response, type RequestHandler } from 'express';
import UserRepository from '../repositories/UserRepository';

class UserController {
  constructor() {}
  index: RequestHandler = async (req, res, next) => {
    // Retrieve all records
    try {
      const users = await UserRepository.findAll();
      res.json(users);
    } catch (error) {
      next(error);
    }
  };

  public show: RequestHandler = async (req, res, next) => {
    // Retrieve one record
    try {
      const { id } = req.params;
      const user = await UserRepository.findOneBy(id);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(user);
    } catch (error) {
      next(error);
    }
  };

  public store: RequestHandler = async (req, res, next) => {
    // Create a new record
    try {
      await res.json();
    } catch (error) {
      next(error);
    }
  };

  public update: RequestHandler = async (req, res, next) => {
    // Update a record
    try {
      await res.json();
    } catch (error) {
      next(error);
    }
  };

  public delete: RequestHandler = async (req, res, next) => {
    // Delete a record
    try {
      const { id } = req.params;
      const user = await UserRepository.findOneBy(id);

      if (!user) {
        return response.status(404).json({ error: 'User not found' });
      }

      await UserRepository.delete(id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };
}

export default new UserController();
