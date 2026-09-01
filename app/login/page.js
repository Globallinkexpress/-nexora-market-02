"use client";

import { useState } from "react";

export default function LoginPage() {
  const [mode, setMode] = useState("login");
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const email = form.email.trim().toLowerCase();

    if (mode === "signup") {
      const account = {
        name: form.name.trim(),
        email,
        password: form.password,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem(
        "nexora-user",
        JSON.stringify(account)
      );

      setMessage(
        "Account created successfully. You are now signed in."
      );

      setMode("login");
    } else {
      const savedUser = JSON.parse(
        localStorage.getItem("nexora-user") || "null"
      );

      if (
        !savedUser ||
        savedUser.email !== email ||
        savedUser.password !== form.password
      ) {
        setMessage(
          "Account not found or password is incorrect."
        );
        return;
      }

      localStorage.setItem(
        "nexora-session",
        JSON.stringify({
          name: savedUser.name,
          email: savedUser.email,
          loggedIn: true,
        })
      );

      setMessage(
        "Login successful. Welcome back!"
      );
    }
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

      <section className="successContainer">
        <div className="successCard">
          <p className="eyebrow">
            NEXORA ACCOUNT
          </p>

          <h1>
            {mode === "login"
              ? "Welcome back"
              : "Create your account"}
          </h1>

          <p>
            {mode === "login"
              ? "Sign in to manage your orders and account."
              : "Create an account to shop and manage your orders."}
          </p>

          {message && (
            <div
              className="paymentNotice"
              style={{
                marginTop: "20px",
              }}
            >
              <p>{message}</p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="checkoutFields"
            style={{
              marginTop: "25px",
              textAlign: "left",
            }}
          >
            {mode === "signup" && (
              <div className="fieldGroup">
                <label>
                  Full name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div className="fieldGroup">
              <label>
                Email address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="fieldGroup">
              <label>
                Password
              </label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                minLength="6"
                required
              />
            </div>

            <button
              type="submit"
              className="primary checkoutSubmit"
            >
              {mode === "login"
                ? "Log In"
                : "Create Account"}
            </button>
          </form>

          <div
            style={{
              marginTop: "25px",
            }}
          >
            <button
              type="button"
              className="secondary"
              onClick={() => {
                setMode(
                  mode === "login"
                    ? "signup"
                    : "login"
                );
                setMessage("");
              }}
            >
              {mode === "login"
                ? "Create a new account"
                : "Already have an account? Log in"}
            </button>
          </div>

          <div
            style={{
              marginTop: "20px",
            }}
          >
            <a
              href="/"
              className="secondary"
            >
              ← Back Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}