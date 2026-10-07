"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MeetJordan } from "@/components/MeetJordan";
import { TeamSection } from "@/components/TeamSection";
import { Services } from "@/components/Services";
import { Craft } from "@/components/Craft";
import { GafLearningCenter } from "@/components/GafLearningCenter";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { RecentWorkGallery } from "@/components/RecentWorkGallery";
import { InstagramSection } from "@/components/InstagramSection";
import { GoogleReviews } from "@/components/GoogleReviews";
import { CtaBand } from "@/components/CtaBand";
import { FinancingCalculator } from "@/components/FinancingCalculator";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { EstimateModal } from "@/components/EstimateModal";
import { BookingModal } from "@/components/BookingModal";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  useEffect(() => {
    // Scroll reveal observer for elements with .reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <main>
        <Hero
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenEstimate={() => setIsEstimateOpen(true)}
        />
        <MeetJordan onOpenBooking={() => setIsBookingOpen(true)} />
        <TeamSection onOpenBooking={() => setIsBookingOpen(true)} />
        <Services onOpenBooking={() => setIsBookingOpen(true)} />
        <Craft onOpenBooking={() => setIsBookingOpen(true)} />
        <GafLearningCenter onOpenBooking={() => setIsBookingOpen(true)} />
        <ProcessTimeline onOpenBooking={() => setIsBookingOpen(true)} />
        <RecentWorkGallery />
        <InstagramSection />
        <GoogleReviews />
        <CtaBand
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenEstimate={() => setIsEstimateOpen(true)}
        />
        <FinancingCalculator onOpenBooking={() => setIsBookingOpen(true)} />
        <ContactSection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>
      <Footer />

      {/* Global Modals & Floating WhatsApp Widget */}
      <EstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
      />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <WhatsAppWidget />
    </>
  );
}
