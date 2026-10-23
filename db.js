import mongoose from "mongoose";


const connectDB= async()=>{
    try{
    await mongoose.connect(process.env.DB_URI);
    console.log("Mongodb Connect Successfully")
    }catch(error){

        console.log({message:'MONGODB connection failed:',error});
    }
}

export default connectDB;