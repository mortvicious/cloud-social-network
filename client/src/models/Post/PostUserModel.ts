import {IPostUserModel} from './Post.types'

export class PostUserModel implements IPostUserModel {
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
}
