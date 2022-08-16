import { IJwtPayloadId } from './../../interfaces/IGetUserAuthInfoReq';
import { Request, Response } from 'express'
import { IGetUserAuthInfoRequest } from 'src/interfaces/IGetUserAuthInfoReq'
import { User, IUser } from '../../database/models/UserModel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ValidationError, validationResult, Result } from 'express-validator'

export class AuthController {
	static async registration(
		req: Request,
		res: Response
	): Promise<Response<any, Record<string, any>>> {
		try {
			const errors: Result<ValidationError> = validationResult(req)

			if (!errors.isEmpty()) {
				return res.status(400).json({ message: 'Incorrect request', errors })
			}

			const { email, username, password, link } = req.body
			const candidateEmail: IUser = await User.findOne({ email })

			if (candidateEmail) {
				return res
					.status(400)
					.json({ message: `User with email ${email} already exists` })
			}

			const candidateLink: IUser = await User.findOne({ link })

			if (candidateLink) {
				return res
					.status(400)
					.json({ message: `User with link ${link} already exists` })
			}

			const hashPassword: string = await bcrypt.hash(password, 15)
			const user: IUser = new User({
				email,
				username,
				password: hashPassword,
				link,
			})

			await user.save()

			return res.json({ message: 'User was created' })
		} catch (e) {
			return res.send({ message: 'Server error' })
		}
	}

	static async login(
		req: Request,
		res: Response
	): Promise<Response<any, Record<string, any>>> {
		try {
			const { email, password } = req.body

			const user = await User.findOne({ email })

			if (!user) {
				return res.status(400).json({ message: 'User not found' })
			}

			const isPassValid = bcrypt.compareSync(password, user.password)
			if (!isPassValid) {
				return res.status(400).json({ message: 'Wrong password' })
			}

			const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
				expiresIn: '1h',
			})

			return res.json({
				token,
				user: {
					id: user.id,
					email: user.email,
					username: user.username,
				},
			})
		} catch (e) {
			return res.send({ message: 'Server error' })
		}
    }
    
	static async auth(
		req: IGetUserAuthInfoRequest,
		res: Response
	): Promise<Response<any, Record<string, any>>> {
        try {
            const id: string | IJwtPayloadId = req.user.id

			const user = await User.findOne({ _id: id})

			const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
				expiresIn: '1h',
			})

			return res.json({
				token,
				user: {
					id: user.id,
					email: user.email,
					login: user.username,
				},
			})
		} catch (e) {
			return res.send({ message: 'Server error' })
		}
	}
}
