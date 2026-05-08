import React from "react";

export default function InnovationPartner() {
  return (
    <section className="w-full bg-[#32094C] py-24 flex justify-center">
      <div className="w-full max-w-5xl px-6 text-center">

        {/* Section Title */}
        <h2 className="text-[#CFA8FF] text-2xl md:text-3xl font-semibold mb-16">
          In Association with
        </h2>

        {/* Association Card */}
        <div className="relative mx-auto max-w-4xl mb-10">
          <div className="absolute inset-0 rounded-3xl shadow-[0_0_60px_10px_rgba(168,85,247,0.35)]" />
          <div className="relative rounded-3xl bg-[#2B0F45]/90 backdrop-blur-md border border-purple-400/30 px-12 sm:px-16 py-20">
            <span className="absolute left-8 top-8 w-12 h-12 border-l border-t border-purple-400/40 rounded-tl-xl" />
            <span className="absolute right-8 bottom-8 w-12 h-12 border-r border-b border-purple-400/40 rounded-br-xl" />
            <div className="mx-auto max-w-4xl rounded-2xl bg-white px-14 py-10 shadow-[0_0_45px_14px_rgba(255,255,255,0.45)]">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-20 sm:gap-50">
                <img src="/logos/22.png" alt="Aspire Startup Program" className="h-24 sm:h-28 object-contain scale-300" />
                <img src="/logos/32.png" alt="Aspire Education Foundation" className="h-24 sm:h-28 object-contain scale-250" />
              </div>
            </div>
          </div>
        </div>

        {/* Gold Sponsor label */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 max-w-32 bg-purple-400/20" />
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border border-purple-400/30 text-[#CFA8FF] bg-purple-400/10 whitespace-nowrap">
            Gold Sponsor
          </span>
          <div className="h-px flex-1 max-w-32 bg-purple-400/20" />
        </div>

        {/* BdREN Card */}
        <div className="relative mx-auto max-w-sm">
          <div className="absolute inset-0 rounded-3xl shadow-[0_0_60px_10px_rgba(168,85,247,0.35)]" />
          <div className="relative rounded-3xl bg-[#2B0F45]/90 backdrop-blur-md border border-purple-400/30 px-12 py-14">
            <span className="absolute left-8 top-8 w-12 h-12 border-l border-t border-purple-400/40 rounded-tl-xl" />
            <span className="absolute right-8 bottom-8 w-12 h-12 border-r border-b border-purple-400/40 rounded-br-xl" />
            <div className="rounded-2xl bg-white px-10 py-8 shadow-[0_0_45px_14px_rgba(255,255,255,0.45)]">
              <img
                src="/logos/bdren.jpeg"
                alt="BdREN"
                className="h-16 sm:h-20 w-auto object-contain mx-auto"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}