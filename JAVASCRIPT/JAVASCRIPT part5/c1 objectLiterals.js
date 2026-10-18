//ObjectLiterals :- used to store keyed collections and complex entities.

//creatting object literals
const students = { name: "Shubham", age: 22, marks: 85, city: "delhi" };
console.log(students);

//creating a thread/twitter post
const post = {
  username: "@stiwari",
  content: "This is my#firstPost",
  likes: 150,
  repost: 5,
};
console.log(post);

//how to get vallues from object literals
console.log(post["username"]);
console.log(post.likes);

//how to add/update value in objectLiterals
students.city = "Mumbai";
students.gender = "male";
console.log(students);

//to delete key and value in object literals
delete students.marks;
console.log(students);

//how to create nested object means object of object
const classInfo = {
  Shubham: { grade: "A+", city: "Delhi" },
  Shivam: { grade: "A+", city: "Mumbai" },
  Nishu: { grade: "B+", city: "Lucknow" },
};
console.log(classInfo);
