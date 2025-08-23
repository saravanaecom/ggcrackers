import React from 'react';
import Header from '../components/Headerstaticpage';
import Hero from '../components/Herostaticpage';
import About from '../components/About2';
import Brands from '../components/Brandsstaticpage';
import SafeTips from '../components/SafeTipsstatic';
import Footer from '../components/Footerstaticpage';

function StaticMainPage() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Brands />
        <SafeTips />
      </main>
      <Footer />
      
      {/* Floating Rocket Animation */}
      <div className="floating-rocket">
        <div className="rocket">🚀</div>
      </div>
      
      {/* Sparkling Stars Background */}
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div key={i} className={`star star-${i % 5 + 1}`}></div>
        ))}
      </div>
    </div>
  );
}

export default StaticMainPage;
