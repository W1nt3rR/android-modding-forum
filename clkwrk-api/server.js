import express from "express"
import * as dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT
const server = express()

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})