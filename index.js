console.log("Aslan");
/*object*/
let person = {
  name: "Amir",
  age: 35,
};

person.name = "Morteza";
/*zamani ke nemidanim value key ma chi hast az [] estefade mikonim*/
person["name"] = "Ali";

console.log(person);

/*Array88*/
let selectedColor = ["blue", "green", "red"];
console.log(selectedColor[1]);
selectedColor[3] = "purple";
console.log(selectedColor.length);
console.log(selectedColor);

/* Function */

function greet(name, family) {
  console.log("Hello " + name + " " + family);
}

greet("Saylar", "Saly");

function square(number) {
  return number * number;
}
console.log(square(3));

/* nested if */
let a = 5;
let b = 2;

if (a > b) {
  console.log(11111);
  if (a == 4) {
    console.log(22222);
    if (b == 2) {
      console.log(33333);
    } else {
      console.log(44444);
    }
  } else {
    console.log(55555);
  }
} else {
  console.log(66666);
}

/* case if */

let z = 10;

switch (z) {
  case 1:
  case 2:
  case 3:
    console.log("Number");
    break;

  case 10:
    console.log("Oh Yeaa!");
    break;
  default:
    console.log("shit");
    break;
}

/* if...in */

let studentArray = ["aslan", "ali", "saied", "shahin"];

for (const key in studentArray) {
  console.log("The student name :", studentArray[key]);
}

for (let i = 0; i < studentArray.length; i++) {
  console.log("name : ", studentArray[i]);
}

// while

let degCent = [];
let degFar = [23, 45, 97];
let loopCounter = 0;

while (loopCounter < degFar.length) {
  let n = 5 / 9 + (degFar[loopCounter] - 32);
  degCent[loopCounter] = n.toFixed(2);
  loopCounter++;
}

console.log("Cent ==>", degCent);

// for...continue

let degCen = [];
let degFare = [33, "Hello", 97];
let loopCounter2;

for (loopCounter2 = 0; loopCounter2 <= degFare.length; loopCounter2++) {
  if (isNaN(degFare[loopCounter2])) {
    console.log(
      `the '${degFare[loopCounter2]}' with index of ${loopCounter2} is invalid`
    );
    continue;
    //continue yani in ye khat ro bikhial sho va boro soraghe badi ama agar break bod kolan baghie ro bikhial mishod
  }
  let m = 5 / 9 + (degFare[loopCounter2] - 32);
  degCen[loopCounter2] = m.toFixed(2);
}

console.log("Cent ==>", degCen);

// Object

let human = {
  firstName: "Ali",
  "": "WoooW",
  lastName: "Zia",
  age: 34,
  isAlive: true,
  book: {
    title: "Rich Dad",
    pages: 2000,
  },
  isWriting: function () {
    console.log("Hello stranger");
  },
};

console.log(human[""]);

human.isWriting();

//creat object

let anotherPerson = new Object();
console.log(anotherPerson);

let date = new Date();
console.log(date);

let thePerson = Object.create(Object.prototype);
console.log(thePerson);

let theBoy = Object.create({
  firstName: "Ali",
  "": "WoooW",
  lastName: "Zia",
  age: 34,
  isAlive: true,
  book: {
    title: "Rich Dad",
    pages: 2000,
  },
  isWriting: function () {
    console.log("Hello stranger");
  },
});
console.log(theBoy);

//inheritance

let theGirl = Object.create(human);
theGirl.middleName = "hossein";
console.log(theGirl);

//delete Object
console.log(human.age);
delete human.age;
console.log(human.age);

//testing object (4 ways for testing)

console.log("lastName" in human);

console.log(human.hasOwnProperty("age"));
console.log(theGirl.hasOwnProperty("middleName"));
console.log(theGirl.hasOwnProperty("lastName"));

console.log(human.propertyIsEnumerable("lastName"));

console.log(human.age === undefined);
console.log(human.age !== undefined);

// Enumerable Object
//1-Print all properties in an object that are enumerable - own and inheritance both show

for (p in human) {
  console.log(p);
}

for (p in theGirl) {
  console.log(p);
}

//2 if we want just own
for (p in theGirl) {
  if (theGirl.hasOwnProperty(p)) {
    console.log(p);
  }
}

//3 if we want just inheritance
for (p in theGirl) {
  if (!theGirl.hasOwnProperty(p)) {
    console.log(p);
  }
}

//4 print properties with specific type
for (p in human) {
  if (typeof human[p] === "function") {
    console.log(p);
  }
}

for (p in human) {
  if (typeof human[p] !== "function") {
    console.log(p);
  }
}

//5 print properties in an array except inheritance
console.log(Object.keys(theGirl));

console.log(Object.getOwnPropertyNames(theGirl));
console.log(Object.getOwnPropertyNames(human));
