import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css'; // Ensure you have the correct CSS file

const Navbar: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

  // Detect scroll and toggle navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${scrolling ? 'navbar-hidden' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="/">MetaLogic</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/career" className="nav-link">Career</Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
          </ul>
        </div>


        <div className="navbar-nav ms-auto">
          <Link to="/contact" className="btn btn-primary text-white">Get in Touch</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
