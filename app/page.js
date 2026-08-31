export default function Home() {
  const products = [
    {
      name: "Premium Wireless Headphones",
      price: "$89",
      category: "Electronics",
      icon: "🎧",
    },
    {
      name: "Minimal Leather Backpack",
      price: "$64",
      category: "Fashion",
      icon: "🎒",
    },
    {
      name: "Smart Fitness Watch",
      price: "$119",
      category: "Technology",
      icon: "⌚",
    },
    {
      name: "Modern Home Lamp",
      price: "$42",
      category: "Home & Living",
      icon: "💡",
    },
  ];

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

        <button className="login">Log in</button>
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
            Discover products from independent sellers and brands around the
            world, all in one marketplace.
          </p>

          <div className="actions">
            <a href="#marketplace" className="primary">
              Explore Marketplace
            </a>

            <a href="#sell" className="secondary">
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
            <p className="eyebrow">FEATURED PRODUCTS</p>
            <h2>Trending on Nexora</h2>
          </div>

          <button className="viewAll">View all →</button>
        </div>

        <div className="productGrid">
          {products.map((product) => (
            <article className="productCard" key={product.name}>
              <div className="productImage">
                <span>{product.icon}</span>
              </div>

              <div className="productInfo">
                <p className="productCategory">{product.category}</p>
                <h3>{product.name}</h3>

                <div className="productBottom">
                  <strong>{product.price}</strong>
                  <button className="cartButton">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="categories" className="categories">
        <p className="eyebrow">SHOP BY CATEGORY</p>
        <h2>Explore Nexora</h2>

        <div className="categoryGrid">
          <div className="card">Fashion</div>
          <div className="card">Electronics</div>
          <div className="card">Home & Living</div>
          <div className="card">Beauty</div>
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

        <button className="primary">Become a Seller</button>
      </section>

      <footer id="about" className="footer">
        <div className="logo">NEXORA</div>
        <p>Global commerce, reimagined.</p>
      </footer>
    </main>
  );
}