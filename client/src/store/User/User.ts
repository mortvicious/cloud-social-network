import { makeAutoObservable } from 'mobx'
import { IUser } from './User.types'

class User implements IUser {
	isAuth: boolean = false
	username: string = ''
	link: string = ''
	id: string = ''
	avatar: string = ''
	token: string = ''

	constructor() {
		makeAutoObservable(this)
	}

	setAuth(status: boolean) {
		this.isAuth = status
	}

	setUser(username: string, link: string, id: string) {
		this.username = username
		this.link = link
		this.id = id
	}

	setToken(token: string) {
		this.token = token
	}

	
}

export default new User()
