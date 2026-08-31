export default function Home() {
  return (
    <main className="home">
      <nav className="nav">
        <div className="logo">NEXORA</div>

        <div className="navLinks">
          <a href="#">Marketplace</a>
          <a href="#">Categories</a>
          <a href="#">Sell</a>
          <a href="#">About</a>
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
            Explore products from sellers around the world and discover
            something made for you.
          </p>

          <div className="actions">
            <button className="primary">Explore Marketplace</button>
            <button className="secondary">Start Selling</button>
          </div>
        </div>

        <div className="globe">
          <div className="globeInner">N</div>
        </div>
      </section>

      <section className="categories">
        <h2>Explore Nexora</h2>

        <div className="categoryGrid">
          <div className="card">Fashion</div>
          <div className="card">Electronics</div>
          <div className="card">Home & Living</div>
          <div className="card">Beauty</div>
        </div>
      </section>
    </main>
  );
}