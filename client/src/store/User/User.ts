import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import { IUser } from './User.types'

class User implements IUser {
	isAuth: boolean = false
	username: string = ''
	link: string = ''
	id: string = ''

	constructor() {
		makeAutoObservable(this)
	}

	setAuth(status: boolean) {
		this.isAuth = status
	}
}

export default new User()
