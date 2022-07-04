const person = {
  name : "Amka",
  // walk is method in person object
  walk : function() {},
  talk() {},
};

// There are two way to access object

// 1. If we know what property or method that we are going to access, we use dot
// notation
person.talk();
person.name = "";
const targetMember = "name";

// 2. In pratical we use this bracket notation, when we don't know ahead of time
// what property or method we're going to access
person[targetMember.value] =
    "John Doe"; // string inside square bracket indicate name of target member
