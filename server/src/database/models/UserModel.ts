import { Schema, model } from "mongoose";
import {IFriendRequests, IUser} from "../../interfaces/IUser";

const friendRequestsSchema = new Schema<IFriendRequests>({
	from: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	to: [{ type: Schema.Types.ObjectId, ref: 'User' }],
})

const settingsSchema = new Schema({

})

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    link: { type: String, required: true, unique: true },
    avatar: { type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    settings: [{type: settingsSchema, default: []}],
    communities: [{ type: Schema.Types.ObjectId, ref: 'Community' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    friendRequests: [{ type: friendRequestsSchema }],
    registrationDate: { type: Date, default: Date.now() },
    lastOnline: { type: Date }
})


export const User = model<IUser>('User', userSchema)