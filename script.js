const products = [
{
id:1,
name:"Noise Smart Watch",
price:"₹1,499",
oldPrice:"₹3,999",
image:"earbrds.jpg"
},
{
id:2,
name:"Wireless Earbuds",
price:"₹999",
oldPrice:"₹2,499",
image:"https://via.placeholder.com/250x250?text=Earbuds"
},
{
id:3,
name:"Bluetooth Speaker",
price:"₹799",
oldPrice:"₹1,999",
image:"https://via.placeholder.com/250x250?text=Speaker"
},
{
id:4,
name:"Power Bank",
price:"₹1,199",
oldPrice:"₹2,499",
image:"https://via.placeholder.com/250x250?text=Power+Bank"
}
];

function showProducts(){
const box=document.getElementById("products");
if(!box) return;

products.forEach((p)=>{
box.innerHTML+=`
<div class="card" onclick="location.href='product.html?id=${p.id}'">
<img src="${p.image}">
<div class="title">${p.name}</div>
<div class="price">${p.price}</div>
<div class="old">${p.oldPrice}</div>
<button>Buy Now</button>
</div>
`;
});
}

window.onload=showProducts;
