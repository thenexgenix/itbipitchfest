import React from "react";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src="/assets/home.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />

        {/* Overlay (unchanged) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(40,7,61,0.95) 0%, rgba(50,9,76,0.85) 40%, rgba(50,9,76,0.45) 70%, rgba(50,9,76,0) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Title */}
        <h1
          className="
            text-white font-bold leading-tight drop-shadow-lg
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
          "
        >
          FROM IDEA TO INCUBATION{" "}
          <br className="hidden sm:block" />
           ITBI Student Startup Pitch Fest
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-4
            text-gray-200 leading-relaxed mx-auto
            max-w-3xl
            text-sm
            sm:text-base
            md:text-lg
          "
        >
          Get Expert Feedback | Win Free Incubation Space{" "}
          <br className="hidden sm:block" />
          Transform Your Startup Idea into Reality with ITBI & Pathway Venture
        </p>

        {/* Info Pills */}
        <div
          className="
            mt-6 sm:mt-8
            flex flex-col sm:flex-row
            justify-center items-center
            gap-3 sm:gap-4
          "
        >
          <div className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-purple-700/40 backdrop-blur-sm text-xs sm:text-sm text-white">
            <Calendar className="w-4 h-4 text-purple-300" />
            <span>Friday, 15th May 2026</span>
          </div>

          <div className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-purple-700/40 backdrop-blur-sm text-xs sm:text-sm text-white">
            <MapPin className="w-4 h-4 text-purple-300" />
            <span>Auditorium, ITBI, CUET</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center gap-4">

          <Link
            href="/registration"
          >
            <button
              className="
                text-white
                text-sm sm:text-base
                px-8 sm:px-10
                py-2.5 sm:py-3
                rounded-xl
                bg-linear-to-b from-[#C369FF] to-[#320B4B]
                shadow-[0_0_20px_rgba(195,105,255,0.5)]
                transition-all duration-300
                hover:shadow-none
              "
            >
              Register Now
            </button>
          </Link>

          {/* Duration */}
          <div className="px-5 sm:px-6 py-1.5 rounded-full border border-purple-300 text-purple-200 text-xs sm:text-sm bg-purple-900/30">
            Duration: 9:30 AM to 5:00 PM
          </div>

        </div>
      </div>
    </div>
  );
}
