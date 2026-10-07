"use client";

import React, { useState } from "react";

interface CraftProps {
  onOpenBooking?: () => void;
}

type MaterialFilter = "all" | "tiles" | "metal" | "chromadek" | "waterproofing";

interface MaterialItem {
  id: string;
  category: MaterialFilter;
  badge: string;
  brand: string;
  headline: string;
  description: string;
  specs: string[];
  durability: string;
  accentColor: string;
  iconBg: string;
  iconSvg: React.ReactNode;
}

export const Craft: React.FC<CraftProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<MaterialFilter>("all");

  const TRUST_PILLARS = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="craft-pillar-icon">
          <path d="M12 2 4 5.5v6c0 5 3.4 8.6 8 10.5 4.6-1.9 8-5.5 8-10.5v-6L12 2z" />
          <path d="m9 12 2 2 4-4.5" />
        </svg>
      ),
      title: "100% SABS Approved",
      subtitle: "Certified materials sourced directly from verified South African mills, compliant with SANS building codes."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="craft-pillar-icon">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <path d="m11 13-2 4h4l-2 4" />
        </svg>
      ),
      title: "Highveld Weather Rated",
      subtitle: "Engineered specifically to withstand Gauteng’s violent hailstorms, torrential downpours, and intense UV."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="craft-pillar-icon">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m9 15 2 2 4-4" />
        </svg>
      ),
      title: "Factory Warranties",
      subtitle: "Installed strictly to manufacturer guidelines, safeguarding your official product & workmanship guarantees."
    }
  ];

  const MATERIALS: MaterialItem[] = [
    {
      id: "marley",
      category: "tiles",
      badge: "Tile Systems",
      brand: "Marley Roofing®",
      headline: "Concrete & Clay Tiled Roofs",
      description: "High-density interlocking tiles designed for Highveld summer downpours, hail protection, and superior thermal insulation.",
      specs: [
        "Double Roman & modern flat tile profiles",
        "Severe hail impact resistance",
        "Reinforced mortar bedding on ridges & hips",
        "RadenShield under-tile thermal membrane"
      ],
      durability: "30+ Year Expected Lifespan",
      accentColor: "#f59e0b",
      iconBg: "rgba(245, 158, 11, 0.16)",
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      id: "safintra",
      category: "metal",
      badge: "Engineered Sheeting",
      brand: "Safintra® Steel",
      headline: "Genuine IBR & Corrugated",
      description: "Deep-flute inverted box rib sheeting offering superior water-discharge capacity for low to medium-pitch residential & commercial roofs.",
      specs: [
        "Certified 0.5mm – 0.58mm heavy-gauge steel",
        "High load-bearing structural strength",
        "Weatherproof EPDM neoprene sealing washers",
        "Broad coverage with fewer end-laps"
      ],
      durability: "High Load Structural Strength",
      accentColor: "#3b82f6",
      iconBg: "rgba(59, 130, 246, 0.16)",
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      )
    },
    {
      id: "clotan",
      category: "chromadek",
      badge: "Architectural Steel",
      brand: "Clotan Steel®",
      headline: "Chromadek® Baked Enamel Coils",
      description: "Factory-coated galvanized steel with baked-enamel color systems formulated to resist fading and chalking under intense African sun.",
      specs: [
        "Resistant to peeling, chalking & fading",
        "Contemporary Charcoal, Slate & Traffic Green",
        "Galvanized zinc anti-corrosion barrier",
        "Full manufacturer warranty compliance"
      ],
      durability: "UV & Fade Resistant Finish",
      accentColor: "#22c55e",
      iconBg: "rgba(34, 197, 94, 0.16)",
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )
    },
    {
      id: "overland",
      category: "waterproofing",
      badge: "Protection Systems",
      brand: "Overland® Waterproofing",
      headline: "Industrial Torch-On & Acrylic",
      description: "Heavy-duty 4mm heat-fused bitumen membranes and reinforced elastomeric systems ensuring 100% watertight protection on flat roofs & parapets.",
      specs: [
        "4mm heat-fused bitumen torch-on membrane",
        "Fibre-membrane sealing for parapet walls",
        "UV-reflective acrylic topcoat protection",
        "Complete valley, flashing & gutter waterproofing"
      ],
      durability: "100% Watertight Guarantee",
      accentColor: "#a855f7",
      iconBg: "rgba(168, 85, 247, 0.16)",
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      )
    }
  ];

  const filteredMaterials = activeFilter === "all"
    ? MATERIALS
    : MATERIALS.filter((m) => m.category === activeFilter);

  return (
    <section className="craft-section" id="craft">
      <div className="craft-ambient-glow" />

      <div className="wrap craft-container">
        {/* 1. Header Section */}
        <div className="craft-header">
          <div className="craft-eyebrow-pill">
            <span className="craft-eyebrow-dot" />
            <span>SABS Certified Standards &amp; Materials</span>
          </div>

          <h2 className="craft-title">
            Built with Trusted South African Brands.
            <span className="craft-title-highlight"> Engineered for the Highveld.</span>
          </h2>

          <p className="craft-subtitle">
            From ferocious summer hailstorms to baking heat, a roof or renovation is only as resilient as the materials behind it. GDM partners exclusively with South Africa’s premier manufacturers to guarantee lasting structural integrity.
          </p>
        </div>

        {/* 2. Three Core Trust Pillars (Scannable Cards) */}
        <div className="craft-pillars-grid">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div key={idx} className="craft-pillar-card">
              <div className="craft-pillar-icon-box">
                {pillar.icon}
              </div>
              <div className="craft-pillar-content">
                <h3 className="craft-pillar-title">{pillar.title}</h3>
                <p className="craft-pillar-text">{pillar.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Interactive Category Filter Pills */}
        <div className="craft-filter-bar">
          <button
            type="button"
            className={`craft-filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Materials ({MATERIALS.length})
          </button>
          <button
            type="button"
            className={`craft-filter-btn ${activeFilter === "tiles" ? "active" : ""}`}
            onClick={() => setActiveFilter("tiles")}
          >
            Roof Tiles (Marley)
          </button>
          <button
            type="button"
            className={`craft-filter-btn ${activeFilter === "metal" ? "active" : ""}`}
            onClick={() => setActiveFilter("metal")}
          >
            IBR Sheeting (Safintra)
          </button>
          <button
            type="button"
            className={`craft-filter-btn ${activeFilter === "chromadek" ? "active" : ""}`}
            onClick={() => setActiveFilter("chromadek")}
          >
            Chromadek® Steel
          </button>
          <button
            type="button"
            className={`craft-filter-btn ${activeFilter === "waterproofing" ? "active" : ""}`}
            onClick={() => setActiveFilter("waterproofing")}
          >
            Waterproofing (Overland)
          </button>
        </div>

        {/* 4. Sleek Material Cards Grid */}
        <div className="craft-materials-grid">
          {filteredMaterials.map((item) => (
            <div key={item.id} className="craft-material-card">
              <div className="craft-card-top">
                <div
                  className="craft-card-icon"
                  style={{ background: item.iconBg, color: item.accentColor }}
                >
                  {item.iconSvg}
                </div>
                <div className="craft-card-badges">
                  <span
                    className="craft-card-category-badge"
                    style={{ borderColor: item.accentColor, color: item.accentColor }}
                  >
                    {item.badge}
                  </span>
                  <span className="craft-card-durability-badge">
                    {item.durability}
                  </span>
                </div>
              </div>

              <div className="craft-card-body">
                <div className="craft-card-brand">{item.brand}</div>
                <h3 className="craft-card-headline">{item.headline}</h3>
                <p className="craft-card-description">{item.description}</p>

                <div className="craft-card-specs-title">Engineered Specifications:</div>
                <ul className="craft-card-specs-list">
                  {item.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="craft-card-spec-item">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={item.accentColor}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="craft-spec-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="craft-card-footer">
                <button
                  type="button"
                  className="craft-card-action-btn"
                  onClick={onOpenBooking}
                >
                  <span>Request Quote for {item.brand.replace("®", "")}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "16px", height: "16px" }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 5. Bottom Assurance Banner */}
        <div className="craft-assurance-banner">
          <div className="craft-assurance-left">
            <div className="craft-assurance-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "18px", height: "18px", color: "#22c55e" }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>VAT Registered Contractor (Pty) Ltd</span>
            </div>
            <p className="craft-assurance-text">
              All quotes are 100% transparent with SANS building compliance. We also assist clients with detailed repair assessments and photo reports for insurance damage claims.
            </p>
          </div>

          <div className="craft-assurance-actions">
            <button
              type="button"
              className="craft-banner-btn-primary"
              onClick={onOpenBooking}
            >
              <span>Consult on Materials &amp; Pricing</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "16px", height: "16px" }}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <a
              href="https://wa.me/27833662700?text=Hello%20GDM%20Construction,%20I%20would%20like%20to%20inquire%20about%20roofing%20materials%20and%20standards"
              target="_blank"
              rel="noopener noreferrer"
              className="craft-banner-btn-secondary"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px", color: "#22c55e" }}>
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z" />
              </svg>
              <span>WhatsApp Questions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
