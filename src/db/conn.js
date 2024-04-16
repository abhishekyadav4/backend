
import mongoose from "mongoose";
import { DBNAME } from "../constants.js";
// const dbUrl = process.env.DB_URL
const connectToDb = async()=>{
   try {
    await mongoose.connect(`${process.env.DB_URL}/${DBNAME}`)
    console.log(`db connected successuly`)
    
   } catch (error) {
    console.log('error, db not connected',error)
   }
}

export {connectToDb};