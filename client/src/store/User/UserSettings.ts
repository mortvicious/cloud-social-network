import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import { IUserSettings } from './User.types'

class UserSettings implements IUserSettings {
    settings: object = {}
    constructor() {
        makeAutoObservable(this)
    }
}

export default new UserSettings()
