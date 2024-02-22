import React, { useState } from "react";
import "./Contact.css";
import { Footer } from "./Footer";
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {};

  return (
    <section className="section-contact">
      <article className="form-container">
        <div className="container-contact">
          <div className="title-p-container">
            <h2 className="l-typography">Contact</h2>
            <p className="s-typogrphy">
              I would love to hear about your project and how I could help. Please fill in
              the form, and I’ll get back to you as soon as possible.
            </p>
          </div>
          <form className="input-container" onSubmit={handleSubmit}>
            <div>
              <input
                className="input-textarea-styles"
                placeholder="NAME"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="input-textarea-styles"
                placeholder="EMAIL"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="input-textarea-styles message"
                placeholder="MESSAGE"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="btn-send-container">
              <button className="send-btn s-typogrghy" type="submit">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
        <hr />
        <Footer />
      </article>
    </section>
  );
};
