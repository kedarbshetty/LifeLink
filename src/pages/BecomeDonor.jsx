import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, User, Phone, MapPin, Droplet, CreditCard, ShieldCheck } from 'lucide-react';
import './BecomeDonor.css';

const BecomeDonor = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bloodGroup: '',
    city: '',
    aadhaar: '',
    dob: '',
    lastDonated: '',
  });

  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVerifyAadhaar = () => {
    if (formData.aadhaar.length !== 12) {
      alert("Please enter a valid 12-digit Aadhaar number");
      return;
    }
    setIsVerifying(true);
    // Mock verification delay
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
      setTimeout(() => setStep(2), 1000);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4); // Success step
    console.log("Donor Registered:", formData);
  };

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <div className="become-donor-page">
      <div className="page-header">
        <div className="container">
          <h1>Become a Life Saver</h1>
          <p>Join our community of donors and make a difference.</p>
        </div>
      </div>

      <div className="container form-container">
        <div className="stepper">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`step-item ${step >= s ? 'active' : ''} ${step > s ? 'completed' : ''}`}>
              <div className="step-number">{step > s ? <CheckCircle2 size={18} /> : s}</div>
              <span className="step-label">{s === 1 ? 'Verification' : s === 2 ? 'Personal Info' : 'Donation Details'}</span>
            </div>
          ))}
        </div>

        <div className="form-card card">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="form-step"
              >
                <h2><ShieldCheck className="text-primary" /> Aadhaar Verification</h2>
                <p>To ensure authenticity, we verify all donors via Aadhaar.</p>
                <div className="form-group">
                  <label><CreditCard size={18} /> Aadhaar Number</label>
                  <input 
                    type="text" 
                    name="aadhaar"
                    placeholder="1234 5678 9012"
                    maxLength="12"
                    value={formData.aadhaar}
                    onChange={handleChange}
                    disabled={isVerified}
                  />
                </div>
                <button 
                  className={`btn btn-primary full-width ${isVerifying ? 'loading' : ''}`}
                  onClick={handleVerifyAadhaar}
                  disabled={isVerifying || isVerified}
                >
                  {isVerifying ? 'Verifying...' : isVerified ? 'Verified Successfully!' : 'Verify Aadhaar'}
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="form-step"
              >
                <h2><User className="text-primary" /> Personal Information</h2>
                <div className="grid-2">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Mumbai" />
                </div>
                <div className="form-actions">
                  <button className="btn btn-outline" onClick={() => setStep(1)}>Back</button>
                  <button className="btn btn-primary" onClick={() => setStep(3)}>Next Step</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="form-step"
              >
                <h2><Droplet className="text-primary" /> Donation Details</h2>
                <div className="form-group">
                  <label>Blood Group</label>
                  <div className="blood-selector">
                    {bloodGroups.map(bg => (
                      <button 
                        key={bg}
                        className={`blood-btn ${formData.bloodGroup === bg ? 'selected' : ''}`}
                        onClick={() => setFormData({...formData, bloodGroup: bg})}
                      >
                        {bg}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label>Last Donated (Optional)</label>
                  <input type="date" name="lastDonated" value={formData.lastDonated} onChange={handleChange} />
                </div>
                <div className="form-actions">
                  <button className="btn btn-outline" onClick={() => setStep(2)}>Back</button>
                  <button className="btn btn-primary" onClick={handleSubmit}>Complete Registration</button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="success-message"
              >
                <div className="success-icon"><CheckCircle2 size={80} /></div>
                <h2>Registration Complete!</h2>
                <p>Thank you for becoming a donor. Your profile is now visible to those in need.</p>
                <button className="btn btn-primary" onClick={() => window.location.href = '/'}>Go to Home</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default BecomeDonor;
