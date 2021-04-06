//Function Declaration

function printProp(a) {
  console.log(a);
}

printProp("Aslan"); //return Aslan

//Function Expression

const returnProp = function (b) {
  console.log(b);
};
returnProp(3); //return 3

//Arrow Function

const arrowFunc = (c) => {
  console.log(c);
};
arrowFunc("Ali"); //return Ali

const arrowFunc2 = (d, e) => console.log(d * e); //we can remove {}
arrowFunc2(2, 5); //return 10

//Nested function

function nestedFunc(a, b) {
  function square(x) {
    return x * x;
  }
  return Math.sqrt(square(a) + square(b));
}

console.log(nestedFunc(3, 4)); //return 5
