// const -> scoped by block, value cannot be reassigned
// let -> scoped by block, use it only for reassignment if needed
// var -> scoped by function, prefer not use it.

// // With var
// function sayHello() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// // With let
// function sayHello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }

// sayHello();
const x = 1;
x = 2;
console.log(x);
