// const para = document.querySelector('div.error'); //1st p tag is grabbed

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// console.log(errors);

// get element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// get element by class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);
// errors.forEach(function(error){
//   console.log(error);
// });

// get elements by tag name
// const paras = document.getElementsByTagName('p');

// console.log(paras);
// console.log(paras[1]);

// const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'ninjas are awesome';

// const paras = document.querySelectorAll('p');

// paras.forEach(function(para) {
//   console.log(para.innerText);
//   para.innerText += ' new text';
// });

// const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>This is a new h2</h2>';

// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach(function(person) {
//   content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'net ninja site';

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green');

// const title = document.querySelector('h1');

// // title.setAttribute('style', 'margin: 50px');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = "";

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

console.log(paras);
paras.forEach(function(paragraph) {
  if (paragraph.textContent.includes('error')) {
    paragraph.classList.add('error');
  }
  if (paragraph.textContent.includes('success')) {
    paragraph.classList.add('success');
  }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');

// 3 class methods: add, remove, and toggle