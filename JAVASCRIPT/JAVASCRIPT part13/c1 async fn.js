//using async with normal function
async function greet() {
  throw "404 page not found";
  return "hello";
}
greet()
  .then((result) => {
    console.log("promise was resolved");
    console.log("result was:", result);
  })
  .catch((err) => {
    console.log("promise was rejected with err:", err);
  });
//using async with arrow function
  let demo=async()=>{
    return 5;
  }
  console.log(demo());