"use client";

import React, { useRef, useEffect, useState } from "react";

interface MeetJordanProps {
  onOpenBooking: () => void;
}

export const MeetJordan: React.FC<MeetJordanProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
  const isInViewRef = useRef<boolean>(false);
  const userMutedExplicitlyRef = useRef<boolean>(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Helper to send commands to YouTube player
  const sendCommand = (func: string, args: any[] = []) => {
    if (playerRef.current && typeof playerRef.current[func] === "function") {
      try {
        playerRef.current[func](...args);
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
            mute: 0,
            enablejsapi: 1,
          },
          events: {
            onReady: (event: any) => {
              try {
                event.target.unMute();
                event.target.setVolume(100);
              } catch {}
              if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const inView =
                  rect.top < window.innerHeight * 0.75 &&
                  rect.bottom > window.innerHeight * 0.25;
                if (inView) {
                  isInViewRef.current = true;
                  try {
                    event.target.playVideo();
                    setIsPlaying(true);
                  } catch {}
                }
              }
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

    // IntersectionObserver: Auto-play with sound when scrolled in, Auto-pause when scrolled away
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isInViewRef.current = true;
            // Play video with audio automatically
            if (!userMutedExplicitlyRef.current) {
              sendCommand("unMute");
              sendCommand("setVolume", [100]);
              setIsMuted(false);
            }
            sendCommand("playVideo");
            setIsPlaying(true);
          } else {
            // Pause video automatically when scrolled away / more down
            isInViewRef.current = false;
            sendCommand("pauseVideo");
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Scroll & touch listener to guarantee sound playback when user reaches the video
    const unlockAudioOnScrollOrInteraction = () => {
      if (isInViewRef.current && !userMutedExplicitlyRef.current) {
        sendCommand("unMute");
        sendCommand("setVolume", [100]);
        setIsMuted(false);
      }
    };

    window.addEventListener("scroll", unlockAudioOnScrollOrInteraction, { passive: true });
    window.addEventListener("wheel", unlockAudioOnScrollOrInteraction, { passive: true });
    window.addEventListener("touchstart", unlockAudioOnScrollOrInteraction, { passive: true });
    window.addEventListener("pointerdown", unlockAudioOnScrollOrInteraction, { passive: true });
    window.addEventListener("keydown", unlockAudioOnScrollOrInteraction, { passive: true });

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
      window.removeEventListener("scroll", unlockAudioOnScrollOrInteraction);
      window.removeEventListener("wheel", unlockAudioOnScrollOrInteraction);
      window.removeEventListener("touchstart", unlockAudioOnScrollOrInteraction);
      window.removeEventListener("pointerdown", unlockAudioOnScrollOrInteraction);
      window.removeEventListener("keydown", unlockAudioOnScrollOrInteraction);
    };
  }, []);

  const toggleSound = () => {
    if (isMuted) {
      userMutedExplicitlyRef.current = false;
      sendCommand("unMute");
      sendCommand("setVolume", [100]);
      setIsMuted(false);
    } else {
      userMutedExplicitlyRef.current = true;
      sendCommand("mute");
      setIsMuted(true);
    }
  };

  return (
    <section className="jordan" id="about">
      <div className="wrap jordan-grid">
        <div className="jv-col">
          {/* YouTube Video Container with Scroll-triggered Autoplay/Pause & Automatic Sound */}
          <div
            ref={containerRef}
            className="jv-frame"
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "4 / 3",
              background: "#0a1120",
              boxShadow: "0 14px 40px rgba(0,0,0,0.25)",
              border: "1.5px solid rgba(47, 127, 224, 0.25)",
            }}
          >
            <iframe
              ref={iframeRef}
              id="gdm-yt-player"
              src="https://www.youtube.com/embed/vasvYXUHx04?enablejsapi=1&autoplay=0&mute=0&playsinline=1&rel=0&modestbranding=1"
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

            {/* Subtle Floating Sound Control in Top-Right Corner */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                zIndex: 10,
              }}
            >
              <button
                type="button"
                onClick={toggleSound}
                style={{
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
                    <span>Muted · Tap to Sound</span>
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


          <div className="jordan-actions">
            <button
              type="button"
              className="jordan-btn-primary"
              onClick={onOpenBooking}
            >
              <span>Request Site Inspection</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="jordan-btn-icon"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>

            <a
              href="https://wa.me/27833662700?text=Hello%20GDM%20Construction,%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="jordan-btn-whatsapp"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="jordan-btn-icon-wa"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.87 7.42 8.6 7.48 8.36 7.74C8.13 8 7.48 8.61 7.48 9.84C7.48 11.07 8.38 12.26 8.5 12.43C8.63 12.6 10.27 15.13 12.78 16.21C13.38 16.47 13.84 16.62 14.2 16.74C14.81 16.93 15.36 16.91 15.8 16.84C16.29 16.77 17.31 16.22 17.52 15.63C17.73 15.04 17.73 14.54 17.67 14.43C17.61 14.33 17.44 14.27 17.19 14.15C16.94 14.02 15.72 13.42 15.49 13.34C15.26 13.25 15.1 13.21 14.93 13.46C14.77 13.7 14.29 14.27 14.15 14.43C14 14.6 13.86 14.62 13.61 14.5C13.36 14.37 12.56 14.11 11.61 13.26C10.87 12.6 10.37 11.78 10.23 11.53C10.08 11.28 10.21 11.15 10.34 11.02C10.45 10.91 10.59 10.73 10.71 10.59C10.84 10.44 10.88 10.34 10.96 10.17C11.04 10 11 9.86 10.94 9.73C10.88 9.61 10.38 8.38 10.18 7.89C9.98 7.41 9.77 7.47 9.61 7.46C9.46 7.45 9.29 7.42 9.04 7.42Z" />
              </svg>
              <span>WhatsApp Us (+27 83 366 2700)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
