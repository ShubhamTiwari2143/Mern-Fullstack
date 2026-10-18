//reduce method multiple chiz ko ek single value deta hai
let nums = [1, 2, 3, 4];
let finalValue = nums.reduce((res, el) => {
  console.log(res);
  return res + el;
});
console.log("final value is " + finalValue);

//find maximum value from array
let arr = [1, 2, , 3, 14, 5, 6, 7, 8, 9];
let max = -1;
for (let i = 0; i <= arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);
//using reduce to find maximum value from array
let brr = [1, 2, 3, 4, 5, 56, 78, 9, 10];
let maximum = brr.reduce((maximum, el) => {
  if (maximum < el) {
    return el;
  } else {
    return maximum;
  }
});
console.log(maximum);
