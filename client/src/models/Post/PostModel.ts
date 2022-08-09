import { IPostModel, IPostUserModel } from './Post.types'

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
}
