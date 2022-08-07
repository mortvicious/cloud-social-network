import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import { IUser } from './User.types'

class User implements IUser {
	isAuth: boolean = false
	username: string = ''
	link: string = ''
	id: string = ''

	constructor() {
		makeAutoObservable(this)
	}
}

export default new User()
