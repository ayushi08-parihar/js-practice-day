//Destructing in JavaScript
//Array Destructing 
const languages=['JavaScript','Python','Java','C++'];
//To extract the specific languages from array
const [first,second]=languages;
console.log(`first: ${first} ,second: ${second}`); 
//Object Destructing
//This is java script object
const student={
    name:'Ayu',
    course:'React',
    year:2026
}
console.log(student);
//destructing the object
const {name,course}=student
console.log(`name: ${name} ,course: ${course}`);  //` backtick operator
//Another example of object destructing
const person=['red','blue','green'];
const [c1,c2]=person;
console.log(c1,c2);


//Skipping elements in array destructing
const marks=[89,67,56,67];
const [,science]=marks;
console.log(marks);

//default values in destructing
const scores=['100'];
const [maths,physics=0]=scores;
console.log(maths,physics);


//Renaming variables in object destructing
const user={
    username:'john_doe',}
const {username:uname}=user;
console.log(uname);

//Traditional function 
function add(a,b){
    return a+b;
}
console.log(add(8,3));
//Arrow function(MODERN JAVASCRIPT FUNCTION STYLE)
const addArrow=(a,b)=>a+b;
console.log(addArrow(15,3));
//Arrow function with multiple statements
const addMultiple=(a,b)=>{
    const sum=a+b;
    return sum;
}
console.log(addMultiple(9,6));
//Arrow function with single argument
const square=num=>num*num;
console.log(square(4));


//Function Parameter Destructing
//Important reactjs props
const printStudent=({sName,sRoll})=>{
    console.log(sName,sRoll);
}
//CALLING THE FUNCTION
printStudent({sName:'Ayu',sRoll:101});
