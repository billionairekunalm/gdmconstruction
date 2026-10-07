"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface TeamSectionProps {
  onOpenBooking: () => void;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  badgeType: "gold" | "blue" | "emerald" | "amber";
  image: string;
  experience: string;
  quote: string;
  description: string;
  specialties: string[];
  responsibilities: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "owner",
    name: "Clayton",
    role: "Founder & Owner",
    badge: "Owner & Director",
    badgeType: "gold",
    image: "/images/team/owner.jpg",
    experience: "15+ Years Experience",
    quote: "“Every roof and renovation is personally inspected to my highest quality standard.”",
    description:
      "Directs company operations, leads client consultations, and ensures every Johannesburg project is executed with integrity, precision, and zero shortcuts.",
    specialties: ["Company Director", "Client Oversight", "Quality Control", "Structural Building"],
    responsibilities: "Personal site sign-offs & homeowner liaison",
  },
  {
    id: "clifford",
    name: "Clifford",
    role: "Project Manager",
    badge: "Project Manager",
    badgeType: "blue",
    image: "/images/team/clifford.jpg",
    experience: "8+ Years Management",
    quote: "“Strict timelines, daily client updates, and seamless on-site coordination.”",
    description:
      "Oversees site logistics, materials scheduling, workflow milestones, and maintains clear, transparent daily communication with property owners from start to handover.",
    specialties: ["Site Operations", "Timeline Tracking", "Materials Logistics", "Client Updates"],
    responsibilities: "Daily operations & milestone execution",
  },
  {
    id: "moment",
    name: "Moment",
    role: "Safety Manager",
    badge: "Safety Manager",
    badgeType: "emerald",
    image: "/images/team/moment.jpg",
    experience: "Certified OHS Officer",
    quote: "“Zero-incident site culture with certified rooftop fall protection protocols.”",
    description:
      "Enforces Occupational Health & Safety (OHS) standards, rooftop fall arrest harness systems, hazard identification, and ensures a safe, compliant environment on every job.",
    specialties: ["OHS Compliance", "Fall Protection", "Risk Audits", "Site Safety Protocol"],
    responsibilities: "Rooftop safety & OHS compliance audits",
  },
  {
    id: "justice",
    name: "Justice",
    role: "Project Engineer",
    badge: "Project Engineer",
    badgeType: "blue",
    image: "/images/team/justice.jpg",
    experience: "Structural Engineering",
    quote: "“Engineering structural integrity, load-bearing truss alignment & drainage.”",
    description:
      "Calculates structural load factors, oversees timber & steel truss alignment, verifies storm drainage gradients, and guarantees compliance with architectural blueprints.",
    specialties: ["Truss Engineering", "Drainage Gradients", "Structural Integrity", "Technical Blueprints"],
    responsibilities: "Structural integrity & technical blueprint adherence",
  },
  {
    id: "ronald",
    name: "Ronald",
    role: "Builder",
    badge: "Master Builder",
    badgeType: "amber",
    image: "/images/team/ronald.jpg",
    experience: "10+ Years Building",
    quote: "“Master bricklaying, flawless Rhinolite ceilings & turnkey renovation finishes.”",
    description:
      "Master craftsman executing precision bricklaying, structural alterations, mirror-smooth Rhinolite ceiling skimming, wall tiling, and turnkey residential finishes.",
    specialties: ["Master Brickwork", "Rhinolite Ceilings", "Turnkey Renovations", "Precision Tiling"],
    responsibilities: "Hands-on masonry, ceilings & renovation finishes",
  },
];

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenBooking }) => {
  const [activeId, setActiveId] = useState<string>("owner");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="team-section" id="team">
      <div className="wrap">
        {/* Section Header */}
        <div className="team-header text-center">
          <div className="team-eyebrow">
            <span className="team-eyebrow-icon">👷</span>
            <span>GDM On-Site Leadership &amp; Craftsmen</span>
          </div>

          <h2 className="team-title">
            Meet The Skilled Team Delivering Your Project
          </h2>

          <p className="team-subtitle">
            We don&apos;t outsource your home to unknown subcontractors. From company leadership and structural engineering to daily roof work and ceiling skimming, meet the verified in-house team who bring master-grade reliability to every Johannesburg property.
          </p>

          {/* Quick trust metrics row */}
          <div className="team-trust-pills">
            <div className="team-trust-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="team-pill-ic">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>100% In-House Direct Staff</span>
            </div>
            <div className="team-trust-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="team-pill-ic">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>OHS Safety &amp; Fall-Arrest Certified</span>
            </div>
            <div className="team-trust-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="team-pill-ic">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>Direct Owner &amp; PM Oversight</span>
            </div>
          </div>
        </div>

        {/* Mobile Carousel Navigation Arrows */}
        <div className="team-mobile-nav">
          <span className="team-mobile-hint">← Swipe to explore team members →</span>
          <div className="team-arrows">
            <button
              type="button"
              className="team-arrow-btn"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              className="team-arrow-btn"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Team Members Grid / Scroll Container */}
        <div className="team-grid" ref={scrollRef}>
          {teamMembers.map((member, index) => {
            const isOwner = member.id === "owner";
            const isSelected = activeId === member.id;

            return (
              <div
                key={member.id}
                className={`team-card ${isOwner ? "team-card-owner" : ""} ${isSelected ? "team-card-active" : ""}`}
                onClick={() => setActiveId(member.id)}
              >
                {/* Photo Container */}
                <div className="team-card-photo-wrap">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at GDM Construction & Roofing`}
                    width={480}
                    height={480}
                    className="team-card-img"
                    priority={index < 2}
                  />

                  {/* Top Left Role Badge */}
                  <div className={`team-badge-tag badge-${member.badgeType}`}>
                    {isOwner ? "👑 " : member.badgeType === "emerald" ? "🛡️ " : "👷 "}
                    {member.badge}
                  </div>

                  {/* Top Right Verified Indicator */}
                  <div className="team-verified-tag" title="Verified GDM Full-Time Team Member">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="team-verified-icon">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span>Verified</span>
                  </div>

                  {/* Subtle Gradient Overlay */}
                  <div className="team-photo-gradient" />
                </div>

                {/* Card Content */}
                <div className="team-card-content">
                  <div className="team-card-header">
                    <div className="team-name-row">
                      <h3 className="team-name">{member.name}</h3>
                      <span className="team-exp-badge">{member.experience}</span>
                    </div>

                    <div className="team-role-wrap">
                      <span className={`team-role role-${member.badgeType}`}>
                        {member.role}
                      </span>
                    </div>
                  </div>

                  <p className="team-description">{member.description}</p>

                  <blockquote className="team-quote">
                    {member.quote}
                  </blockquote>

                  {/* Core Specialty Tags */}
                  <div className="team-specialties">
                    {member.specialties.map((spec) => (
                      <span key={spec} className="team-spec-tag">
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action / Direct Touchpoint */}
                  <div className="team-card-footer">
                    <div className="team-card-resp">
                      <span className="team-resp-label">Direct Focus:</span>
                      <span className="team-resp-value">{member.responsibilities}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Consultation CTA */}
        <div className="team-cta-banner">
          <div className="team-cta-left">
            <div className="team-cta-badge">Direct Access</div>
            <h4>Work Directly With Clayton, Clifford &amp; Our Team</h4>
            <p>
              No high-pressure sales reps. When you schedule a site inspection, our actual construction and engineering leadership assesses your roof or renovation.
            </p>
          </div>
          <div className="team-cta-right">
            <button
              type="button"
              className="btn btn-amber team-btn-action"
              onClick={onOpenBooking}
            >
              <span>Schedule Free Site Consultation</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" style={{ width: "18px", height: "18px" }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <a
              href="https://wa.me/27833662700?text=Hello%20GDM%20Team,%20I%20would%20like%20to%20consult%20with%20your%20project%20team"
              target="_blank"
              rel="noopener noreferrer"
              className="team-wa-direct"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px" }}>
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.87 7.42 8.6 7.48 8.36 7.74C8.13 8 7.48 8.61 7.48 9.84C7.48 11.07 8.38 12.26 8.5 12.43C8.63 12.6 10.27 15.13 12.78 16.21C13.38 16.47 13.84 16.62 14.2 16.74C14.81 16.93 15.36 16.91 15.8 16.84C16.29 16.77 17.31 16.22 17.52 15.63C17.73 15.04 17.73 14.54 17.67 14.43C17.61 14.33 17.44 14.27 17.19 14.15C16.94 14.02 15.72 13.42 15.49 13.34C15.26 13.25 15.1 13.21 14.93 13.46C14.77 13.7 14.29 14.27 14.15 14.43C14 14.6 13.86 14.62 13.61 14.5C13.36 14.37 12.56 14.11 11.61 13.26C10.87 12.6 10.37 11.78 10.23 11.53C10.08 11.28 10.21 11.15 10.34 11.02C10.45 10.91 10.59 10.73 10.71 10.59C10.84 10.44 10.88 10.34 10.96 10.17C11.04 10 11 9.86 10.94 9.73C10.88 9.61 10.38 8.38 10.18 7.89C9.98 7.41 9.77 7.47 9.61 7.46C9.46 7.45 9.29 7.42 9.04 7.42Z" />
              </svg>
              <span>Chat with Project Team on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
