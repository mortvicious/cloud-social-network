import { Schema, model } from 'mongoose'
import {IPost} from "../../interfaces/IPost";
import {commentSchema} from "./CommentModel";


export const postSchema = new Schema<IPost>({
	user: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
	content: {type: String, required: true},
	likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
	comments: [commentSchema]
})

export const Post = model<IPost>('Post', postSchema)