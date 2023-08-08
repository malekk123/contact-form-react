const bodyParser = require('body-parser')
const express = require('express')
//const bosyParser = require('bosy-parser')
const app =express()
const nodemailer = require('nodemailer')
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended :true}))

app.get('/',(req,res)=>{
    res.send(`<h1 style='text-align:center; color:blue;'> Welcome to my home Page</h1>`)
})

app.post('/api/sendEmail',(req,res)=>{
    res.send(`yes i do`)
    let data =req.body
    console.log(data)
   const transporter =nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user: 'mayssa.karmous1234@gmail.com',
            pass: 'kxpefumamqyjhusn'
        }
    })
    const mailOptions = {
        from: 'mayssa.karmous1234@gmail.com',
        to: 'mayssa.karmous1234@gmail.com',
        subject: 'Test for an application ',
        html:`
        <h1>Dir ${data.name}</h1>
        <p> We have receive this message below from the client which he have these informations
        <ul>
        <li>Name:${data.name}</li>
        <li>Email:${data.email}</li>
        <li>Phone: ${data.phone}</li>
        <li>Message:${data.message}</li>
        
        </p>
        ` 
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error)
        }else {
            console.log(`Email Sent : ${info.response}`)
        }
    })
    transporter.close()
})


app.listen(8000,()=>{
   console.log('server starting up port 8000!')
})