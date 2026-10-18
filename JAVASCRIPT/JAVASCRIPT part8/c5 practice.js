//check if all numbers in our array are multiple of 10 or not
let number = [10, 20, 30, 40];
let ans = number.every((el) => el % 10 == 0);
console.log(ans);

//find minimum number from array

function getMin(num) {
  let min = num.reduce((min, element) => {
    if (min < element) {
      return min;
    } else {
      return element;
    }
  });
  return min;
}
console.log(getMin([1, 2, 3, 4, -19, -89]));
