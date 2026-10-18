//js me map() ka use array ke har element par koi operation
//  perform kakrke ek naya array bnane ke liye hota hai

let num = [1, 2, 3, 4, 5];
let double = num.map((el) => {
  return el * el;
});
console.log(double);
//using map method
let brr = [
  { name: "Shubham", marks: 97 },
  { name: "Shivam", marks: 96 },
  { name: "Sarvesh", marks: 94 },
];
let gpa = brr.map((el) => {
  return el.marks / 10;
});
console.log(gpa);

//using filter in js
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans = nums.filter((el) => {
  return el % 2 == 0;
});
console.log(ans);

