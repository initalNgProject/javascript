Javascript By TM: -
  // Log to console
  console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1, 2, 3, 4]);
console.log({
  a: 1,
  b: 2
});
console.table({
  a: 1,
  b: 2
});

console.error('This is some error');
console.clear();
console.warn('This is a warning');
console.time('Hello');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.timeEnd('Hello');


// var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Can not start with number

// // Multi word vars
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;

// LET
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST
// const name = 'John';
// console.log(name);
// Can not reassign
// name = 'Sara';
// Have to assign a value
// const greeting;

const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara';
person.age = 32;

// console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);

// PRIMITIVE

// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
const today = new Date();
console.log(today);
console.log(typeof today);

let val;

// Number to string
val = String(555);
val = String(4 + 4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1, 2, 3]);

val = parseInt('100.30');
val = parseFloat('100.30');

// Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);


const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

console.log(val);

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('foo');

console.log(val);

const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';

html = '<ul>' +
  '<li>Name: ' + name + '</li>' +
  '<li>Age: ' + age + '</li>' +
  '<li>Job: ' + job + '</li>' +
  '<li>City: ' + city + '</li>' +
  '</ul>';

function hello() {
  return 'hello';
}

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;

// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {
  a: 1,
  b: 1
}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,3);
// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort(function(x, y){
//   return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find
function over50(num) {
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function () {
    return 2017 - this.age;
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [{
    name: 'John',
    age: 30
  },
  {
    name: 'Mike',
    age: 23
  },
  {
    name: 'Nancy',
    age: 40
  }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);

// if(something){
//   do something
// } else {
//   do something else
// }

const id = 100;

// // EQUAL TO
// if(id == 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id != 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id === 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// GREATER OR LESS THAN
// if(id <= 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE

const color = 'yellow';

// if(color === 'red'){
//   console.log('Color is red');
// } else if(color === 'blue'){
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS

const name = 'Steve';
const age = 70;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if (id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

if (id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');


const color = 'yellow';

switch (color) {
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
    break;
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);

// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') {
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESIONS

const square = function (x = 3) {
  return x * x;
};

// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log('Hello '+ name);
// })('Brad');

// PROPERTY METHODS

const todo = {
  add: function () {
    console.log('Add todo..');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function () {
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();


// FOR LOOP

// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('2 is my favorite number');
//     continue;
//   }

//   if(i === 5){
//     console.log('Stop the loop');
//     break;
//   }

//   console.log('Number '+ i);
// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE

// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// MAP
// const users  = [
//   {id: 1, name:'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);

// FOR IN LOOP
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}

// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
//alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
//window.location.href = 'http://google.com';
//Reload
//window.location.reload();

// History Object

// window.history.go(-2);
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;


console.log(val);

// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

// test();

// if(true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// for(var a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }

console.log('Global Scope: ', a, b, c);


let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (script) {
  console.log(script.getAttribute('src'));
});

console.log(val);

// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Conver HTML Collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function (item, index) {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li, index) {
  li.style.background = '#ccc';
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);

// Create element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);

// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   //e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  //console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// card.addEventListener('mouseenter', runEvent);
// Mouseleave
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent);
// Mouseout
// card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
//taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change
select.addEventListener('change', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  //console.log(e.target.value);

  // heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
}

// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// EVENT DELGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}

// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function (e) {
  const task = document.getElementById('task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function (task) {
  console.log(task);

});

const posts = [{
    title: 'Post One',
    body: 'This is post one'
  },
  {
    title: 'Post Two',
    body: 'This is post two'
  }
];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({
  title: 'Post Three',
  body: 'This is post three'
}, getPosts);

Javascript Ajax operations: -
  App.js: -
  const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
easyHttp.js: -
  function easyHTTP() {
    this.http = new XMLHttpRequest();
  }

// Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}


// Make an HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}
Promises: -
  const posts = [{
      title: 'Post One',
      body: 'This is post one'
    },
    {
      title: 'Post Two',
      body: 'This is post two'
    }
  ];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({
    title: 'Post Three',
    body: 'This is post three'
  })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });
Fetch API: -
  document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('test.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}


// Get local json data
function getJson() {
  fetch('posts.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}


// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}
Posts.json: -[{
    "title": "Post One",
    "body": "This is post one"
  },
  {
    "title": "Post Two",
    "body": "This is post two"
  },
  {
    "title": "Post Three",
    "body": "This is post three"
  }
]
Shorter functions: -
  // const sayHello = function() {
  //   console.log('Hello');
  // }

  // const sayHello = () => {
  //   console.log('Hello');
  // }

  // One line function does not need braces
  // const sayHello = () => console.log('Hello');

  // One line returns
  // const sayHello = () => 'Hello';

  // Same as above
  // const sayHello = function() {
  //   return 'Hello';
  // }

  // Return object
  // const sayHello = () => ({ msg: 'Hello' });

  // Single param does not need parenthesis
  // const sayHello = name => console.log(`Hello ${name}`);

  // Multuiple params need parenthesis
  // const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

  // sayHello('Brad', 'Traversy');

  const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);
promises with fetch: -
  app.js: -
  const http = new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));

easyHttp2.js: -

  /**
   * EasyHTTP Library
   * Library for making HTTP requests
   *
   * @version 2.0.0
   * @author  Brad Traversy
   * @license MIT
   *
   **/

  class EasyHTTP {

    // Make an HTTP GET Request 
    get(url) {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
      });
    }

    // Make an HTTP POST Request
    post(url, data) {
      return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
      });
    }

    // Make an HTTP PUT Request
    put(url, data) {
      return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
      });
    }

    // Make an HTTP DELETE Request
    delete(url) {
      return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(() => resolve('Resource Deleted...'))
          .catch(err => reject(err));
      });
    }

  }

Aync and await :-
// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = false;

//   if(!error){
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once its resolved
  const data = await response.json();

  // only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));


Javascript By Mosh Hamidani: -


  // const circle = {
  //     radius:1,
  //     location:{
  //         x:1,
  //         y:2
  //     },

  // }

  // Factory Function (which is return the object)
  function createCircle(radius) {
    return {
      radius,
      draw: function () {
        console.log('draw ' + this.radius);
      }

    }
  }
//const circle = createCircle(2); // Pascal Notation

// Constructor Function

function Circle(radius) {
  let color = "red";
  // instance members
  this.radius = radius;
  let defaultLocation = {
    x: 10,
    y: 20
  };
  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  // "let computeOptimumLocation = function(factory){
  //     // dgfdf
  // } "
  // this.draw = function(){
  //     // defaultlaoction
  //     // compteoptimunlocation
  //   //  computeOptimumLocation(0.7);
  //     console.log('hello world good');
  // };
  // instance methods
  this.move = function () {
    // this.draw();
    console.log('move');
  }

  Object.defineProperty(this, 'defaultLlocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y)
        throw new Error('Invalid Location');
      defaultLocation = value;

    }
  });
}

//console.log(Circle.prototype === c1.__proto__);// true
// prototype members
Circle.prototype.draw = function () {
  this.move();
  console.log('draw');
}
Circle.prototype.toString = function () {
  return 'circle with radius' + this.radius;
}
//Circle.call({},1,2,3,4);
//Circle.apply({},[1,2,3,4]);

//const Circle1 = new Function('radius',) 
//const another  = new Circle(266);

const c1 = new Circle(3);
const c2 = new Circle(7);
c1.draw();
console.log(c1.draw());
//another.getDefaultLocation();
//circle.draw();
//another.computeOptimumLocation(0.5);
//another.defaultLocation = 55;
// another.draw();

// another.location = {x:1,y:4};

// another['location'] = {x:5,y:7};
// // dynamically add properties
// const propertyName ='location';

// another['propertyName'] = {x:75,y:57};

// delete another['location'];
//enumerating
// for(let key in another){
//     if(typeof another[key] != 'function')
//   //  console.log(key,another[key]);
// }

//const keys = Object.keys(another);

//console.log(keys);

//if( 'radius' in another)

console.log('circle has radius');

let x = {
  value: 36
};

let y = x;

x.value = 20;

let obj = {
  value: 20
};

function increase(number) {
  obj.value++;
}

increase(obj);
console.log(obj);

let person = {
  name: "Nagarjuna"
};
// console.log(person);

// for(let key in person)
// console.log(key);

// console.log(Object.keys(person));

// let objectBase = Object.getPrototypeOf(person);
// console.log(objectBase);

// let descriptor = Object.getOwnPropertyDescriptor(objectBase,'toString');
// console.log(descriptor);

Object.defineProperty(person, 'name', {
  writable: true,
  enumerable: true,
  configurable: false
});

delete person.name;
console.log(Object.keys(person));
console.log(person);

let obj1 = {};
console.log(obj.__proto__);
console.log(Object.prototype);

let arr = [];
console.log(arr.__proto__);
console.log(Array.prototype);
//console.log(circle);
console.log(Circle.prototype);

function Circle1(radius) {
  // instance members
  this.radius = radius;

  this.move = function () {
    this.draw();
    console.log('move');
  }
}

// Prototype Members

Circle1.prototype.draw = function () {
  this.move();
  console.log('draw');
}

const cc = new Circle(4);

// return instance members
console.log(Object.keys(cc));

for (let key in cc)
  // returns the instance members and prototype members

  console.log(key);
console.log(cc.hasOwnProperty('draw')); // false

console.log(cc.hasOwnProperty('radius')); //  true

Array.prototype.shuffle = function () {
  // shuffle definition
  console.log('raja');
}

let myArray1 = [];
myArray1.shuffle();

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log('duplicate')
}

function Circle2(radius, color) {
  Shape.call(this, color)
  this.radius = radius;
}

Circle2.prototype = Object.create(Shape.prototype);

Circle2.prototype.draw = function () {
  console.log('draw');
}

const s = new Shape();
const c = new Circle2(4, "red");
console.log(c);

function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
    consoe.log('eat');
  }
};

const canWalk = {
  walk: function () {
    console.log('walk');
  }
};

const canSwim = {
  swim: function () {
    console.log('swim');
  }
}

function Person() {

}

function Goldfish() {

}

mixin(Person.prototype, canEat, canWalk);
const person1 = new Person();
console.log(person1);

mixin(Goldfish.prototype, canEat, canWalk);
const goldfish = new Goldfish();
console.log(goldfish);

//ES6

// function Circle(radius){
//     this.radius = radius;

//     this.draw = function(){
//         console.log('draw');
//     }
// }

class Circle5 {
  constructor(radius) {
    this.radius = radius;
    this.move = function () {}
  }
  // instance method
  draw() {
    console.log('draw');
  }
  // Static methods
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle5(radius);
  }
}

const c5 = Circle5.parse('{"radius":43}');

console.log(c5);

//sayGoodbye();
//console.log(number); // hoisting
// Function Declaration

function sayHello() {}

sayHello();
// Function Expression

const sayGoodbye = function () {};
const number = 5;

//const cc1 = new Circle9();

// Class Declaration
class Circle9 {

}

// class Expression

const Square = class {

};

class Math2 {
  static abs(value) {

  }
}

Math2.abs('5');

// this (function expression)
const Circle44 = function () {
  this.draw = function () {
    console.log(this);
  }
}

const ccc = new Circle44();

// Method call(this is belongs to constructor)
ccc.draw();

const draw = ccc.draw;
// Function call (it is belongs to global object points to window level)
draw();

class Circle7 {
  draw() {
    console.log(this); // undefined
  }
}

const c11 = new Circle7();
c11.draw();

const c21 = c11.draw;
c21();


Javascript BY Filip: -
  Index.js: -
  const Car = require('./Car');
const CarService = require('./services/CarService');
const FancyCar = require('./FancyCar');

const carService = new CarService("SuperCars", "Spain Mangla");

// carService.getSecretDocuments().then((superSecretDocuments) =>{
//     console.log(superSecretDocuments)
// }).catch((err) =>{
//     console.log(err);
// });


const docObservable = carService.getSecretDocuments();

docObservable.subscribe({
  next: (secretDocs) => {
    console.log(secretDocs);
  },
  error: (error) => {
    console.log(error);
  },
  complete: () => {}
})

// const car1 = new Car();
// const car2 = new Car('ford','fiesta',2019);
// const car3 = new Car('fiat', 'punto', 2011);
//  const car4 = new Car('toyota', 'yaris', 2003);
// debugger;
//  const car5 = new FancyCar('mercedess', 'benzz', 2015);
//  car5.displayCarInformation();
// debugger;
// carService.addCar(car1);
// carService.addCar(car2);
// carService.addCar(car3);
// carService.addCar(car4);

//  [a,b,...rest] = carService.getAllCars();
//   console.log(...rest);
//  const allCars = carService.getAllCars();

//  //console.log(...rest);
//   console.log(allCars);

//  const newArray = [];

//  newArray.push(...allCars);

//  console.log(...newArray);

// const {brand, model, year } = car1;

//  const carBrand = car1.brand;
//  const carModel = car1.model;
//  console.log(carBrand);
//  console.log(carModel);

// car1.displayCarInformation();
// carService.addCar(car1);
// carService.addCar(car2);
// console.log('hello world');
carService.displayAllCars();
// name = "filip";

// if(true) {
//  // let   name = "super filip";
// }
// //console.log(name);

// function displayFilip(){
//     console.log('filip');
// }

// //callback functions
// function displayName(callbackFunction) {

//     callbackFunction();

// }

// displayName(displayFilip);
// displayFilip();
// displayFilip();
// displayFilip();
// displayFilip();

// function getName(name) {
//     return  name;
// }

// const getName2 = name => name;


// console.log(getName("filip"));

// console.log(getName2("david"));

CarService.js: -
  const Promise = require('../Promise');
const Observable = require('../Observable');

function forEach(array, callbackFunction) {
  for (let i = 0; i < array.length; i++) {
    const arrayElement = array[i];

    callbackFunction(arrayElement);
  }

}

class CarService {
  constructor(name, country) {
    this.name = name;
    this.country = country;
    this.carsToRepair = [];
  }
  addCar(car) {
    this.carsToRepair.push(car);
  }

  customNameFunction() {
    console.log('display custom function');
  }
  displayAllCars() {
    // this.carsToRepair.forEach(function(car){
    //     car.displayCarInformation();
    // });
    const self = this;

    forEach(this.carsToRepair, function (car) {
      self.customNameFunction();
      car.displayCarInformation();
    });
  }
  getAllCars() {
    return this.carsToRepair;
  }
  getSecretDocuments() {
    //    return new Promise((resolve,reject)=> {
    //             setTimeout(function(){
    //                 let secretDocs ='SUPER SECRET DOCUMENTS,DONT SHARE';
    //                 reject(secretDocs);
    //             }, 2000);
    //         });
    return new Observable((observer) => {
      setTimeout(function () {
        let secretDocs = 'SUPER SECRET DOCUMENTS,DONT SHARE';
        observer.next(secretDocs);
      }, 2000);
    });
  }

}

module.exports = CarService;
Car.js: -
  class Car {
    constructor(brand = "default brand", model = "default model", year) {
      this.brand = brand;
      this.model = model;
      this.year = year || 2000;
    }
    displayCarInformation() {
      console.log(this.brand + ' ' + this.model + ' ' + this.year);
    }
  }

module.exports = Car;
FancyCar.js: -
  const Car = require('./Car');

class FancyCar extends Car {
  constructor(brand, model, year) {
    super(brand, model, year);
    this.priority = 'HIGH PRIORITY';
  }

  getStatus() {
    console.log('2 hours to finish repair');
  }

  displayCarInformations() {
    console.log('I AM SUPER FANCY CAR!!!!');
    super.displayCarInformations();
  }
}

module.exports = FancyCar;
Promise.js: -
  class Promise {
    constructor(executionFunction) {
      this.promiseChain = [];
      this.handleError = () => {};

      this.onResolve = this.onResolve.bind(this);
      this.onReject = this.onReject.bind(this);

      executionFunction(this.onResolve, this.onReject);
    }

    then(onResolve) {
      this.promiseChain.push(onResolve);

      return this;
    }

    catch (handleError) {
      this.handleError = handleError;

      return this;
    }

    onResolve(value) {
      let storedValue = value;

      try {
        this.promiseChain.forEach((nextFunction) => {
          storedValue = nextFunction(storedValue);
        });
      } catch (error) {
        this.promiseChain = [];

        this.onReject(error);
      }
    }

    onReject(error) {
      this.handleError(error);
    }
  }

module.exports = Promise;
Observabe.js: -
  class Observer {
    constructor(handlers) {
      this.handlers = handlers; // next, error and complete logic
      this.isUnsubscribed = false;
    }

    next(value) {
      if (this.handlers.next && !this.isUnsubscribed) {
        this.handlers.next(value);
      }
    }

    error(error) {
      if (!this.isUnsubscribed) {
        if (this.handlers.error) {
          this.handlers.error(error);
        }

        this.unsubscribe();
      }
    }

    complete() {
      if (!this.isUnsubscribed) {
        if (this.handlers.complete) {
          this.handlers.complete();
        }

        this.unsubscribe();
      }
    }

    unsubscribe() {
      this.isUnsubscribed = true;

      if (this._unsubscribe) {
        this._unsubscribe();
      }
    }
  }

class Observable {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }

  subscribe(obs) {
    const observer = new Observer(obs);

    observer._unsubscribe = this._subscribe(observer);

    return ({
      unsubscribe() {
        observer.unsubscribe();
      }
    });
  }
}

module.exports = Observable;

Promise.js: -
  class Promise {
    constructor(executionFunction) {
      this.promiseChain = [];
      this.handleError = () => {};

      this.onResolve = this.onResolve.bind(this);
      this.onReject = this.onReject.bind(this);

      executionFunction(this.onResolve, this.onReject);
    }

    then(onResolve) {
      this.promiseChain.push(onResolve);

      return this;
    }

    catch (handleError) {
      this.handleError = handleError;

      return this;
    }

    onResolve(value) {
      let storedValue = value;

      try {
        this.promiseChain.forEach((nextFunction) => {
          storedValue = nextFunction(storedValue);
        });
      } catch (error) {
        this.promiseChain = [];

        this.onReject(error);
      }
    }

    onReject(error) {
      this.handleError(error);
    }
  }

module.exports = Promise;
Javascript By Max: -
  Cheat Sheet– Local
Development Environment
What’ s Required ?
  To develop ES6 applications locally, you need a transpiler(ES6 - > ES5), a
module loader(to load the different modules / files) and a little server to
host your app(and to serve those module files).
Compiler Examples
Babel: https: //babeljs.io/
  Traceur: https: //github.com/google/traceur-compiler
  Module Loader / Packaging Examples
SystemJS: https: //github.com/systemjs/systemjs
  Webpack: https: //github.com/webpack/webpack
  Servers
Live - server: https: //www.npmjs.com/package/live-server
  Lite - server: https: //github.com/johnpapa/lite-server
  Webpack - dev - server: https: //webpack.github.io/docs/webpack-devserver.
  html
A quick Way to get Started– JSPM
You could also use the JavaScript Package Manager(JSPM) to quickly set
up your own development environment with Compiler(Babel) and Module
Loader(SystemJS).You would need to install an extra server though(google
  for jspm server
  for example).
Link: http: //jspm.io/
  Complete Setups / Boilerplates
The one from the video: https: //github.com/topheman/vanilla-es6-jspm
  Alternative: https: //github.com/thoughtram/es6-babel-browserifyboilerplate
  To find more, simply google
for“ ES6 Boilerplate” or comparable search
terms!

  Cheat Sheet– Syntax Changes
Strict Mode
Using strict mode is the
default in ES6 Modules, therefore specifying“ use
strict” is not required.
let &
  const
    In ES6, you may declare your variables with
var,
let or
const.Which one
should you choose ?
  const should be chosen
if you’ re not planning on changing the value of this
variable(which then becomes a constant).This should be your
default
choice unless you absolutely need to re - assign it during runtime.Why
should it be the
default ? Because it keeps your code explicit and clear.
let should be your second choice– use it whenever you need to re - assign
variables.This will mostly be the
case inmathematical alogrithms or loops.
var should probably never be chosen.When using it, you may have a
constant or a variable– but no one knows!Therefore, use
const or
let
  instead.
Function / Arrow Functions
There were two major additions regarding functions: (Fat) Arrow
Functions(() => {}) and
default arguments(doSmth(arg = 1)).
Fat Arrow Functions allow you to use a shorter syntax to create functions:
  const fn = (arg1, arg2) =>
    return arg1 + arg2
You may leave out the parenthesis around the arguments
if only one
argument is passed.If no argument is passed, empty parentheses are
required.The
function body may be written inline and without curly braces
if you’ re only writing a
return statement(
  return then also may be left out).
Besides the shorter syntax, fat arrow functions also change the behavior of
  the this keyword.Inside a fat arrow
function, the this keyword will always
refer to the context of the
function instead of the caller of the
function.
Default parameters allow you specify
default values
for parameters passed
to functions.
function fn(arg1 = ‘
  default string’, arg2 = 23) {
  return arg1 + arg2
}
More info on Arrow Functions:
  https: //developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functio
  ns / Arrow_functions
More info on Default Parameters:
  https: //developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functio
  ns / Default_parameters
Literal Notation Extensions
There are some improvements to Literal Notation syntax.
let width = 10;
let length = 50;
let lengthField = 'length';
rectangle = {
  width, // width is automatically assigned => takes above value
  [lengthField]: length, // Dynamic field name using variable
  "outputSize"() { // shorter syntax + possibility of string name
    console.log(this.width * this.length); // this refers to object
  }
};
More information may be found here: https: //developer.mozilla.org/en-
  US / docs / Web / JavaScript / Reference / Operators / Object_initializer
Rest & Spread Operators(…)
ES6 added two important new operators: Rest and Spread.Technically
they look the same(… => three dots) but they are used in different places.
Rest:
  function sumUp(start, ...toAdd) {}
Transforms a list of arguments(1, 2, 3) into an array([1, 2, 3]) which may be
used inside the
function.This behavior is triggered when used inside of a

function argument list.
Spread:
  let ids = [1, 2, 3, 4, 5, 6];
console.log(Math.max(...ids)); // prints 6
Transforms an array into a list of arguments.This behavior is triggered
when used outside of a
function argument list.
More information on Rest:
  https: //developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functio
  ns / rest_parameters
More information on Spread:
  https: //developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operato
  rs / Spread_operator
For - of Loop
A new loop was added: The
for - of loop which allows you to loop through an
array of items.
let testResults = [5.30, 2.84, 9.11, 1.01, 3.99];
for (let testResult of testResults) {
  if (testResult > 5) {
    console.log(testResult); // prints 5.30, 9.11
  }
}
More information may be found here:
  https: //developer.mozilla.org/en/docs/Web/JavaScript/Reference/Stateme
  nts /
  for... of
  Template Literals
Template literals allow you to easily write more complex text in strings(e.g.including line breaks) as well as to output variables in a string.
let name = 'Max';
description = `
This is a description, which may wrap across multiple lines.
Written by ${name}.
`;
Template literals are used by starting and ending the string with backticks
  (`) instead of quotation marks.
More information can be found here:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Templat
e_literals
Destructuring
Destructuring is a cool new feature which allows you to easily extract
values from an object or an array.
Array:
let numbers = [1, 2, 3, 4, 5];
let [a, b] = numbers; // a => 1, b => 2
Object:
let person = {
name: 'Max',
age: 27
};
let {name, age} = person; // Notice the {} instead of []
More information may be found here:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operato
rs/Destructuring_assignment

Cheat Sheet – Modules &
Classes
Modules
ES6 finally, officially, adds Modules to JavaScript. This means, that you
may split up your code over multiple files, which of course is a good
practice. This is common in ES6 already, however you always require a
module loader for that.
Once ES6 is broadly implemented into browsers, this will no longer be
necessary.
To split up your code, you basically export variables, functions, objects, … in
one file and import it in another:
// export.js
export let myExportedVar = 42;
// import.js
import { myExportedVar } from ‘./export.js’;
More info on Modules (export):
https://developer.mozilla.org/en/docs/web/javascript/reference/statemen
ts/export
More info on Modules (import):
https://developer.mozilla.org/en/docs/web/javascript/reference/statemen
ts/import
More info on Class: https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Classes
Classes
Classes are now also available via the class keyword. You may of course
continue using other ways to create objects, but here’s the class-way:
class Person {
greet() {
this.name = ‘Max’; // this is how you set up properties!
console.log('Hello!');
}
}
let person = new Person();
person.greet(); // prints ‘Hello!’
You may also use inheritance with ES6 classes:
class Max extends Person {
constructor(name) {
this.name = name;
}
}
Static methods are also possible:
class Helper {
static log(message) {
console.log(message);
}
}

 Cheat Sheet – Symbols 
What Symbols Are 
Symbols are a new primitive type in ES6. Basically, a Symbol is a unique ID. However, you don’t see the ID (like 120) but you only got your symbol which represents the ID. 
let symbol = Symbol(‘only for debugging, this is not the ID!’); 
As a symbol represents a unique ID, each symbol is unique. This means, that the following comparison will resolve to false: 
let symbol1 = Symbol(‘only for debugging, this is not the ID!’); 
let symbol2 = Symbol(‘only for debugging, this is not the ID!’); 
if (symbol1 == symbol2) { … } // false 
The only exception make symbols created via Symbol.for(): 
let ageSymbol = Symbol.for('age'); 
These symbols are registered in a global symbol registry and therefore the following comparison will return true: 
let ageSymbol1 = Symbol.for('age'); 
let ageSymbol2 = Symbol.for('age'); 
if (ageSymbol1 == ageSymbol2) { … } // true 
Where would you use Symbols? 
As they are unique symbols are useful as object keys. 
let obj = { 
[symbol]: 22, 
[symbol2]: 'symbol assigned' 
}; 
console.log(obj[symbol]); // prints 22 
You can be sure that this fieldname hasn’t been taken yet. 
Built-in Symbols 
There are some built-in symbols you may utilize to overwrite default behaviors of JavaScript. This is also called meta-programming (i.e. changing parts of the language/ its behavior). 
class Person { 
} let person = new Person(); 
Person.prototype[Symbol.toStringTag] = 'Person Class'; 
let person = new Person(); 
console.log(person); // prints [object Person Class] 
More information may be found here: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol

Cheat Sheet – Iterators &
Generators
Iterators
Iterators probably sound more complex than they are. Basically an iterator
has a function – next() – which allows you to output values step by step.
let array = [1, 2, 3];
let iterator = array[Symbol.iterator]();
console.log(iterator.next()); // prints {done: false, value: 1}
Calling next prints the current state (done => false or true, depending on
the amount of values left) and the current value.
The cool thing about iterators is, that you can implement them in your own
objects.
let iterableObj = {
[Symbol.iterator]() {
let nextVal = 5;
return {
next() {
return {
value: nextVal++,
done: false
}
}
}
}
};
let iterator = iterableObj[Symbol.iterator]();
console.log(iterator.next()); // {done: false, value: 5}
Note that the iterator specified here would run forever, since done is never
set to true.
More information can be found here:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration
_protocols
Generators
Generators are functions which don’t necessarily run to the end upon
execution.
Instead, upon each call they yield a value. A generator is created by adding
an asterisk in front of the function name.
function *select() {
yield 'House Data';
yield 'Person Data';
}
When executing a function they don’t return a value immediately, instead
an iterator is returned. This iterator may then be used to access the
returned values step by step.
let iterator = select();
console.log(iterator.next()); // prints House Data
console.log(iterator.next()); // prints Person Data
console.log(iterator.next()); // prints undefined
Of course you may also pass arguments to generators and use them in the
function body.
More information on generators can be found here:
https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/function*
Cheat Sheet – Promises
Promises are a great addition to handle asynchronous tasks/ callbacks. As
the name implies, a Promise promises to return a certain value – even if the
underlying task fails. In such a failure case, the promise would be rejected
but the caller would still be informed.
Therefore, a promise is created with a resolve and reject function being
passed as arguments. Depending on the result, the appropriate function is
executed and a possible return value is passed as an argument.
let promise = new Promise(function(resolve, reject) {
setTimeout(function() { // setTimeout to simulate async task
resolve('Done!');
}, 1000);
});
The returned result may then be used in a callback specified in the then()
method.
promise.then(function(value) {
console.log(value); // prints Done!
});
You may also chain multiple then() calls which will be executed in the order
specified and which might also again use promises.
let fnWaitASecond = function(secondsPassed) {
return new Promise(function(resolve, reject) {
setTimeout(function() {
secondsPassed++;
resolve(secondsPassed);
}, 1000);
});
};
fnWaitASecond(0)
.then(fnWaitASecond) // Passes value automatically
.then(function(seconds) {
console.log('Promises: waited ' + seconds + ' seconds');
});
Promises also offer some built-in methods you may use to control them.
With race() you may use multiple Promises at once and only use the value
returned by the first Promise to resolve. You’ll get a value as soon as the
first Promise is resolved.
With all() you may use multiple Promises at once and take all returned
values into account. Therefore, you’ll only get a value once all Promises
were resolved.
More information may be found here: https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Promise
Cheat Sheet – Object Extensions
Object
The Object object saw some additions with ES6. Most importantly, the
setPrototypeOf() method was added. This method allows you to do what
the name promises: Set the prototype of an object to a(nother) prototype
of your choice.
let person = {
name: 'Max'
};
let boss = {
name: 'Anna'
};
console.log(person.__proto__);
Object.setPrototypeOf(person, boss);
More information on the Object object can be found here:
https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Object
Array
The Array object received quite a lot of new methods to help you with
development.
Probably the two most important ones are Array.of() and Array.from().
Array.of() allows you to create a new array with a list of values to be
passed into upon creation. The biggest advantage compare to ES5, is, that
the confusing Array() method (ES5) has an alternative. Array(5) used to
create an empty array with a length of 5 (=> 5 empty “slots”).
let array = Array.of(5);
console.log(array.length); // 1 (content is [5])
Array.from() makes it easy to create an array based on another array. You
may perform a transformation on each of the values of the base array for
the new array.
let luckyNumbers = [7, 9, 22];
let luckierNumbers = Array.from(luckyNumbers, val => val * 2);
console.log(luckierNumbers); // prints [14, 18, 44]
More information can be found here: https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Array
Number
Number saw some useful new methods to check the type of numbers. For
example isFinite() checks if the passed value/ number is finite.
unlimited = Number.Infinity;
if (Number.isFinite(unlimited)) {
console.log('Is finite!');
} else {
console.log('Is infinite');
}
More information can be found here: https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Number
Math
The Math object also received many new methods, most of them being
“very mathematical”. For example, you may now get the hyperbolic arcsine
of a number by using Math.asinh(). Yeah, right.
Definitely check out this link to learn all old and new Math methods:
https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Math
String
The String object also has some new tricks in its pockets. You may, for
example, check if a string startsWith() or endsWith() a certain value.
let name = 'Maximilian';
console.log(name.startsWith('Max'));
console.log(name.startsWith('max'));
Maybe it also includes() a certain substring?
Find more information here: https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/String

Cheat Sheet – Maps, Sets &
Subclassing
Map
A Map is a key-value collection introduced in ES6. It kind of fills the gap
between arrays (no key-value pairs) and objects (key-value pairs but much
more complex than a simple collection).
You can create a Map like this:
let cardAce = {
name: 'Ace of Spades'
};
let cardKing = {
name: 'King of Clubs'
};
let deck = new Map();
deck.set('as', cardAce);
deck.set('kc', cardKing);
You can get values from a map by using the get(key) method. Of course
you also have methods to clear a map or delete single items.
More information can be found here: https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Map
WeakMap
A WeakMap basically also is a Map but it misses some features. It is not
enumerable (you can’t loop through it) and it has no size property.
Why would you use a WeakMap if you can use a “real” Map? As the name
implies, WeakMaps hold weak references to the stored values. That means,
if some values aren’t used anymore, they can get garbage-collected and
will be released from the map. That’s also the reason why a WeakMap has
no size property.
More information can be found here: https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
Set
A Set is a collection which only holds values. Sounds like an Array? Almost,
but a Set will only old unique values. That means, no value can appear
more often than once in a Set.
You can loop through a set to retrieve the values (or use an Iterator). You
can also clear() a set or delete individual values by using delete().
Remember, each value is unique, therefore you don’t need a key or index to
delete a value!
You can create a Set like this:
let cardAce = {
name: 'Ace of Spades'
};
let cardKing = {
name: 'King of Clubs'
};
let deck = new Set();
deck.add(cardAce);
deck.add(cardKing);
deck.add(cardKing); // Won’t be added, only added once!
More information can be found here: https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Set
WeakSet
Like a WeakMap, a WeakSet is comparable to a “normal” Set but it only
holds weak references.
You may find more information here: https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
Subclassing
Subclassing basically means, that you can now extend certain JavaScript
base-objects. This allows you to add your own functionalities to those
objects.
For example, you may extend the Array object like this
class ConvertableArray extends Array {
convert() {
let returnArray = [];
this.forEach(value => returnArray.push('' + value));
return returnArray;
}
}
Cheat Sheet – Reflect API
Metaprogramming
Metaprogramming means that you’re able to change (parts of) the
behavior of the underyling language – JavaScript in this case. This of
course is a powerful feature as it allows you to influence the way your code
is executed. The Reflect API (like Symbols and Proxies) are important
additions which help you with Metaprogramming – something that wasn’t
really possible in JavaScript before.
What is the Reflect API?
The Reflect API could be described as a collection or “central place” which
houses all kind of object and function related functions (for creation,
property management etc.). Some of the functionalities added on the
Reflect object where available before on the Object object.
But the goal for the future is, to have on central place to store all those
methods – the Reflect Object/ API.
Therefore, the Reflect API provides useful methods to create, manipulate
and query objects and functions in your JavaScript project.
Object Construction
You can easily create a new object using Reflect.construct().
class Person {
}
let person = Reflect.construct(Person, []);
The arguments passed are the constructor/ class used to create a new
object, arguments passed to this constructor and, optionally as a third
argument, another constructor which should be used. Learn more about
constructing an object with Reflect here: https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct
Prototypes
You may also use Reflect to set the prototype of an object. Simply do this
by using the setPrototype() method.
class Person {
}
let config = {
greet() {
console.log('Hello there!');
}
}
let person = Reflect.construct(Person, []);
Reflect.setPrototypeOf(person, config)
Properties
Reflect also offers methods to define properties on objects
(defineProperty()), delete them (deleteProperty()), as well as get (get())
and set (set()) properties.
Functions
You may also use Reflect to execute functions:
Reflect.apply(person.greet, person, []);
The arguments passed are the function to be executed, what this should
be referring to and possible function arguments.
Learn More
Find more information on the Reflect API here:
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_O
bjects/Reflect

Cheat Sheet – Proxy API
Metaprogramming
Metaprogramming means that you’re able to change (parts of) the
behavior of the underyling language – JavaScript in this case. This of
course is a powerful feature as it allows you to influence the way your code
is executed. The Reflect API (like Symbols and Proxies) are important
additions which help you with Metaprogramming – something that wasn’t
really possible in JavaScript before.
What it Does
The Proxy API allows you to wrap objects, functions, whatever and trap/
handle incoming property accessing, function calls etc. You may think of
Proxies as filter or barrier which has to be passed and which may interrupt
access on the wrapped element.
For example you might wrap a Proxy around an object and set up a trap
(that’s what these functions are called) to be triggered whenever
something (the source code) tries to access a property of the wrapped
object. The Proxy can then interrupt this access and maybe deny it, return
another value, run some calculation – whatever you want.
Wrapping Objects
An object could be wrapped like this:
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}
}
let person = new Person('Max', 27);
let proxy = new Proxy(person, {
// Setup traps here
get: function(target, property, receiver) {
return 'Something else';
}
});
Notice that here, a get trap is set up – triggered whenever something tries
to get the value of a property.
The function triggered in this case passes the target of the access, the
accessed property and the receiver of the value as an argument. Inside the
trap you may do whatever you want to do.
Wrapping Functions
You may not only wrap objects. Functions can be wrapped too:
function log(message) {
console.log('Log entry created: ' + message);
}
let proxy = new Proxy(log, {
apply: function(target, thisArg, argumentsList) {
if (argumentsList[0].length < 20) {
return Reflect.apply(target, thisArg, argumentsList);
}
return false;
}
});
proxy('Hello!');
proxy('Hello, this is a very long message!');
In this example, the second function call would fail since the message is
too long.
Proxies as Prototypes
You can also use Proxies as prototypes:
let person = {
name: 'Anna'
};
let proxy = new Proxy({}, { // notice the empty object!
get: function (target, property, receiver) {
return 'Property ' + property + ' not found!';
}
});
Reflect.setPrototypeOf(person, proxy);
console.log(person.name);
console.log(person.age); // not found
Revocable Proxies
A special case are revocable proxies. Unlike “normal“ proxies, those proxies
(created via Proxy.revocable(), without new keyword!) can be revoked. Not
very surprising, considering the name.
Available Traps
More information on Proxies as well as a list of all traps can be found here:
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_O
bjects/Proxy

 Cheat Sheet – Events 
Events are of course an integral part of modern applications. With Events, you can react to user actions and provide a reactive user experience. 
The Event Interface 
The Event Interface is implemented by a lot of DOM Events and it exposes useful properties and methods to work with Events. 
With those methods and properties you can, for example, retrieve the target of the event or change its default behavior (e.g. prevent it from propagating). 
Learn more about it here: https://developer.mozilla.org/en-US/docs/Web/API/Event 
DOM / User Events 
Amongst the most important Events you may listen to, are of course user Events triggered while interacting with the DOM. 
For example, a user might click on a <div> element. You can listen to such events and execute code whenever they get triggered/ fired. 
Besides click events, there of course also possibilities to listen to a lot of other events. 
Visit this link for a list of available events: https://developer.mozilla.org/en-US/docs/Web/Events 
Event Handlers 
Event Handlers are set up on the emitting element itself. For example you could set up a click listener like this: 
document.querySelector('#container1').onclick = function(event) {…} 
Notice that the event object gets passed. This event object is available on each event you might listen to. 
To remove an Event Handler, simply set it to null. 
Event Listeners 
The disadvantage of Event Handlers is, that you only may have one at a time. But sometimes you need more than one listener. 
This is where Event Listeners come into play. They are set up differently and you may provide as many as you wish: 
document.querySelector('#container1').addEventListener('click', listener1); 
document.querySelector('#container1').addEventListener('click', listener1); 
document.querySelector('#container1').addEventListener('click', listener1); 
document.querySelector('#container2').addEventListener('click', listener2); 
function listener1(event) { console.log('Listener 1 here'); } function listener2(event) { console.log('Listener 2 here'); } 
Event Listeners can of course also be removed 
document.querySelector('#container2').removeEventListener('click', listener2); 
Event Behavior 
Events have some default behaviors. One very important one, is, that they propagate. 
That’s best explained as an example: If you have to <div> elements which are nested inside each other, then you might want to listen to clicks on the inner one. 
However, since Events propagate, a click on the inner one will also trigger all click listeners on the outer one. 
This might not be the behavior you want and you can stop this from happening by calling stopPropagation() on the event object passed into the handler function. 
function listenerInner(event) { 
event.stopPropagation(); 
} 
Learn more about Events here: https://developer.mozilla.org/en-US/docs/Web/API/Event


 Cheat Sheet – Objects 
JavaScript allows you to write object-orientated code and objects are indeed a key element of the JavaScript language. 
Creating Objects 
There are different ways to create an object. Probably the easiest one is this one: 
var myObj = { 
value1: ‘a value’, 
fn: function() {…} 
} 
But you may also create objects using this syntax: 
var country = new Object(); 
country.name = 'Italy'; 
Or this one: 
var house = Object.create(null); house.size = 45; 
There even is another one, you’ll see it in the “Constructor Functions” section. 
Why do you need that many ways to create objects? 
Some ways provide certain advantages, others are there for historic reasons. The first way shown (“literal notation”) equals the second one (new Object). But the first one is more expressive and allows you to create an object with fields in one single line (if you don’t care about code formatting). Therefore it’s preferable to the second way. 
Object.create() offers the advantage, that you can pass the prototype of the to-be-created-object as an argument (or null, if no prototype should be set). You’ll learn more about Prototypes in this document, but that is a powerful feature which allows you to overwrite JavaScript’s default behavior. 
Object Literal Notation 
The first example for creating an object showed the “Literal Notation” of objects. That’s basically a convenient way to create JS objects in a very expressive way. 
Indeed, it is that expressive, that JSON (JavaScript Object Notation) became one of the most popular encoding protocols for transferring data (from server to client for example). 
Prototypes 
Prototypes are objects on which other JavaScript objects are based. It’s JavaScript’s form of inheritance between objects. 
Prototypes are important because they provide functionality to an object, which the object itself might not have. 
For example, a prototype may have a greet() method. An object based on that prototype might not have that, but you could still execute obj.greet() since JavaScript will refer to the Prototype (and then the Prototype’s Prototype and so on) to find properties or methods accessed by the code. 
By default, objects created via literal notation or new Object() inherit from the Object.prototype. You can think of this as JavaScript’s default prototype. It ships some useful methods like toString() to convert the object to a string which can be printed to the console for example. 
You can set your own Prototype via Object.create(prototypeToBeSet) or constructor functions (see next section). 
Learn more about Prototypes in this great article: http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/ 
Constructor Functions 
Constructor functions allow you to create your own objects and prototypes. It’s best to simply see it in action: 
var Person = function() { 
this.name = ''; 
this.greet = function() { 
console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old!'); 
} 
}; var max = new Person(); 
As you see, you simply create a normal function and then you may use this as a constructor for your own objects. Might look strange, but that’s how it works in JavaScript. 
You set properties for your object by using the this keyword in the function (e.g. this.name). 
Objects based on that constructor (created, using new) have all the properties and methods set up in the function. 
The prototype of an object created via a constructor is <function-name>.prototype. For example: Person.prototype. 
You can add properties and methods to this prototype as well. This allows you to extend your base object without touching the constructor function. 
Learn more about constructor functions here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor 
This 
The this keyword is very important in JavaScript. As you saw in the constructor section, it allows you to add properties to an object. And in general, it there referred to the object itself. 
In line with the above statement, in most cases this simply refers to the following: The object executing the code in which this is called. 
You can control the value of this with the bind(), call() and apply() methods. These methods allow you to overwrite the default this value. 
Read this great answer to understand how they work and differ: http://stackoverflow.com/a/31922712 
Learn more about this here: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this 
defineProperty() 
Learn more about available configurations here: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty 
Object Methods & Loops 
There are some useful built-in methods you may use in conjunction with objects. 
For example, you can verify if an object was created with a specific constructor with the instanceOf keyword. 
if (rect1 instanceof Rectangle) {…} 
You can also check if an object has a certain property with the in keyword. 
if ('width' in rect1) {…} 
Or you can delete a property using the delete keyword. 
delete rect1.width; 
Learn more about Object methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects 
If you want to loop through all fields/ properties an object has, you can use the for … of loop: 
for (field in rect1) { console.log(field + ': ' + rect1[field]); } 
Learn more about objects here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects 
And here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

 Cheat Sheet – Functions (Advanced) 
Closures 
Closure are also called anonymous functions. They have that name for a reason: They are not assigned a name. 
Why would you use such functions? 
A very important difference, is the different scope: The closure uses the scope of the function in which it is used, whereas the named function would not have access to that scope. 
Here’s an example: 
function calculaterCreator(number) { 
return function() { 
console.log(number * 2); // has access to number 
}; 
} 
Learn more about closures here: https://developer.mozilla.org/en/docs/Web/JavaScript/Closures 
IIFEs (Immediately invoked function expression) 
IIFEs are functions which are invoked immediately when running the script. 
(function () { 
console.log('Immediately invoked!'); 
})(); 
Why would you do that and not simply write the code without a function wrapping it? 
The reason is the JavaScript scope. Remember, that everything outside of a function belongs to the global scope. With IIFEs you can create a local scope (and therefore some privacy) and still run the code immediately. 
Sometimes this might be the behavior you want. 
Function Properties & Methods 
Remember, that JavaScript Functions are of type Function? This type also has some properties and methods you can access. 
If you want to find out which arguments were passed to a function, you may use the arguments keyword inside that function. 
function myFunction(message) { 
console.log(arguments); 
}; 
You can also find out the number of arguments a function expected as well as its name: 
console.log(myFunction.length); // 1 
console.log(myFunction.name); // 'myFunction' 
A very important method, is the bind() method, which allows you to set to what this should refer to inside the function call. 
Consider this example: 
var name = 'Anna'; var obj = { name: 'Max' }; 
function printName() { console.log(this.name); 
} 
printName(); // Anna printName.bind(obj)(); // Max 
Learn more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

 Cheat Sheet – Arrays 
Arrays are an important part of JavaScript as they allow you to store multiple values (even of mixed types) in one variable. 
var array = [1, 2, ‘3’]; 
As Arrays are Objects and not primitives they also offer some methods to work with them. 
Very important methods are push(), to add a new item to an Array and indexOf() to find the position of a value in an array. 
Learn more about Arrays and their methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

 Cheat Sheet – Built-in Objects & Functions 
JavaScript ships with a bunch of built-in Objects and Functions you may use to work with data. 
setTimeout & setInterval 
setTimeout() allows you set a timer and execute some code once this timer (in milliseconds) finishes: 
setTimeout(function() { console.log('2 second passed'); }, 2000); 
Note, that a closure is used as a callback. 
setInterval() is very similar, but it doesn’t finish on its own, it simply runs some code each X milliseconds: 
setInterval(function() { console.log('ping'); }, 500); 
Learn more here: http://javascript.info/tutorial/settimeout-setinterval 
List of Built-in Objects & Functions 
Check this link for a list of built-in objects & functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects 
Math Object 
The Math Object provides some useful methods for mathematical task. Learn more here: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math 
Date Object 
The Date Object allows you to quickly create or parse dates as well as work with dates in general. 
Learn more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date 
Regex Object 
Regular expressions are patterns used to match character combinations in strings. Learn more about them here: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions

 Cheat Sheet – DOM 
What is the DOM? 
The DOM is the abbreviation for Document Object Model. Put in simple words, it’s what your HTML code gets translated to in the browser. It holds all your HTML elements and their properties. 
JavaScript can natively interact with the DOM to query it, manipulate it or listen to events. 
If you want to dive deeper into it, here’s a great resource: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction 
Window Object 
The Window Object (remember: The global scope) represents a window holding a DOM. In a tabbed browser, each tab counts as a window. 
Your code by default runs in this scope and therefore you have access to all the window methods, properties and events. This includes the DOM, which represents your web page. 
Learn more here: https://developer.mozilla.org/en-US/docs/Web/API/Window 
Location Object 
The location object is a property of both the Document Object and the Window Object (access it on the Window Object though). It represents the current location of the page and therefore allows you to retrieve information about host, URL etc. 
Learn more here: https://www.google.de/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=js%20location%20object 
Document Object 
The Document Object (a property of the Window Object) represents the actual webpage. 
Through this object, you’re able to access the DOM via JavaScript. This means, that you can traverse through the DOM, query it, listen to events and so on. 
You can think of this as a way to interact with your HTML code after it has been loaded in the browser. 
Of course this is how all those fancy live-updating webpages are created: The DOM is manipulate through the Document Object. 
Learn more here: https://developer.mozilla.org/en/docs/Web/API/Document 
DOM/ HTML Interaction 
There are tons of ways to interact with the DOM via JavaScript. 
Often times you’ll need to select certain Nodes (“HTML Elements”) and traverse through the DOM or set/ get some properties. 
You’ll find an extensive list of available methods and properties in this article: https://developer.mozilla.org/en/docs/Web/API/Document 
Basically you may select Nodes either as properties of the Document Object like this: 
var anElement = window.document.children[1] // select 2nd child element 
Or you use a method to search for certain elements. For example for elements with a class name: 
var important = document.getElementsByClassName('important'); 
Similar methods exist for finding by ID, Tag Name etc. 
A very convenient way of querying, is to use the query methods: 
console.log(document.querySelector('.class)); // first element 
console.log(document.querySelectorAll('.class')); // all elements 
System Dialogs 
System Dialogs can also be controlled via JavaScript. Using them does not provide the best user experience though, there are better ways to open “popups” (modals) nowadays. 
But still, the two important dialogs are alert() and confirm(). 
alert() simply offers a window which shows a messages and only offers an “Ok” button. 
confirm() also shows a message but allows the user to choose between “Yes” and “No”. It will then return true or false, depending on the user’s choice.

 Cheat Sheet – Errors & Debugging 
Console.log() 
A quick and easy way to check if some code is actually reached/ being run or the value of a variable at a certain point during code execution, is to use the console.log() function for that. 
It’s not the best choice for “real” debugging for more complex bugs, but it gives you the chance to quickly check something. 
console.log(example-with-variable); 
(Chrome) Developer Tools 
A more powerful way of debugging, is to use developer tools in a browser. Chrome ships with excellent developer tools, which allow you to dive into the actual source code, set break points and evaluate variables during runtime. 
Learn more about that here: https://developer.chrome.com/devtools/docs/javascript-debugging 
Try-Catch 
Sometimes, you execute code that might throw an error, but you can’t know that while writing the code. 
For such cases, JavaScript offers the try-catch block to try something and catch possible errors. 
Learn more about try-catch here: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/try...catch
 
javascript:-

basics,
types and scope
Arrays
Objects
Errors&Debugging
Functions
Build in functions and objects
dom
events
ajax
project funrther information

where does js run

browser(client side):doesnt depend on server.dependent

not execute server

browser    server(nodejs)

javascript versions

es5 vs es6
es5 -dialect (follows es)
es6- specifications

es5 supports all browsers
es6 supports polyfills,transpilers


jsbin.com

var number =5;

console.log(number)

basics module:-
executingjs,
variables,types,functions,control structure,operators

using javascript inline html:-
sample.html:-
<h1>javascript bootcamp</h1>
<script type="text/javascript">
console.log("hello world");
</script>

using javascript html import:-

<script src="script.js"></script>
script.js:-
console.log('hello world');

<script defer src="script1.js"></script>

variables:-
store the data.
var variable=10;
console.log(variable);
var variable = 'text';
console.log(variable);
var variable = true or false;
console.log(variable);

var var1 = 6.5;
console.log(typeof var1); // number
var var1 = 'text';// string
console.log(var1);
var var1 = true;
console.log(var1);

variables- null,undefined and NaN

var var1 = [1,2,3,'naga'];
array is collection of values(mixed values).access the array elements using indexes

console.log(var1);[1,2,3]
console.log(typeof var1); //object
console.log(var1[0]);
console.log(var1[4]);// undefined

var var1 = undefined;
console.log(var1); //undefined

var var1 = null;
console.log(var1); // null

console.log(null == undefined) // returs true.only values
console.log(null === undefined);
// returns false.datatypes as well as values

console.log(typeof null); //object
console.log(typeof undefined);// undefined

var var1 = NaN;
CONSOLE.LOG(VAR1); NaN
console.log(typeof var1); // number

variables -objects

var var1 = {
  name: 'naga'
};

console.log(var1.name);
console.log(typeof var1);// object
strict mode:-explicitly tell to javascript engine.use syntaxical mistakes
it will check the syntaxicalmistakes.and also secure javascript alpplications
"use strict" // optimize and 
when using third party libraries it is very useful.
var var1 = 5;

console.log(var1);
var var1 = 5console.log(var1) // error
var1 = 5

console.log(var1);

Dynamic typing:-mutate the content
js is casesensitive

var var1 = 5;
var1 = '33'; // change the value(mutate)
var Var1 = 20;
console.log(typeof var1);


Hoisting:-
declare the varibales before assigning
var1 = fi30;
console.log(var1);

var var1;

console.log(Var1);

functions - crating and calling

function calc(){ // function definition
 console.log('inside function');
}

calc(); // function call

//this is hosting
calc(); // function call
function calc(){ // function definition
 console.log('inside function');
}

// this is also hosting.it is doesn't work.

calc();

var calc = function(){
 console.log('inside function');
}

console.log(typeof calc); // "function"

function calc(){
 console.log('Inside function');
}
var anotheFn = calc;
anotheFn();

function arguments and return values:-

function calc(){
var stringVar = 'Inside Function';
 return stringVar;
};
var returned = calc();
console.log(returned);


function calc(number1,number2){
 return number1+number2;
}
var returned = calc(13,5); // without giving values not a number message would be get(NaN)
console.log(returned);

function calc(number1,number2){
 return number1+number2;
}
var returned = calc;
console.log(returned(15,3));

functions are reusabuility and perform mathematical calculations and business logics.


constrol structures:-

when execute certain code.perform specific conditional if the condition is true it will be execute true value otherwise it would be return false value.

var condition = true;
var anotherCondition = true;
if(condition){
console.log('Executed');
}
else if(anotherCondition) {
 console.log('Still Executed');
}
else {
 console.log('Not EXECUTED');
}

IF CONDITON ADVANCED:-

var condition = 'false'; // return true
var condition = 'text'; // return true
var conditon = -1 ; // return true
var conditon = null // return false
console.log(1 == true) // true evaluates value.

console.log(1 === true) // false
evaluates value

switch statements:-

var luckyNumber = 8;

switch(luckyNumber){
case 1:
console.log('is 1');
break;
case 8:
console.log('is 8');
beak;
default:
console.log('default');
}
if(luckyNumber ==1){
console.log('is 1');
}
else if(luckyNumber ==8)
{
console.log('is 8');
}
else
{
console.log('default');
}
else if(luckyNumber ==8){
console.log('is 8');
}
else{
console.log('default');
}

}












switch and break:-
by using break it is come out from block.

control structures -for loop

for(var i =0; i<10; i++){
 console.log(i);
}

nested for loop:-

for(var i=0;i<5;i++){
 for(var j=0;j<5;j++){
  console.log(i*j);
}
}

for(var i =0; i<5;i++){
 for(var j=0; j<3;j++){
  if(i ==1){
  continue; 
}
console.log(j);
}
console.log(i);
}

for loop variations:-
for(var i=2; i>1; i--){
console.log(i);
}

var arr =[1,2,3];

for(var i=0;i<=arr.length;i++){
console.log(arr[i]);
}
looping throught arrays:-

var arr =[1,2,3];

for(var i=0;i<arr.length;i++){
console.log(arr[i]);
}

control structures -while loop:-

var num = 5;

while(num<7){
console.log(num);
num++;
}

while(true){
console.log(num);
num++;
}

var condition = true;
var i = 2;

while(condition){
 if(i==3){
  condition = false;
}
console.log(i);
i++;
}

var condition = false;

do {
console.log('Executed');
}
while(condition)

Opertors:-

var a = 10;
var b = 20;

a = a+b;
a++;
console.log(a);

var a = 1.6;
var b = 3.6;
console.log(a+b);

var a = 'join';
var b = 'us';

console.log(a+b); // join us

var a = 12;
var b = '1';

console.log(a+b); // 121

var a = 12;
var b = true;
console.log(a+b); //13

var a = true ;
var b = true;
console.log(a+b);

var a =12;
var b =null;
console.log(a+b);//12
var a = 12;
var b = undefined;
console.log(a+b) // NaN

var a = 12;
var b = NaN;
console.log(a+b) // NaN

OPERATORS SUBTRACTION:-

var a = 12;
var b = 1;
a -=b;
console.log(a-b);

var a = 'split us';
var b = 'us';
console.log(a+b); //NaN

var a = 12;
var b = '1';
console.log(a-b); //11

mULTIPICATION AND FLOTING POINT pROBLEMS:-

var a = 12;
var b = 2;
a *=b;
console.log(a*b); //24
console.log(a*b);
var a = 1.5;
var b = 4.6;
console.log(a*b);

if((a*b).toFixed(2) == 4.67)
console.log('true');
else
console.log('false');

var a = 3;
var b ='4.5';


var a = 'dfgfd';
var b ='dfd';
VAR A =12;
var b = null; // infinity or undefined
console.log(a*b); // NaN

Division AND Modules:-

var a = 4.6;
var b = 2.5;

var b ='2';
a /=b;
console.log((a/b).toFixed(2)); //5 //8.67

var a = 10;

var b = 3;
b=0;
b=infinity a/b -0
console.log(a/b); //1 //infinity


comparing values:-

console.log(1==1) //true

console.log(1===1) //true
console.log(1=== '1') // false
console.log(1=='1') //true

console.log(1!=1) // true

console.log(1 !== '1') // true
console.log(1 >='1') // true


Operators IMPOTANCE RULES:-
console.log(0 ==null) // false we cant compare anything in null

console.log(null ==undefined); // true
null can be compared to undefined

console.log(0 == undefined); // false

operators boolean:-
console.log((1==1) &&(2==2))// true
both conditions true then only returns true.
console.log((1==1) || (2==3)) //  true
one of the two conditions one condition is true result is true.
otherwise false

Operators Boolean:-

console.log((1==1)&&(2==2)||(3 ==3)); // true
var istrue = true;
console.log(!isTrue); //  false

Operators ternary operators:-
var a=5;
var b=5;
if(a==b){
console.log('equal');
}
else{
console.log('not equal');
}
console.log(a==b ?'equal':'not equal');


Operator precedence:-

var a =10;
var b = 20;
console.log(a+b*10);//210

Types and SCOPES:-

primitive types

var a = 5; ->memory is alloted stored into a variable.directly store value

var b = a; // 5 copy the value from a to b

reference types(object):-

var a1={a:5}; -> pointer is created

var b = a;

var aNumber = 5;
console.log(aNumber); //5
var anotherNumber = aNumber;
console.log(anotherNumber); // 5
aNumber = 20;
console.log(aNumber); // 20
console.log(anotherNumber); //5

var array =[1,2,3];
console.log(typeof array); // object
var anotherArray = array;
console.log(array);
console.log(anotherArray);
array.push(4);
console.log(array);[1,2,3,4]
console.log(anotherArray);[1,2,3,4]

GLOBAL VS LOCAL SCOPE:-

global scope - window object

local scope - inside the function(every function has own scope)
local scope vaariables not access outside.

//var test = 'Global scope';
//console.log(test);


function localScope(){
test = 'local scope';
console.log(test);
}
localScope();
console.log(test);
Reference types

Arrays:-

colection of items in square barackets.
accessing the array elements.mutate the array elements
[1,2,3] (elements) length:3
0,1,2

basics and managing elements

var array =[1,2,3];
array[1] = 333;
array[3] = 444;
console.log(array.length);//3
console.log(array[1]) //2
console.log(array);

forEach() in array

var array = [1,2,3];

array.forEach(function(item){
console.log(item);
});
array.push(6);
console.log(array);
console.log(array.pop());
console.log(array);




array.unshift('rr');
console.log(array); // begining of array

array.unshift();
console.log(array.indexOf('rr'));//0
array[array.indexOf('rr')] = 'old';

var newArray = array.splice(2,2);
console.log(newArray); // remove the array elements
console.log(array); ['old',1,2,3,6]

filter,map and reduce method in javascript

// return and create the array elements
console.log(array.filter(function(value){
return value>2;
});

// map function return the array elements
console.log(array.map(function(value){ return value*3;}));

console.log(array.reverse()); // revers of the array elements

var newArray =['aa','bb'];
console.log(array.concat(newArray));[1,2,3,4,'aa','bb'] // return the array values
console.log(array);

console.log(array.join(array.join(newArray)); // which is return the string value
console.log(newArray);

console.log(array.join(','));

reduce method:-

console.log(array.reduce(function(total,vale){
console.log('Total' +total+ ', Value:'
+value);
return total+value;
});

console.log(array);

// reduce the array.reduce the array element and return the single value.which is add the array elements.

Object literals:-

Debugging and Errors:-

var a = 2;
var b = 5;
var c;
var d = 1000;

for(var i = 0;i<5;i++){
 if(i>a && i<b){
 c = 1000;
}
if(i===3){
 d*=2;
}
}
console.log(a);
console.log(b);
console.log(c);
console.log(d);

developer tools:clone

sources -set break point and debug the code line by line.

handling try and catch:-

try {
 test();
}
catch(error){
console.log('error');
}finally {
 console.log('finally');
}

Functions in Javascript:-

closures:-
functions.define function into another function
closures are very useful .we can perform callback and perform various activities
local and global scope.local variables not access out side
inner function is closure.

function generate(input){
 var number = input;
 return function(){
 return number*2;
}
}
var calc =generate(1000);
var anothercalc = generate(900);
console.log(cal());
console.log(anothercalc());

IIFS:-

(function calc(input){
 var number = 29;
 var number = input; 
 console.log(number);
})(12);
console.log(number); // number is not defined

var obj = {};

(function calc(input){
 obj.name = 'max';
})(obj);

console.log(obj);

built in methods and properties:-

function message(mesage){
 console.log(message); //H1!
 console.log(arguments); //hi,10
 console.alog(argumnets[1]); // 10
 console.log(arguments.length) //2
}
message('Hi!',10);

function message(msg){
 console.log(msg);
}
message('sd');
console.log(message.name); // message

Built in Objects and Methods:-
setTimeOut(function(){
 console.log('sample');
},2000);

var interval = setInterval(function(){
 console.log('Ping!');
},500)

setTimeOut(function(){
 clearInterval(interval);
},2500);

Transforming Formats and Values:-

var x ='44';
var y = 'FFXEQ';
var z = 20;
var sam = 'text';
console.log(parseInt(sam)); //NaN
console.log(x); // '44'
console.log(parseInt(x)); // 44
CONSOLE.LOG(parseInt(y),16); //FFXEQ
CONSOLE.LOG(z.toString()); //"20"

var a = 13.40;
console.log(a.toFixed(2)); //13.40

String Functions:-

var string = 'Javascript Tutorial';
console.log(string);
console.log(string[3]);
console.log(string.length); // 19
console.log(string.concat('good morning')); Javascript Tutorial good morning
console.log(string.toLowerCase()); javascript tutorial
console.log(string.trim()); // remove the white spaces in the given string
console.log(string.split(' ')); ["Javascript","Tutorial"]

MATH OBJECT:-

var pi =3.14;
var pi = MATH.PI;
CONSOLE.LOG(pi);
var e =MATH.E;
console.log(e);
var a = -3;
console.log(MAth.abs(a)); //3
var a =1.27;
console.log(Math.ceil());
console.log(Math.floor(a));
console.log(Math.exp(a));
console.log(Math.log(e));
console.log(Math.max(12,456,234));
console.log(Math.min(1.4,567,43));
console.log(Math.random()); // we will get 0 to 1
console.log(Math.floor(Math.random()*50 +1); // 23,34,50,44,42,47

var rnd = Math.floor(Math.random()*500)+1;
console.log(rnd); //23,34,43,13 lotary,quiz application at that time we can use

Date Object:-
var today = new Date(2018,1,23);
var todaay = new date('2016/05/20');
console.log(today.toString()); // today date "tue 2016"
console.log(Date.parse('20166/05/20'));

var today = new Date();

console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

REGULAR EXPRESSIONS:- patterns and charcter,search operations

regular expression matches the given string or not
when ever working on form validation we can perform form validations.
var string = 'abab';

var pattern = /ac/;
console.log(string.test(pattern)); //null not match the given string
console.log(string.match(pattern));
console.log(pattern.match(string)); ["ab"]

Document Object Model(DOM):-


window object
this also global object
global object is window object.

console.log(window.innerWidth);
console.log(innerWidth);
console.log(outerWidth);

console.log(innerHight);
console.log(window);
console.log(outerHight);
console.log(localStorage.setItem('key1',1000);
console.alog(localStorage.getItem('key1'));
console.alog(sessionStorage.getItem('key1'));

console.log(window.location); // url of the given window
console.log(window.document);
window.open("http://www.google.com");

Location Object:-

console.log(location);
console.log(location.pathname);
location.reload()
location.replace('http://www.google.com');

Document Object Model:-
console.log(document);
document.url
document.title
document.body.childern[0].textcontent ="something ele"
document.body.childern[0].style.backgroundColor = 'red';

<h1 id="ss"></h1>
<ul>
 <li class="sample">hello</li>
 <li>good</li>
</ul>
Traversing dom:-
console.log(document.body.childern);

selecting elements:-

console.log(document.getElementByTagName('li'));

console.log(document.getElementByClassName('sample'));

console.log(document.getElementById('ss'));

selecting element with query selector:-

console.log(document.querySelector('h1'));

console.log(document.querySelector('.sample'));
console.log(document.querySelector('#ss'));

document.querySelector('#ss').style.backgroundColor = 'red';

document.querySelector('li').style.backgroundColor = 'red';
document.querySelector('a').style.backgroundColor = 'red';

document.querySelector('.sample').style.backgroundColor = 'blue';


document.querySelector('.sample').firstElementChild.textContent(innerHTML) = 'hello world';
 
creating and insering the elements:-

var p = document.createElement('p');
p.textContent = 'this is paragaraph';
p.style.fontSize ='19px';
console.log(p);

var a =document.querySelector('a');
a.appendChild(p);


var li =document.querySelector('li');
var a = li.firstElementChild;
li.insertBefore(p,a);

Delete element from dom:-

var a =document.querySelectorAll('a')[1];
a.parentElement.removeChild(a); // remove the element
a.parentNode.remove(a);
elements and nodes:-

dom interation summary:-

Dialogs:-

alert
prompt,
confirm
alert('hello world good morning');
console.log(confirm('are you sure')); // return true or false --ok or cancel
console.log(prompt('your name?')); // nagarjuna

Events:-

interact with user and browser.
perform the dom manipulations.

onclick,onmouseover,onchange
it has some properties and methods

event handlers:-
window.onload = function(){
 console.log('window loaded');
}
<button>click me</button>

var btn = document.querySelector('button');
btn.onclick = function(){
 console.log('Clicked!!');
};

btn.onclick = function(){
 console.log('Again Clicked!!');
};

Event Listeners:-

var btn = document.querySelector('button');

btn.addEventListener('click',listener1);
btn.addEventListener('click',listener2);

setTimeOut(function(){
 btn.removeEventListener('click',listener1);
},2000);
function listener1(){
 console.log('listener1')
}


function listener2() {
 console.log('listener2');
}


Event Behavior:-

<div id = "outer" style="width:100px;height:100px;background-color:'red'">
 <div id = "inner" style="width:25px;height:25px;background-color:'green'">
 </div>
</div>

var outer = document.querySelector('#outer');
outer.addEventListener('click',outerlistener);

var inner = document.querySelector('#inner');
inner.addEventListener('click',innerlistener);

function outerlistener(event){
 console.log('outer listener');
}
function innerlistener(event){
 event.bubbles();
 event.stopPropagation();
 console.log('inner listener');
}
Event Object properties:-
console.log(event.clinetX,event.clientY);
event.target.style.backbroundColor = 'blue';

changing propagation order:-

Ajax and XMLHTTP Request:-

setup and sending http request:-

var http = new XMLHttpRequest();
var url = '';
var method = 'GET';
http.open(method,url);
http.onreadyState = function(){
 if(http.readyState === XMLHttpRequest.DONE && http.status ===200){
 console.log(JSON.parse(http.responseText)[0].id);
}
else{
 console.log('Error');
}
};
http.send()
Post Request:-
var method = 'POST';
var data ='title=Post%20Title&body=Body';

http.setRequestHeader('Content-Type','application/json');


http.send(data);

Libraries, Framework & modularity


userscore.js
angular.min.js
angular.js
jquery.min.js
jquery.js

Framework:-
angular is framework which is a single page application

objects:-

var person = {
 "name":'naga',
 age:30,
 details:{
  hobbies:['sports','cooking'],
  loctaion: 'germany'
}
greet:function(){
 console.log('hello world');
}

};

console.log(typeof person.name);
console.log(typeof person.details.hobbies);
console.log(person.name); // naga
person['name'] // accessing the object

var field ='name';
console.log(person[field]) // dynamically access the name naga


properties of this:-
var age =44
var person = {
 "name":'naga',
 age:30,
 details:{
  hobbies:['sports','cooking'],
  loctaion: 'germany'
}
greet:function(){
 console.log('hello, i am' +name+ 'world'); // global name
 console.log('hello i am' +age+ 'years old') // 44

}

};

console.log(person.greet());

alternate way of creating objects:-

var person = {
 name: 'naga',
age: 26
};

var anotherPerson = new Object();
anotherPerson.name = 'arjun';
anotherPerson.age = 33;

console.log(anotherPerson);


objects are referencetypes:-


var person = {
 name: 'naga',
age: 26
};

var person1 = {
 name: 'naga',
age: 26
};

var anotherPerson = new Object();
anotherPerson.name = 'arjun';
anotherPerson.age = 33;

console.log(anotherPerson == person); // false

console.log(person ==person1); // false

Object.create:-
create new object

var person = {
 name: 'max',
 age:33
};
var anothePerson =Object.create(person);
anotherPerson.name ='raja';

console.log(anotherPerson.age); //33

prototypes introduction:-



var person = {
 name: 'max',
 age:33
};

Object.prototype.greet = function(){
 onsole.log('HELLO TGHEWRW');
}

person.greet(); // hello there
console.log(person.prototype); // undefined

prototpes in action:-


var person = {
 name: 'max',
 age:33
};
Object.prototype.greet = function(){
 console.log('HELLO TGHEWRW' +this.name);
};

var max =Object.create(person);
var anna = Object.reate(person);
anna.name = 'Anna';
max.greet();
anna.greet();

prototypes summary:-

var person = {
 name: 'max',
 age:33
};
Object.prototype.greet = function(){
 console.log('HELLO TGHEWRW' +this.name);
};

var max =Object.create(person);
var anna = Object.reate(person);
conmsole.log(max.__proto__ == person.prototype);
console.log(Object.getPrototypeOf(anna) == person); // true


constructor functions:-

function Person(){
this.name = 'max';
this.greet = function(){
 console.log('hello i am ' +this.name);
}
}
Person.prototype.greet = function(){
 console.log('hello world');
}
console.log(this) // this is global objet for all objects
Person.prototype.greet = function(){
console.log('hello')
}
var person = new Person();
// person is instance of the object
person.name = 'Raja';
person.greet();
console.log(person);
console.log(person.__proto__ == Person.prototype); //true
console.log(person instaanceof Person) // true


constructor argumeents:-

function Person(name,age){

this.name = name;
this.age = age;

}

var person = new Person("ddf",34);
console.log(person);

objet creation and prototypes:-

 function fn(message){
 console.log(message+  this);
}

var obj = {
 objfn:fn
}

var person = {
 name:'MAX'
}

obj.objfn.bind(this)


obj.objfn.bind(person,'hello');


obj.objfn.call(this,'hello');

obj.objfn.call(this,['hello']);

The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.

Create an Array
var fruits = ['Apple', 'Banana'];

console.log(fruits.length);
// 2
Access (index into) an Array item
var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana
Loop over an Array
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1
Add to the end of an Array
var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]
Remove from the end of an Array
var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];
Remove from the front of an Array
var first = fruits.shift(); // remove Apple from the front
// ["Banana"];
Add to the front of an Array
var newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"];
Find the index of an item in the Array
fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf('Banana');
// 1
Remove an item by index position
var removedItem = fruits.splice(pos, 1); // this is how to remove an item
                                        
// ["Strawberry", "Mango"]
Remove items from an index position
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables); 
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1, n = 2;

var removedItems = vegetables.splice(pos, n); 
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

console.log(vegetables); 
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems); 
// ["Turnip", "Radish"]
Copy an Array
var shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]
SyntaxSection
[element0, element1, ..., elementN]
new Array(element0, element1[, ...[, elementN]])
new Array(arrayLength)
ParametersSection
elementN
A JavaScript array is initialized with the given elements, except in the case where a single argument is passed to the Array constructor and that argument is a number (see the arrayLength parameter below). Note that this special case only applies to JavaScript arrays created with the Array constructor, not array literals created with the bracket syntax.
arrayLength
If the only argument passed to the Array constructor is an integer between 0 and 232-1 (inclusive), this returns a new JavaScript array with its length property set to that number (Note: this implies an array of arrayLength empty slots, not slots with actual undefinedvalues). If the argument is any other number, a RangeError exception is thrown.
DescriptionSection
Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.
Arrays cannot use strings as element indexes (as in an associative array) but must use integers. Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's object property collection. The array's object properties and list of array elements are separate, and the array's traversal and mutation operationscannot be applied to these named properties.
Accessing array elementsSection
JavaScript arrays are zero-indexed: the first element of an array is at index 0, and the last element is at the index equal to the value of the array's length property minus 1. Using an invalid index number returns undefined.
var arr = ['this is the first element', 'this is the second element', 'this is the last element'];
console.log(arr[0]);              // logs 'this is the first element'
console.log(arr[1]);              // logs 'this is the second element'
console.log(arr[arr.length - 1]); // logs 'this is the last element'
Array elements are object properties in the same way that toString is a property, but trying to access an element of an array as follows throws a syntax error because the property name is not valid:
console.log(arr.0); // a syntax error
There is nothing special about JavaScript arrays and the properties that cause this. JavaScript properties that begin with a digit cannot be referenced with dot notation; and must be accessed using bracket notation. For example, if you had an object with a property named '3d', it can only be referenced using bracket notation. E.g.:
var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(years.0);   // a syntax error
console.log(years[0]);  // works properly
renderer.3d.setTexture(model, 'character.png');     // a syntax error
renderer['3d'].setTexture(model, 'character.png');  // works properly
Note that in the 3d example, '3d' had to be quoted. It's possible to quote the JavaScript array indexes as well (e.g., years['2'] instead of years[2]), although it's not necessary. The 2 in years[2] is coerced into a string by the JavaScript engine through an implicit toStringconversion. It is, for this reason, that '2' and '02' would refer to two different slots on the years object and the following example could be true:
console.log(years['2'] != years['02']);
Similarly, object properties which happen to be reserved words(!) can only be accessed as string literals in bracket notation (but it can be accessed by dot notation in firefox 40.0a2 at least):
var promise = {
  'var'  : 'text',
  'array': [1, 2, 3, 4]
};

console.log(promise['var']);
Relationship between length and numerical propertiesSection
A JavaScript array's length property and numerical properties are connected. Several of the built-in array methods (e.g., join(), slice(), indexOf(), etc.) take into account the value of an array's length property when they're called. Other methods (e.g., push(), splice(), etc.) also result in updates to an array's length property.
var fruits = [];
fruits.push('banana', 'apple', 'peach');

console.log(fruits.length); // 3
When setting a property on a JavaScript array when the property is a valid array index and that index is outside the current bounds of the array, the engine will update the array's lengthproperty accordingly:
fruits[5] = 'mango';
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits));  // ['0', '1', '2', '5']
console.log(fruits.length); // 6
Increasing the length.
fruits.length = 10;
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
Decreasing the length property does, however, delete elements.
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
This is explained further on the Array.length page.
Creating an array using the result of a matchSection
The result of a match between a regular expression and a string can create a JavaScript array. This array has properties and elements which provide information about the match. Such an array is returned by RegExp.exec, String.match, and String.replace. To help explain these properties and elements, look at the following example and then refer to the table below:
// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case

var myRe = /d(b+)(d)/i;
var myArray = myRe.exec('cdbBdbsbz');
The properties and elements returned from this match are as follows:
Property/Element	Description	Example
input	A read-only property that reflects the original string against which the regular expression was matched.	cdbBdbsbz
index	A read-only property that is the zero-based index of the match in the string.	1
[0]	A read-only element that specifies the last matched characters.	dbBd
[1], ...[n]	Read-only elements that specify the parenthesized substring matches, if included in the regular expression. The number of possible parenthesized substrings is unlimited.	[1]: bB
[2]: d
PropertiesSection
Array.length
The Array constructor's length property whose value is 1.
get Array[@@species]
The constructor function that is used to create derived objects.
Array.prototype
Allows the addition of properties to all array objects.
MethodsSection
Array.from()
Creates a new Array instance from an array-like or iterable object.
Array.isArray()
Returns true if a variable is an array, if not false.
Array.of()
Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
Array instancesSection
All Array instances inherit from Array.prototype. The prototype object of the Arrayconstructor can be modified to affect all Array instances.
PropertiesSection
Array.prototype.constructor
Specifies the function that creates an object's prototype.
Array.prototype.length
Reflects the number of elements in an array.
Array.prototype[@@unscopables]
A symbol containing property names to exclude from a with binding scope.
MethodsSection
Mutator methods
These methods modify the array:
Array.prototype.copyWithin()
Copies a sequence of array elements within the array.
Array.prototype.fill()
Fills all the elements of an array from a start index to an end index with a static value.
Array.prototype.pop()
Removes the last element from an array and returns that element.
Array.prototype.push()
Adds one or more elements to the end of an array and returns the new length of the array.
Array.prototype.reverse()
Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.
Array.prototype.shift()
Removes the first element from an array and returns that element.
Array.prototype.sort()
Sorts the elements of an array in place and returns the array.

JavaScript Scope
________________________________________
Scope determines the accessibility (visibility) of variables.
________________________________________
JavaScript Function Scope
In JavaScript there are two types of scope:
•	Local scope
•	Global scope
JavaScript has function scope: Each function creates a new scope.
Scope determines the accessibility (visibility) of these variables.
Variables defined inside a function are not accessible (visible) from outside the function.
________________________________________
Local JavaScript Variables
Variables declared within a JavaScript function, become LOCAL to the function.
Local variables have Function scope: They can only be accessed from within the function.
Example
// code here can NOT use carName

function myFunction() {
  var carName = "Volvo";

  // code here CAN use carName

}
Try it Yourself »
Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
Local variables are created when a function starts, and deleted when the function is completed.
________________________________________
Global JavaScript Variables
A variable declared outside a function, becomes GLOBAL.
A global variable has global scope: All scripts and functions on a web page can access it. 
Example
var carName = "Volvo";

// code here can use carName

function myFunction() {

  // code here can also use carName 

}
Try it Yourself »
________________________________________
JavaScript Variables
In JavaScript, objects and functions are also variables.
Scope determines the accessibility of variables, objects, and functions from different parts of the code.
________________________________________
________________________________________
Automatically Global
If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
This code example will declare a global variable carName, even if the value is assigned inside a function.
Example
myFunction();

// code here can use carName 

function myFunction() {
  carName = "Volvo";
}
Try it Yourself »
________________________________________
Strict Mode
All modern browsers support running JavaScript in "Strict Mode".
You will learn more about how to use strict mode in a later chapter of this tutorial.
Global variables are not created automatically in "Strict Mode".
________________________________________
Global Variables in HTML
With JavaScript, the global scope is the complete JavaScript environment.
In HTML, the global scope is the window object. All global variables belong to the window object.
Example
var carName = "Volvo";

// code here can use window.carName

Try it Yourself »
________________________________________
Warning
Do NOT create global variables unless you intend to.
Your global variables (or functions) can overwrite window variables (or functions).
Any function, including the window object, can overwrite your global variables and functions.
________________________________________
The Lifetime of JavaScript Variables
The lifetime of a JavaScript variable starts when it is declared.
Local variables are deleted when the function is completed.
In a web browser, global variables are deleted when you close the browser window (or tab), but remain available to new pages loaded into the same window.
________________________________________
Function Arguments
Function arguments (parameters) work as local variables inside functions.

This chapter documents all of JavaScript's standard, built-in objects, including their methods and properties.
The term "global objects" (or standard built-in objects) here is not to be confused with the global object. Here, global objects refer to objects in the global scope. The global objectitself can be accessed using the this operator in the global scope (but only if ECMAScript 5 strict mode is not used; in that case it returns undefined). In fact, the global scope consists of the properties of the global object, including inherited properties, if any.
Other objects in the global scope are either created by the user script or provided by the host application. The host objects available in browser contexts are documented in the API reference. For more information about the distinction between the DOM and core JavaScript, see JavaScript technologies overview.
Standard objects by categorySection
Value propertiesSection
These global properties return a simple value; they have no properties or methods.
•	Infinity
•	NaN
•	undefined
•	null literal
Function propertiesSection
These global functions—functions which are called globally rather than on an object—directly return their results to the caller.
•	eval()
•	uneval() 
•	isFinite()
•	isNaN()
•	parseFloat()
•	parseInt()
•	decodeURI()
•	decodeURIComponent()
•	encodeURI()
•	encodeURIComponent()
•	escape() 
•	unescape() 
Fundamental objectsSection
These are the fundamental, basic objects upon which all other objects are based. This includes objects that represent general objects, functions, and errors.
•	Object
•	Function
•	Boolean
•	Symbol
•	Error
•	EvalError
•	InternalError
•	RangeError
•	ReferenceError
•	SyntaxError
•	TypeError
•	URIError
Numbers and datesSection
These are the base objects representing numbers, dates, and mathematical calculations.
•	Number
•	Math
•	Date
Text processingSection
These objects represent strings and support manipulating them.
•	String
•	RegExp
Indexed collectionsSection
These objects represent collections of data which are ordered by an index value. This includes (typed) arrays and array-like constructs.
•	Array
•	Int8Array
•	Uint8Array
•	Uint8ClampedArray
•	Int16Array
•	Uint16Array
•	Int32Array
•	Uint32Array
•	Float32Array
•	Float64Array
Keyed collectionsSection
These objects represent collections which use keys; these contain elements which are iterable in the order of insertion.
•	Map
•	Set
•	WeakMap
•	WeakSet
Structured dataSection
These objects represent and interact with structured data buffers and data coded using JavaScript Object Notation (JSON).
•	ArrayBuffer
•	SharedArrayBuffer 
•	Atomics 
•	DataView
•	JSON
Control abstraction objectsSection
•	Promise
•	Generator
•	GeneratorFunction
•	AsyncFunction 
ReflectionSection
•	Reflect
•	Proxy
InternationalizationSection
Additions to the ECMAScript core for language-sensitive functionalities.
•	Intl
•	Intl.Collator
•	Intl.DateTimeFormat
•	Intl.NumberFormat
•	Intl.RelativeTimeFormat
•	Intl.ListFormat
WebAssemblySection
•	WebAssembly
•	WebAssembly.Module
•	WebAssembly.Instance
•	WebAssembly.Memory
•	WebAssembly.Table
•	WebAssembly.CompileError
•	WebAssembly.LinkError
•	WebAssembly.RuntimeError
OtherSection
•	arguments

•	Math is a built-in object that has properties and methods for mathematical constants and functions. Not a function object.
•	DescriptionSection
•	Unlike the other global objects, Math is not a constructor. All properties and methods of Mathare static. You refer to the constant pi as Math.PI and you call the sine function as Math.sin(x), where x is the method's argument. Constants are defined with the full precision of real numbers in JavaScript.
•	PropertiesSection
•	Math.E
•	Euler's constant and the base of natural logarithms, approximately 2.718.
•	Math.LN2
•	Natural logarithm of 2, approximately 0.693.
•	Math.LN10
•	Natural logarithm of 10, approximately 2.303.
•	Math.LOG2E
•	Base 2 logarithm of E, approximately 1.443.
•	Math.LOG10E
•	Base 10 logarithm of E, approximately 0.434.
•	Math.PI
•	Ratio of the circumference of a circle to its diameter, approximately 3.14159.
•	Math.SQRT1_2
•	Square root of 1/2; equivalently, 1 over the square root of 2, approximately 0.707.
•	Math.SQRT2
•	Square root of 2, approximately 1.414.
•	MethodsSection
•	Note that the trigonometric functions (sin(), cos(), tan(), asin(), acos(), atan(), atan2()) expect or return angles in radians. To convert radians to degrees, divide by (Math.PI / 180), and multiply by this to convert the other way.
•	Note that many math functions have a precision that's implementation-dependent. This means that different browsers can give a different result, and even the same JS engine on a different OS or architecture can give different results.
•	Math.abs(x)
•	Returns the absolute value of a number.
•	Math.acos(x)
•	Returns the arccosine of a number.
•	Math.acosh(x)
•	Returns the hyperbolic arccosine of a number.
•	Math.asin(x)
•	Returns the arcsine of a number.
•	Math.asinh(x)
•	Returns the hyperbolic arcsine of a number.
•	Math.atan(x)
•	Returns the arctangent of a number.
•	Math.atanh(x)
•	Returns the hyperbolic arctangent of a number.
•	Math.atan2(y, x)
•	Returns the arctangent of the quotient of its arguments.
•	Math.cbrt(x)
•	Returns the cube root of a number.
•	Math.ceil(x)
•	Returns the smallest integer greater than or equal to a number.
•	Math.clz32(x)
•	Returns the number of leading zeroes of a 32-bit integer.
•	Math.cos(x)
•	Returns the cosine of a number.
•	Math.cosh(x)
•	Returns the hyperbolic cosine of a number.
•	Math.exp(x)
•	Returns Ex, where x is the argument, and E is Euler's constant (2.718…), the base of the natural logarithm.
•	Math.expm1(x)
•	Returns subtracting 1 from exp(x).
•	Math.floor(x)
•	Returns the largest integer less than or equal to a number.
•	Math.fround(x)
•	Returns the nearest single precision float representation of a number.
•	Math.hypot([x[, y[, …]]])
•	Returns the square root of the sum of squares of its arguments.
•	Math.imul(x, y)
•	Returns the result of a 32-bit integer multiplication.
•	Math.log(x)
•	Returns the natural logarithm (loge, also ln) of a number.
•	Math.log1p(x)
•	Returns the natural logarithm (loge, also ln) of 1 + x for a number x.
•	Math.log10(x)
•	Returns the base 10 logarithm of a number.
•	Math.log2(x)
•	Returns the base 2 logarithm of a number.
•	Math.max([x[, y[, …]]])
•	Returns the largest of zero or more numbers.
•	Math.min([x[, y[, …]]])
•	Returns the smallest of zero or more numbers.
•	Math.pow(x, y)
•	Returns base to the exponent power, that is, baseexponent.
•	Math.random()
•	Returns a pseudo-random number between 0 and 1.
•	Math.round(x)
•	Returns the value of a number rounded to the nearest integer.
•	Math.sign(x)
•	Returns the sign of the x, indicating whether x is positive, negative or zero.
•	Math.sin(x)
•	Returns the sine of a number.
•	Math.sinh(x)
•	Returns the hyperbolic sine of a number.
•	Math.sqrt(x)
•	Returns the positive square root of a number.
•	Math.tan(x)
•	Returns the tangent of a number.
•	Math.tanh(x)
•	Returns the hyperbolic tangent of a number.
•	Math.toSource() 
•	Returns the string "Math".
•	Math.trunc(x)
•	Returns the integer part of the number x, removing any fractional digits.

Creates a JavaScript Date instance that represents a single moment in time. Date objects use a Unix Time Stamp, an integer value that is the number of milliseconds since 1 January 1970 UTC.
var date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

var date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1 === date2);
// expected output: false;

console.log(date1 - date2);
// expected output: 0


Arrays By Mosh:-
Adding the emements
Finding the elements
Removing Elements
Splitting arrays
Combining Arrays
Adding elements:-
Const numbers  = [3,4];
//End
Numbers.push(5,6) // [3,4,5,6]
Console.log(numbers); //[3,4,5,6]
          //Begining
     Numbers.unshift(1,2); 
 Console.log(numbers); //[1,2,3,4,5,6]
      // Middle
  Numbers.splice(2,0,’a’,’b’);
Console.log(numbers); // [1,2,3,’a’a,’b’,4,5,6]
Finding the elements:-
Const numbers = [1,2,3,1,4];
Console.log(numbers.indexOf(1)); // 0
Console.log(numbers.indexOf(‘1’)); // -1
Console.log(numbers.lastIndexOf(1)); // 3
Console.log(numbers.includes(1)); // true
Console.log(numbers.indexOf(1) ! ==  -1); // true
Concst courses = [
{id: 1, name:’a’},
{id: 2,name:’b’}
];
Const  course = courses.find(function(course){
 return course.name ===’a’;
});
Console.log(course) ; {id:1,name:’a’}

Const  course = courses.findIndex(function(course){
 return course.name ===’a’;
});
Console.log(course) ; // 0

Const  course = courses.find(function(course){
 return course.name ===’xyz’;
});
Console.log(course) ; //  undefined
Arrow function:- shorter and cleaner way.when use single argument no need peranthasis,when use more than one argument we should use  peranthasis
Const  course = courses.find(course =>  course.name === ’a’);
Console.log(course) ;
Removing Elements:-
Const numbers =[1,2,3,4];
// end
Const last = numbers.pop();
Console.log(last);
// beginning
Const first = numbers.shift();
Console.log(first);
// middle
Numbers.splice(2,2);
Console.log(numbers); // [1,2]
Emptying an array:-
Let  numbers = [1,2,3,4];
Let another = numbers;
Sol 1
Numbers = [];
Sol 2
Numbers.length = 0;
Sol 3
Numbers.splice(0,numbers.length);

Console.log(numbers);  //[]
Console.log(another);
Combining and slicing Arrays:-
Slice – copy of the original array
Concat –add the arrays
Const first = [1,2,3];
Const last = [4,5,6];
Const combined = first.concat(second);
Const splice = cobined.slice(2,4); // index 2 to 4
Const splice = cobined.slice();
Console.log(combined);
Console.log(slice); //[3,4], [1,2,3,4,5,6] ,clice means copy
Spread:-
Const first = [1,2,3];
Const second = [4,5,6];
Const combined = [...first,’a’,’b’,...second];
Const copy = [...combined];
Console.log(combined);
Console.log(copy);
Iterating an array:-
Const arr = [1,2,3];
For(let number of arr)
Console.log(number); [1,2,3]
Numbers.forEach(function(number){
Console.log(number); [1,2,3]
})
Joining array: return the string
Const numbers = [1,2,3,4];
Const joined = numbers.join(‘,’);
Console.log(joined); // 1,2,3
Const message = ‘This is my first messgae’ ;
Const parts = message.split(‘ ’); // return the array
Console.log(parts); 
Const combined = parts.join(‘-’);
Console.log(combined); this-is-my-first-message
Sorting arrays
Const courses = [
{id: 1,name: ‘Node.js’},
{id: 2, name: ‘Javascript’}
];
Courses.sort(function(a,b){
//  a<b  =>  -1
//  a>b  => 1
// a ===b => 0
Const nameA = a.name.toLowerCase();
Const nameB = b.name.toLowerCase();
If(nameA < nameB) return -1;
else if(nameA>nameB) return 1
else 0
}
);
Testing the arrays
Filtering the arrays
Map the arrays
Reduce array