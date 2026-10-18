//scope:-determines the accessibility of variables,objects,and functions
// from different parts of the code.

// there are 4 types of scope:-1.Global Scope 2.Function Scope 3.Block scope 4.Lexical scope

//1.Global function - can accesible anywhere in file

//2.Function scope - variable defined inside a fn are not accessible or visible
//  from outside the fn.

//3.Block scope-variable declared inside the ablock can't be accessed from outside the block.

let sum = 45;
function calSum(a, b) {
  let sum = a + b; //fn scope has highest priority than global scope.when both present,if fn scope is not present then global scope will use the function
  console.log(sum);
}
calSum(1, 2);


let age = 25;
if (age >= 18) {
  let str = "Adult";
  console.log(str); //this variable is accessed from here but if this line 
                    //is wriiten outside the block it gives an error msg
}
