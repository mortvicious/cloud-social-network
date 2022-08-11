import { IPostModel } from './Post.types'
import { IUserMinifiedModel } from '../User/User.types'
import { UserMinifiedModel } from '../User/UserMinifiedModel'

export class PostModel implements IPostModel {
	author!: IUserMinifiedModel
	content = ''
	likes!: []
	comments!: []
	shares!: []
	date = ''
	id = ''
	link = ''

	constructor(
		author: IUserMinifiedModel,
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
			UserMinifiedModel.init(author),
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
