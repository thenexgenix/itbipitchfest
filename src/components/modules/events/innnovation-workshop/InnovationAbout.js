import React from "react";

export default function InnovationAbout() {
  return (
    <section id="about" className="bg-[#32094C] py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Image Card */}
        <div className="mb-12 flex justify-center">
          <div
            className="
              relative
              rounded-3xl
              overflow-hidden
              shadow-[0_0_60px_20px_rgba(255,255,255,0.35)]
            "
          >
            <img
              src="/assets/about2.png"
              alt="Workshop Venue"
              className="w-full max-w-[720px] object-cover"
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#E6C2FF] mb-8">
          About The Event
        </h2>

        {/* Description */}
        <p className="text-white text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
          A day-long startup pitching event organized by IT Business Incubator (ITBI), CUET in association with Pathway Venture. University students across Chittagong are invited to pitch their innovative startup ideas and compete for prestigious incubation support.
        </p>

      </div>
    </section>
  );
}
