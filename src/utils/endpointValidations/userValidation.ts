import { Request, Response, NextFunction } from 'express';
import Joi from  "@hapi/joi";
import { errorHandler } from "../errorHandle";


export const addUserValidations = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const schema = Joi.object({
            userName: Joi.string().empty().required().min(1).max(30).messages({
                "string.base": `El Campo "userName" Debe ser alfanumerico'`,
                "string.empty": `El Campo "userName" No puede estar vacio`,
                "any.required": `El Campo "userName" es requerido`,
                "string.min": `El Campo "userName" debe tener un minimo de {#limit} caracteres`,
                "string.max": `El Campo "userName" debe de tener un maximo de {#limit} caracteres`
            }),
            city: Joi.string().empty().required().min(1).max(20).messages({
                "string.base": `El Campo "city" Debe ser alfanumerico'`,
                "string.empty": `El Campo "city" No puede estar vacio`,
                "any.required": `El Campo "city" es requerido`,
                "string.min": `El Campo "city" debe tener un minimo de {#limit} caracteres`,
                "string.max": `El Campo "city" debe de tener un maximo de {#limit} caracteres`
            }),
            age: Joi.number().empty().min(1).max(200).required().messages({
                        "number.base": `El Campo "age" Debe ser numerico'`,
                        "number.empty": `El Campo "age" No puede estar vacio`,
                        "any.required": `El Campo "age" es requerido`,
                        "number.min": `El Campo "age" debe tener un minimo de 1 caracteres`,
                        "number.max": `El Campo "age" debe de tener un maximo de 10 caracteres`
            }),
            password: Joi.string().empty().required().min(1).max(100).messages({
                "string.base": `El Campo "password" Debe ser alfanumerico'`,
                "string.empty": `El Campo "password" No puede estar vacio`,
                "any.required": `El Campo "password" es requerido`,
                "string.min": `El Campo "password" debe tener un minimo de {#limit} caracteres`,
                "string.max": `El Campo "password" debe de tener un maximo de {#limit} caracteres`
            }),
        });
        const value = await schema.validate(req.body);
        if (value.error) {
            throw {status: 400, message: value.error.details[0].message};
        } else {
            next();
        }

    } catch (error) {
        errorHandler(error, req, res);
    }

}; // MIDDLEWARE
