//conditional statements
let age = 18;
if(age>=18){
    console.log("you can vote");
}
if(age<18){
    console.log("you can't vote")
}

//else if stmt
let age1=14
if(age1>=18){
    console.log("you can vote")
}
else if(age1<18){
    console.log("you can't vote")
}

//else stmt
let color="damage";

if(color=="red"){
    console.log("stop");
}
else if(color=="yellow"){
    console.log("slow down");
}
else if(color=="greeen"){
    console.log("go");
}
else{
    console.log("your light is broken");
}

//Nested if
let marks=45;
if( marks>=33){
  console.log("Pass");

if(marks>=80){
    console.log("outstanding performance")
}
else{
  console.log("Your grade is C+");
}}
else{
    console.log("Better luck next time!");
}