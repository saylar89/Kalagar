//global variable

let a = "Nader";

//local variable

function fName() {
  let a = "Morteza";
}

console.log(a);

// You can see that we can't use a local variable outside the function
// So we can use namespace

(function (namespace) {
  namespace.firstName = "Kiarash";
  namespace.lastName = "Karimi";

  namespace.fullName = function () {
    return namespace.firstName + " " + namespace.lastName;
  };
})((window.namespace = window.namespace || {}));

console.log(namespace.fullName);
