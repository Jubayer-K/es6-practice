
//  setting default parameter value


// method 1
function add(num1, num2) {
  if (num2 == undefined) {
    num2 = 0;
  }

  return num1 + num2;
}

const total = add(15);
console.log(total);

// method 2

function add2(num1, num2) {
  num2 = num2 || 0;
  return num1 + num2;
}

const total2 = add2(15);
console.log(total2);

//  method 3 (es6 method)

function add3(num1, num2 = 0) {
  return num1 + num2;
}

const total3 = add3(15);
console.log(total3);
