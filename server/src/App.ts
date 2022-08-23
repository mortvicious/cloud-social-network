import express, { Express } from 'express'
import cors from 'cors'
import path from 'path'
import { MongooseService } from './database/services/MongooseService'
import authRouter from './api/routes/auth.routes'
import friendsRouter from './api/routes/friends.routes'
import feedRouter from './api/routes/feed.routes'
import postRouter from './api/routes/posts.routes'
import exceptionMiddleware from './api/middlewares/exception.middleware'
import multer from 'multer'

export class App {
    static readonly app: Express = express()
    static readonly PORT : string = process.env.PORT || '5000'
    static readonly origin: string = 'http://localhost:3000'
    static readonly clientBuildPath: string = '../client/build'
    static readonly upload: multer = multer({dest: './assets/uploads'})
	
    static ConfigureServer(): void {
        this.app.use(cors({ credentials: true, origin: this.origin }))
        this.app.use(express.json())
        this.app.use(express.static(path.join(__dirname, this.clientBuildPath)))
        this.app.use(express.urlencoded({ extended: true }))
    }
    static ConfigureRoutes(): void {
        this.app.use('/api/auth', authRouter)
        this.app.use('/api/friends', friendsRouter)
        this.app.use('/api/feed', feedRouter)
        this.app.use('/api/post', postRouter)
    }
    static ConfigureDB(): void {
        try {
            MongooseService.connect()
        } catch (e) {
            throw new Error(`${e}`)
        }
    }
    static ConfigureErrorMiddleware(): void {
        this.app.use(exceptionMiddleware)
    }
    static ServerStart(): void {
        this.app.listen(this.PORT, () => {
            this.ConfigureDB()
            console.log(`Server started on port: ${this.PORT}`)
        })
    }
}