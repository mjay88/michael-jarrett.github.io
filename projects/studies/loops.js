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

    console.log(num); //code to execute while condition is true: prints the numbers 1-9 all on seperate lines in the console
    num++ //code to execute while condition is true

}

//Above, we declare a variable in global scope num, and set its value to 0. Our condition inside of our while loop says, "While num is less than 10, execute the code inside the curly brackets". Inside of our loop body, we log the value of num to the console, and then we increment our num variable by one.
//It is important to note here that without adding 1 to our num variable every iteration of our loop, our condition would never be met. This is not good, and would result in an 'infinite loop', which will make your computer very unhappy. Whenever you are working with loops, always make sure you have clearly defined when your loop is going to stop, otherwise you might get stuck in an 'infinite loop'.

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

    console.log(num)//prints the numbers 1-9 all on seperate lines in the console

}

//We can also loop backwards using a 'for...' loop, by counting down from a starting position

//     begin;  condition;  decrement by this many;
for(let num = 10; num > 0; num--){

    console.log(num)//prints the numbers 10-1 all on seperate lines in the console

}

//Here, we start at 10, our condition runs while our number is still greater than 0, and we count down by 1 every iteration.



//Besides just printing numbers, another very usual concept in JavaScript is printing over arrays and objects. In this case the syntax if very similiar to incrementing over a number except here we tell our loop where we want to start in the array, the condition or when we want to stop, and how many elements in the array to increment or decrement by.

let array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

for(let i = 0; i < array.length; i++){

    console.log(array[i])//prints 'one', 'two', 'three', 'four', ect...all on seperate lines in the console

}

//Above we start our loop at i = 0, (i being short for increment is common, but we can pass anything as the variable name), we tell our loop to go while the value of i < than the length of our array (remember, array.length returns a number), and then we increment our counter variable by 1. Inside of the 'for...' loop code body, we access the elements in the array by using bracket notation. 

//We can loop backwards through an array by tweeking the logic...


 array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

for(let i = array.length - 1; i >= 0; i--){

    console.log(array[i])//prints 'ten', 'nine', 'eight', 'seven', ect...all on seperate lines in the console

}

//Here, we give our loop the starting point of the last index of the array (remember, array's are zero indexed so array.length - 1 will give us the last index), we tell our loop to stop when the counter variable reaches 0, (the first index of the array), and then we subtract 1 from our counter variable each time we iterate.

//To loop over an object of key value pairs, we have to use a special kind of loop. The 'for...in' loop allows us to access every proptery and it's corresponding value using bracket notation. The syntax of a 'for...in' loop looks like this...

let object = {
    firstName : 'Alan',
    lastName : 'Turing',
    occupation : 'Computer Scientist',   
}

for(let key in object){

    console.log(key) // accessess each property name in our object, this would print: firstName, lastName, occupation, all on seperate lines in the console
    console.log(object[key]) //accesses each property value associated with the given key in our object, this would print : 'Alan', 'Turing', 'Computer Scientist' all on seperate lines in the console

}


//Since objects do not have indexes, the order in which the print is dictated by the order in which they where created or exist in the object. You can not iterate through an object 'backwards' per se, but you could turn that object into an array an then you could always iterate through that backwards if you needed to. 

