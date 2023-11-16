const wife = 'Jannat Khan';
// wife = 'Munia';  a "const" cannot change it's value.
console.log(wife);

const numbers =[123,432,234,3];
numbers[1] = 88;
numbers.push("hello");
console.log(numbers);
// can change or add property values in an array but cannot change the whole array.
// numbers =[234,235,345634,6456];
// console.log(numbers);  => this will show error.

const nayok = {name : 'Shakib Khan',starLevel : 'Super Star', netWorth:5729387};
// same goes with objects 
nayok.name = "Salman Khan";
console.log(nayok);

let patientName = "Rahim Chacha";
patientName = "Fatema Khala";
console.log(patientName);
// a let variable can change it's value multiple times
let sum = 0;
for (let i = 0; i <=10; i++) {
    sum = sum+i;
    console.log(i);
}
//=> this will show error console.log(i);  'let' variables cannot show out side functions or loops . 'let' is leakproof. 