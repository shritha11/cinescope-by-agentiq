import React from 'react';

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

export default function CTA() {
  return (
    <section
      style={{
        padding: C.sectionPad,
        position: "relative",
        overflow: "hidden",
        background: C.bgAlt,
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "300px",
          background: `radial-gradient(ellipse, ${C.primaryGlow} 0%, transparent 70%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "640px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
            color: C.text,
            background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Experience Indian Cinema Like Never Before
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: C.textMuted,
            marginBottom: "40px",
          }}
        >
          Dive into the world of cinematic masterpieces and discover the magic
          of Indian movies.
        </p>
        <button
          style={{
            padding: "14px 32px",
            fontSize: "16px",
            fontWeight: "600",
            color: C.text,
            background: C.primary,
            border: "none",
            borderRadius: C.btnR,
            boxShadow: C.btnShadow,
            cursor: "pointer",
            transition: C.ease,
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = C.lift;
            e.target.style.boxShadow = C.glow;
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = C.btnShadow;
          }}
        >
          Discover Now
        </button>
        <p
          style={{
            fontSize: "14px",
            color: C.textSubtle,
            marginTop: "20px",
          }}
        >
          No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}