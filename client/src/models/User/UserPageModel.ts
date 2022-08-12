import { IUserPageModel } from './User.types'
import { UserCoreModel } from './UserCoreModel'

export class UserPageModel extends UserCoreModel implements IUserPageModel {
	friends: string[] = []
	posts: string[] = []

	constructor(
		username: string,
		id: string,
		avatar: string,
		link: string,
		friends: string[],
		posts: string[]
	) {
		super(username, id, avatar, link)
		this.friends = friends
		this.posts = posts
	}


    static init(user: IUserPageModel): IUserPageModel {
		return new UserPageModel(
			user.username,
			user.id,
			user.avatar,
			user.link,
			user.friends,
			user.posts
		)
	}
}
