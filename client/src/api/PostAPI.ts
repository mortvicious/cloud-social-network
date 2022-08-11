import axios from 'axios'
import { INewPost } from '../store/NewPost/NewPost.types'

enum Routes {
	ADD = '/api/post/add',
	REMOVE = '/api/post/remove',
	EDIT = '',
	LIKE = '',
	SHARE = '',
	FLAG_AS_INAPPROPRIATE = '',
	FETCH_POST_USER_DATA = '',
}

class PostAPI {
	static async createPost(data: INewPost) {
		try {
			const res = await axios.post(Routes.ADD, {
				data,
			})
			return res
		} catch (e: any) {
			throw new Error(e)
		}
	}
	static async remove() {}
	static async edit() {}
	static async like() {}
	static async share() {}
	static async flagAsInappropriate() {}
}

export default PostAPI
