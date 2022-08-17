import { Schema, model } from 'mongoose'
import {IComment} from "../../interfaces/IPost";

export const commentSchema = new Schema<IComment>({
	user: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
	content: {type: String, required: true},
	likes: [{type: Schema.Types.ObjectId, ref: 'User'}]
})

export const Comment = model<IComment>('Comment', commentSchema)
