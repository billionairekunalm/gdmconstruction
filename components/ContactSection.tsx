import React from "react";

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-center">
        <div>
          <div className="eyebrow" style={{ color: "var(--amber)", justifyContent: "center" }}>
            Get In Touch
          </div>
          <h2>Your free on-site quote is one message away.</h2>
          <p className="lede">
            Tell us about your roofing, ceiling, or building project. We schedule free on-site inspections across our primary Johannesburg service areas.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              className="btn btn-amber btn-lg open-booking"
              onClick={onOpenBooking}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ width: "18px", height: "18px" }}
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Book Site Inspection Online
            </button>
            <a
              href="https://wa.me/27833662700?text=Hello%20GDM%20Construction,%20I%20would%20like%20to%20request%20a%20free%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
              style={{
                borderColor: "#25D366",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <svg viewBox="0 0 24 24" fill="#25D366" style={{ width: "20px", height: "20px" }}>
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.87 7.42 8.6 7.48 8.36 7.74C8.13 8 7.48 8.61 7.48 9.84C7.48 11.07 8.38 12.26 8.5 12.43C8.63 12.6 10.27 15.13 12.78 16.21C13.38 16.47 13.84 16.62 14.2 16.74C14.81 16.93 15.36 16.91 15.8 16.84C16.29 16.77 17.31 16.22 17.52 15.63C17.73 15.04 17.73 14.54 17.67 14.43C17.61 14.33 17.44 14.27 17.19 14.15C16.94 14.02 15.72 13.42 15.49 13.34C15.26 13.25 15.1 13.21 14.93 13.46C14.77 13.7 14.29 14.27 14.15 14.43C14 14.6 13.86 14.62 13.61 14.5C13.36 14.37 12.56 14.11 11.61 13.26C10.87 12.6 10.37 11.78 10.23 11.53C10.08 11.28 10.21 11.15 10.34 11.02C10.45 10.91 10.59 10.73 10.71 10.59C10.84 10.44 10.88 10.34 10.96 10.17C11.04 10 11 9.86 10.94 9.73C10.88 9.61 10.38 8.38 10.18 7.89C9.98 7.41 9.77 7.47 9.61 7.46C9.46 7.45 9.29 7.42 9.04 7.42Z" />
              </svg>
              WhatsApp (+27 83 366 2700)
            </a>
          </div>

          <div className="contact-meta-center">
            <a href="tel:+27833662700">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
              </svg>
              +27 83 366 2700
            </a>
            <a href="mailto:contact@gdmconstruction.co.za">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              contact@gdmconstruction.co.za
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=80+North+Bezuidenhout+Valley+2094+Johannesburg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              80 North Bezuidenhout Valley 2094, Johannesburg
            </a>
          </div>

          {/* Business Hours & Service Areas */}
          <div
            style={{
              marginTop: "32px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              textAlign: "left",
              background: "var(--white)",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid var(--line)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--amber-deep)",
                  marginBottom: "8px",
                }}
              >
                🕒 Business &amp; Emergency Hours
              </div>
              <p style={{ fontSize: "14px", margin: "4px 0", color: "var(--ink)" }}>
                <strong>Monday – Saturday:</strong> 07:30 – 17:00
              </p>
              <p style={{ fontSize: "14px", margin: "4px 0", color: "var(--ink-soft)" }}>
                <strong>Sunday:</strong> Closed
              </p>
              <p style={{ fontSize: "13.5px", margin: "8px 0 0", color: "#16a34a", fontWeight: 600 }}>
                ⚡ Emergency Call-Outs: 24/7 Available (Storms &amp; Active Leaks)
              </p>
            </div>

            <div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--amber-deep)",
                  marginBottom: "8px",
                }}
              >
                📍 Main Service Areas
              </div>
              <p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "var(--ink-soft)", margin: 0 }}>
                Bedfordview, Sandton, Edenvale, Randburg, Houghton, Fourways, Wendywood, Orange Grove, and greater Johannesburg.
              </p>
              <small style={{ fontSize: "12px", color: "var(--ink-mute)", display: "block", marginTop: "6px" }}>
                *Free quotes in main service areas; nominal travel fee for distant locations.
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
