"use client";

import { useState } from "react";

const products = {
  "elegant-ring": {
    name: "Elegant Ring",
    category: "Jewelry",
    price: 45,
    icon: "💍",
    description:
      "A beautiful jewelry piece for everyday wear and special occasions.",
  },

  "flower-bouquet": {
    name: "Fresh Flower Bouquet",
    category: "Flowers",
    price: 35,
    icon: "🌸",
    description:
      "A carefully arranged flower bouquet designed for meaningful moments.",
  },

  "birthday-card": {
    name: "Birthday Celebration Card",
    category: "Birthday",
    price: 12,
    icon: "🎂",
    description:
      "A thoughtful birthday card for celebrating someone special.",
  },

  "surprise-card": {
    name: "Surprise Gift Card",
    category: "Surprise Gifts",
    price: 18,
    icon: "💌",
    description:
      "A special gift card designed to make someone's day memorable.",
  },

  "special-pizza": {
    name: "Special Occasion Pizza",
    category: "Food",
    price: 22,
    icon: "🍕",
    description:
      "A delicious pizza option for celebrations and special occasions.",
  },

  "fashion-collection": {
    name: "Classic Fashion Collection",
    category: "Fashion",
    price: 65,
    icon: "👗",
    description:
      "A stylish fashion collection designed for everyday confidence.",
  },

  "smart-device": {
    name: "Wireless Smart Device",
    category: "Electronics",
    price: 89,
    icon: "📱",
    description:
      "A modern wireless device for everyday technology needs.",
  },

  "home-collection": {
    name: "Modern Home Collection",
    category: "Home & Living",
    price: 54,
    icon: "🏠",
    description:
      "Modern home essentials designed to complement your space.",
  },
};

export default function ProductPage({ params }) {
  const product = products[params.id];
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="productPage">
        <h1>Product not found</h1>
        <a href="/marketplace">Return to marketplace</a>
      </main>
    );
  }

  function addToCart() {
    const existingCart = JSON.parse(
      localStorage.getItem("nexora-cart") || "[]"
    );

    const existingProduct = existingCart.find(
      (item) => item.id === params.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map((item) =>
        item.id === params.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          id: params.id,
          name: product.name,
          category: product.category,
          price: product.price,
          icon: product.icon,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("nexora-cart", JSON.stringify(updatedCart));
    setAdded(true);
  }

  return (
    <main className="productPage">
      <nav className="nav">
        <a href="/" className="logo">
          NEXORA
        </a>

        <div className="navLinks">
          <a href="/marketplace">Marketplace</a>
          <a href="/cart">Cart 🛒</a>
        </div>
      </nav>

      <section className="productDetail">
        <div className="productDetailImage">
          <span>{product.icon}</span>
        </div>

        <div className="productDetailInfo">
          <p className="eyebrow">{product.category}</p>

          <h1>{product.name}</h1>

          <p className="detailPrice">${product.price}</p>

          <p className="detailDescription">
            {product.description}
          </p>

          <div className="purchaseBox">
            <button className="primary" onClick={addToCart}>
              {added ? "✓ Added to Cart" : "Add to Cart"}
            </button>

            <a href="/cart" className="secondary">
              View Cart
            </a>
          </div>

          {added && (
            <div className="cartNotice">
              Product added successfully.
            </div>
          )}

          <div className="productTrust">
            <p>✓ Secure checkout</p>
            <p>✓ Seller information</p>
            <p>✓ Delivery information</p>
          </div>
        </div>
      </section>
    </main>
  );
}