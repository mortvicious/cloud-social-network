import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import { IUserAuth } from './User.types'

class UserAuth implements IUserAuth {
	constructor() {
		makeAutoObservable(this)
	}

	login() {}
	logout() {}
	registration() {}
	setToken() {}
	authenticate() {}
	setError() {}
}

export default new UserAuth()
