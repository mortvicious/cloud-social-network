export interface IPostModel {
	content: string
	author: IPostUserModel
	likes: []
	comments: []
	date: string
	link: string
	id: string
}

export interface IPostUserModel {
	avatar: string
	username: string
	link: string
	id: string
	date?: string
}
