/***
 * Loops 
 * 
 * 
 * While functions give us the ability to encapsulate logic within a code block to drastically cut down on repetition in our code, loops help us to preform repeated actions in our code. When can even run a function multiple times with the help of a loop.
 *  
 * 
 * 
 */

//"While" loop
//A while loop is a loop that will run based upon a condition being true. Once that condition is no longer true, the loop will stop running. The syntax for a while...loop is as follows

/**
 * while(condition is true){
 * 
 * //do something inside of these curly brackets 
 * 
 * } 
 * 
 */

//Lets look at another example

let num = 0;

while (num < 10){//evaluates to a boolean

    console.log(num); //code to execute while condition is true: prints the numbers 1-9
    num++ //code to execute while condition is true

}

//Above, we declare a variable in global scope num, and set its value to 0. Our condition inside of our while loop says, "While num is less than 10, execute the code inside the curly brackets". Inside of our loop body, we log the value of num to the console, and then we increment our num variable by one. It is important to note here that without adding 1 to our num variable every iteration of our loop, our condition would never be met. This is not good, and would result in an 'infinite loop', which will make your computer very unhappy. Whenever you are working with loops, always make sure you have clearly defined when your loop is going to stop, otherwise you might get stuck in an 'infinite loop'.

//'do...while' loop
//Similar to the 'while...loop' but with an inverted syntax structure is the do...while loop. This type of loop is not nearly as commonly used as the while...loop but is still valid. The utility of the 'do...while' loop is that it will always run at least once, because the condition is below the loop body.

num = 0;

do{
    console.log(num);//code to execute while condition is true: prints the numbers 1-9
    num++//code to execute while condition is true

}while(num < 10) //evaluates to a boolean

//'for...' loop
//The 'for...' loop may be a little harder to understand at first, but is by far the most commonly used loop. It has a different syntax than either the 'while...' loop or the 'do...while' loop.
/**
 *  for (begin; condition; step) {
 * 
 *      // ... loop body ...
 * 
 * }
 */
//In a 'for...' loop we specify where the loop begins, where the loop ends, and how we are going to creep towards having our conditional resolve to true (to avoid the extistential crisis of a 'infinite loop');

//Lets look at another example with our num variable...
//     begin;  condition;  increment by this many;
for(let num = 0; num < 10; num++){

    console.log(num)//prints the numbers 1-9;

}
