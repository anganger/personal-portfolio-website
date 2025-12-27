import { useEffect, useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Abdullah — Contact";
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const response = await fetch("https://formspree.io/f/meeqgpnn", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 3000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="container contact-page">
      <h2 className="section-title">Get In Touch</h2>

      <p className="contact-subtitle">
        Feel free to reach out for collaborations, questions, or opportunities.
      </p>

      <form
        className="contact-form card"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="field">
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
          />
        </div>

        <button className="btn submit-btn" type="submit">
          Send Message
        </button>

        {sent && <p className="sent-msg">✅ Message sent successfully</p>}
      </form>
    </main>
  );
}
