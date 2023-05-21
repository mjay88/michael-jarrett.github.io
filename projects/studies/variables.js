/**
 * 
 * variables:
 *In computer programming, we are usually working with data. Whether it's users, products, scores, enemies in a video game, or a paragraph of text, we are typically doing something with something. In JavaScript, we use VARIABLES to store this information. You can think of a variable as a 'labeled container' for data or stuff that we are working with.
 * 
 * 
 * Clear explanation for each concept
 * 
 *
 * Working code exampls for each concept
 * 
 * 
 *Commmet of what each code example should log/return 
 * 
 *
 * 
 * 
 */

 //declaration 
 // We call creating a variable in JavaScript 'declaring a variable'. There are three ways to declare a variable.

 //the 'var' keyword : 
 var someText;
 //Above we created (or declared) a variable 'someText'. Think of this like printing out a label.
 //Now we can stick our label on something using the assignment operator '='
 someText = "Jello World";
 //Now the value of this text is stored in the memory of our program and we can reference it with the label 'someText'. Every time we inpsect 'someText', there we will find our text.

 //**Note : in JavaScript, it is convention to use camelcase to reference our variables. Instead of putting a space or a dash where it would intuitively go, ie, 'some-text', we capitalize the first letter of each subsequent word, after the first word. So 'some-text'= 'someText'

 //JavaScript also allows us to convienently declare and assign a variable all on the same line, and we can assign multiple variables at once
 var someText = "Jello World", poplulation = 19999999, language = Jellonese;


 //the 'let' keyword
 //Nowa days, var is considered pretty antiquated. It is much more conventional to declare a variable using the keyword 'let'. There are some very important differences between 'var' and 'let' which we will learn about later, but just know that most people declare there everyday variables using 'let' these days.

 let kitchenStuff = 'pots';

 //Like we said earlier, we can think of variables as a container for data. Above we labelled our container kitchenStuff and put some pots in it. We can take the pots out of our container, and put something else in it by reassigning different data to that container.

 kitchenStuff = "mixer";

 //notice that once we have already declared our variable, we don't have to use the variable keyword again. It already exists, we just took the pots out of it and put the mixer in it. If we reassign a variable, it no longer holds its previous assignment. 
 
 //we can also assign or reassign variables to other variables

 let bakingStuff = 'whisk';

 kitchenStuff = bakingStuff;
//above we declared and assigned bakingStuff to whisk. Then we took the mixer out of kitchenStuff and put the whisk inside of kitchenStuff.

//another rule of variables is you can't declare the same variable twice.

let bedroomStuff = 'books';
let bedroomStuff = 'blankets';

//this is not allowed, and your text editor will tell you as much with and error
//SyntaxError: 'bedroomStuff' has already been declared

//Another rule about variables in JavaScript is :

//the variable must only be letters, digits, or the symbols $ and '_', the underscore symbol, and the first character is not allowed to be a number.

let kitchenStuff2 = "pans"

//variables are also case-sensitive

let garageStuff = 'tools';
let GARAGESTUFF = 'drills';

//as a convention though, stick with the camelcase we talked about earlier.

//There are also special words in JavaScript that you may not label your variables, let, return, null, new, switch, this, to name a few. Any modern text editor will tell you if you are breaking the rules so you will know to use a different name for your variable.



 //the 'const' keyword
//Another way of declaring variables is with the const keyword

const birthday = '04/20/1979';

//const is short for constant. As the noun implies, we use const to declare a variable that does not change, for example, a birthdate. Variables declared with const follow a few different rules then variables declared with let, but right now just know that a variable declared with const can't be reassigned. Attempting to reassign our previously assigned birthday variable above will give us an error.

birthday = '05/05/1989'; //TypeError: Assignment to constant variable


//Oher naming conventions
//Another consideration for declaring variables is to try to make them as intuitive and as straight forward as possible. Variable names should'nt be distracting or confusing. Think of naming variables with a 'Goldilocks' convention. You don't want your variable names to be too long and obnoxious to type, and you don't want your variables to be to short they don't refernce what they are labelling at all. 
//too long
let theLowerCaseRomanAlphabet = 'abcdefghijklmnopqrstuvwxyz';
//too short
let az = 'abcdefghijklmnopqrstuvwxyz';
//much better
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

//Hoisting
//Nowadays we use let and const to declare our variables, but originally all there was to use was 'var'. The key difference between the varaible declarations of var, and let and const is the scope which these key words create. Scope in computer programming is our accesibility to variables. There are basically two scopes, global and block scope (sometimes called local scope). A global variable is accesible anywhere in our document. A block scoped variable is only available inside of the curly brackets in which it was created. Using the var keyword always creates a globally scoped varaible. Variables declared with let and const always blocked scoped, unless declared globally. 

//To understand why this is important to know how our computer or browser executes our JavaScript file. When we run a js file, it is first scanned from top to bottom. Every variable declared with var and function declarations are found and then brought to the top of our document, (just there declarations, not there values or definitions). Then our js file runs again, executing our code from top to bottom. With var variables not being blocked scoped, this could cause problems within the order of our code being executed. Another quirk of the var key word is that it can be redeclared after initially being declared. If you lost track of a variable name and then redeclared it again assigning it a new value, this could also cause problems in your code.






//In general we want our variables to be as private as possible, ie, we only want then accessible where we need them.  

