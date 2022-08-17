import { IGetUserAuthInfoRequest } from 'src/interfaces/IGetUserAuthInfoReq';
import { Response } from 'express'

export class UserController {
	static async uploadAvatar(req: IGetUserAuthInfoRequest, res: Response) {
		const id = req.user.id
	}
	static async getAvatarPath(req: IGetUserAuthInfoRequest, res: Response) {
		const id = req.user.id
	}
}