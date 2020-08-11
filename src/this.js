// In JS, this keyword always returns a reference to the current object.
const person = {
  name: "Amka",
  walk() {
    console.log(this);
  },
};

// if we call a function as a method, in an object "this" always return a reference to that object
person.walk();

// const walk = person.walk;
// if we call a funcation as a standalone object or outside of an object this will return global object which is window object in browsers
// if strict mode is enabled it is gonna return undefined instead of window object

// BINDING THIS
// With "bind" method we can set the value of this permanently.
const walk = person.walk.bind(person);
walk();

// Conclusion
// Functions in JS are objects, they have properties and methods we can use.
