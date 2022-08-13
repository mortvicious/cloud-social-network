import axios from 'axios'
import { IUserPageModel } from './../models/User/User.types'

class UserAPI {
	static async changeSettings() {}
	static async getUserPageData(userID: string) {
		try {
			const data: IUserPageModel = await axios.post('', {
				userID,
			})
			return data
		} catch (e: any) {
			throw new Error(e)
		}
    }
    static async getUserFeedPosts(userID: string) {
        
    }
}

export default UserAPI
