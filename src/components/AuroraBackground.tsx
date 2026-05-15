"use client"

/* Fixed aurora orbs — ZegoCloud-style animated gradient blobs */
export function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -2,
        overflow: "hidden",
        background: "#0A0E1A",
        pointerEvents: "none",
      }}
    >
      {/* subtle dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(248,250,252,0.035) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* Orb 1 — large cyan-teal, top-left */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: "640px",
          height: "640px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.18) 0%, rgba(6,182,212,0.06) 50%, transparent 75%)",
          filter: "blur(72px)",
          animation: "auroraFloat1 18s ease-in-out infinite",
        }}
      />

      {/* Orb 2 — purple-indigo, top-right */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "-8%",
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.16) 0%, rgba(139,92,246,0.07) 55%, transparent 75%)",
          filter: "blur(80px)",
          animation: "auroraFloat2 22s ease-in-out infinite",
        }}
      />

      {/* Orb 3 — blue, mid-left */}
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "20%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.11) 0%, rgba(59,130,246,0.04) 55%, transparent 75%)",
          filter: "blur(90px)",
          animation: "auroraFloat3 26s ease-in-out infinite",
        }}
      />

      {/* Orb 4 — cyan, bottom-right */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "12%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.10) 0%, rgba(6,182,212,0.03) 55%, transparent 75%)",
          filter: "blur(85px)",
          animation: "auroraFloat1 20s ease-in-out infinite reverse",
        }}
      />

      {/* Orb 5 — purple, bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          left: "5%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.09) 0%, transparent 70%)",
          filter: "blur(75px)",
          animation: "auroraFloat2 24s ease-in-out infinite reverse",
        }}
      />

      {/* Vignette to keep edges dark */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 100% 90% at 50% 50%, transparent 40%, rgba(10,14,26,0.75) 100%)",
        }}
      />
    </div>
  )
}
