"use client";

import React, { useState, useEffect, useRef } from "react";

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0.1);
  const stepsRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: "/images/gallery-skyline.jpg", alt: "On-site roof and building inspection" },
    { src: "/images/gallery-crew-team.jpg", alt: "Transparent itemized quotation" },
    { src: "/images/gallery-dormers.jpg", alt: "Expert building and roof installation" },
    { src: "/images/gallery-estate.jpg", alt: "Final walkthrough and clean site handover" },
  ];

  useEffect(() => {
    let ticking = false;

    const updateTimeline = () => {
      ticking = false;
      if (!stepsRef.current) return;
      const rect = stepsRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.65;
      const end = vh * 0.35;
      const total = rect.height + start - end || 1;
      const passed = start - rect.top;
      const p = Math.max(0, Math.min(1, passed / total));

      setProgress(p);

      let stepIdx = 0;
      for (let i = 0; i < 4; i++) {
        const stepPos = i / 3;
        if (p >= stepPos - 0.04) {
          stepIdx = i;
        }
      }
      setActiveStep(stepIdx);
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateTimeline);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTimeline();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="process" className="process-dark">
      <div className="wrap">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 20px" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            How GDM Works
          </div>
          <h2>From initial assessment to clean handover</h2>
        </div>

        <div className="proc-grid">
          <div className="proc-timeline-col">
            <div className="proc-steps" id="procSteps" ref={stepsRef}>
              <div className="proc-line-track"></div>
              <div
                className="proc-line-fill"
                id="procLineFill"
                style={{ height: `${progress * 100}%` }}
              ></div>
              <div
                className="proc-star"
                id="procStar"
                style={{ top: `${progress * 100}%` }}
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 1.5 14 9l7.5 2-7.5 2-2 7.5-2-7.5L2.5 11 10 9l2-7.5z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Step 1 */}
              <div
                className={`proc-step ${activeStep >= 0 ? "lit" : ""}`}
                onClick={() => setActiveStep(0)}
                style={{ cursor: "pointer" }}
              >
                <span className="proc-num">01</span>
                <div className="proc-meta">Step One</div>
                <h3>Site Inspection</h3>
                <p>
                  We assess your roof, ceilings, or building structure in detail. Inspections and quotes are 100% free within our main service areas (Bedfordview, Sandton, Edenvale, Randburg &amp; surrounds).
                </p>
              </div>

              {/* Step 2 */}
              <div
                className={`proc-step ${activeStep >= 1 ? "lit" : ""}`}
                onClick={() => setActiveStep(1)}
                style={{ cursor: "pointer" }}
              >
                <span className="proc-num">02</span>
                <div className="proc-meta">Step Two</div>
                <h3>Itemized Quote</h3>
                <p>
                  A clear, detailed quote outlining exact materials, labor, and project milestones. No surprise change orders and no hidden costs.
                </p>
              </div>

              {/* Step 3 */}
              <div
                className={`proc-step ${activeStep >= 2 ? "lit" : ""}`}
                onClick={() => setActiveStep(2)}
                style={{ cursor: "pointer" }}
              >
                <span className="proc-num">03</span>
                <div className="proc-meta">Step Three</div>
                <h3>Expert Execution</h3>
                <p>
                  Our skilled tradesmen execute the work to South African national building standards, supervised on-site with regular progress updates.
                </p>
              </div>

              {/* Step 4 */}
              <div
                className={`proc-step ${activeStep >= 3 ? "lit" : ""}`}
                onClick={() => setActiveStep(3)}
                style={{ cursor: "pointer" }}
              >
                <span className="proc-num">04</span>
                <div className="proc-meta">Step Four</div>
                <h3>Walkthrough &amp; Cleanup</h3>
                <p>
                  Full site cleanup, removal of all construction debris/rubble, final quality inspection, and your official workmanship guarantee registered.
                </p>
              </div>
            </div>
          </div>

          <div className="proc-image-col">
            <div className="proc-image-frame" id="procImageFrame">
              {images.map((img, i) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={700}
                  height={393}
                  className={activeStep === i ? "active" : ""}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
