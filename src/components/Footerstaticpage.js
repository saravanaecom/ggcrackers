import React from 'react';
import './Footer.css';
import logoImage from '../assets/GG Crackers Logo Final-01.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-section company-info">
            <div className="footer-logo">
              <div className="logo-container">
                <img src={logoImage} alt="GG Crackers Logo" className="footer-logo-image" />
                <div className="logo-sparkle">✨</div>
              </div>
              <h3 className="company-name">GG CRACKERS</h3>
              <p className="company-tagline">Fantacy World</p>
            </div>
            
            <p className="company-description">
              Bringing joy and spectacular colors to your celebrations for over 15 years. 
              Your trusted partner for safe, premium quality fireworks and crackers.
            </p>

            <div className="certifications">
              <div className="cert-item">
                <span className="cert-icon">🏅</span>
                <span>ISO Certified</span>
              </div>
              <div className="cert-item">
                <span className="cert-icon">🛡️</span>
                <span>Safety Approved</span>
              </div>
              <div className="cert-item">
                <span className="cert-icon">⭐</span>
                <span>Quality Assured</span>
              </div>
            </div>
          </div>

          <div className="footer-section quick-links">
            <h4 className="section-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#brands">Brands</a></li>
              <li><a href="#contact">Contact</a></li>
            
              <li><a href="#SafeTipsstatic">Safety Tips</a></li>
             
            </ul>
          </div>

          <div className="footer-section products-categories">
            <h4 className="section-title">Product Categories</h4>
            <ul className="footer-links">
              <li><a href="#sparklers">Sparklers</a></li>
              <li><a href="#ground-spinners">Ground Spinners</a></li>
              <li><a href="#aerial-shots">Aerial Shots</a></li>
              <li><a href="#flower-pots">Flower Pots</a></li>
              <li><a href="#sound-crackers">Sound Crackers</a></li>
              <li><a href="#gift-boxes">Gift Boxes</a></li>
              <li><a href="#bulk-orders">Bulk Orders</a></li>
              <li><a href="#custom-displays">Custom Displays</a></li>
            </ul>
          </div>

          <div className="footer-section contact-info">
            <h4 className="section-title">Get in Touch</h4>
            
            <div className="contact-details">
           

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-text">
                  <strong>Phone:</strong>
                  <p><a href="tel:+919876543210">+91 8870012810</a></p>
                </div>
              </div>


              <div className="contact-item">
                <span className="contact-icon">⏰</span>
                <div className="contact-text">
                  <strong>Hours:</strong>
                  <p>Mon-Sun: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <div className="social-media-section">
            <h4 className="social-title">Follow Us & Stay Connected</h4>
            <p className="social-subtitle">Join our community for latest updates, offers, and celebration ideas!</p>
            
            <div className="social-links">
          

        

              <a 
                href="https://www.youtube.com/@ggcrackersfantasyworld" 
                className="social-link youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-icon">📺</div>
                <span className="social-text">YouTube</span>
                <div className="social-hover-effect"></div>
              </a>

              <a 
                href="https://wa.me/918870012810" 
                className="social-link whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-icon">💬</div>
                <span className="social-text">WhatsApp</span>
                <div className="social-hover-effect"></div>
              </a>

          
            </div>
          </div>
   
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} GG Crackers. All rights reserved.</p>
              <p className="domain-info">www.ggcrackers.com - Premium Fireworks & Celebrations</p>
            </div>

            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#refund">Refund Policy</a>
              <a href="#shipping">Shipping Info</a>
            </div>
          </div>

          <div className="footer-badges">
            <div className="badge">
              <span className="badge-icon">🏆</span>
              <span>Trusted Brand</span>
            </div>
            <div className="badge">
              <span className="badge-icon">🚚</span>
              <span>Fast Delivery</span>
            </div>
            <div className="badge">
              <span className="badge-icon">💯</span>
              <span>Quality Assured</span>
            </div>
          </div>
        </div>

        {/* Animated Footer Elements */}
        <div className="footer-animations">
          <div className="footer-sparkle sparkle-1">✨</div>
          <div className="footer-sparkle sparkle-2">💫</div>
          <div className="footer-sparkle sparkle-3">🌟</div>
          <div className="footer-firework">🎆</div>
          <div className="footer-rocket">🚀</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
