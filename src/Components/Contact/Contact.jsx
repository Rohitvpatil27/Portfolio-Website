import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    //Web3Forms access key here
    formData.append("access_key", "dec90312-e683-4380-b536-34c8676c38d6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully! ✓");
    } else {
      alert("Failed to send message: " + res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="title-box">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let`s talk</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p
                onClick={() => {
                  navigator.clipboard.writeText("rohit002701@gmail.com");
                  alert("Email Copied! ✓");
                }}
              >
                <a href="mailto:rohit002701@gmail.com">rohit002701@gmail.com</a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p
                onClick={() => {
                  navigator.clipboard.writeText("+91 9036933950");
                  alert("Phone Number Copied! ✓");
                }}
              >
                +91 9036933950
              </p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>
                <a
                  href="https://www.google.com/maps?q=Bangalore,India"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bangalore, India
                </a>
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name *</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label htmlFor="email">Your Email *</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>

          {/* Suggestion Box */}
          <label htmlFor="suggestion">Your Suggestion</label>
          <textarea
            name="suggestion"
            rows="4"
            placeholder="Enter your suggestion"
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
