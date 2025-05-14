import React from 'react';
import '../Style/Footer.css';  // Make sure to import the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          {/* <div className="logo">
            <img src="your-logo-path.png" alt="MetaLogic Logo" />
            <span>MetaLogic</span>
          </div> */}
          <p className="footer-description">
            Software Private Limited
          </p>
          <p className="footer-contact">
            <span>📍 Saptakhel, Lalitpur (Head office)</span>
            <span>📞 +977 9851535599</span>
            <span>📧 info@metalogic.com.np</span>
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-services">
            <h3>Services</h3>
            <ul>
              <li>Custom Software Development</li>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Cloud Computing Services</li>
              <li>Quality Assurance and Testing</li>
              <li>UI/UX Designing</li>
              <li>Maintenance and Support</li>
              <li>Dev Ops</li>
              <li>Blockchain Solutions</li>
            </ul>
          </div>
          </div>
          <div className="footer-join">
            <h3>Join</h3>
            <ul>
              <li>Careers at MetaLogic</li>
              <li>Internships</li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Join us on Social Media</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">📱</a>
              <a href="#" className="social-icon">🔗</a>
              <a href="#" className="social-icon">🔵</a>
              <a href="#" className="social-icon">💬</a>
            </div>
          </div>
        
      </div>
    </footer>
  );
};

export default Footer;
