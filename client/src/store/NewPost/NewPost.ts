import { makeAutoObservable } from 'mobx'
import { INewPost } from './NewPost.types'
import user from '../User/User'

class NewPost implements INewPost {
	author = user.id
	content = ''

	constructor() {
		makeAutoObservable(this)
	}

	setContent(content: string) {
		this.content = content
	}
}

export default new NewPost()
