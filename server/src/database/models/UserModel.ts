import { Schema, model, ObjectId, Document } from "mongoose";

export interface IUser extends Document {
    email: string,
    username: string,
    password: string,
    link: string,
    avatar: string,
    posts: ObjectId[],
    settings: object[],
    communities: ObjectId[],
    friends: ObjectId[],
    friendRequests: object[],
    registrationDate: Date,
    lastOnline: Date,
}

interface IFriendRequests extends Document {
    from: ObjectId[]
    to: ObjectId[]
}

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
    friendRequests: friendRequestsSchema,
    registrationDate: { type: Date, default: Date.now() },
    lastOnline: { type: Date }
})


export const User = model<IUser>('User', userSchema)