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

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = React.useState(null);

  const navLinks = ["Home", "Now Showing", "Upcoming", "Top Actors", "Reviews", "Genres"];

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        height: "68px",
        background: "rgba(8,8,15,0.85)",
        backdropFilter: "blur(24px) saturate(180%)",
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "20px",
          fontWeight: 800,
          letterSpacing: "-0.05em",
          background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        CineScope
      </div>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: "32px" }}>
        {navLinks.map((link, index) => (
          <a
            key={index}
            onMouseEnter={() => setHoveredLink(link)}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              fontSize: "14px",
              cursor: "pointer",
              textDecoration: "none",
              color: hoveredLink === link ? C.text : C.textMuted,
              transition: "color 0.25s ease",
            }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <button
        style={{
          background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
          padding: "9px 22px",
          borderRadius: C.btnR,
          border: "none",
          color: "#fff",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: C.btnShadow,
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.opacity = 0.9;
          e.target.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.opacity = 1;
          e.target.style.transform = "translateY(0)";
        }}
      >
        Sign Up
      </button>
    </div>
  );
}