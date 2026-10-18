function outerFunc() {
  let x = 5;
  let y = 23;
  function innerFunc() {
    let a = 10;
    console.log(x);
    console.log(y);
    console.log(a);
  }
  innerFunc();
}
outerFunc();
