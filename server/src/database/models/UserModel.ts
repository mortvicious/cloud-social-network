import { Schema, model, ObjectId } from "mongoose";

interface IUser {
    email: string,
    username: string,
    password: string,
    link: string,
    avatar: string,
    posts: ObjectId[],
    settings: object[],
    communities: object[],
    registrationDate: Date,
    lastOnline: Date,
}

const userSchema = new Schema<IUser>({

})

export const User = model<IUser>('User', userSchema)