// Seperate operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// [1] For Combining 2 or more arrays or element
// const combined = first.concat(second);
// With seperate operator
// const combined = [...first, ...second];

// console.log(combined);

// [2] For Cloning array
// const clone = [...first];
// console.log(clone);

// [3] For Combining object
// const first = {
//   name: "Amka",
// };
// const second = {
//   job: "Technologist",
// };

// const combined = {
//   ...first,
//   ...second,
//   location: "Australia",
// };
// console.log(combined);

// [4] For Cloning object
const first = { name: "Amka" };
const clone = { ...first };
console.log(clone);
