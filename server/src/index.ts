#!/usr/bin/env node

import './loaders/.env'
import express, { Express } from "express"
// import {connection} from 'mongoose'
import cors from 'cors'
import path from 'path'
import { MongooseService } from './database/services/MongooseService'

const app: Express = express()
const PORT:string = process.env.PORT || `5000`

app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/build')));

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





