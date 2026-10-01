"use client";

import React, { useRef } from "react";

export const GoogleReviews: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollerRef.current) return;
    const card = scrollerRef.current.querySelector(".rv-card");
    const cardWidth = card ? card.getBoundingClientRect().width + 22 : 380;
    scrollerRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <div className="rv-head">
          <div>
            <div className="eyebrow">Customer Feedback</div>
            <h2>Trusted by Johannesburg property owners.</h2>
            <p className="lede" style={{ marginTop: "12px" }}>
              Hear what homeowners, landlords, and commercial clients say about GDM&apos;s roofing, Rhinolite ceilings, and renovation services.
            </p>
          </div>

          <div className="rv-badge">
            <span className="g-mark">
              <svg viewBox="0 0 48 48">
                <path
                  fill="#4285F4"
                  d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
                />
                <path
                  fill="#34A853"
                  d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
                />
                <path
                  fill="#FBBC05"
                  d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
                />
                <path
                  fill="#EA4335"
                  d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7C13.42 14.62 18.27 10.75 24 10.75z"
                />
              </svg>
            </span>
            <span className="g-meta">
              <strong>GDM Construction &amp; Roofing</strong>
              <span className="stars">
                ★★★★★ <small>5.0 Star Client Rating</small>
              </span>
            </span>
          </div>
        </div>

        <div className="rv-carousel">
          <div className="rv-scroller" id="rvScroller" ref={scrollerRef}>
            {/* Review 1 */}
            <article className="rv-card">
              <div className="rv-top">
                <div className="rv-avatar" style={{ background: "#7c3aed" }}>
                  S
                </div>
                <div className="rv-who">
                  <b>Sipho M.</b>
                  <span>Homeowner · Bedfordview</span>
                </div>
                <svg className="rv-google" viewBox="0 0 48 48">
                  <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
                  <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
                  <path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
                  <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7C13.42 14.62 18.27 10.75 24 10.75z" />
                </svg>
              </div>
              <div className="rv-stars">★★★★★</div>
              <p>
                &ldquo;GDM replaced our aging roof with brand new Chromadek sheeting. Clayton and the team were punctual, respectful of our property, and completed the job on schedule. No leaks even during the recent heavy hailstorms!&rdquo;
              </p>
              <span className="rv-tag">New Roof Installation · Bedfordview</span>
            </article>

            {/* Review 2 */}
            <article className="rv-card">
              <div className="rv-top">
                <div className="rv-avatar" style={{ background: "#0891b2" }}>
                  D
                </div>
                <div className="rv-who">
                  <b>David K.</b>
                  <span>Property Owner · Sandton</span>
                </div>
                <svg className="rv-google" viewBox="0 0 48 48">
                  <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
                  <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
                  <path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
                  <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7C13.42 14.62 18.27 10.75 24 10.75z" />
                </svg>
              </div>
              <div className="rv-stars">★★★★★</div>
              <p>
                &ldquo;Their ceiling work is exceptional. Ronald did Rhinolite skimming throughout our entire ground floor. It looks like a mirror finish. They also repainted the interior. Honest quote and no mess left behind.&rdquo;
              </p>
              <span className="rv-tag">Ceilings (Rhinolite) &amp; Painting · Sandton</span>
            </article>

            {/* Review 3 */}
            <article className="rv-card">
              <div className="rv-top">
                <div className="rv-avatar" style={{ background: "#059669" }}>
                  A
                </div>
                <div className="rv-who">
                  <b>Amanda van der Merwe</b>
                  <span>Landlord · Edenvale</span>
                </div>
                <svg className="rv-google" viewBox="0 0 48 48">
                  <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
                  <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
                  <path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
                  <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7C13.42 14.62 18.27 10.75 24 10.75z" />
                </svg>
              </div>
              <div className="rv-stars">★★★★★</div>
              <p>
                &ldquo;We had a severe active roof leak pouring into our tenant&apos;s bedroom at 8pm. GDM responded immediately, did an emergency repair on the spot, and provided a comprehensive report for my records. Highly recommended!&rdquo;
              </p>
              <span className="rv-tag">24/7 Emergency Leak Repair · Edenvale</span>
            </article>

            {/* Review 4 */}
            <article className="rv-card">
              <div className="rv-top">
                <div className="rv-avatar" style={{ background: "#ea580c" }}>
                  B
                </div>
                <div className="rv-who">
                  <b>Brian Govender</b>
                  <span>Commercial Complex · Randburg</span>
                </div>
                <svg className="rv-google" viewBox="0 0 48 48">
                  <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
                  <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
                  <path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
                  <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7C13.42 14.62 18.27 10.75 24 10.75z" />
                </svg>
              </div>
              <div className="rv-stars">★★★★★</div>
              <p>
                &ldquo;GDM handled both waterproofing on our parapet walls and tiling/painting in our office units. As a body corporate, we appreciate their VAT compliance, clear line-item billing, and solid workmanship.&rdquo;
              </p>
              <span className="rv-tag">Waterproofing &amp; Building · Randburg</span>
            </article>
          </div>

          <div className="rv-nav">
            <div className="rv-arrows">
              <button
                className="rv-arrow"
                id="rvPrev"
                aria-label="Previous review"
                onClick={() => handleScroll("left")}
                type="button"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="rv-arrow"
                id="rvNext"
                aria-label="Next review"
                onClick={() => handleScroll("right")}
                type="button"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <a
              href="https://wa.me/27833662700?text=Hello%20GDM%20Construction,%20I%20would%20like%20to%20read%20more%20references"
              target="_blank"
              rel="noopener noreferrer"
              className="rv-see-all"
            >
              Contact Us for Client References
              <svg
                className="arr"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
