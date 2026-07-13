function greet() {
  console.log("hlo");
}
greet();

/*create a fn named addition 
and inside fn body create two variables a,b with values 10,20
and log a + b and call ur function
*/

function addition() {
  let a = 10;
  let b = 20;
  console.log(a + b);
}
addition();

function addition(a, b) {
  console.log(a + b);
}

addition(10, 20);

/*Write a function named greetuser with name and message paramter
and print greetings with name
example greetuser("ravi","good afternoon")
output: good afternoon ravi
*/

function greetuser(a, b) {
  // a="Ravi"
  // b="Good Afternoon"
  console.log(b + " " + a);
}

greetuser("Ravi", "Good Afternoon");

function add() {
  let a = 10;
  let b = 20;
  console.log(
    `the sum of ${a} and ${b} is ${a + b}`,
  ); /* bactics/template literals */
}

add();

/*create a function named printdetails, takes three paramters name, city, pincode and print in below format
exmaple: printdetails("ravi", "jammu" , 100118)*/

function printde(a, b, c) {
  console.log(
    "hello my name is " + a + " and I am from " + b + ", my pincode is  " + c,
  );
}

printde("ravi", "jammu", 181209);

/*or*/

function printde(a, b, c) {
  console.log(`hello my name is ${a} and I am from ${b}  my pincode is  ${c}`);
}
console.log("\n");
printde("ravi", "jammu", 181209);

/*create a function named getsumoftwonumbers which takes two parameters a,b and returns the sum of a and b
console.log(getSumOfTwoNumbers(10,30))*/
console.log("\n");
function getSumOfTwoNumbers(a, b) {
  return a + b;
}
console.log(getSumOfTwoNumbers(10, 30));

/*create a function named printGrades() which takes score as parameter 
if score >90 and <=100 log grade A if score >=89 and <=70 log grade B
if score >=69 and <=40 log grade C
if score < 40 log grade F */

function printGrades(score) {
  if (score >= 90 && score <= 100) {
    console.log("Grade A");
  } else if (score >= 89 && score <= 70) {
    console.log("Grade B");
  } else if (score >= 69 && score <= 40) {
    console.log("Grade C");
  } else if (score <= 40 && score >= 0) {
    console.log("Grade F");
  } else {
    console.log("Invalid Score");
  }
}

printGrades(190);

//== vs ===
let a = 10;
console.log(a++ + ++a);
