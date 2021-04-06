// slice()
// negative number count from the end
let a = [1, 2, 3, 4, 5, 6, 7];
console.log(a.slice(2)); //return [3,4,5,6,7]
console.log(a.slice(2, 4)); //return [3,4]
console.log(a.slice(2, -1)); //return [3,4,5,6]
console.log(a.slice(-3, -2)); //return [5]

// splice()
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let c = b.splice(3); //c includes numbers that remove from b
console.log(b); //return [1,2,3]
console.log(c); //return [4,5,6,7,8,9]

let d = [1, 2, 3, 4, 5, 6, 7, 8];
let e = d.splice(1, 2);
console.log(d); //return [1,4,5,6,7,8]
console.log(e); //return [2,3]

// indexOf
let f = [1, 2, 3, 4, 5, 6, 3, 4, 3, 3];
console.log(f.indexOf(3)); //return 2
console.log(f.lastIndexOf(3)); //return 9
