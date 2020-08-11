const person = {
  name: "Amka",
  // walk is method in person object
  walk: function () {},
  talk() {},
};

// There are two way to access object
person.talk(); // If we know what propert or method that we are going to access, we use dot notation
person.name = "";
const targetMember = "name";
person[targetMember.value] = "John Doe"; // square bracket inside string indicates member of target // In pratical we use this bracket notation, when we don't know ahead of time what property or method we're going to access
