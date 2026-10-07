"use client";

import React, { useState } from "react";

interface GafLearningCenterProps {
  onOpenBooking?: () => void;
}

type TabKey = "metal" | "tiles" | "ceilings" | "waterproofing";

interface TechnicalSystem {
  id: TabKey;
  tabLabel: string;
  tabIcon: React.ReactNode;
  title: string;
  subtitle: string;
  specs: { label: string; value: string; detail: string }[];
  layers: { step: string; title: string; desc: string }[];
  benefitHeadline: string;
  benefitPoints: string[];
  preventHeadline: string;
  preventPoints: string[];
}

export const GafLearningCenter: React.FC<GafLearningCenterProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<TabKey>("metal");

  const SYSTEMS: Record<TabKey, TechnicalSystem> = {
    metal: {
      id: "metal",
      tabLabel: "IBR & Metal Sheeting",
      tabIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      ),
      title: "IBR & Chromadek® Metal Sheeting Specifications",
      subtitle: "Engineered for high structural load-bearing capacity and rapid water runoff on Highveld roofs.",
      specs: [
        { label: "Minimum Pitch", value: "5° – 15°", detail: "Deep-flute runoff profile" },
        { label: "Steel Gauge", value: "0.50 – 0.58mm", detail: "Heavy-spec structural steel" },
        { label: "Fasteners", value: "Class 4 Screws", detail: "EPDM neoprene leak seal" },
        { label: "Finish Coating", value: "Chromadek®", detail: "Factory baked-enamel UV shield" }
      ],
      layers: [
        {
          step: "01",
          title: "Truss Spacing & Purlin Alignment",
          desc: "Engineered timber or light-steel purlins leveled to prevent sheet flexing under hail."
        },
        {
          step: "02",
          title: "Thermal Insulation & Sisalation Barrier",
          desc: "Radiant heat foil barrier installed beneath sheeting to drop indoor temperatures by up to 6°C."
        },
        {
          step: "03",
          title: "Precision Fastening & Anti-Capillary Lapping",
          desc: "Sheets overlapped with anti-capillary side-grooves and fastened with weather-sealed hex heads."
        }
      ],
      benefitHeadline: "Why This Matters For Your Roof:",
      benefitPoints: [
        "Eliminates standing water on low-slope buildings",
        "Resistant to high-velocity Highveld hail impact",
        "Zero peeling, flaking, or rapid UV chalking"
      ],
      preventHeadline: "What GDM Construction Prevents:",
      preventPoints: [
        "No overtightened screws cutting rubber seals",
        "No undersized steel sheets bending in storm winds"
      ]
    },
    tiles: {
      id: "tiles",
      tabLabel: "Marley Tiled Roofs",
      tabIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12.5 12 4l9 8.5" />
          <path d="M6.5 9.7V19h11V9.7" />
        </svg>
      ),
      title: "Marley® Concrete & Clay Tile Engineering",
      subtitle: "Traditional Highveld durability coupled with modern interlocking wind-and-rain defense.",
      specs: [
        { label: "Minimum Pitch", value: "17.5° – 26°", detail: "Depending on tile profile" },
        { label: "Headlap Spec", value: "75mm – 100mm", detail: "Prevents wind-driven rain creep" },
        { label: "Under-Tile Barrier", value: "RadenShield", detail: "Thermal insulation & vapour seal" },
        { label: "Ridge Fixing", value: "3:1 Mortar Bed", detail: "Reinforced cement hip bedding" }
      ],
      layers: [
        {
          step: "01",
          title: "RadenShield Thermal Membrane Laying",
          desc: "Draped tautly over roof trusses before battening to catch wind-blown moisture and insulate."
        },
        {
          step: "02",
          title: "Treated Timber Batten Spacing",
          desc: "SABS-treated 38x38mm battens calibrated to exact gauge for uniform tile weight distribution."
        },
        {
          step: "03",
          title: "Interlocking Lay & Mechanical Clamping",
          desc: "Perimeter and ridge tiles mechanically secured to withstand severe Gauteng storm updrafts."
        }
      ],
      benefitHeadline: "Why This Matters For Your Roof:",
      benefitPoints: [
        "Unrivalled acoustic insulation against storm downpours",
        "Superior Highveld thermal stability year-round",
        "30+ year lifespan with authentic Marley tile guarantee"
      ],
      preventHeadline: "What GDM Construction Prevents:",
      preventPoints: [
        "No missing undertile plastic allowing ceiling damp",
        "No cracked, un-reinforced ridge mortar blowing off"
      ]
    },
    ceilings: {
      id: "ceilings",
      tabLabel: "Ceilings & Rhinolite",
      tabIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
      title: "Flush Plastered Ceilings & Rhinolite Skimming",
      subtitle: "Glass-smooth, seamless interior finishes with zero board sagging or joint cracking.",
      specs: [
        { label: "Plasterboard", value: "9.5mm Gyproc", detail: "RhinoBoard gypsum panels" },
        { label: "Skim Finish", value: "3mm Rhinolite", detail: "Hand-trowelled monolithic coat" },
        { label: "Brandering", value: "38x38mm SABS", detail: "Galvanized screw fixed @ 400mm" },
        { label: "Joint Tape", value: "Fibreglass Scrim", detail: "Prevents hairline thermal cracks" }
      ],
      layers: [
        {
          step: "01",
          title: "Sub-Framing & Brandering Alignment",
          desc: "Laser-leveled brandering securely anchored to trusses to create a dead-flat ceiling plane."
        },
        {
          step: "02",
          title: "Plasterboard Installation & Scrim Taping",
          desc: "Boards installed with staggered joints, drywall-screwed and reinforced with fibreglass scrim."
        },
        {
          step: "03",
          title: "Two-Coat Rhinolite Skim Trowelling",
          desc: "Applied wet-on-wet by master plasterers and water-polished to an impeccable mirror-smooth finish."
        }
      ],
      benefitHeadline: "Why This Matters For Your Home:",
      benefitPoints: [
        "Eliminates unsightly visible board lines completely",
        "Provides a pristine architectural surface ready for paint",
        "Enhances living room acoustic warmth and thermal comfort"
      ],
      preventHeadline: "What GDM Construction Prevents:",
      preventPoints: [
        "No sagging ceiling boards from spaced-out brandering",
        "No bubbling, peeling or rough plaster patches"
      ]
    },
    waterproofing: {
      id: "waterproofing",
      tabLabel: "Waterproofing Systems",
      tabIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2 4 5.5v6c0 5 3.4 8.6 8 10.5 4.6-1.9 8-5.5 8-10.5v-6L12 2z" />
          <path d="m9 12 2 2 4-4.5" />
        </svg>
      ),
      title: "Multi-Tier Waterproofing & Membrane Fusion",
      subtitle: "Heat-welded 4mm torch-on membranes and fibre-reinforced elastomeric barrier systems.",
      specs: [
        { label: "Torch-On Spec", value: "4mm Heat-Fused", detail: "Polyester-reinforced bitumen" },
        { label: "Parapet Banding", value: "Poly-Fibre Mesh", detail: "Triple-layer acrylic membrane" },
        { label: "Primer Coat", value: "Bitumen Primer", detail: "Deep-penetration substrate bond" },
        { label: "UV Topcoat", value: "Reflective Silver", detail: "Prevents thermal bitumen cracking" }
      ],
      layers: [
        {
          step: "01",
          title: "Substrate Cleaning & Primer Application",
          desc: "Concrete slabs and brick parapets wire-brushed, cleared of debris, and coated with bonding primer."
        },
        {
          step: "02",
          title: "Torch-On Membrane Fusion Welding",
          desc: "Propane gas torch flame-melts the bitumen underside, creating a monolithic weld to the slab."
        },
        {
          step: "03",
          title: "Parapet Lap Dressing & Silver UV Coat",
          desc: "Counter-flashed against parapet upstands and coated with protective UV-reflecting liquid."
        }
      ],
      benefitHeadline: "Why This Matters For Your Property:",
      benefitPoints: [
        "100% impervious to ponding rainwater on flat roofs",
        "Protects concrete reinforcement rebar from corrosion",
        "Stops parapet wall capillary moisture from rotting interior paint"
      ],
      preventHeadline: "What GDM Construction Prevents:",
      preventPoints: [
        "No un-torched cold laps peeling open during freezes",
        "No single-layer painting peeling off brick parapets"
      ]
    }
  };

  const current = SYSTEMS[activeTab];

  return (
    <section className="tech-section" id="materials">
      <div className="wrap tech-container">
        {/* 1. Section Header */}
        <div className="tech-header">
          <div className="tech-eyebrow">
            <span className="tech-eyebrow-dot" />
            <span>SANS 10400 Technical Standards &amp; Architecture</span>
          </div>

          <h2 className="tech-title">
            Engineering Precision.
            <span className="tech-title-accent"> Transparent Specifications.</span>
          </h2>

          <p className="tech-subtitle">
            We believe property owners deserve complete technical clarity. Explore how GDM installs, waterproofs, and builds according to strict South African building codes — with zero shortcuts.
          </p>
        </div>

        {/* 2. Interactive Segmented Tabs */}
        <div className="tech-tabs-bar" role="tablist">
          {(Object.keys(SYSTEMS) as TabKey[]).map((key) => {
            const sys = SYSTEMS[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                type="button"
                className={`tech-tab-btn ${isActive ? "active" : ""}`}
                onClick={() => setActiveTab(key)}
                role="tab"
                aria-selected={isActive}
              >
                <span className="tech-tab-icon">{sys.tabIcon}</span>
                <span className="tech-tab-label">{sys.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* 3. High-Precision Bento Breakdown */}
        <div className="tech-bento-grid">
          {/* Card A: Technical Parameters Matrix */}
          <div className="tech-card tech-card-specs">
            <div className="tech-card-header">
              <span className="tech-card-tag">Engineering Matrix</span>
              <h3 className="tech-card-title">{current.title}</h3>
              <p className="tech-card-desc">{current.subtitle}</p>
            </div>

            <div className="tech-specs-matrix">
              {current.specs.map((item, idx) => (
                <div key={idx} className="tech-spec-box">
                  <span className="tech-spec-lbl">{item.label}</span>
                  <div className="tech-spec-val">{item.value}</div>
                  <span className="tech-spec-dtl">{item.detail}</span>
                </div>
              ))}
            </div>

            <div className="tech-card-action">
              <button
                type="button"
                className="tech-action-quote-btn"
                onClick={onOpenBooking}
              >
                <span>Request Quote for {current.tabLabel}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "15px", height: "15px" }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card B: Installation Sequence Anatomy */}
          <div className="tech-card tech-card-layers">
            <span className="tech-card-tag">Craftsmanship Sequence</span>
            <h3 className="tech-card-subtitle">3-Layer Installation Method</h3>

            <div className="tech-layers-list">
              {current.layers.map((layer, idx) => (
                <div key={idx} className="tech-layer-item">
                  <div className="tech-layer-step">{layer.step}</div>
                  <div className="tech-layer-body">
                    <h4 className="tech-layer-title">{layer.title}</h4>
                    <p className="tech-layer-desc">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card C: Client Advantage & Risk Prevention */}
          <div className="tech-card tech-card-benefits">
            <span className="tech-card-tag" style={{ color: "#22c55e", borderColor: "rgba(34, 197, 94, 0.3)" }}>
              Quality Guarantee
            </span>

            <div className="tech-benefit-section">
              <h4 className="tech-benefit-heading">{current.benefitHeadline}</h4>
              <ul className="tech-benefit-list">
                {current.benefitPoints.map((pt, pIdx) => (
                  <li key={pIdx} className="tech-benefit-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" className="tech-check-icon">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tech-prevent-section">
              <h4 className="tech-prevent-heading">{current.preventHeadline}</h4>
              <ul className="tech-prevent-list">
                {current.preventPoints.map((pt, pIdx) => (
                  <li key={pIdx} className="tech-prevent-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" className="tech-cross-icon">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4. Bottom Compliance Bar */}
        <div className="tech-footer-strip">
          <div className="tech-footer-info">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "20px", height: "20px", color: "var(--amber-deep)" }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            <span>
              All specifications align with <strong>SANS 10400 Code of Practice</strong> for South African residential &amp; commercial buildings.
            </span>
          </div>

          <button
            type="button"
            className="tech-footer-action"
            onClick={onOpenBooking}
          >
            <span>Schedule On-Site Technical Assessment</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "16px", height: "16px" }}>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
