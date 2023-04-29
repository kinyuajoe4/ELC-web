const express= require('express');
const app= express();//setting up an express app by invoking 
const morgan= require('morgan');
const mongoose= require('mongoose');
const { result } = require('lodash');
//connect to mongo
 const dbURI='mongodb+srv://jose:abcd1234@cluster0.yd9x8fe.mongodb.net/mongofirst';
 mongoose.connect(dbURI)
 .then((result)=>{
    console.log('connected to db');
 });
//register view engine
app.set('view engine','ejs');

//listen for requests
app.listen(3000);
//set the middleware
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    const blogs=[
     { title:'JOSEE' , snippet:'asdfgh'},
     { title:'joe' , snippet:'asdfgh'},
     { title:'kinyua' , snippet:'asdfgh'}
    ];
    //res.send('<p>hello john</p>')
    //res.sendFile('./docs/maji.html',{root:__dirname});  
    res.render('maji',{title:'Home',blogs});
});

app.get('/about',(req,res)=>{
    //res.send('<p>hello john about page</p>')
    res.render('work',{title:'About'}); 
});

app.get('/create/blog',(req,res)=>{
    //res.send('<p>hello john about page</p>')
    res.render('blog',{title:'Create Blog'}); 
});
//redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});


//404 error
app.use((req,res)=>{
    res.status(400).res.render('oops',{title:'404'});
});

