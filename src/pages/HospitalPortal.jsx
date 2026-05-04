import React, { useState } from 'react';
import { LogIn, LayoutDashboard, Users, Calendar, Settings, LogOut, Search, Plus } from 'lucide-react';
import { donors } from '../data/donors';
import { campaigns } from '../data/campaigns';
import './HospitalPortal.css';

const HospitalPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock authentication
    if (email === 'admin@cityhospital.com' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials. Try admin@cityhospital.com / password");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-page">
        <div className="login-card card fade-in">
          <div className="login-header">
            <LogIn size={40} className="text-primary" />
            <h2>Hospital Login</h2>
            <p>Access your dashboard to manage donors and campaigns.</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="admin@hospital.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary full-width">Login to Portal</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="portal-layout">
      {/* Sidebar */}
      <aside className="portal-sidebar">
        <div className="sidebar-header">
          <h3>Hospital Admin</h3>
          <p>City Hospital, Mumbai</p>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={20} /> Dashboard
          </button>
          <button 
            className={`nav-item ${activeTab === 'donors' ? 'active' : ''}`}
            onClick={() => setActiveTab('donors')}
          >
            <Users size={20} /> Manage Donors
          </button>
          <button 
            className={`nav-item ${activeTab === 'campaigns' ? 'active' : ''}`}
            onClick={() => setActiveTab('campaigns')}
          >
            <Calendar size={20} /> Campaigns
          </button>
          <button 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={20} /> Settings
          </button>
        </nav>
        <button className="nav-item logout" onClick={() => setIsLoggedIn(false)}>
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="portal-content">
        <header className="content-header">
          <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
          <div className="header-actions">
            <div className="search-bar">
              <Search size={18} />
              <input type="text" placeholder="Search..." />
            </div>
            <button className="btn btn-primary"><Plus size={18} /> New Campaign</button>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <div className="dashboard-view fade-in">
            <div className="stats-grid">
              <div className="card stat-mini">
                <p>Total Donors</p>
                <h3>1,284</h3>
              </div>
              <div className="card stat-mini">
                <p>Requests Pending</p>
                <h3>12</h3>
              </div>
              <div className="card stat-mini">
                <p>Units Available</p>
                <h3>450</h3>
              </div>
              <div className="card stat-mini">
                <p>Active Campaigns</p>
                <h3>3</h3>
              </div>
            </div>

            <div className="dashboard-grid">
              <div className="card table-card">
                <h3>Recent Donors</h3>
                <table className="portal-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Blood Group</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donors.slice(0, 5).map(donor => (
                      <tr key={donor.id}>
                        <td>{donor.name}</td>
                        <td><span className="blood-tag">{donor.bloodGroup}</span></td>
                        <td>{donor.lastDonated}</td>
                        <td><span className="status-dot online"></span> Verified</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card list-card">
                <h3>Active Campaigns</h3>
                <div className="mini-list">
                  {campaigns.map(camp => (
                    <div key={camp.id} className="mini-item">
                      <div className="item-info">
                        <h4>{camp.title}</h4>
                        <p>{camp.date}</p>
                      </div>
                      <span className="badge">Active</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'donors' && (
          <div className="donors-view fade-in">
            <div className="card table-card">
              <table className="portal-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Blood Group</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {donors.map(donor => (
                    <tr key={donor.id}>
                      <td>{donor.name}</td>
                      <td><span className="blood-tag">{donor.bloodGroup}</span></td>
                      <td>{donor.city}</td>
                      <td>{donor.phone}</td>
                      <td><span className="status-dot online"></span> Available</td>
                      <td>
                        <button className="text-btn">Edit</button>
                        <button className="text-btn delete">Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default HospitalPortal;
