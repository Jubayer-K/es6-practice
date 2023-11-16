function doubleIt(num) {
  return num * 2;
}

const result = doubleIt(5);
console.log(result);

//  declaring functions as variable

const doubleIt2 = function (num) {
  return num * 2;
};
const result2 = doubleIt2(190);
console.log(result2);

//  es6 method of declaring functions

const doubleIt3 = (num) => num * 2;
const result3 = doubleIt3(50);
console.log(result3);

// const add = (x,y) => x+y;   in case of multiple parameter use '()' parenthesis
// const give5 = () => 5;   without parameter just use empty '()' parenthesis


//  multiline arrow function (es6)
const doMath = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum *diff;
    return result; // is case of multiline arrow functions return should be declared manually
}

const result4 = doMath(10,5);
console.log(result4);