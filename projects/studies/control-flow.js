/**
 * Control Flow
 * 
 * 
 * 
 *In JavaScript control flow is the order that our code gets executed in. We can think about control flow like a set of directions to get from point A to point B. 

 1.)Go down the road about 1/2 a mile.

 2.)Take a right onto Main Street.

 3.)Go down Main Street until you see the park.

 4.)Take a left onto Parkway Drive

 5.)Your destination will be on the right.
 * 
 * 
 * The directions we give our code are usually based on a little more complex instructions than the ones above, and are typically dictated by conditions:
 * 
 * 1. If a condition is true
 *      2.Do this
 * 3. But if the condition is not true
 *      4.Do something else
 * 
 * To accomplish these conditional based directives in our code, JavaScript we can use has the if...else statement, which allows us to fire code based upon a condition being true or false.
 * 
 * 
 */

 //If...else Statement

let light = "green"

 if(light === 'red'){//condition

    console.log("Come to a stop")//execute if condition is true
    
    }else if(light === 'yellow'){//condition

    console.log("Stop if you safely can")//execute if condition is true

    } else {//if no above conditions are true...

        console.log("The light is green, drive!!!")//do this

    }

//The code above is modelled after a traffic light. As you can see, it begins with an 'if...'All if/else statements must begin with an if. You can not have a stand alone 'else if' or 'else'. Our if statement asks us, "Is the light red?". Inside of the if's curly brackets, we have the code that will execute if the light is indeed red. 

//If the light is not red, we will move on to our else if code block. The else if will only run if the above if statement is false. You can think of it as "If the light is not red, then check if the light is yellow". If the light is yellow, the code inside of the else if's curly brackets will execute. 

//Finally, if the light is neither red nor yellow, our else statement will run. Notice how the else statement doesn't have a condition to check. Thats because it represents the default code that we will execute if all the statements above it are false. If the light is not red, and the light is not yellow, then the light must be green, execute the code inside the else block.

//We can use this structure of the if...else/if...else to direct the logic of our code. We can string together as many conditional statements as we need too.



//Switch Statement
//Besides the if...else statement, JavaScript also has another option to deal with multiple conditional checks, the Switch Statement.

switch(condition) {
    case 'x':
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }


  //In the switch statement, the condition is passed into the parantheses is check against the cases contained in the switch statements curley brackets. If the first case is true, we are done, we 'break' out of the switch statement and no other checks happen. If the first case is false, we move on to the next case, and so on and so forth. If none of the cases are true, we have the default block at the very bottom that will execute.

  //Lets convert our traffic like if...else statement to a switch statement.
  let condition = 'green'
  
switch(condition) {
    case 'red':
    console.log("Come to a stop.")//execute if condition is true
      break;
    case 'yellow':
    console.log("Stop if you safely can.")//execute if condition is true
      break;
    default:
        console.log("The light is green, drive!!!")//do this
  }

  //A switch statement give us a more discriptive way to check a condition, and sometimes they are easier to tell what is happening in  the code. An if...else statement is a easier to type, but can get confusing if you have many conditions to check a variable against. You should be familiar with both in case they come up.