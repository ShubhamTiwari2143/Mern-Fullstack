let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});
//using event delegation
ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listitem = event.target.parentElement;
    listitem.remove();
    console.log("deleted");
  }
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }
