import { useEffect, useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Abdullah — Contact";
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    // demo submission (no backend)
    console.log("Message sent:", { name, email, message });

    setSent(true);
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => setSent(false), 3000);
  }

  return (
    <main className="container contact-page">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Feel free to reach out for collaborations, questions, or opportunities.
      </p>

      <form className="contact-form card" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label>Message</label>
          <textarea
            rows="5"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
