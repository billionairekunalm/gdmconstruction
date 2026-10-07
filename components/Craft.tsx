"use client";

import React, { useState, useRef, useEffect } from "react";

interface CraftProps {
  onOpenBooking?: () => void;
}

type MaterialFilter = "all" | "tiles" | "metal" | "chromadek" | "waterproofing";

interface HighlightItem {
  icon: string;
  title: string;
  detail: string;
}

interface MaterialItem {
  id: string;
  category: MaterialFilter;
  brand: string;
  headline: string;
  description: string;
  highlights: HighlightItem[];
  durability: string;
  accentColor: string;
  iconBg: string;
  iconSvg: React.ReactNode;
}

export const Craft: React.FC<CraftProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<MaterialFilter>("all");
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const TRUST_POINTS = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="craft-trust-icon">
          <path d="M12 2 4 5.5v6c0 5 3.4 8.6 8 10.5 4.6-1.9 8-5.5 8-10.5v-6L12 2z" />
          <path d="m9 12 2 2 4-4.5" />
        </svg>
      ),
      label: "100% SABS Approved",
      detail: "SANS Code Compliant"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="craft-trust-icon">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <path d="m11 13-2 4h4l-2 4" />
        </svg>
      ),
      label: "Highveld Weather Rated",
      detail: "Severe Hail & Storm Tested"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="craft-trust-icon">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m9 15 2 2 4-4" />
        </svg>
      ),
      label: "Factory Warranties",
      detail: "Direct Mill Backing"
    }
  ];

  const MATERIALS: MaterialItem[] = [
    {
      id: "marley",
      category: "tiles",
      brand: "Marley Roofing®",
      headline: "Concrete & Clay Tiles",
      description: "High-density interlocking tiles built to withstand severe Highveld hail with thermal under-tile protection.",
      highlights: [
        { icon: "🛡️", title: "Severe Hail Impact", detail: "Interlocking profile tested for violent storms" },
        { icon: "🌡️", title: "RadenShield Barrier", detail: "Under-tile radiant heat insulation" }
      ],
      durability: "30+ Year Lifespan",
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
      brand: "Safintra® Steel",
      headline: "IBR & Corrugated Metal",
      description: "Heavy-gauge structural steel with deep flutes for rapid storm runoff on low and medium-pitch roofs.",
      highlights: [
        { icon: "🌊", title: "Rapid Flood Runoff", detail: "Deep-flute design handles peak rain volumes" },
        { icon: "🔩", title: "0.58mm Heavy Steel", detail: "Weatherproof EPDM neoprene leak seals" }
      ],
      durability: "Heavy-Gauge SABS",
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
      brand: "Clotan Steel®",
      headline: "Chromadek® Baked Enamel",
      description: "Galvanized zinc steel coils with baked-enamel color coatings formulated to resist UV chalking and peeling.",
      highlights: [
        { icon: "☀️", title: "UV Anti-Fade Finish", detail: "Factory baked enamel withstands direct sun" },
        { icon: "🛡️", title: "Zinc Anti-Corrosion", detail: "Heavy galvanized barrier prevents rust" }
      ],
      durability: "UV & Fade Resistant",
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
      brand: "Overland® Systems",
      headline: "4mm Torch-On Bitumen",
      description: "Heat-fused elastomeric bitumen membrane delivering 100% watertight protection on flat roofs & parapets.",
      highlights: [
        { icon: "💧", title: "Zero Water Ponding", detail: "4mm heat-fused impenetrable membrane" },
        { icon: "🧱", title: "Parapet Wall Seal", detail: "Full fibre-reinforced flashing protection" }
      ],
      durability: "100% Watertight Seal",
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

  // Sync scroll on mobile carousel
  const handleCarouselScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, clientWidth } = trackRef.current;
    if (clientWidth === 0) return;
    const cardWidth = clientWidth * 0.85;
    const newIdx = Math.round(scrollLeft / cardWidth);
    setActiveCardIndex(Math.min(Math.max(newIdx, 0), filteredMaterials.length - 1));
  };

  const scrollToCard = (idx: number) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.clientWidth * 0.85;
    trackRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: "smooth"
    });
    setActiveCardIndex(idx);
  };

  useEffect(() => {
    setActiveCardIndex(0);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeFilter]);

  return (
    <section className="craft-section" id="craft">
      <div className="craft-ambient-glow" />

      <div className="wrap craft-container">
        {/* 1. Header & Trust Ribbon */}
        <div className="craft-header">
          <div className="craft-eyebrow-pill">
            <span className="craft-eyebrow-dot" />
            <span>SABS Certified Materials &amp; Standards</span>
          </div>

          <h2 className="craft-title">
            Built with South Africa’s Best.
            <span className="craft-title-highlight"> Engineered for the Highveld.</span>
          </h2>

          <p className="craft-subtitle">
            Direct mill-certified materials compliant with SANS building codes — engineered to endure Gauteng hail, sun, and torrential storms.
          </p>

          {/* Compact Trust Ribbon (High Trust, Low Profile) */}
          <div className="craft-trust-ribbon">
            {TRUST_POINTS.map((pt, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <div className="craft-trust-divider" />}
                <div className="craft-trust-item">
                  <div className="craft-trust-icon-box">{pt.icon}</div>
                  <div className="craft-trust-text">
                    <span className="craft-trust-lbl">{pt.label}</span>
                    <span className="craft-trust-sub">{pt.detail}</span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 2. Streamlined Filter Pills */}
        <div className="craft-filter-bar">
          <button
            type="button"
            className={`craft-filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Systems (4)
          </button>
          <button
            type="button"
            className={`craft-filter-btn ${activeFilter === "tiles" ? "active" : ""}`}
            onClick={() => setActiveFilter("tiles")}
          >
            Tiles (Marley)
          </button>
          <button
            type="button"
            className={`craft-filter-btn ${activeFilter === "metal" ? "active" : ""}`}
            onClick={() => setActiveFilter("metal")}
          >
            IBR Metal (Safintra)
          </button>
          <button
            type="button"
            className={`craft-filter-btn ${activeFilter === "chromadek" ? "active" : ""}`}
            onClick={() => setActiveFilter("chromadek")}
          >
            Chromadek® (Clotan)
          </button>
          <button
            type="button"
            className={`craft-filter-btn ${activeFilter === "waterproofing" ? "active" : ""}`}
            onClick={() => setActiveFilter("waterproofing")}
          >
            Waterproofing (Overland)
          </button>
        </div>

        {/* Mobile Swipe Hint */}
        {activeFilter === "all" && (
          <div className="craft-mobile-swipe-hint">
            <span>← Swipe to explore certified systems →</span>
          </div>
        )}

        {/* 3. Materials Track (Horizontal Carousel on Mobile, Balanced Grid on Desktop) */}
        <div
          className="craft-materials-track"
          ref={trackRef}
          onScroll={handleCarouselScroll}
        >
          {filteredMaterials.map((item) => (
            <div key={item.id} className="craft-material-card">
              <div className="craft-card-top">
                <div
                  className="craft-card-icon"
                  style={{ background: item.iconBg, color: item.accentColor }}
                >
                  {item.iconSvg}
                </div>
                <span className="craft-card-durability-badge">
                  {item.durability}
                </span>
              </div>

              <div className="craft-card-body">
                <span className="craft-card-brand">{item.brand}</span>
                <h3 className="craft-card-headline">{item.headline}</h3>
                <p className="craft-card-description">{item.description}</p>

                {/* 2 Essential Highlights (Scannable, No Clutter) */}
                <div className="craft-card-highlights">
                  {item.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="craft-highlight-item">
                      <span className="craft-highlight-icon">{hl.icon}</span>
                      <div className="craft-highlight-info">
                        <span className="craft-highlight-title">{hl.title}</span>
                        <span className="craft-highlight-detail">{hl.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="craft-card-footer">
                <button
                  type="button"
                  className="craft-card-action-btn"
                  onClick={onOpenBooking}
                >
                  <span>Request Quote for {item.brand.replace("®", "").replace(" Systems", "").replace(" Steel", "")}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="craft-btn-arrow"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        {activeFilter === "all" && (
          <div className="craft-mobile-dots" aria-hidden="true">
            {filteredMaterials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                className={`craft-dot ${dotIdx === activeCardIndex ? "active" : ""}`}
                onClick={() => scrollToCard(dotIdx)}
                aria-label={`View slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        )}

        {/* 4. Streamlined Bottom Assurance Banner */}
        <div className="craft-assurance-banner">
          <div className="craft-assurance-left">
            <div className="craft-assurance-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "17px", height: "17px", color: "#22c55e" }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>SANS 10400 Code Compliant • VAT Registered (Pty) Ltd</span>
            </div>
            <p className="craft-assurance-text">
              Zero shortcuts. Every quote includes verified SABS materials and insurance photo assessments.
            </p>
          </div>

          <div className="craft-assurance-actions">
            <button
              type="button"
              className="craft-banner-btn-primary"
              onClick={onOpenBooking}
            >
              <span>Consult on Materials</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "15px", height: "15px" }}>
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
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "15px", height: "15px", color: "#22c55e" }}>
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
