import { Router } from 'express';
import AuthController from '../controllers/auth';

const router = Router();
const authController = new AuthController();

export const setAuthRoutes = (app) => {
    router.post('/login', authController.login);
    router.post('/logout', authController.logout);
    app.use('/auth', router);
};