const ages = [23,33,64,12,45,65];
const ages2 = [34,75,78,23,56,23];
const  ages3 = [23,64,53,12,34,15];
const allAges = ages.concat(ages2).concat([100]).concat(ages3);
console.log(allAges);

// es6 method

const allAges2 = [...ages , ...ages2,100,...ages3]; // '...'  is  called spread operator.
console.log (allAges2);

// array max

const business = 500;
const minister = 300;
const shochib = 100;
const takaPoisa = [500,300,100];
const maximum = Math.max(business,minister,shochib); // old method
const maximum2 = Math.max (...takaPoisa); // es6 method
console.log(maximum2);