"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { GafLearningCenter } from "@/components/GafLearningCenter";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { EstimateModal } from "@/components/EstimateModal";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export default function TechnicalStandardsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="tech-page-main">
        {/* Dedicated Page Hero Header */}
        <div className="tech-page-hero">
          <div className="wrap">
            <div className="tech-page-breadcrumb">
              <Link href="/" className="tech-breadcrumb-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span>Home</span>
              </Link>
              <span className="tech-breadcrumb-sep">/</span>
              <span className="tech-breadcrumb-current">SANS 10400 Technical Standards &amp; Architecture</span>
            </div>

            <div className="tech-hero-content">
              <div className="tech-hero-eyebrow">
                <span className="tech-hero-dot" />
                <span>Certified Engineering &amp; Installation Methodologies</span>
              </div>

              <h1 className="tech-hero-title">
                SANS 10400 Technical Standards &amp;
                <span className="tech-hero-highlight"> Craftsmanship Sequences</span>
              </h1>

              <p className="tech-hero-subtitle">
                Explore our full engineering matrices, material tolerances, and step-by-step 3-layer installation sequences. Built strictly to South African National Standards with zero shortcuts.
              </p>

              <div className="tech-hero-actions">
                <Link href="/" className="tech-back-home-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "15px", height: "15px" }}>
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                  <span>Return to Home Page</span>
                </Link>

                <button
                  type="button"
                  className="tech-hero-quote-btn"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <span>Request Engineering Consultation</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "15px", height: "15px" }}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* The Full SANS 10400 Technical Standards & Craftsmanship Sequence Section */}
        <GafLearningCenter onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Global CTA Band */}
        <CtaBand
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenEstimate={() => setIsEstimateOpen(true)}
        />
      </main>

      <Footer />

      {/* Global Modals & WhatsApp Widget */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <EstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
      />
      <WhatsAppWidget />
    </>
  );
}
