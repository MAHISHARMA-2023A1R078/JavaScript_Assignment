// Objects Arrays and Anonymous Functions

/*object: object is collection of keyvalue pairs
syntax:
variable vairablename={
key:value,
key:value,
key:value   ---------key should be strings and values can be any datatype
};

*/
//object:
let student = {
  studentName: "raghu",
  age: 27,
  number: 9021201,
};

console.log(student);

/*how many ways to access properties from object
1. dot notation: objectname.key
2.sqaure notation: objectname["key"]
*/

console.log(student.studentName); /*. dot means belongs to*/
console.log(student.age);
console.log(student.number);

console.log(student["studentName"]);
console.log(student["age"]);
console.log(student["number"]);

/*how to update value of specific key*/
//objectName.key=newValue
//objectName["key"]=newValue

console.log(`old value: ${student.age}`);
student.age = 40;
console.log(`new value will be: ${student.age}`);
student["age"] = 50;
console.log(student.age);

//how too add new key to exisiting object
// objectname.newkey=value

console.log(student);
student.rollno = 101;
console.log(student);

//if to want to delete a key from object but its rare
delete student.age;
console.log(student);

// Nested Object:
let students = {
  name: "mahi",
  age: 30,
  address: {
    city: "jammu",
    pincode: 1001,
  },
};
// let address = {
//   city: "jammu",
//   pincode: 1001,
// };

console.log(students.name);
console.log(students.address); //undefined as key not present inside the object before this if not present
console.log(students.address.city);

console.log("\n");

//OBJECTS NOT ALLOWS DUPLICATE KEYS: if we enter duplicates it replace it with new value and updates it
let person = {
  name: "rahul",
  city: "jammu",
  pincode: 90293,
  city: "katra", // duplicate keys are now allowed in objects and it will update it with new coty name from jammu to katra
};
console.log(person);
console.log(person.city);

console.log("\n");

// Arrays : colleciton of elemnts with any dataypes in contiguosus memeory in JS not in c++
//variable vairbalename=[elements.....]
let scores = [90, 89, 28, 90, 38];
console.log(scores[1]);

//let us store inside array / list: the -> objects:-
let studentss = [
  { name: "mahi", age: 20 },
  { name: "jack", age: 30 },
  { name: "shaam", age: 90 },
];
console.log(studentss[0]);
console.log(studentss[1]); // {name:"jack",age:30}

// print shaam
console.log(studentss[2].name);

console.log(" ");
for (let i = 0; i < studentss.length; i++) {
  console.log(studentss[i]);
}
console.log(" ");
for (let i = 0; i < studentss.length; i++) {
  if (studentss[i].age > 25) {
    console.log(studentss[i].name);
  }
}

// how to add new elements in array / list:
let score = [100, 50, 40];
console.log(score);
score.push(400); // add new element at end
console.log(score);
score.unshift(500); // add new element at start
console.log(score);
score.pop(); //removes element from last
console.log(score);
score.shift(); //removes eleement from start
console.log(score);

console.log("\n");
// without loops how can we print elements of arrau
let scorr = [10, 20, 30, 40, 50, 60, 70, 80];
function printele(element) {
  console.log(element);
}
scorr.forEach(printele); // foreach is used to access every scorr eleement and to print it
// for each is used to call the function.

// ANONYMOUS FUNCTIONS are used when we have to use it single time : fn without fn name
// fn name is used for reusability but it is for one time use

scorr.forEach(function (element) {
  console.log(element);
});

//using for each print student object
console.log(" ");
let stud = [
  { name: "mahi", age: 20 },
  { name: "jack", age: 30 },
  { name: "shaam", age: 90 },
];
stud.forEach(function (student) {
  //elements jari ha student mein aur phr printing
  console.log(student);
});

console.log(" ");
let numbers = [10, 23, 54, 67, 21, 44, 22, 60, 80];
//filter even nos and push to new array;
let res = [];
numbers.forEach(function (ele) {
  if (ele % 2 == 0) {
    res.push(ele);
  }
});

console.log(res);

// oor
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         res.push(numbers[i]);
//     }
// }
console.log("\n");
console.log("FILTER METHOD: \n");
//anotehr method is by filter method; // filter method return type is ARRAY.
let num = [10, 33, 4, 6, 7];
function isEven(num) {
  return num % 2 === 0;
}

// console.log(isEven(30));
// console.log(isEven(43));
let resu = num.filter(isEven); // if return true it takes ele else it skips
console.log(resu);

//or by anonymous function : fn with no name :-
let resul = num.filter(function (num) {
  return num % 2 === 0;
});
console.log(resul);

console.log("\n");
console.log("numbers which are greater than 100");
let points = [15, 100, 43, 54, 634, 2365, 463, 2412, 676];
// filter the numbers which are greater than 100
let ans = points.filter(function (points) {
  if (points > 100) {
    return points;
  }
});
console.log(ans);

//
let prod = [
  { name: "laptop", category: "electronics" },
  { name: "us polo", category: "clothing" },
  { name: "mobile", category: "electronics" },
  { name: "gold", category: "jwellery" },
  { name: "earphoens", category: "electronics" },
];

//filterthe products wih category electronics:
let anss = prod.filter(function (prod) {
  return prod.category === "electronics";
});
console.log(anss);
