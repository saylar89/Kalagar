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
