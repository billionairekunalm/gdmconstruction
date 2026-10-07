"use client";

import React, { useState, useEffect, useRef } from "react";

interface RecentWorkGalleryProps {
  onOpenBooking?: () => void;
}

type GalleryCategory = "all" | "roofs" | "ceilings" | "renovations" | "waterproofing";

interface Project {
  id: string;
  category: GalleryCategory;
  categoryLabel: string;
  n: string;
  a: string;
  cover: string;
  photos: string[];
  tag: string;
}

const PROJECTS: Project[] = [
  {
    id: "p1",
    category: "roofs",
    categoryLabel: "Roof Installation",
    n: "New Chromadek® Roof Installation",
    a: "Bedfordview · Johannesburg",
    cover: "/images/gallery-skyline.jpg",
    photos: [
      "/images/gallery-skyline.jpg",
      "/images/gallery-crew-team.jpg",
      "/images/svc-replacement-repair.jpg",
    ],
    tag: "Highveld Storm Defense",
  },
  {
    id: "p2",
    category: "renovations",
    categoryLabel: "Home Renovation",
    n: "Complete Home Renovation & Painting",
    a: "Sandton Estate · Johannesburg",
    cover: "/images/gallery-estate.jpg",
    photos: ["/images/gallery-estate.jpg", "/images/cta-aerial.jpg"],
    tag: "Turnkey Renovation",
  },
  {
    id: "p3",
    category: "roofs",
    categoryLabel: "Tiled Roofing",
    n: "Marley Tiled Roof & Rhinolite Ceilings",
    a: "Edenvale Residence · Johannesburg",
    cover: "/images/gallery-dormers.jpg",
    photos: ["/images/gallery-dormers.jpg", "/images/gallery-estate.jpg"],
    tag: "Double Roman Tiles",
  },
  {
    id: "p4",
    category: "waterproofing",
    categoryLabel: "Commercial Sheeting",
    n: "Commercial IBR Sheeting & Waterproofing",
    a: "Randburg Commercial Park · Johannesburg",
    cover: "/images/svc-commercial.jpg",
    photos: ["/images/svc-commercial.jpg", "/images/gallery-crew-team.jpg"],
    tag: "0.58mm Heavy Steel",
  },
  {
    id: "p5",
    category: "ceilings",
    categoryLabel: "Ceilings & Plastering",
    n: "Flush Plastered Ceilings & Bulkheads",
    a: "Houghton Luxury Home · Johannesburg",
    cover: "/images/gallery-crew-team.jpg",
    photos: ["/images/gallery-crew-team.jpg", "/images/gallery-skyline.jpg"],
    tag: "Glass-Smooth Finish",
  },
  {
    id: "p6",
    category: "roofs",
    categoryLabel: "Re-Roofing",
    n: "Full Re-Roofing & Gutter Installation",
    a: "Fourways Complex · Johannesburg",
    cover: "/images/svc-replacement-repair.jpg",
    photos: ["/images/svc-replacement-repair.jpg", "/images/cta-aerial.jpg"],
    tag: "Seamless Gutters",
  },
  {
    id: "p7",
    category: "renovations",
    categoryLabel: "Interior Renovation",
    n: "Laminated Flooring & Interior Wall Units",
    a: "Wendywood Residence · Johannesburg",
    cover: "/images/svc-solar-ventilation.jpg",
    photos: ["/images/svc-solar-ventilation.jpg", "/images/gallery-estate.jpg"],
    tag: "Precision Joinery",
  },
  {
    id: "p8",
    category: "waterproofing",
    categoryLabel: "Storm Repairs",
    n: "Storm Damage Repair & Parapet Waterproofing",
    a: "Orange Grove · Johannesburg",
    cover: "/images/svc-storm.jpg",
    photos: ["/images/svc-storm.jpg", "/images/gallery-dormers.jpg"],
    tag: "4mm Torch-On Seal",
  },
  {
    id: "p9",
    category: "renovations",
    categoryLabel: "Roof Coatings",
    n: "Roof Painting & Protective Wall Coatings",
    a: "Bedfordview Property · Johannesburg",
    cover: "/images/cta-aerial.jpg",
    photos: ["/images/cta-aerial.jpg", "/images/gallery-skyline.jpg"],
    tag: "UV Weather Guard",
  },
];

export const RecentWorkGallery: React.FC<RecentWorkGalleryProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const CATEGORIES = [
    { key: "all", label: "All Projects", count: PROJECTS.length },
    { key: "roofs", label: "Roofing & Sheeting", count: PROJECTS.filter(p => p.category === "roofs").length },
    { key: "ceilings", label: "Ceilings & Rhinolite", count: PROJECTS.filter(p => p.category === "ceilings").length },
    { key: "renovations", label: "Renovations & Paint", count: PROJECTS.filter(p => p.category === "renovations").length },
    { key: "waterproofing", label: "Waterproofing & Repairs", count: PROJECTS.filter(p => p.category === "waterproofing").length },
  ];

  const filteredProjects = activeCategory === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  // Sync scroll on mobile carousel
  const handleCarouselScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, clientWidth } = trackRef.current;
    if (clientWidth === 0) return;
    const cardWidth = clientWidth * 0.85;
    const newIdx = Math.round(scrollLeft / cardWidth);
    setCurrentSlideIndex(Math.min(Math.max(newIdx, 0), filteredProjects.length - 1));
  };

  const scrollToSlide = (idx: number) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.clientWidth * 0.85;
    trackRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: "smooth"
    });
    setCurrentSlideIndex(idx);
  };

  const handleCategorySelect = (catKey: GalleryCategory) => {
    setActiveCategory(catKey);
    setCurrentSlideIndex(0);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const openProjectModal = (proj: Project) => {
    setActiveProject(proj);
    setActivePhotoIdx(0);
  };

  // Lightbox keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeProject) return;
      if (e.key === "Escape") setActiveProject(null);
      if (e.key === "ArrowRight") {
        setActivePhotoIdx((prev) => (prev + 1) % activeProject.photos.length);
      }
      if (e.key === "ArrowLeft") {
        setActivePhotoIdx((prev) => (prev - 1 + activeProject.photos.length) % activeProject.photos.length);
      }
    };

    if (activeProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section className="gallery-section" id="work">
      <div className="wrap gallery-container">
        {/* 1. Header with Trust Eyebrow (No Clunky 160px Logo) */}
        <div className="gallery-header">
          <div className="gallery-eyebrow">
            <span className="gallery-eyebrow-dot" />
            <span>25+ Completed Johannesburg Projects</span>
          </div>

          <h2 className="gallery-title">
            Building &amp; Roofing Work
            <span className="gallery-title-highlight"> We Stand Behind</span>
          </h2>

          <p className="gallery-subtitle">
            Authentic craftsmanship completed across Bedfordview, Sandton, Edenvale, Randburg, and greater Johannesburg. Click any project to inspect high-resolution photos.
          </p>
        </div>

        {/* 2. Interactive Filter Chips */}
        <div className="gallery-filter-bar" role="tablist">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`gallery-filter-chip ${isActive ? "active" : ""}`}
                onClick={() => handleCategorySelect(cat.key as GalleryCategory)}
              >
                <span>{cat.label}</span>
                <span className="gallery-chip-count">({cat.count})</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="gallery-mobile-hint">
          <span>← Swipe to view completed projects →</span>
        </div>

        {/* 3. Showcase Track (Horizontal Snap Track on Mobile, Balanced 3-Col Grid on Desktop) */}
        <div
          className="gallery-track"
          ref={trackRef}
          onScroll={handleCarouselScroll}
        >
          {filteredProjects.map((pr) => (
            <div
              key={pr.id}
              className="gallery-card"
              onClick={() => openProjectModal(pr)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openProjectModal(pr);
              }}
              aria-label={`View photos for ${pr.n}`}
            >
              <div className="gallery-img-box">
                <img
                  loading="lazy"
                  src={pr.cover}
                  alt={`GDM Construction project in ${pr.a}`}
                  className="gallery-card-img"
                />
                <div className="gallery-card-gradient" />

                {/* Top Badges */}
                <div className="gallery-card-top-badges">
                  <span className="gallery-category-pill">{pr.categoryLabel}</span>
                  <span className="gallery-photo-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "13px", height: "13px" }}>
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                    <span>{pr.photos.length} Photos</span>
                  </span>
                </div>

                {/* Bottom Metadata */}
                <div className="gallery-card-meta">
                  <div className="gallery-card-tag">{pr.tag}</div>
                  <h3 className="gallery-card-title">{pr.n}</h3>
                  <div className="gallery-card-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "13px", height: "13px" }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{pr.a}</span>
                  </div>
                </div>

                {/* Hover Action Overlay */}
                <div className="gallery-hover-overlay">
                  <span className="gallery-view-btn">
                    <span>Inspect Gallery</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "14px", height: "14px" }}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="gallery-mobile-dots">
          {filteredProjects.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              className={`gallery-dot ${dotIdx === currentSlideIndex ? "active" : ""}`}
              onClick={() => scrollToSlide(dotIdx)}
              aria-label={`View project ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* 4. Bottom Assurance Strip */}
        <div className="gallery-bottom-strip">
          <div className="gallery-bottom-text">
            <strong>Need similar work completed?</strong> We provide free on-site inspections, insurance reports, and fixed-price written quotes across Gauteng.
          </div>
          <button
            type="button"
            className="gallery-quote-btn"
            onClick={onOpenBooking}
          >
            <span>Request Quote for Your Project</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "15px", height: "15px" }}>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      {/* 5. Modern Interactive Lightbox Modal */}
      {activeProject && (
        <div
          className="gallery-lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.n}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveProject(null);
          }}
        >
          <div className="gallery-lightbox-modal">
            {/* Lightbox Header */}
            <div className="gallery-lb-header">
              <div className="gallery-lb-title-group">
                <span className="gallery-lb-cat-badge">{activeProject.categoryLabel}</span>
                <h3 className="gallery-lb-title">{activeProject.n}</h3>
                <span className="gallery-lb-loc">{activeProject.a}</span>
              </div>

              <button
                type="button"
                className="gallery-lb-close-btn"
                onClick={() => setActiveProject(null)}
                aria-label="Close project gallery"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "20px", height: "20px" }}>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Lightbox Main Stage */}
            <div className="gallery-lb-stage">
              <div className="gallery-lb-img-wrap">
                <img
                  src={activeProject.photos[activePhotoIdx]}
                  alt={`${activeProject.n} photo ${activePhotoIdx + 1}`}
                  className="gallery-lb-main-img"
                />

                {/* Photo Counter Pill */}
                <div className="gallery-lb-counter">
                  Photo {activePhotoIdx + 1} of {activeProject.photos.length}
                </div>

                {/* Prev / Next Controls if multiple photos */}
                {activeProject.photos.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="gallery-lb-arrow-btn gallery-lb-prev"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePhotoIdx((prev) => (prev - 1 + activeProject.photos.length) % activeProject.photos.length);
                      }}
                      aria-label="Previous photo"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "18px", height: "18px" }}>
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="gallery-lb-arrow-btn gallery-lb-next"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePhotoIdx((prev) => (prev + 1) % activeProject.photos.length);
                      }}
                      aria-label="Next photo"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "18px", height: "18px" }}>
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails row */}
              {activeProject.photos.length > 1 && (
                <div className="gallery-lb-thumbs">
                  {activeProject.photos.map((src, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`gallery-lb-thumb-btn ${idx === activePhotoIdx ? "active" : ""}`}
                      onClick={() => setActivePhotoIdx(idx)}
                      aria-label={`Jump to photo ${idx + 1}`}
                    >
                      <img src={src} alt="Thumbnail preview" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Lightbox Footer Actions */}
            <div className="gallery-lb-footer">
              <div className="gallery-lb-footer-left">
                <span className="gallery-lb-tag-pill">{activeProject.tag}</span>
                <span className="gallery-lb-footer-note">All projects covered by written workmanship guarantee</span>
              </div>

              <div className="gallery-lb-footer-actions">
                <button
                  type="button"
                  className="gallery-lb-action-primary"
                  onClick={() => {
                    setActiveProject(null);
                    onOpenBooking?.();
                  }}
                >
                  <span>Request Quote for Similar Work</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "15px", height: "15px" }}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <a
                  href={`https://wa.me/27833662700?text=Hello%20GDM%20Construction,%20I%20am%20interested%20in%20a%20project%20like%20${encodeURIComponent(activeProject.n)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery-lb-action-whatsapp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px" }}>
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z" />
                  </svg>
                  <span>WhatsApp Question</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
