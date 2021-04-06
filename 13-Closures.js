//we want to access a local variable inside a finction

let scope = "global";

function check() {
  let scope = "local";
  function f() {
    return scope;
  }
  return f();
}

console.log(check()); //return local //now we access a local variable

//we can write above code like this too

function check() {
  let scope = "local";
  function f() {
    return scope;
  }
  return f;
}

console.log(check()()); //return local // we remove () from f and write 2 () after check
