export default function CartPage() {
  return (
    <main className="cartPage">
      <nav className="nav">
        <a href="/" className="logo">
          NEXORA
        </a>

        <a href="/marketplace" className="secondary">
          ← Continue Shopping
        </a>
      </nav>

      <section className="cartContainer">
        <div>
          <p className="eyebrow">YOUR SHOPPING CART</p>
          <h1>Your Cart</h1>

          <div className="emptyCart">
            <div className="cartIcon">🛒</div>
            <h2>Your cart is ready</h2>
            <p>
              Products you add to your cart will appear here.
            </p>

            <a href="/marketplace" className="primary">
              Explore Marketplace
            </a>
          </div>
        </div>

        <aside className="cartSummary">
          <h2>Order Summary</h2>

          <div className="summaryRow">
            <span>Subtotal</span>
            <strong>$0.00</strong>
          </div>

          <div className="summaryRow">
            <span>Delivery</span>
            <span>Calculated at checkout</span>
          </div>

          <div className="summaryTotal">
            <span>Total</span>
            <strong>$0.00</strong>
          </div>

          <button className="checkoutButton" disabled>
            Proceed to Checkout
          </button>
        </aside>
      </section>
    </main>
  );
}