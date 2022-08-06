export interface IUser {
    isAuth: boolean
    username: string
    id: string
    link: string
}

export interface IUserFriends {
    friends: string[]
    getFriendRequests: () => void
    friendRequestAccept: () => void
    friendRequestDecline: () => void
    friendRequestSend: () => void
    friendRemove: () => void

}

export interface IUserSettings {

}

export interface IUserAuth {

}