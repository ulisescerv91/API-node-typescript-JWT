import { Application, Router,Request,Response } from "express";

import { addUser } from '../controllers/userCtrl';
import { addUserValidations } from '../utils/endpointValidations/userValidation'

export default (app: Application) => {
    const userRoute = Router();

    app.use('/api/user', userRoute);

    userRoute.post('/addUser', addUserValidations ,addUser);

};