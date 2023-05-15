/***
 * Functions
 *
 * Often times in our code we come across scenarios where we are doing the same, repetitive task over and over again. For large scale applications, this could me righting thousands of lines of code over and over. This is not ideal. Fortunately, JavaScript provides us with a way of avoiding this repetition.
 *
 * Functions in JavaScript are a way that we can encapsulate some logic so that we can use it else where in our code. Functions are everywhere!!!
 *
 *
 *
 *
 *
 *
 *
 */

////We create a function by using a 'function declaration'

function addTheseNumbers(number1, number2) {
  //
  return number1 + number2;
}

//In a function declaration, the keyword 'function' is followed by the name of our function. Then in between the () our are 'parameters', seperated by a comma. Parameters are place holders for real data, and we can pass as many as we need as input for our function. After that between the two {}, or curly brackets, is our 'function body'. Our function body is where we describe what we are going to be doing with our data. Inside of our {} is also the return keyword. The return keyword guarantees that our function will spit out a value once we have done something with our input parameters. Sometimes we don't need our function to return anything at all, but for this example we do. If we don't include a return statement, our the only thing our function will return is undefined

//Now that we have declared a function, we can use it by calling it and passing it some really data. Once we do pass our function some real data instead of the placeholders, we can now refer to them as arguements. Below, the numbers 6 and 5 our are arguements for our function. Too execute our function we replace the parameters with our arguements inbetween the paranthesis.

console.log(addTheseNumbers(6, 5)); //Expected Output : 11

//It's not very useful just to be able to call a function without saving the result. Functions can saved to variables so that we can save the result of our calculation.

let sum = addTheseNumbers(10, 20);
console.log(sum); //Expected output : 30

//Scope
//A variable declared between the curly brackets of a functions can only be used inside of that function. (Unless they are declared with var, but this is bad practice and uncommon.)

function printInner() {
  let inner = "I am on the inside of the function, I am function scoped";
  console.log(inner);
}

printInner(); // Expected output : "I am on the inside of the function, I am function scoped"
console.log(inner); //Expected output : Error, inner is undefined.

//In the above printInner() function, we declare a variable inside of our curly brackets. We then log the value of that variable to the console. After we call our function, it prints as expected. But when we try to log the variable from outside of our function, JavaScript won't let us. This is because variables declared inside of a function are scoped to that function, or they have local scope. They can not be accessed from the outside.

let outer = "I am on the outside of the function";
function printOuter() {
  console.log(outer);
}

printOuter(); //Expected output : "I am on the outside of the function"

//Think of scope like the inheritance of genetics. You have access to your parents genes, but your parents do not have access to your genes.

//In the above printOuter() function, we can access the value of the outer variable from inside the curly braces of our function. This is because variablse declared outside of functions have global scope. Global variables are accessible from inside any function. It is uncommon to declare and use variables declared in the global scope, as they may become hard to track and result in unintended consequences in your code. Although global variables are sometimes used for things like state management, when we need to access our variables from anywhere, it is considered bad practice to use global variables.

//Closures
//A closure in JavaScript pertains to the scope of functions and there variables. As we have seen a variable declared inside of a function is only available in that specific function. If we declare a function inside of a function, that inner function will have access to any variables declared in the outer function. It can be helpful to think of these relationships as parent/child relationships.

function parent(outerVariable) {
  //we can declare variable here
 
  function child() {
    //we can access variables declared in the parent function here, including variables passed as inputs to parent function
  }
}
//Even after we return from within the child function, the parent variable is saved, because of the closure created by the child function

function parent(familyName) {
  function child(childsFirstName) {
    return childsFirstName + " " + familyName;
  }
  return child;
}
//here we assign a variable to our parent function declared above, since we executed the function, the child function has returned a value
let userName = parent("Lopez");
console.log(userName) //Expected result : " Lopez"
//now we can pass another varialbe, and because of closures, the first value we added "Lopez", is still there too
userName("Jennifer"); //Expected result "Jennifer Lopez";

