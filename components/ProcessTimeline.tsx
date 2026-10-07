"use client";

import React, { useState, useRef, useEffect } from "react";

interface ProcessTimelineProps {
  onOpenBooking?: () => void;
}

interface StepData {
  number: string;
  stepNumber: number;
  tabLabel: string;
  tabIcon: string;
  timing: string;
  title: string;
  summary: string;
  deliverables: { icon: string; title: string; desc: string }[];
  guaranteeText: string;
  ctaText: string;
  image: string;
  imageAlt: string;
  badgeStat: { val: string; lbl: string };
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const STEPS: StepData[] = [
    {
      number: "01",
      stepNumber: 1,
      tabLabel: "Inspection",
      tabIcon: "🔍",
      timing: "Day 1 • 100% Free",
      title: "Free On-Site Assessment & Roof Inspection",
      summary: "Our senior technical estimator visits your property to conduct a thorough structural audit of trusses, roof covering, leak origins, and moisture levels.",
      deliverables: [
        {
          icon: "📸",
          title: "Full Photographic Audit",
          desc: "High-resolution photos of leak points, broken tiles, rusted flashings, and structural fatigue."
        },
        {
          icon: "🔍",
          title: "Complete Structural Diagnostic",
          desc: "We test valleys, gutters, parapet brickwork, and ceiling damp to uncover root causes."
        },
        {
          icon: "⚖️",
          title: "Zero Sales Pressure",
          desc: "100% free across Johannesburg & Gauteng with honest, objective architectural guidance."
        }
      ],
      guaranteeText: "Zero pressure, zero obligation. You receive total technical clarity on your roof's condition.",
      ctaText: "Book Free Site Inspection",
      image: "/images/gallery-skyline.jpg",
      imageAlt: "GDM professional on-site roof inspection",
      badgeStat: { val: "100% Free", lbl: "Site Assessment" }
    },
    {
      number: "02",
      stepNumber: 2,
      tabLabel: "Quote",
      tabIcon: "📋",
      timing: "Within 24 Hours",
      title: "Transparent, Fixed-Price Line-Item Quote",
      summary: "You receive an itemized quote detailing exact SABS certified materials, scope of work, timeline, and all costs upfront. What we quote is what you pay.",
      deliverables: [
        {
          icon: "🧾",
          title: "Line-by-Line Cost Breakdown",
          desc: "Clear itemized pricing for certified materials (Marley, Safintra, Clotan, Overland) and labor."
        },
        {
          icon: "🔒",
          title: "Fixed-Price Guarantee",
          desc: "No hidden costs, no surprise mid-project variation invoices. Full price security."
        },
        {
          icon: "📑",
          title: "Insurance-Ready Reports",
          desc: "Compliant damage documentation and photo reports ready for storm and hail claims."
        }
      ],
      guaranteeText: "Fixed-price commitment. Every cent is agreed upfront with zero surprise variations.",
      ctaText: "Get Your 24-Hour Quote",
      image: "/images/gallery-crew-team.jpg",
      imageAlt: "Transparent quotation and technical planning",
      badgeStat: { val: "24 Hours", lbl: "Guaranteed Turnaround" }
    },
    {
      number: "03",
      stepNumber: 3,
      tabLabel: "Build",
      tabIcon: "🔨",
      timing: "On-Schedule Execution",
      title: "Supervised Execution by Master Tradesmen",
      summary: "Our trained, in-house construction crew executes the installation strictly to SANS building codes, under daily on-site supervision and weather protection.",
      deliverables: [
        {
          icon: "👷",
          title: "Dedicated On-Site Supervisor",
          desc: "A hands-on Project Manager oversees daily craftsmanship, site safety, and quality standards."
        },
        {
          icon: "📲",
          title: "Daily WhatsApp Photo Updates",
          desc: "You receive regular milestone photos and progress reports directly to your phone."
        },
        {
          icon: "🛡️",
          title: "Complete Property Protection",
          desc: "Heavy-duty weather tarps protect your home from sudden Highveld afternoon downpours."
        }
      ],
      guaranteeText: "No random subcontractors. Reliable, vetted tradesmen who treat your home with complete respect.",
      ctaText: "Consult on Your Build",
      image: "/images/gallery-dormers.jpg",
      imageAlt: "Expert roofing installation and construction",
      badgeStat: { val: "100%", lbl: "Supervised Build" }
    },
    {
      number: "04",
      stepNumber: 4,
      tabLabel: "Handover",
      tabIcon: "🤝",
      timing: "Handover Day",
      title: "Spotless Site Cleanup & Official Handover",
      summary: "We conduct a thorough joint walkthrough inspection, run industrial magnetic sweepers for nails and debris, and hand over your written warranty certificate.",
      deliverables: [
        {
          icon: "🧲",
          title: "Industrial Magnetic Nail Sweep",
          desc: "We sweep your driveway, lawn, flowerbeds, and gutters so not a single stray nail remains."
        },
        {
          icon: "🚚",
          title: "Full Rubble & Waste Removal",
          desc: "All construction debris is cleared and safely transported away from your property."
        },
        {
          icon: "📜",
          title: "Written Workmanship Guarantee",
          desc: "Official signed GDM guarantee certificate certifying structural integrity and water-tightness."
        }
      ],
      guaranteeText: "Your property is left cleaner than we found it, structurally certified, and fully guaranteed.",
      ctaText: "Schedule Consultation & Warranty",
      image: "/images/gallery-estate.jpg",
      imageAlt: "Clean site handover and finished home",
      badgeStat: { val: "Written", lbl: "Guarantee Issued" }
    }
  ];

  const handleStepChange = (newIndex: number) => {
    if (newIndex === activeStep) return;
    setIsAnimating(true);
    setActiveStep(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [activeStep]);

  // Touch Swipe Gesture for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      if (diff > 0 && activeStep < STEPS.length - 1) {
        handleStepChange(activeStep + 1);
      } else if (diff < 0 && activeStep > 0) {
        handleStepChange(activeStep - 1);
      }
    }
    touchStartX.current = null;
  };

  const current = STEPS[activeStep];

  return (
    <section id="process" className="proc-section">
      <div className="wrap proc-container">
        {/* 1. Header */}
        <div className="proc-header">
          <div className="proc-eyebrow">
            <span className="proc-eyebrow-dot" />
            <span>How Working With GDM Works</span>
          </div>

          <h2 className="proc-title">
            Simple 4-Step Process.
            <span className="proc-title-highlight"> Zero Hidden Surprises.</span>
          </h2>

          <p className="proc-subtitle">
            From free on-site diagnosis to spotless final cleanup, here is exactly what you can expect when partnering with GDM Construction.
          </p>
        </div>

        {/* 2. Interactive Segmented Stepper Controller */}
        <div className="proc-stepper-wrapper">
          <div className="proc-stepper-tabs" role="tablist" aria-label="Process Steps">
            {STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              const isPassed = idx < activeStep;
              return (
                <button
                  key={step.number}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`step-panel-${idx}`}
                  id={`step-tab-${idx}`}
                  className={`proc-tab-btn ${isActive ? "active" : ""} ${isPassed ? "passed" : ""}`}
                  onClick={() => handleStepChange(idx)}
                >
                  <div className="proc-tab-icon-wrap">
                    <span className="proc-tab-num">{step.number}</span>
                    <span className="proc-tab-emoji">{step.tabIcon}</span>
                  </div>
                  <div className="proc-tab-text">
                    <span className="proc-tab-label">{step.tabLabel}</span>
                    <span className="proc-tab-timing">{step.timing.split("•")[0].trim()}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Smooth animated progress line */}
          <div className="proc-progress-line-track">
            <div
              className="proc-progress-line-fill"
              style={{
                width: `${((activeStep + 1) / STEPS.length) * 100}%`
              }}
            />
          </div>
        </div>

        {/* 3. Showcase Card with Silky Animation & Touch Gestures */}
        <div
          className={`proc-card ${isAnimating ? "proc-card-animating" : ""}`}
          id={`step-panel-${activeStep}`}
          role="tabpanel"
          aria-labelledby={`step-tab-${activeStep}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Column: Clear Deliverables & Action */}
          <div className="proc-info-col">
            <div className="proc-step-meta">
              <span className="proc-step-pill">
                Step {current.number} of 04
              </span>
              <span className="proc-meta-time">
                ⏱️ {current.timing}
              </span>
            </div>

            <h3 className="proc-step-heading">{current.title}</h3>
            <p className="proc-step-summary">{current.summary}</p>

            {/* 3 Tangible Deliverables with Clean Cards */}
            <div className="proc-deliverables-container">
              <div className="proc-deliverables-heading">
                <span>What Happens in This Step:</span>
              </div>
              <div className="proc-deliverables-grid">
                {current.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="proc-deliverable-card">
                    <span className="proc-deliv-icon">{item.icon}</span>
                    <div className="proc-deliv-content">
                      <h4 className="proc-deliv-title">{item.title}</h4>
                      <p className="proc-deliv-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Guarantee Callout */}
            <div className="proc-guarantee-box">
              <div className="proc-guarantee-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "16px", height: "16px" }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="proc-guarantee-text">
                <strong>Our Commitment:</strong> {current.guaranteeText}
              </div>
            </div>

            {/* Actions & Step Switching Controls */}
            <div className="proc-actions-bar">
              <button
                type="button"
                className="proc-cta-btn"
                onClick={onOpenBooking}
              >
                <span>{current.ctaText}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "16px", height: "16px" }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <div className="proc-nav-controls">
                <button
                  type="button"
                  className="proc-nav-arrow"
                  onClick={() => handleStepChange(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  aria-label="Previous step"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "16px", height: "16px" }}>
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  <span>Prev</span>
                </button>

                <span className="proc-counter-text">
                  {activeStep + 1} / {STEPS.length}
                </span>

                <button
                  type="button"
                  className="proc-nav-arrow proc-nav-arrow-next"
                  onClick={() => handleStepChange(Math.min(STEPS.length - 1, activeStep + 1))}
                  disabled={activeStep === STEPS.length - 1}
                  aria-label="Next step"
                >
                  <span>Next</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "16px", height: "16px" }}>
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Scene & Guarantee Badge */}
          <div className="proc-visual-col">
            <div className="proc-img-frame">
              <img
                src={current.image}
                alt={current.imageAlt}
                width={600}
                height={440}
                className="proc-img"
              />

              {/* Floating Stat Badge */}
              <div className="proc-float-stat">
                <span className="proc-stat-number">{current.badgeStat.val}</span>
                <span className="proc-stat-caption">{current.badgeStat.lbl}</span>
              </div>

              {/* Active Step Indicator Pill */}
              <div className="proc-img-tag">
                Step 0{activeStep + 1} of 04
              </div>
            </div>

            <div className="proc-mobile-swipe-guide">
              <span>← Swipe left or right to explore steps →</span>
            </div>
          </div>
        </div>

        {/* 4. Bottom Assurance Strip */}
        <div className="proc-bottom-strip">
          <div className="proc-bottom-info">
            <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" style={{ width: "20px", height: "20px", flexShrink: 0 }}>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>
              <strong>Fixed-Price Commitment:</strong> GDM Construction adheres strictly to agreed quotations. No sudden bill shocks, no disappearing builders, and daily WhatsApp transparency.
            </span>
          </div>

          <button
            type="button"
            className="proc-bottom-btn"
            onClick={onOpenBooking}
          >
            <span>Start With Step 1: Free Assessment</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "15px", height: "15px" }}>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
