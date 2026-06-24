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

export default function Reviews() {
  const reviews = [
    {
      name: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1626219828199-d54b8c72cddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBtb3ZpZXMlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMGNpbmVtYXRpY3xlbnwwfHx8fDE3ODIzMTYxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      review: "CineScope offers the most immersive cinematic experience. Their collection of Indian movies is unmatched!",
    },
    {
      name: "Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1626219828221-a6ee8eb12738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBtb3ZpZXMlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMGNpbmVtYXRpY3xlbnwwfHx8fDE3ODIzMTYxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      review: "The platform is sleek, and the movie recommendations are spot-on. A must-visit for every Indian cinema fan.",
    },
    {
      name: "Anita Desai",
      image: "https://images.unsplash.com/photo-1649361681597-80d37a26d9a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBtb3ZpZXMlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMGNpbmVtYXRpY3xlbnwwfHx8fDE3ODIzMTYxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      review: "I love how user-friendly CineScope is. The dark theme is so easy on the eyes, and browsing feels seamless.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: C.bgAlt,
        color: C.text,
        fontFamily: C.font,
        padding: C.sectionPad,
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: C.h2Size,
          fontWeight: C.heroWeight,
          letterSpacing: C.heroTracking,
          marginBottom: C.gap,
        }}
      >
        What Our Viewers Say
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: C.gap,
          flexWrap: "wrap",
          maxWidth: C.maxW,
          margin: "0 auto",
        }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              backgroundColor: C.surface,
              borderRadius: C.cardR,
              padding: C.cardPad,
              boxShadow: C.shadow,
              maxWidth: "300px",
              textAlign: "left",
              transition: C.ease,
            }}
          >
            <img
              src={review.image}
              alt={review.name}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: C.gap,
              }}
            />
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "10px",
                color: C.text,
              }}
            >
              {review.name}
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.5",
                color: C.textMuted,
              }}
            >
              {review.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}