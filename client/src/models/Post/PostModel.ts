import { IPostModel } from './Post.types'
import { IUserCoreModel } from '../User/User.types'
import { UserCoreModel } from '../User/UserCoreModel'

export class PostModel implements IPostModel {
    author!: IUserCoreModel
    content = ''
    likes!: []
    comments!: []
    shares!: []
    date = ''
    id = ''
    link = ''

    // constructor(
    //     author: IUserCoreModel,
    //     content: string,
    //     likes: [],
    //     comments: [],
    //     shares: [],
    //     date: string,
    //     id: string,
    //     link: string
    // ) {
    //     this.author = author
    //     this.content = content
    //     this.likes = likes
    //     this.comments = comments
    //     this.date = date
    //     this.id = id
    //     this.link = link
    //     this.shares = shares
    // }

    constructor(author: IUserCoreModel, post: IPostModel) {
        this.author = author
        this.content = post.content
        this.likes = post.likes
        this.comments = post.comments
        this.date = post.date
        this.link = post.link
        this.shares = post.shares
    }


    static init(post: IPostModel) {
        const { author } = post
        return new PostModel(
            UserCoreModel.init(author),
            post
        )
    }
}
