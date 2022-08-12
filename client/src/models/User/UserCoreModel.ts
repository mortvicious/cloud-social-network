import { IUserCoreModel } from './User.types'

export class UserCoreModel implements IUserCoreModel {
	username = ''
	id = ''
	avatar = ''
	link = ''

	constructor(username: string, id: string, avatar: string, link: string) {
		this.username = username
		this.id = id
		this.avatar = avatar
		this.link = link
	}

	static init(user: IUserCoreModel) {
		return new UserCoreModel(user.username, user.id, user.avatar, user.link)
	}
}
