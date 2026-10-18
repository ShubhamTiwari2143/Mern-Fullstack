let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
//   console.log("key=", event.key);
  console.log("code=", event.code); //ArrowUp(u),ArrowDown(D),ArrowLeft(L),ArrowRight(R)
  if (event.code == "KeyU") {
    console.log("Character moves forward");
  } else if (event.code == "KeyD") {
    console.log("Character moves backward");
  } else if (event.code == "KeyL") {
    console.log("Character moves left");
  } else if (event.code == "KeyR") {
    console.log("Character moves right");
  }
});
//   console.log("key was pressed");
// });
// inp.addEventListener("keyup", function () {
//   console.log("key was released");
// });
