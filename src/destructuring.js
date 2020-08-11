const address = {
  street: "13-r horoolol",
  city: "Ulaanbaatar",
  country: "Mongolia",
};

// const street = address.street;
// const city = address.city;
// const country = address.country;

// object next to colon is aliasing object.
const { street: st, city: c, country: ct } = address;

console.log(`I live in ${st}, ${c}, ${ct}`);
