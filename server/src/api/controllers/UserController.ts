import { IGetUserAuthInfoRequest } from 'src/interfaces/IGetUserAuthInfoReq';
import { Response } from 'express'
import { User } from '../../database/models/UserModel'

export class UserController {
	static async uploadAvatar(req: IGetUserAuthInfoRequest, res: Response) {
		const id = req.user.id
	}
	static async getAvatarPath(req: IGetUserAuthInfoRequest, res: Response) {
		const id = req.user.id
	}
}