const products = {
  "elegant-ring": {
    name: "Elegant Ring",
    category: "Jewelry",
    price: "$45",
    icon: "💍",
    description:
      "A beautiful jewelry piece for everyday wear and special occasions.",
  },

  "flower-bouquet": {
    name: "Fresh Flower Bouquet",
    category: "Flowers",
    price: "$35",
    icon: "🌸",
    description:
      "A carefully arranged flower bouquet designed for meaningful moments.",
  },

  "birthday-card": {
    name: "Birthday Celebration Card",
    category: "Birthday",
    price: "$12",
    icon: "🎂",
    description:
      "A thoughtful birthday card for celebrating someone special.",
  },

  "surprise-card": {
    name: "Surprise Gift Card",
    category: "Surprise Gifts",
    price: "$18",
    icon: "💌",
    description:
      "A special gift card designed to make someone's day memorable.",
  },

  "special-pizza": {
    name: "Special Occasion Pizza",
    category: "Food",
    price: "$22",
    icon: "🍕",
    description:
      "A delicious pizza option for celebrations and special occasions.",
  },

  "fashion-collection": {
    name: "Classic Fashion Collection",
    category: "Fashion",
    price: "$65",
    icon: "👗",
    description:
      "A stylish fashion collection designed for everyday confidence.",
  },

  "smart-device": {
    name: "Wireless Smart Device",
    category: "Electronics",
    price: "$89",
    icon: "📱",
    description:
      "A modern wireless device for everyday technology needs.",
  },

  "home-collection": {
    name: "Modern Home Collection",
    category: "Home & Living",
    price: "$54",
    icon: "🏠",
    description:
      "Modern home essentials designed to complement your space.",
  },
};

export default function ProductPage({ params }) {
  const product = products[params.id];

  if (!product) {
    return (
      <main className="productPage">
        <h1>Product not found</h1>
        <a href="/marketplace">Return to marketplace</a>
      </main>
    );
  }

  return (
    <main className="productPage">
      <nav className="nav">
        <a href="/" className="logo">
          NEXORA
        </a>

        <a href="/marketplace" className="secondary">
          ← Back to Marketplace
        </a>
      </nav>

      <section className="productDetail">
        <div className="productDetailImage">
          <span>{product.icon}</span>
        </div>

        <div className="productDetailInfo">
          <p className="eyebrow">{product.category}</p>

          <h1>{product.name}</h1>

          <p className="detailPrice">{product.price}</p>

          <p className="detailDescription">{product.description}</p>

          <div className="purchaseBox">
            <button className="primary">Add to Cart</button>
            <button className="secondary">Buy Now</button>
          </div>

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