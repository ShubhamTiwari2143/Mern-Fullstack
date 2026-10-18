let arr = [1, 2, 3, 4, 5];
let print = function (el) {
  console.log(el);
};
arr.forEach(print);

console.log("new way");
let arr2 = [4, 6, 7, 8, 9];
arr2.forEach(function (elem) {
  console.log(elem);
});
console.log("3rdway");
arr2.forEach((elem) => {
  console.log(elem);
});
//using for Each on object
let brr = [
  { name: "Shubham", marks: 97 },
  { name: "Shivam", marks: 96 },
  { name: "Sarvesh", marks: 94 },
];
brr.forEach((student) => {
  console.log(student.marks);
});
