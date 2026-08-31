"use client";

import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    try {
      const savedCart = JSON.parse(
        localStorage.getItem("nexora-cart") || "[]"
      );

      const normalizedCart = savedCart.map((item) => ({
        ...item,
        price:
          Number(String(item.price).replace(/[^0-9.]/g, "")) || 0,
        quantity: Number(item.quantity) || 1,
      }));

      setCart(normalizedCart);
    } catch {
      setCart([]);
    }
  }, []);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = subtotal > 0 ? 5 : 0;
  const total = subtotal + delivery;

  function placeOrder(event) {
    event.preventDefault();

    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    setOrderPlaced(true);
  }

  if (orderPlaced) {
    return (
      <main className="checkoutPage">
        <nav className="nav">
          <a href="/" className="logo">
            NEXORA
          </a>
        </nav>

        <section className="successContainer">
          <div className="successCard">
            <div className="successIcon">✓</div>

            <p className="eyebrow">ORDER RECEIVED</p>

            <h1>Order placed successfully!</h1>

            <p>
              Thank you for shopping with Nexora. Your order
              has been received.
            </p>

            {paymentMethod === "cash" && (
              <div className="paymentNotice">
                <h2>Pay on Delivery</h2>

                <p>
                  Your order has been placed. You will pay
                  when your order is delivered.
                </p>
              </div>
            )}

            {paymentMethod === "card" && (
              <div className="paymentNotice">
                <h2>Card Payment</h2>

                <p>
                  Card payment will be securely processed
                  through Paystack when payment integration
                  is connected.
                </p>

                <p>
                  Your order has been recorded, but no card
                  payment has been charged at this stage.
                </p>
              </div>
            )}

            {paymentMethod === "transfer" && (
              <div className="transferDetails">
                <h2>Bank Transfer</h2>

                <p>
                  Bank transfer will be securely processed
                  through Paystack when payment integration
                  is connected.
                </p>

                <div className="bankBox">
                  <p>
                    <strong>Payment status:</strong>{" "}
                    Awaiting Paystack integration
                  </p>

                  <p>
                    <strong>Order total:</strong>{" "}
                    ${total.toFixed(2)}
                  </p>
                </div>

                <p className="transferNote">
                  Please do not send money to any bank
                  account until official transfer details
                  are provided by Nexora.
                </p>
              </div>
            )}

            <a
              href="/marketplace"
              className="primary"
            >
              Continue Shopping
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="checkoutPage">
      <nav className="nav">
        <a href="/" className="logo">
          NEXORA
        </a>

        <a href="/cart" className="secondary">
          ← Back to Cart
        </a>
      </nav>

      <section className="checkoutContainer">
        <div className="checkoutForm">
          <p className="eyebrow">SECURE CHECKOUT</p>

          <h1>Complete your order</h1>

          <p className="checkoutSubtitle">
            Enter your delivery information and choose your
            preferred payment method.
          </p>

          {cart.length === 0 ? (
            <div className="emptyCheckout">
              <h2>Your cart is empty</h2>

              <p>
                Add a product before checking out.
              </p>

              <a
                href="/marketplace"
                className="primary"
              >
                Explore Marketplace
              </a>
            </div>
          ) : (
            <form
              onSubmit={placeOrder}
              className="checkoutFields"
            >
              <div className="fieldGroup">
                <label>Full name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="fieldGroup">
                <label>Email address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="fieldGroup">
                <label>Phone number</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="fieldGroup">
                <label>Delivery address</label>

                <input
                  type="text"
                  name="address"
                  placeholder="Street address"
                  required
                />
              </div>

              <div className="twoFields">
                <div className="fieldGroup">
                  <label>City</label>

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    required
                  />
                </div>

                <div className="fieldGroup">
                  <label>Country</label>

                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    required
                  />
                </div>
              </div>

              <div className="fieldGroup">
                <label>Payment method</label>

                <select
                  name="payment"
                  value={paymentMethod}
                  onChange={(event) =>
                    setPaymentMethod(event.target.value)
                  }
                  required
                >
                  <option value="">
                    Select payment method
                  </option>

                  <option value="card">
                    💳 Card Payment
                  </option>

                  <option value="transfer">
                    🏦 Bank Transfer
                  </option>

                  <option value="cash">
                    💵 Pay on Delivery
                  </option>
                </select>
              </div>

              {paymentMethod === "card" && (
                <div className="paymentNotice">
                  <h3>Card Payment</h3>

                  <p>
                    Secure card payment will be available
                    through Paystack.
                  </p>

                  <p>
                    Paystack integration will be connected
                    in the next payment stage.
                  </p>
                </div>
              )}

              {paymentMethod === "transfer" && (
                <div className="paymentNotice">
                  <h3>Bank Transfer</h3>

                  <p>
                    Bank transfer payment will be available
                    through Paystack.
                  </p>

                  <p>
                    Official transfer instructions will
                    appear after Paystack is connected.
                  </p>
                </div>
              )}

              {paymentMethod === "cash" && (
                <div className="paymentNotice">
                  <h3>Pay on Delivery</h3>

                  <p>
                    You will pay when your order is
                    delivered.
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="primary checkoutSubmit"
              >
                Place Order
              </button>
            </form>
          )}
        </div>

        <aside className="checkoutSummary">
          <p className="eyebrow">ORDER SUMMARY</p>

          <h2>Your Order</h2>

          {cart.length === 0 ? (
            <p className="summaryEmpty">
              No products in your cart.
            </p>
          ) : (
            <>
              <div className="checkoutItems">
                {cart.map((item) => (
                  <div
                    className="checkoutItem"
                    key={item.id}
                  >
                    <div className="checkoutItemIcon">
                      {item.icon}
                    </div>

                    <div>
                      <strong>{item.name}</strong>

                      <p>
                        {item.quantity} × $
                        {item.price.toFixed(2)}
                      </p>
                    </div>

                    <strong>
                      $
                      {(
                        item.price * item.quantity
                      ).toFixed(2)}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="summaryRow">
                <span>Subtotal</span>

                <strong>
                  ${subtotal.toFixed(2)}
                </strong>
              </div>

              <div className="summaryRow">
                <span>Delivery</span>

                <strong>
                  ${delivery.toFixed(2)}
                </strong>
              </div>

              <div className="summaryTotal">
                <span>Total</span>

                <strong>
                  ${total.toFixed(2)}
                </strong>
              </div>
            </>
          )}
        </aside>
      </section>
    </main>
  );
}