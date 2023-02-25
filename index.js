const express = require('express');
const app = express();

const cors = require('cors');

const middleware = (req,res,next)=>{
    console.log(req+'im at middleware 1');
    next();
}

const middleware2 = (req,res,next)=>{
    console.log(req+'im at middleware 2');
    console.log('I got the login request');
    next();
}


app.get('/',(req,res)=>{
    console.log('Im an homepage');
    res.send('Homepage')
});

app.get('/first',middleware,(req,res)=>{
    console.log('Received the login req');
    res.send('Middleware')
})

app.get('/second',middleware2,(req,res)=>{
    console.log('Received the login req');
    res.send('Middleware 2')
});

app.get('/about',cors(),(req,res)=>{
    res.json({
        employee:[{
            name: 'Abcdsd',
            
        }]
    })
})

