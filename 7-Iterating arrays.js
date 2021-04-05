//for...of

let letters = [..."Hello world"];
console.log(letters);

let string = "";

for (const a of letters) {
  string += a;
}
console.log(string);

//forEach
let string2 = "";

letters.forEach((b) => {
  string2 += b;
});

console.log(string);

//for

let string3 = "";

for (let i = 0; i < letters.length; i++) {
  string3 += letters[i];
}

console.log(string3);

//map

let string4 = "";

letters.map((c) => {
  string4 += c.toUpperCase();
});

console.log(string4);

//filter

let a = [1, 2, 3, 4, 5, 6];

console.log(a.filter((x) => x > 2));

console.log(a.filter((x, i) /*i=index*/ => i % 2 === 0));

//findIndex

let b = [1, 2, 4, 5, 6, 3, 11];

console.log(b.findIndex((x) => x === 3));

//find

console.log(b.find((x) => x % 3 == 0));

//every
//every element should pass the condition
console.log(b.every((x) => x < 10));

//some
//at least one of the element pass the condition

console.log(b.some((x) => x > 10));
