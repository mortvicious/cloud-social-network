import { IUserRegister } from "../models/User/User.types";

class AuthAPI {
	static async login() {}
	static async logout() {}
	static async register(data: IUserRegister) {}
	static async authenticate() {}
	static async refreshToken() {}
}

export default AuthAPI
