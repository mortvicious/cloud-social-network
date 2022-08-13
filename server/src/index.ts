#!/usr/bin/env node

import './loaders/dotenv'
import express, { Express } from "express"
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'

const app: Express = express()
const PORT:string = process.env.PORT || `5000`

app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/build')));

const start = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        const db = mongoose.connection
        db.on('error', console.error.bind(console, `Error MongoDB`))
        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`)
            console.log(mongoose.connection.readyState)
        })
    } catch (e) {
        throw new Error(`${e}`)
    }
}


start()





