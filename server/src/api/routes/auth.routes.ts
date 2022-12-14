import * as express from 'express'
import { check } from 'express-validator'
import { AuthController } from '../controllers/AuthController'
import authMiddleware from '../middlewares/auth.middleware'

const router: express.Router = express.Router()

router.post(
    '/registration',
    [
        check('email', 'Invalid email').isEmail(),
        check('password', 'Password is incorrect').isLength({ min: 8, max: 20 }),
        check('username', 'Login is incorrect').isLength({ min: 3, max: 20 }),
        // check('link', 'Link is incorrect').isLength({min:3, max: 20})
    ],
    AuthController.Register
)

router.post('/login', AuthController.Login)

router.get('/authenticate', authMiddleware, AuthController.Auth)

export default router
