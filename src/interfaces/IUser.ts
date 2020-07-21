import { Model, Document } from "mongoose";

export interface IUsers extends Document {
    userName: string;
    city: string;
    age: number;
    password: string;
}
