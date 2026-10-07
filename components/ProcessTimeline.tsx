"use client";

import React, { useState } from "react";

interface ProcessTimelineProps {
  onOpenBooking?: () => void;
}

interface StepData {
  number: string;
  phase: string;
  timing: string;
  title: string;
  shortSummary: string;
  deliverables: string[];
  clientBenefit: string;
  image: string;
  imageAlt: string;
  highlightStat: { val: string; lbl: string };
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState(0);

  const STEPS: StepData[] = [
    {
      number: "01",
      phase: "Phase 1",
      timing: "Day 1 • 100% Free",
      title: "On-Site Assessment & Roof Inspection",
      shortSummary: "Our senior technical estimator visits your property to thoroughly assess roof trusses, metal sheeting or tiles, ceiling moisture, and drainage channels.",
      deliverables: [
        "Full photographic audit of leak points, cracked tiles & structural wear",
        "Assessment of flashings, valleys, gutters & parapet brickwork",
        "100% Free in Sandton, Randburg, Edenvale, Bedfordview & Gauteng"
      ],
      clientBenefit: "Zero pressure, zero obligation. You receive complete technical clarity on your property's actual condition.",
      image: "/images/gallery-skyline.jpg",
      imageAlt: "GDM professional on-site roof inspection",
      highlightStat: { val: "100% Free", lbl: "Site Assessment" }
    },
    {
      number: "02",
      phase: "Phase 2",
      timing: "Within 24 Hours",
      title: "Transparent Line-Item Quotation",
      shortSummary: "You receive an itemized, fixed-price quote detailing certified SABS materials, scope of work, and target completion dates. No hidden costs.",
      deliverables: [
        "Itemized breakdown of certified materials (Marley, Safintra, Clotan, Overland)",
        "Guaranteed fixed labor pricing with zero mid-project surprise invoices",
        "Insurance-compliant photo and damage reports for storm/hail claims"
      ],
      clientBenefit: "What we quote is what you pay. Complete budget peace of mind before any work begins.",
      image: "/images/gallery-crew-team.jpg",
      imageAlt: "Transparent quotation and technical planning",
      highlightStat: { val: "24 Hours", lbl: "Quote Delivery" }
    },
    {
      number: "03",
      phase: "Phase 3",
      timing: "On-Schedule Build",
      title: "Supervised Execution by Master Tradesmen",
      shortSummary: "Our trained, in-house team executes the construction or roofing installation strictly to SANS building codes, under continuous on-site supervision.",
      deliverables: [
        "Dedicated Project Manager overseeing safety and quality on-site daily",
        "Regular WhatsApp milestone photos so you track progress in real time",
        "Weather-contingency storm covers protecting your home during downpours"
      ],
      clientBenefit: "No random subcontractors. Reliable, vetted tradesmen who respect your schedule and home.",
      image: "/images/gallery-dormers.jpg",
      imageAlt: "Expert roofing installation and construction",
      highlightStat: { val: "100%", lbl: "Supervised Work" }
    },
    {
      number: "04",
      phase: "Phase 4",
      timing: "Final Signoff",
      title: "Site Cleanup & Official Handover",
      shortSummary: "We perform a joint walkthrough inspection, run magnetic sweepers to eliminate all nails and rubble, and register your written workmanship guarantee.",
      deliverables: [
        "Complete site rubble clearing & disposal away from your property",
        "Magnetic sweep of driveway, lawn, and gutters for stray metal/nails",
        "Official GDM Workmanship Guarantee certificate signed and handed over"
      ],
      clientBenefit: "Your home is left spotless, watertight, structurally certified, and fully guaranteed.",
      image: "/images/gallery-estate.jpg",
      imageAlt: "Clean site handover and finished home",
      highlightStat: { val: "Written", lbl: "Guarantee Issued" }
    }
  ];

  const current = STEPS[activeStep];

  return (
    <section id="process" className="process-section">
      <div className="wrap process-container">
        {/* 1. Header Section */}
        <div className="process-header">
          <div className="process-eyebrow">
            <span className="process-eyebrow-dot" />
            <span>Structured Client Journey</span>
          </div>

          <h2 className="process-title">
            How GDM Works:
            <span className="process-title-highlight"> From Assessment to Handover</span>
          </h2>

          <p className="process-subtitle">
            No unexpected price spikes, no disappearing crews. A transparent, professionally managed 4-step process designed around your schedule.
          </p>
        </div>

        {/* 2. Interactive Stepper Navigation Bar */}
        <div className="process-stepper-bar">
          <div className="process-stepper-track">
            <div
              className="process-stepper-fill"
              style={{ width: `${(activeStep / (STEPS.length - 1)) * 100}%` }}
            />
          </div>

          {STEPS.map((step, idx) => {
            const isCompleted = idx < activeStep;
            const isActive = idx === activeStep;
            return (
              <button
                key={step.number}
                type="button"
                className={`process-step-node ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="process-node-circle">
                  {isCompleted ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ width: "14px", height: "14px" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <span>{step.number}</span>
                  )}
                </div>
                <div className="process-node-labels">
                  <span className="process-node-phase">{step.phase}</span>
                  <span className="process-node-title">
                    {idx === 0 && "Site Inspection"}
                    {idx === 1 && "Itemized Quote"}
                    {idx === 2 && "Expert Build"}
                    {idx === 3 && "Final Handover"}
                  </span>
                  <span className="process-node-timing">{step.timing}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* 3. Active Step Showcase (Dual-Column Showcase Card) */}
        <div className="process-showcase-card">
          {/* Left Column: Details & Deliverables */}
          <div className="process-details-col">
            <div className="process-phase-badge">
              <span>{current.phase}</span>
              <span className="process-badge-sep">•</span>
              <span className="process-badge-time">{current.timing}</span>
            </div>

            <h3 className="process-step-title">{current.title}</h3>
            <p className="process-step-summary">{current.shortSummary}</p>

            <div className="process-deliverables-block">
              <h4 className="process-deliverables-title">What You Receive in This Step:</h4>
              <ul className="process-deliverables-list">
                {current.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="process-deliverable-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" className="process-check-icon">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="process-benefit-box">
              <div className="process-benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "16px", height: "16px" }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="process-benefit-text">
                <strong>Client Peace of Mind:</strong> {current.clientBenefit}
              </div>
            </div>

            <div className="process-actions-group">
              <button
                type="button"
                className="process-primary-action-btn"
                onClick={onOpenBooking}
              >
                <span>Start Step 1: Book Free Inspection</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "16px", height: "16px" }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <div className="process-step-navigation-btns">
                <button
                  type="button"
                  className="process-nav-btn"
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  aria-label="Previous step"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "15px", height: "15px" }}>
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  className="process-nav-btn process-nav-btn-next"
                  onClick={() => setActiveStep((prev) => Math.min(STEPS.length - 1, prev + 1))}
                  disabled={activeStep === STEPS.length - 1}
                  aria-label="Next step"
                >
                  <span>Next</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "15px", height: "15px" }}>
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame with Real Scene & Floating Metric */}
          <div className="process-visual-col">
            <div className="process-image-wrapper">
              <img
                src={current.image}
                alt={current.imageAlt}
                width={650}
                height={450}
                className="process-visual-img"
              />

              {/* Floating Stat Badge */}
              <div className="process-floating-stat">
                <span className="process-stat-val">{current.highlightStat.val}</span>
                <span className="process-stat-lbl">{current.highlightStat.lbl}</span>
              </div>

              {/* Step indicator pill on image */}
              <div className="process-image-step-indicator">
                Step {current.number} of 04
              </div>
            </div>
          </div>
        </div>

        {/* 4. Bottom Assurance Banner */}
        <div className="process-bottom-banner">
          <div className="process-bottom-left">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "20px", height: "20px", color: "#22c55e", flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="process-bottom-text">
              <strong>Fixed-Price Commitment:</strong> GDM Construction adheres strictly to quoted pricing. No surprise variations, no hidden fees, and full transparent milestone communication.
            </p>
          </div>

          <button
            type="button"
            className="process-bottom-cta-btn"
            onClick={onOpenBooking}
          >
            <span>Request Free Site Quote</span>
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
