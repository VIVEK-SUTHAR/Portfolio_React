import firebase from "firebase/compat/app";
import React, { useState } from "react";
import "../styles/Contact.css";
import db from "./firebase";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [issent, setIssent] = useState(false);
  const sendMsg = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    db.collection("FORM_SUBMISSIONS").add({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setIssent(true);
    setTimeout(() => {
      setIssent(false);
    }, 5000);
    setTimeout(() => {
      setFormData({
        email: "",
        message: "",
        name: "",
      });
    }, 5000);
  };
  return (
    <>
      <div id="block" />
      <div id="contactPage">
        <h1 className="title">Contact Me</h1>
        {issent && <h3>Thank you {formData.name} for your Message.</h3>}
        <div className="contactForm">
          <form name="contact">
            <label htmlFor="Name">Your Name</label>
            <br />
            <input
              type="text"
              name="Name"
              id="Name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => {
                e.preventDefault();
                setFormData({
                  ...formData,
                  name: e.target.value,
                });
              }}
              required
            />
            <br />
            <label htmlFor="Name">Your E-Mail ID</label>
            <br />
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="Your E-Mail Address"
              value={formData.email}
              onChange={(e) => {
                e.preventDefault();
                setFormData({
                  ...formData,
                  email: e.target.value,
                });
              }}
              required
            />
            <br />
            <label htmlFor="Name">Your Message</label>
            <br />
            <textarea
              placeholder="Type Your message here..."
              draggable="true"
              value={formData.message}
              onChange={(e) => {
                e.preventDefault();
                setFormData({
                  ...formData,
                  message: e.target.value,
                });
              }}
            />
            <br />
            <button
              type="submit"
              id="sendMSg"
              onClick={sendMsg}
              disabled={!formData.email || !formData.message || !formData.name}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
