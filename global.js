// setTimeout(() => {
//     console.log('in the set time out'); 
// }, 3000);

// const rep = setInterval(()=>{
//     console.log('AFTER 3 SEC');   
// },1000);
// console.log(__dirname);
// console.log(__filename);
// const inkk = require('./test');
// console.log(inkk.people,inkk.ages);
// const os=require('os');
// console.log(os.platform(),os.homedir());

const fs=require('fs');
fs.readFile('./docs/neww.txt',(err,data)=>{
    if(err)console.log(err);
    console.log(data.toString());
})
fs.writeFile('./docs/neww2.txt','hello joe',(err)=>{
    if(err)console.log(err);
    console.log('file was written');
});


if( !fs.existsSync('./assets'));
{
fs.mkdir('./assets',(err)=>{
    if (err)console.log(err);
    console.log('folder created');
});}
{
  fs.rmdir('./assets',(err)=>{
    if(err);
    console.log(err);
    console.log('folder deleted');
  }) ; 
}

if(fs.existsSync('./docs/neww2.txt'))
fs.unlink('./docs/neww2.txt',(err)=>{
  if (err);
  console.log('an error occured');
  console.log('file deleted');
});
const readStream = fs.createReadStream('./docs/blog3.txt');
const writeStream = fs.createWriteStream('./docs/blog4.txt');
// readStream.on('data',(chunk)=>{
//     console.log('------new chunk-------');
//     console.log(chunk.toString());
//     writeStream.write('newly added chunk');
//     writeStream.write(chunk);
// });

// piping data

readStream.pipe(writeStream);