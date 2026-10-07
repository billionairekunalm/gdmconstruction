"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

export interface VideoReel {
  id: string;
  location: string;
  suburb: string;
  service: string;
  category: string;
  duration: string;
  views: string;
  image: string;
  artisanName: string;
  artisanRole: string;
  artisanAvatar: string;
  specs: string[];
  desc: string;
  fullReport: string;
  compliance: string;
}

const REELS: VideoReel[] = [
  {
    id: "01",
    location: "Bedfordview",
    suburb: "East Rand, Gauteng",
    service: "Chromadek® Roof Installation",
    category: "Roofing Project",
    duration: "0:42",
    views: "3.4k",
    image: "/images/ig-post-1.jpg",
    artisanName: "Clifford M.",
    artisanRole: "Lead Timber & Roofing Artisan",
    artisanAvatar: "/images/team/clifford.jpg",
    specs: ["Chromadek® 0.58mm Corrugated", "Engineered Timber Trusses", "Watertight Ridge Capping"],
    desc: "Chromadek sheeting, ridge cap & timber truss installation on a luxury residential home.",
    fullReport: "Complete structural timber replacement, engineered tie-downs against Highveld hailstorms, and precision concealed fastening for flawless water runoff.",
    compliance: "SANS 10400-L Structural Wind & Uplift Certified",
  },
  {
    id: "02",
    location: "Sandton",
    suburb: "Central Sandton, JHB",
    service: "Suspended Ceilings & RhinoLite Skim",
    category: "Ceiling & Renovation",
    duration: "0:38",
    views: "4.8k",
    image: "/images/ig-post-2.jpg",
    artisanName: "Moment N.",
    artisanRole: "Master Plasterer & Drywall Specialist",
    artisanAvatar: "/images/team/moment.jpg",
    specs: ["Gyproc RhinoBoard® 9.5mm", "6mm RhinoLite Plaster Skim", "Acoustic Insulation"],
    desc: "Complete suspended ceiling overhaul with seamless mirror-smooth RhinoLite skim coat plaster.",
    fullReport: "Precision laser leveling across 140m² open-plan living area, recessed shadow-line perimeter joints, and glass-smooth hand-troweled finish ready for low-sheen paint.",
    compliance: "SANS 10400-T Fire Rating & Flush Plaster Specification",
  },
  {
    id: "03",
    location: "Edenvale",
    suburb: "Modderfontein Corridor, JHB",
    service: "Highveld Storm Leak Repair",
    category: "Waterproofing",
    duration: "0:51",
    views: "2.9k",
    image: "/images/ig-post-3.jpg",
    artisanName: "Justice K.",
    artisanRole: "Waterproofing Specialist",
    artisanAvatar: "/images/team/justice.jpg",
    specs: ["Derbigum 4mm Torch-On", "Heavy Gauge Lead Valleys", "UV Bitumastic Solarflex"],
    desc: "Emergency storm leak detection, valley flashing renewal, and heat-fused torch-on membrane.",
    fullReport: "Critical emergency mobilization following 70mm summer downpour. Stripped rusted concealed valley gutters, applied primer and 4mm dual-reinforcement torch-on membrane.",
    compliance: "SABS 10155 Waterproofing & Storm Drainage Standard",
  },
  {
    id: "04",
    location: "Randburg",
    suburb: "Ferndale / Blairgowrie, JHB",
    service: "Concrete Tile & Weather-Coat",
    category: "Turnkey Building",
    duration: "0:45",
    views: "3.7k",
    image: "/images/ig-post-4.jpg",
    artisanName: "Ronald T.",
    artisanRole: "Senior Site Supervisor",
    artisanAvatar: "/images/team/ronald.jpg",
    specs: ["Marley Concrete Tiles", "High-Bond Ridge Pointing", "Dulux Acrylic Weatherguard"],
    desc: "Marley concrete tile roof replacement, fascia restoration, and weather-coat painting.",
    fullReport: "Replacement of cracked tiles, structural fascia and barge board replacement, pressure washing, flexi-seal ridge pointing, and 2-coat UV reflective weatherproofing barrier.",
    compliance: "SANS 10400-K Water Shedding & Durability Guarantee",
  },
];

interface InstagramSectionProps {
  onOpenBooking?: () => void;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedReel, setSelectedReel] = useState<VideoReel | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Filtered reels list
  const filteredReels = activeFilter === "all"
    ? REELS
    : REELS.filter((r) => r.location.toLowerCase() === activeFilter.toLowerCase());

  // Handle scroll listener on carousel for active dot sync
  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    if (clientWidth === 0) return;
    const index = Math.round(scrollLeft / (clientWidth * 0.78));
    setActiveCardIndex(Math.min(Math.max(0, index), filteredReels.length - 1));
  }, [filteredReels.length]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Scroll to a specific card index
  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.querySelectorAll<HTMLElement>(".reel-card");
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setActiveCardIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIndex = Math.max(0, activeCardIndex - 1);
    scrollToIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = Math.min(filteredReels.length - 1, activeCardIndex + 1);
    scrollToIndex(nextIndex);
  };

  // Keyboard controls for modal navigation and escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedReel) return;

      if (e.key === "Escape") {
        setSelectedReel(null);
      } else if (e.key === "ArrowRight") {
        const currentIndex = REELS.findIndex((r) => r.id === selectedReel.id);
        const next = REELS[(currentIndex + 1) % REELS.length];
        setSelectedReel(next);
        setProgress(0);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = REELS.findIndex((r) => r.id === selectedReel.id);
        const prev = REELS[(currentIndex - 1 + REELS.length) % REELS.length];
        setSelectedReel(prev);
        setProgress(0);
      } else if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedReel]);

  // Simulated Reel Progress bar timer
  useEffect(() => {
    if (!selectedReel || !isPlaying) {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      return;
    }

    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Loop to next reel when progress hits 100%
          const currentIndex = REELS.findIndex((r) => r.id === selectedReel.id);
          const nextReel = REELS[(currentIndex + 1) % REELS.length];
          setSelectedReel(nextReel);
          return 0;
        }
        return prev + 1.2;
      });
    }, 100);

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [selectedReel, isPlaying]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedReel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedReel]);

  const openReelModal = (reel: VideoReel) => {
    setSelectedReel(reel);
    setProgress(0);
    setIsPlaying(true);
  };

  const closeReelModal = () => {
    setSelectedReel(null);
    setIsPlaying(false);
  };

  return (
    <section className="follow-ig" id="follow" aria-label="On-Site Construction Video Reels">
      <div className="wrap">
        {/* Header with Live Status & Analytical Design */}
        <div className="reels-header">
          <div className="reels-eyebrow">
            <span className="live-rec-dot" aria-hidden="true" />
            <span>LIVE ON-SITE FOOTAGE · GAUTENG</span>
          </div>

          <h2>Watch our team in action across Johannesburg.</h2>

          <p className="reels-subtext">
            Real sites, master artisans, and certified South African building standards. Swipe through on-site project reels or tap to inspect verified tradesmanship.
          </p>

          {/* Quick Filter Location Pills */}
          <div className="reels-filter-bar" role="tablist" aria-label="Filter Reels by Location">
            <button
              role="tab"
              aria-selected={activeFilter === "all"}
              className={`reels-filter-chip ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => {
                setActiveFilter("all");
                setActiveCardIndex(0);
                if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
              }}
            >
              <span>All Reels</span>
              <span className="chip-count">4</span>
            </button>

            {REELS.map((reel) => {
              const isActive = activeFilter.toLowerCase() === reel.location.toLowerCase();
              return (
                <button
                  key={reel.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`reels-filter-chip ${isActive ? "active" : ""}`}
                  onClick={() => {
                    setActiveFilter(reel.location);
                    setActiveCardIndex(0);
                    if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
                  }}
                >
                  <span className="chip-pin">📍</span>
                  <span>{reel.location}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel / Multi-Card Presentation */}
        <div className="reels-viewport">
          <div
            ref={carouselRef}
            className="reels-carousel-track"
            role="region"
            aria-label="Video Reels Carousel"
            tabIndex={0}
          >
            {filteredReels.map((reel, idx) => (
              <article
                key={reel.id}
                className={`reel-card ${idx === activeCardIndex ? "is-focused" : ""}`}
                onClick={() => openReelModal(reel)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openReelModal(reel);
                  }
                }}
                tabIndex={0}
                aria-label={`Watch Reel: ${reel.service} in ${reel.location}`}
              >
                {/* Background Image Poster */}
                <div className="reel-poster-wrap">
                  <img
                    src={reel.image}
                    alt={`${reel.service} project in ${reel.location}`}
                    className="reel-poster-img"
                    loading="lazy"
                  />
                  <div className="reel-scrim" />
                </div>

                {/* Top Overlay: Artisan Tag + Duration */}
                <div className="reel-top-bar">
                  <div className="reel-artisan-chip">
                    <img
                      src={reel.artisanAvatar}
                      alt={reel.artisanName}
                      className="reel-artisan-thumb"
                      loading="lazy"
                    />
                    <div className="reel-artisan-meta">
                      <span className="reel-artisan-name">{reel.artisanName}</span>
                      <span className="reel-artisan-role">{reel.location}</span>
                    </div>
                  </div>

                  <div className="reel-timing-badge">
                    <span className="rec-indicator" />
                    <span>{reel.duration}</span>
                  </div>
                </div>

                {/* Center Play Button & Equalizer */}
                <div className="reel-center-action">
                  <div className="reel-play-button" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="7 4 19 12 7 20 7 4" />
                    </svg>
                  </div>
                  <div className="reel-sound-waves" aria-hidden="true">
                    <span className="wave-bar bar-1" />
                    <span className="wave-bar bar-2" />
                    <span className="wave-bar bar-3" />
                    <span className="wave-bar bar-4" />
                  </div>
                  <span className="reel-play-prompt">Tap to Watch Reel</span>
                </div>

                {/* Bottom Overlay: Metadata & Specs */}
                <div className="reel-bottom-sheet">
                  <div className="reel-tag-row">
                    <span className="reel-category-pill">{reel.category}</span>
                    <span className="reel-views-pill">
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "12px", height: "12px" }}>
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                      {reel.views}
                    </span>
                  </div>

                  <h3 className="reel-card-title">{reel.service}</h3>
                  <p className="reel-card-desc">{reel.desc}</p>

                  <div className="reel-spec-chip">
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "11px", height: "11px", color: "#38bdf8" }}>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>{reel.specs[0]}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Navigation Controls & Pagination */}
          <div className="reels-controls-bar">
            <button
              type="button"
              className="reels-nav-btn reels-nav-prev"
              onClick={handlePrev}
              disabled={activeCardIndex === 0}
              aria-label="Previous reel"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Mobile Swipe Hint & Dot Indicators */}
            <div className="reels-dots-track" role="tablist" aria-label="Reels pagination">
              {filteredReels.map((r, i) => (
                <button
                  key={r.id}
                  type="button"
                  className={`reels-dot ${i === activeCardIndex ? "is-active" : ""}`}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to reel ${i + 1}: ${r.service}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="reels-nav-btn reels-nav-next"
              onClick={handleNext}
              disabled={activeCardIndex >= filteredReels.length - 1}
              aria-label="Next reel"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="reels-swipe-hint">
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "14px", height: "14px" }}>
              <path d="M9 11.24V7.5a2.5 2.5 0 0 1 5 0v3.74c1.21-.81 2-2.18 2-3.74a4.5 4.5 0 0 0-9 0c0 1.56.79 2.93 2 3.74zM16.71 13.7l-4-4a.996.996 0 0 0-1.41 0l-4 4a.996.996 0 1 0 1.41 1.41L11 12.83V21a1 1 0 1 0 2 0v-8.17l2.29 2.29c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.42z"/>
            </svg>
            <span>Touch &amp; swipe horizontally to explore all Johannesburg job reels</span>
          </div>
        </div>

        {/* Global Footer CTA for Section */}
        <div className="reels-footer-actions">
          {onOpenBooking && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenBooking}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px" }}>
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
              </svg>
              <span>Book Free Site Assessment in Gauteng</span>
            </button>
          )}

          <a
            className="btn btn-outline reels-whatsapp-btn"
            href="https://wa.me/27833662700?text=Hello%20GDM%20Construction,%20I%20saw%20your%20site%20action%20videos.%20I%20would%20like%20to%20request%20more%20project%20footage%20and%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}
          >
            <svg viewBox="0 0 24 24" fill="#25D366" style={{ width: "18px", height: "18px" }}>
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.87 7.42 8.6 7.48 8.36 7.74C8.13 8 7.48 8.61 7.48 9.84C7.48 11.07 8.38 12.26 8.5 12.43C8.63 12.6 10.27 15.13 12.78 16.21C13.38 16.47 13.84 16.62 14.2 16.74C14.81 16.93 15.36 16.91 15.8 16.84C16.29 16.77 17.31 16.22 17.52 15.63C17.73 15.04 17.73 14.54 17.67 14.43C17.61 14.33 17.44 14.27 17.19 14.15C16.94 14.02 15.72 13.42 15.49 13.34C15.26 13.25 15.1 13.21 14.93 13.46C14.77 13.7 14.29 14.27 14.15 14.43C14 14.6 13.86 14.62 13.61 14.5C13.36 14.37 12.56 14.11 11.61 13.26C10.87 12.6 10.37 11.78 10.23 11.53C10.08 11.28 10.21 11.15 10.34 11.02C10.45 10.91 10.59 10.73 10.71 10.59C10.84 10.44 10.88 10.34 10.96 10.17C11.04 10 11 9.86 10.94 9.73C10.88 9.61 10.38 8.38 10.18 7.89C9.98 7.41 9.77 7.47 9.61 7.46C9.46 7.45 9.29 7.42 9.04 7.42Z" />
            </svg>
            <span>Ask for More Project Videos on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Interactive Reel Theater Lightbox Modal */}
      {selectedReel && (
        <div
          className="reel-modal-backdrop"
          onClick={closeReelModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Reel Theater: ${selectedReel.service}`}
        >
          <div
            className="reel-modal-shell"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Story Progress Bars */}
            <div className="reel-modal-progress-bar">
              {REELS.map((r, i) => {
                const isCurrent = r.id === selectedReel.id;
                const isPassed = REELS.findIndex((x) => x.id === selectedReel.id) > i;
                return (
                  <div key={r.id} className="progress-track">
                    <div
                      className="progress-fill"
                      style={{
                        width: isCurrent ? `${progress}%` : isPassed ? "100%" : "0%",
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Modal Header */}
            <div className="reel-modal-header">
              <div className="reel-modal-user">
                <img
                  src={selectedReel.artisanAvatar}
                  alt={selectedReel.artisanName}
                  className="reel-modal-avatar"
                />
                <div>
                  <div className="reel-modal-author">
                    <span>{selectedReel.artisanName}</span>
                    <span className="reel-verified-badge" title="Verified GDM Trade Supervisor">✓</span>
                  </div>
                  <div className="reel-modal-sub">
                    {selectedReel.location} · {selectedReel.suburb}
                  </div>
                </div>
              </div>

              <div className="reel-modal-top-actions">
                <button
                  type="button"
                  className="reel-modal-btn"
                  onClick={() => setIsPlaying((p) => !p)}
                  aria-label={isPlaying ? "Pause playback" : "Resume playback"}
                >
                  {isPlaying ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px" }}>
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px" }}>
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </button>

                <button
                  type="button"
                  className="reel-modal-close"
                  onClick={closeReelModal}
                  aria-label="Close reel player"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "18px", height: "18px" }}>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Reel Media Visual */}
            <div className="reel-modal-media">
              <img
                src={selectedReel.image}
                alt={selectedReel.service}
                className={`reel-modal-image ${isPlaying ? "is-active-feed" : ""}`}
              />
              <div className="reel-modal-scrim" />

              {/* Prev / Next Modal Arrows */}
              <button
                type="button"
                className="reel-modal-arrow arrow-left"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = REELS.findIndex((r) => r.id === selectedReel.id);
                  const prev = REELS[(currentIndex - 1 + REELS.length) % REELS.length];
                  setSelectedReel(prev);
                  setProgress(0);
                }}
                aria-label="Previous reel"
              >
                ‹
              </button>

              <button
                type="button"
                className="reel-modal-arrow arrow-right"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = REELS.findIndex((r) => r.id === selectedReel.id);
                  const next = REELS[(currentIndex + 1) % REELS.length];
                  setSelectedReel(next);
                  setProgress(0);
                }}
                aria-label="Next reel"
              >
                ›
              </button>

              {/* Center Status Tag */}
              <div className="reel-modal-badge-center">
                <span className="live-rec-dot" />
                <span>On-Site Craft Footage · {selectedReel.duration}</span>
              </div>
            </div>

            {/* Bottom Drawer with Full Specs & CTAs */}
            <div className="reel-modal-footer">
              <div className="reel-modal-service-tag">{selectedReel.category}</div>
              <h3 className="reel-modal-title">{selectedReel.service}</h3>
              <p className="reel-modal-fullreport">{selectedReel.fullReport}</p>

              {/* Material Chips */}
              <div className="reel-modal-specs-wrap">
                {selectedReel.specs.map((spec, sIdx) => (
                  <span key={sIdx} className="reel-modal-spec-chip">
                    {spec}
                  </span>
                ))}
              </div>

              <div className="reel-modal-compliance">
                <svg viewBox="0 0 24 24" fill="#38bdf8" style={{ width: "14px", height: "14px", flexShrink: 0 }}>
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
                <span>{selectedReel.compliance}</span>
              </div>

              {/* Action Buttons */}
              <div className="reel-modal-actions">
                {onOpenBooking && (
                  <button
                    type="button"
                    className="btn btn-primary reel-modal-cta"
                    onClick={() => {
                      closeReelModal();
                      onOpenBooking();
                    }}
                  >
                    <span>Request Site Visit in {selectedReel.location}</span>
                  </button>
                )}

                <a
                  className="btn btn-outline reel-modal-wa"
                  href={`https://wa.me/27833662700?text=${encodeURIComponent(
                    `Hello GDM Construction, I watched Reel #${selectedReel.id} (${selectedReel.location} - ${selectedReel.service}). I'd like a quote for my property.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="#25D366" style={{ width: "16px", height: "16px" }}>
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.87 7.42 8.6 7.48 8.36 7.74C8.13 8 7.48 8.61 7.48 9.84C7.48 11.07 8.38 12.26 8.5 12.43C8.63 12.6 10.27 15.13 12.78 16.21C13.38 16.47 13.84 16.62 14.2 16.74C14.81 16.93 15.36 16.91 15.8 16.84C16.29 16.77 17.31 16.22 17.52 15.63C17.73 15.04 17.73 14.54 17.67 14.43C17.61 14.33 17.44 14.27 17.19 14.15C16.94 14.02 15.72 13.42 15.49 13.34C15.26 13.25 15.1 13.21 14.93 13.46C14.77 13.7 14.29 14.27 14.15 14.43C14 14.6 13.86 14.62 13.61 14.5C13.36 14.37 12.56 14.11 11.61 13.26C10.87 12.6 10.37 11.78 10.23 11.53C10.08 11.28 10.21 11.15 10.34 11.02C10.45 10.91 10.59 10.73 10.71 10.59C10.84 10.44 10.88 10.34 10.96 10.17C11.04 10 11 9.86 10.94 9.73C10.88 9.61 10.38 8.38 10.18 7.89C9.98 7.41 9.77 7.47 9.61 7.46C9.46 7.45 9.29 7.42 9.04 7.42Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
