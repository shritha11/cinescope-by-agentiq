import React, { useState } from 'react';
import { Zap, Globe, Shield } from 'lucide-react';

const C = {
  bg: "#08080f",
  bgAlt: "#0d0d18",
  surface: "rgba(255,255,255,0.04)",
  surfaceHover: "rgba(255,255,255,0.07)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(255,255,255,0.18)",
  primary: "#7c3aed",
  primaryGlow: "rgba(124,58,237,0.25)",
  secondary: "#06b6d4",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.5)",
  textSubtle: "rgba(255,255,255,0.25)",
  heroSize: "clamp(60px, 9vw, 110px)",
  h2Size: "clamp(36px, 5vw, 64px)",
  heroWeight: 800,
  heroTracking: "-0.06em",
  heroLH: 0.92,
  font: "'Inter', system-ui, sans-serif",
  sectionPad: "140px 80px",
  maxW: "1280px",
  cardPad: "36px",
  gap: "20px",
  cardR: "20px",
  btnR: "100px",
  shadow: "0 2px 40px rgba(0,0,0,0.4)",
  glow: "0 0 60px rgba(124,58,237,0.25)",
  btnShadow: "0 8px 32px rgba(124,58,237,0.35)",
  ease: "0.25s ease",
  lift: "translateY(-4px)",
};

export default function Hero() {
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);

  const gradientWords = ["Indian", "movies", "stars"];
  const headline = "Explore Indian movies and stars";

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: C.sectionPad,
        background: C.bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: C.maxW,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "80px",
        }}
      >
        {/* Left Side */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: C.primary,
              fontWeight: 600,
              marginBottom: "24px",
            }}
          >
            INDIAN CINEMA
          </div>
          <h1
            style={{
              fontSize: C.heroSize,
              fontWeight: C.heroWeight,
              letterSpacing: C.heroTracking,
              lineHeight: C.heroLH,
              marginBottom: "24px",
            }}
          >
            {headline.split(" ").map((word, index) =>
              gradientWords.includes(word) ? (
                <span
                  key={index}
                  style={{
                    background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline",
                  }}
                >
                  {word}
                </span>
              ) : (
                <span key={index} style={{ color: C.text, display: "inline" }}>
                  {word}
                </span>
              )
            )}
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: C.textMuted,
              lineHeight: 1.75,
              maxWidth: "520px",
              marginBottom: "40px",
            }}
          >
            Dive into the latest films and top actors.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <button
              onMouseEnter={() => setIsPrimaryHovered(true)}
              onMouseLeave={() => setIsPrimaryHovered(false)}
              style={{
                background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                padding: "14px 32px",
                borderRadius: C.btnR,
                border: "none",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: isPrimaryHovered ? C.glow : C.btnShadow,
                transform: isPrimaryHovered ? C.lift : "none",
                transition: C.ease,
              }}
            >
              Discover Now
            </button>
            <button
              style={{
                background: "transparent",
                border: `1px solid rgba(255,255,255,0.2)`,
                padding: "14px 32px",
                borderRadius: C.btnR,
                color: C.text,
                cursor: "pointer",
              }}
            >
              Browse Upcoming →
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div
          style={{
            flex: 1,
            background: C.bgAlt,
            border: `1px solid ${C.border}`,
            borderRadius: "16px",
            padding: "24px",
            boxShadow: C.shadow,
            minHeight: "380px",
          }}
        >
          {/* Mini Dashboard */}
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            {/* Top Bar */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              {["#ff5f56", "#ffbd2e", "#27c93f"].map((color, index) => (
                <div
                  key={index}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: color,
                  }}
                ></div>
              ))}
            </div>

            <div style={{ display: "flex", height: "100%" }}>
              {/* Sidebar */}
              <div
                style={{
                  background: C.surface,
                  width: "40px",
                  marginRight: "16px",
                }}
              ></div>

              {/* Main Area */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Stat Cards */}
                <div style={{ display: "flex", gap: "16px" }}>
                  {["Movies", "Actors"].map((label, index) => (
                    <div
                      key={index}
                      style={{
                        flex: 1,
                        background: C.surface,
                        border: `1px solid ${C.border}`,
                        borderRadius: "8px",
                        padding: "16px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "12px",
                          color: C.textSubtle,
                          marginBottom: "8px",
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontSize: "24px",
                          fontWeight: 700,
                          color: C.text,
                        }}
                      >
                        {index === 0 ? "120+" : "50+"}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bar Chart */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "4px",
                    marginTop: "auto",
                  }}
                >
                  {[40, 60, 30, 80, 50].map((height, index) => (
                    <div
                      key={index}
                      style={{
                        width: "10px",
                        height: `${height}px`,
                        background: C.primary,
                        opacity: 0.6,
                        borderRadius: "4px",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Decoration */}
      <div
        style={{
          position: "absolute",
          pointerEvents: "none",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${C.primaryGlow} 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      ></div>
    </section>
  );
}