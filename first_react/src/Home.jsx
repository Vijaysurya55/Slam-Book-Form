import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div>
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to DoFlammingo!</h1>
        <p>Your one-stop destination for all your needs.</p>
        <button className="cta-button">Get Started</button>
      </header>
      </div>
      <footer className="footer-section">
        <p>&copy; 2024 DoFlammingo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
