import { IUserCoreModel } from '../User/User.types'

export interface IPostModel {
	content: string
	author: IUserCoreModel
	likes: []
	comments: []
	shares: []
	date: string
	link: string
	id: string
}
