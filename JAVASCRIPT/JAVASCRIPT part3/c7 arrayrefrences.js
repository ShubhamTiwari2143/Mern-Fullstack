let arr=['a','b','c'];
let arrCopy=arr;
console.log(arr==arrCopy);//true

arr.push('d');
console.log(arr);
console.log(arrCopy);

arrCopy.pop();
console.log(arrCopy);
console.log(arr);