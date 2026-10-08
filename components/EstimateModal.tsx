"use client";

import React, { useState, useEffect } from "react";

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [service, setService] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("+27 ");
  const [address, setAddress] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSubmitted(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelectService = (val: string) => {
    setService(val);
    setTimeout(() => setStep(2), 220);
  };

  const handleStep2Next = () => {
    if (name.trim().length >= 2) setStep(3);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith("+27")) {
      val = "+27 " + val.replace(/^\+?2?7?\s*/, "");
    }
    setPhone(val);
  };

  const handleStep3Next = () => {
    const digits = phone.replace(/\D/g, "");
    if (digits.length >= 9) setStep(4);
  };

  const handleSubmit = () => {
    if (address.trim().length >= 3) {
      setIsSubmitting(true);

      const msg = `Hello Gladmore, I just submitted a Project Estimate Request on your website:

🔨 *Service:* ${service || "General Roofing & Renovation"}
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📍 *Property Location:* ${address}

Please provide an estimate and confirm next steps. Thank you!`;

      const waUrl = `https://wa.me/27833662700?text=${encodeURIComponent(msg)}`;

      // Synchronously open WhatsApp directly to Gladmore
      if (typeof window !== "undefined") {
        try {
          const waWindow = window.open(waUrl, "_blank");
          if (!waWindow || waWindow.closed || typeof waWindow.closed === "undefined") {
            window.location.href = waUrl;
          }
        } catch {
          window.location.href = waUrl;
        }
      }

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 500);
    }
  };

  const greetName = name.trim().split(" ")[0] || "Neighbor";

  return (
    <div
      className="est-modal open"
      id="estimateModal"
      role="dialog"
      aria-modal="true"
      aria-label="Request a Free Assessment"
    >
      <div className="est-backdrop" onClick={onClose}></div>
      <div className="est-card">
        <button className="est-close" aria-label="Close modal" onClick={onClose} type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted && (
          <div className="est-progress" id="estProgress">
            {[1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`est-dot ${step === i ? "active" : ""} ${step > i ? "done" : ""}`}
              ></span>
            ))}
          </div>
        )}

        {!isSubmitted ? (
          <div id="estFlow">
            {/* Step 1: Service */}
            {step === 1 && (
              <div className="est-step active" data-step="1">
                <div className="est-eyebrow">Step 1 of 4</div>
                <h3>What can GDM help you with?</h3>
                <p className="est-sub">Select your primary project requirement.</p>
                <div className="est-services">
                  {[
                    {
                      label: "New Roof Installation",
                      desc: "IBR, Chromadek, concrete & clay tiles, timber trusses",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 12.5 12 4l9 8.5" />
                          <path d="M6.5 9.7V19h11V9.7" />
                        </svg>
                      ),
                    },
                    {
                      label: "Ceilings & Rhinolite Skimming",
                      desc: "Flush plaster RhinoBoard ceilings, skim coating & cornices",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M3 9h18M9 21V9" />
                        </svg>
                      ),
                    },
                    {
                      label: "Interior & Exterior Painting",
                      desc: "Walls, woodwork, and protective acrylic roof painting",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
                        </svg>
                      ),
                    },
                    {
                      label: "Roof Repairs & Leak Detection",
                      desc: "Active leaks, flashing repairs, broken tiles & valley work",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="7" />
                          <path d="m20 20-3.5-3.5" />
                        </svg>
                      ),
                    },
                    {
                      label: "Waterproofing & Gutters",
                      desc: "Torch-on membrane, parapet walls & seamless gutters",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2 4 5.5v6c0 5 3.4 8.6 8 10.5 4.6-1.9 8-5.5 8-10.5v-6L12 2z" />
                          <path d="m9 12 2 2 4-4.5" />
                        </svg>
                      ),
                    },
                    {
                      label: "General Building & Renovations",
                      desc: "Drywalling, tiling, laminated flooring, kitchens & cupboards",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="8" width="18" height="12" rx="1" />
                          <path d="M3 8l4-4h10l4 4" />
                        </svg>
                      ),
                    },
                  ].map((s) => (
                    <button
                      key={s.label}
                      type="button"
                      className={`est-service-opt ${service === s.label ? "selected" : ""}`}
                      onClick={() => handleSelectService(s.label)}
                    >
                      <span className="est-svc-ic">{s.icon}</span>
                      <span>
                        <b>{s.label}</b>
                        <small>{s.desc}</small>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Name */}
            {step === 2 && (
              <div className="est-step active" data-step="2">
                <div className="est-eyebrow">Step 2 of 4</div>
                <h3>What&apos;s your name?</h3>
                <p className="est-sub">So our team knows who to address.</p>
                <input
                  id="estName"
                  className="est-input"
                  type="text"
                  placeholder="First and last name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleStep2Next();
                    }
                  }}
                  autoFocus
                />
                <div className="est-actions">
                  <button type="button" className="est-back" onClick={() => setStep(1)}>
                    ← Back
                  </button>
                  <button type="button" className="btn btn-amber" onClick={handleStep2Next}>
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Phone */}
            {step === 3 && (
              <div className="est-step active" data-step="3">
                <div className="est-eyebrow">Step 3 of 4</div>
                <h3>Best phone number or WhatsApp to reach you?</h3>
                <p className="est-sub">We&apos;ll call or WhatsApp to confirm your site inspection.</p>
                <input
                  id="estPhone"
                  className="est-input"
                  type="tel"
                  placeholder="+27 83 000 0000"
                  value={phone}
                  onChange={handlePhoneChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleStep3Next();
                    }
                  }}
                  autoFocus
                />
                <div className="est-actions">
                  <button type="button" className="est-back" onClick={() => setStep(2)}>
                    ← Back
                  </button>
                  <button type="button" className="btn btn-amber" onClick={handleStep3Next}>
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Address */}
            {step === 4 && (
              <div className="est-step active" data-step="4">
                <div className="est-eyebrow">Step 4 of 4</div>
                <h3>Where is the property located?</h3>
                <p className="est-sub">Suburb or street address in Johannesburg</p>
                <input
                  id="estAddress"
                  className="est-input"
                  type="text"
                  placeholder="e.g. 45 Florence Ave, Bedfordview, 2007"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSubmit();
                    }
                  }}
                  autoFocus
                />
                <div className="est-actions">
                  <button type="button" className="est-back" onClick={() => setStep(3)}>
                    ← Back
                  </button>
                  <button
                    type="button"
                    className="btn btn-amber"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting request…" : "Send Request →"}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Final Screen */
          <div className="est-final" id="estFinal" style={{ display: "block" }}>
            <div className="est-final-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4.5" />
              </svg>
            </div>
            <h3>Thank you, {greetName}! 🎉</h3>
            <p className="est-final-sub">
              Your assessment request has been received by GDM Construction &amp; Roofing. For an immediate response, <b>message or call us directly on WhatsApp</b>:
            </p>
            <a
              className="est-call-cta"
              href="https://wa.me/27833662700?text=Hello%20GDM%20Construction,%20I%20just%20submitted%20a%20quote%20request"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#25D366", borderColor: "#25D366" }}
            >
              <span className="est-call-ic" style={{ background: "rgba(255,255,255,0.2)" }}>
                <svg viewBox="0 0 24 24" fill="#ffffff" style={{ width: "20px", height: "20px" }}>
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.87 7.42 8.6 7.48 8.36 7.74C8.13 8 7.48 8.61 7.48 9.84C7.48 11.07 8.38 12.26 8.5 12.43C8.63 12.6 10.27 15.13 12.78 16.21C13.38 16.47 13.84 16.62 14.2 16.74C14.81 16.93 15.36 16.91 15.8 16.84C16.29 16.77 17.31 16.22 17.52 15.63C17.73 15.04 17.73 14.54 17.67 14.43C17.61 14.33 17.44 14.27 17.19 14.15C16.94 14.02 15.72 13.42 15.49 13.34C15.26 13.25 15.1 13.21 14.93 13.46C14.77 13.7 14.29 14.27 14.15 14.43C14 14.6 13.86 14.62 13.61 14.5C13.36 14.37 12.56 14.11 11.61 13.26C10.87 12.6 10.37 11.78 10.23 11.53C10.08 11.28 10.21 11.15 10.34 11.02C10.45 10.91 10.59 10.73 10.71 10.59C10.84 10.44 10.88 10.34 10.96 10.17C11.04 10 11 9.86 10.94 9.73C10.88 9.61 10.38 8.38 10.18 7.89C9.98 7.41 9.77 7.47 9.61 7.46C9.46 7.45 9.29 7.42 9.04 7.42Z" />
                </svg>
              </span>
              <span style={{ textAlign: "left" }}>
                <small
                  style={{
                    display: "block",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    opacity: 0.9,
                  }}
                >
                  WhatsApp GDM Construction
                </small>
                <b style={{ fontSize: "20px", fontFamily: "var(--serif)" }}>+27 83 366 2700</b>
              </span>
            </a>
            <p style={{ fontSize: "12.5px", color: "var(--ink-mute)", marginTop: "14px" }}>
              Or email: contact@gdmconstruction.co.za
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
