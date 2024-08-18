import React, { useState } from 'react';

function ContactUs() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      // Simulate form submission
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }, 2000);
    };

    return (
        <div className="contact-us">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, please reach out to us using the form below.</p>
      {loading && <div className="loading-spinner"></div>}
      {submitted && !loading && <p className="success-message">Thank you for contacting us! We will get back to you shortly.</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
    );
};

export default ContactUs;
