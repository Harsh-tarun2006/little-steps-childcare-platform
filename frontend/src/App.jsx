
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">L</span>
          Little Steps
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Childcare</a>
          <a href="#about">About Us</a>
        </div>

        <button className="login-button">Sign In</button>
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <span className="eyebrow">CARE YOU CAN TRUST</span>

            <h1>
              Every child deserves
              <span> a safe, happy start.</span>
            </h1>

            <p>
              Discover trusted childcare centers that fit your
              family's schedule, needs, and peace of mind.
            </p>

            <div className="search-box">
              <input
                type="text"
                placeholder="Enter your city or area"
                aria-label="City or area"
              />
              <button>Find Childcare</button>
            </div>

            <p className="trust-note">
              Trusted care. Flexible hours. Happier families.
            </p>
          </div>

          <div className="hero-illustration" aria-label="Childcare illustration">
            <div className="sun"></div>
            <div className="illustration-card">
              <span className="heart">♥</span>
              <span className="toy">🧸</span>
              <p>Little moments, big beginnings.</p>
            </div>
            <div className="floating-note">Care that fits your life ✨</div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <span className="eyebrow">MADE FOR YOUR FAMILY</span>
            <h2>Childcare that works for you</h2>
            <p>Start exploring the care options your family needs.</p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <span className="service-icon">☀️</span>
              <h3>Daycare Centers</h3>
              <p>Explore childcare options for your everyday routine.</p>
            </article>

            <article className="service-card">
              <span className="service-icon">🌙</span>
              <h3>Flexible Hours</h3>
              <p>Find options for early mornings and late evenings.</p>
            </article>

            <article className="service-card">
              <span className="service-icon">🛡️</span>
              <h3>Safety First</h3>
              <p>Review provider details and available safety information.</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer" id="about">
        <p>Little Steps · Helping families find childcare with confidence.</p>
      </footer>
    </div>
  )
}

export default App

