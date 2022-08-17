import { IUserRegister } from '../models/User/User.types'
import { ErrorHandler } from './ErrorHandler'

export class Validator {
	private static verified: boolean[] = []
	private static CheckEmail(email: string) {
		const regex = /^\S+@\S+\.\S+$/
		return regex.test(email)
	}
	private static CheckPassword(password: string) {
		return password.length > 8
	}
	private static CheckPasswordsMatch(password: string, repeatPassword: string) {
		return password === repeatPassword
	}
	private static CheckUsername(username: string) {
		return username.length < 20 && username.length > 2
	}
	private static CheckLink(link: string) {
		const regex = /^[A-Za-z0-9]*$/
		return regex.test(link) && link.length > 2
	}
	private static ResetVerified() {
		this.verified = []
	}
	private static GetErrors() {
		const indexes: any = this.verified.map((element, index) => {
			if (element === false) {
				return index
			}
		}).filter(element => element !== undefined)
		return indexes
	}
	private static ChainErrorHandler() {
		ErrorHandler.SetErrorsToWarnings(this.GetErrors())
	}


	public static ValidateAll(user: IUserRegister) {
		this.ResetVerified()
		this.verified.push(this.CheckEmail(user.email))
		this.verified.push(this.CheckPassword(user.password))
		this.verified.push(
			this.CheckPasswordsMatch(user.password, user.repeatPassword)
		)
		this.verified.push(this.CheckUsername(user.username))
		this.verified.push(this.CheckLink(user.link))
		this.ChainErrorHandler()
		return this.verified.every((el) => el === true)
	}
}
