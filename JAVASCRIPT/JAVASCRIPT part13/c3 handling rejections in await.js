let h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promise rejected");
      }
      h1.style.color = color;
      resolve("color changed!");
    }, delay);
  });
}
async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("green", 1000);
    await changeColor("brown", 1000);
    await changeColor("chartreuse", 1000);
  } catch (error) {
    console.log("error caught:",error)
  }
  let a=5;
  console.log(a);
  console.log("New number:",a+4);
}
demo();
