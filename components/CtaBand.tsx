"use client";

import React from "react";

interface CtaBandProps {
  onOpenBooking: () => void;
  onOpenEstimate?: () => void;
}

const TRUST_PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
    title: "10-Year Warranty",
    desc: "Written structural guarantee",
    badge: "Guaranteed",
    color: "#f59e0b",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 2v11h3v9l7-12h-4l4-8z" />
      </svg>
    ),
    title: "24/7 Storm Response",
    desc: "Highveld emergency dispatch",
    badge: "24/7 Live",
    color: "#38bdf8",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    title: "SANS 10400 Certified",
    desc: "Strict SABS building code",
    badge: "Compliant",
    color: "#10b981",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    title: "Free On-Site Quote",
    desc: "Zero call-out fee in main areas",
    badge: "No Obligation",
    color: "#a855f7",
  },
];

export const CtaBand: React.FC<CtaBandProps> = ({ onOpenBooking }) => {
  return (
    <section className="cta-band" id="contact" aria-label="Built to Last Guarantee and Direct Consultation">
      {/* Cinematic Backdrop with Depth Gradient */}
      <div className="cta-band-bg" aria-hidden="true">
        <img
          loading="lazy"
          alt="GDM Construction and Roofing craftsmanship in Johannesburg"
          src="/images/cta-aerial.jpg"
          className="cta-band-img"
        />
        <div className="cta-band-gradient-scrim" />
      </div>

      <div className="wrap">
        <div className="cta-band-inner">
          {/* Eyebrow Badge with Shield Icon */}
          <div className="cta-eyebrow-pill">
            <span className="cta-eyebrow-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "13px", height: "13px" }}>
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            </span>
            <span>Built to Last · Delivered with Integrity</span>
          </div>

          {/* Main Title */}
          <h2 className="cta-headline">
            A roof &amp; building contractor you can actually count on.
          </h2>

          <p className="cta-subheading">
            Specialist roofing, flawless Rhinolite ceilings, and turnkey renovations across Johannesburg. Backed by written workmanship warranties, certified South African building materials, and zero shortcuts.
          </p>

          {/* 4 Trust Guarantee Pillars Grid */}
          <div className="cta-trust-grid">
            {TRUST_PILLARS.map((pillar, idx) => (
              <div key={idx} className="cta-trust-card">
                <div className="cta-trust-header">
                  <div
                    className="cta-trust-icon-box"
                    style={{ color: pillar.color, backgroundColor: `${pillar.color}18`, borderColor: `${pillar.color}35` }}
                  >
                    {pillar.icon}
                  </div>
                  <span className="cta-trust-badge">{pillar.badge}</span>
                </div>
                <div className="cta-trust-title">{pillar.title}</div>
                <div className="cta-trust-desc">{pillar.desc}</div>
              </div>
            ))}
          </div>

          {/* Action Button Strip */}
          <div className="cta-actions-cluster">
            <button
              type="button"
              className="btn btn-amber btn-lg cta-booking-btn"
              onClick={onOpenBooking}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "18px", height: "18px" }}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>Request Free Site Inspection</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="cta-arrow-slide" style={{ width: "15px", height: "15px" }}>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <a
              href="https://wa.me/27833662700?text=Hello%20GDM%20Construction,%20I%20would%20like%20to%20request%20a%20free%20quote%20under%20your%20Built%20to%20Last%20guarantee."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg cta-whatsapp-btn"
            >
              <svg viewBox="0 0 24 24" fill="#25D366" style={{ width: "20px", height: "20px", flexShrink: 0 }}>
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.87 7.42 8.6 7.48 8.36 7.74C8.13 8 7.48 8.61 7.48 9.84C7.48 11.07 8.38 12.26 8.5 12.43C8.63 12.6 10.27 15.13 12.78 16.21C13.38 16.47 13.84 16.62 14.2 16.74C14.81 16.93 15.36 16.91 15.8 16.84C16.29 16.77 17.31 16.22 17.52 15.63C17.73 15.04 17.73 14.54 17.67 14.43C17.61 14.33 17.44 14.27 17.19 14.15C16.94 14.02 15.72 13.42 15.49 13.34C15.26 13.25 15.1 13.21 14.93 13.46C14.77 13.7 14.29 14.27 14.15 14.43C14 14.6 13.86 14.62 13.61 14.5C13.36 14.37 12.56 14.11 11.61 13.26C10.87 12.6 10.37 11.78 10.23 11.53C10.08 11.28 10.21 11.15 10.34 11.02C10.45 10.91 10.59 10.73 10.71 10.59C10.84 10.44 10.88 10.34 10.96 10.17C11.04 10 11 9.86 10.94 9.73C10.88 9.61 10.38 8.38 10.18 7.89C9.98 7.41 9.77 7.47 9.61 7.46C9.46 7.45 9.29 7.42 9.04 7.42Z" />
              </svg>
              <span>WhatsApp +27 83 366 2700</span>
              <span className="cta-online-dot" title="Online for inquiries" />
            </a>
          </div>

          {/* Trust Metadata Micro-Banner */}
          <div className="cta-trust-metrics">
            <span className="cta-metric-item">
              <span className="cta-star-row">⭐⭐⭐⭐⭐</span>
              <strong>5.0 Star Rated</strong> (25+ Gauteng Reviews)
            </span>
            <span className="cta-metric-sep">·</span>
            <span className="cta-metric-item">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "14px", height: "14px", color: "#10b981" }}>
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
              Average Response Time: <strong>&lt; 15 Minutes</strong>
            </span>
            <span className="cta-metric-sep">·</span>
            <span className="cta-metric-item">
              VAT Registered Contractor #4120309854
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
