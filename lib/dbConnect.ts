import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log("Connected to DB");
        

    } catch (error :any) {
        console.error(`Error Connecting DB: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB;