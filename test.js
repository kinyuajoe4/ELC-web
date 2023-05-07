console.log('hello there');
const jsonfile= require ('jsonfile');
const moment= require ('moment');
const simpleGit= require ('simple-git');
const makeCommit =(x,y)=>{
    const FILE_PATH='./data.json';
const DATE = moment().subtract(1,'d').add(1,'d').add(x,'w').add(y,'d').format();
const data ={
    date:DATE
}
jsonfile.writeFile(FILE_PATH,data,()=>{
    simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE}).push();
    console.log('hello there');
    simpleGit.push();
});

}
makeCommit(1,6);






