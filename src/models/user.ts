import { Schema, model } from "mongoose";
import { IUsers } from "../interfaces/IUser";

const UserSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    city: {type: String, required: true},
    age: { type: Number, required: true},
    password: {type: String, required: true}
}); // Data to save in DB


const User = model<IUsers>("User", UserSchema);
export default User;
