import logo from './logo.svg';
import './App.css';
import React from 'react';
import ContactUs from './components/ContctUs/ContactUs';

function App() {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, please reach out to us using the form below.</p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
