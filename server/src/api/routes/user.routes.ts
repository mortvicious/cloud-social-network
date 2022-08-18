import * as express from 'express'
import authMiddleware from '../middlewares/auth.middleware'
import {UserController} from "../controllers/UserController";

const router: express.Router = express.Router()

router.post('/set-settings', authMiddleware, UserController.setUserSettings)
router.post('/upload-avatar', authMiddleware, UserController.uploadAvatar)
router.get('/get-avatar', authMiddleware, UserController.getAvatar)

export default router
