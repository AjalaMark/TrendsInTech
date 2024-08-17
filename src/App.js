import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
