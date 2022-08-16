import {Schema, model, ObjectId, Document} from 'mongoose'

interface IFileSchema extends Document {
    name: string
    type: string
    accessLink: string
    size: number
    path: string
    user: ObjectId
    parent: ObjectId
    childs: ObjectId
}

const fileSchema = new Schema<IFileSchema>({
    name: { type: String, required: true },
    type: {type: String, required: true },
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    accessLink: {type: String},
    size: { type: Number, default: 0 },
    path: { type: String, default: '' },
    parent: {type: Schema.Types.ObjectId, ref: 'File'},
    childs: [{type: Schema.Types.ObjectId, ref: 'File'}]
})

export const File = model<IFileSchema>('File', fileSchema) 