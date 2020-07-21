import express from "express";

import userRoute from './userRouter';


export default (app: express.Application) => {
    userRoute(app);
};