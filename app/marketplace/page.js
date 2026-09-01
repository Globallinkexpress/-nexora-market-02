"use client";

import { useEffect, useState } from "react";

const defaultProducts = [
  {
    id: "elegant-ring",
    name: "Elegant Ring",
    category: "Jewelry",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "flower-bouquet",
    name: "Fresh Flower Bouquet",
    category: "Flowers",
    price: "$35",
    image:
      "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "birthday-card",
    name: "Birthday Celebration Card",
    category: "Birthday",
    price: "$12",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "surprise-card",
    name: "Surprise Gift Card",
    category: "Surprise Gifts",
    price: "$18",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "special-pizza",
    name: "Special Occasion Pizza",
    category: "Food",
    price: "$22",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fashion-collection",
    name: "Classic Fashion Collection",
    category: "Fashion",
    price: "$65",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "smart-device",
    name: "Wireless Smart Device",
    category: "Electronics",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "home-collection",
    name: "Modern Home Collection",
    category: "Home & Living",
    price: "$54",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  },
];

export default function MarketplacePage() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  useEffect(() => {
    try {
      const savedProducts = JSON.parse(
        localStorage.getItem("nexora-products") || "[]"
      );

      const productsToUse =
        savedProducts.length > 0
          ? savedProducts
          : defaultProducts;

      setProducts(productsToUse);
    } catch {
      setProducts(defaultProducts);
    }

    const params = new URLSearchParams(
      window.location.search
    );

    const category = params.get("category");

    if (category) {
      setSelectedCategory(category);
    }
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );

  const categories = [
    "All",
    "Jewelry",
    "Flowers",
    "Birthday",
    "Surprise Gifts",
    "Food",
    "Fashion",
    "Electronics",
    "Home & Living",
  ];

  return (
    <main className="home">
      <nav className="nav">
        <a href="/" className="logo">
          NEXORA
        </a>

        <div className="navLinks">
          <a href="/">Home</a>
          <a href="/cart">Cart</a>
          <a href="/orders">My Orders</a>
          <a href="/login">Log in</a>
        </div>
      </nav>

      <section
        className="marketplace"
        style={{
          paddingTop: "120px",
        }}
      >
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">
              NEXORA MARKETPLACE
            </p>

            <h1>
              {selectedCategory === "All"
                ? "Explore Products"
                : selectedCategory}
            </h1>

            <p className="subtitle">
              Discover products from the Nexora
              global marketplace.
            </p>
          </div>
        </div>

        <div
          className="categoryGrid"
          style={{
            marginBottom: "40px",
          }}
        >
          {categories.map((category) => (
            <a
              key={category}
              href={
                category === "All"
                  ? "/marketplace"
                  : `/marketplace?category=${encodeURIComponent(
                      category
                    )}`
              }
              className="card"
            >
              {category}
            </a>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="emptyCheckout">
            <h2>
              No products found
            </h2>

            <p>
              There are currently no products in
              this category.
            </p>

            <a
              href="/marketplace"
              className="primary"
            >
              View All Products
            </a>
          </div>
        ) : (
          <div className="productGrid">
            {filteredProducts.map(
              (product) => (
                <a
                  href={`/product/${product.id}`}
                  className="productCard"
                  key={product.id}
                >
                  <div
                    className="productImage"
                    style={{
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={
                        product.image ||
                        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
                      }
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>

                  <div className="productInfo">
                    <p className="productCategory">
                      {product.category}
                    </p>

                    <h3>
                      {product.name}
                    </h3>

                    <div className="productBottom">
                      <strong>
                        {typeof product.price ===
                        "number"
                          ? `$${product.price.toFixed(
                              2
                            )}`
                          : product.price}
                      </strong>

                      <span className="cartButton">
                        View product
                      </span>
                    </div>
                  </div>
                </a>
              )
            )}
          </div>
        )}

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <a
            href="/"
            className="secondary"
          >
            ← Back Home
          </a>
        </div>
      </section>
    </main>
  );
}