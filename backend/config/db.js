import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const db = process.env.MONGO_URI

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`Connecté à la base de donnée: ${conn.connection.host}`.black.bgGreen)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.bold.underline)
        process.exit(1 )
    }
}

export default connectDB