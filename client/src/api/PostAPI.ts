import axios from 'axios'
import { INewPost } from '../store/NewPost/NewPost.types'

class PostAPI {
	static async createPost(data: INewPost) {
		try {
			const res = await axios.post('', {
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
