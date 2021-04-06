let people = {
  firstName: "Nima",
  lastName: "Zand",
  age: 60,
};

//ordinary way
/*this way is not good because if we change the property in new object
   the property in origin object will change too*/

let p1 = people;
p1.firstName = "Kiarash";
console.log(p1);
console.log(people);

//assign
//will change the property of new object with the origin if they were the same

let p2 = {
  firstName: "Saman",
  x: 10,
};
Object.assign(p2, people);
console.log(p2);

// ... (spread operator)

let p3 = {
  firstName: "Jalil",
  y: 20,
};

p3 = { ...p3, ...people };
console.log(p3);
