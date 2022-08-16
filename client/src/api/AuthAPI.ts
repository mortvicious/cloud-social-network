import { IUserLogin } from './../models/User/User.types'
import { IUserToRegister } from './../store/User/User.types'
import axios from 'axios'

class AuthAPI {
	static async login(data: IUserLogin) {}
	static async logout() {}
	static async register(data: IUserToRegister) {
		const { email, username, password, link } = data
		console.log(data)
		try {
			const response = await axios.post(
				'http://localhost:5000/api/auth/registration',
				{
					email,
					username,
					password,
					link,
				}
			)
			return response
		} catch (e: any) {
			const error = e.response.data.errors
			return error
		}
	}
	static async authenticate() {}
	static async refreshToken() {}
}

export default AuthAPI
