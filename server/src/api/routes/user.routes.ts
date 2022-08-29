import * as express from 'express'
import authMiddleware from '../middlewares/auth.middleware'
import {UserController} from '../controllers/UserController'
import {upload} from '../../loaders/multer'

const router: express.Router = express.Router()

router.post('/set-settings', authMiddleware, UserController.SetUserSettings)
router.post('/upload-avatar', upload.single('avatar'), UserController.UploadAvatar)
router.get('/get-avatar', authMiddleware, UserController.GetAvatar)

export default router
