import {User} from '../../database/models/UserModel'

export class FriendsService {
	static async AddToFriendsRequests(userId: string, candidateId: string) {
		
	}
	static async RemoveFromFriendsRequests(userId: string, candidateId: string) {
		
	}
	static async AddToFriendsList(userId: string, candidateId: string) {
		
	}
	static async RemoveFromFriendsList(userId: string, candidateId: string) {
		
	}
	static async GetUserFriendList(userId) {
		try {
			return await User.findById(userId).select('friends')
		} catch (e) {
			return []
		}
	}
	
	static async CombineSortedFriendsPosts(posts) {
		try {
			
		} catch (e) {
			
		}
	}
}