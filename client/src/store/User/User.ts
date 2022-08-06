import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import { IUser } from './User.types'

class User implements IUser {
	isAuth: boolean = false
	username = ''
	link = ''
	id = ''

	constructor() {
		makeAutoObservable(this)
	}
}

export default new User()
