import { IJwtPayloadId } from './../../interfaces/IGetUserAuthInfoReq';
import { IGetUserAuthInfoRequest } from 'src/interfaces/IGetUserAuthInfoReq';
import { NextFunction, Response } from 'express'
import jwt from 'jsonwebtoken'

export = (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
	if (req.method === 'OPTIONS') return next()

	try {
		const token = req.headers.authorization.split(' ')[1]
		if (!token) {
			res.status(401).json({ message: 'Auth error' })
		}
		const decoded: IJwtPayloadId | string = jwt.verify(token, process.env.SECRET_KEY)
		req.user = decoded
		next()
	} catch (e) {
		return res.status(401).json({ message: 'Auth error' })
	}
}
