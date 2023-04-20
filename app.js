const express= require('express');
const app= express();//setting up an express app by invoking 

//register view engine
app.set('view engine','ejs');

//listen for requests
app.listen(3000);
app.get('/',(req,res)=>{
    //res.send('<p>hello john</p>')
    //res.sendFile('./docs/maji.html',{root:__dirname});  
    res.render('maji');
});

app.get('/about',(req,res)=>{
    //res.send('<p>hello john about page</p>')
    res.render('work'); 
});
//redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});

//404 error
app.use((req,res)=>{
    res.status(400).res.render('oops');
});

app.get('/blog/create',(req,res)=>{
    //res.send('<p>hello john about page</p>')
    res.render('blog'); 
});