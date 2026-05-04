import React, { useState } from 'react';
import { Search, MapPin, Droplet, Phone, MessageSquare } from 'lucide-react';
import { donors } from '../data/donors';
import './FindDonor.css';

const FindDonor = () => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [city, setCity] = useState('');
  const [searchResults, setSearchResults] = useState(donors);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = donors.filter(donor => {
      return (bloodGroup === '' || donor.bloodGroup === bloodGroup) &&
             (city === '' || donor.city.toLowerCase().includes(city.toLowerCase()));
    });
    setSearchResults(filtered);
  };

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <div className="find-donor-page">
      <div className="page-header">
        <div className="container">
          <h1>Find a Donor</h1>
          <p>Search for blood donors in your area and contact them directly.</p>
        </div>
      </div>

      <div className="container search-section">
        <form className="search-form card" onSubmit={handleSearch}>
          <div className="form-group">
            <label><Droplet size={18} /> Blood Group</label>
            <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
              <option value="">All Groups</option>
              {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label><MapPin size={18} /> City</label>
            <input 
              type="text" 
              placeholder="Enter city name..." 
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Search Donors <Search size={18} />
          </button>
        </form>

        <div className="results-info">
          <p>Showing {searchResults.length} donors found</p>
        </div>

        <div className="donors-grid">
          {searchResults.length > 0 ? (
            searchResults.map(donor => (
              <div key={donor.id} className="card donor-card fade-in">
                <div className="donor-header">
                  <div className="blood-badge">{donor.bloodGroup}</div>
                  <div className="donor-info">
                    <h3>{donor.name}</h3>
                    <p><MapPin size={14} /> {donor.city}</p>
                  </div>
                </div>
                <div className="donor-details">
                  <div className="detail">
                    <span>Last Donated:</span>
                    <strong>{donor.lastDonated}</strong>
                  </div>
                  <div className="detail">
                    <span>Availability:</span>
                    <strong className={`status ${donor.availability.toLowerCase().replace(' ', '-')}`}>
                      {donor.availability}
                    </strong>
                  </div>
                </div>
                <div className="donor-actions">
                  <a href={`tel:${donor.phone}`} className="btn btn-primary">
                    <Phone size={16} /> Call
                  </a>
                  <button className="btn btn-outline">
                    <MessageSquare size={16} /> Message
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No donors found</h3>
              <p>Try searching with different filters or blood groups.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindDonor;
