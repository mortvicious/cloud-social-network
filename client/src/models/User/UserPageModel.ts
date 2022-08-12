import { IUserPageModel } from './User.types'
import { UserCoreModel } from './UserCoreModel'

export class UserPageModel extends UserCoreModel implements IUserPageModel {
	friends = []
	posts = []

	constructor(
		username: string,
		id: string,
		avatar: string,
		link: string,
		friends: [],
		posts: []
	) {
		super(username, id, avatar, link)
		this.friends = friends
		this.posts = posts
	}
}
