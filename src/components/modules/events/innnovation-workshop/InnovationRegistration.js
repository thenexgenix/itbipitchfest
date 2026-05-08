import Link from "next/link";
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
        <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
          Join us for an enriching day of tech education, hands-on workshops,
          and professional networking
        </p>

        {/* Card */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#9d4edd]/60 bg-[#24123b]/60 px-8 py-8 shadow-[0_0_35px_rgba(157,78,221,0.45)]">

          {/* Info rows */}
          <div className="divide-y divide-[#9d4edd]/20">

            {/* Format */}
            <div className="flex items-center justify-between py-4 text-sm md:text-base">
              <span className="text-[#C369FF] font-medium">Format</span>
              <span className="text-gray-200">Auditorium, ITBI, CUET</span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between py-4 text-sm md:text-base">
              <span className="text-[#C369FF] font-medium">Duration</span>
              <span className="text-gray-200">9:30 AM – 5:00 PM</span>
            </div>

            {/* Date */}
            <div className="flex items-center justify-between py-4 text-sm md:text-base">
              <span className="text-[#C369FF] font-medium">Date</span>
              <span className="text-gray-200">May 15th, 2026</span>
            </div>

            {/* Registration Fee */}
            <div className="py-4 text-sm md:text-base">
              <div className="flex items-start justify-between mb-3">
                <span className="text-[#C369FF] font-medium">Registration Fee</span>
                <span className="text-xs text-gray-500">per person · paid individually</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center gap-1.5 rounded-xl border border-[#9d4edd]/50 bg-[#9d4edd]/10 px-4 py-3">
                  <span className="text-xs text-[#C369FF] font-medium">CUET Students</span>
                  <span className="text-2xl font-bold text-white">BDT 400</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-xs text-gray-400 font-medium">Other Universities</span>
                  <span className="text-2xl font-bold text-white">BDT 650</span>
                </div>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-[#9d4edd]/30" />

          {/* Button */}
          <div className="flex justify-center">
            <Link href="/registration">
              <button className="text-white text-base font-semibold px-12 py-3 rounded-xl bg-linear-to-b from-[#C369FF] to-[#320B4B] shadow-[0_0_25px_rgba(195,105,255,0.55)] transition-all duration-300 hover:shadow-none">
                Register Now
              </button>
            </Link>
          </div>

          {/* Footer note */}
          <p className="mt-5 text-xs text-gray-400">
            Limited spots available. Register early to confirm your participation.
          </p>

        </div>
      </div>
    </section>
  );
}