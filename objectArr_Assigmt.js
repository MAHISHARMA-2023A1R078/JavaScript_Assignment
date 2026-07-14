// Task 1: Create a Student Object
let student = {
  name: "mahi",
  age: 20,
  phonemumber: 19324339,
  course: "maths",
  isplaced: true,
};
console.log(student);

// Task 2: Access Object Properties
console.log(student.name);
console.log(student.age);
console.log(student.phonemumber);
console.log(student["course"]);
console.log(student["phonemumber"]);
console.log(student["age"]);

// Task 3: Update Object Properties
console.log(student.age);
student.age = 90;
console.log(student.age);
console.log(student.course);
student.course = "science";
console.log(student.course);
console.log(student["isplaced"]);
student["isplaced"] = false;
console.log(student["isplaced"]);

// Task 4: Add New Properties
student.rollnumber = 78;
student.city = "US";
student.email = "outlook@gmail.com";

console.log(student);

// Task 5: Delete a Property
console.log(student.phonemumber);
delete student.phonemumber;
console.log(student.phonemumber);

// Task 6: Nested Object
let employee = {
  name: "mahi",
  age: 20,
  department: "CSE",
  address: {
    city: "jmu",
    state: "punjab",
    pincode: 92302,
  },
};

console.log(employee.name);
console.log(employee.address);
console.log(employee.address.city);
console.log(employee.address.pincode);

// Task 7: Duplicate Object Keys
let person = {
  name: "Rahul",
  city: "Hyderabad",
  pincode: 500032,
  city: "Jammu",
};
console.log(person); //updated city will be printed i.e. jammu as duplicates now allwed

// Task 8: Basic Array Operations
let scores = [100, 50, 40];
scores.push(400);
console.log(scores);
scores.unshift(500);
console.log(scores);
scores.pop();
console.log(scores);
scores.shift();
console.log(scores);
console.log(scores);

// Task 9: City Array
let cityname = ["jammu", "muthi", "katra", "himachal", "punjab"];
console.log(cityname[0]);
console.log(cityname[cityname.length - 1]);
cityname.push("Delhi");
console.log(cityname);
cityname.unshift("hyderabad");
console.log(cityname);
cityname.pop();
console.log(cityname);
cityname.shift();
console.log(cityname);

// Task 10: Array of Student Objects
students = [
  { name: "Rahul", age: 25, course: "JavaScript" },
  { name: "Raghu", age: 30, course: "Python" },
  { name: "Ravi", age: 45, course: "JavaScript" },
];

console.log(students[0]);
console.log(students[0].name);
console.log(students[1].age);
console.log(students[students.length - 1].course);

// Task 11: Print Students Using forEach()
students.forEach(function (stud) {
  console.log(stud);
});

students.forEach(function (stud) {
  console.log(stud.name);
});

// Task 12: Print Student Details using template literals
students.forEach(function (stud) {
  console.log(
    `${stud.name} is ${stud.age} years old and learning ${stud.course}`,
  );
});

// Task 13: Filter Even Numbers
let numbers = [10, 33, 4, 6, 7, 12, 19, 20];

let ans = numbers.filter(function (nums) {
  return nums % 2 == 0;
});

console.log(ans);

// Task 14: Filter Numbers Greater Than 100
let points = [15, 100, 43, 54, 634, 2365, 463, 2412, 676];

let anss = points.filter(function (point) {
  return point > 100;
});
console.log(anss);

// Task 15: Filter Students by Age

let studentss = [
  { name: "Rahul", age: 25 },
  { name: "Raghu", age: 30 },
  { name: "Ravi", age: 45 },
  { name: "Sai", age: 18 },
  { name: "Asha", age: 27 },
];
anns = studentss.filter(function (stud) {
  return stud.age > 25;
});
console.log(anns);
anns.forEach(function (ans) {
  console.log(ans.name);
});

// Task 16: Filter Products by Category
let products = [
  { name: "Laptop", category: "Electronics" },
  { name: "US POLO", category: "Clothing" },
  { name: "Mobile", category: "Electronics" },
  { name: "Gold", category: "Jewellery" },
  { name: "Earphones", category: "Electronics" },
];

let electronics = products.filter(function (prod) {
  return prod.category === "Electronics";
});
console.log(electronics);
electronics.forEach(function (ele) {
  console.log(ele.name);
});

// Task 17: Filter Products by Price

let product = [
  { name: "Laptop", price: 60000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 },
  { name: "Earphones", price: 2000 },
];

let sols = product.filter(function (eles) {
  return eles.price < 5000;
});

console.log(sols);
sols.forEach(function (eles) {
  console.log(eles);
});

// Main Challenge: College Student Records
let collegeStudents = [
  {
    rollno: 1,
    name: "jack",
    age: 90,
    course: "maths",
    marks: 80,
    isplaced: true,
    address: {
      city: "jammu",
      pincode: 90843,
    },
  },
  {
    rollno: 2,
    name: "jacky",
    age: 95,
    course: "cse",
    marks: 84,
    isplaced: true,
    address: {
      city: "delhi",
      pincode: 9823,
    },
  },
  {
    rollno: 3,
    name: "fack",
    age: 93,
    course: "JavaScript",
    marks: 90,
    isplaced: false,
    address: {
      city: "US",
      pincode: 8349,
    },
  },
  {
    rollno: 4,
    name: "ljack",
    age: 23,
    course: "hindi",
    marks: 99,
    isplaced: false,
    address: {
      city: "Hyderabad",
      pincode: 9034,
    },
  },
  {
    rollno: 5,
    name: "king",
    age: 12,
    course: "EVS",
    marks: 39,
    isplaced: false,
    address: {
      city: "pune",
      pincode: 9349,
    },
  },
  {
    rollno: 6,
    name: "Olly",
    age: 89,
    course: "History",
    marks: 10,
    isplaced: true,
    address: {
      city: "Mumbai",
      pincode: 2904,
    },
  },
];

// 1. Print every complete student object using forEach() .
collegeStudents.forEach(function (ele) {
  console.log(ele);
});

// 2. Print every student's name and course.
collegeStudents.forEach(function (ele) {
  console.log(ele.name, ele.course);
});

// 3. Filter students whose marks are at least 40 .
let col = collegeStudents.filter(function (ele) {
  return ele.marks >= 40;
});
console.log(col);

// 4. Filter students whose marks are greater than 75 .
let cols = collegeStudents.filter(function (ele) {
  return ele.marks > 75;
});
console.log(cols);

// 5. Filter students learning "JavaScript" .
let cools = collegeStudents.filter(function (ele) {
  return ele.course === "JavaScript";
});
console.log(cools);

// 6. Filter students whose isPlaced value is strictly equal to true .
let colls = collegeStudents.filter(function (ele) {
  return ele.isplaced === true;
});
console.log(colls);

// 7. Filter students who live in "Hyderabad" .
let ccols = collegeStudents.filter(function (ele) {
  return ele.address.city === "Hyderabad";
});

console.log(ccols);

// 8. Print only the names of the students from every filtered result.
col.forEach(function (ele) {
  console.log(ele.name);
});

cols.forEach(function (ele) {
  console.log(ele.name);
});

cools.forEach(function (ele) {
  console.log(ele.name);
});

colls.forEach(function (ele) {
  console.log(ele.name);
});

ccols.forEach(function (ele) {
  console.log(ele.name);
});

// Bonus Challenge: Inventory Management
let inventory = [
  {
    id: 1,
    name: "Washing Mch.",
    category: "electronics",
    price: 200000,
    instock: true,
  },
  {
    id: 2,
    name: "us polo shirt",
    category: "clothing",
    price: 30000,
    instock: false,
  },
  { id: 3, name: "AC", category: "electronics", price: 5100, instock: true },
  { id: 4, name: "Dosa", category: "fast food", price: 100, instock: false },
  {
    id: 5,
    name: "Hair Drier",
    category: "cosmetics",
    price: 700,
    instock: false,
  },
  {
    id: 6,
    name: "Smart OLED",
    category: "electronics",
    price: 1000,
    instock: true,
  },
];

// 1. Add a new product using push() .
console.log(inventory);
inventory.push({
  id: 7,
  name: "Dholu",
  category: "clothing",
  price: 300,
  instock: false,
});

console.log(inventory);

// 2. Add another product using unshift() .
inventory.unshift({
  id: 8,
  name: "Bholu",
  category: "clothing",
  price: 400,
  instock: true,
});

// 3. Remove the last product using pop() .
console.log(inventory);

inventory.pop();
console.log(inventory);

// 4. Remove the first product using shift() .
inventory.shift();
console.log(inventory);

// 5. Print every product using forEach() .
inventory.forEach(function (ele) {
  console.log(ele);
});

// 6. Filter products in the "Electronics" category.
let coolls = inventory.filter(function (ele) {
  return ele.category === "electronics";
});
console.log(coolls);

// 7. Filter products priced below 10000 .
solu = inventory.filter(function (ele) {
  return ele.price < 10000;
});

console.log(solu);

// 8. Filter products whose inStock value is true .
solut = inventory.filter(function (ele) {
  return ele.instock === true;
});
console.log(solut);

// 9. Print the name of every filtered product.

coolls.forEach(function (ele) {
  console.log(ele.name);
});

solu.forEach(function (ele) {
  console.log(ele.name);
});

solut.forEach(function (ele) {
  console.log(ele.name);
});
