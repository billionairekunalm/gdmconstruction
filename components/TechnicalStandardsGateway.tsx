"use client";

import React from "react";
import Link from "next/link";

interface TechnicalStandardsGatewayProps {
  onOpenBooking?: () => void;
}

export const TechnicalStandardsGateway: React.FC<TechnicalStandardsGatewayProps> = ({ onOpenBooking }) => {
  return (
    <section className="tech-gateway-section" id="standards-gateway">
      <div className="wrap tech-gateway-container">
        <div className="tech-gateway-card">
          <div className="tech-gateway-badge-row">
            <div className="tech-gateway-badge">
              <span className="tech-gateway-dot" />
              <span>SANS 10400 Architectural Portal</span>
            </div>
            <span className="tech-gateway-tag">South African Building Codes</span>
          </div>

          <div className="tech-gateway-body">
            <div className="tech-gateway-text">
              <h3 className="tech-gateway-title">
                Technical Standards, Engineering Matrices &amp; Craftsmanship Sequences
              </h3>
              <p className="tech-gateway-desc">
                Looking for exact technical specifications, material tolerances, and step-by-step installation methodologies? Inspect our complete 3-layer craftsmanship sequences for IBR steel sheeting, Marley concrete tiles, Rhinolite ceilings, and heat-fused torch-on waterproofing.
              </p>
              
              <div className="tech-gateway-highlights">
                <div className="tech-gh-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="tech-gh-icon">
                    <path d="M12 2 4 5.5v6c0 5 3.4 8.6 8 10.5 4.6-1.9 8-5.5 8-10.5v-6L12 2z" />
                    <path d="m9 12 2 2 4-4.5" />
                  </svg>
                  <span>SANS 10400 Engineering Matrix</span>
                </div>
                <div className="tech-gh-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="tech-gh-icon">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                  <span>3-Layer Craftsmanship Sequence</span>
                </div>
                <div className="tech-gh-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="tech-gh-icon">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Quality Defense &amp; Prevention Protocols</span>
                </div>
              </div>
            </div>

            <div className="tech-gateway-cta-box">
              <Link
                href="/technical-standards"
                className="tech-gateway-primary-link"
              >
                <span>View Full Standards &amp; Sequences</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tech-link-arrow"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              
              <button
                type="button"
                className="tech-gateway-secondary-btn"
                onClick={onOpenBooking}
              >
                <span>Book Technical Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
