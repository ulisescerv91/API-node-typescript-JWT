import { Application, Router } from "express";

import { sayHello } from '../controllers/userCtrl';

export default (app: Application) => {
    const userRoute = Router();

    app.use('/api/user', userRoute);

    userRoute.get('/hello', sayHello);
};