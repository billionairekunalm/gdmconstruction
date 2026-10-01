import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="wrap footer-inner">
        <a href="#top" className="logo" style={{ gap: "10px" }}>
          <img
            className="logo-mark"
            src="/images/gdm-logo.jpg"
            alt="GDM Construction and Roofing logo"
            width={34}
            height={34}
            style={{ borderRadius: "50%", border: "1.5px solid var(--amber)", objectFit: "cover" }}
          />
          <span className="logo-text">GDM CONSTRUCTION &amp; ROOFING</span>
        </a>

        <div className="footer-right">
          <a
            href="https://wa.me/27833662700?text=Hello%20GDM%20Construction,%20I%20would%20like%20to%20request%20a%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="Chat with GDM on WhatsApp"
            style={{ background: "#25D366", borderColor: "#25D366" }}
          >
            <svg viewBox="0 0 24 24" fill="#ffffff" style={{ width: "18px", height: "18px" }}>
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.87 7.42 8.6 7.48 8.36 7.74C8.13 8 7.48 8.61 7.48 9.84C7.48 11.07 8.38 12.26 8.5 12.43C8.63 12.6 10.27 15.13 12.78 16.21C13.38 16.47 13.84 16.62 14.2 16.74C14.81 16.93 15.36 16.91 15.8 16.84C16.29 16.77 17.31 16.22 17.52 15.63C17.73 15.04 17.73 14.54 17.67 14.43C17.61 14.33 17.44 14.27 17.19 14.15C16.94 14.02 15.72 13.42 15.49 13.34C15.26 13.25 15.1 13.21 14.93 13.46C14.77 13.7 14.29 14.27 14.15 14.43C14 14.6 13.86 14.62 13.61 14.5C13.36 14.37 12.56 14.11 11.61 13.26C10.87 12.6 10.37 11.78 10.23 11.53C10.08 11.28 10.21 11.15 10.34 11.02C10.45 10.91 10.59 10.73 10.71 10.59C10.84 10.44 10.88 10.34 10.96 10.17C11.04 10 11 9.86 10.94 9.73C10.88 9.61 10.38 8.38 10.18 7.89C9.98 7.41 9.77 7.47 9.61 7.46C9.46 7.45 9.29 7.42 9.04 7.42Z" />
            </svg>
          </a>
          <p className="footer-note">
            © 2026 GDM Construction and Roofing (Pty) Ltd · VAT Registered · 80 North Bezuidenhout Valley 2094, Johannesburg
          </p>
        </div>
      </div>
    </footer>
  );
};
