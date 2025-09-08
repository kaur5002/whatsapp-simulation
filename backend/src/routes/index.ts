import { Router } from 'express';
import { setAuthRoutes } from './auth';

const router = Router();

export const setRoutes = (app) => {
    setAuthRoutes(router);
    app.use('/api', router);
};