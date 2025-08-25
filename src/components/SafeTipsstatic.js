import React from 'react';
import './SafeTips.css';

const SafeTips = () => {
  const safetyTips = [
    {
      category: "Before Using Crackers",
      icon: "🛡️",
      tips: [
        "Always read the instructions on the cracker package carefully",
        "Check the expiry date and manufacturing details",
        "Keep a bucket of water or sand nearby for emergencies",
        "Wear cotton clothes and avoid synthetic materials",
        "Choose an open area away from buildings, vehicles, and dry grass",
        "Never attempt to make crackers at home"
      ]
    },
    {
      category: "While Lighting Crackers",
      icon: "🔥",
      tips: [
        "Light crackers at arm's length using a long candle or agarbatti",
        "Never hold crackers in your hand while lighting",
        "Light only one cracker at a time",
        "Move away quickly after lighting the cracker",
        "Never lean over crackers while lighting them",
        "Do not light crackers in confined spaces"
      ]
    },
    {
      category: "Child Safety Guidelines",
      icon: "👶",
      tips: [
        "Children should always be supervised by adults",
        "Only age-appropriate crackers should be given to children",
        "Teach children to maintain safe distance from crackers",
        "Ensure children wash their hands after handling crackers",
        "Keep crackers away from small children who might put them in their mouth",
        "Use only sparklers and flower pots for very young children"
      ]
    },
    {
      category: "Storage and Handling",
      icon: "📦",
      tips: [
        "Store crackers in a cool, dry place away from heat sources",
        "Keep crackers in original packaging until use",
        "Do not store large quantities of crackers at home",
        "Keep crackers away from electrical appliances",
        "Handle crackers gently to avoid accidental ignition",
        "Store different types of crackers separately"
      ]
    },
    {
      category: "Environmental Safety",
      icon: "🌱",
      tips: [
        "Use eco-friendly crackers whenever possible",
        "Avoid bursting crackers during high pollution days",
        "Clean up the area after celebrations",
        "Dispose of used cracker debris properly",
        "Be mindful of noise levels, especially in residential areas",
        "Consider the impact on animals and elderly people"
      ]
    },
    {
      category: "Emergency Procedures",
      icon: "🚨",
      tips: [
        "Keep emergency numbers handy during celebrations",
        "Know basic first aid for burns and injuries",
        "In case of burns, immediately apply cold water for 10-15 minutes",
        "Seek immediate medical attention for serious burns",
        "If crackers fail to ignite, wait for 5-10 minutes before approaching",
        "Never attempt to relight partially burnt crackers"
      ]
    }
  ];

  const fireDosDonts = {
    dos: [
      "Keep first aid kit ready",
      "Inform neighbors about cracker celebrations",
      "Use protective eyewear if available",
      "Maintain adequate distance from crackers",
      "Light crackers on the ground, not in hand",
      "Have adult supervision at all times"
    ],
    donts: [
      "Don't burst crackers near hospitals, schools, or religious places",
      "Don't use crackers indoors or in crowded areas",
      "Don't mix different types of crackers together",
      "Don't attempt to pick up crackers that didn't explode",
      "Don't smoke while handling crackers",
      "Don't ignore local laws and time restrictions"
    ]
  };

  return (
    <div className="safe-tips">
      <div className="safe-tips-container">
        {/* Header Section */}
        <div className="safe-tips-header">
          <h1 className="page-title">
            🎆 Cracker Safety Guidelines 🎆
          </h1>
          <p className="page-subtitle">
            Celebrate safely with our comprehensive guide to responsible cracker usage
          </p>
          <div className="emergency-contact">
            <div className="emergency-card">
              <h3>Emergency Contact</h3>
              <div className="contact-item">
                <span className="contact-icon">🚨</span>
                <span>Fire Emergency: 101</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🏥</span>
                <span>Medical Emergency: 108</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>GG Crackers Helpline: +91 8870012810</span>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Tips Grid */}
        <div className="safety-tips-grid">
          {safetyTips.map((category, index) => (
            <div key={index} className="safety-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.category}</h3>
              </div>
              <ul className="tips-list">
                {category.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="tip-item">
                    <span className="tip-bullet">✓</span>
                    <span className="tip-text">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Do's and Don'ts Section */}
        <div className="dos-donts-section">
          <h2 className="section-title">Essential Do's & Don'ts</h2>
          
          <div className="dos-donts-grid">
            <div className="dos-card">
              <div className="card-header dos-header">
                <span className="card-icon">✅</span>
                <h3>DO's</h3>
              </div>
              <ul className="dos-donts-list">
                {fireDosDonts.dos.map((item, index) => (
                  <li key={index} className="dos-item">
                    <span className="bullet">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="donts-card">
              <div className="card-header donts-header">
                <span className="card-icon">❌</span>
                <h3>DON'Ts</h3>
              </div>
              <ul className="dos-donts-list">
                {fireDosDonts.donts.map((item, index) => (
                  <li key={index} className="donts-item">
                    <span className="bullet">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Safety Information */}
        <div className="additional-safety">
          <div className="safety-info-card">
            <h3>🏥 First Aid for Burns</h3>
            <ol>
              <li>Remove the person from the source of heat</li>
              <li>Cool the burn with running water for 10-15 minutes</li>
              <li>Remove jewelry or tight clothing before swelling begins</li>
              <li>Cover with clean, dry cloth</li>
              <li>Seek immediate medical attention for serious burns</li>
            </ol>
          </div>

          <div className="safety-info-card">
            <h3>🌍 Environmental Responsibility</h3>
            <ul>
              <li>Choose green crackers certified by CSIR-NEERI</li>
              <li>Follow local air quality guidelines</li>
              <li>Limit cracker usage during high pollution periods</li>
              <li>Clean up after celebrations</li>
              <li>Consider the impact on pets and wildlife</li>
            </ul>
          </div>

          <div className="safety-info-card">
            <h3>⚖️ Legal Guidelines</h3>
            <ul>
              <li>Follow local municipal guidelines for cracker timing</li>
              <li>Respect noise pollution norms</li>
              <li>Obtain necessary permissions for large celebrations</li>
              <li>Adhere to Supreme Court guidelines on cracker usage</li>
              <li>Be aware of area-specific restrictions</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="safety-cta">
          <h2>🎉 Celebrate Responsibly! 🎉</h2>
          <p>
            Remember, the joy of festivals lies in celebrating together safely. 
            Follow these guidelines to ensure a memorable and safe celebration for everyone.
          </p>
          <div className="cta-buttons">
            <button className="cta-primary" onClick={() => window.history.back()}>
              <span>← Back to Home</span>
            </button>
            <button className="cta-secondary" onClick={() => window.print()}>
              <span>🖨️ Print Guidelines</span>
            </button>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="safety-animations">
          <div className="floating-safety safety-1">🛡️</div>
          <div className="floating-safety safety-2">⚠️</div>
          <div className="floating-safety safety-3">🚨</div>
          <div className="floating-safety safety-4">💡</div>
        </div>
      </div>
    </div>
  );
};

export default SafeTips;
