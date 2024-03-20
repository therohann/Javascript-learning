// Arrays
// Javascript arrays are resizable
// Arrays make shallow copies



const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktiman","iron-man"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);
// console.log(myArr2[3]);


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));


const newArr = myArr.join()


// console.log(myArr);
// console.log(typeof newArr);
// console.log(newArr);


// slice(it doesn't modify the original array), splice(The splice() method is used to add or remove elements from an array. It modifies the original array and returns an array containing the removed elements.)

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);


