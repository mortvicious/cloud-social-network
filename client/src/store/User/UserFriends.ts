import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import { IUserFriends } from './User.types'

class Friends implements IUserFriends {
    friends = []

    constructor() {
        makeAutoObservable(this)
    }

    getFriendRequests() {}
    friendRequestAccept() {}
    friendRequestDecline() {}
    friendRequestSend() {}
    friendRemove() {}
}

export default new Friends()
