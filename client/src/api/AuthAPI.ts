import axios, { AxiosResponse } from 'axios'

import {IUserCoreModel, IUserLogin} from './../models/User/User.types';
import {IUserToRegister} from './../store/User/User.types';
import userStore from '../store/User/User'

import APIMethodDict from './API.json';

// !TODO : Вывести переменную адреса доменав окружение. Явно будет удобнее.
const PRODUCTION_DOMEN = process.env.prodDomen || 'http://localhost:5000';

namespace Errors {
	export const enum Auth {
		CONTRACT = 'Not valid user contract'
	}
}

class AuthAPI {
	static async Login({ email, password }: IUserLogin) {

		try {

			return await axios.post(
				`${ PRODUCTION_DOMEN }/${ APIMethodDict.auth.login }`,
				{
					email,
					password,
				}
			)

		} catch (e: any) {

			const error = e.response.data.message
			console.log(error)
			return error

		}

	}

	static async Logout() {}

	static async Register<T extends object>({ email, username, password, link }: IUserToRegister): Promise<AxiosResponse<T>> {

	  const response = await axios.post<T>(
			`${ PRODUCTION_DOMEN }/${ APIMethodDict.auth.registration }`,
			{ email, username, password, link }
		)

		return response

	}

	static async Authenticate() {

		const Token = localStorage.getItem('token');

		// !TODO : Вывести обработку ошибок куда-то отдельно из тела функции
		if ( !Token ) throw new Error('Local user token is undefined')

		// !TODO : Выделить контракт между сервером в одельный тип/интерфейс
		type AuthenticateContract = {
			user: IUserCoreModel,
			token: string,
			// ? По идее ты хранишь ID в двух местах, если судить по интерфейсам. Если ID связанны, то это поле можно игнорировать.  
			id ?: IUserCoreModel['id'],
		}

		// !TODO : Вывести ключи в отдельный валидатор.
		const AuthenticateContractKeys: Array<keyof AuthenticateContract> = ['user', 'token', 'id']

		try {

			const { data } = await axios.get<AuthenticateContract>(
				// !TODO : Дополнить словарь методов 
				`${ PRODUCTION_DOMEN }/api/auth/authenticate`,
				{
					headers: {
						Authorization: `Bearer ${ localStorage.getItem('token') }`,
					},
				}
			)

			// ! : Если контракт между сервером поменяется, но ответ будет: Это к чертям положит биндинг пользователя.
			// ! : Так что, наверное, лучше провалидировать это даже внутри try-catch.
			// ? : Возможно стоит вывести отдельной функцией, чтобы не засорят метод...

			AuthenticateContractKeys.forEach((key) => {

				if ( data[ key ] === null ) throw Error(`${ Errors.Auth.CONTRACT }: Key ${ key } is undefined in response`);

				switch (key) {
					case 'user': 
						userStore.setUsername(data.user.username); break;
					case 'id':
						userStore.setId(data.id || data.user.id); break;
					case 'token':
						// ? Возможно тут должна быть валидация токена, и уже только потом его присваивание... Но это не мне решать.
						userStore.setToken(data.token); break
				}

			})	

			userStore.setAuth(true)

		} catch (e: any) {

			console.debug(e.response.data.message)

			localStorage.removeItem('token');
			localStorage.removeItem('id');

		}
	}
}

export default AuthAPI
