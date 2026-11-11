import React from "react";

export function GlowBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-sky-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl opacity-75" />

      {/* Subtle Mid Left Glow */}
      <div className="absolute top-[40%] -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-sky-600/5 to-transparent rounded-full blur-3xl opacity-60" />

      {/* Subtle Bottom Right Glow */}
      <div className="absolute bottom-20 -right-32 w-[600px] h-[500px] bg-gradient-to-tl from-purple-600/10 via-indigo-600/5 to-transparent rounded-full blur-3xl opacity-60" />

      {/* Ambient Grid Texture */}
      <div className="absolute inset-0 ambient-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}
