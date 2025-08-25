import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ scrollToSection should only work for sections on the same page
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div
          className="logo-section"
          onClick={() => handleNavigation('/')}
          style={{ cursor: 'pointer' }}
        >
          <div className="logo-animation">
            <img 
              src={require('../assets/GG Crackers Logo Final-01.jpg')} 
              alt="GG Crackers Logo" 
              className="logo-img"
              style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 0 20px #ff6b35' }}
            />
            <div className="logo-spark">✨</div>
          </div>
          <div className="brand-text">
            <h1 className="brand-name">GG CRACKERS</h1>
            <p className="brand-tagline">Fantacy World </p>
          </div>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {/* ✅ updated paths to match your AppRouter.js */}
            <li><button onClick={() => handleNavigation('/static-hero')} className="nav-link">Home</button></li>
            <li><button onClick={() => handleNavigation('/static-about')} className="nav-link">About</button></li>
            <li><button onClick={() => handleNavigation('/static-brands')} className="nav-link">Brands</button></li>
            <li><button onClick={() => handleNavigation('/static-safetytips')} className="nav-link">Safe Tips</button></li>
            <li><button onClick={() => handleNavigation('/static-about')} className="nav-link">Contact</button></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button 
            className="cta-button order-btn"
            onClick={() => handleNavigation('/')}
          >
            <span className="btn-text">Order Now</span>
            <span className="btn-icon">🛒</span>
            <div className="btn-glow"></div>
          </button>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className="header-fireworks">
          <div className="firework firework-1">💥</div>
          <div className="firework firework-2">🎆</div>
          <div className="firework firework-3">🎇</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
