// let h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }
// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {});
//   });
// });

// let h1 = document.querySelector("h1");
// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color changed!");
//     }, delay);
//   });
// }

// changeColor("red", 1000)
//   .then(() => {
//     console.log("red colour completed");
//     return changeColor("blue", 1000);
//   })
//   .then(() => {
//     return changeColor("green", 1000);
//   });

//shoter version of this whole above code using async and await keyword
let h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed!");
    }, delay);
  });
}
async function demo() {
  await changeColor("red",1000);
  await changeColor("blue",1000);
  await changeColor("green",1000);
  await changeColor("brown",1000);
 changeColor("chartreuse",1000);

}
demo();
