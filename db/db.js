import mongoose from "mongoose";

const connectToDB = () => {
    mongoose.connect(process.env.MONGO_URI).then(console.log("connected")).catch(e=>console.log(e.message))
}

export default connectToDB;