import { Schema, model } from "mongoose";
import {IFriendRequests, IUser} from "../../interfaces/IUser";
import {postSchema} from "./PostModel";

const friendRequestsSchema = new Schema<IFriendRequests>({
	from: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	to: [{ type: Schema.Types.ObjectId, ref: 'User' }],
})

const settingsSchema = new Schema({

})

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    link: { type: String, required: true, unique: true },
    avatar: { type: String },
    posts: [{ type: postSchema, ref: 'Post', default: [] }],
    settings: [{ type: settingsSchema, default: [] }],
    communities: [{ type: Schema.Types.ObjectId, ref: 'Community', default: [] }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    friendRequests: [{ type: friendRequestsSchema, default: [] }],
    registrationDate: { type: Date, default: Date.now() },
    lastOnline: { type: Date, default: Date.now() },
    blockList: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }]
})


export const User = model<IUser>('User', userSchema)