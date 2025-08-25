import React, { useState, useEffect } from 'react';
import './Brands.css';

const Brands = () => {
  const [currentBrand, setCurrentBrand] = useState(0);

  // Top 10 Popular Cracker Brands (these are common brand names in the fireworks industry)
  const brands = [
  {
  name: "Standard Fireworks",
  logo: "🎆",
  description: "India’s most iconic fireworks brand, trusted for generations. Renowned for innovation and safety.",
  specialty: "Spectacular Aerial Displays"
},
{
  name: "Ajantha Fireworks",
  logo: "✨",
  description: "Blending tradition with modern safety, Ajantha brings classic crackers to every celebration.",
  specialty: "Ground Spinners & Sparklers"
},
{
  name: "Mori Brand",
  logo: "🐓",
  description: "Celebration experts known for vibrant colors and festive sounds. Perfect for family fun.",
  specialty: "Sound Crackers & Color Bombs"
},
{
  name: "Metro",
  logo: "🌟",
  description: "Metro delivers dazzling, safe fireworks for all ages. Brighten your night with confidence.",
  specialty: "Premium Sparklers"
},
{
  name: "Blue Crackers",
  logo: "💎",
  description: "Famous for brilliant blue effects and creative designs. Make every event unforgettable.",
  specialty: "Fancy & Designer Fireworks"
},
{
  name: "Ravindra Fireworks",
  logo: "🦚",
  description: "Multi-color magic and spectacular effects. Ravindra is the choice for grand displays.",
  specialty: "Aerial Shots & Multi-Color Effects"
},
{
  name: "Elephant Crackers",
  logo: "🐘",
  description: "Powerful, bold, and safe. Elephant Crackers are perfect for those who love a big celebration.",
  specialty: "Bombs, Chorsa & Loud Crackers"
},
{
  name: "Starwell Fireworks",
  logo: "🦅",
  description: "Soaring high with quality and variety. Starwell is a favorite for sky lovers.",
  specialty: "Sky Shots & Rockets"
},
{
  name: "Ashok",
  logo: "🌸",
  description: "Beautiful ground displays and gentle effects. Ashok is ideal for family-friendly fun.",
  specialty: "Flower Pots & Ground Chakkars"
},
{
  name: "Maruthi Fireworks",
  logo: "🚀",
  description: "Making every moment special with a wide range of innovative products.",
  specialty: "Mix Collections & Gift Packs"
},
{
  name: "Sparklers",
  logo: "✨",
  description: "Bright, safe, and joyful sparklers for all ages. A must-have for every festival.",
  specialty: "Long-Lasting Sparklers"
},
{
  name: "Liya",
  logo: "🎉",
  description: "Liya brings excitement to every party with unique effects and safe designs.",
  specialty: "Party Crackers & Novelty Items"
},
{
  name: "Coronation",
  logo: "👑",
  description: "Royal celebrations start with Coronation. Experience luxury in every spark.",
  specialty: "Premium Gift Boxes"
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
            <div className="stat-number">100+</div>
            <div className="stat-label">Premium Brands</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">3000+</div>
            <div className="stat-label">Product Varieties</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Quality Guarantee</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">40+</div>
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
