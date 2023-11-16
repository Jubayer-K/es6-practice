const firstName = "Jubayer";
const lastName = "Khan";
const fullName = firstName + " " + lastName + " is a good boy"; //Old method
const fullName2 = `${firstName} ${lastName} ${2348 + 2393} is a good boy`; //es6 method
console.log(fullName2);

const multiLine = "I love you\n" + "I miss you\n" + "I need you"; // old method
const multiLine2 = `I love you
I need you 
I miss you`;
console.log(multiLine2);