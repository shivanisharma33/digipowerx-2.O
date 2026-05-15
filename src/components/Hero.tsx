import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Glow */}
      <div className="absolute left-[65%] top-[35%] h-[600px] w-[600px] rounded-full bg-yellow-400/10 blur-[180px]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 items-center gap-20 px-6 py-20 lg:grid-cols-2 lg:px-16">
        {/* LEFT CONTENT */}
        <div className="max-w-[620px]">
          {/* Top Badge */}
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-yellow-500/30 bg-yellow-500/5 px-5 py-2">
            <div className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-yellow-400">
              Vertically Integrated AI Infrastructure
            </span>
          </div>

          {/* Heading */}
          <h1 className="leading-[0.95] tracking-[-0.06em]">
            <span className="block text-[clamp(60px,8vw,120px)] font-black text-white">
              Powering AI
            </span>

            <span className="mt-2 block text-[clamp(60px,8vw,120px)] font-black text-white">
              From the
            </span>

            <span className="mt-2 block text-[clamp(60px,8vw,120px)] font-black text-[#ffc629]">
              Energy Layer Up
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-10 max-w-[560px] text-[18px] leading-[1.9] text-[#8f96a1]">
            DigiPower X is building vertically integrated AI infrastructure —
            combining owned power assets, Tier III data centers, GPU compute
            clusters, and the NeoCloudz AI cloud platform.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">
          {/* Background Box */}
          <div className="absolute h-[90%] w-[90%] border border-white/5 bg-white/[0.02] backdrop-blur-sm" />

          {/* Main Stack */}
          <div className="relative h-[720px] w-[720px] scale-[0.9]">
            {/* TOP LAYER */}
            <div className="absolute left-[140px] top-[40px]">
              <div
                className="relative h-[140px] w-[420px] border border-white/10 bg-white/[0.03]"
                style={{
                  clipPath:
                    "polygon(18% 0%, 100% 25%, 82% 100%, 0% 75%)",
                }}
              >
                {/* Small Blocks */}
                <div className="absolute left-[60px] top-[30px] flex gap-3">
                  <div className="h-10 w-10 bg-[#1b1b1b] shadow-[0_0_20px_rgba(255,198,41,0.15)]" />
                  <div className="h-10 w-10 bg-[#1b1b1b]" />
                </div>

                <div className="absolute right-[70px] top-[40px] flex gap-3">
                  <div className="h-10 w-10 bg-[#1b1b1b]" />
                  <div className="h-10 w-10 bg-[#1b1b1b]" />
                </div>
              </div>
            </div>

            {/* ACTIVE GPU LAYER */}
            <div className="absolute left-[110px] top-[190px]">
              {/* Glow */}
              <div className="absolute inset-0 bg-yellow-400/20 blur-[120px]" />

              <div
                className="relative h-[180px] w-[500px] border-2 border-[#ffc629] bg-yellow-400/10"
                style={{
                  clipPath:
                    "polygon(18% 0%, 100% 25%, 82% 100%, 0% 75%)",
                }}
              >
                {/* GPU Blocks */}
                <div className="absolute left-[140px] top-[40px] grid grid-cols-5 gap-3">
                  {[...Array(25)].map((_, i) => (
                    <div
                      key={i}
                      className="h-9 w-9 bg-gradient-to-b from-[#93a7d8] to-[#3d4d72] shadow-[0_0_20px_rgba(255,198,41,0.2)]"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* THIRD LAYER */}
            <div className="absolute left-[160px] top-[410px] opacity-40">
              <div
                className="relative h-[140px] w-[420px] border border-white/10 bg-white/[0.03]"
                style={{
                  clipPath:
                    "polygon(18% 0%, 100% 25%, 82% 100%, 0% 75%)",
                }}
              />
            </div>

            {/* BOTTOM LAYER */}
            <div className="absolute left-[190px] top-[560px] opacity-30">
              <div
                className="relative h-[120px] w-[360px] border border-white/10 bg-white/[0.03]"
                style={{
                  clipPath:
                    "polygon(18% 0%, 100% 25%, 82% 100%, 0% 75%)",
                }}
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="absolute right-[-120px] top-[270px] max-w-[220px]">
              <div className="flex gap-5">
                <div className="w-[2px] bg-[#ffc629]" />

                <div>
                  <div className="mb-3 text-sm font-bold tracking-[0.3em] text-[#ffc629]">
                    03
                  </div>

                  <h3 className="text-[28px] font-bold leading-tight text-white">
                    GPU Compute Layer
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.8] text-[#8f96a1]">
                    High-density GPU clusters with in-row liquid cooling,
                    supporting AI training, inference, and enterprise workloads.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="absolute bottom-[-20px] right-[20px] flex items-center gap-3 text-[12px] uppercase tracking-[0.35em] text-[#6e6e6e]">
              <div className="h-2 w-2 rounded-full bg-[#ffc629]" />
              Infrastructure Stack — Live
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}