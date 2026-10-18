//promises is used to simplify callback hell
//example of callback hell
// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "Apna college",
//   () => {
//     console.log("Success:your data has been saved successfully");
//     savetoDb(
//       "Hello world",
//       () => {
//         console.log("Success2:your data has been saved successfully");
//         savetoDb(
//           "Shubham",
//           () => {
//             console.log("Success23:your data has been saved successfully");
//           },
//           () => {
//             console.log(
//               "failure:your data has been not saved due to weak connection",
//             );
//           },
//         );
//       },

//       () => {
//         console.log(
//           "failure2:your data has been not saved due to weak connection",
//         );
//       },
//     );
//   },
//   () => {
//     console.log("failure:your data has been not saved due to weak connection");
//   },
// );

//now we solve this callback hell using promise object
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
  .then(() => {
    console.log("Promise was resolved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });
