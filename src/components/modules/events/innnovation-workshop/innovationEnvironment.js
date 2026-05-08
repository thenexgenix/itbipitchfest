"use client";

import React from "react";
import Image from "next/image";

export default function InnovationEnvironment() {
  const imageSrc = "/startup/startup_env.png";

  return (
    <section className="w-full bg-[#32094C] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#E6C2FF] mb-3">
            Startup Environment
          </h2>
          <p className="text-gray-300 text-md md:text-base">
            Experience the vibrant ecosystem where ideas come to life
          </p>
        </div>

        {/* Photo Gallery Section - Single Large Image */}
        <div className="relative w-full max-w-7xl mx-auto mb-16 rounded-3xl overflow-hidden">
          <Image
            src={imageSrc}
            alt="Our Work Environment"
            width={1600}
            height={900}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
