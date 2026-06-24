import React from 'react';
import { Zap, Globe, Shield, TrendingUp, Layers, Star } from 'lucide-react';

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

export default function Features() {
  const cards = [
    {
      icon: <Zap color={C.primary} size={40} />,
      title: "Now Showing",
      body: "Explore movies currently in theaters.",
    },
    {
      icon: <Globe color={C.primary} size={40} />,
      title: "Upcoming Movies",
      body: "Stay updated on future releases.",
    },
    {
      icon: <Shield color={C.primary} size={40} />,
      title: "Top Actors",
      body: "Discover profiles of leading stars.",
    },
    {
      icon: <TrendingUp color={C.primary} size={40} />,
      title: "Reviews",
      body: "Read and share movie reviews.",
    },
    {
      icon: <Layers color={C.primary} size={40} />,
      title: "Genres",
      body: "Browse movies by genre and theme.",
    },
    {
      icon: <Star color={C.primary} size={40} />,
      title: "Ratings",
      body: "Find top-rated films and recommendations.",
    },
  ];

  return (
    <section
      style={{
        padding: C.sectionPad,
        background: C.bgAlt,
        color: C.text,
        fontFamily: C.font,
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            color: C.textSubtle,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "10px",
          }}
        >
          WHY CINESCOPE
        </div>
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
          }}
        >
          Your ultimate Indian cinema hub
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: C.gap,
          maxWidth: C.maxW,
          margin: "0 auto",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: C.surface,
              padding: C.cardPad,
              borderRadius: C.cardR,
              boxShadow: C.shadow,
              transition: C.ease,
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = C.lift)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div style={{ marginBottom: "20px" }}>{card.icon}</div>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {card.title}
            </h3>
            <p style={{ color: C.textMuted }}>{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}