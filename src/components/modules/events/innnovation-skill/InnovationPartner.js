import React from "react";

export default function InnovationPartner() {
  return (
    <section className="w-full bg-[#32094C] py-24 flex justify-center">
      <div className="w-full max-w-5xl px-6 text-center">

        {/* Section Title */}
        <h2 className="text-[#CFA8FF] text-2xl md:text-3xl font-semibold mb-16">
          In Association with
        </h2>

        {/* Card Wrapper */}
        <div className="relative mx-auto max-w-4xl">

          {/* Outer Glow (dimmer) */}
          <div
            className="
              absolute inset-0 rounded-3xl
              shadow-[0_0_60px_10px_rgba(168,85,247,0.35)]
            "
          />

          {/* Main Glass Card */}
          <div
            className="
              relative rounded-3xl
              bg-[#2B0F45]/90
              backdrop-blur-md
              border border-purple-400/30
              px-12 sm:px-16 py-20
            "
          >
            {/* Decorative corner strokes */}
            <span className="absolute left-8 top-8 w-12 h-12 border-l border-t border-purple-400/40 rounded-tl-xl" />
            <span className="absolute right-8 bottom-8 w-12 h-12 border-r border-b border-purple-400/40 rounded-br-xl" />

            {/* Inner White Glow Panel */}
            <div
              className="
                mx-auto
                max-w-4xl
                rounded-2xl
                bg-white
                px-14 py-10

                shadow-[0_0_45px_14px_rgba(255,255,255,0.45)]
              "
            >
              {/* Logos */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20">
                
                {/* Aspire Education Foundation */}
                <img
                  src="/logos/28.png"
                  alt="Aspire Education Foundation"
                  className="h-24 sm:h-28 object-contain"
                />

                {/* Aspire Internship Program */}
                <img
                  src="/logos/14.png"
                  alt="Aspire Internship Program"
                  className="h-16 sm:h-18 object-contain"
                />

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
