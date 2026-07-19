const user = [
  { name: "mahi", age: 17 },
  { name: "Emma", age: 22 },
  { name: "alex", age: 15 },
];
const res = user.filter((user) => {
  console.log(user);
  return user.age > 18;
});

console.log(res);

const number = [5, 19, 10, 13, 22, 25];

//return only the nos divisble by 5:
let ele = number.filter((ele) => {
  return ele % 5 === 0;
});
console.log(ele);

//-------------------------------------------------------------------------------------------

/*For each,filter and map
forEach: This method is used to iterate over the array elements.
forEach Method doesnt return a value
syn:     arrRef.forEach(callback);
for every element in array, it is going to call your callback function
[1,2,3,4,5]  


Filter(): It is used to filter data based on given condition
The return type of filter() is [] array
If condition is true then it is going add the elemnt into [] array
If conditon is false, filter() will ignore th element


syn:     variable variableName = arrRef.filter(callback)   ; callback should return either False or True




*/
let arr = [1, 2, 3, 4, 5];
const print = (element) => {
  console.log(element);
};
arr.forEach(print);

// Print Students name using forEach
let students = [
  { name: "Hemanth", age: 29 },
  { name: "Rahul", age: 34 },
  { name: "Ravi", age: 32 },
];
const print1 = (student) => {
  console.log(student.name);
};

students.forEach(print1);

// index value corresponding to element
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach((element, index) => console.log(element, index));

console.log("\n");

// Print only even numbers
const num = [3, 6, 9, 12, 15, 18];
const numbers = (number) => {
  if (number % 2 == 0) {
    console.log(number);
  }
};
num.forEach(numbers);

console.log("\n");

// Filters:
const numbers1 = [3, 6, 9, 12, 15, 18];
const filterNumbers = numbers1.filter((number) => {
  return number > 10; // Returning if number >10 to array (const filterNumbers)
});
console.log(filterNumbers);

const result = numbers1.filter((number) => {
  return false;
});

console.log(result); // bydefsult for every value the conditon is false

// finding even numbers from filters
const numbers8 = [3, 6, 9, 12, 15, 18];
const filterNumbers1 = numbers8.filter((number6) => {
  if (number6 % 2 == 0) {
    return number6; // Returning if number >10 to array (const filterNumbers)
  }
});
console.log(filterNumbers1);

console.log("\n");

// Filter
const users = [
  { name: "John", age: 17 },
  { name: "Emma", age: 22 },
  { name: "Alex", age: 15 },
  { name: "David", age: 30 },
];
const filterUser = users.filter((user) => {
  // console.log(user);   this is the optional part
  return user.age > 18;
});

console.log(filterUser);

// Return only the numbers divisible by 5
const number7 = [5, 8, 10, 13, 15, 22, 25];
const filterNumbers12 = number7.filter((number5) => {
  if (number5 % 5 == 0) {
    return number5; // Returning if number >10 to array (const filterNumbers)
  }
});
console.log(filterNumbers12);

/*
map(): Is used to transform the elements of array without modifying original array
Th return type of map is array []
map() will store whatever values are returned by callback function into array [] 

syn:    variable variableName = arrRef.map(callabckFunction);  should return any value or else undefined
 */

// dont want to modify my original array there we use map()
const arr2 = [1, 2, 3, 4, 5, 6];
const result1 = arr2.map((n) => {
  return n * n;
});
console.log(result1);

const arr3 = [1, 2, 3, 4, 5, 6];
let ress;
ress = arr3.filter((a) => a % 2 === 0);
console.log(ress);
ress = arr3.map((b) => b % 2 === 0);
console.log(ress);

//Add 10 to every number

const arr4 = [5, 10, 15, 20];
let reslt;
reslt = arr4.map((c) => c + 10);
console.log(reslt);

// return only student names
const students1 = [
  { name: "John", marks: 80 },
  { name: "Emma", marks: 92 },
  { name: "Alex", marks: 75 },
];
let ans;
ans = students1.map((student6) => student6.name);
console.log(ans);

console.log("\n");
// Add 5 bonus marks to every student
const arr5 = [
  { name: "John", marks: 80 },
  { name: "Emma", marks: 92 },
  { name: "Alex", marks: 75 },
];
const reslt1 = arr5.map((c) => {
  return {
    name: c.name,
    marks: c.marks + 5,
  };
});
console.log(reslt1);

// Add a new property passed: true
const st = [
  { name: "John", marks: 80 },
  { name: "Emma", marks: 92 },
];
const r = st.map((property) => {
  return {
    name: property.name,
    marks: property.marks,
    passed: true,
  };
});
console.log(r);
// console.log(students,map(student => ({...student, passed: true})))    ... is print operator
