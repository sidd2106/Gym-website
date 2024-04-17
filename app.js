const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const port = 80;
app.use('/static',express.static('static'));
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    const con = "This is a gym website.";
    const sids = {'title':'Gym Website', 'content': con};
    res.status(200).render('index.pug',sids);
});

app.post('/',(req,res)=>{
    Name = req.body.Name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    email = req.body.email;
    phone = req.body.phone;
    let outputToWrite = `The details of client are:\nName: ${Name}\nAge: ${age}\nGender: ${gender}\nAddress: ${address}\nEmail: ${email}\nPhone: ${phone}`;
    fs.writeFileSync('output.text',outputToWrite);
    const sids = {'message':'Your form has been submited.'};
    res.status(200).render('index.pug',sids);
});

app.listen(port,()=>{
    console.log(`The application started successfully on the ${port}`)
}); 