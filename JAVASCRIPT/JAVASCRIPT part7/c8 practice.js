const square = (n) => {
  return n * n;
};
console.log(square(3));

//wap to print 5 times hello world at interval of 2second each
let id = setInterval(() => {
  console.log("Hello world");
}, 2000);
setTimeout(() => {
  clearInterval(id);
},10000);
