function logFullName(fName, lName) {
  console.log(fName + " " + lName);
}

logFullName("Reza", "Zand"); //return Reza Zand
logFullName("Ali"); // return Ali undefined // because we didn't write second param

//for solving this problem

//first solution
function logFullName2(fName, lName) {
  fName = fName || "Dear";
  lName = lName || "stranger";
  console.log(fName + " " + lName);
}

logFullName2(); //return Dear stranger
logFullName2("Ali"); // return Ali stranger

//second solution (recommended)

function logFullName3(fName = "Dear", lName = "stranger") {
  console.log(fName + " " + lName);
}

logFullName3(); //return Dear stranger
logFullName3("Ali"); // return Ali stranger

// Rest parameter
//... is rest parameter
function logFullName4(a, b, ...c) {
  for (let x in c) {
    console.log(x);
  }
}
logFullName4("sara", "aram", 1, 2, 3, 4, 5, 6); //return 0,1,2,3,4,5
