"use client";

import React, { useState } from "react";

type TabKey = "metal" | "tiles" | "ceilings" | "waterproofing";

export const GafLearningCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("metal");

  const tabTitles: Record<TabKey, string> = {
    metal: "IBR & Chromadek Metal Sheeting Specifications",
    tiles: "Concrete & Clay Tiled Roof Systems (Marley)",
    ceilings: "Flush Ceilings & Authentic Rhinolite Skimming",
    waterproofing: "Waterproofing & Protective Roof Coatings",
  };

  return (
    <section className="gaf" id="materials">
      <div className="wrap">
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 40px" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Technical Standards &amp; Materials
          </div>
          <h2>Understand the systems that protect your property.</h2>
          <p className="lede" style={{ margin: "14px auto 0" }}>
            We believe in complete transparency. Explore how GDM installs, waterproofs, and builds according to strict South African building guidelines — no shortcuts, just lasting quality.
          </p>
        </div>

        <div className="gaf-tabs" role="tablist">
          <button
            className={`gaf-tab ${activeTab === "metal" ? "active" : ""}`}
            onClick={() => setActiveTab("metal")}
            role="tab"
            aria-selected={activeTab === "metal"}
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
            <span>Metal Sheeting &amp; IBR</span>
          </button>

          <button
            className={`gaf-tab ${activeTab === "tiles" ? "active" : ""}`}
            onClick={() => setActiveTab("tiles")}
            role="tab"
            aria-selected={activeTab === "tiles"}
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12.5 12 4l9 8.5" />
              <path d="M6.5 9.7V19h11V9.7" />
            </svg>
            <span>Tile Roof Systems</span>
          </button>

          <button
            className={`gaf-tab ${activeTab === "ceilings" ? "active" : ""}`}
            onClick={() => setActiveTab("ceilings")}
            role="tab"
            aria-selected={activeTab === "ceilings"}
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            <span>Ceilings &amp; Rhinolite</span>
          </button>

          <button
            className={`gaf-tab ${activeTab === "waterproofing" ? "active" : ""}`}
            onClick={() => setActiveTab("waterproofing")}
            role="tab"
            aria-selected={activeTab === "waterproofing"}
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2 4 5.5v6c0 5 3.4 8.6 8 10.5 4.6-1.9 8-5.5 8-10.5v-6L12 2z" />
              <path d="m9 12 2 2 4-4.5" />
            </svg>
            <span>Waterproofing</span>
          </button>
        </div>

        <div className="gaf-panel">
          <div className="gaf-caption">{tabTitles[activeTab]}</div>
          <div className="gaf-interactive-view">
            {activeTab === "metal" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "20px",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid var(--line)",
                    borderRadius: "14px",
                    padding: "22px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--amber-deep)",
                      textTransform: "uppercase",
                    }}
                  >
                    High Strength Commercial &amp; Domestic
                  </span>
                  <h4 style={{ fontFamily: "var(--serif)", fontSize: "20px", margin: "6px 0" }}>
                    IBR Metal Sheeting
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "var(--ink-soft)", marginBottom: "14px" }}>
                    Inverted Box Rib profile offering superior water-discharge capacity for low to medium-pitch roofs.
                  </p>
                  <ul
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      lineHeight: 1.8,
                      listStyle: "none",
                      paddingLeft: 0,
                    }}
                  >
                    <li>✓ High load-bearing structural strength</li>
                    <li>✓ Broad coverage &amp; fewer end-laps</li>
                    <li>✓ Sourced from Safintra &amp; Clotan Steel</li>
                    <li>✓ Weather-resistant neoprene sealing washers</li>
                  </ul>
                </div>

                <div
                  style={{
                    background: "#fff",
                    border: "1px solid var(--line)",
                    borderRadius: "14px",
                    padding: "22px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--amber-deep)",
                      textTransform: "uppercase",
                    }}
                  >
                    Architectural Colored Finish
                  </span>
                  <h4 style={{ fontFamily: "var(--serif)", fontSize: "20px", margin: "6px 0" }}>
                    Chromadek® Pre-Painted Steel
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "var(--ink-soft)", marginBottom: "14px" }}>
                    Factory-coated galvanized steel with premium baked-enamel color systems designed for African sunlight.
                  </p>
                  <ul
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      lineHeight: 1.8,
                      listStyle: "none",
                      paddingLeft: 0,
                    }}
                  >
                    <li>✓ Resistant to fading, peeling &amp; chalking</li>
                    <li>✓ Modern charcoal, slate &amp; color palettes</li>
                    <li>✓ Outstanding corrosion protection</li>
                    <li>✓ Perfect for residential re-roofs</li>
                  </ul>
                </div>

                <div
                  style={{
                    background: "#fff",
                    border: "1px solid var(--line)",
                    borderRadius: "14px",
                    padding: "22px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--amber-deep)",
                      textTransform: "uppercase",
                    }}
                  >
                    Classic &amp; Timeless
                  </span>
                  <h4 style={{ fontFamily: "var(--serif)", fontSize: "20px", margin: "6px 0" }}>
                    Corrugated Iron Sheeting
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "var(--ink-soft)", marginBottom: "14px" }}>
                    Traditional sinusoidal wave profile suitable for residential roofs, carports, and industrial sheds.
                  </p>
                  <ul
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      lineHeight: 1.8,
                      listStyle: "none",
                      paddingLeft: 0,
                    }}
                  >
                    <li>✓ Cost-effective and durable</li>
                    <li>✓ High zinc galvanized coating</li>
                    <li>✓ Rapid installation and replacement</li>
                    <li>✓ Easy to coat and re-paint</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "tiles" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "30px",
                  alignItems: "center",
                }}
              >
                <div>
                  <h4 style={{ fontFamily: "var(--serif)", fontSize: "22px", marginBottom: "12px" }}>
                    Marley Concrete &amp; Clay Tile Installations
                  </h4>
                  <p
                    style={{
                      fontSize: "14.5px",
                      color: "var(--ink-soft)",
                      lineHeight: 1.6,
                      marginBottom: "14px",
                    }}
                  >
                    GDM installs authentic <strong>Marley</strong> concrete and clay roof tiles. Our team aligns every batten accurately, ensures adequate overlap for Highveld summer downpours, and beds ridge caps in reinforced cement mortar.
                  </p>
                  <h4 style={{ fontFamily: "var(--serif)", fontSize: "20px", margin: "18px 0 8px" }}>
                    Under-Tile Membrane (RadenShield / Undertile Felt)
                  </h4>
                  <p
                    style={{
                      fontSize: "14.5px",
                      color: "var(--ink-soft)",
                      lineHeight: 1.6,
                    }}
                  >
                    We never cut corners on undertile plastic membrane or insulation. This barrier prevents wind-driven rain from entering your roof space and significantly lowers thermal heat transfer into your ceilings.
                  </p>
                </div>

                <div
                  style={{
                    background: "var(--white)",
                    borderRadius: "16px",
                    border: "1px solid var(--line)",
                    padding: "24px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "44px",
                      fontWeight: 700,
                      color: "var(--amber)",
                      lineHeight: 1,
                    }}
                  >
                    100%
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--ink)", marginTop: "6px" }}>
                    Weather-Sealed Ridge &amp; Valleys
                  </div>
                  <hr
                    style={{
                      margin: "16px 0",
                      border: "none",
                      borderTop: "1px solid var(--line)",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "var(--amber-deep)",
                    }}
                  >
                    Marley Certified Quality
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--ink-mute)", marginTop: "8px" }}>
                    Concrete double Roman, modern flat, and classic clay profiles for superior curb appeal and decades of storm endurance.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "ceilings" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid var(--line)",
                    borderRadius: "14px",
                    padding: "22px",
                  }}
                >
                  <h4 style={{ fontFamily: "var(--serif)", fontSize: "18px", marginBottom: "8px" }}>
                    Rhinolite Skimming
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "var(--ink-soft)", lineHeight: "1.6" }}>
                    Applied by seasoned plastering tradesmen for a glass-smooth, seamless finish ready for primer and final interior paint. Eliminates visible board joints entirely.
                  </p>
                </div>

                <div
                  style={{
                    background: "#fff",
                    border: "1px solid var(--line)",
                    borderRadius: "14px",
                    padding: "22px",
                  }}
                >
                  <h4 style={{ fontFamily: "var(--serif)", fontSize: "18px", marginBottom: "8px" }}>
                    Brand New Ceiling Boards
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "var(--ink-soft)", lineHeight: "1.6" }}>
                    We replace water-logged, sagging or cracked gypsum plasterboards with sturdy galvanized brandering and brand-new Gyproc RhinoBoard.
                  </p>
                </div>

                <div
                  style={{
                    background: "#fff",
                    border: "1px solid var(--line)",
                    borderRadius: "14px",
                    padding: "22px",
                  }}
                >
                  <h4 style={{ fontFamily: "var(--serif)", fontSize: "18px", marginBottom: "8px" }}>
                    Cornices &amp; Bulkheads
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "var(--ink-soft)", lineHeight: "1.6" }}>
                    Expert mitering and installation of modern polystyrene or classic plaster cornices, downlight recesses, and decorative living room bulkheads.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "waterproofing" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "18px",
                }}
              >
                <div
                  style={{
                    background: "var(--white)",
                    padding: "18px",
                    borderRadius: "12px",
                    border: "1px solid var(--line)",
                  }}
                >
                  <span style={{ fontWeight: 700, color: "var(--amber)", fontSize: "12px" }}>
                    SYSTEM 1
                  </span>
                  <h4 style={{ fontSize: "16px", margin: "6px 0" }}>Torch-On Bitumen</h4>
                  <p style={{ fontSize: "13px", color: "var(--ink-soft)" }}>
                    4mm heat-fused torch-on membrane for flat concrete roofs, balconies, and underground foundations.
                  </p>
                </div>

                <div
                  style={{
                    background: "var(--white)",
                    padding: "18px",
                    borderRadius: "12px",
                    border: "1px solid var(--line)",
                  }}
                >
                  <span style={{ fontWeight: 700, color: "var(--amber)", fontSize: "12px" }}>
                    SYSTEM 2
                  </span>
                  <h4 style={{ fontSize: "16px", margin: "6px 0" }}>Parapet Wall Sealing</h4>
                  <p style={{ fontSize: "13px", color: "var(--ink-soft)" }}>
                    Fibre-membrane reinforcement and UV-resistant acrylic waterproofing along vulnerable brick parapet tops.
                  </p>
                </div>

                <div
                  style={{
                    background: "var(--white)",
                    padding: "18px",
                    borderRadius: "12px",
                    border: "1px solid var(--line)",
                  }}
                >
                  <span style={{ fontWeight: 700, color: "var(--amber)", fontSize: "12px" }}>
                    SYSTEM 3
                  </span>
                  <h4 style={{ fontSize: "16px", margin: "6px 0" }}>Valley &amp; Flashing</h4>
                  <p style={{ fontSize: "13px", color: "var(--ink-soft)" }}>
                    Lead and galvanized counter-flashing around chimneys, skylights, and internal roof valleys.
                  </p>
                </div>

                <div
                  style={{
                    background: "var(--white)",
                    padding: "18px",
                    borderRadius: "12px",
                    border: "1px solid var(--line)",
                  }}
                >
                  <span style={{ fontWeight: 700, color: "var(--amber)", fontSize: "12px" }}>
                    SYSTEM 4
                  </span>
                  <h4 style={{ fontSize: "16px", margin: "6px 0" }}>Protective Roof Paint</h4>
                  <p style={{ fontSize: "13px", color: "var(--ink-soft)" }}>
                    High-build pure acrylic roof paints that seal micro-fissures in tiles and prevent rust on metal sheets.
                  </p>
                </div>
              </div>
            )}
          </div>
          <p className="gaf-fine">
            All materials sourced from certified South African manufacturers (Marley, Overland, Clotan &amp; Safintra).
          </p>
        </div>
      </div>
    </section>
  );
};
