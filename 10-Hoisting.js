//We can call a function before that just in function declaration.

funcDec(10); //return 10

function funcDec(a) {
  console.log(a);
}

funcExp(15); //return funcExp is not defined

const funcExp = function (b) {
  console.log(b);
};

arrowFunc(22); //return arrowFunc is not defined

const arrowFunc = (c) => {
  console.log(c);
};
