//Coding Question 1: Message Callback
function showMessage(callback) {
  console.log(callback());
}

showMessage(() => "Showing the message");
// Coding Question 2: Calculation Callback

// Addition;
// Multiplication;
// Subtraction;

// function calculate(callback) {
//   console.log(callback(20, 30));
// }

// function add(a, b) {
//   return a + b;
// }
// calculate(add);

// function calculate(callback) {
//   console.log(callback(2, 3));
// }
// calculate(function (a, b) {
//   return a + b;
// });

// function calculate(callback){
//     console.log(callback(20,3));
// }
// calculate(function(a,b){
//     return a-b;
// })

// function calculate(callback){
//     console.log(callback(20,30));
// }
// calculate((a,b)=>a-b);

// function cal(callback) {
//   callback();
// }

// cal(function () {
//   console.log("hello");
// });

// function calculate(callback) {
//   console.log(callback(2, 2));
// }

// function add(a, b) {
//   return a * b;
// }

// calculate(add);

// function cal(callback) {
//   console.log(callback(2, 3));
// }
// cal(function (a, b) {
//   return a * b;
// });

function cal(callback) {
  console.log(callback(2, 3));
}
cal((a, b) => a * b);

// Coding Question 3: Number Checker
function checkNumber(callback) {
  console.log(callback(3));
}
checkNumber((a) => a % 2 === 0);

// Coding Question 4: Arrow Function Practice

// Return a student name
let a = (name) => console.log(name);
a("mahi");

// Add two numbers
let bs = (as, b) => as + b;
console.log(bs(2, 3));

// Check whether a number is greater than 50
let gr = (num) => num > 50;
console.log(gr(5));

// Return an object containing a name and age
let ob = (name, age) => ({ name: name, age: age });
console.log(ob("mahi", 89));

// Print a welcome message
let mess = () => "Welcome Message";
console.log(mess());

// Coding Question 5: forEach Practice
let arr = [12, 45, 67, 89, 100];

// Print every number
arr.forEach((ele) => console.log(ele));
// let arr = [12, 45, 67, 89, 100];
// arr.forEach(function (ele) { //with anaonymous function
//   console.log(ele);
// });

// Print whether every number is even or odd
ev = arr.forEach((ele) => {
  if (ele % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
});

// Print the square of every number
sq = arr.forEach((ele) => console.log(ele * ele));

// Print the item along with its index
idx = arr.forEach((ele, index) => console.log(ele, index));
// index = arr.forEach(function (ele, indx) {
//   console.log(ele, indx);
// });
