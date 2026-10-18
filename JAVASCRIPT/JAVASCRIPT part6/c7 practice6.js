//wap to return sum from 1 to n no.s
function getSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
     sum+=i;
    }
    return sum;
}
console.log(getSum(3));

//create a fn that returns the concatenation of all strings in an array.
let str=['hi','hello','bye','!'];
 function concat(str){
    let res="";
    for(let i=0;i<str.length;i++){
        res+=str[i];
    }
    return res;
 }
 console.log(concat(str));