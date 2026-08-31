export default function LoginPage() {
  return (
    <main className="authPage">
      <nav className="nav">
        <a href="/" className="logo">
          NEXORA
        </a>

        <a href="/marketplace" className="secondary">
          ← Marketplace
        </a>
      </nav>

      <section className="authContainer">
        <div className="authCard">
          <p className="eyebrow">WELCOME BACK</p>

          <h1>Log in to Nexora</h1>

          <p className="authSubtitle">
            Access your account, orders, and marketplace activity.
          </p>

          <form className="authForm">
            <label>
              Email address
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </label>

            <button type="submit" className="primary authButton">
              Log in
            </button>
          </form>

          <p className="authFooter">
            Don't have an account?{" "}
            <a href="/signup">Create an account</a>
          </p>
        </div>
      </section>
    </main>
  );
}