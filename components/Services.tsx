"use client";

import React, { useState, useRef } from "react";

interface ServicesProps {
  onOpenBooking?: () => void;
}

type CategoryKey = "all" | "roofing" | "ceilings" | "renovations";

interface ServiceItem {
  id: string;
  title: string;
  category: "roofing" | "ceilings" | "renovations";
  isPriority?: boolean;
  image: string;
  icon: React.ReactNode;
  description: string;
  tag: string;
}

const servicesData: ServiceItem[] = [
  // 1. New Roof Installations (Core)
  {
    id: "new-roofs",
    title: "New Roof Installations",
    category: "roofing",
    isPriority: true,
    tag: "Priority Specialization",
    image: "/images/svc-replacement-repair.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 12.5 12 4l9 8.5" />
        <path d="M6.5 9.7V19h11V9.7" />
      </svg>
    ),
    description:
      "Complete new roof structures and coverings from timber trusses to final sheeting. Specialists in IBR corrugated metal, Chromadek pre-painted steel, and Marley concrete & clay tiles.",
  },

  // 2. Ceilings (incl. Rhinolite) (Core)
  {
    id: "ceilings",
    title: "Ceilings (incl. Rhinolite)",
    category: "ceilings",
    isPriority: true,
    tag: "Priority Specialization",
    image: "/images/gallery-dormers.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    description:
      "Smooth, mirror-finish flush plaster ceilings, authentic Rhinolite skim coating, decorative cornices, bulkhead designs, and repair of sagging or water-damaged ceiling boards.",
  },

  // 3. Painting & Roof Coatings (Core)
  {
    id: "painting",
    title: "Painting & Roof Coatings",
    category: "ceilings",
    isPriority: true,
    tag: "Priority Specialization",
    image: "/images/cta-aerial.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    description:
      "High-durability interior and exterior painting, weatherproofing wall coatings, and specialized roof restoration painting for tiled and metal roofs to protect against UV and rain.",
  },

  // 4. Roof Repairs & Leak Detection
  {
    id: "roof-repairs",
    title: "Roof Repairs & Leak Detection",
    category: "roofing",
    tag: "24/7 Rapid Dispatch",
    image: "/images/svc-storm.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    ),
    description:
      "Fast pinpointing and honest repair of tricky leaks, cracked ridge caps, compromised valley irons, flashing failures, and storm damage with 24/7 emergency dispatch.",
  },

  // 5. Waterproofing Systems
  {
    id: "waterproofing",
    title: "Waterproofing Systems",
    category: "roofing",
    tag: "Torch-On & Liquid",
    image: "/images/svc-commercial.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2 4 5.5v6c0 5 3.4 8.6 8 10.5 4.6-1.9 8-5.5 8-10.5v-6L12 2z" />
        <path d="m9 12 2 2 4-4.5" />
      </svg>
    ),
    description:
      "Torch-on membrane, liquid acrylic systems, and waterproofing for flat concrete slabs, parapet walls, retaining structures, and tiled balconies to prevent water ingress.",
  },

  // 6. Re-Roofing & Replacement
  {
    id: "re-roofing",
    title: "Re-Roofing & Replacement",
    category: "roofing",
    tag: "Full Upgrades",
    image: "/images/gallery-estate.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 12.5 12 4l9 8.5" />
        <path d="M6.5 9.7V19h11V9.7" />
      </svg>
    ),
    description:
      "Safe strip-downs and complete replacements of aging, corroded corrugated roofs or weathered tile roofs with modern durable Chromadek or Marley profile systems.",
  },

  // 7. Gutters & Fascias
  {
    id: "gutters",
    title: "Gutters, Fascias & Bargeboards",
    category: "roofing",
    tag: "Seamless Rainwater",
    image: "/images/svc-solar-ventilation.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="8" width="18" height="12" rx="1" />
        <path d="M3 8l4-4h10l4 4" />
      </svg>
    ),
    description:
      "Installation and replacement of seamless rainwater gutters, downpipes, timber and PVC fascia boards, and weather-sealed bargeboards to protect your eaves.",
  },

  // 8. Kitchens & Built-In Cupboards
  {
    id: "kitchens",
    title: "Kitchens & Built-In Cupboards",
    category: "renovations",
    tag: "Turnkey Renovation",
    image: "/images/svc-kitchen-cupboards.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 12h18M12 3v18" />
      </svg>
    ),
    description:
      "Custom cabinetry, stylish kitchen renovations, countertop installations, built-in bedroom cupboards, and space-maximizing modern wall units.",
  },

  // 9. Drywalling & Partitioning
  {
    id: "drywalling",
    title: "Drywalling & Partitioning",
    category: "renovations",
    tag: "Interior Construction",
    image: "/images/gallery-skyline.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M12 3v18" />
      </svg>
    ),
    description:
      "Sound-insulated drywall divisions, internal room partitions for offices and residential homes, door openings, and fire-resistant board installations.",
  },

  // 10. Flooring & Tiling
  {
    id: "flooring",
    title: "Laminated Flooring & Tiling",
    category: "renovations",
    tag: "Flooring Solutions",
    image: "/images/gallery-crew-team.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="8" height="8" rx="1" />
        <rect x="13" y="3" width="8" height="8" rx="1" />
        <rect x="3" y="13" width="8" height="8" rx="1" />
        <rect x="13" y="13" width="8" height="8" rx="1" />
      </svg>
    ),
    description:
      "Precision installation of porcelain, ceramic, and natural stone tiles, plus water-resistant luxury laminate and vinyl plank flooring with matching skirtings.",
  },
];

const categoryTabs = [
  { key: "all" as CategoryKey, label: "All Services", icon: "✨", count: 10 },
  { key: "roofing" as CategoryKey, label: "Roofing & Waterproofing", icon: "🏠", count: 5 },
  { key: "ceilings" as CategoryKey, label: "Ceilings & Painting", icon: "🎨", count: 2 },
  { key: "renovations" as CategoryKey, label: "Interior Renovations", icon: "🔨", count: 3 },
];

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<CategoryKey>("all");
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredServices = servicesData.filter((svc) =>
    activeTab === "all" ? true : svc.category === activeTab
  );

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalScroll = scrollWidth - clientWidth;
      if (totalScroll > 0) {
        setScrollProgress(Math.round((scrollLeft / totalScroll) * (filteredServices.length - 1)));
      }
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="wrap">
        {/* Header */}
        <div className="services-head">
          <div>
            <div className="eyebrow">Our Full Service Capabilities</div>
            <h2>
              General building, renovations
              <br />
              &amp; roofing done right.
            </h2>
          </div>
          <p className="lede">
            GDM is a full-service general building and renovation contractor. While roofing is one of our flagship specialties, we offer comprehensive turnkey solutions for residential, estate, and commercial properties across Johannesburg.
          </p>
        </div>

        {/* Interactive Category Filter Pills (Instant non-fatigue browsing) */}
        <div className="services-filter-nav">
          <div className="services-filter-scroll">
            {categoryTabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  className={`services-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => {
                    setActiveTab(tab.key);
                    if (scrollRef.current) {
                      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                    }
                  }}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span className="tab-label">{tab.label}</span>
                  <span className="tab-badge">{tab.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Swipe Navigation Controls */}
        <div className="services-mobile-nav">
          <span className="services-swipe-hint">
            ← Swipe to explore ({filteredServices.length} {filteredServices.length === 1 ? "Service" : "Services"}) →
          </span>
          <div className="services-arrows">
            <button
              type="button"
              className="svc-arrow-btn"
              onClick={() => scroll("left")}
              aria-label="Previous service"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              className="svc-arrow-btn"
              onClick={() => scroll("right")}
              aria-label="Next service"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Services Container: Touch-Snap Carousel on Mobile, Responsive Grid on Desktop */}
        <div
          className="services-interactive-container"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              className={`svc-card ${svc.isPriority ? "svc-card-priority" : ""}`}
            >
              <div className="svc-card-photo">
                <img
                  loading="lazy"
                  alt={`${svc.title} in Johannesburg`}
                  src={svc.image}
                />
                {svc.isPriority && (
                  <span className="svc-priority-badge">
                    ★ Core Specialty
                  </span>
                )}
                {!svc.isPriority && (
                  <span className="svc-standard-tag">
                    {svc.tag}
                  </span>
                )}
              </div>

              <div className="svc-card-body">
                <div className="svc-card-icon-wrap">
                  {svc.icon}
                </div>

                <h3>{svc.title}</h3>
                <p>{svc.description}</p>

                {/* Direct Action Footer */}
                <div className="svc-card-actions">
                  {onOpenBooking && (
                    <button
                      type="button"
                      className="svc-btn-quote"
                      onClick={onOpenBooking}
                    >
                      <span>Request Quote</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" style={{ width: "14px", height: "14px" }}>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  )}
                  <a
                    href={`https://wa.me/27833662700?text=Hello%20GDM,%20I%20would%20like%20a%20quote%20for%20${encodeURIComponent(svc.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="svc-btn-wa"
                    aria-label={`Chat on WhatsApp about ${svc.title}`}
                    title="Inquire via WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px" }}>
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.87 7.42 8.6 7.48 8.36 7.74C8.13 8 7.48 8.61 7.48 9.84C7.48 11.07 8.38 12.26 8.5 12.43C8.63 12.6 10.27 15.13 12.78 16.21C13.38 16.47 13.84 16.62 14.2 16.74C14.81 16.93 15.36 16.91 15.8 16.84C16.29 16.77 17.31 16.22 17.52 15.63C17.73 15.04 17.73 14.54 17.67 14.43C17.61 14.33 17.44 14.27 17.19 14.15C16.94 14.02 15.72 13.42 15.49 13.34C15.26 13.25 15.1 13.21 14.93 13.46C14.77 13.7 14.29 14.27 14.15 14.43C14 14.6 13.86 14.62 13.61 14.5C13.36 14.37 12.56 14.11 11.61 13.26C10.87 12.6 10.37 11.78 10.23 11.53C10.08 11.28 10.21 11.15 10.34 11.02C10.45 10.91 10.59 10.73 10.71 10.59C10.84 10.44 10.88 10.34 10.96 10.17C11.04 10 11 9.86 10.94 9.73C10.88 9.61 10.38 8.38 10.18 7.89C9.98 7.41 9.77 7.47 9.61 7.46C9.46 7.45 9.29 7.42 9.04 7.42Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Dots Indicator */}
        <div className="services-dots-indicator">
          {filteredServices.map((svc, idx) => (
            <span
              key={svc.id}
              className={`svc-dot ${idx === scrollProgress ? "active" : ""}`}
            />
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="services-bottom-cta">
          <div className="sb-text">
            <h4>Have a Custom Roofing or Building Project in Mind?</h4>
            <p>
              From complex IBR re-roofs to full home renovations, our team provides transparent, fixed-price quotes and professional site evaluations.
            </p>
          </div>
          <div className="sb-actions">
            {onOpenBooking && (
              <button
                type="button"
                className="btn btn-amber"
                onClick={onOpenBooking}
              >
                <span>Schedule Free Site Inspection</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: "16px", height: "16px" }}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            )}
            <a
              href="https://wa.me/27833662700?text=Hello%20GDM,%20I%20would%20like%20to%20discuss%20a%20custom%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="sb-btn-wa"
            >
              <span>Chat With Our Team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
