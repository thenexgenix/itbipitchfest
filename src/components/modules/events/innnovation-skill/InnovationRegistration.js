import React from "react";

export default function InnovationRegistration() {
  return (
    <section className="relative w-full bg-[#32094C] py-28 px-4 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[720px] h-[720px] rounded-full bg-[#9d4edd]/20 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-[#E6C2FF] mb-4">
          Secure Your Spot
        </h2>

        {/* Subtitle */}
        <p className="text-gray-200 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
          Join us for an enriching day of tech education, hands-on workshops,
          and professional networking
        </p>

        {/* Card */}
        <div
          className="
            mx-auto
            max-w-3xl
            rounded-2xl
            border border-[#9d4edd]/60
            bg-[#24123b]/60
            px-10 py-10
            shadow-[0_0_35px_rgba(157,78,221,0.45)]
          "
        >
          {/* Info rows */}
          <div className="space-y-5 text-sm md:text-base text-left">

            <div className="flex justify-between">
              <span className="text-[#E6C2FF] font-medium">Format:</span>
              <span className="text-gray-200">
                Cyber Security Lab, ITBI, CUET
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#E6C2FF] font-medium">Duration:</span>
              <span className="text-gray-200">
                9:30 AM to 5:00 PM
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#E6C2FF] font-medium">Cost:</span>
              <span className="text-gray-200">
                BDT 1050
              </span>
            </div>

          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-[#9d4edd]/40" />

          {/* Button */}
          <div className="flex justify-center">
            <a
              href="https://forms.gle/VPH7Mp5MuLUvdj5a8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="
                  text-white text-base
                  px-12 py-3
                  rounded-xl
                  bg-linear-to-b from-[#C369FF] to-[#320B4B]
                  shadow-[0_0_25px_rgba(195,105,255,0.55)]
                  transition-all duration-300
                  hover:shadow-none
                "
              >
                Register Now
              </button>
            </a>
          </div>

          {/* Footer note */}
          <p className="mt-6 text-xs text-gray-300">
            Limited spots available. Register early to confirm your participation.
          </p>
        </div>

      </div>
    </section>
  );
}
