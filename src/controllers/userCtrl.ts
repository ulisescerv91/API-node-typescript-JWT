import { Request, Response } from "express";

// Authentication
export const sayHello = async (req: Request, res: Response): Promise<Response | void> => {

    try {
        return res.status(201).json({'hello': "Hello"});
    } catch (error) {

    }



};