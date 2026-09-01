"use client";

import { useEffect, useState } from "react";

const categories = [
  "Jewelry",
  "Flowers",
  "Birthday",
  "Surprise Gifts",
  "Food",
  "Fashion",
  "Electronics",
  "Home & Living",
  "Other",
];

export default function SellerProductsPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("nexora-products") || "[]"
      );

      setProducts(saved);
    } catch {
      setProducts([]);
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function addProduct(event) {
    event.preventDefault();

    const newProduct = {
      id:
        Date.now().toString() +
        "-" +
        form.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-"),
      name: form.name.trim(),
      category: form.category,
      price: Number(form.price),
      image: form.image.trim(),
    };

    const updatedProducts = [
      ...products,
      newProduct,
    ];

    setProducts(updatedProducts);

    localStorage.setItem(
      "nexora-products",
      JSON.stringify(updatedProducts)
    );

    setForm({
      name: "",
      category: "",
      price: "",
      image: "",
    });
  }

  function removeProduct(id) {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(updatedProducts);

    localStorage.setItem(
      "nexora-products",
      JSON.stringify(updatedProducts)
    );
  }

  return (
    <main className="checkoutPage">
      <nav className="nav">
        <a href="/" className="logo">
          NEXORA
        </a>

        <div className="navLinks">
          <a href="/marketplace">
            Marketplace
          </a>

          <a href="/cart">
            Cart
          </a>

          <a href="/orders">
            My Orders
          </a>

          <a href="/seller">
            Seller
          </a>
        </div>
      </nav>

      <section className="checkoutContainer">
        <div className="checkoutForm">
          <p className="eyebrow">
            SELLER CENTER
          </p>

          <h1>
            Manage your products
          </h1>

          <p className="checkoutSubtitle">
            Add products to your Nexora marketplace
            store.
          </p>

          <form
            onSubmit={addProduct}
            className="checkoutFields"
          >
            <div className="fieldGroup">
              <label>
                Product name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Premium Gift Box"
                required
              />
            </div>

            <div className="fieldGroup">
              <label>
                Category
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select category
                </option>

                {categories.map(
                  (category) => (
                    <option
                      key={category}
                      value={category}
                    >
                      {category}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="fieldGroup">
              <label>
                Price (USD)
              </label>

              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="e.g. 49.99"
                min="0"
                step="0.01"
                required
              />
            </div>

            <div className="fieldGroup">
              <label>
                Product image URL
              </label>

              <input
                type="url"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://example.com/product-image.jpg"
                required
              />
            </div>

            <button
              type="submit"
              className="primary checkoutSubmit"
            >
              + Add Product
            </button>
          </form>
        </div>

        <aside className="checkoutSummary">
          <p className="eyebrow">
            YOUR PRODUCTS
          </p>

          <h2>
            {products.length}{" "}
            {products.length === 1
              ? "Product"
              : "Products"}
          </h2>

          {products.length === 0 ? (
            <p className="summaryEmpty">
              You haven't added any products yet.
            </p>
          ) : (
            <div className="checkoutItems">
              {products.map(
                (product) => (
                  <div
                    className="checkoutItem"
                    key={product.id}
                  >
                    <div
                      className="checkoutItemIcon"
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        "🛍️"
                      )}
                    </div>

                    <div>
                      <strong>
                        {product.name}
                      </strong>

                      <p>
                        {product.category}
                      </p>

                      <p>
                        $
                        {Number(
                          product.price || 0
                        ).toFixed(2)}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="secondary"
                      onClick={() =>
                        removeProduct(
                          product.id
                        )
                      }
                    >
                      Remove
                    </button>
                  </div>
                )
              )}
            </div>
          )}
        </aside>
      </section>

      <section
        style={{
          textAlign: "center",
          padding: "20px",
        }}
      >
        <a
          href="/seller"
          className="secondary"
        >
          ← Back to Seller Center
        </a>
      </section>
    </main>
  );
}