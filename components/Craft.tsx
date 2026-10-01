import React from "react";

export const Craft: React.FC = () => {
  return (
    <section className="craft" id="craft">
      <div className="wrap craft-grid">
        <div>
          <div className="eyebrow" style={{ color: "var(--amber)" }}>
            Quality Standards &amp; Materials
          </div>
          <h2>
            Trusted South African brands.
            <br />
            Built to endure the Highveld climate.
          </h2>
          <p className="lede">
            From fierce summer hailstorms to baking heat, a roof or renovation is only as resilient as the materials and workmanship behind it. GDM installs premium products from industry-leading manufacturers.
          </p>

          <div className="craft-points">
            <div className="craft-point">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2 4 5.5v6c0 5 3.4 8.6 8 10.5 4.6-1.9 8-5.5 8-10.5v-6L12 2z" />
                <path d="m9 12 2 2 4-4.5" />
              </svg>
              <div>
                <strong>Top Material Brands: Marley, Overland, Clotan &amp; Safintra</strong>
                <span>
                  We source genuine IBR sheeting, Chromadek steel, and certified concrete &amp; clay tiles to guarantee manufacturer warranty compliance.
                </span>
              </div>
            </div>

            <div className="craft-point">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div>
                <strong>Serving All Property Types</strong>
                <span>
                  Trusted by private homeowners, property managers, body corporates, residential estates, and commercial building owners across Johannesburg.
                </span>
              </div>
            </div>

            <div className="craft-point">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <div>
                <strong>Insurance-Related Damage Repairs</strong>
                <span>
                  We assist homeowners with detailed repair quotes and high-res photos for storm and hail damage claims (we execute repairs once the claim is handled by the client).
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="cert-panel">
          <div className="cert-panel-label">Roof Types &amp; Trusted Brands</div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                background: "var(--cream)",
                padding: "14px 16px",
                borderRadius: "12px",
                border: "1px solid var(--line)",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: "15px", color: "var(--amber-deep)" }}>
                Marley Roofing
              </div>
              <div style={{ fontSize: "12.5px", color: "var(--ink-soft)", marginTop: "4px" }}>
                Concrete &amp; clay roof tiles
              </div>
            </div>

            <div
              style={{
                background: "var(--cream)",
                padding: "14px 16px",
                borderRadius: "12px",
                border: "1px solid var(--line)",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: "15px", color: "var(--amber-deep)" }}>
                Safintra
              </div>
              <div style={{ fontSize: "12.5px", color: "var(--ink-soft)", marginTop: "4px" }}>
                Corrugated &amp; IBR metal sheets
              </div>
            </div>

            <div
              style={{
                background: "var(--cream)",
                padding: "14px 16px",
                borderRadius: "12px",
                border: "1px solid var(--line)",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: "15px", color: "var(--amber-deep)" }}>
                Clotan Steel
              </div>
              <div style={{ fontSize: "12.5px", color: "var(--ink-soft)", marginTop: "4px" }}>
                Chromadek &amp; pre-painted coils
              </div>
            </div>

            <div
              style={{
                background: "var(--cream)",
                padding: "14px 16px",
                borderRadius: "12px",
                border: "1px solid var(--line)",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: "15px", color: "var(--amber-deep)" }}>
                Overland
              </div>
              <div style={{ fontSize: "12.5px", color: "var(--ink-soft)", marginTop: "4px" }}>
                Heavy-duty waterproofing membranes
              </div>
            </div>
          </div>

          <div
            style={{
              background: "var(--cream-deep)",
              borderRadius: "12px",
              padding: "14px 16px",
              marginBottom: "16px",
            }}
          >
            <div style={{ fontWeight: 700, fontSize: "13px", color: "var(--ink)", textTransform: "uppercase" }}>
              Roof Systems We Work On:
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                marginTop: "8px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
                fontSize: "13px",
                color: "var(--ink-soft)",
              }}
            >
              <li>✓ IBR / Corrugated metal sheeting</li>
              <li>✓ Chromadek pre-painted steel</li>
              <li>✓ Concrete roof tiles</li>
              <li>✓ Clay roof tiles</li>
              <li>✓ Roof trusses &amp; timber structures</li>
              <li>✓ Flashings, valleys &amp; gutters</li>
            </ul>
          </div>

          <p className="cert-note">
            <strong>Compliance Note:</strong> GDM Construction &amp; Roofing (Pty) Ltd is a VAT-registered business. All quotes are clear, transparent, and compliant with South African building standards.
          </p>
        </div>
      </div>
    </section>
  );
};
