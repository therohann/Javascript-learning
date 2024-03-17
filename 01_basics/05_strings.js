const name = "Rohan"
const repoCount=50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my rep count is ${repoCount}`);

const gameName = new String('Rohann-nnn.nnn')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-8,8);
console.log(anotherString);

const newStringOne= "    Rohan   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url= "https://rohan.com/Rohan%20nihash"


console.log(url.replace('%20', '-'));

console.log(url.includes("roHan"));

console.log(gameName.split('-'));
