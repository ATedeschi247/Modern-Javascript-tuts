// for loops

// for (let i = 0; i < 5; i++) {
//   console.log('in loop', i);
// }

// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for (let i = 0; i < names.length; i++) {
//   // console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

// while loops
const names = ['shaun', 'mario', 'luigi'];
let i = 0;
while (i < 5) {
  console.log('in loop: ', i);
  i++;
}

i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}

// do while loops - run code at least once regardless of whether condition is true

i = 3;
do {
  console.log('val of i is: ', i);
  i++;
} while (i < 5);

// if statements
let age = 25;

if (age > 20) {
  console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if (ninjas.length > 3) {
  console.log("that's a lot of ninjas");
}

const password = 'p@ss12';

// logical operators
if (password.length >= 12 && password.includes('@')) { // only one statement in an else if chain will get run
  console.log('that password is a-mighty strong');
} else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
  console.log('that password is strong enough!');
} else {
  console.log('password is not strong enough');
}

// logical NOT (!)

let user = false;

if (!user) {
  console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {

  if (scores[i] === 0) {
    continue; //ignore code just for this loop and then move on to next iteration
  }

  console.log('your score: ', scores[i]);
  if (scores[i] == 100) {
    console.log('congrats, you got the top score');
    break;
  }
}

// switch statements - check multiple values of a variable (using strict equality)

const grade = 'A';

switch (grade) {
  case 'A':
    console.log('You got an A!');
    break;
  case 'B':
    console.log('You got an B!');
    break;
  case 'C':
    console.log('You got an C!');
    break;
  case 'D':
    console.log('You got an D!');
    break;
  case 'E':
    console.log('You got an E!');
    break;
  default:
    console.log('Not a valid grade');
}
// variables and block scope
age = 30; //has global scope

if (true) {
  const age = 40;                // this variable can be redefined because it has different scope
  const name = 'shaun';
  console.log('inside 1st code block: ', age, name);
  if (true) {
    const age = 50;
    console.log('inside second code block: ', age);
    var test = 'hello';          //but var always has global scope
  }
}

console.log('outside code block: ', age, name, test);