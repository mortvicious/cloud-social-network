import { IUserLogin } from './../models/User/User.types';
import { IUserToRegister } from './../store/User/User.types';

class AuthAPI {
	static async login(data: IUserLogin) {}
	static async logout() {}
	static async register(data: IUserToRegister) {}
	static async authenticate() {}
	static async refreshToken() {}
}

export default AuthAPI
