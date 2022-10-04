// function declaration (get automatically 'hoisted' to top)
// function greet() {
//   console.log('hello there');
// }
// function expression - store a function in a variable (don't automatically get 'hoisted' to top)
// const speak = function(name = 'luigi', time = 'night') { //passes default values to parameters in case invoked w/o parameters.
//   console.log(`good ${time} ${name}`);
// };

// greet();
// greet();
// greet();

// speak();
// speak();
// speak();

// arguments and parameters

// speak();
// speak('shaun');

// returning values

// const calcArea = function(radius) {
//   return 3.14 * radius ** 2;
// }

// const area = calcArea(5);
// console.log(area);

// arrow functions - fast track to returning values of functions
// const calcArea = (radius) => /*returns it*/ 3.14 * radius ** 2;

// const area = calcArea(5);
// console.log('area is:', area);

// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2))

const name = 'shaun';

// functions

const greet = () => 'hello';

let resultOne = greet();
console.log(resultOne);

// methods - called on the back of a variable or something
let resultTwo = name.toUpperCase();
console.log(resultTwo);

// callbacks and foreach

const myFunc = (callbackFunc) => {
  //do something
  let value = 50;
  callbackFunc(value);
};