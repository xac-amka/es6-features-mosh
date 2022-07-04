// const square = function (number) {
//   return number * number;
// }; // old version

const square = (number) => number * number;
console.log(square(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

// const activeJobs = jobs.filter(function (job) { return job.isActive; });
const activeJobs = jobs.filter((job) => job.isActive);

console.log(activeJobs);

// Arrow function and THIS keyword

// const person = {
//   talk() {
//     // In an old we used
//     var self = this;
//     setTimeout(function () {
//       // This setTimeout callback function is not part of any objects. It is not like talk method in person object. It is a standalone function.
//           
//       // In case of callback function strict mode does not overwrite this behaviour. So, logs windows object. To solve this use self.
//       console.log("this", this);
// 
//       console.log("self", self); 
//     }, 1000);
//   },
// };

const person = {
  talk() {
    //  Arrow function don't rebind this keyword. In automatically inherit this.
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  },
};

person.talk();
