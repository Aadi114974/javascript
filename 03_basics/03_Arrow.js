const user = {
    username: "aaditya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }  
}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function aadi(){
//     let username = "raaz"
//     console.log(this.username);
//     }

//     aadi()

// const aadi = function () {
//     let username = "raaz"
//     console.log(this.username);
// }

const aadi =  () => {
    let username = "raaz"
    console.log(this);
}


// aadi()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "aaditya"})


console.log(addTwo(5, 6))


// const myArray = [1, 2, 3, 4, 5]

// myArray.forEach()