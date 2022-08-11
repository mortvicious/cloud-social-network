import { IUserMinifiedModel } from '../User/User.types'

export interface IPostModel {
	content: string
	author: IUserMinifiedModel
	likes: []
	comments: []
	shares: []
	date: string
	link: string
	id: string
}
