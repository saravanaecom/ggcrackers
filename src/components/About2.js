import React from 'react';
import './About.css';

import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const handleOrderOnline = () => {
    navigate('/');
  };

  const handleSafetyTips = () => {
    // Show safety tips modal or redirect
    alert('Safety Tips:\n\n1. Always read instructions before use\n2. Keep water nearby\n3. Light crackers in open areas only\n4. Never hold crackers in your hand\n5. Store in cool, dry place\n6. Keep away from children\n7. Dispose properly after use');
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About GG Crackers</h2>
          <div className="title-decoration">
            <span className="spark">✨</span>
            <div className="title-line"></div>
            <span className="spark">✨</span>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <p className="highlight-text">
                Welcome to GG Crackers - your premier destination for high-quality fireworks and crackers!
              </p>
              
              <p>
                With over 14 years of experience in the fireworks industry, we specialize in bringing 
                joy and spectacular colors to your celebrations. From traditional Diwali crackers to 
                modern aerial displays, we offer a wide range of premium quality fireworks that are 
                both safe and spectacular.
              </p>

              <p>
                Our commitment to quality and safety has made us a trusted name among thousands of 
                customers across the region. We source our products from certified manufacturers 
                and ensure each item meets the highest safety standards.
              </p>

              <div className="experience-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🏆</span>
                  <span>Award Winning Quality</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">📜</span>
                  <span>Certified Products</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🎯</span>
                  <span>Customer Focused</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h3 className="contact-title">Get in Touch</h3>
            
            <div className="contact-details">
              

              

             

              <div className="contact-item">
                <div className="contact-icon">⏰</div>
                <div className="contact-content">
                  <span className="contact-label">Business Hours</span>
                  <span className="contact-value">Mon-Sun: 24 Hours</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-content">
                  <span className="contact-label">Contact</span>
                  <span className="contact-value">+91 8870012810</span>
                </div>
              </div>
            </div>

            <div className="action-buttons">
              <button className="action-btn primary-btn" onClick={handleOrderOnline}>
                <span className="btn-icon">🛒</span>
                <span className="btn-text">Order Online</span>
                <div className="btn-shine"></div>
              </button>

              <button className="action-btn safety-btn" onClick={handleSafetyTips}>
                <span className="btn-icon">🛡️</span>
                <span className="btn-text">Safety Tips</span>
                <div className="btn-shine"></div>
              </button>
            </div>

            <div className="additional-info">
              <div className="info-card">
                <h4>Why Choose Us?</h4>
                <ul>
                  <li>✓ Premium Quality Products</li>
                  <li>✓ Competitive Pricing</li>
                  <li>✓ Fast & Safe Delivery</li>
                  <li>✓ Expert Customer Support</li>
                  <li>✓ Wide Product Range</li>
                </ul>
              </div>

              <div className="info-card">
                <h4>Our Services</h4>
                <ul>
                  <li>🎆 Retail Sales</li>
                  <li>🎇 Bulk Orders</li>
                  <li>🎊 Event Planning</li>
                  <li>🚚 Home Delivery</li>
                  <li>📞 24/7 Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="floating-animations">
          <div className="floating-element sparkle-1">✨</div>
          <div className="floating-element sparkle-2">💫</div>
          <div className="floating-element firework-small">🎆</div>
          <div className="floating-element cracker-small">🧨</div>
          <div className="cracker-display cracker-display-1">🧨</div>
          <div className="cracker-display cracker-display-2">🎇</div>
        </div>
      </div>
    </section>
  );
};

export default About;
