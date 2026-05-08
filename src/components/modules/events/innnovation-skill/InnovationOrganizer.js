import React from "react";

export default function InnovationOrganizer() {
  return (
    <section className="w-full bg-[#32094C] flex justify-center">
      <div className="w-full max-w-6xl px-4 text-center">

        {/* Section Title */}
        <h2 className="text-[#CFA8FF] text-2xl md:text-3xl font-semibold mb-14">
          Organized By
        </h2>

        {/* Card Wrapper */}
        <div className="relative mx-auto max-w-4xl">

          {/* Outer Glow */}
          <div
            className="
              absolute inset-0 rounded-3xl
              shadow-[0_0_80px_10px_rgba(168,85,247,0.45)]
            "
          />

          {/* Glass Card */}
          <div
            className="
              relative rounded-3xl
              bg-[#2B0F45]/90
              backdrop-blur-md
              border border-purple-400/30
              px-6 sm:px-10 py-14
            "
          >
            {/* Decorative corner strokes */}
            <span className="absolute left-6 top-6 w-10 h-10 border-l border-t border-purple-400/40 rounded-tl-xl" />
            <span className="absolute right-6 bottom-6 w-10 h-10 border-r border-b border-purple-400/40 rounded-br-xl" />

            {/* Logo Card */}
            <div className="flex justify-center mb-10">
              <div
                className="
                  bg-white
                  rounded-xl
                  border border-purple-500
                  px-6 py-4
                  shadow-[0_0_25px_rgba(168,85,247,0.35)]
                "
              >
                <img
                  src="/assets/itbi.png"
                  alt="IT Business Incubator CUET"
                  className="h-16 md:h-18 object-contain"
                />
              </div>
            </div>

            {/* Organizer Text */}
            <h3 className="text-[#CFA8FF] text-xl md:text-2xl font-semibold mb-2">
              IT Business Incubator (ITBI)
            </h3>

            <p className="text-gray-200 text-sm md:text-base">
              Chittagong University of Engineering & Technology (CUET)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
