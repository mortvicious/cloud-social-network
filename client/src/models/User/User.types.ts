export interface IUserCoreModel {
	avatar: string
	username: string
	link: string
	id: string
	date?: string
}

export interface IUserPageModel extends IUserCoreModel {
	friends: string[]
	posts: string[]
}