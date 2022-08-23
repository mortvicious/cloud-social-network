import { makeAutoObservable } from 'mobx'
import user from '../User/User'
import { INewComment } from './NewComment.types'

class NewComment implements INewComment {

    readonly authorID = user.id
    content = ''

    constructor() {
        makeAutoObservable(this)
    }
    
    setContent(content: string) {
        this.content = content
    }

    resetCommentStore() {
        this.content = ''
    }

    getData() {
        return {
            authorID: this.authorID,
            content: this.content
        }
    }
}

export default new NewComment()
