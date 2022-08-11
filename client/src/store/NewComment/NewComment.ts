import { makeAutoObservable } from 'mobx'
import user from '../User/User'
import { INewComment } from './NewComment.types'

class NewComment implements INewComment {

	readonly authorID = user.id
	postID = ''
	content = ''

	constructor() {
		makeAutoObservable(this)
    }
    
    setComment(id: string, content: string) {

    }

    getData() {
        return {
            authorID: this.authorID,
            postID: this.postID,
            content: this.content
        }
    }
}

export default new NewComment()
