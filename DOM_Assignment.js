// Task1
let l1 = document.getElementById("mainTitle");
console.log(l1);
console.log(l1.innerText);
// l1.innerText = "headin gonsole";
// console.log(l1.innerText);

// Task2
let l2 = document.getElementById("pageTitle");
console.log(l2.innerText);
l2.innerText = "JavaScript DOM Assignment";
console.log(l2.innerText);

// Task 3
let l3 = document.getElementById("1");
l3.innerText = "S1";
console.log(l3.innerText);
let l4 = document.getElementById("2");
l4.innerText = "S2";
let l5 = document.getElementById("3");
l5.innerText = "S3";

//Task 4
l6 = document.getElementById("messageContainer");
let p = document.createElement("p");
p.innerText = "DOM element created successfully";
document.getElementById("messageContainer").appendChild(p);

//Task 5
let li = document.createElement("li");
li.innerText = "Mahi Sharma";
document.getElementById("studentList").appendChild(li);

//Task 6
document.getElementById("studentList");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
li1.innerText = "Jaggu";
li2.innerText = "Bheem";
li3.innerText = "Dholu-Bholu";

document.getElementById("studentList").appendChild(li1);
document.getElementById("studentList").appendChild(li2);
document.getElementById("studentList").appendChild(li3);

//Task 7
let c1 = document.createElement("section");
let c2 = document.createElement("section");
let c3 = document.createElement("section");

let c1h1 = document.createElement("h2");
let c1p1 = document.createElement("p");
let c2h1 = document.createElement("h2");
let c2p1 = document.createElement("p");
let c3h1 = document.createElement("h2");
let c3p1 = document.createElement("p");
c1h1.innerText = "JavaScript";
c1p1.innerText = "Hemanth Sir";
c2h1.innerText = "Python";
c2p1.innerText = "Shubham Sir";
c3h1.innerText = "FastAPI";
c3p1.innerText = "ABC Sir";
c1.appendChild(c1h1);
c1.appendChild(c1p1);
c2.appendChild(c2h1);
c2.appendChild(c2p1);
c3.appendChild(c3h1);
c3.appendChild(c3p1);

document.getElementById("courseContainer").appendChild(c1);
document.getElementById("courseContainer").appendChild(c2);
document.getElementById("courseContainer").appendChild(c3);

//Task 8
let p1 = document.createElement("p");
p1.innerText = "course registration is closed";
document.body.appendChild(p1);
p1.innerText = "course Registration is open";

//Task 9:
document.getElementById("oldMessage").remove();
//confirmed no longer visible on the page

//Task 10
let p2 = document.createElement("p");
document.body.appendChild(p2);
p2.innerText = "Temporary Notificaiton";

console.log(p2);
p2.remove();

//task 11:
let p3 = document.createElement("p");
p3.innerText = "student Name:  Mahi Sharma";
document.getElementById("studentContainer").appendChild(p3);

console.log(p3.innerText);
p3.innerText = "Sharma";
console.log(p3.innerText);
p3.remove();

//Task 12:
let uli = document.getElementById("prodlist");
let lii1 = document.createElement("li");
let lii2 = document.createElement("li");
let lii3 = document.createElement("li");
let lii4 = document.createElement("li");
uli.appendChild(lii1);
lii1.innerText = "Laptop";

uli.appendChild(lii2);
lii2.innerText = "Mobile";

uli.appendChild(lii3);
lii3.innerText = "Keyboard";

uli.appendChild(lii4);
lii4.innerText = "Mouse";

lii3.innerText = "Mechanical Keyboard";

lii4.remove(); // rmeoved the mouse item

//Main Challenge
let stu = document.getElementById("profilecont");

let sh2 = document.createElement("h2");
let sc = document.createElement("p");
let sa = document.createElement("p");
let scity = document.createElement("p");
let sts = document.createElement("p");

sh2.innerText = "Name: Rahul";
sc.innerText = "Course: JavaScript";
sa.innerText = "Age: 21";
scity.innerText = "city: Hyderabad";
sts.innerText = "Status: Learning";

stu.appendChild(sh2);
stu.appendChild(sc);
stu.appendChild(sa);
stu.appendChild(scity);
stu.appendChild(sts);

sc.innerText = "Course: Full Stack Development";
sts.innerText = "Status: Course Completed";
sa.remove();

//Bonus:
let nb = document.getElementById("noticeB");
let nh2 = document.createElement("h2");
nh2.innerText = "Classroom Notices";
let np1 = document.createElement("p");
np1.innerText = "Notice 1";
let np2 = document.createElement("p");
np2.innerText = "Notice 2";
let np3 = document.createElement("p");
np3.innerText = "Notice 3";
let np4 = document.createElement("p");
np4.innerText = "Notice 4";
np2.innerText = "Updated Second Notice i.e. Notice 2";

nb.appendChild(nh2);
nb.appendChild(np1);
nb.appendChild(np2);
nb.appendChild(np3);
nb.appendChild(np4);

np4.remove();
