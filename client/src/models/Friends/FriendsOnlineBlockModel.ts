import { IUserCoreModel } from '../User/User.types'
import { IFriendsOnlineBlockModel } from './Friends.types'

export class FriendsOnlineBlockModel implements IFriendsOnlineBlockModel {
    friends!: IUserCoreModel[]

}
