"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="wrap">
        {/* Top Brand & Navigation Tier */}
        <div className="footer-top-tier">
          <div className="footer-brand-col">
            <a href="#top" className="footer-brand-logo" aria-label="Back to top">
              <img
                className="footer-logo-img"
                src="/images/gdm-logo.jpg"
                alt="GDM Construction & Roofing logo"
                width={38}
                height={38}
              />
              <div className="footer-brand-text">
                <span className="footer-brand-title">GDM CONSTRUCTION &amp; ROOFING</span>
                <span className="footer-brand-subtitle">General Building, Roofing &amp; Turnkey Renovations · Johannesburg</span>
              </div>
            </a>
          </div>

          <nav className="footer-nav-links" aria-label="Footer navigation">
            <a href="#services" className="footer-nav-link">Our Services</a>
            <a href="#projects" className="footer-nav-link">Recent Work</a>
            <a href="#follow" className="footer-nav-link">Site Reels</a>
            <a href="/technical-standards" className="footer-nav-link">SANS 10400 Standards</a>
            <a href="#top" className="footer-back-top" aria-label="Scroll back to top">
              <span>Back to Top</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "13px", height: "13px" }}>
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </a>
          </nav>
        </div>

        {/* Middle Trust & Compliance Metadata Strip */}
        <div className="footer-meta-strip">
          <div className="footer-meta-pill">
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "13px", height: "13px", color: "var(--amber)", flexShrink: 0 }}>
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            <span>VAT Registered #4120309854</span>
          </div>

          <div className="footer-meta-pill">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "13px", height: "13px", color: "var(--amber)", flexShrink: 0 }}>
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>80 North Bezuidenhout Valley 2094, Johannesburg</span>
          </div>

          <div className="footer-meta-pill">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "13px", height: "13px", color: "var(--amber)", flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Mon–Sat: 07:30–17:00 · 24/7 Storm Response</span>
          </div>
        </div>

        {/* Bottom Legal & Compliance Row */}
        <div className="footer-bottom-row">
          <p className="footer-legal">
            © {new Date().getFullYear()} GDM Construction and Roofing (Pty) Ltd. All rights reserved.
          </p>
          <p className="footer-compliance">
            Operating strictly under SANS 10400 &amp; NHBRC architectural quality specifications.
          </p>
        </div>
      </div>
    </footer>
  );
};
