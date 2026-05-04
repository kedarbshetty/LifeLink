import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, Shield, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Home.css';
import heroImg from '../assets/hero-image.png';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Connecting Blood Donors & Recipients</h1>
            <p>Your small act of kindness can save a life. LifeLink makes it easy to find donors and contribute to your community.</p>
            <div className="hero-btns">
              <Link to="/find-donor" className="btn btn-primary">
                Find Blood <Search size={20} />
              </Link>
              <Link to="/become-donor" className="btn btn-outline">
                Donate Now <Heart size={20} />
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={heroImg} alt="Blood Donation Illustration" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats container">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>2,500+</h3>
            <p>Active Donors</p>
          </div>
          <div className="stat-card">
            <h3>1,200+</h3>
            <p>Lives Saved</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Blood Camps</p>
          </div>
          <div className="stat-card">
            <h3>15+</h3>
            <p>Cities Covered</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose LifeLink?</h2>
            <p>We provide a fast, secure, and reliable platform for blood donation.</p>
          </div>
          <div className="features-grid">
            <div className="card feature-card">
              <div className="icon-box"><Search className="text-primary" /></div>
              <h3>Quick Search</h3>
              <p>Find blood donors near you in seconds using our advanced filters.</p>
            </div>
            <div className="card feature-card">
              <div className="icon-box"><Shield className="text-primary" /></div>
              <h3>Secure Platform</h3>
              <p>Your data is encrypted and only shared with verified medical institutions.</p>
            </div>
            <div className="card feature-card">
              <div className="icon-box"><Users className="text-primary" /></div>
              <h3>Active Community</h3>
              <p>Join thousands of donors who are ready to help in case of emergencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container cta-card">
          <div className="cta-content">
            <h2>Ready to be a hero?</h2>
            <p>Register as a donor today and start saving lives in your city.</p>
          </div>
          <Link to="/become-donor" className="btn btn-primary lg">
            Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
