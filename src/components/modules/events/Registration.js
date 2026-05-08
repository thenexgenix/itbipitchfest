import React from "react";

export default function Registration({ data, hero }) {
  if (!data || !hero) return null;

  return (
    <section
      id="registration"
      className="flex items-center justify-center bg-[#38174E] text-white px-4 py-28 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#9d4edd]/20 blur-[140px] rounded-full"></div>
      </div>

      {/* Side accents */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/20 hidden xl:block"></div>
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-500/20 hidden xl:block"></div>

      <div className="relative w-full max-w-3xl text-center z-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#E6C2FF]">
          Registration Opening Soon
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm md:text-base text-gray-200 max-w-xl mx-auto leading-relaxed">
          {data.note}
        </p>

        {/* Glowing Card */}
        <div
          className="
            relative mt-10 rounded-2xl border-3 border-[#9d4edd]/60
            bg-[#24123b]/60 p-8 md:p-10
            shadow-[0_0_25px_#9d4edd55,0_0_60px_#9d4edd33]
          "
        >
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#9d4edd]/10 to-transparent pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="space-y-4 text-left">
              <div className="flex justify-between text-sm md:text-base">
                <span className="font-medium text-[#E6C2FF]">Format:</span>
                <span className="text-gray-200">{hero.mode}</span>
              </div>

              <div className="flex justify-between text-sm md:text-base">
                <span className="font-medium text-[#E6C2FF]">Duration:</span>
                <span className="text-gray-200">{hero.duration}</span>
              </div>

              <div className="flex justify-between text-sm md:text-base">
                <span className="font-medium text-[#E6C2FF]">Cost:</span>
                <span className="text-gray-200">Free</span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-[#9d4edd]/40" />

            {/* CTA */}
            <div className="flex justify-center">
              <a
                href={hero.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="
                    font-normal text-white text-lg
                    px-12 py-3 rounded-xl
                    bg-linear-to-b from-[#C369FF] to-[#320B4B]
                    shadow-[0_0_25px_rgba(195,105,255,0.55)]
                    border border-transparent
                    transition-all duration-300 ease-in-out
                    hover:bg-[#2a0f45]
                    hover:border-[#C369FF]
                    hover:shadow-none
                  "
                >
                  {hero.ctaText}
                </button>
              </a>
            </div>

            {/* Footer note */}
            <p className="mt-6 text-xs text-gray-300">
              {data.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
