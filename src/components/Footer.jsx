import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Mail, Phone, MapPin, Globe, Share2, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <Droplets size={32} className="logo-icon" />
            <span className="logo-text">LifeLink</span>
          </Link>
          <p>Connecting life-savers with those in need. Every drop counts.</p>
          <div className="social-links">
            <a href="#"><Globe size={20} /></a>
            <a href="#"><Share2 size={20} /></a>
            <a href="#"><MessageCircle size={20} /></a>
            <a href="#"><Mail size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/find-donor">Find Donor</Link></li>
            <li><Link to="/become-donor">Become a Donor</Link></li>
            <li><Link to="/campaigns">Campaigns</Link></li>
            <li><Link to="/guidelines">Guidelines</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact info</h4>
          <ul>
            <li><MapPin size={18} /> 123 Health Ave, Medical City</li>
            <li><Phone size={18} /> +91 98765 43210</li>
            <li><Mail size={18} /> contact@lifelink.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} LifeLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
