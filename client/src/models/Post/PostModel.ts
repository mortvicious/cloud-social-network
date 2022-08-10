import { IPostModel, IPostUserModel } from './Post.types'
import { PostUserModel } from './PostUserModel'

export class PostModel implements IPostModel {
	author!: IPostUserModel
	content = ''
	likes!: []
	comments!: []
	date = ''
	id = ''
	link = ''

	constructor(
		author: IPostUserModel,
		content: string,
		likes: [],
		comments: [],
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
	}

	static init(post: IPostModel) {
		const { author, content, likes, comments, date, id, link } = post
		return new PostModel(
			PostUserModel.init(author),
			content,
			likes,
			comments,
			date,
			id,
			link
	)}
}
