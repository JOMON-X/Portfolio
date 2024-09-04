const express = require('express')
const router = express.Router()
const { sendingMessage,gettingMessage } = require('../controllers/mailingControl')


router.get('/',(req,res)=>{
    res.send("home")
})

router.post('/newMail',sendingMessage)

router.get('/pickMail',gettingMessage)

module.exports = router