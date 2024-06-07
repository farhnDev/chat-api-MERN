import mongoose from "mongoose";

const connectToMongoDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('Connected to Database');
    } catch (error) {
        console.log("Error connected",error.message);
    }
}

export default connectToMongoDb;