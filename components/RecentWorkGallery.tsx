"use client";

import React, { useState, useEffect } from "react";

interface Project {
  n: string;
  a: string;
  cover: string;
  photos: string[];
}

const PROJECTS: Project[] = [
  {
    n: "New Chromadek Roof Installation",
    a: "Bedfordview · Johannesburg",
    cover: "/images/gallery-skyline.jpg",
    photos: [
      "/images/gallery-skyline.jpg",
      "/images/gallery-crew-team.jpg",
      "/images/svc-replacement-repair.jpg",
    ],
  },
  {
    n: "Complete Home Renovation & Painting",
    a: "Sandton Estate · Johannesburg",
    cover: "/images/gallery-estate.jpg",
    photos: ["/images/gallery-estate.jpg", "/images/cta-aerial.jpg"],
  },
  {
    n: "Marley Tiled Roof & Rhinolite Ceilings",
    a: "Edenvale Residence · Johannesburg",
    cover: "/images/gallery-dormers.jpg",
    photos: ["/images/gallery-dormers.jpg", "/images/gallery-estate.jpg"],
  },
  {
    n: "Commercial IBR Sheeting & Waterproofing",
    a: "Randburg Commercial Park · Johannesburg",
    cover: "/images/svc-commercial.jpg",
    photos: ["/images/svc-commercial.jpg", "/images/gallery-crew-team.jpg"],
  },
  {
    n: "Flush Plastered Ceilings & Bulkheads",
    a: "Houghton Luxury Home · Johannesburg",
    cover: "/images/gallery-crew-team.jpg",
    photos: ["/images/gallery-crew-team.jpg", "/images/gallery-skyline.jpg"],
  },
  {
    n: "Full Re-Roofing & Gutter Installation",
    a: "Fourways Complex · Johannesburg",
    cover: "/images/svc-replacement-repair.jpg",
    photos: ["/images/svc-replacement-repair.jpg", "/images/cta-aerial.jpg"],
  },
  {
    n: "Laminated Flooring & Interior Wall Units",
    a: "Wendywood Residence · Johannesburg",
    cover: "/images/svc-solar-ventilation.jpg",
    photos: ["/images/svc-solar-ventilation.jpg", "/images/gallery-estate.jpg"],
  },
  {
    n: "Storm Damage Repair & Parapet Waterproofing",
    a: "Orange Grove · Johannesburg",
    cover: "/images/svc-storm.jpg",
    photos: ["/images/svc-storm.jpg", "/images/gallery-dormers.jpg"],
  },
  {
    n: "Roof Painting & Protective Wall Coatings",
    a: "Bedfordview Property · Johannesburg",
    cover: "/images/cta-aerial.jpg",
    photos: ["/images/cta-aerial.jpg", "/images/gallery-skyline.jpg"],
  },
];

export const RecentWorkGallery: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 6);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
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
    <section className="gallery" id="work">
      <div className="wrap">
        <div className="gallery-badge-wrap" style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            className="gallery-badge"
            src="/images/gdm-logo.jpg"
            alt="GDM Construction & Roofing"
            width={160}
            height={160}
            style={{ borderRadius: "50%", border: "2px solid var(--amber)", margin: "0 auto" }}
          />
        </div>
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            25+ Completed Projects
          </div>
          <h2>Building and roofing work we stand behind</h2>
          <p className="lede" style={{ margin: "14px auto 0" }}>
            Real projects across Bedfordview, Sandton, Edenvale, Randburg, and greater Johannesburg. Click any project to view photos.
          </p>
        </div>

        <div className="proj-grid" id="projGrid">
          {displayedProjects.map((pr, idx) => (
            <div
              key={idx}
              className="proj"
              onClick={() => setActiveProject(pr)}
              style={{ cursor: "pointer" }}
            >
              <img
                loading="lazy"
                alt={`GDM Construction project in ${pr.a}`}
                src={pr.cover}
              />
              <div className="proj-veil"></div>
              <div className="proj-count">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
                {pr.photos.length} photos
              </div>
              <div className="proj-meta">
                <h3>{pr.n}</h3>
                <span>{pr.a}</span>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="see-more-wrap">
            <button
              className="btn btn-outline"
              id="seeMore"
              onClick={() => setShowAll(true)}
              type="button"
            >
              See more projects
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ width: "16px", height: "16px" }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeProject && (
        <div
          className="lb open"
          id="lightbox"
          role="dialog"
          aria-label="Project photos"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveProject(null);
          }}
        >
          <div className="lb-head">
            <div>
              <h3 id="lbTitle">{activeProject.n}</h3>
              <span id="lbSub">
                {activeProject.a} · {activeProject.photos.length} photos
              </span>
            </div>
            <button
              className="lb-close"
              id="lbClose"
              aria-label="Close Lightbox"
              onClick={() => setActiveProject(null)}
              type="button"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="lb-body">
            <div className="lb-grid" id="lbGrid">
              {activeProject.photos.map((src, pIdx) => (
                <img
                  key={pIdx}
                  loading="lazy"
                  src={src}
                  alt={`${activeProject.n} photo ${pIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
