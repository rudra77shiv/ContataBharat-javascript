
// Type to create an objects in javascript
1//  object literal
// You can create an object using an object literal. An object literal uses { } to create an object directly.

// An object is created with a key:value pair.
const person = {
  name: "KISHAN",
  age: 30,
  profession: "Software Developer",
};

2// constructor function
// In the above example, the Person() constructor function is used to create an object using the new keyword.

// new Person() creates a new object.


function Person(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;
}

const detail = new Person("komal", 22, "web Developer");

// Type to create an array in javascript.

// Using Array Literals: We can create an array using array literals by enclosing a comma-separated list of values in square brackets ([]).

let arr = [1, 2, 3, 4, 5];


// Using the Array constructor: We can create an array using the Array constructor by passing comma-separated values as arguments.
let ar = new Array(1, 2, 3, 4, 5);

// Spread Operator
// Spread operator, as we saw in the different ways to create objects, works similarly and helps create the Arrays faster.
const moreAnimals = ["?", ...animals];
