//New features in ES6

//short hand properties

let x = 3;
let y = 6;

let o = {
  x, //insted x : x or x : 3
  y, //instead y : y or y : 6
};

console.log(o);

//Computed propert names

const PROPERTY_NAME = "P1";
function COMPUTEDPROPERTYNAME(value) {
  return "P" + value;
}

let p = {
  [PROPERTY_NAME]: 1,
  [COMPUTEDPROPERTYNAME(3)]: 4,
};

console.log(p);

// Spread Operator (added in 2018)
//It can copy one object in another one/ second object overwrite in the first one
// it changes only own peroperties

let a1 = { b: 1, c: 2 };
let a2 = { d: 4, b: 9 };

let a3 = { ...a1, ...a2 };
console.log(a3);

let a4 = Object.create({ c: 10 });
let a5 = { ...a1, ...a4 };
console.log(a5);

//short hand method

let human2 = {
  firstName: "Ali",

  isWriting: function (value) {
    console.log("Hello stranger " + value);
  },
};

human2.isWriting("mansour");

let people2 = {
  firstName: "Ali",

  isWriting(name) {
    console.log("Hello stranger " + name);
  },
};

people2.isWriting("Aslan");

const methodName = "isWriting";
let people3 = {
  firstName: "Ali",

  [methodName](name) {
    console.log("Hello stranger " + name);
  },
};

people3.isWriting("Nader");
