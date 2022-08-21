import * as express from 'express'
import authMiddleware from '../middlewares/auth.middleware'
import {FriendsController} from "../controllers/FriendsController";

const router: express.Router = express.Router()

router.post('/accept-request', authMiddleware, FriendsController.AcceptFriendRequest)
router.post('/decline-request', authMiddleware, FriendsController.DeclineFriendRequest)
router.post('/send-request', authMiddleware, FriendsController.SendFriendRequest)
router.delete('/delete-friend', authMiddleware, FriendsController.DeleteFromFriends)
router.get('/get-requests', authMiddleware, FriendsController.GetFriendRequestsList)
router.get('/', authMiddleware, FriendsController.GetFriendsList)

export default router
