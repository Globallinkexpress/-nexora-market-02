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

  useEffect(() => {
    try {
      const savedSeller = JSON.parse(
        localStorage.getItem("nexora-seller") || "null"
      );

      if (savedSeller) {
        setSeller({
          name: savedSeller.name || "",
          email: savedSeller.email || "",
          phone: savedSeller.phone || "",
          business: savedSeller.business || "",
          country: savedSeller.country || "",
          category: savedSeller.category || "",
        });

        setSubmitted(true);
      }
    } catch {
      // Continue with an empty seller form.
    }
  }, []);

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

    localStorage.setItem(
      "nexora-seller",
      JSON.stringify(sellerProfile)
    );

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
            <a href="/">
              Home
            </a>

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

        <section className="successContainer">
          <div className="successCard">
            <div className="successIcon">
              ✓
            </div>

            <p className="eyebrow">
              SELLER CENTER
            </p>

            <h1>
              Welcome to Nexora Seller Center
            </h1>

            <p>
              Your seller application has been
              saved successfully.
            </p>

            <div className="paymentNotice">
              <h2>
                Seller status
              </h2>

              <p>
                Your application is currently
                pending review.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "25px",
              }}
            >
              <a
                href="/seller/products"
                className="primary"
              >
                Manage Products
              </a>

              <a
                href="/marketplace"
                className="secondary"
              >
                View Marketplace
              </a>
            </div>

            <div
              style={{
                marginTop: "20px",
              }}
            >
              <button
                type="button"
                onClick={() =>
                  setSubmitted(false)
                }
                className="secondary"
              >
                Edit Seller Information
              </button>
            </div>
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
          <a href="/">
            Home
          </a>

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
            Reach customers beyond borders and
            grow your business through the Nexora
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
              onClick={() =>
                window.history.back()
              }
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