var error1 = require('./routes/error1.js')
var a=[]

for(var i=0; i < 5; i++){
    a[i] = i + 1;
    console.log(a[i]);
}
console.log(a);
console.log(a[6]);
console.log('hi');


try{
    console.log(j);
}catch(e){
    console.log("array exceeded!");
}

function test(){
   if(a[0] == 1)
    throw new error1();
}
try{
    test()
    console.log('hii!');
}catch(e){
    console.log('caught!');
}