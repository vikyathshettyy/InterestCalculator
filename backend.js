const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/calculate',(req,res)=> {
    const principle = parseInt(req.query.p);
    const interest = parseInt(req.query.i);
    const years = parseInt(req.query.y);
    console.log(principle,interest,years);
    const total = principle + (principle*(interest/100)*years);
    const amount = total-principle;
    res.json({
        total,
        amount
    })

})
app.listen(3000,()=>{
    console.log("server has started");
})