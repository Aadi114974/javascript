// let myName = "aaditya   "
// let mychannal = "chai   "

// console.log(myName.truelength);


let myHeros = ["thor","spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        }
}

Object.prototype.aaditya = function(){
    console.log(`aaditya is present in all objects`);
}

Array.prototype.heyAditya = function(){
    console.log(`Aditya sys hello`);
}

// heroPower.aaditya()
// myHeros.aaditya()
// myHeros.heyAditya()
// heroPower.heyAditya()

// inheritance

const User = {
    name:"raaz",
    email:"raaz@google.com"
}
const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable: false
}


const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__=User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "Raaz   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"aaditya".trueLength()
"iceTea".trueLength()