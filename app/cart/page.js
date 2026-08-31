"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
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
    localStorage.setItem(
      "nexora-cart",
      JSON.stringify(normalizedCart)
    );
  }, []);

  function removeItem(id) {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      "nexora-cart",
      JSON.stringify(updatedCart)
    );
  }

  function updateQuantity(id, change) {
    const updatedCart = cart.map((item) => {
      if (item.id !== id) return item;

      return {
        ...item,
        quantity: Math.max(
          1,
          item.quantity + change
        ),
      };
    });

    setCart(updatedCart);

    localStorage.setItem(
      "nexora-cart",
      JSON.stringify(updatedCart)
    );
  }

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <main className="cartPage">

      <nav className="nav">
        <a href="/" className="logo">
          NEXORA
        </a>

        <a
          href="/marketplace"
          className="secondary"
        >
          ← Continue Shopping
        </a>
      </nav>

      <section className="cartContainer">

        <div className="cartItems">

          <p className="eyebrow">
            YOUR SHOPPING CART
          </p>

          <h1>Your Cart</h1>

          {cart.length === 0 ? (

            <div className="emptyCart">

              <div className="cartIcon">
                🛒
              </div>

              <h2>
                Your cart is empty
              </h2>

              <p>
                Discover something you love
                and add it to your cart.
              </p>

              <a
                href="/marketplace"
                className="primary"
              >
                Explore Marketplace
              </a>

            </div>

          ) : (

            <div className="cartList">

              {cart.map((item) => (

                <div
                  className="cartItem"
                  key={item.id}
                >

                  <div className="cartProductImage">
                    {item.icon}
                  </div>

                  <div className="cartProductInfo">

                    <p className="productCategory">
                      {item.category}
                    </p>

                    <h2>
                      {item.name}
                    </h2>

                    <strong>
                      ${item.price.toFixed(2)}
                    </strong>

                    <div className="quantityControls">

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            -1
                          )
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            1
                          )
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <div className="cartItemRight">

                    <strong>
                      $
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(2)}
                    </strong>

                    <button
                      type="button"
                      className="removeButton"
                      onClick={() =>
                        removeItem(item.id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

        <aside className="cartSummary">

          <h2>
            Order Summary
          </h2>

          <div className="summaryRow">

            <span>
              Subtotal
            </span>

            <strong>
              ${subtotal.toFixed(2)}
            </strong>

          </div>

          <div className="summaryRow">

            <span>
              Delivery
            </span>

            <span>
              Calculated at checkout
            </span>

          </div>

          <div className="summaryTotal">

            <span>
              Total
            </span>

            <strong>
              ${subtotal.toFixed(2)}
            </strong>

          </div>

          {cart.length > 0 ? (

            <a
              href="/checkout"
              className="checkoutButton"
            >
              Proceed to Checkout
            </a>

          ) : (

            <button
              type="button"
              className="checkoutButton"
              disabled
            >
              Proceed to Checkout
            </button>

          )}

        </aside>

      </section>

    </main>
  );
}