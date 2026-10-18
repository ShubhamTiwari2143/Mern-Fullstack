//improve version of promise
function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("your data has been saved sucessfully");
    } else {
      reject("your data has not been saved due to weak connection");
    }
  });
}
 savetoDb("Apna college")
  .then((result) => {
    console.log("Data 1 saved");
    console.log("result of promise:",result);
    return savetoDb("Hello world")
  })
  .then((result)=>{
    console.log("Data2 saved");
    console.log("result of promise:",result);
    return savetoDb("Shubham")
  })
  .then((result)=>{
      console.log("Data3 saved")
      console.log("result of promise:",result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise :",error)
  });