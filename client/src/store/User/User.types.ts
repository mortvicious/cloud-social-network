export interface IUser {
	isAuth: boolean
	username: string | null
	id: string
	link: string
	avatar: string 
	token: string | null
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

export interface IUserToRegister {
	email: string
	username: string
	password: string
	link: string
}