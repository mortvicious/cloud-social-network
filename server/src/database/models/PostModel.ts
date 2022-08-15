import { Schema, model, ObjectId } from 'mongoose'

interface IPost {

}

const postSchema = new Schema<IPost>({})

export const Post = model<IPost>('Post', postSchema)