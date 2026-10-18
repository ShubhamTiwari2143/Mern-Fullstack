let actors = [
  ["Akshay", "Salman", "Amir"],
  ["Ajay", "vijay", "Sarukh"],
];
for (let i = 0; i < actors.length; i++) {
  console.log(i, actors[i], actors[i].length);
  for (let j = 0; j < actors[i].length; j++) {
    console.log(`j=${j},${actors[i][j]}`);
  }
}

let students = [
  ["Shubham", 85],
  ["Nishu", 98],
  ["Rahul", 95],
];

for(let m=0;m<students.length;m++){
    console.log(`info of students:${m+1}`);
    for(let n=0;n<students[m].length;n++){
        console.log(students[m][n]);
    }

}