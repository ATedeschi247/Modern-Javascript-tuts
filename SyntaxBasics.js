// strings
console.log('hello world');

let email = 'test@html';
console.log(email);

// concatenation (joining things together)
let firstName = 'Brandon';
let lastName = 'Branderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// common string methods

email = "mario@thenetninja.co.uk";

// result = email.lastIndexOf('n');

// result = email.slice(0, 5);

// result = email.substr(4, 10);

result = email.replace('n', 'w');

console.log(result);

// numbers

let radius = 10;
const pi = 3.14;

// console.log(radius, pi);

// math operators +, -, *, /, ** (power of), % (remainder)

// console.log(10 / 2);
// result = radius % 3;
// result = pi * radius ** 2;

// order of operation - P E M D A S

// result = 5 * (10-3)**2;

// console.log(result);

let likes = 10;

// likes = likes + 1;
// likes++;
// likes--;

// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - Not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

result = 'the blog has ' + likes + ' likes';
console.log(result);

// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
likes = 30;

// concatenation way
// result = 'The blog called ' + title + ' by ' + ' has ' + likes + ' likes';
// console.log(result);

// template string way
result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;
console.log(html);

// other data types

// arrays

let ninjas = ['Shaun', 'Ryu', 'Chun-li'];

// ninjas[1] = 'Ken';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

// array methods

// result = ninjas.join(', ');
// result = ninjas.indexOf('Chun-li');
// result = ninjas.concat(['ken', 'crystal']);
result = ninjas.push('ken')
result = ninjas.pop();

console.log(result);

// null (intentional lack of value) and undefined (unintentional)
// null comes up as 0 when passed in equation, undefined is NaN

let age = null;

console.log(age, age + 3, `the age is ${age}`);

// booleans
console.log(true, false, "true", "false");

// methods can return booleans
email = 'luigi@netninja';
let names = ['mario', 'luigi', 'toad'];

// result = email.includes('!');
// result = names.includes('bowser');
// console.log(result);

// comparison operators
age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

name = 'shaun';
console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal'); // strings are in alphabetical order
console.log(name > 'Shaun'); // capitals are greater
console.log(name > 'Crystal');

age = 25;
// loose comparison (diff types can still be equal)
console.log(age == 25);
console.log(age == '25'); // is true
console.log(age != 25);
console.log(age != '25'); // is false

// strict comparison (diff types cannot be equal)
console.log(age === 25); // === means 'is same value and type?'
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');

// type conversion
let score = '100';

score = Number(score); //string to number
// console.log(score + 1);
// console.log(typeof score); //check type of variable

result = Number('hello');
result = String(50);
result = Boolean(0); //0 is only falsy number
result = Boolean('');// only empty strings are falsy

console.log(result, typeof result);