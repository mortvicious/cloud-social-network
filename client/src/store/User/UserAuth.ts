import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import { IUserAuth } from './User.types'

class UserAuth implements IUserAuth {
	friends = []

	constructor() {
		makeAutoObservable(this)
	}
}

export default new UserAuth()
