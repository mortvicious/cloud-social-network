import { User } from '../../database/models/UserModel'
import { Community } from '../../database/models/CommunityModel'

export class CommunitiesService {
    static async GetUserCommunitiesList(userId: string) {
        try {
            return await User.findById(userId).select('communities')
        } catch (e) {
            return []
        }
    }
    
    static async GetCommunityPosts(communityId: string) {
        try {
            return await Community.findById(communityId).select('posts')
        } catch (e) {
            return []
        }
    }
}