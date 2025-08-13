import express from "express";
import cors from "cors";
import dotenv from "dotenv"


dotenv.config()

const app = express()

const envPort = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send(`Server is ON on ${envPort}`)
})

app.listen(envPort, ()=>{
    console.log(`Server is running on port ${envPort}`)
})
