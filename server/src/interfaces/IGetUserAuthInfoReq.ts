import { Request } from 'express'
import { JwtPayload } from 'jsonwebtoken'
import mongoose from 'mongoose'

export interface IJwtPayloadId extends JwtPayload {
    id?: string | undefined
}

export interface IGetUserAuthInfoRequest extends Request {
	user?: IJwtPayloadId
}

export interface IGetUserAuthInfoRequestMongoose extends IGetUserAuthInfoRequest {
    user? : mongoose.ObjectId
}