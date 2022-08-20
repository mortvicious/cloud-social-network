//import { User } from '../../database/models/UserModel'
import {FriendsService} from "./FriendsService";
import {Sorter} from "../../helpers/Sorter";
import {UserService} from "./UserService";
import {CommunitiesService} from "./CommunitiesService";

export class FeedService {
    static async GetUserFeedPosts(userId: string) {
        try {
            const friends: string[] = await FriendsService.GetUserFriendList(userId) as string[]
            const communities: string[] = await CommunitiesService.GetUserCommunitiesList(userId) as string[]
            const posts = await this.PrepareFeedPosts(friends, communities)
            return posts
        } catch (e) {
            return []
        }
    }
    
    static async GetUserFriendsFeedPosts(friends: string[]) {
        try {
            let posts = []
            for (const friend of friends) {
                const friendPosts = await UserService.GetUserPosts(friend)
                posts = posts.concat(friendPosts)
            }
            return posts
        } catch (e) {
            return []
        }
    }
    
    static async GetUserCommunitiesFeedPosts(communities: string[]) {
        try {
            let posts = []
            for (const community of communities) {
                const communityPosts = await CommunitiesService.GetCommunityPosts(community)
                posts = posts.concat(communityPosts)
            }
            return posts
        } catch (e) {
            return []
        }
    }
    
    static async PrepareFeedPosts(friends: string[], communities: string[]) {
        try {
            const friendsPosts = await this.GetUserFriendsFeedPosts(friends)
            const communitiesPosts = await this.GetUserCommunitiesFeedPosts(communities)
            const posts = friendsPosts.concat(communitiesPosts)
            return Sorter.SortObjectsInArrByDate(posts)
        } catch(e) {
            return []
        }
    }
}