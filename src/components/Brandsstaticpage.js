import React, { useState, useEffect } from 'react';
import './Brands.css';

const Brands = () => {
  const [currentBrand, setCurrentBrand] = useState(0);

  // Top 10 Popular Cracker Brands (these are common brand names in the fireworks industry)
  const brands = [
    {
      name: "Standard Fireworks",
      logo: "🎆",
      description: "Premium quality fireworks since 1942",
      specialty: "Aerial Displays"
    },
    {
      name: "Ayyan Fireworks", 
      logo: "✨",
      description: "Traditional crackers with modern safety",
      specialty: "Ground Spinners"
    },
    {
      name: "Cock Brand",
      logo: "🐓",
      description: "Trusted name in celebrations",
      specialty: "Sound Crackers"
    },
    {
      name: "Kaliswari",
      logo: "🌟",
      description: "Colorful and safe fireworks",
      specialty: "Sparklers"
    },
    {
      name: "Diamond Crackers",
      logo: "💎",
      description: "Brilliant displays for every occasion",
      specialty: "Fancy Items"
    },
    {
      name: "Peacock Fireworks",
      logo: "🦚",
      description: "Spectacular multi-color effects",
      specialty: "Aerial Shots"
    },
    {
      name: "Lion Crackers",
      logo: "🦁",
      description: "Bold and powerful celebrations",
      specialty: "Bombs & Chorsa"
    },
    {
      name: "Eagle Fireworks",
      logo: "🦅",
      description: "Soaring high with quality",
      specialty: "Sky Shots"
    },
    {
      name: "Flower Pot",
      logo: "🌸",
      description: "Beautiful ground displays",
      specialty: "Flower Pots"
    },
    {
      name: "Star Fireworks",
      logo: "⭐",
      description: "Making every moment special",
      specialty: "Mix Collections"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrand((prev) => (prev + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [brands.length]);

  return (
    <section id="brands" className="brands">
      <div className="brands-container">
        <div className="section-header">
          <h2 className="section-title">Top 10 Premium Brands</h2>
          <p className="section-subtitle">
            We proudly feature the most trusted and celebrated fireworks brands
          </p>
          <div className="title-decoration">
            <span className="spark">🎇</span>
            <div className="title-line"></div>
            <span className="spark">🎇</span>
          </div>
        </div>

        <div className="brands-showcase">
          <div className="featured-brand">
            <div className="featured-brand-card">
              <div className="brand-logo-large">
                {brands[currentBrand].logo}
              </div>
              <h3 className="featured-brand-name">{brands[currentBrand].name}</h3>
              <p className="featured-brand-description">{brands[currentBrand].description}</p>
              <div className="brand-specialty">
                <span className="specialty-label">Specialty:</span>
                <span className="specialty-value">{brands[currentBrand].specialty}</span>
              </div>
              <div className="brand-glow"></div>
            </div>
          </div>

          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className={`brand-card ${index === currentBrand ? 'active' : ''}`}
                onClick={() => setCurrentBrand(index)}
              >
                <div className="brand-logo">{brand.logo}</div>
                <div className="brand-info">
                  <h4 className="brand-name">{brand.name}</h4>
                  <p className="brand-specialty-small">{brand.specialty}</p>
                </div>
                <div className="brand-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="brands-features">
          <div className="feature-card">
            <div className="feature-icon">🏅</div>
            <h4>Certified Brands</h4>
            <p>All brands meet international safety standards</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h4>Quality Assured</h4>
            <p>Rigorous testing for consistent performance</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🌟</div>
            <h4>Wide Variety</h4>
            <p>From traditional to modern fireworks</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💯</div>
            <h4>Best Prices</h4>
            <p>Competitive pricing on all premium brands</p>
          </div>
        </div>

        <div className="brands-stats">
          <div className="stat-card">
            <div className="stat-number">200+</div>
            <div className="stat-label">Premium Brands</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">10k+</div>
            <div className="stat-label">Product Varieties</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Quality Guarantee</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>

        <div className="brands-cta">
          <h3>Ready to Light Up Your Celebration?</h3>
          <p>Explore our complete collection of premium fireworks from top brands</p>
          <button className="explore-btn">
            <span>Explore All Products</span>
            <div className="btn-firework">🎆</div>
          </button>
        </div>

        {/* Animated Background Elements */}
        <div className="brands-animations">
          <div className="floating-spark spark-1">✨</div>
          <div className="floating-spark spark-2">💫</div>
          <div className="floating-spark spark-3">🌟</div>
          <div className="floating-firework brand-firework-1">🎇</div>
          <div className="floating-firework brand-firework-2">🎆</div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
