import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import connectDB from './db.js';
import menuroutes from './routes/menuroutes.js'
import orderroute from "./routes/orderroute.js"




const app = express();
app.use(express.json());



app.use('/menu',menuroutes);
app.use('/orders',orderroute);


app.get('/', async(req,res)=>{
    res.status(200).json({message:'DATABASE CONNECTED SUCCESSFULLY'});

})
connectDB();
app.listen(3000,()=>{
    console.log("Database Running on port:3000")
});
