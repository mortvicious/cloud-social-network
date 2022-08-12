import { IPostModel } from './Post.types'
import { IUserCoreModel } from '../User/User.types'
import { UserCoreModel } from '../User/UserCoreModel'

export class PostModel implements IPostModel {
	author!: IUserCoreModel
	content = ''
	likes!: []
	comments!: []
	shares!: []
	date = ''
	id = ''
	link = ''

	constructor(
		author: IUserCoreModel,
		content: string,
		likes: [],
		comments: [],
		shares: [],
		date: string,
		id: string,
		link: string
	) {
		this.author = author
		this.content = content
		this.likes = likes
		this.comments = comments
		this.date = date
		this.id = id
		this.link = link
		this.shares = shares
	}

	static init(post: IPostModel) {
		const { author, content, likes, comments, date, id, link, shares } = post
		return new PostModel(
			UserCoreModel.init(author),
			content,
			likes,
			comments,
			shares,
			date,
			id,
			link
		)
	}
}
