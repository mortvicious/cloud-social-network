import { IUserLogin } from './../models/User/User.types'
import { IUserToRegister } from './../store/User/User.types'
import userStore from '../store/User/User'
import axios from 'axios'

class AuthAPI {
	static async login(data: IUserLogin) {
		const { email, password } = data
		try {
			const { data } = await axios.post(
				'http://localhost:5000/api/auth/login',
				{
					email,
					password,
				}
			)
			userStore.setUser(data.user.username, data.user.link, data.user.id)
			userStore.setToken(data.token)
			console.log(data)
			// userStore.setAuth(true)
		} catch (e: any) {
			const error = e.response.data.message
			console.log(error)
			return error
		}
	}

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
			console.log(response.data)
			return response
		} catch (e: any) {
			const error = e.response.data.message
			return error
		}
	}

	static async authenticate() {
		try {
			const { data } = await axios.get(
				'http://localhost:5000/api/auth/authenticate',
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				}
			)
			userStore.setUsername(data.user.username)
			userStore.setToken(data.token)
			userStore.setId(data.id)
			userStore.isAuth = true
		} catch (e: any) {
			console.log(e.response.data.message)
			localStorage.removeItem('token')
			localStorage.removeItem('id')
		}
	}

	static async refreshToken() {}
}

export default AuthAPI
