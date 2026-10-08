"use client";

import React, { useState, useEffect, useRef } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ServiceOption {
  id: string;
  label: string;
  shortLabel: string;
  icon: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { id: "new-roof", label: "New Roof Installation (IBR / Chromadek / Tile)", shortLabel: "New Roof", icon: "🔨" },
  { id: "ceilings", label: "Ceilings & Rhinolite Skimming", shortLabel: "Rhinolite Ceilings", icon: "🏠" },
  { id: "repairs", label: "Roof Repairs & Leak Detection", shortLabel: "Leak Repair", icon: "⚡" },
  { id: "waterproofing", label: "Waterproofing Systems (Parapets / Flat Slabs)", shortLabel: "Waterproofing", icon: "💧" },
  { id: "painting", label: "Roof Painting & Protective Wall Coatings", shortLabel: "Roof Painting", icon: "🎨" },
  { id: "renovations", label: "Complete Home & Turnkey Renovation", shortLabel: "Home Renovation", icon: "🏗️" },
  { id: "re-roofing", label: "Re-Roofing & Sheeting Replacement", shortLabel: "Full Re-Roofing", icon: "🔄" },
  { id: "gutters", label: "Gutters, Fascias & Bargeboards", shortLabel: "Gutters & Fascias", icon: "🌧️" },
  { id: "flooring", label: "Laminated Flooring & Tiling", shortLabel: "Flooring & Tiling", icon: "🪵" },
  { id: "kitchens", label: "Kitchen Renovations & Built-In Cupboards", shortLabel: "Kitchens & Joinery", icon: "🍽️" },
];

const TIME_SLOTS = [
  { time: "08:30 AM", period: "morning", badge: "Morning Window" },
  { time: "10:00 AM", period: "morning", badge: "Morning Window" },
  { time: "11:30 AM", period: "morning", badge: "Midday Window" },
  { time: "01:30 PM", period: "afternoon", badge: "Afternoon Window" },
  { time: "03:00 PM", period: "afternoon", badge: "Afternoon Window" },
  { time: "04:30 PM", period: "afternoon", badge: "Late Afternoon" },
];

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [dates, setDates] = useState<{ dayName: string; dayNum: number; monthName: string; full: string; relative: string | null; dateObj: Date }[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("10:00 AM");
  const [timePeriodFilter, setTimePeriodFilter] = useState<"all" | "morning" | "afternoon">("all");
  const [selectedService, setSelectedService] = useState<string>("New Roof Installation (IBR / Chromadek / Tile)");

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [isUrgent, setIsUrgent] = useState<boolean>(false);

  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const datesScrollRef = useRef<HTMLDivElement>(null);

  // Generate 14-day schedule excluding Sundays
  useEffect(() => {
    const daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthsArr = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    const today = new Date();
    const newDates = [];

    for (let i = 0; i < 16; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      // Skip Sundays since business is closed
      if (d.getDay() === 0) continue;

      const dayName = daysArr[d.getDay()];
      const dayNum = d.getDate();
      const monthName = monthsArr[d.getMonth()];
      const full = `${dayName}, ${monthName} ${dayNum}`;

      let relative: string | null = null;
      if (i === 0) relative = "Today";
      else if (i === 1) relative = "Tomorrow";

      newDates.push({ dayName, dayNum, monthName, full, relative, dateObj: d });
      if (newDates.length >= 12) break;
    }

    setDates(newDates);
    if (newDates.length > 0 && !selectedDate) {
      setSelectedDate(newDates[0].full);
    }
  }, []);

  // Lock background scroll when modal is open and handle Escape key
  useEffect(() => {
    if (isOpen) {
      setIsConfirmed(false);
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleScrollDates = (direction: "left" | "right") => {
    if (!datesScrollRef.current) return;
    const scrollAmount = 240;
    datesScrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const getFormattedPhone = () => {
    let clean = phone.trim();
    if (clean.startsWith("+27")) return clean;
    if (clean.startsWith("0")) return "+27 " + clean.substring(1);
    if (clean.startsWith("+")) return clean;
    if (clean) return "+27 " + clean;
    return "+27 83 366 2700";
  };

  const buildWhatsAppUrl = (refCode: string) => {
    const formatted = getFormattedPhone();
    const text = `Hello Gladmore, I just scheduled a Free Site Inspection on your website:

📋 *Booking Ref:* ${refCode}
📅 *Date:* ${selectedDate} at ${selectedSlot}
🔨 *Service:* ${selectedService}
📍 *Property Address:* ${address}
👤 *Name:* ${name}
📞 *Phone:* ${formatted}
${isUrgent ? '🚨 *URGENCY:* Active Leak / Storm Damage (Priority Dispatch Requested)\n' : ''}${notes ? `📝 *Notes:* ${notes}\n` : ''}
Please confirm my appointment. Thank you!`;

    return `https://wa.me/27833662700?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedRef = `GDM-JHB-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(generatedRef);

    const waUrl = buildWhatsAppUrl(generatedRef);

    // Save backup to browser local storage
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const existing = JSON.parse(localStorage.getItem("gdm_site_inspections") || "[]");
        existing.push({
          ref: generatedRef,
          date: selectedDate,
          time: selectedSlot,
          service: selectedService,
          name,
          phone,
          address,
          notes,
          isUrgent,
          createdAt: new Date().toISOString(),
        });
        localStorage.setItem("gdm_site_inspections", JSON.stringify(existing));
      }
    } catch {
      // Storage fallback
    }

    // Direct synchronous WhatsApp launch so pop-up blockers never intercept it
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
      setIsConfirmed(true);
    }, 450);
  };

  const getWhatsAppBookingUrl = () => {
    return buildWhatsAppUrl(bookingRef || "GDM-JHB-BOOKING");
  };

  const handleDownloadCalendar = () => {
    const cleanDateStr = selectedDate || "Upcoming Inspection";
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//GDM Construction & Roofing//Site Inspection//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:GDM Site Inspection - ${selectedService}
DESCRIPTION:Free on-site roof & renovation assessment with Gladmore (GDM Construction). Property: ${address || "Johannesburg"}. Phone: +27 83 366 2700. Ref: ${bookingRef}.
LOCATION:${address || "Johannesburg"}
STATUS:CONFIRMED
PRIORITY:${isUrgent ? "1" : "5"}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `GDM-Inspection-${bookingRef || "Appointment"}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredSlots = TIME_SLOTS.filter(
    (slot) => timePeriodFilter === "all" || slot.period === timePeriodFilter
  );

  return (
    <div
      className="booking-modal open"
      id="bookingModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bookingModalTitle"
    >
      {/* Backdrop with Blur */}
      <div
        className="booking-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Modal Card */}
      <div className="booking-card">
        {/* Mobile Native Drag Handle */}
        <div className="booking-drag-handle" aria-hidden="true" />

        {/* Header Bar */}
        <div className="booking-card-head">
          <div className="booking-head-content">
            <div className="booking-head-eyebrow">
              <span className="booking-eyebrow-dot" />
              <span className="desktop-only">Zero Call-Out Fee · SANS 10400 Certified · 24/7 Response</span>
              <span className="mobile-only">Zero Call-Out Fee · 24/7 Response</span>
            </div>
            <h4 id="bookingModalTitle" className="booking-head-title">
              Schedule Free Site Inspection
            </h4>
            <span className="booking-head-desc desktop-only">
              Choose your preferred date &amp; time for an on-site roof or renovation evaluation
            </span>
          </div>

          <div className="booking-head-actions">
            <a
              href="tel:+27833662700"
              className="booking-head-phone-btn desktop-only"
              title="Call Gladmore directly"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+27 83 366 2700</span>
            </a>

            <button
              className="booking-close-btn"
              id="bookingClose"
              aria-label="Close modal and return to website"
              type="button"
              onClick={onClose}
              title="Close and go back to website"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Micro Trust Bar (Prevents Content Burying) */}
        <div className="booking-mobile-trust-bar">
          <span className="mobile-trust-pill">
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "12px", height: "12px", color: "#10b981" }}>
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            <span>100% Free Inspection</span>
          </span>
          <span className="mobile-trust-pill">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "12px", height: "12px", color: "var(--amber)" }}>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>30–45 Mins</span>
          </span>
          <span className="mobile-trust-pill">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "12px", height: "12px", color: "var(--amber)" }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span>Written Quote</span>
          </span>
        </div>

        {/* Grid Content: Sidebar + Form Body */}
        <div className="booking-content-grid">
          {/* Left Sidebar (Desktop Only / Condensed on Tablet) */}
          <div className="booking-sidebar">
            {/* Evaluator Badge */}
            <div className="booking-evaluator-card">
              <div className="evaluator-avatar-wrap">
                <img
                  src="/images/gdm-logo.jpg"
                  className="evaluator-avatar"
                  alt="Gladmore / GDM Evaluator"
                />
                <span className="evaluator-status-dot" title="Available for inspections" />
              </div>
              <div className="evaluator-meta">
                <div className="evaluator-name">Gladmore &amp; GDM Lead</div>
                <div className="evaluator-role">Senior Construction Assessor</div>
                <div className="evaluator-region">📍 Johannesburg &amp; Surrounds</div>
              </div>
            </div>

            {/* 4 Inspection Guarantees */}
            <div className="booking-pillars-list">
              <div className="booking-pillar-item">
                <div className="pillar-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="pillar-text">
                  <div className="pillar-title">30–45 Mins Assessment</div>
                  <div className="pillar-desc">Comprehensive roof, truss, ceiling &amp; moisture evaluation</div>
                </div>
              </div>

              <div className="booking-pillar-item">
                <div className="pillar-ic">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>
                <div className="pillar-text">
                  <div className="pillar-title">Zero Call-Out Fee</div>
                  <div className="pillar-desc">No charge across Bedfordview, Sandton, Edenvale &amp; Randburg</div>
                </div>
              </div>

              <div className="booking-pillar-item">
                <div className="pillar-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <div className="pillar-text">
                  <div className="pillar-title">Written Itemized Quote</div>
                  <div className="pillar-desc">Delivered via WhatsApp &amp; Email within 24 hours</div>
                </div>
              </div>

              <div className="booking-pillar-item">
                <div className="pillar-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="pillar-text">
                  <div className="pillar-title">SANS 10400 Standard</div>
                  <div className="pillar-desc">Written 10-year workmanship guarantee included</div>
                </div>
              </div>
            </div>

            {/* Dynamic Live Appointment Ticket Preview */}
            <div className="booking-live-pass">
              <div className="live-pass-header">
                <span className="live-pass-tag">LIVE PASS PREVIEW</span>
                <span className="live-pass-cost">R0.00 FREE</span>
              </div>
              <div className="live-pass-body">
                <div className="live-pass-row">
                  <span className="live-pass-label">Date &amp; Window:</span>
                  <span className="live-pass-val">{selectedDate || "Select date"} @ {selectedSlot}</span>
                </div>
                <div className="live-pass-row">
                  <span className="live-pass-label">Service:</span>
                  <span className="live-pass-val text-truncate">{selectedService}</span>
                </div>
                <div className="live-pass-row">
                  <span className="live-pass-label">Area:</span>
                  <span className="live-pass-val text-truncate">{address ? address : "Johannesburg"}</span>
                </div>
              </div>
            </div>

            {/* Prefer Direct WhatsApp Link */}
            <div className="booking-sidebar-whatsapp">
              <span className="sidebar-wa-label">Prefer to schedule via WhatsApp?</span>
              <a
                href="https://wa.me/27833662700?text=Hello%20Gladmore,%20I%20would%20like%20to%20schedule%20a%20free%20site%20inspection%20for%20my%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="sidebar-wa-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px" }}>
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.87 7.42 8.6 7.48 8.36 7.74C8.13 8 7.48 8.61 7.48 9.84C7.48 11.07 8.38 12.26 8.5 12.43C8.63 12.6 10.27 15.13 12.78 16.21C13.38 16.47 13.84 16.62 14.2 16.74C14.81 16.93 15.36 16.91 15.8 16.84C16.29 16.77 17.31 16.22 17.52 15.63C17.73 15.04 17.73 14.54 17.67 14.43C17.61 14.33 17.44 14.27 17.19 14.15C16.94 14.02 15.72 13.42 15.49 13.34C15.26 13.25 15.1 13.21 14.93 13.46C14.77 13.7 14.29 14.27 14.15 14.43C14 14.6 13.86 14.62 13.61 14.5C13.36 14.37 12.56 14.11 11.61 13.26C10.87 12.6 10.37 11.78 10.23 11.53C10.08 11.28 10.21 11.15 10.34 11.02C10.45 10.91 10.59 10.73 10.71 10.59C10.84 10.44 10.88 10.34 10.96 10.17C11.04 10 11 9.86 10.94 9.73C10.88 9.61 10.38 8.38 10.18 7.89C9.98 7.41 9.77 7.47 9.61 7.46C9.46 7.45 9.29 7.42 9.04 7.42Z" />
                </svg>
                <span>Chat with Gladmore (+27 83 366 2700)</span>
              </a>
            </div>
          </div>

          {/* Main Booking Interactive Flow */}
          <div className="booking-main">
            {!isConfirmed ? (
              <form id="bookingForm" onSubmit={handleSubmit} className="booking-form-flow">
                {/* 1. Pick Service */}
                <div className="booking-step-block">
                  <div className="booking-step-header">
                    <div className="booking-step-title-wrap">
                      <span className="booking-step-badge">1</span>
                      <h5 className="booking-step-title">Select Service Needed</h5>
                    </div>
                  </div>

                  {/* Quick-tap service pills */}
                  <div className="booking-service-chips-grid">
                    {SERVICE_OPTIONS.slice(0, 6).map((opt) => {
                      const isSelected = selectedService === opt.label;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          className={`booking-service-chip ${isSelected ? "selected" : ""}`}
                          onClick={() => setSelectedService(opt.label)}
                        >
                          <span className="service-chip-icon">{opt.icon}</span>
                          <span className="service-chip-text">{opt.shortLabel}</span>
                          {isSelected && (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="service-chip-check">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Dropdown for full 10 services */}
                  <div className="booking-service-select-wrap">
                    <label htmlFor="serviceSelectDropdown" className="booking-input-sublabel">
                      Or select specific category:
                    </label>
                    <select
                      id="serviceSelectDropdown"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="booking-service-dropdown"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.label}>
                          {opt.icon} {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 2. Choose Inspection Date */}
                <div className="booking-step-block">
                  <div className="booking-step-header">
                    <div className="booking-step-title-wrap">
                      <span className="booking-step-badge">2</span>
                      <h5 className="booking-step-title">Choose Preferred Date</h5>
                      <span className="booking-step-note">Mon–Sat available</span>
                    </div>

                    <div className="booking-dates-arrows desktop-only">
                      <button
                        type="button"
                        className="date-arrow-btn"
                        onClick={() => handleScrollDates("left")}
                        aria-label="Previous dates"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="date-arrow-btn"
                        onClick={() => handleScrollDates("right")}
                        aria-label="Next dates"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="booking-dates-scroll" ref={datesScrollRef} id="bookingDates">
                    {dates.map((d, i) => {
                      const isSelected = selectedDate === d.full;
                      return (
                        <div
                          key={i}
                          className={`booking-date-pill ${isSelected ? "selected" : ""}`}
                          onClick={() => setSelectedDate(d.full)}
                          role="button"
                          tabIndex={0}
                          aria-pressed={isSelected}
                        >
                          <div className="date-pill-top">
                            {d.relative ? (
                              <span className="date-relative-tag">{d.relative}</span>
                            ) : (
                              <span className="date-day-name">{d.dayName}</span>
                            )}
                          </div>
                          <span className="date-day-num">{d.dayNum}</span>
                          <span className="date-month-name">{d.monthName}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Choose Time Slot */}
                <div className="booking-step-block">
                  <div className="booking-step-header">
                    <div className="booking-step-title-wrap">
                      <span className="booking-step-badge">3</span>
                      <h5 className="booking-step-title">Choose Open Time Window</h5>
                      <span className="booking-step-note">30–45 min on-site</span>
                    </div>

                    {/* Morning / Afternoon Filter Tabs */}
                    <div className="time-filter-tabs">
                      <button
                        type="button"
                        className={`time-tab-btn ${timePeriodFilter === "all" ? "active" : ""}`}
                        onClick={() => setTimePeriodFilter("all")}
                      >
                        All
                      </button>
                      <button
                        type="button"
                        className={`time-tab-btn ${timePeriodFilter === "morning" ? "active" : ""}`}
                        onClick={() => setTimePeriodFilter("morning")}
                      >
                        Morning
                      </button>
                      <button
                        type="button"
                        className={`time-tab-btn ${timePeriodFilter === "afternoon" ? "active" : ""}`}
                        onClick={() => setTimePeriodFilter("afternoon")}
                      >
                        Afternoon
                      </button>
                    </div>
                  </div>

                  <div className="booking-slots-grid" id="bookingSlots">
                    {filteredSlots.map((slot, idx) => {
                      const isSelected = selectedSlot === slot.time;
                      return (
                        <div
                          key={idx}
                          className={`booking-slot ${isSelected ? "selected" : ""}`}
                          onClick={() => setSelectedSlot(slot.time)}
                          role="button"
                          tabIndex={0}
                          aria-pressed={isSelected}
                        >
                          <span className="slot-time-text">{slot.time}</span>
                          <span className="slot-badge-text">{slot.badge}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Contact & Property Details */}
                <div className="booking-step-block">
                  <div className="booking-step-header">
                    <div className="booking-step-title-wrap">
                      <span className="booking-step-badge">4</span>
                      <h5 className="booking-step-title">Your Contact &amp; Property Details</h5>
                    </div>
                  </div>

                  <div className="booking-form-fields-grid">
                    {/* Full Name */}
                    <div className="booking-field-group">
                      <label htmlFor="bookName" className="booking-label">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span>Full Name</span>
                      </label>
                      <input
                        type="text"
                        id="bookName"
                        className="booking-input"
                        placeholder="e.g. Sipho Moyo / David Kruger"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="booking-field-group">
                      <label htmlFor="bookPhone" className="booking-label">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>WhatsApp / Mobile Number</span>
                      </label>
                      <div className="booking-phone-input-wrap">
                        <span className="booking-phone-prefix" title="South Africa (+27)">
                          <svg viewBox="0 0 900 600" style={{ width: "18px", height: "12px", borderRadius: "2px", flexShrink: 0, marginRight: "5px" }} aria-hidden="true">
                            <path fill="#007749" d="M0 0h900v600H0z"/>
                            <path fill="#ffffff" d="M0 0h300L600 300 300 600H0z"/>
                            <path fill="#ffb81c" d="M0 75h225L450 300 225 525H0z"/>
                            <path fill="#000000" d="M0 120h180L360 300 180 480H0z"/>
                            <path fill="#ffffff" d="M300 0h600v180H300zM300 420h600v180H300z"/>
                            <path fill="#e03c31" d="M360 0h540v120H360z"/>
                            <path fill="#001489" d="M360 480h540v120H360z"/>
                          </svg>
                          <span>+27</span>
                        </span>
                        <input
                          type="tel"
                          id="bookPhone"
                          className="booking-input booking-input-phone"
                          placeholder="83 366 2700 / 083 366 2700"
                          required
                          value={phone}
                          onChange={handlePhoneChange}
                          inputMode="tel"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="booking-field-group full-span">
                      <label htmlFor="bookAddress" className="booking-label">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Property Address &amp; Suburb (Johannesburg)</span>
                      </label>
                      <input
                        type="text"
                        id="bookAddress"
                        className="booking-input"
                        placeholder="e.g. 45 Kloof Road, Bedfordview / Sandton / Edenvale"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>

                    {/* Notes / Issue Details */}
                    <div className="booking-field-group full-span">
                      <label htmlFor="bookNotes" className="booking-label">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        <span>Brief Notes or Roof Condition (Optional)</span>
                      </label>
                      <textarea
                        id="bookNotes"
                        className="booking-input booking-textarea"
                        placeholder="e.g. Sagging Rhinolite ceiling, storm hail damage, leak over kitchen, new home"
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Urgent Storm / Leak Checkbox */}
                  <label className="booking-urgent-toggle">
                    <input
                      type="checkbox"
                      checked={isUrgent}
                      onChange={(e) => setIsUrgent(e.target.checked)}
                      className="urgent-checkbox"
                    />
                    <div className="urgent-content">
                      <div className="urgent-title">
                        <span>🚨 Urgent: Active Roof Leak or Storm Damage?</span>
                        <span className="urgent-badge">High Priority</span>
                      </div>
                      <div className="urgent-desc">
                        Tick this for emergency dispatch. Gladmore will prioritize your inspection window.
                      </div>
                    </div>
                  </label>
                </div>

                {/* Submission CTA Band */}
                <div className="booking-submit-zone">
                  <div className="submit-summary-pill">
                    <span>Selected:</span>
                    <strong>{selectedDate || "Date"} @ {selectedSlot}</strong>
                    <span>·</span>
                    <span className="submit-free-badge">Zero Call-Out Fee</span>
                  </div>

                  <button
                    type="submit"
                    className="booking-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="submit-spinner" />
                        <span>Confirming...</span>
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" style={{ width: "18px", height: "18px" }}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Confirm</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "15px", height: "15px" }}>
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    className="booking-cancel-btn"
                    onClick={onClose}
                    aria-label="Cancel and go back to website"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "16px", height: "16px" }}>
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                    <span>Cancel &amp; Go Back to Website</span>
                  </button>

                  <div className="submit-disclaimer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "12px", height: "12px", color: "#10b981" }}>
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>100% Free Site Inspection · Zero Call-Out Fee · Gladmore will call 30 mins before arrival.</span>
                  </div>
                </div>
              </form>
            ) : (
              /* High-Value Confirmation Pass */
              <div className="booking-confirmed-card show" id="bookingConfirmed">
                <div className="booking-success-animation">
                  <div className="booking-success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>

                <div className="confirmed-eyebrow">DIRECT WHATSAPP DISPATCH</div>
                <h3 className="confirmed-title">
                  Enquiry Dispatched to WhatsApp! 📲
                </h3>
                <p className="confirmed-lede">
                  Your site inspection details have been sent directly to Gladmore (+27 83 366 2700) on WhatsApp.
                </p>

                {/* Digital Appointment Boarding Pass */}
                <div className="confirmed-pass-card">
                  <div className="pass-top">
                    <div className="pass-brand">
                      <img
                        src="/images/gdm-logo.jpg"
                        alt="GDM"
                        className="pass-logo"
                      />
                      <div>
                        <div className="pass-brand-name">GDM CONSTRUCTION &amp; ROOFING</div>
                        <div className="pass-brand-sub">SANS 10400 Certified Contractor · Johannesburg</div>
                      </div>
                    </div>
                    <div className="pass-ref">
                      <span className="ref-label">REF CODE</span>
                      <span className="ref-code">{bookingRef}</span>
                    </div>
                  </div>

                  <div className="pass-grid">
                    <div className="pass-cell">
                      <span className="cell-lbl">📅 Inspection Date</span>
                      <span className="cell-val bold">{selectedDate}</span>
                    </div>
                    <div className="pass-cell">
                      <span className="cell-lbl">⏰ Arrival Window</span>
                      <span className="cell-val bold">{selectedSlot}</span>
                    </div>
                    <div className="pass-cell">
                      <span className="cell-lbl">🔨 Selected Service</span>
                      <span className="cell-val">{selectedService}</span>
                    </div>
                    <div className="pass-cell">
                      <span className="cell-lbl">📍 Property Address</span>
                      <span className="cell-val">{address}</span>
                    </div>
                    <div className="pass-cell">
                      <span className="cell-lbl">👤 Client Contact</span>
                      <span className="cell-val">{name} ({phone})</span>
                    </div>
                    <div className="pass-cell">
                      <span className="cell-lbl">🛡️ Inspection Cost</span>
                      <span className="cell-val text-green bold">R0.00 (Zero Call-Out Fee)</span>
                    </div>
                  </div>

                  <div className="pass-footer">
                    <div className="pass-inspector-tag">
                      <span className="pass-online-dot" />
                      <span>Assigned Inspector: <strong>Gladmore (Lead Technical Evaluator)</strong></span>
                    </div>
                  </div>
                </div>

                {/* Immediate WhatsApp Dispatch CTA */}
                <div className="confirmed-action-cluster">
                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="confirmed-wa-btn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "20px", height: "20px" }}>
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.87 7.42 8.6 7.48 8.36 7.74C8.13 8 7.48 8.61 7.48 9.84C7.48 11.07 8.38 12.26 8.5 12.43C8.63 12.6 10.27 15.13 12.78 16.21C13.38 16.47 13.84 16.62 14.2 16.74C14.81 16.93 15.36 16.91 15.8 16.84C16.29 16.77 17.31 16.22 17.52 15.63C17.73 15.04 17.73 14.54 17.67 14.43C17.61 14.33 17.44 14.27 17.19 14.15C16.94 14.02 15.72 13.42 15.49 13.34C15.26 13.25 15.1 13.21 14.93 13.46C14.77 13.7 14.29 14.27 14.15 14.43C14 14.6 13.86 14.62 13.61 14.5C13.36 14.37 12.56 14.11 11.61 13.26C10.87 12.6 10.37 11.78 10.23 11.53C10.08 11.28 10.21 11.15 10.34 11.02C10.45 10.91 10.59 10.73 10.71 10.59C10.84 10.44 10.88 10.34 10.96 10.17C11.04 10 11 9.86 10.94 9.73C10.88 9.61 10.38 8.38 10.18 7.89C9.98 7.41 9.77 7.47 9.61 7.46C9.46 7.45 9.29 7.42 9.04 7.42Z" />
                    </svg>
                    <span>Send Booking Directly to Gladmore on WhatsApp</span>
                  </a>

                  <div className="confirmed-sub-actions">
                    <button
                      type="button"
                      className="confirmed-cal-btn"
                      onClick={handleDownloadCalendar}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "16px", height: "16px" }}>
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>Add to Calendar (.ics)</span>
                    </button>

                    <button
                      type="button"
                      className="confirmed-close-btn"
                      onClick={onClose}
                    >
                      <span>Done &amp; Return to Website</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
