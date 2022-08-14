import { IUserRegister } from '../models/User/User.types'
import { ErrorHandler } from './ErrorHandler'

export class Validator {
	private static verified: boolean[] = []
	private static checkEmail(email: string) {
		const regex = /^\S+@\S+\.\S+$/
		return regex.test(email)
	}
	private static checkPassword(password: string) {
		return password.length > 8
	}
	private static checkPasswordsMatch(password: string, repeatPassword: string) {
		return password === repeatPassword
	}
	private static checkUsername(username: string) {
		return username.length < 20 && username.length > 2
	}
	private static checkLink(link: string) {
		const regex = /^[A-Za-z0-9]*$/
		return regex.test(link) && link.length > 2
	}
	private static resetVerified() {
		this.verified = []
	}
	private static getErrors() {
		const indexes: any = this.verified.map((element, index) => {
			if (element === false) {
				return index
			}
		}).filter(element => element !== undefined)
		return indexes
	}
	private static chainErrorHandler() {
		ErrorHandler.setErrorsToWarnings(this.getErrors())
	}


	public static validateAll(user: IUserRegister) {
		this.resetVerified()
		this.verified.push(this.checkEmail(user.email))
		this.verified.push(this.checkPassword(user.password))
		this.verified.push(
			this.checkPasswordsMatch(user.password, user.repeatPassword)
		)
		this.verified.push(this.checkUsername(user.username))
		this.verified.push(this.checkLink(user.link))
		this.chainErrorHandler()
		return this.verified.every((el) => el === true)
	}
}
