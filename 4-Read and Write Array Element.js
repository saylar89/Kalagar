let a = ["worlld"];

a[1] = 2;

let i = 2;
a[i] = 3;
a[i + 1] = 1;

console.log(a);

a[a[i]] = a[0];

console.log(a);

a["go"] = 18;

console.log(a);
