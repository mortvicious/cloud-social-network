import { IPostModel, IPostUserModel } from './Post.types'
import { PostUserModel } from './PostUserModel'

export class PostModel implements IPostModel {
	author!: IPostUserModel
	content = ''
	likes!: []
	comments!: []
	shares!: []
	date = ''
	id = ''
	link = ''

	constructor(
		author: IPostUserModel,
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
			PostUserModel.init(author),
			content,
			likes,
			comments,
			shares,
			date,
			id,
			link,
		)
	}
}
