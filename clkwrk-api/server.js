import express from "express"
import * as dotenv from 'dotenv'
import { dbConnect } from "./dbConfig"
dotenv.config()

const PORT = process.env.PORT
const server = express()

dbConnect()

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})