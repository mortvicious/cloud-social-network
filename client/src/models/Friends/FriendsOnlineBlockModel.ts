import { IUserMinifiedModel } from "../User/User.types";
import { IFriendsOnlineBlockModel } from "./Friends.types";

export class FriendsOnlineBlockModel implements IFriendsOnlineBlockModel {

    friends!: IUserMinifiedModel[]

    constructor() {
        
    }
}