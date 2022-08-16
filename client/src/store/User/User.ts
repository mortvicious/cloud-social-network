import { makeAutoObservable } from 'mobx'
import { IUser } from './User.types'

class User implements IUser {
	isAuth: boolean = false
	username: string | null = localStorage.getItem('username')
	link: string = ''
	id: string = ''
	avatar: string = ''
	token: string | null = localStorage.getItem('token')

	constructor() {
		makeAutoObservable(this)
	}

	setAuth(status: boolean) {
		this.isAuth = status
	}

	setUsername(username: string) {
		this.username = username
	}

	setId(id: string) {
		this.id = id
	}

	setUser(username: string, link: string, id: string) {
		this.username = username
		this.link = link
		this.id = id
		localStorage.setItem('username', username)
	}


	setUserFromAuth(username: string, id: string) {}

	setToken(token: string) {
		this.token = token
		localStorage.setItem('token', token)
	}
}

export default new User()
