import React from 'react';
import '../Style/LandingSection.css';

const LandingSection: React.FC = () => {
  return (
    <section className="landing-section">
    <div className="landing-background">
      <div className="container">
        <div className="landing-content">
          {/* Headline */}
          <h1 className="landing-heading">
            Crafting Beautiful & Functional Designs for Your Brand
          </h1>

          {/* Subheading */}
          <p className="landing-subheading">
            At MetaLogic, we create user-centric UI/UX designs that not only look great but also deliver seamless user experiences. Our designs help your business stand out and ensure long-term customer engagement.
          </p>

          {/* Key Features */}
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">
              <h3>Creative Design</h3>
              <p>We push creative boundaries to deliver innovative solutions that speak to your brand’s identity.</p>
            </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
              <h3>User-Centered</h3>
              <p>Our design process focuses on the user to ensure a smooth and intuitive experience on every platform.</p>
            </div>
            </div>
            
            <div className="feature-card" >
              <div className="feature-icon">
              <h3>Responsive & Scalable</h3>
              <p>From mobile to desktop, we create designs that look and function flawlessly across all devices.</p>
            </div>
            </div>
          </div>


          <div className="cta">
            <h2>Let’s Design Your Future Together</h2>
            <a href="/contact" className="cta-btn">Get in Touch</a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default LandingSection;
