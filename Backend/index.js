import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './routes/userRoute.js'
const app = express()
//middleware to parse the request body
app.use(bodyParser.json()); //middleware to parse the request body
dotenv.config()

const PORT = process.env.PORT || 5000;

app.use('/api/user',router);

mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected to the database")
    app.listen(PORT,()=>{

        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})
