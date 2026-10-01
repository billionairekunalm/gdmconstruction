"use client";

import React, { useState } from "react";

interface FinancingCalculatorProps {
  onOpenBooking: () => void;
}

export const FinancingCalculator: React.FC<FinancingCalculatorProps> = ({ onOpenBooking }) => {
  const [amount, setAmount] = useState<number>(65000);
  const [projectType, setProjectType] = useState<string>("New Roof Installation");

  const projectEstimates: Record<
    string,
    { typicalTime: string; includes: string; note: string }
  > = {
    "New Roof Installation": {
      typicalTime: "3 to 6 Days",
      includes: "Truss check, IBR/Chromadek/Tile materials, waterproofing & ridge capping",
      note: "Includes on-site project management & rubble removal",
    },
    "Ceilings & Rhinolite": {
      typicalTime: "2 to 4 Days",
      includes: "RhinoBoard fitting, authentic Rhinolite skim coating, cornices & jointing",
      note: "Mirror-smooth finish ready for undercoat and paint",
    },
    "Painting & Waterproofing": {
      typicalTime: "2 to 5 Days",
      includes: "High-build roof acrylic paint, parapet membrane, primer & topcoats",
      note: "Weatherproof protection against Highveld UV and summer storms",
    },
    "Full Renovation": {
      typicalTime: "1 to 3 Weeks",
      includes: "Drywalling, tiling, laminate floors, ceilings, and custom carpentry",
      note: "Turnkey project execution with dedicated tradesmen",
    },
  };

  const selected = projectEstimates[projectType] || projectEstimates["New Roof Installation"];

  return (
    <section className="financing" id="calculator">
      <div className="wrap financing-grid">
        <div className="financing-copy">
          <div className="eyebrow">Project Cost Estimator</div>
          <h2>Plan your budget with clarity and honest pricing.</h2>
          <p className="lede">
            Every building, ceiling, or roofing project is unique. Use our quick guide to gauge estimated scopes, then book a 100% free on-site assessment for an exact, line-item quotation.
          </p>

          <ul className="financing-points">
            <li>
              <span className="tick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>Free site visits &amp; measurements within our main service areas</span>
            </li>
            <li>
              <span className="tick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>Transparent line-item quotation with zero surprise extras</span>
            </li>
            <li>
              <span className="tick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>VAT Registered company compliant with South African building standards</span>
            </li>
          </ul>
        </div>

        <div className="financing-widget-card">
          <div className="financing-widget-head">
            <span className="financing-badge">GDM Estimate Guide</span>
            <span className="financing-secure">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="10" width="16" height="10" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </svg>
              Free Assessment Included
            </span>
          </div>

          <div className="calc-body">
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--ink-mute)",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Select Project Scope
            </div>
            <div
              className="calc-term-picker"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}
            >
              {[
                "New Roof Installation",
                "Ceilings & Rhinolite",
                "Painting & Waterproofing",
                "Full Renovation",
              ].map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`calc-term-btn ${projectType === type ? "active" : ""}`}
                  style={{ fontSize: "12px", padding: "10px 8px", textAlign: "center" }}
                  onClick={() => setProjectType(type)}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="calc-slider-group" style={{ marginTop: "18px" }}>
              <div className="calc-slider-header">
                <span className="calc-slider-label">Estimated Budget Scale</span>
                <span className="calc-slider-val" id="calcAmountDisplay">
                  R {amount.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                className="calc-range"
                id="calcAmount"
                min={15000}
                max={300000}
                step={5000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>

            <div className="calc-result-box" style={{ textAlign: "left", padding: "16px 20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "13px", color: "var(--ink-soft)" }}>Estimated Duration:</span>
                <strong style={{ fontSize: "14px", color: "var(--amber-deep)" }}>
                  {selected.typicalTime}
                </strong>
              </div>
              <div style={{ fontSize: "12.5px", color: "var(--ink)", marginBottom: "6px" }}>
                <strong>Includes:</strong> {selected.includes}
              </div>
              <div style={{ fontSize: "12px", color: "var(--ink-mute)" }}>
                💡 {selected.note}
              </div>
            </div>

            <button
              type="button"
              className="btn btn-amber open-booking"
              style={{ width: "100%", justifyContent: "center", padding: "15px" }}
              onClick={onOpenBooking}
            >
              Get an Exact Written Quote (Free Site Visit)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
