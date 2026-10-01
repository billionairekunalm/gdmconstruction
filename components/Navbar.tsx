"use client";

import React, { useEffect } from "react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  useEffect(() => {
    const handleScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      document.body.classList.remove("scrolled");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="logo" style={{ gap: "12px" }}>
          <img
            className="logo-mark"
            src="/images/gdm-logo.jpg"
            alt="GDM Construction & Roofing logo"
            width={44}
            height={44}
            style={{ borderRadius: "50%", border: "1.5px solid var(--amber)", objectFit: "cover" }}
          />
          <span>
            <span className="logo-text">GDM CONSTRUCTION &amp; ROOFING</span>
            <span className="logo-sub">Construction &amp; Renovations</span>
          </span>
        </a>

        <div className="nav-links">
          <a href="#about">About &amp; Team</a>
          <a href="#services">Services</a>
          <a href="#craft">Materials &amp; Roofs</a>
          <a href="#work">Projects</a>
          <a href="#process">How We Work</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
          <button
            type="button"
            className="btn btn-amber nav-cta open-booking"
            onClick={onOpenBooking}
          >
            <span className="cta-label">Get a Free Quote</span>
            <span className="cta-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
