const products = [
    { id: 1, name: "Shoes", price: 999, img: "https://via.placeholder.com/150" },
    { id: 2, name: "T-Shirt", price: 499, img: "https://via.placeholder.com/150" },
    { id: 3, name: "Mobile", price: 15000, img: "https://via.placeholder.com/150" },
    { id: 4, name: "Laptop", price: 50000, img: "https://via.placeholder.com/150" }
];

const productList = document.getElementById("product-list");

products.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;

    productList.appendChild(div);
});

function addToCart(id) {
    alert("Product " + id + " added to cart!");
}
