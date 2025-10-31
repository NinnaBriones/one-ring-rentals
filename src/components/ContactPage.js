import React, { useState } from "react";

// contact page component
export default function ContactPage() {
  // state variables for each contact form field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // event andlers to update state
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleSubjectChange(e) {
    setSubject(e.target.value);
  }
  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  // form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", { name, email, subject, message });

    alert("Message sent! (Check the console for data)");
  };

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="main col-sm-12">
            <h1 className="section-title">Contact Us</h1>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    value={subject}
                    onChange={handleSubjectChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    value={message}
                    onChange={handleMessageChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
