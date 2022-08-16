#!/usr/bin/env node

import './loaders/.env'
import express, { Express } from "express"
import cors from 'cors'
import path from 'path'
import { MongooseService } from './database/services/MongooseService'
import authRouter from './api/routes/auth.routes'

const app: Express = express()
const PORT:string = process.env.PORT || `5000`

app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api/auth', authRouter)

const start = () => {
    try {
        MongooseService.connect()
        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`)
        })
    } catch (e) {
        throw new Error(`${e}`)
    }
}


start()





