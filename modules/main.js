//import named exports using destructuring
import {add,subtract,PI} from './math.js'
console.log(add(5,3));
console.log(subtract(5,3));
//Create a constant variable pi in maths.js and import that in main.js
//import {PI} from './math.js'
console.log("Value of PI:",PI);
import user from './user.js'
console.log(user())   

//importing default export
import fetchuser from './user.js' 
//fetchuser is the name we choose while importing, it can be anything
console.log(fetchuser())
