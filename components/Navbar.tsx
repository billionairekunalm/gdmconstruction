"use client";

import React, { useState, useEffect } from "react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      setIsScrolled(scrolled);
      document.body.classList.toggle("scrolled", scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      document.body.classList.remove("scrolled");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleBookingClick = () => {
    closeMenu();
    onOpenBooking();
  };

  return (
    <>
      <nav id="nav" className={`nav-bar ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <a href="/" className="logo" onClick={closeMenu}>
            <img
              className="logo-mark"
              src="/images/gdm-logo.jpg"
              alt="GDM Construction & Roofing logo"
              width={40}
              height={40}
            />
            <span className="logo-titles">
              <span className="logo-text">GDM CONSTRUCTION</span>
              <span className="logo-sub">Roofing &amp; Renovations</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="nav-links desktop-only">
            <a href="/#about">About &amp; Team</a>
            <a href="/#services">Services</a>
            <a href="/#craft">Materials &amp; Roofs</a>
            <a href="/technical-standards">Technical Standards</a>
            <a href="/#work">Projects</a>
            <a href="/#process">How We Work</a>
            <a href="/#reviews">Reviews</a>
            <a href="/#contact">Contact</a>
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

          {/* Mobile Right Controls: Fast Quote + Animated Hamburger */}
          <div className="mobile-nav-actions">
            <button
              type="button"
              className="mobile-quote-btn"
              onClick={onOpenBooking}
              aria-label="Request Free Quote"
            >
              Free Quote
            </button>

            <button
              type="button"
              className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className="toggle-line line-1" />
              <span className="toggle-line line-2" />
              <span className="toggle-line line-3" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-Out Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="drawer-logo">
            <img
              src="/images/gdm-logo.jpg"
              alt="GDM Logo"
              width={34}
              height={34}
              style={{ borderRadius: "50%", border: "1.5px solid var(--amber)", objectFit: "cover" }}
            />
            <div>
              <div style={{ fontWeight: 800, fontSize: "13.5px", color: "var(--ink)", lineHeight: 1.1 }}>GDM CONSTRUCTION</div>
              <div style={{ fontSize: "9.5px", color: "var(--amber-deep)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Roofing &amp; Renovations</div>
            </div>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "20px", height: "20px" }}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="drawer-nav-items">
          <a href="/#about" onClick={closeMenu} className="drawer-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>About Us &amp; Team</span>
          </a>

          <a href="/#services" onClick={closeMenu} className="drawer-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            <span>Our Services</span>
          </a>

          <a href="/#craft" onClick={closeMenu} className="drawer-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Materials &amp; Roof Types</span>
          </a>

          <a href="/technical-standards" onClick={closeMenu} className="drawer-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            <span>SANS 10400 Technical Standards</span>
          </a>

          <a href="/#work" onClick={closeMenu} className="drawer-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span>Recent Work &amp; Projects</span>
          </a>

          <a href="/#process" onClick={closeMenu} className="drawer-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>How We Work</span>
          </a>

          <a href="/#reviews" onClick={closeMenu} className="drawer-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>Customer Reviews</span>
          </a>

          <a href="/#contact" onClick={closeMenu} className="drawer-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Contact &amp; Location</span>
          </a>
        </div>

        {/* Drawer CTAs */}
        <div className="drawer-actions">
          <button
            type="button"
            className="drawer-btn-quote"
            onClick={handleBookingClick}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "17px", height: "17px" }}>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>Request Free Site Quote</span>
          </button>

          <a
            href="https://wa.me/27833662700?text=Hello%20GDM%20Construction,%20I%20would%20like%20to%20request%20a%20free%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="drawer-btn-whatsapp"
            onClick={closeMenu}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "18px", height: "18px" }}>
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.87 7.42 8.6 7.48 8.36 7.74C8.13 8 7.48 8.61 7.48 9.84C7.48 11.07 8.38 12.26 8.5 12.43C8.63 12.6 10.27 15.13 12.78 16.21C13.38 16.47 13.84 16.62 14.2 16.74C14.81 16.93 15.36 16.91 15.8 16.84C16.29 16.77 17.31 16.22 17.52 15.63C17.73 15.04 17.73 14.54 17.67 14.43C17.61 14.33 17.44 14.27 17.19 14.15C16.94 14.02 15.72 13.42 15.49 13.34C15.26 13.25 15.1 13.21 14.93 13.46C14.77 13.7 14.29 14.27 14.15 14.43C14 14.6 13.86 14.62 13.61 14.5C13.36 14.37 12.56 14.11 11.61 13.26C10.87 12.6 10.37 11.78 10.23 11.53C10.08 11.28 10.21 11.15 10.34 11.02C10.45 10.91 10.59 10.73 10.71 10.59C10.84 10.44 10.88 10.34 10.96 10.17C11.04 10 11 9.86 10.94 9.73C10.88 9.61 10.38 8.38 10.18 7.89C9.98 7.41 9.77 7.47 9.61 7.46C9.46 7.45 9.29 7.42 9.04 7.42Z" />
            </svg>
            <span>WhatsApp Us Now</span>
          </a>

          <a
            href="tel:+27833662700"
            className="drawer-btn-phone"
            onClick={closeMenu}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "16px", height: "16px" }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call +27 83 366 2700</span>
          </a>
        </div>

        {/* Drawer Footer Info */}
        <div className="drawer-footer">
          <div className="drawer-info-line">📍 80 North Bezuidenhout Valley, JHB</div>
          <div className="drawer-info-line">🕒 Mon–Sat: 07:30–17:00 · 24/7 Response</div>
        </div>
      </div>
    </>
  );
};
