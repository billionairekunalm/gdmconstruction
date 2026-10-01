import React from "react";

export const TrustBar: React.FC = () => {
  return (
    <div className="trustbar">
      <div className="wrap trustbar-inner">
        <div className="trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          5+ Years Combined Experience
        </div>
        <div className="trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2 4 5.5v6c0 5 3.4 8.6 8 10.5 4.6-1.9 8-5.5 8-10.5v-6L12 2z" />
            <path d="m9 12 2 2 4-4.5" />
          </svg>
          25+ Completed Projects
        </div>
        <div className="trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="5" width="18" height="15" rx="2" />
            <path d="M3 10h18" />
            <path d="M8 3v4M16 3v4" />
          </svg>
          VAT Registered Contractor
        </div>
        <div className="trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 2 4.5 13.5H11l-1 8.5L18.5 10H12l1-8z" />
          </svg>
          24/7 Emergency Storm Call-Outs
        </div>
        <div className="trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 12h6M12 9v6" />
            <circle cx="12" cy="12" r="9" />
          </svg>
          Free Quotes (Main Service Area)
        </div>
      </div>
    </div>
  );
};
