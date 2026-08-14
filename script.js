const products = [
  {
    id: 1,
    name: "Boat earbuds",
    price: "₹1,499",
    oldPrice: "₹3,999",
    image: "earbuds.jpg"
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: "₹999",
    oldPrice: "₹2,499",
    image: "https://via.placeholder.com/250x250?text=Earbuds"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "₹799",
    oldPrice: "₹280",
    image: "speaker.jpg"
  },
  {
    id: 4,
    name: "Power Bank",
    price: "₹160",
    oldPrice: "₹2,499",
    image: "powerbank.jpg"
  }
];

function showProducts() {
  const box = document.getElementById("products");
  if (!box) return;

  products.forEach((p) => {
    box.innerHTML += `
      <div class="card" onclick="location.href='address.html?id=${p.id}'">
        <img src="${p.image}">
        <div class="title">${p.name}</div>
        <div class="price">${p.price}</div>
        <div class="old">${p.oldPrice}</div>
        <button>Buy Now</button>
      </div>
    `;
  });
}

window.onload = showProducts;
