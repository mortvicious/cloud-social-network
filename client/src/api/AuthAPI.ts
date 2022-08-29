import axios, { AxiosResponse } from 'axios'
import {IUserLogin} from './../models/User/User.types'
import {IUserToRegister} from './../store/User/User.types'
import userStore from '../store/User/User'
import APIMethods from './API.json'
import APIErrors from './APIErrors/APIErrors'

// Utils
import { Dict } from '../utils/index'

// Contracts
import { AuthenticateContract } from '../interfaces/auth/Autanticate.contract'

// Mocks
import { mockAuthContract } from '../mock/mockAuthContract'

class AuthAPI {
    private static AuthAPIMethods = APIMethods.auth
    // !TODO : Вывести переменную адреса доменав окружение. Явно будет удобнее.
    private static PRODUCTION_DOMEN = process.env.prodDomen || 'http://localhost:5000'

    static async Login({ email, password }: IUserLogin) {

        try {

            return await axios.post(
                `${ AuthAPI.PRODUCTION_DOMEN }/${ this.AuthAPIMethods.login }`,
                {
                    email,
                    password,
                }
            )

        } catch (e) {

            const error = e.response.data.message
            console.log(error)
            return error

        }

    }

    static async Logout() {}

    static async Register<T extends object>({ email, username, password, link }: IUserToRegister): Promise<AxiosResponse<T>> {

        const response = await axios.post<T>(
            `${ AuthAPI.PRODUCTION_DOMEN }/${ this.AuthAPIMethods.registration }`,
            { email, username, password, link }
        )

        return response

    }

    static async Authenticate() {

        const Token = localStorage.getItem('token')

        // !TODO : Вывести обработку ошибок куда-то отдельно из тела функции
        if ( !Token ) throw new Error('Local user token is undefined')

        try {

            const { data } = await axios.get<AuthenticateContract>(
                `${ AuthAPI.PRODUCTION_DOMEN }/${ this.AuthAPIMethods.authenticate }`,
                {
                    headers: {
                        Authorization: `Bearer ${ Token }`,
                    },
                }
            )

            // ! : Если контракт между сервером поменяется, но ответ будет: Это к чертям положит биндинг пользователя.
            // ! : Так что, наверное, лучше провалидировать это даже внутри try-catch.
            // ? : Возможно стоит вывести отдельной функцией, чтобы не засорять метод...

            Dict.keys(mockAuthContract).forEach(key => {

                if ( data[ key ] === null ) throw Error(`${ APIErrors.Auth.CONTRACT }: Key ${ key } is undefined in response`)

                switch (key) {
                case 'user': 
                    userStore.setUsername(data.user.username); break
                case 'id':
                    userStore.setId(data.id || data.user.id); break
                case 'token':
                    // ? Возможно тут должна быть валидация токена, и уже только потом его присваивание... Но это не мне решать.
                    userStore.setToken(data.token); break
                }

            })	

            userStore.setAuth(true)

        } catch (e) {

            // ? : Опять же, не факт что мы вообще получим этот message. Так что лучше будет его заранее задать.
            // console.debug(e.response.data.message)

            e instanceof Error
                ? console.debug(e.message)
                : console.debug(APIErrors.Auth.UNDEFINED, e)

            localStorage.removeItem('token')
            localStorage.removeItem('id')

        }
    }

}

export default AuthAPI
