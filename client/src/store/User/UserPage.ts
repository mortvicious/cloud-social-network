import { IUserPageModel } from './../../models/User/User.types';
import { makeAutoObservable } from "mobx"

class UserPage implements IUserPageModel {

    username = ''
    id = ''
    link = ''
    avatar = ''
    friends!: string[]
    posts!: string[]

    constructor() {
        makeAutoObservable(this)
    }

    setUserPage(user: IUserPageModel) {
        this.username = user.username
        this.id = user.id
        this.link = user.link
        this.avatar = user.avatar
        this.friends = user.friends
        this.posts = user.posts
    }
}

export default new UserPage()