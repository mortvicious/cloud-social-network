import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import { IUserAuth } from './User.types'

interface IErrors {
	registration: string
	email: string
	password: string
	passwordMatch: string
	uniqueLink: string
}

class UserAuth implements IUserAuth {
	errors: IErrors = {
		registration: '',
		email: '',
		password: '',
		passwordMatch: '',
		uniqueLink: '',
	}

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
