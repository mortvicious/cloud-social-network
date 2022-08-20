import {Document, ObjectId} from "mongoose";

export interface IFriendRequests extends Document {
	from: ObjectId[]
	to: ObjectId[]
}

export interface IUser extends Document {
	email: string,
	username: string,
	password: string,
	link: string,
	avatar: string,
	posts: object[],
	settings: object[],
	communities: ObjectId[],
	friends: ObjectId[],
	friendRequests: object[],
	registrationDate: Date,
	lastOnline: Date,
	blockList: ObjectId[]
}
