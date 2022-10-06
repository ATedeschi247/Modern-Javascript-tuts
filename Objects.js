// object literals - they use curly braces

const blogs = [
  { title: 'why mac & cheese rules', likes: 30 },
  { title: '10 things to make with marmite', likes: 50 }
];

console.log(blogs);

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: [
    { title: 'why mac & cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }
  ],
  login() {
    console.log('user logged in');
  },
  logout() {
    console.log('the user logged out');
  },
  logBlogs() {
    // console.log(this.blogs);
    console.log('this user has written the following blogs:');
    this.blogs.forEach(function(blog) {
      console.log(blog.title, blog.likes);
    });
  }
};

user.logBlogs();

// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));

// copies of reference types only copy the pointer - data remains original

// primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

userTwo.name = 'chun-li';
console.log(userOne, userTwo);