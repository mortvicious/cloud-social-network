import { IUserCoreModel } from './User.types'

export class UserCoreModel implements IUserCoreModel {
    username = ''
    id = ''
    avatar = ''
    link = ''

    constructor(user: IUserCoreModel) {
        this.username = user.username
        this.id = user.id
        this.avatar = user.avatar
        this.link = user.link
    }

    static init(user: IUserCoreModel): IUserCoreModel {
        return new UserCoreModel(user)
    }
}
