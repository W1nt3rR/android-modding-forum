import mongoose from "mongoose"

const DB_URL = process.env.DB_URL

export const dbConnect = () => {
    mongoose.connect(DB_URL)

    const connection = mongoose.connection

    connection.on("connected", () => {
        console.log(`MongoDB connected on ${DB_URL}`)
    })

    connection.on("error", () => {
        console.log("MongoDB connected", error)
    })
}