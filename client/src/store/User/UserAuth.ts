import { makeAutoObservable } from 'mobx'
import { IUserLogin, IUserRegister } from '../../models/User/User.types'
import { IUserToRegister } from './User.types'

class UserAuth implements IUserRegister {
	
	email = ''
	password = ''
	repeatPassword = ''
	username = ''
	link = ''

	constructor() {
		makeAutoObservable(this)
	}

	setEmail(email: string) {
		this.email = email
	}
	setPassword(password: string) {
		this.password = password
	}
	setRepeatPassword(password: string) {
		this.repeatPassword = password
	}
	setUsername(username: string) {
		this.username = username
	}
	setLink(link: string) {
		this.link = link
	}
	setUserParams(id: string, data: string) {
		switch (id) {
			case 'formBasicEmail':
				this.setEmail(data)
				break
			case 'formBasicPassword':
				this.setPassword(data)
				break
			case 'formBasicRepeatPassword':
				this.setRepeatPassword(data)
				break
			case 'formBasicUsername':
				this.setUsername(data)
				break
			case 'formBasicLink':
				this.setLink(data)
				break
			default:
				break
		}
	}

	resetUserParams(): void {
		this.email = ''
		this.password = ''
		this.link = ''
		this.username = ''
	}

	getUserToValidate(): IUserRegister {
		return {
			email: this.email,
			password: this.password,
			repeatPassword: this.repeatPassword,
			username: this.username,
			link: this.link,
		}
	}
	getUserToRegistration(): IUserToRegister {
		return {
			email: this.email,
			password: this.password,
			username: this.username,
			link: this.link
		}
	}
	getUserToLogin(): IUserLogin {
		return {
			email: this.email,
			password: this.password
		}
	}
}

export default new UserAuth()
