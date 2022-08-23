import {ObjectId} from 'mongoose'
import {IPost} from './IPost'

export interface ICommunity {
    name: string,
    owner: ObjectId,
    admins: ObjectId[],
    description: string,
    users: ObjectId[]
    posts: IPost[]
    blockList: ObjectId[]
    settings: object[]
}