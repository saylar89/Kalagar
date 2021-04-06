//for...of

let letters = [..."Hello world"];
console.log(letters); //return [ 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]

let string = "";

for (const a of letters) {
  string += a;
}
console.log(string); //return Hello world

//forEach
let string2 = "";

letters.forEach((b) => {
  string2 += b;
});

console.log(string); //return Hello world

//for

let string3 = "";

for (let i = 0; i < letters.length; i++) {
  string3 += letters[i];
}

console.log(string3); //return Hello world

//map

let string4 = "";

letters.map((c) => {
  string4 += c.toUpperCase();
});

console.log(string4); //return HELLO WORLD

//filter

let a = [1, 2, 3, 4, 5, 6];

console.log(a.filter((x) => x > 2)); //return [3,4,5,6]

console.log(a.filter((x, i) /*i=index*/ => i % 2 === 0)); //return [1,3,5]

//findIndex

let b = [1, 2, 4, 5, 6, 3, 11];

console.log(b.findIndex((x) => x === 3)); //return 5

//find

console.log(b.find((x) => x % 3 == 0)); //return 6

//every
//every element should pass the condition
console.log(b.every((x) => x < 10)); //return false

//some
//at least one of the element pass the condition

console.log(b.some((x) => x > 10)); //return true
