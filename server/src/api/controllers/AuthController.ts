import { IJwtPayloadId } from './../../interfaces/IGetUserAuthInfoReq';
import { Request, Response } from 'express'
import { IGetUserAuthInfoRequest } from 'src/interfaces/IGetUserAuthInfoReq'
import { User } from '../../database/models/UserModel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ValidationError, validationResult, Result } from 'express-validator'
import { FileService } from '../services/FileService';
import {IUser} from "../../interfaces/IUser";

export class AuthController {
	static async Register(
		req: Request,
		res: Response
	): Promise<Response<any, Record<string, any>>> {
        try {
			const errors: Result<ValidationError> = validationResult(req)

			if (!errors.isEmpty()) {
				return res.status(400).send({ message: 'Incorrect request', errors })
			}

            const { email, username, password, link } = req.body
            
			const candidateEmail: IUser = await User.findOne({ email })
			if (candidateEmail) {
				return res
					.status(400)
					.send({ message: `User with email ${email} already exists` })
			}

			const candidateLink: IUser = await User.findOne({ link })
			if (candidateLink) {
				return res
					.status(400)
					.send({ message: `User with link ${link} already exists` })
            }
            
            const candidateUsername: IUser = await User.findOne({ username })
            if (candidateUsername) {
                return res
                    .status(400)
                    .send({ message: `User with username ${username} already exists`})
            }

			const hashPassword: string = await bcrypt.hash(password, 15)
			const user: IUser = new User({
				email,
				username,
				password: hashPassword,
				link,
			})

			await user.save()
			await FileService.createInitialDir(email)
			
			return res.status(200).send({ message: 'User was created' })
		} catch (e) {
			return res.status(500).send({ message: 'Server error' })
		}
	}

	static async Login(
		req: Request,
		res: Response
	): Promise<Response<any, Record<string, any>>> {
		try {
			const { email, password } = req.body

			const user = await User.findOne({ email })

			if (!user) {
				return res.status(400).send({ message: 'User not found' })
			}

			const isPassValid = bcrypt.compareSync(password, user.password)
			if (!isPassValid) {
				return res.status(400).send({ message: 'Wrong password' })
			}

			const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
				expiresIn: '1h',
			})

			return res.send({
				token,
				user: {
					id: user.id,
					email: user.email,
					username: user.username,
				},
			})
		} catch (e) {
			return res.status(500).send({ message: 'Server error' })
		}
    }
    
	static async Auth(
		req: IGetUserAuthInfoRequest,
		res: Response
	): Promise<Response<any, Record<string, any>>> {
        try {
            const id: string | IJwtPayloadId = req.user.id 

			const user = await User.findOne({ _id: id})

			const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
				expiresIn: '24h',
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
			return res.status(500).send({ message: 'Server error' })
		}
	}
}
