import { Router } from 'express';
import UserController from './app/controllers/UserController';

export const router = Router();

router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.delete('/users/:id', UserController.delete);
