const productContainer = document.getElementById("products");
const statusMessage = document.getElementById("status");

async function loadProducts() {
  try {
    statusMessage.textContent = "Loading products...";

    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Server returned an error.");
    }

    const products = await response.json();
    statusMessage.textContent = "";

    products.forEach(product => {
      console.log("Product:", product.title);
      console.log("Price: $" + product.price);
      console.log("Image:", product.image);

      // Bonus: Create a product card and add it to the page.
      const card = document.createElement("div");
      card.className = "product-card";

      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.title;

      const title = document.createElement("h3");
      title.textContent = product.title;

      const price = document.createElement("p");
      price.textContent = "$" + product.price;

      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(price);
      productContainer.appendChild(card);
    });
  } catch (error) {
    console.error(error);
    statusMessage.textContent = "Failed to load products. Please try again.";
  }
}

loadProducts();
