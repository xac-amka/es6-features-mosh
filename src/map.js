// In react we use array map function for render lists.
const colors = [ "red", "green", "blue" ];
// Map function is to transform each element in this array. It takes one item in
// a time and returns a new item. This map function returns new modified array.
const items =
    colors.map((color) => `<li>${color}</li>`); // Using template literals

console.log(items);
