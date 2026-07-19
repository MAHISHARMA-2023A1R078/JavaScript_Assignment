// // // let h2 = document.getElementById("heading");
// // // console.log(h2);

// // // console.log(h2.innerText);
// // // console.log(h2.innerHTMl);
// // // console.log(h2.textContent);

// // // let container = document.getElementById("container");
// // // console.log(container.innerText);
// // // console.log(container.innerHTML);

// // // //with the help pff inner text we can modify the code
// // // // h2.innerText = "hi";
// // let h2 = document.getElementById("heading");
// // console.log(h2.innerText); //innner text of element
// // h2.innerText = "Welcome to JavaScript"; //to uupdate the content in browser
// // console.log("After Modification");
// // console.log(h2.innerText);
// // // console.log(h2.innerHTML)

// // // let p = document.getElementById("mess");
// // // p.innerText = "Good Evebeing";

// // //how to create elements dynamically
// // let h1 = document.createElement("h1");
// // h1.innerText = "student names";

// // //how to add new element to existing container
// // cont.appendChild(h1);

// // //create hr element below append child to exisitng contianer after h1
// // let hr = document.createElement("hr");
// // cont.appendChild(hr);

// // let stud = ["mahi", "jack", "jin", "una"];

// // /**
// //  <div>
// //  >h1>stud name</h1>
// //  <hr/>
// //  <p>name</p>
// //  <p>mahi</p>
// //  </div>
// //  */

// // stud.forEach((stud) => {
// //   let p = document.createElement("p");
// //   p.innerText = stud;
// //   cont.appendChild(p);
// // });

// function logger() {
//   console.log("this is called from html");
// }

function create() {
  let p = document.createElement("p");
  p.id = "para";
  p.innerText = "This is ceated by JavaScript";
  document.getElementById("container").appendChild(p);
}

function read() {
  let h2 = document.getElementById("heading");
  alert(h2.innerText);
}

function update() {
  let h2 = document.getElementById("heading");
  h2.innerText = "Welcome to JavaScript";
}
function del() {
  let p = document.getElementById("para");
  if (p) {
    p.remove();
  } else {
    alert("p tag is not present");
  }
}
