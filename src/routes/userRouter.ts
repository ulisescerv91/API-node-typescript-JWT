import { Application, Router } from "express";

import { addUser } from '../controllers/userCtrl';

export default (app: Application) => {
    const userRoute = Router();

    app.use('/api/user', userRoute);

    userRoute.post('/addUser', addUser);

};