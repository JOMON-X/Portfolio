const mongoose = require('mongoose')

const connectDB =()=>{
    mongoose.connect(process.env.DB_HOST)
    .then(()=>{
        console.log('DB connceted successfully')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB