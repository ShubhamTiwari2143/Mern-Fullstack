//synchronous nature
let a=25;
console.log(a);
let b=10;
console.log(b);
let c=a+b;
console.log(c);

//Asynchronous nature
setTimeout(()=>{
    console.log("Apna college")
},2000);
console.log("hello");