// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Batman", "Superman"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]);

// Array methods

// myArr.push(6); // Adds an element to the  end of the array
// myArr.push(7, 8);
// myArr.pop();

// myArr.unshift(5)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


// slice, splic 

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3)
console.log("C", myArr);

console.log(myn2);




