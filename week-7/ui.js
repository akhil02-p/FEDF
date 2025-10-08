import { calculateTotal, removeFromCart, cart } from './cart.js';

export function updateCartUI(cartData) {
  const cartItemsDiv = document.getElementById("cartItems");
  const cartTotalDiv = document.getElementById("cartTotal");

  cartItemsDiv.innerHTML = "";

  cartData.forEach((book, index) => {
    const item = document.createElement("div");
    item.classList.add("cart-item");

    item.innerHTML = `
      <span>${book.title} - ₹${book.price}</span>
      <button data-index="${index}" style="background:#e53e3e;">Remove</button>
    `;

    cartItemsDiv.appendChild(item);
  });

  // Remove functionality
  cartItemsDiv.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.getAttribute("data-index");
      removeFromCart(idx);
      updateCartUI(cart);
    });
  });

  cartTotalDiv.textContent = `Total: ₹${calculateTotal()}`;
}
