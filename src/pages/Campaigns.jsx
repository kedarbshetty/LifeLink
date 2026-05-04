import React from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { campaigns } from '../data/campaigns';
import './Campaigns.css';

const Campaigns = () => {
  return (
    <div className="campaigns-page">
      <div className="page-header">
        <div className="container">
          <h1>Upcoming Campaigns</h1>
          <p>Find blood donation drives and events happening near you.</p>
        </div>
      </div>

      <div className="container section">
        <div className="campaigns-grid">
          {campaigns.map(camp => (
            <div key={camp.id} className="card campaign-card fade-in">
              <div className="camp-image">
                <img src={camp.image} alt={camp.title} />
                <div className="camp-date-badge">
                  <span className="day">{camp.date.split('-')[2]}</span>
                  <span className="month">{new Date(camp.date).toLocaleString('default', { month: 'short' })}</span>
                </div>
              </div>
              <div className="camp-body">
                <div className="camp-organizer">{camp.organizer}</div>
                <h3>{camp.title}</h3>
                <div className="camp-info">
                  <p><Calendar size={16} /> {camp.date}</p>
                  <p><Clock size={16} /> {camp.time}</p>
                  <p><MapPin size={16} /> {camp.location}</p>
                </div>
                <p className="camp-desc">{camp.description}</p>
                <button className="btn btn-primary full-width">
                  Register for Event <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="organize-cta card">
          <div className="cta-text">
            <h2>Want to organize a camp?</h2>
            <p>If you're a hospital or an NGO, you can partner with us to host a blood donation drive.</p>
          </div>
          <button className="btn btn-outline">Contact Us to Partner</button>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
