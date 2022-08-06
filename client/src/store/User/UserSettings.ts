import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import { IUserSettings } from './User.types'

class UserSettings implements IUserSettings {

	constructor() {
		makeAutoObservable(this)
	}
}

export default new UserSettings()
