let names=["tony","bruce","ram","sita","peter","abc"];
//1st way
// let winner=names[0];
// let RunnerUp=names[1];
// let secondRunnerUp=names[2];
// console.log(winner,RunnerUp,secondRunnerUp)

//2nd way i.e destructuring
let[winner,RunnerUp,secondRunnerUp,...others]=names
console.log(winner)
console.log(RunnerUp)
console.log(secondRunnerUp)
console.log(...others)