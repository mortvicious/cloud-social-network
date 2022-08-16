import { Request } from 'express'
import { JwtPayload } from 'jsonwebtoken'

export interface IJwtPayloadId extends JwtPayload {
    id?: string | undefined
}

export interface IGetUserAuthInfoRequest extends Request {
	user?: IJwtPayloadId | string
}
