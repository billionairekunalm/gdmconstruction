"use client";

import React from "react";
import Link from "next/link";

interface TechnicalStandardsGatewayProps {
  onOpenBooking?: () => void;
}

export const TechnicalStandardsGateway: React.FC<TechnicalStandardsGatewayProps> = () => {
  return (
    <div className="standards-quick-row">
      <div className="wrap standards-quick-wrap">
        <Link href="/technical-standards" className="standards-quick-btn">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            className="standards-btn-ic"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          <span>View SANS 10400 Technical Standards &amp; Architecture</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            className="standards-btn-arrow"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </div>
  );
};
