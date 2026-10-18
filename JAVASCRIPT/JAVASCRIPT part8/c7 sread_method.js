let arr=[1,2,3,4,5,6]
console.log(...arr);

//using spread with object literals
const data={
    email:"ironman@gmail.com",
    password:"abcd"
}
const dataCopy={...data,id:123}
console.log(dataCopy);

let brr=[1,2,3,4,5,6,7];
let obj1={...brr}
console.log(obj1);
let obj2={..."hello"}
console.log(obj2);