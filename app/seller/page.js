"use client";

import { useEffect, useState } from "react";

export default function SellerPage() {
  const [submitted, setSubmitted] = useState(false);

  const [seller, setSeller] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    country: "",
    category: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setSeller((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const sellerProfile = {
      ...seller,
      createdAt: new Date().toISOString(),
      status: "Pending review",
    };

    try {
      localStorage.setItem(
        "nexora-seller",
        JSON.stringify(sellerProfile)
      );
    } catch {
      console.log("Seller profile could not be saved.");
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="checkoutPage">
        <nav className="nav">
          <a href="/" className="logo">
            NEXORA
          </a>

          <div className="navLinks">
            <a href="/">Home</a>
            <a href="/marketplace">Marketplace</a>
            <a href="/cart">Cart</a>
            <a href="/orders">My Orders</a>
          </div>
        </nav>

        <section className="successContainer">
          <div className="successCard">
            <div className="successIcon">✓</div>

            <p className="eyebrow">
              SELLER APPLICATION
            </p>

            <h1>
              Application received!
            </h1>

            <p>
              Thank you for your interest in selling
              on Nexora Market.
            </p>

            <div className="paymentNotice">
              <h2>
                What's next?
              </h2>

              <p>
                Your seller information has been
                saved. Seller verification and
                product management will be added
                in the next stage.
              </p>
            </div>

            <a
              href="/"
              className="primary"
            >
              Back Home
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

        <div className="navLinks">
          <a href="/">Home</a>

          <a href="/marketplace">
            Marketplace
          </a>

          <a href="/cart">
            Cart
          </a>

          <a href="/orders">
            My Orders
          </a>
        </div>
      </nav>

      <section className="checkoutContainer">
        <div className="checkoutForm">
          <p className="eyebrow">
            NEXORA FOR SELLERS
          </p>

          <h1>
            Start selling on Nexora
          </h1>

          <p className="checkoutSubtitle">
            Reach customers beyond borders and grow
            your business through the Nexora
            marketplace.
          </p>

          <form
            onSubmit={handleSubmit}
            className="checkoutFields"
          >
            <div className="fieldGroup">
              <label>
                Full name
              </label>

              <input
                type="text"
                name="name"
                value={seller.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="fieldGroup">
              <label>
                Email address
              </label>

              <input
                type="email"
                name="email"
                value={seller.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="fieldGroup">
              <label>
                Phone number
              </label>

              <input
                type="tel"
                name="phone"
                value={seller.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="fieldGroup">
              <label>
                Business name
              </label>

              <input
                type="text"
                name="business"
                value={seller.business}
                onChange={handleChange}
                placeholder="Enter your business name"
                required
              />
            </div>

            <div className="twoFields">
              <div className="fieldGroup">
                <label>
                  Country
                </label>

                <input
                  type="text"
                  name="country"
                  value={seller.country}
                  onChange={handleChange}
                  placeholder="Country"
                  required
                />
              </div>

              <div className="fieldGroup">
                <label>
                  Product category
                </label>

                <select
                  name="category"
                  value={seller.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select category
                  </option>

                  <option value="Jewelry">
                    Jewelry
                  </option>

                  <option value="Flowers">
                    Flowers
                  </option>

                  <option value="Birthday">
                    Birthday
                  </option>

                  <option value="Surprise Gifts">
                    Surprise Gifts
                  </option>

                  <option value="Food">
                    Food
                  </option>

                  <option value="Fashion">
                    Fashion
                  </option>

                  <option value="Electronics">
                    Electronics
                  </option>

                  <option value="Home & Living">
                    Home & Living
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="primary checkoutSubmit"
            >
              Apply to Become a Seller
            </button>
          </form>

          <div
            style={{
              marginTop: "25px",
            }}
          >
            <button
              type="button"
              onClick={() => window.history.back()}
              className="secondary"
            >
              ← Go Back
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}