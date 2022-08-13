import { Schema, model } from "mongoose";

interface IUser {

}

const userSchema = new Schema<IUser>({

})

export const User = model<IUser>('User', userSchema)