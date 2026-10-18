let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  //extracting data from form

  //1st way to access form data
  //   let user = document.querySelector("#user");
  //   let pass = document.querySelector("#pass");

  //2nd way(smartest way)
  let user = this.elements[0];
  let pass = this.elements[1];

  console.log(user.value); //to access input value of from using value property to access value
  console.log(pass.value);

  alert(`Hi ${user.value},your password is set to ${pass.value}`);
  console.log("form submitted");
});
