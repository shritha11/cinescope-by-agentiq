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

const TopActors = () => {
  const actors = [
    {
      name: "Shah Rukh Khan",
      image: "https://images.unsplash.com/photo-1633528053918-d508134ebe67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtb3ZpZXMlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMGNpbmVtYXRpY3xlbnwwfHx8fDE3ODIzMTYxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Deepika Padukone",
      image: "https://images.unsplash.com/photo-1626219828199-d54b8c72cddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBtb3ZpZXMlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMGNpbmVtYXRpY3xlbnwwfHx8fDE3ODIzMTYxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Ranveer Singh",
      image: "https://images.unsplash.com/photo-1626219828221-a6ee8eb12738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBtb3ZpZXMlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMGNpbmVtYXRpY3xlbnwwfHx8fDE3ODIzMTYxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Priyanka Chopra",
      image: "https://images.unsplash.com/photo-1649361681597-80d37a26d9a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBtb3ZpZXMlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMGNpbmVtYXRpY3xlbnwwfHx8fDE3ODIzMTYxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Amitabh Bachchan",
      image: "https://images.unsplash.com/photo-1664202587783-bd6a2f522db0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw1fHxpbmRpYW4lMjBtb3ZpZXMlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMGNpbmVtYXRpY3xlbnwwfHx8fDE3ODIzMTYxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: C.bg,
        color: C.text,
        padding: C.sectionPad,
        fontFamily: C.font,
      }}
    >
      <div
        style={{
          maxWidth: C.maxW,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
            marginBottom: "40px",
          }}
        >
          Top Actors
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: C.gap,
          }}
        >
          {actors.map((actor, index) => (
            <div
              key={index}
              style={{
                backgroundColor: C.surface,
                borderRadius: C.cardR,
                overflow: "hidden",
                boxShadow: C.shadow,
                transition: C.ease,
                cursor: "pointer",
              }}
            >
              <img
                src={actor.image}
                alt={actor.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  padding: C.cardPad,
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  {actor.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopActors;