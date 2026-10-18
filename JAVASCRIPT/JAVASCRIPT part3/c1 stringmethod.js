let msg ="  hello  ";
console.log(msg.trim());  //trim method is used to remove unnecessary  extra space from left and right side 
console.log(msg.toUpperCase());

//indexOf method:- returns the first index of occurence of some value in string.or gives -1 if not found
let str="ilovecoding";
console.log(str.indexOf("love"));// return 1 as output 
console.log(str.indexOf("z"));-1

//merthod chaining
let str1="   hello friends!   ";
console.log(str1.trim().toUpperCase());

//slice method:- return a part of the original string as a new string
let string="ApnaCollege";
console.log(string.slice(0,4));
console.log(string.slice(4,string.length));
console.log(string.slice(-3));

//replace method:- Searches a value in the string & returns a new string with the value replaced
console.log(string.replace("Apna","Coding"));

//repeat method:- Returns a string with the no. of copies of a string
console.log(string.repeat(2));

