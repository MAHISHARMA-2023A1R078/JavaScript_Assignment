function add(a, b) {
  console.log(a + b); //fn definition
}

add(2, 3);

//fn definiiton assigned in addition
const addition = add;
addition(10, 20);

//once fn is acting as a value:
function greet(message) {
  console.log(message);
}

greet("hello");
//passing function definition as argument to another funciton is known as callback
//--------->USE CASES:
// ->array mehtods mein use hoti Ha
// ->Timers (setTimeout,setInterval)
// ->DOMException(Docunment Obect Model)
// ->Asynchronous Operations

//syntax:

/* 
//------passing function as argument to another function:-

function functionName(parameter){

//block of code

} 

funcitonname(anotherFunctionname)
anotherfunctionname can be :  call back functions can be named function, anonymous function , or, arrow function
*/

// function greets(callback) { //funciton as a value
//   console.log(callback);
// }

function greets(callback) {
  //funciton as a value
  console.log(callback);
}

function prints() {
  console.log("This is called as CallBack Function");
}

greets(prints); //as a value passing function name

function greety(callback) {
  callback();
}

function printy() {
  console.log("this is callback");
}

greety(printy); //phr printy() dega na "this is callback"
printy();

// //
// function add(callback) {
//   console.log(callback);
// }
// function performOperation(a, b) {
//   console.log(a + b);
// }

// add(performOperation);

function addr(callbacks) {
  callbacks(5, 2);
}
function performOperation(a, b) {
  console.log(a + b);
}

addr(performOperation);

//
function printw(callback1, callback2) {
  console.log("A");
  callback1();
  console.log("C");
  callback1();
  callback2();
}
function x() {
  console.log("B"); //A C C C //B for console 2
}
function y() {
  console.log("C");
}

printw(y, x);

//

let as = function (a, b) {
  console.log(a + b);
};
as(2, 3);

/*function greet(calllback){
callback()
}

funciotn print(){
console.log("hello")
}

greet(print)


ANONYMOUS FUNCITON:
function greet(callback){
callback()
}

greet(function(){
console.log("hello");
});



*/

function greetq(callbacku) {
  callbacku();
}

greetq(function () {
  console.log("hello");
});

//ARROW FUNCTion
const gret = (message) => console.log(message);
gret("mahi");

//
// function get(name, mess) {
//   console.log(mess, name);
// }
const gtu = (name, mess) => console.log(name, mess);
gtu("hello", "coco");

//EXPLICIT RETURN TYPE:
const getname = () => {
  return "Raju";
}; //{} are mandatory
console.log(getname());

//rule 7; Implicit return type
const gr = () => "Ravi"; //without {} hi add krga bina return type ke

console.log(gr());

//
const addru = (i, j) => i + j;
console.log(addru(9, 3));

const getdet = (name, age) => ({ name: name, age: age });

console.log(getdet("mahi", 34));

// wrtie an arrow funciton that return jaavascript
const lan = () => "javascript";
console.log(lan());

const iseven = (num) => num % 2 === 0;
console.log(iseven(10));
console.log(iseven(11));

//funnctions are stored as values so too pura funciton print hota ha

//greatest of 3 nos using arrow function

let cal = () => console.log("hello");
console.log(cal);
