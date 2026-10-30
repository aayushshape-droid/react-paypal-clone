import { useState } from "react";

function App() {
  const [tab, setTab] = useState("business");
  const [message, setMessage] = useState({ form: "", text: "" });

  function handleSubmit(e, form, text) {
    e.preventDefault();
    setMessage({ form: form, text: text });
  }

  const content = {
    personal: {
      title: "PayPal",
      subtitle: "Send, shop and save with ease",
      text: "PayPal brings your everyday payments together so you can pay, send and receive money safely.",
      button: "Sign Up",
    },
    business: {
      title: "PayPal Open",
      subtitle: "One platform for your business needs",
      text: "PayPal Open unifies your PayPal business solutions to help you get paid, get growing, and get ahead.",
      button: "Contact Sales",
    },
  };

  const current = content[tab];

  return (
    <div>
      <header className="navbar">
        <div className="navbar-left">
          <a href="#home" className="logo">
            <svg width="40" height="48" viewBox="0 0 40 48">
              <path d="M8 2 H24 Q36 2 34 14 Q32 26 20 26 H14 L10 44 H0 Z" fill="#1a2f8f" />
              <path d="M18 14 H30 Q40 14 38 26 Q36 38 24 38 H18 L15 48 H8 Z" fill="#5ab8f5" />
            </svg>
          </a>
          <nav className="nav-links">
            <a href="#personal">Personal ▾</a>
            <a href="#business">Business ▾</a>
            <a href="#partners">Partners ▾</a>
            <a href="#useful-info">Useful Info ▾</a>
          </nav>
        </div>
        <div className="navbar-right">
          <a href="#login" className="btn btn-light">Log In</a>
          <a href="#signup" className="btn btn-dark">Sign Up</a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="toggle">
          <button
            className={tab === "personal" ? "toggle-btn active" : "toggle-btn"}
            onClick={() => setTab("personal")}
          >
            Personal
          </button>
          <button
            className={tab === "business" ? "toggle-btn active" : "toggle-btn"}
            onClick={() => setTab("business")}
          >
            Business
          </button>
        </div>

        <h1>{current.title}</h1>
        <h2>{current.subtitle}</h2>
        <p>{current.text}</p>

        <div className="hero-buttons">
          <a href="#signup" className="btn btn-dark">Sign Up</a>
          <a href="#contact" className="btn btn-light">Contact Sales</a>
        </div>
      </section>

      <section id="personal" className="section">
        <h2>Personal</h2>
        <p>
          Send money to friends and family, pay online and keep track of your
          payments in one place.
        </p>
      </section>

      <section id="business" className="section grey">
        <h2>Business</h2>
        <p>
          Accept payments, send invoices and manage your business money with
          simple tools.
        </p>
      </section>

      <section id="partners" className="section">
        <h2>Partners</h2>
        <p>
          Work with PayPal partners to grow your business and reach more
          customers.
        </p>
      </section>

      <section id="useful-info" className="section grey">
        <h2>Useful Info</h2>
        <p>
          Find help articles, security tips and answers to common questions.
        </p>
      </section>

      <section id="login" className="section">
        <h2>Log In</h2>
        <form
          className="form"
          onSubmit={(e) => handleSubmit(e, "login", "Login successful (demo only)")}
        >
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn btn-dark">Log In</button>
          {message.form === "login" && <p className="message">{message.text}</p>}
        </form>
      </section>

      <section id="signup" className="section grey">
        <h2>Sign Up</h2>
        <form
          className="form"
          onSubmit={(e) => handleSubmit(e, "signup", "Account created (demo only)")}
        >
          <input type="text" placeholder="Business name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn btn-dark">Sign Up</button>
          {message.form === "signup" && <p className="message">{message.text}</p>}
        </form>
      </section>

      <section id="contact" className="section">
        <h2>Contact Sales</h2>
        <form
          className="form"
          onSubmit={(e) => handleSubmit(e, "contact", "Thanks! Our sales team will contact you (demo only)")}
        >
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your message" rows="4" required></textarea>
          <button type="submit" className="btn btn-dark">Send</button>
          {message.form === "contact" && <p className="message">{message.text}</p>}
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 PayPal Open - Student Project</p>
      </footer>
    </div>
  );
}

export default App;
