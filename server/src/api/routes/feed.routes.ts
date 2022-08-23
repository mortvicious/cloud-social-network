import * as express from 'express'
import authMiddleware from '../middlewares/auth.middleware'
import {FeedController} from '../controllers/FeedController'

const router: express.Router = express.Router()

router.get('/', authMiddleware, FeedController.FetchFeedPosts)


export default router
