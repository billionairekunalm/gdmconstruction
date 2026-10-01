import React from "react";

export const Services: React.FC = () => {
  return (
    <section id="services">
      <div className="wrap">
        <div className="services-head">
          <div>
            <div className="eyebrow">Our Full Service Capabilities</div>
            <h2>
              General building, renovations
              <br />
              &amp; roofing done right.
            </h2>
          </div>
          <p className="lede">
            GDM is a full-service general building and renovation contractor. While roofing is one of our flagship specialties, we offer comprehensive turnkey solutions for residential, estate, and commercial properties.
          </p>
        </div>

        {/* Priority Focus Services */}
        <div style={{ marginBottom: "28px" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--amber-deep)",
              marginBottom: "16px",
            }}
          >
            ★ Core Priority Specializations
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Priority 1: New Roof Installations */}
            <div
              className="svc"
              style={{
                border: "2px solid var(--amber)",
                boxShadow: "0 10px 30px rgba(47, 127, 224, 0.15)",
              }}
            >
              <div className="svc-photo">
                <img
                  loading="lazy"
                  alt="New roof installation in Johannesburg"
                  src="/images/svc-replacement-repair.jpg"
                />
              </div>
              <div className="svc-body">
                <span
                  style={{
                    display: "inline-block",
                    background: "var(--amber-soft)",
                    color: "var(--amber-deep)",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    borderRadius: "12px",
                    marginBottom: "10px",
                  }}
                >
                  Priority Specialization
                </span>
                <div className="svc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 12.5 12 4l9 8.5" />
                    <path d="M6.5 9.7V19h11V9.7" />
                  </svg>
                </div>
                <h3>New Roof Installations</h3>
                <p>
                  Complete new roof structures and coverings from timber trusses to final sheeting. Specialists in IBR corrugated metal, Chromadek pre-painted steel, and Marley concrete &amp; clay tiles.
                </p>
              </div>
            </div>

            {/* Priority 2: Ceilings (incl. Rhinolite) */}
            <div
              className="svc"
              style={{
                border: "2px solid var(--amber)",
                boxShadow: "0 10px 30px rgba(47, 127, 224, 0.15)",
              }}
            >
              <div className="svc-photo">
                <img
                  loading="lazy"
                  alt="Ceilings and Rhinolite skimming"
                  src="/images/gallery-dormers.jpg"
                />
              </div>
              <div className="svc-body">
                <span
                  style={{
                    display: "inline-block",
                    background: "var(--amber-soft)",
                    color: "var(--amber-deep)",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    borderRadius: "12px",
                    marginBottom: "10px",
                  }}
                >
                  Priority Specialization
                </span>
                <div className="svc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <h3>Ceilings (incl. Rhinolite)</h3>
                <p>
                  Smooth, mirror-finish flush plaster ceilings, authentic Rhinolite skim coating, decorative cornices, bulkhead designs, and repair of sagging or water-damaged ceiling boards.
                </p>
              </div>
            </div>

            {/* Priority 3: Painting */}
            <div
              className="svc"
              style={{
                border: "2px solid var(--amber)",
                boxShadow: "0 10px 30px rgba(47, 127, 224, 0.15)",
              }}
            >
              <div className="svc-photo">
                <img
                  loading="lazy"
                  alt="Interior, exterior and roof painting"
                  src="/images/cta-aerial.jpg"
                />
              </div>
              <div className="svc-body">
                <span
                  style={{
                    display: "inline-block",
                    background: "var(--amber-soft)",
                    color: "var(--amber-deep)",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    borderRadius: "12px",
                    marginBottom: "10px",
                  }}
                >
                  Priority Specialization
                </span>
                <div className="svc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <h3>Painting &amp; Roof Coatings</h3>
                <p>
                  High-durability interior and exterior painting, weatherproofing wall coatings, and specialized roof restoration painting for tiled and metal roofs to protect against harsh UV and rain.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Extended Building, Renovation & Roofing Grid */}
        <div style={{ marginTop: "36px" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--ink-mute)",
              marginBottom: "16px",
            }}
          >
            Additional Roofing &amp; Renovation Services
          </div>

          <div className="services-grid">
            {/* 4. Roof Repairs & Leak Detection */}
            <div className="svc">
              <div className="svc-photo">
                <img
                  loading="lazy"
                  alt="Roof leak detection and repair"
                  src="/images/svc-storm.jpg"
                />
              </div>
              <div className="svc-body">
                <div className="svc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                </div>
                <h3>Roof Repairs &amp; Leak Detection</h3>
                <p>
                  Fast pinpointing and honest repair of tricky leaks, cracked ridge caps, compromised valley irons, flashing failures, and storm damage with 24/7 emergency dispatch.
                </p>
              </div>
            </div>

            {/* 5. Waterproofing */}
            <div className="svc">
              <div className="svc-photo">
                <img
                  loading="lazy"
                  alt="Flat roof and parapet waterproofing"
                  src="/images/svc-commercial.jpg"
                />
              </div>
              <div className="svc-body">
                <div className="svc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2 4 5.5v6c0 5 3.4 8.6 8 10.5 4.6-1.9 8-5.5 8-10.5v-6L12 2z" />
                    <path d="m9 12 2 2 4-4.5" />
                  </svg>
                </div>
                <h3>Waterproofing Systems</h3>
                <p>
                  Torch-on membrane, liquid acrylic systems, and waterproofing for flat concrete slabs, parapet walls, retaining structures, and tiled balconies to prevent water ingress.
                </p>
              </div>
            </div>

            {/* 6. Re-Roofing / Roof Replacement */}
            <div className="svc">
              <div className="svc-photo">
                <img
                  loading="lazy"
                  alt="Re-roofing and roof replacement"
                  src="/images/gallery-estate.jpg"
                />
              </div>
              <div className="svc-body">
                <div className="svc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 12.5 12 4l9 8.5" />
                    <path d="M6.5 9.7V19h11V9.7" />
                  </svg>
                </div>
                <h3>Re-Roofing &amp; Roof Replacement</h3>
                <p>
                  Safe strip-downs and complete replacements of aging, corroded corrugated roofs or weathered tile roofs with modern durable Chromadek or Marley profile systems.
                </p>
              </div>
            </div>

            {/* 7. Gutters, Fascias & Bargeboards */}
            <div className="svc">
              <div className="svc-photo">
                <img
                  loading="lazy"
                  alt="Gutters fascias and bargeboards"
                  src="/images/svc-solar-ventilation.jpg"
                />
              </div>
              <div className="svc-body">
                <div className="svc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="8" width="18" height="12" rx="1" />
                    <path d="M3 8l4-4h10l4 4" />
                  </svg>
                </div>
                <h3>Gutters, Fascias &amp; Bargeboards</h3>
                <p>
                  Installation and replacement of seamless rainwater gutters, downpipes, timber and PVC fascia boards, and weather-sealed bargeboards to protect your eaves.
                </p>
              </div>
            </div>

            {/* 8. Partitioning & Drywalling */}
            <div className="svc">
              <div className="svc-photo">
                <img
                  loading="lazy"
                  alt="Drywalling and office partitioning"
                  src="/images/gallery-skyline.jpg"
                />
              </div>
              <div className="svc-body">
                <div className="svc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M12 3v18" />
                  </svg>
                </div>
                <h3>Drywalling &amp; Partitioning</h3>
                <p>
                  Sound-insulated drywall divisions, internal room partitions for offices and residential homes, door openings, and fire-resistant board installations.
                </p>
              </div>
            </div>

            {/* 9. Laminated Flooring & Tiling */}
            <div className="svc">
              <div className="svc-photo">
                <img
                  loading="lazy"
                  alt="Laminated flooring and tiling"
                  src="/images/gallery-crew-team.jpg"
                />
              </div>
              <div className="svc-body">
                <div className="svc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="8" height="8" rx="1" />
                    <rect x="13" y="3" width="8" height="8" rx="1" />
                    <rect x="3" y="13" width="8" height="8" rx="1" />
                    <rect x="13" y="13" width="8" height="8" rx="1" />
                  </svg>
                </div>
                <h3>Laminated Flooring &amp; Tiling</h3>
                <p>
                  Precision installation of porcelain, ceramic, and natural stone tiles, plus water-resistant luxury laminate and vinyl plank flooring with matching skirtings.
                </p>
              </div>
            </div>

            {/* 10. Kitchens, Wall Units & Cupboards */}
            <div className="svc">
              <div className="svc-photo">
                <img
                  loading="lazy"
                  alt="Kitchen renovations and custom cupboards"
                  src="/images/ig-post-2.jpg"
                />
              </div>
              <div className="svc-body">
                <div className="svc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 12h18M12 3v18" />
                  </svg>
                </div>
                <h3>Kitchens &amp; Built-In Cupboards</h3>
                <p>
                  Custom cabinetry, stylish kitchen renovations, countertop installations, built-in bedroom cupboards, and space-maximizing modern wall units.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
