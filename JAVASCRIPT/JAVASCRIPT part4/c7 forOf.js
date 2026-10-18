let fruits = ["Apple", "Banana", "Cherry", "Guava", "orange", "Mango"];

for(x of fruits){
    console.log(x);
}

let boy="Shubh";
for(char of boy){
    console.log(char);
}

//applying for of on nested arrays
let students = [
  ["Shubham", 85],
  ["Nishu", 98],
  ["Rahul", 95],
];

for(x of students){
    for(y of x){
        console.log(y);
    }
}