const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve.",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
};

// Create Card
const card = document.createElement("div");
card.className = "card";

// // Image
// const img = document.createElement("img");
// img.src = product.image;
// img.alt = product.title; // Better than title
// img.title = product.title;

// // Category
// const pCategory = document.createElement("p");
// pCategory.className = "category";
// pCategory.innerText = product.category;

// // Title
// const h2 = document.createElement("h2");
// h2.innerText = product.title;

// // Description
// const pDescription = document.createElement("p");
// pDescription.className = "description";
// pDescription.innerText = product.description;

// // Price
// const pPrice = document.createElement("p");
// pPrice.className = "price";
// pPrice.innerText = "$" + product.price;

// // Button
// const button = document.createElement("button");
// button.className = "buy-button";
// button.innerText = "Buy Now";

// // Append Elements
// card.appendChild(img);
// card.appendChild(pCategory);
// card.appendChild(h2);
// card.appendChild(pDescription);
// card.appendChild(pPrice);
// card.appendChild(button);

// Append Card to Container
const container = document.getElementById("container");
container.appendChild(card);

console.log(card);

card.innerHTML = `<img src="${product.image}" alt= "${product.title}"/>
<p class="category"> ${product.category} </p>
<h2>${product.description}</h2>
<p class="price">${product.price}</p>
<button class="buy-button">Buy Now</button>
`;
document.getElementById("container").appendChild(card);

const user = {
  name: "john Doe",
  age: 25,
  email: "john@gmail.com",
  city: "New york",
  avatar: "https://i.pravatar.cc/200?img=5",
};

const card2 = document.createElement("div");
card2.className = "card";

// container.appendChild(card2);
card2.innerHTML = `<img src="${user.avatar}" alt="${user.name}"/>
<p><b>Name:</b>${user.name}</p>
<p> <b>Name:</b> ${user.age}</p>
<p> <b>Age:</b>  ${user.email}</p>
<p> <b>city:</b> ${user.city}</p>
`;

document.getElementById("container").appendChild(card2);

// array of objects:
const students = [
  { name: "Rahul", age: 20 },
  { name: "Priya", age: 21 },
  { name: "Aman", age: 19 },
  { name: "Sneha", age: 22 },
];

const card3 = document.createElement("div");
card3.className = "card";
students.forEach((student) => {
  const studentContainer = document.createElement("div");
  studentContainer.innerHTML = `<p><b>Name:</b>${student.name}
  <p><b>Age:</b>${student.age}</p>
  <hr/>`;

  card3.appendChild(studentContainer);
});
container.appendChild(card3);

//try thiis
const products1 = [
  {
    title: "laptop",
    price: 55000,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  },
  {
    title: "headphones",
    price: 2500,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  },
  {
    title: "Smart Watch",
    price: 5000,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  },
];

const card4 = document.createElement("div");
card4.className = "card";
products1.forEach((prod) => {
  const prodcontainer = document.createElement("div");
  prodcontainer.innerHTML = `
  <b>Image:</b> <img src="${prod.image}" alt="${prod.title}"/>
  <p><b>Title:</b> ${prod.title}</p>
  <p><b>Price:</b> ${prod.price}</p>
  <hr/>`;
  card4.appendChild(prodcontainer);
});

document.getElementById("container").appendChild(card4);
