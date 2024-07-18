async function getProducts() {
    const Response = await fetch("https://dummyjson.com/products");
    const data = await Response.json();
    const products = data.products;
    const result = products.map(function (product) {
        let stock = "";
        let color="";
        if (product.stock > 0) {
            stock = "In Stock";
            color="green";
        } else {
            stock = "Out of Stock";
            color="red";
        }
        return `
        <div class="product">
        <h2>${product.title}</h2>
        <img src="${product.images[0]}"/>
        <div class="paras">
        <p>$${product.price}</p>
        <p class="${color}">${stock}</p>
        </div>
        </div>
        `;
    }).join('');
    document.querySelector(".products").innerHTML = result;
}

getProducts();