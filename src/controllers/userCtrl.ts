import { Request, Response } from "express";
import { default as User } from "../models/User";

import { promiseWrapper } from "../utils/promiseWrapper";
import { errorHandler } from "../utils/errorHandle";

// Authentication
export const addUser = async (req: Request, res: Response): Promise<Response | void> => {

    try {
        const {
            userName, city, age, password
        } = req.body; // Data request

        const newUser = new User({
            userName, city, age, password
        });

        const { data: userData, error: UserError } = await promiseWrapper(
            newUser.save()
        ); // Save new user

        if (UserError) throw {status: 400, message: UserError};    
        return res.status(200).json({ message: "User Added" });
        
    } catch (error) {
        errorHandler(error, req, res);
    }



};