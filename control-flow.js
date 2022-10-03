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
const age = 25;

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

const scores = [50, 25, 0. 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  console.log('your score: ' + scores[i]);
}