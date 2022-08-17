import axios from 'axios'
import { INewPost } from '../store/NewPost/NewPost.types'

class PostAPI {
	static async CreatePost(data: INewPost) {
		try {
			const res = await axios.post('', {
				data,
			})
			return res
		} catch (e: any) {
			throw new Error(e)
		}
	}
	static async Remove() {}
	static async Edit() {}
	static async Like() {}
	static async Share() {}
	static async FlagAsInappropriate() {}
}

export default PostAPI
