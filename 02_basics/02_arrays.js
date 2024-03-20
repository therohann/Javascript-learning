const marvel_heroes = ["thor", "Ironman"," spiderman"]
const dc_heroes = ["superman", "flash"," batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]); //prints flash

const allHeros=marvel_heroes.concat(dc_heroes)
//console.log(allHeros); //[ 'thor', 'Ironman', ' spiderman', 'superman', 'flash', ' batman' ]

const all_new_heroes = [...marvel_heroes,...dc_heroes]

//console.log(all_new_heroes); //[ 'thor', 'Ironman', ' spiderman', 'superman', 'flash', ' batman' ]


const another_array = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]


//const real_another_array = another_array.flat(1) //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
const real_another_array = another_array.flat(Infinity) // [1, 2, 3, 4, 5,6, 7, 6, 7, 4, 5]

  
// console.log(real_another_array);




console.log(Array.isArray("Rohan"));
console.log(Array.from({name: "Rohan"})); // [] //you have to specify what type of array you are giving




let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3));






