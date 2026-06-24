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

export default function Footer() {
  return (
    <footer
      style={{
        background: C.bg,
        borderTop: `1px solid ${C.border}`,
        padding: "80px 80px 40px",
        fontFamily: C.font,
        color: C.text,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "60px",
          maxWidth: C.maxW,
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: "240px" }}>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 800,
              background: `linear-gradient(to right, ${C.primary}, ${C.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
            }}
          >
            CineScope
          </div>
          <p
            style={{
              fontSize: "14px",
              color: C.textSubtle,
              marginTop: "8px",
            }}
          >
            Your ultimate destination for Indian cinematic experiences.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "64px",
          }}
        >
          <div>
            <h4
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Company
            </h4>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              About Us
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Careers
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Press
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Blog
            </a>
          </div>
          <div>
            <h4
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Support
            </h4>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Help Center
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Contact Us
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              FAQs
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Accessibility
            </a>
          </div>
          <div>
            <h4
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Legal
            </h4>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Terms of Service
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1px solid ${C.border}`,
          paddingTop: "32px",
          marginTop: "0",
          maxWidth: C.maxW,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: C.textSubtle,
          }}
        >
          © 2026 CineScope. All rights reserved.
        </p>
        <p
          style={{
            fontSize: "13px",
            color: C.textSubtle,
          }}
        >
          Built with AgentIQ
        </p>
      </div>
    </footer>
  );
}