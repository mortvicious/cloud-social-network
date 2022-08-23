import { Schema, model } from 'mongoose'
import {ICommunity} from '../../interfaces/ICommunity'
import {postSchema} from './PostModel'

export const communitySchema = new Schema<ICommunity>({
    name: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    admins: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    description: { type: String, default: '' },
    users: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    posts: [{ type: postSchema, ref: 'Post', default: [] }],
    blockList: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    settings: [{ type: Object }]
})

export const Community = model<ICommunity>('Community', communitySchema)
