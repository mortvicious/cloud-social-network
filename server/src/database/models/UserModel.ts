import { Schema, model, ObjectId, Document } from "mongoose";

interface FriendRequests {
    requestType: string,
    id: ObjectId
}

interface IUser extends Document {
    email: string,
    username: string,
    password: string,
    link: string,
    avatar: string,
    posts: ObjectId[],
    settings: object[],
    communities: ObjectId[],
    friends: ObjectId[],
    friendRequests: object,
    registrationDate: Date,
    lastOnline: Date,
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    link: { type: String, required: true, unique: true },
    avatar: { type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    // settings: [{type: }]
    communities: [{ type: Schema.Types.ObjectId, ref: 'Community' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    friendRequests: {
        type: Object,
        default: {
            from: [],
            to: []
        }
    }
})

export const User = model<IUser>('User', userSchema)