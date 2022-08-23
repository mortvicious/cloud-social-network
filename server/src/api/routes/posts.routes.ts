import * as express from 'express'
import authMiddleware from '../middlewares/auth.middleware'
import {PostController} from '../controllers/PostController'

const router: express.Router = express.Router()

router.post('/add-post', authMiddleware, PostController.AddPost)


export default router
