import dotenv from 'dotenv';
dotenv.config();
import { connectToDb } from './db/conn.js';
import { app } from './app.js';

const port = process.env.PORT ||    3000;

connectToDb();
app.listen(port,()=>{
    console.log(`running at port ${port}`)
})


