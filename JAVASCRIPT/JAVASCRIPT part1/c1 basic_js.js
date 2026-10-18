// Variable
 a = 10;
console.log(a);

//Datatype:- 1.Numbers 2.Boolean 3.String 4.Undefined 5.Null
age = 23;
console.log(typeof age);//numbers

result = true;
console.log(typeof result);//boolean

name = "Shubham"
console.log(typeof name);//string

let area;
console.log(typeof area);

let price=null;
console.log( price);


//Operators in js:- 1.addition 2.subtraction 3.division 4.multiplication 5.modulo(remainder operator) 6.Exponentiation(power operator)
e1=10;
e2=20;
salary=e1 + e2;//addition
console.log(salary);//30

c=2
d=3
exp=c**d;//exponentiation
console.log(exp);//8

//NaN in js
y=0/0;
console.log(y);//NanN

z=NaN;
z+=1;
console.log(z);//NaN

//Operation precedence in Js : 1.Bracket() 2.Power ** 3.modulo,divide,multiply 4.subtract,add
operation =7+3*4-(2*14)+2**3;
console.log(operation);//-1

//keywords in js:-1.let(let keyword me hum dubara se value assign kr skte hai) 2.const(const keyword humesa constant rhta hai isme koi change nhi ho skta) 3.var

let ages =23;
ages= ages+=1;
console.log(ages);

const pi= 3.14;

var f = 21;
console.log(f);

z=ages+pi+f;
console.log(z);

//Assignment operator
 let value= 27;
 value+=1;
 console.log(value);

 //Unary operators:- 1.increment (++) 2.Decrement (--)
 let year=2006;
 year++;
 console.log(year);

 //pre-increment operator(isme pahle value change hota hai fir assign hota hai variable me);
 let currYear=2026;
 let futureYear =++currYear;
 console.log(futureYear);//2027
 console.log(currYear);//2027

 //post-increment (isme pahle value assign hota hai fir change hota. hai)
futureYear=currYear++;
console.log(futureYear);//2027
console.log(currYear);//2028
//similarly decrement operator v aise hi kaam krta hai

//String indices
let Name = "Shubham Tiwari"
console.log(Name[0]);//S
console.log(Name.length)//14



