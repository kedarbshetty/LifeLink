import React from 'react';
import { Info, CheckCircle, XCircle, Coffee, Activity, Moon } from 'lucide-react';
import './Guidelines.css';

const Guidelines = () => {
  return (
    <div className="guidelines-page">
      <div className="page-header">
        <div className="container">
          <h1>Donation Guidelines</h1>
          <p>Important information to ensure a safe and successful blood donation.</p>
        </div>
      </div>

      <div className="container section">
        <div className="guidelines-grid">
          <div className="guideline-section">
            <h2><CheckCircle className="text-primary" /> Eligibility Criteria</h2>
            <ul className="guideline-list">
              <li>
                <strong>Age:</strong> You must be between 18 and 65 years old.
              </li>
              <li>
                <strong>Weight:</strong> You should weigh at least 45 kg.
              </li>
              <li>
                <strong>Health:</strong> You must be in good general health at the time of donation.
              </li>
              <li>
                <strong>Hemoglobin:</strong> Your hemoglobin level must be at least 12.5 g/dL.
              </li>
            </ul>
          </div>

          <div className="guideline-section">
            <h2><XCircle className="text-primary" /> Who Cannot Donate</h2>
            <ul className="guideline-list negative">
              <li>Individuals with fever, cold or flu symptoms.</li>
              <li>Pregnant women or breastfeeding mothers.</li>
              <li>People who have had a tattoo or piercing in the last 6 months.</li>
              <li>Individuals with chronic diseases like HIV, Hepatitis, or Cancer.</li>
              <li>If you have taken antibiotics in the last 48 hours.</li>
            </ul>
          </div>
        </div>

        <div className="preparation-section card">
          <h2>How to Prepare for Donation</h2>
          <div className="prep-grid">
            <div className="prep-item">
              <Coffee size={32} className="text-primary" />
              <h3>Eat Well</h3>
              <p>Have a healthy meal before you donate. Avoid fatty foods.</p>
            </div>
            <div className="prep-item">
              <Activity size={32} className="text-primary" />
              <h3>Stay Hydrated</h3>
              <p>Drink plenty of water (at least 500ml) before your appointment.</p>
            </div>
            <div className="prep-item">
              <Moon size={32} className="text-primary" />
              <h3>Sleep Well</h3>
              <p>Ensure you get at least 7-8 hours of sleep the night before.</p>
            </div>
          </div>
        </div>

        <div className="post-care card">
          <h2>Post-Donation Care</h2>
          <p>After donating blood, follow these simple steps to recover quickly:</p>
          <ul className="check-list">
            <li>Drink extra fluids for the next 24 hours.</li>
            <li>Keep the bandage on for at least 4 hours.</li>
            <li>Avoid heavy lifting or vigorous exercise for the rest of the day.</li>
            <li>Eat iron-rich foods like spinach, beans, and red meat.</li>
            <li>If you feel lightheaded, lie down with your feet elevated.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
