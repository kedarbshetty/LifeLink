import React from 'react';
import { Target, Users, Shield, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>About LifeLink</h1>
          <p>Learn about our mission and the team behind this life-saving initiative.</p>
        </div>
      </div>

      <div className="container section">
        <div className="mission-section">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>At LifeLink, we believe that no one should suffer due to a lack of timely access to blood. Our mission is to build a robust, transparent, and efficient ecosystem that connects voluntary blood donors with hospitals and recipients seamlessly.</p>
            <p>We leverage technology to bridge the gap between supply and demand, ensuring that help is just a few clicks away during emergencies.</p>
          </div>
          <div className="mission-stats card">
            <div className="stat">
              <h3>100%</h3>
              <p>Voluntary Donation</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Emergency Support</p>
            </div>
            <div className="stat">
              <h3>Free</h3>
              <p>Cost to Users</p>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h2 className="text-center">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card card">
              <Shield size={40} className="text-primary" />
              <h3>Transparency</h3>
              <p>We ensure that every donation and request is handled with the utmost transparency and integrity.</p>
            </div>
            <div className="value-card card">
              <Users size={40} className="text-primary" />
              <h3>Community</h3>
              <p>We are building a community of selfless individuals dedicated to saving lives through blood donation.</p>
            </div>
            <div className="value-card card">
              <Heart size={40} className="text-primary" />
              <h3>Empathy</h3>
              <p>Our platform is built on a foundation of empathy, understanding the urgency and emotions involved in medical emergencies.</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2 className="text-center">The Impact</h2>
          <div className="impact-grid">
            <div className="impact-item">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop" alt="Impact 1" />
              <div className="impact-overlay">
                <h3>Rural Outreach</h3>
                <p>Expanding our reach to remote villages where blood scarcity is highest.</p>
              </div>
            </div>
            <div className="impact-item">
              <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop" alt="Impact 2" />
              <div className="impact-overlay">
                <h3>Hospital Partnerships</h3>
                <p>Collaborating with 50+ hospitals for faster response times.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
