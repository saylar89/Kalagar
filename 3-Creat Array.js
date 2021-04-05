let a = [1, 2, 3];
let b = [20, ...a, 90];

console.log(b);

let t = a;
t[0] = 33;
console.log(t);
console.log(a);
// in this case a will change too!! We don't want it. So we change it in below

t = [...b];
t[0] = 99;
console.log(t);
console.log(b);
// in this case b didn't change

let digits = "11223344mmmff";

let s = [...digits];
console.log(s);
let z = [...new Set(digits)];
console.log(z);
//set remove duplicate values

//Array Constructor - new Array()

let a1 = new Array(10);
//it creat an array with 10 index but empty!
console.log(a1);

let a2 = new Array(10, 1, 2, 3, 4);
console.log(a2);

let a3 = Array.of(10);
//if we want an array with just one number
console.log(a3);

//Array.from()

let original = [1, 2, 3, 4, 5];
let copy = Array.from(original);
console.log(copy);
