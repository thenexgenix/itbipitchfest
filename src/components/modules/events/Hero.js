import React from "react";
import { Calendar, MapPin } from "lucide-react";

export default function Hero({ data }) {
  if (!data) return null;

  const {
    title,
    subtitle,
    date,        // ISO or date string from admin
    mode,
    duration,
    ctaLink,
  } = data;

  return (
    <div className="relative w-full h-screen min-h-150 flex items-center justify-center overflow-hidden">
      
      {/* Background Video (STATIC) */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src="/assets/home.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-purple-900/60 to-[#38174E] mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl mb-6 drop-shadow-lg font-bold text-[#E6C2FF]">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-normal text-[#E6C2FF]">
          {subtitle}
        </p>

        {/* Info Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mb-10 text-sm md:text-base text-gray-200 font-normal">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#0A84FF]" />
            <span>
              {new Date(date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#7412B5]" />
            <span>{mode}</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-8">

          {/* REGISTER BUTTON */}
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="
                font-normal
                text-white text-lg
                px-12 py-3
                rounded-xl
                bg-gradient-to-b from-[#C369FF] to-[#320B4B]
                shadow-[0_0_25px_rgba(195,105,255,0.55)]
                border border-transparent
                transition-all duration-300 ease-in-out
                hover:bg-[#2a0f45]
                hover:border-[#C369FF]
                hover:shadow-none
              "
            >
              Register Now
            </button>
          </a>

          {/* Duration */}
          <div className="border border-[#C369FF] rounded-full px-10 py-2 text-[#C369FF] font-normal text-xl tracking-wide bg-transparent">
            Duration: {duration}
          </div>

        </div>
      </div>
    </div>
  );
}
