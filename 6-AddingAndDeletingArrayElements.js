let a = [1, 2, 3, 4, 5];

a.push(6);
console.log(a); // return [1,2,3,4,5,6]

a.unshift(0);
console.log(a); // return [0,1,2,3,4,5,6]

a.pop();
console.log(a); // return [0,1,2,3,4,5]

a.shift();
console.log(a); // return [1,2,3,4,5]

delete a[0];
console.log(a); //return [ , 2,3,4,5]
