// function clicks() {
//   let button = document.getElementById("but");
//   button.innerText = "clicked";
// }

let count = 1;
function add() {
  let p = document.createElement("p");
  p.innerText = `Paragraph - ${count}`;
  count = count + 1;
  document.getElementById("cont").appendChild(p);
}
