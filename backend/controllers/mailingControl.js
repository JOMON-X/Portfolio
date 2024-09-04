const Mail = require('../model')
const Response = require('../response')

exports.sendingMessage = async (req,res) => {
    try {
        let data = req.body;
        console.log(data)

        const newMail = new Mail(data)
        await newMail.save()

        const response =new Response("Message sent successfully")
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        const response = new Response("Failed to send Message")
        res.status(201).send(response)
    }
}

exports.gettingMessage = async(req,res) =>{
    try {
        const mail = await Mail.find()
        res.status(200).jason(mail)
    } catch (error) {
        res.status(201).jason({error:'Failed to fetch Messages'})
    }
}