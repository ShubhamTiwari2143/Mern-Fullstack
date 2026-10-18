let btns = document.querySelectorAll("button");
for (btn of btns) {
//   btn.onclick = sayHello;
//   btn.onmouseenter = function () {
//     console.log("you entered a button");

// btn.addEventListener("click",sayHello);
// btn.addEventListener("click",sayName);
btn.addEventListener("dblclick",function(){
    console.log("you double clicked me!")
})
  };
//   console.dir(btn);

function sayHello() {
  alert("welcome to web development");
}
function sayName() {
  alert("welcome to Apna college");
}
