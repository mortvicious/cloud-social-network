import express, { Express } from "express"
import cors from 'cors'
import path from 'path'
import { MongooseService } from './database/services/MongooseService'
import authRouter from './api/routes/auth.routes'
import bodyParser from 'body-parser'

export class App {
	static readonly app: Express = express()
	static readonly PORT: string = process.env.PORT || '5000'
	static ConfigureServer(): void {
		this.app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
		this.app.use(express.json())
		this.app.use(express.static(path.join(__dirname, '../client/build')))
		this.app.use(express.urlencoded({ extended: true }))
		this.app.use(bodyParser.json())
	}
	static ConfigureRoutes(): void {
		this.app.use('/api/auth', authRouter)
	}
	static ConfigureDB(): void {
		try {
			MongooseService.connect()
		} catch (e) {
			throw new Error(`${e}`)
		}
	}
	static ServerStart(): void {
		this.app.listen(this.PORT, () => {
			this.ConfigureDB()
			console.log(`Server started on port: ${this.PORT}`)
		})
	}
}