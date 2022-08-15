import { Schema, model, ObjectId } from 'mongoose'

interface IComment {}

const commentSchema = new Schema<IComment>({})

export const Comment = model<IComment>('Comment', commentSchema)
