"use client";

import React, { useRef, useEffect, useState } from "react";

interface MeetJordanProps {
  onOpenBooking: () => void;
}

export const MeetJordan: React.FC<MeetJordanProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Load YouTube IFrame API
    if (typeof window !== "undefined") {
      if (!(window as any).YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }
    }

    const initPlayer = () => {
      if ((window as any).YT && (window as any).YT.Player && !playerRef.current) {
        playerRef.current = new (window as any).YT.Player("gdm-yt-player", {
          videoId: "vasvYXUHx04",
          playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            mute: 1,
            enablejsapi: 1,
          },
          events: {
            onReady: (event: any) => {
              try {
                event.target.mute();
              } catch {}
            },
            onStateChange: (event: any) => {
              // 1 = playing, 2 = paused
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2) {
                setIsPlaying(false);
              }
            },
          },
        });
      }
    };

    if ((window as any).YT && (window as any).YT.Player) {
      initPlayer();
    } else {
      const prevHandler = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        if (typeof prevHandler === "function") prevHandler();
        initPlayer();
      };
    }

    // Resilient command sender
    const sendCommand = (func: string, args: any = "") => {
      if (playerRef.current && typeof playerRef.current[func] === "function") {
        try {
          playerRef.current[func](args);
        } catch {}
      }
      if (iframeRef.current && iframeRef.current.contentWindow) {
        try {
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ event: "command", func, args }),
            "*"
          );
        } catch {}
      }
    };

    // IntersectionObserver: Auto-play when scrolled in, Auto-pause when scrolled away
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sendCommand("playVideo");
            setIsPlaying(true);
          } else {
            sendCommand("pauseVideo");
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
    };
  }, []);

  const toggleSound = () => {
    if (playerRef.current) {
      if (isMuted) {
        if (typeof playerRef.current.unMute === "function") playerRef.current.unMute();
        setIsMuted(false);
      } else {
        if (typeof playerRef.current.mute === "function") playerRef.current.mute();
        setIsMuted(true);
      }
    } else if (iframeRef.current && iframeRef.current.contentWindow) {
      const func = isMuted ? "unMute" : "mute";
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func, args: "" }),
        "*"
      );
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="jordan" id="about">
      <div className="wrap jordan-grid">
        <div className="jv-col">
          {/* YouTube Video Container with Scroll-triggered Autoplay/Pause */}
          <div
            ref={containerRef}
            className="jv-frame"
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "16 / 9",
              background: "#0a1120",
              boxShadow: "0 14px 40px rgba(0,0,0,0.25)",
              border: "1.5px solid rgba(47, 127, 224, 0.25)",
            }}
          >
            <iframe
              ref={iframeRef}
              id="gdm-yt-player"
              src="https://www.youtube.com/embed/vasvYXUHx04?enablejsapi=1&autoplay=0&mute=1&playsinline=1&rel=0&modestbranding=1"
              title="GDM Construction &amp; Roofing Owner Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
                zIndex: 2,
              }}
            />

            {/* Floating Live Status & Audio Controls */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                right: "12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pointerEvents: "none",
                zIndex: 10,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(15, 23, 42, 0.82)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: isPlaying ? "#22c55e" : "#f59e0b",
                    boxShadow: isPlaying ? "0 0 10px #22c55e" : "none",
                    animation: isPlaying ? "pulse-dot 2s infinite ease-in-out" : "none",
                  }}
                />
                {isPlaying ? "Auto-Playing · Owner Intro" : "Paused · Scroll to Play"}
              </span>

              <button
                type="button"
                onClick={toggleSound}
                style={{
                  pointerEvents: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: isMuted ? "rgba(15, 23, 42, 0.85)" : "#2563eb",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "6px 12px",
                  borderRadius: "999px",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
                  transition: "all 0.2s ease",
                }}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "13px", height: "13px" }}>
                      <line x1="1" y1="1" x2="23" y2="23" />
                      <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
                      <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" />
                    </svg>
                    <span>Tap for Sound</span>
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "13px", height: "13px" }}>
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                    <span>Sound On</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="jv-caption" style={{ marginTop: "14px" }}>
            🎥 <strong>Owner Introduction:</strong> The story, passion, and personal craftsmanship behind GDM Construction &amp; Roofing.
          </div>

          <div
            style={{
              background: "var(--white)",
              border: "1px solid var(--line)",
              borderRadius: "16px",
              padding: "20px",
              marginTop: "18px",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--amber-deep)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "12px",
              }}
            >
              Meet Our Core Team
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong style={{ fontSize: "15px", color: "var(--ink)" }}>Clayton</strong>
                  <div style={{ fontSize: "12.5px", color: "var(--ink-soft)" }}>Senior Roofing &amp; Construction Lead</div>
                </div>
                <span
                  style={{
                    background: "var(--cream-deep)",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--amber-deep)",
                  }}
                >
                  20 Years Exp
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong style={{ fontSize: "15px", color: "var(--ink)" }}>Ronald</strong>
                  <div style={{ fontSize: "12.5px", color: "var(--ink-soft)" }}>Renovations, Ceilings &amp; Tiling Specialist</div>
                </div>
                <span
                  style={{
                    background: "var(--cream-deep)",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--amber-deep)",
                  }}
                >
                  6 Years Exp
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong style={{ fontSize: "15px", color: "var(--ink)" }}>Clifford</strong>
                  <div style={{ fontSize: "12.5px", color: "var(--ink-soft)" }}>Waterproofing &amp; Structural Tradesman</div>
                </div>
                <span
                  style={{
                    background: "var(--cream-deep)",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--amber-deep)",
                  }}
                >
                  4 Years Exp
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="jordan-body">
          <div className="eyebrow">Our Story &amp; Values</div>
          <h2>Building an honest business from the ground up.</h2>
          <p>
            GDM Construction &amp; Roofing was built on hard work, dedication, and genuine pride in craftsmanship.
          </p>
          <p className="jordan-pull">
            &ldquo;I was working for another company, then I asked myself — <em>why can&apos;t I do my own?</em> So I started GDM: to make an honest living, deliver better quality to homeowners, and proudly support my kids, family, and parents.&rdquo;
          </p>
          <p>
            Today, GDM operates as a full-service general building and renovation contractor across Johannesburg. Whether you need a brand-new roof, Rhinolite skimmed ceilings, a kitchen revamp, or emergency leak repairs, our team gives every job the exact same care and meticulous attention.
          </p>

          <ul className="jordan-free">
            <li>
              <span className="tick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <b>Free site inspections &amp; quotes</b> within our main service areas
            </li>
            <li>
              <span className="tick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <b>VAT Registered &amp; fully compliant contractor</b>
            </li>
            <li>
              <span className="tick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <b>24/7 emergency storm damage &amp; leak call-outs</b>
            </li>
          </ul>

          <div className="jordan-sig">
            <div className="jordan-sig-name">— The GDM Team</div>
            <div className="jordan-sig-role">GDM Construction &amp; Roofing (Pty) Ltd</div>
          </div>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "24px" }}>
            <button type="button" className="btn btn-amber open-booking" onClick={onOpenBooking}>
              Request Site Inspection
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                style={{ width: "16px", height: "16px" }}
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <a
              href="https://wa.me/27833662700?text=Hello%20GDM%20Construction,%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              WhatsApp Us (+27 83 366 2700)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
