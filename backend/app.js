const express = require('express')
const app = new express()
require('dotenv').config()
const PORT = process.env.PORT
const cors = require('cors')
const router = require('./routes')
const Response = require('./response')


const connectDB = require('./DB') 
connectDB()



app.use(express.json())

app.use(cors({origin:'*'}))


app.use('/',router)


app.all('*',(req,res)=>{
    const response = new Response('404 not found')
    res.status(404).jason(response)
})

app.listen(PORT,()=>{
    console.log('server strted at '+PORT)
})