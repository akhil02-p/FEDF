import { books } from './data.js';
import { addToCart, cart } from './cart.js';
import { updateCartUI } from './ui.js';

export function displayBooks() {
  const container = document.getElementById("bookContainer");
  container.innerHTML = ""; // Clear previous

  books.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <span>₹${book.price}</span>
      <div>
        ${
          book.availability === "in stock"
            ? `<button data-index="${index}">Add to Cart</button>`
            : `<span style="color:red; font-weight:bold;">Out of Stock</span>`
        }
      </div>
    `;

    container.appendChild(card);
  });

  // Add event listeners
  container.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.getAttribute("data-index");
      addToCart(books[idx]);
      updateCartUI(cart);
    });
  });
}
