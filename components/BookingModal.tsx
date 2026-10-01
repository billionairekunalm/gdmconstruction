"use client";

import React, { useState, useEffect } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("09:00 AM");
  const [dates, setDates] = useState<{ dayName: string; dayNum: number; monthName: string; full: string }[]>([]);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("+27 ");
  const [address, setAddress] = useState<string>("");
  const [service, setService] = useState<string>("New Roof Installation");

  const standardSlots = [
    "08:30 AM",
    "10:00 AM",
    "11:30 AM",
    "01:30 PM",
    "03:00 PM",
    "04:30 PM",
  ];

  useEffect(() => {
    const daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthsArr = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    const today = new Date();
    const newDates = [];

    for (let i = 0; i < 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      // Skip Sundays since closed
      if (d.getDay() === 0) continue;

      const dayName = daysArr[d.getDay()];
      const dayNum = d.getDate();
      const monthName = monthsArr[d.getMonth()];
      const full = `${dayName}, ${monthName} ${dayNum}`;
      newDates.push({ dayName, dayNum, monthName, full });
    }

    setDates(newDates);
    if (newDates.length > 0) {
      setSelectedDate(newDates[0].full);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsConfirmed(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  return (
    <div
      className="booking-modal open"
      id="bookingModal"
      role="dialog"
      aria-modal="true"
      aria-label="Book an inspection or quote"
    >
      <div
        className="booking-backdrop"
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(9,15,26,0.8)",
          backdropFilter: "blur(8px)",
        }}
      />
      <div className="booking-card">
        <div className="booking-card-head">
          <div>
            <h4>Schedule Free Site Inspection</h4>
            <span>Select your preferred assessment date &amp; time</span>
          </div>
          <button
            className="est-close"
            id="bookingClose"
            aria-label="Close"
            type="button"
            style={{ position: "static" }}
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="booking-content-grid">
          {/* Sidebar Info */}
          <div className="booking-sidebar">
            <div className="booking-company-badge">
              <img
                src="/images/gdm-logo.jpg"
                style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1.5px solid var(--amber)", objectFit: "cover" }}
                alt="GDM Logo"
              />
              <div>
                <div style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: "15px" }}>
                  GDM Construction &amp; Roofing
                </div>
                <div style={{ fontSize: "11px", color: "var(--amber-deep)", fontWeight: 600 }}>
                  Johannesburg &amp; Surrounds
                </div>
              </div>
            </div>

            <div className="booking-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>
                <strong>Duration:</strong> 30–45 mins on site
              </span>
            </div>
            <div className="booking-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2 4 5.5v6c0 5 3.4 8.6 8 10.5 4.6-1.9 8-5.5 8-10.5v-6L12 2z" />
              </svg>
              <span>
                <strong>Cost:</strong> Free in Main Service Area
              </span>
            </div>
            <div className="booking-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span>
                <strong>Includes:</strong> Physical Inspection + Written Itemized Quote
              </span>
            </div>
            <div className="booking-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>
                <strong>Lead Evaluator:</strong> Clayton / GDM Senior Lead
              </span>
            </div>
          </div>

          {/* Main Scheduling Area */}
          <div className="booking-main">
            {!isConfirmed ? (
              <form id="bookingForm" onSubmit={handleSubmit}>
                {/* 1. Pick Date */}
                <div className="booking-section-title">1. Choose Date</div>
                <div className="booking-dates-scroll" id="bookingDates">
                  {dates.map((d, i) => (
                    <div
                      key={i}
                      className={`booking-date-pill ${selectedDate === d.full ? "selected" : ""}`}
                      onClick={() => setSelectedDate(d.full)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="day-name">{d.dayName}</div>
                      <div className="day-num">{d.dayNum}</div>
                      <div style={{ fontSize: "10px", opacity: 0.75 }}>{d.monthName}</div>
                    </div>
                  ))}
                </div>

                {/* 2. Pick Time Slot */}
                <div className="booking-section-title">2. Choose Open Time Window</div>
                <div className="booking-slots-grid" id="bookingSlots">
                  {standardSlots.map((slot, idx) => (
                    <div
                      key={idx}
                      className={`booking-slot ${selectedSlot === slot ? "selected" : ""}`}
                      onClick={() => setSelectedSlot(slot)}
                      style={{ cursor: "pointer" }}
                    >
                      {slot}
                    </div>
                  ))}
                </div>

                {/* 3. Client Information */}
                <div className="booking-section-title">3. Your Contact &amp; Property Details</div>
                <div className="booking-form-fields">
                  <div className="booking-field">
                    <input
                      type="text"
                      id="bookName"
                      placeholder="Your Full Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="booking-field">
                    <input
                      type="tel"
                      id="bookPhone"
                      placeholder="Mobile (+27 83...)"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="booking-field full-span">
                    <input
                      type="text"
                      id="bookAddress"
                      placeholder="Property Address (e.g. 123 Main Rd, Bedfordview / Sandton)"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="booking-field full-span">
                    <select
                      id="bookService"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="New Roof Installation">Service: New Roof Installation (IBR / Chromadek / Tile)</option>
                      <option value="Ceilings (incl. Rhinolite)">Service: Ceilings &amp; Rhinolite Skimming</option>
                      <option value="Painting & Waterproofing">Service: Painting (Interior/Exterior/Roof)</option>
                      <option value="Roof Repairs & Leak Detection">Service: Roof Repairs &amp; Leak Detection</option>
                      <option value="Re-Roofing & Replacement">Service: Re-Roofing / Full Roof Replacement</option>
                      <option value="Waterproofing Systems">Service: Waterproofing (Parapets / Flat Slabs)</option>
                      <option value="Gutters & Bargeboards">Service: Gutters, Fascias &amp; Bargeboards</option>
                      <option value="Drywalling & Partitioning">Service: Partitioning / Drywalling</option>
                      <option value="Laminated Flooring & Tiling">Service: Laminated Flooring &amp; Tiling</option>
                      <option value="Kitchens & Cupboards">Service: Kitchen Renovation &amp; Wall Units</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-amber btn-lg"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ width: "18px", height: "18px" }}
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Confirm Free Inspection Appointment
                </button>
              </form>
            ) : (
              /* Booking Confirmed Card */
              <div className="booking-confirmed-card show" id="bookingConfirmed">
                <div className="booking-success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "26px", marginBottom: "8px" }}>
                  Inspection Request Confirmed!
                </h3>
                <p style={{ color: "var(--ink-soft)", fontSize: "15px" }}>
                  Your site inspection request has been booked with GDM Construction &amp; Roofing.
                </p>

                <div className="booking-summary-box" id="bookingSummaryDetails">
                  <div style={{ marginBottom: "8px" }}>
                    <strong>Inspection Date:</strong> {selectedDate} at {selectedSlot}
                  </div>
                  <div style={{ marginBottom: "8px" }}>
                    <strong>Property:</strong> {address}
                  </div>
                  <div style={{ marginBottom: "8px" }}>
                    <strong>Selected Service:</strong> {service}
                  </div>
                  <div style={{ marginBottom: "8px" }}>
                    <strong>Assigned Team:</strong> Clayton &amp; GDM Construction Lead
                  </div>
                  <div>
                    <strong>Contact:</strong> {name} ({phone})
                  </div>
                </div>

                <p style={{ fontSize: "13px", color: "var(--ink-mute)", marginBottom: "20px" }}>
                  Our team will call ahead before arriving. For urgent assistance or 24/7 storm damage, WhatsApp us directly at{" "}
                  <a
                    href="https://wa.me/27833662700"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--amber-deep)", fontWeight: 600 }}
                  >
                    +27 83 366 2700
                  </a>
                  .
                </p>

                <button type="button" className="btn btn-outline" onClick={onClose}>
                  Done &amp; Return to Website
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
