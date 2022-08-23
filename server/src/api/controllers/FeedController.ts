import {IGetUserAuthInfoRequest} from '../../interfaces/IGetUserAuthInfoReq'
import {Response} from 'express'
import {FeedService} from '../services/FeedService'

export class FeedController {
    static async FetchFeedPosts(req: IGetUserAuthInfoRequest, res: Response) {
        try {
            const {id} = req.user
            const posts = await FeedService.GetUserFeedPosts(id)
            return res.status(200).send(posts)
        } catch (e) {
            return res.status(400).send({ message: 'Error fetching feed posts' })
        }
    }
}