const http=require ('http');
const fs=require('fs');
const load =require('lodash');
const server= http.createServer((req,res)=>{
    // console.log(req.url,req.method); to display on terminal
const num=load.random(0,20);
console.log(num);
    // set header content type
    res.setHeader('Content-type','text/html');
let path = './docs';
switch(req.url){
    case '/':
        path+= '/maji.html';
        res.statusCode=200;
        break;
    case '/about':
        path+='/work.html';
        res.statusCode=200;
        break;
    case '/about-mee':           //for redirect
       res.statusCode=301;            
       res.setHeader('Location','about-me');
       res.end();
        break;
    default:
        path+= '/oops.html';
        res.statusCode=400;
        break;   
}

// reading a a html file and displaying it
fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    else{
        res.write(data);
        res.end();
    }
});



    // res.write('<p>hello ninjas<p>');
    // res.write('<p>hello ninjas once more again<p>');
    // res.end();
});


server.listen(3000,'localhost',()=>{
    console.log('listening for any request on port 3000')
});


