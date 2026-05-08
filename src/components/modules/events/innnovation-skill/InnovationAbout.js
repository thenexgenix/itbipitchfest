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
          About The Workshop
        </h2>

        {/* Description */}
        <p className="text-white text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
          The Industry-Oriented Skills & Innovation Workshop is a structured 1-day
          industry exposure program designed to deliver practical learning.
          Participants then engage in an in-depth technical session focused on
          Mobile App Development. After the lunch break, the program continues
          with backend development using Python (Django) and server deployment
          concepts. A dedicated soft skills session focuses on time management
          and productivity for professional growth. The incubator tour provides
          exposure to startup culture, innovation labs, and industry ecosystems.
          The program concludes with a formal closing session and certificate
          distribution.
        </p>

      </div>
    </section>
  );
}
