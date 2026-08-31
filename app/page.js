const products = [
  {
    id: "elegant-ring",
    name: "Elegant Ring",
    category: "Jewelry",
    price: "$45",
    icon: "💍",
  },
  {
    id: "flower-bouquet",
    name: "Fresh Flower Bouquet",
    category: "Flowers",
    price: "$35",
    icon: "🌸",
  },
  {
    id: "birthday-card",
    name: "Birthday Celebration Card",
    category: "Birthday",
    price: "$12",
    icon: "🎂",
  },
  {
    id: "surprise-card",
    name: "Surprise Gift Card",
    category: "Surprise Gifts",
    price: "$18",
    icon: "💌",
  },
  {
    id: "special-pizza",
    name: "Special Occasion Pizza",
    category: "Food",
    price: "$22",
    icon: "🍕",
  },
  {
    id: "fashion-collection",
    name: "Classic Fashion Collection",
    category: "Fashion",
    price: "$65",
    icon: "👗",
  },
  {
    id: "smart-device",
    name: "Wireless Smart Device",
    category: "Electronics",
    price: "$89",
    icon: "📱",
  },
  {
    id: "home-collection",
    name: "Modern Home Collection",
    category: "Home & Living",
    price: "$54",
    icon: "🏠",
  },
];

export default function Home() {
  return (
    <main className="home">
      <nav className="nav">
        <div className="logo">NEXORA</div>

        <div className="navLinks">
          <a href="#marketplace">Marketplace</a>
          <a href="#categories">Categories</a>
          <a href="#sell">Sell</a>
          <a href="#about">About</a>
        </div>

        <a href="/login" className="login">
          Log in
        </a>
      </nav>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">THE NEXT GLOBAL MARKETPLACE</p>

          <h1>
            Discover.
            <br />
            Shop. <span>Connect.</span>
          </h1>

          <p className="subtitle">
            Discover products, gifts, food, fashion and more from sellers
            around the world.
          </p>

          <div className="actions">
            <a href="#marketplace" className="primary">
              Explore Marketplace
            </a>

            <a href="/seller" className="secondary">
              Start Selling
            </a>
          </div>
        </div>

        <div className="globe">
          <div className="globeInner">N</div>
        </div>
      </section>

      <section id="marketplace" className="marketplace">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">MARKETPLACE</p>
            <h2>Discover products</h2>
          </div>

          <a href="/marketplace" className="viewAll">
            View all →
          </a>
        </div>

        <div className="productGrid">
          {products.map((product) => (
            <a
              href={`/product/${product.id}`}
              className="productCard"
              key={product.id}
            >
              <div className="productImage">
                <span>{product.icon}</span>
              </div>

              <div className="productInfo">
                <p className="productCategory">{product.category}</p>

                <h3>{product.name}</h3>

                <div className="productBottom">
                  <strong>{product.price}</strong>
                  <span className="cartButton">View product</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="categories" className="categories">
        <p className="eyebrow">SHOP EVERYTHING</p>
        <h2>Explore categories</h2>

        <div className="categoryGrid">
          <a href="/marketplace?category=Jewelry" className="card">
            Jewelry
          </a>
          <a href="/marketplace?category=Flowers" className="card">
            Flowers
          </a>
          <a href="/marketplace?category=Birthday" className="card">
            Birthday
          </a>
          <a href="/marketplace?category=Surprise%20Gifts" className="card">
            Surprise Gifts
          </a>
          <a href="/marketplace?category=Food" className="card">
            Food
          </a>
          <a href="/marketplace?category=Fashion" className="card">
            Fashion
          </a>
          <a href="/marketplace?category=Electronics" className="card">
            Electronics
          </a>
          <a href="/marketplace?category=Home%20%26%20Living" className="card">
            Home & Living
          </a>
        </div>
      </section>

      <section id="sell" className="sellerSection">
        <div>
          <p className="eyebrow">FOR ENTREPRENEURS</p>
          <h2>Build your business on Nexora.</h2>

          <p>
            Reach customers beyond borders and grow your business through a
            global marketplace.
          </p>
        </div>

        <a href="/seller" className="primary">
          Become a Seller
        </a>
      </section>

      <footer id="about" className="footer">
        <div className="logo">NEXORA</div>
        <p>Global commerce, reimagined.</p>
      </footer>
    </main>
  );
}