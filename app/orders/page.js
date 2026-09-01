"use client";

import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    try {
      const savedOrders = JSON.parse(
        localStorage.getItem("nexora-orders") || "[]"
      );

      setOrders(savedOrders.reverse());
    } catch {
      setOrders([]);
    }
  }, []);

  return (
    <main className="checkoutPage">
      <nav className="nav">
        <a href="/" className="logo">
          NEXORA
        </a>

        <a href="/cart" className="secondary">
          Cart
        </a>
      </nav>

      <section className="checkoutContainer">
        <div className="checkoutForm">
          <p className="eyebrow">
            NEXORA ACCOUNT
          </p>

          <h1>
            My Orders
          </h1>

          <p className="checkoutSubtitle">
            View your recent Nexora Market orders.
          </p>

          {orders.length === 0 ? (
            <div className="emptyCheckout">
              <h2>
                No orders yet
              </h2>

              <p>
                Your completed orders will appear
                here.
              </p>

              <a
                href="/"
                className="primary"
              >
                Start Shopping
              </a>
            </div>
          ) : (
            <div className="checkoutItems">
              {orders.map((order) => (
                <div
                  className="checkoutItem"
                  key={order.orderNumber}
                  style={{
                    display: "block",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent:
                        "space-between",
                      gap: "15px",
                      flexWrap: "wrap",
                    }}
                  >
                    <strong>
                      {order.orderNumber}
                    </strong>

                    <span>
                      {order.status}
                    </span>
                  </div>

                  <p>
                    Payment:{" "}
                    {order.paymentMethod ===
                    "cash"
                      ? "Pay on Delivery"
                      : order.paymentMethod ===
                        "card"
                      ? "Card Payment"
                      : "Bank Transfer"}
                  </p>

                  <p>
                    Total: $
                    {Number(order.total || 0).toFixed(
                      2
                    )}
                  </p>

                  <p>
                    {new Date(
                      order.createdAt
                    ).toLocaleString()}
                  </p>

                  <div
                    style={{
                      marginTop: "12px",
                    }}
                  >
                    <strong>
                      Items
                    </strong>

                    {order.items?.map(
                      (item) => (
                        <p
                          key={item.id}
                          style={{
                            margin:
                              "5px 0",
                          }}
                        >
                          {item.name} ×{" "}
                          {item.quantity}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div
            style={{
              marginTop: "25px",
            }}
          >
            <a
              href="/"
              className="secondary"
            >
              ← Continue Shopping
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}