let arr = [7, 9, 0, -2];
console.log(arr.slice(0, 3));

console.log(arr.slice(1, 4));

let str = prompt("please enter a string");
if (str.length == 0) {
  console.log("stringisempty");
} else {
  console.log("String is not empty");
}

let str1 = prompt("please enter astring");
console.log(`originalstring = ${str1}`);
console.log(`string without spaces = ${str1.trim()}`);


let arr1=['hello',23,45,78];
let item=64;
if(arr1.indexOf(item)!=-1){
    console.log("element exists already")
}else{
    console.log("element doesn't exists already")
}