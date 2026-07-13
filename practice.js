// Task 1: Welcome Function
function welcomeStudent(name, course) {
  return `Welcome ${name} to the ${course} Course`;
}

console.log(welcomeStudent("mahi", "CSE"));

// Task 2: Add Two Numbers
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(10, 20));

// Task 3: Voting Eligibility
function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}

checkVotingEligibility(17);
checkVotingEligibility(18);

// Task 4: Even or Odd
function checkEvenOrOdd(a) {
  if (a % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOrOdd(2));
console.log(checkEvenOrOdd(7));

// Task 5: Positive, Negative or Zero
function checkNumber(a) {
  if (a > 0) {
    console.log("Positive");
  } else if (a < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

checkNumber(0);
checkNumber(3);
checkNumber(-2);

// Task 6: Find the Larger Number
function findLargest(a, b) {
  if (a > b) {
    console.log(a + " is the largest");
  } else if (a < b) {
    console.log(b + " is the largest");
  } else if (a === b) {
    console.log("Both numbers are equal");
  }
}

findLargest(2, 3);
findLargest(4, 2);
findLargest(2, 2);

// Task 7: Student Grade
function getGrade(score) {
  if (score >= 90) {
    return "A+";
  } else if (score >= 75 && score <= 89) {
    return "A";
  } else if (score >= 60 && score <= 74) {
    return "B";
  } else if (score >= 40 && score <= 59) {
    return "Pass";
  } else {
    return "Fail";
  }
}

console.log(getGrade(90));
console.log(getGrade(60));
console.log(getGrade(40));
console.log(getGrade(10));

// Task 8: Placement Eligibility
function checkPlacementEligibilty(per, hasback) {
  if (per >= 65 && hasback === false) {
    return "Eligible for placement";
  } else {
    return "Not Eligible for placement";
  }
}

console.log(checkPlacementEligibilty(75, false));
console.log(checkPlacementEligibilty(20, false));
console.log(checkPlacementEligibilty(80, true));

// Task 9: Login Validation
function login(us, pas) {
  if (us === "admin" && pas === 1234) {
    return "Login successful";
  } else {
    return "Invalid credentials";
  }
}

console.log(login("admin", 1234));
console.log(login("mahi", 1231));

// Task 10: == vs ===
console.log(5 == "5"); //true , not strick comparison,data types are not checked. inernally it becomes no.
console.log(5 === "5"); //false, as strict comparison, data types are checked
console.log(false == 0); //true, no strict comaprison
console.log(false === 0); //false, strict comaprison
console.log(10 === 10); //true, as same

// Main Challenge: Student Result Function
function getStudentResult(name, marks, att) {
  if (marks >= 40 && att >= 75) {
    console.log(`${name} passed the course\n`);
  } else {
    console.log(`${name} did not passed the course\n`); //bacltick sign is used here like for fstring
  }
}

getStudentResult("Asha", 82, 90);
getStudentResult("seeta", 89, 74);
