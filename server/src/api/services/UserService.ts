import {User} from '../../database/models/UserModel'

export class UserService {
    static async GetUserPosts(userId: string) {
        try {
            return await User.findById(userId).select('posts')
        } catch (e) {
            return []
        }
    }
}