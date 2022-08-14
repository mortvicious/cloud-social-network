import { IUserToRegister } from './../store/User/User.types';

class AuthAPI {
	static async login() {}
	static async logout() {}
	static async register(data: IUserToRegister) {}
	static async authenticate() {}
	static async refreshToken() {}
}

export default AuthAPI
