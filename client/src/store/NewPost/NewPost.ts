import { makeAutoObservable } from 'mobx'
import { INewPost } from './NewPost.types'
import user from '../User/User'

class NewPost implements INewPost {

    readonly authorID = user.id
    content = ''

    constructor() {
        makeAutoObservable(this)
    }

    setContent(content: string) {
        this.content = content
    }

    getData() {
        return {
            authorID: this.authorID,
            content: this.content,
        }
    }
}

export default new NewPost()
