"use client";

import React from "react";

interface MeetJordanProps {
  onOpenBooking: () => void;
}

export const MeetJordan: React.FC<MeetJordanProps> = ({ onOpenBooking }) => {
  return (
    <section className="jordan" id="about">
      <div className="wrap jordan-grid">
        <div className="jv-col">
          <div className="jv-frame" style={{ borderRadius: "20px", overflow: "hidden" }}>
            <img
              className="jv-poster"
              alt="GDM Construction & Roofing team on site"
              src="/images/gallery-crew-team.jpg"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <span className="jv-badge">
              <span className="live"></span> Dedicated Team · Johannesburg
            </span>
          </div>
          <div className="jv-caption" style={{ marginTop: "16px" }}>
            Hands-on supervision on every building, renovation, and roofing project.
          </div>

          <div
            style={{
              background: "var(--white)",
              border: "1px solid var(--line)",
              borderRadius: "16px",
              padding: "20px",
              marginTop: "18px",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--amber-deep)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "12px",
              }}
            >
              Meet Our Core Team
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong style={{ fontSize: "15px", color: "var(--ink)" }}>Clayton</strong>
                  <div style={{ fontSize: "12.5px", color: "var(--ink-soft)" }}>Senior Roofing &amp; Construction Lead</div>
                </div>
                <span
                  style={{
                    background: "var(--cream-deep)",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--amber-deep)",
                  }}
                >
                  20 Years Exp
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong style={{ fontSize: "15px", color: "var(--ink)" }}>Ronald</strong>
                  <div style={{ fontSize: "12.5px", color: "var(--ink-soft)" }}>Renovations, Ceilings &amp; Tiling Specialist</div>
                </div>
                <span
                  style={{
                    background: "var(--cream-deep)",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--amber-deep)",
                  }}
                >
                  6 Years Exp
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong style={{ fontSize: "15px", color: "var(--ink)" }}>Clifford</strong>
                  <div style={{ fontSize: "12.5px", color: "var(--ink-soft)" }}>Waterproofing &amp; Structural Tradesman</div>
                </div>
                <span
                  style={{
                    background: "var(--cream-deep)",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--amber-deep)",
                  }}
                >
                  4 Years Exp
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="jordan-body">
          <div className="eyebrow">Our Story &amp; Values</div>
          <h2>Building an honest business from the ground up.</h2>
          <p>
            GDM Construction &amp; Roofing was built on hard work, dedication, and genuine pride in craftsmanship.
          </p>
          <p className="jordan-pull">
            &ldquo;I was working for another company, then I asked myself — <em>why can&apos;t I do my own?</em> So I started GDM: to make an honest living, deliver better quality to homeowners, and proudly support my kids, family, and parents.&rdquo;
          </p>
          <p>
            Today, GDM operates as a full-service general building and renovation contractor across Johannesburg. Whether you need a brand-new roof, Rhinolite skimmed ceilings, a kitchen revamp, or emergency leak repairs, our team gives every job the exact same care and meticulous attention.
          </p>

          <ul className="jordan-free">
            <li>
              <span className="tick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <b>Free site inspections &amp; quotes</b> within our main service areas
            </li>
            <li>
              <span className="tick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <b>VAT Registered &amp; fully compliant contractor</b>
            </li>
            <li>
              <span className="tick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <b>24/7 emergency storm damage &amp; leak call-outs</b>
            </li>
          </ul>

          <div className="jordan-sig">
            <div className="jordan-sig-name">— The GDM Team</div>
            <div className="jordan-sig-role">GDM Construction &amp; Roofing (Pty) Ltd</div>
          </div>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "24px" }}>
            <button type="button" className="btn btn-amber open-booking" onClick={onOpenBooking}>
              Request Site Inspection
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                style={{ width: "16px", height: "16px" }}
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <a
              href="https://wa.me/27833662700?text=Hello%20GDM%20Construction,%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              WhatsApp Us (+27 83 366 2700)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
