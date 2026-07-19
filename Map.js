// map() : map() is used to transform the elements of array without modifying original array
// the return type of map is []
// Map() will store whatever values are returned by callback funciton into  []

// syntax:
//varaible variableName = arrRef.map(callbackFunction)
// callback function should return any value or else undefined

//to double the array : sqaures of nos. to not modify original array
const numbers = [1, 2, 3, 4, 5, 6];

let res = numbers.map((number) => {
  return number ** number;
});
// it is not checking the connditions only it is retunining
console.log(res);

const num = [1, 2, 3, 4, 5, 6];

let result = num.filter((numbers) => numbers % 2 === 0);
console.log(result);
let resu = num.map((numberu) => numberu % 2 === 0);
console.log(resu);

//add 10 to every no:
const nu = [5, 10, 15, 20];
let nums = nu.map((number) => number + 10);
console.log(nums);

//return oonly student names:
const student = [
  { name: "mahi", marks: 80 },
  { name: "lili", marks: 92 },
  { name: "alex", marks: 89 },
];

let stud = student.map((ele) => ele.name);
console.log(stud);

//return a new array with updated marks:5 bonus marks
let update = student.map((student) => {
  return {
    name: student.name, //here whhy dont we used first () and then {} beacyse its obbject
    marks: student.marks + 5,
  };
});
// u can use spread operator also for this
console.log(update);

//add a new propertty passed:true
const st = [
  { name: "mahi", marks: 80 },
  { name: "lili", marks: 92 },
  { name: "alex", marks: 89 },
];

let s = st.map((s) => {
  return {
    name: s.name,
    marks: s.marks,
    ispassed: true,
  };
});

console.log(s);

//using spread operator
// console.log(students.map((student) => ({ ...student, passed: true })));

stus = [
  { name: "rah", age: 67 },
  { name: "tah", age: 34 },
  { name: "kil", age: 90 },
];
que = stus.map((ele) => {
  return {
    name: ele.name + "i",
    age: ele.age,
  };
});

console.log(que);
