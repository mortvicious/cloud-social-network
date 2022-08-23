import {Document, ObjectId} from 'mongoose'

export interface IComment extends Document {
	user: ObjectId
	content: string
	likes: ObjectId[]
	replies: ObjectId[]
}


export interface IPost extends Document {
	user: ObjectId
	content: string
	likes: ObjectId[]
	comments: IComment[]
}