"use client";

import React, { useRef, useEffect } from "react";

interface HeroProps {
  onOpenBooking: () => void;
  onOpenEstimate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenEstimate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay waiting for user interaction");
      });
    }
  }, []);

  return (
    <header className="hero" id="top">
      {/* Background Drone Video & Gradient Shading */}
      <video
        ref={videoRef}
        id="heroVideo"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        <source
          src="https://res.cloudinary.com/dpxyvxb9a/video/upload/q_auto:eco,w_1600,c_limit/v1786855217/0816_q2rqxm.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-shade"></div>
      <div className="hero-veil"></div>

      <div className="hero-reveal">
        {/* 1. Refined Eyebrow Badge */}
        <div className="hero-badge">
          <div className="hero-badge-primary">
            <span className="hero-badge-dot" />
            <span className="hero-badge-highlight">VAT Registered Contractor</span>
          </div>

          <span className="hero-badge-sep">•</span>

          <div className="hero-badge-meta">
            <span className="hero-badge-sub-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="hero-badge-icon" style={{ width: "13px", height: "13px" }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Johannesburg &amp; Gauteng</span>
            </span>

            <span className="hero-badge-sub-sep">·</span>

            <span className="hero-badge-sub-item hero-badge-status">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="hero-badge-icon" style={{ width: "12px", height: "12px" }}>
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span>24/7 Rapid Response</span>
            </span>
          </div>
        </div>

        {/* 2. Bold, Grand Brand Title */}
        <h1 className="hero-title">
          GDM CONSTRUCTION{" "}
          <span className="hero-title-accent">&amp; ROOFING</span>
          <span className="hero-title-sub">(PTY) LTD</span>
        </h1>

        {/* 3. Core Specialization Tagline */}
        <p className="hero-tagline">
          Construction, Turnkey Renovations &amp; Specialist Roofing in Johannesburg
        </p>

        {/* 4. Value Proposition */}
        <p className="hero-description">
          Johannesburg’s trusted partner for new IBR &amp; tile roof installations, flawless Rhinolite ceilings, expert painting, and master-crafted residential &amp; commercial renovations.
        </p>

        {/* 5. Streamlined Dual Call-to-Actions */}
        {/* 5. Streamlined Dual Call-to-Actions */}
        <div className="hero-cta-group">
          <button
            type="button"
            className="hero-btn-primary"
            onClick={onOpenBooking}
          >
            <span>Request Free Site Quote</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hero-btn-icon"
              style={{ width: "18px", height: "18px" }}
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <div className="hero-cta-secondary">
            <a
              href="https://wa.me/27833662700?text=Hello%20GDM%20Construction,%20I%20would%20like%20to%20request%20a%20free%20site%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-whatsapp"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hero-btn-icon-wa"
                style={{ width: "20px", height: "20px" }}
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.87 7.42 8.6 7.48 8.36 7.74C8.13 8 7.48 8.61 7.48 9.84C7.48 11.07 8.38 12.26 8.5 12.43C8.63 12.6 10.27 15.13 12.78 16.21C13.38 16.47 13.84 16.62 14.2 16.74C14.81 16.93 15.36 16.91 15.8 16.84C16.29 16.77 17.31 16.22 17.52 15.63C17.73 15.04 17.73 14.54 17.67 14.43C17.61 14.33 17.44 14.27 17.19 14.15C16.94 14.02 15.72 13.42 15.49 13.34C15.26 13.25 15.1 13.21 14.93 13.46C14.77 13.7 14.29 14.27 14.15 14.43C14 14.6 13.86 14.62 13.61 14.5C13.36 14.37 12.56 14.11 11.61 13.26C10.87 12.6 10.37 11.78 10.23 11.53C10.08 11.28 10.21 11.15 10.34 11.02C10.45 10.91 10.59 10.73 10.71 10.59C10.84 10.44 10.88 10.34 10.96 10.17C11.04 10 11 9.86 10.94 9.73C10.88 9.61 10.38 8.38 10.18 7.89C9.98 7.41 9.77 7.47 9.61 7.46C9.46 7.45 9.29 7.42 9.04 7.42Z" />
              </svg>
              <span>WhatsApp Us Now</span>
            </a>

            <a
              href="tel:+27833662700"
              className="hero-btn-call"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hero-btn-icon-call"
                style={{ width: "17px", height: "17px" }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+27 83 366 2700</span>
            </a>
          </div>
        </div>

        {/* 6. Refined Glassmorphic Trust Ribbon (Sleek, Uncluttered, Balanced) */}
        <div className="hero-trust-ribbon">
          <div className="ribbon-item">
            <span className="ribbon-num">5+</span>
            <span className="ribbon-label">Years Experience</span>
          </div>
          <div className="ribbon-divider" />
          <div className="ribbon-item">
            <span className="ribbon-num">25+</span>
            <span className="ribbon-label">Projects Completed</span>
          </div>
          <div className="ribbon-divider" />
          <div className="ribbon-item">
            <span className="ribbon-num" style={{ color: "#22c55e" }}>24/7</span>
            <span className="ribbon-label">Storm Leak Dispatch</span>
          </div>
          <div className="ribbon-divider" />
          <div className="ribbon-item">
            <span className="ribbon-num" style={{ color: "#60a5fa" }}>100% Free</span>
            <span className="ribbon-label">Site Consultations</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="line"></div>
      </div>
    </header>
  );
};
