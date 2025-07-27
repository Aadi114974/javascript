//singleton 
// object.create
 
// object literal

const mySym = Symbol("key1")


const JsUser = {
    name: "Aaditya",
    "full name": "Aaditya Raaz",
    [mySym]: "mykey1",
    age: 25,
    location: "Delhi",
    email: "aadityaraazmth@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday" ]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log( JsUser[mySym]);

JsUser.email = "aaditya@1149.com"
// Object.freeze(JsUser)
JsUser.email = "aadityasingh@.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    }
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    }
    
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


