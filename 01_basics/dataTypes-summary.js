 //Primitive data Type

 // 7 types : String , Number, Boolean, Null, Undefined, symbol, BigInt

 const score = 100
 const scoreValue = 100.3 

 const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); 

// const bigNumber = 2345665357



//Reference(Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name: "aaditya",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-Primitive)

let myname = "aaditya"

let anothername = myname
anothername = "raaz"

console.log(anothername);
console.log(myname);
 
// number => 2 to power 53
// bigint 
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique value

// object => reference type

console.log(typeof age);
