import { makeAutoObservable } from 'mobx'
import { IUser } from './User.types'

class User implements IUser {
	isAuth: boolean = false
	username: string = ''
	link: string = ''
	id: string = ''
	avatar: string = ''

	constructor() {
		makeAutoObservable(this)
	}

	setAuth(status: boolean) {
		this.isAuth = status
	}

	setUser(username: string, link: string, id: string, avatar: string) {
		this.username = username
		this.link = link
		this.id = id
		this.avatar = avatar
	}
}

export default new User()
