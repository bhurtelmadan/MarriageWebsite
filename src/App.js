import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Photos from './components/Photos';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [fadeState, setFadeState] = useState('fade-in');

  // Handle tab changes with animation
  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    
    // Trigger fade out
    setFadeState('fade-out');
    
    // After animation completes, change tab and fade back in
    setTimeout(() => {
      setActiveTab(tab);
      setFadeState('fade-in');
    }, 300); // Match with CSS transition time
  };

  // Check for URL hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'about' || hash === 'photos') {
      setActiveTab(hash);
    }
  }, []);

  // Update URL hash when tab changes
  useEffect(() => {
    window.location.hash = activeTab;
  }, [activeTab]);

  return (
    <div className="app">
      <Header />
      
      <div className="tabs">
        <div className="tab-buttons">
          <button 
            className={activeTab === 'home' ? 'active' : ''} 
            onClick={() => handleTabChange('home')}
          >
            Home
          </button>
          
          <button 
            className={activeTab === 'about' ? 'active' : ''} 
            onClick={() => handleTabChange('about')}
          >
            About Us
          </button>
          
          <button 
            className={activeTab === 'photos' ? 'active' : ''} 
            onClick={() => handleTabChange('photos')}
          >
            Photos
          </button>
        </div>

        <div className={`tab-content ${fadeState}`}>
          {activeTab === 'home' && <Home />}
          {activeTab === 'about' && <AboutUs />}
          {activeTab === 'photos' && <Photos />}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App; 