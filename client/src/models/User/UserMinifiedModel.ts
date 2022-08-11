import { IUserMinifiedModel } from './User.types'

export class UserMinifiedModel implements IUserMinifiedModel {
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

	static init(author: IUserMinifiedModel) {
		return new UserMinifiedModel(
			author.username,
			author.id,
			author.avatar,
			author.link
		)
	}
}
