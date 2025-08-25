import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [rockets, setRockets] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [explosions, setExplosions] = useState([]);

  const heroTexts = [
    "Light up your celebrations!",
    "Premium Quality Fireworks",
    "Safe & Spectacular Shows",
    "Diwali Special Collections"
  ];

  const sliderImages = [
    {
      url: require('../assets/fq4zwH.jpg'),
      title: 'Spectacular Fireworks'
    },
    {
      url: require('../assets/Crackers HD Wallpaper.jpg'),
      title: 'Colorful Celebrations'
    },
    {
      url: require('../assets/fq4zwH.jpg'),
      title: 'Festival Lights'
    },
    {
      url: require('../assets/TJ9qIp.jpg'),
      title: 'Night Sky Magic'
    }
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(textInterval);
  }, [heroTexts.length]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [sliderImages.length]);

  useEffect(() => {
    const createRocket = () => {
      const newRocket = {
        id: Date.now(),
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 2,
      };
      setRockets(prev => [...prev, newRocket]);

      // Create explosion when rocket reaches destination
      setTimeout(() => {
        createExplosion(newRocket.left, Math.random() * 50 + 10);
        setRockets(prev => prev.filter(rocket => rocket.id !== newRocket.id));
      }, (newRocket.animationDuration * 1000) - 500);
    };

    const rocketInterval = setInterval(createRocket, 3000);
    return () => clearInterval(rocketInterval);
  }, []);

  const createExplosion = (x, y) => {
    const explosionId = Date.now() + Math.random();
    const newExplosion = {
      id: explosionId,
      x,
      y,
      type: Math.floor(Math.random() * 3) + 1 // Random explosion type
    };
    
    setExplosions(prev => [...prev, newExplosion]);
    
    // Remove explosion after animation
    setTimeout(() => {
      setExplosions(prev => prev.filter(exp => exp.id !== explosionId));
    }, 2000);
  };

  const handleManualExplosion = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    createExplosion(x, y);
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="background-placeholder"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text-section">
          <h1 className="hero-title">
            <span className="main-title">GG CRACKERS</span>
            <span className="sub-title animated-text">
              {heroTexts[currentText]}
            </span>
          </h1>

          <p className="hero-description">
            Experience the magic of celebrations with our premium quality fireworks and crackers. 
            From traditional sparklers to spectacular aerial displays, we bring joy and colors to your special moments.
            Safe, certified, and spectacular - that's our promise to you!
          </p>

          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">🎆</span>
              <span>Premium Quality</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🛡️</span>
              <span>100% Safe</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🚚</span>
              <span>Fast Delivery</span>
            </div>
            <div className="feature">
              <span className="feature-icon">⭐</span>
              <span>Top Rated</span>
            </div>
          </div>

          {/* <div className="hero-actions">
            <button className="cta-primary" onClick={() => window.location.href = '/'}>
              <span>Explore Products</span>
              <div className="button-explosion">💥</div>
            </button>
            <button className="cta-secondary" onClick={() => window.open('https://www.youtube.com/@ggcrackersfantasyworld', '_blank')}>
              <span>Watch Safety Video</span>
              <span>🎥</span>
            </button>
          </div> */}
        </div>

        <div className="hero-visual-section">
          {/* Image Slider */}
          <div className="image-slider">
            <div className="slider-container">
              {sliderImages.map((image, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${image.url})` }}
                >
                  <div className="slide-overlay">
                    <h3 className="slide-title">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="slider-nav">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          <div className="floating-elements">
            <div className="floating-cracker">🧨</div>
            <div className="floating-sparkler">🎇</div>
            <div className="floating-firework">🎆</div>
          </div>

          <div className="statistics">
            <div className="stat-item">
              <span className="stat-number">3K+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Brands</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">40+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Flying Rockets Animation */}
      <div className="rockets-container">
        {rockets.map(rocket => (
          <div
            key={rocket.id}
            className="flying-rocket"
            style={{
              left: `${rocket.left}%`,
              animationDuration: `${rocket.animationDuration}s`
            }}
          >
            🚀
            <div className="rocket-trail"></div>
          </div>
        ))}
      </div>

      {/* Particle Effects */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i % 3 + 1}`}></div>
        ))}
      </div>

      {/* Sky Shot Crackers */}
      <div className="sky-shot-container">
        <div className="sky-shot sky-shot-1">🎆</div>
        <div className="sky-shot sky-shot-2">🎇</div>
        <div className="sky-shot sky-shot-3">🎆</div>
        <div className="cracker-trail" style={{left: '20%', bottom: '0'}}></div>
        <div className="cracker-trail" style={{left: '50%', bottom: '0'}}></div>
        <div className="cracker-trail" style={{left: '80%', bottom: '0'}}></div>
      </div>

      {/* Fancy Crackers Burst */}
      <div className="fancy-burst fancy-1">💥</div>
      <div className="fancy-burst fancy-2">✨</div>
      <div className="fancy-burst fancy-3">🌟</div>

      {/* Cracker Sparkles */}
      <div className="cracker-sparkles">
        <div className="sparkle-burst sparkle-1">✨</div>
        <div className="sparkle-burst sparkle-2">💫</div>
        <div className="sparkle-burst sparkle-3">⭐</div>
        <div className="sparkle-burst sparkle-4">🌟</div>
      </div>

      {/* Boom Explosions */}
      <div className="explosions-container" onClick={handleManualExplosion} title="Click anywhere for fireworks!">
        {explosions.map(explosion => (
          <div
            key={explosion.id}
            className={`explosion explosion-type-${explosion.type}`}
            style={{
              left: `${explosion.x}%`,
              top: `${explosion.y}%`
            }}
          >
            <div className="explosion-center">💥</div>
            <div className="explosion-ring"></div>
            <div className="explosion-particles">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`explosion-particle particle-${i}`}>✨</div>
              ))}
            </div>
            <div className="explosion-flash"></div>
          </div>
        ))}
      </div>

   
     

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow">⬇</div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
