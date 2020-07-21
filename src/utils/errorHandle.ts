import { Request, Response } from "express";


export const errorHandler = async (error: any, req: Request, res: Response) => {
        return res.status(error.status).json(
                    {error: {
                            message: error.message
                        }
                    });
};
