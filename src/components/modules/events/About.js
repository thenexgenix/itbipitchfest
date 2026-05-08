import React from "react";

export default function About({ data }) {
  if (!data) return null;

  const { description = [], organizedBy } = data;

  return (
    <section id="about" className="bg-[#38174E] py-16 lg:py-24">
      {/* Container */}
      <div className="container mx-auto px-2 md:px-9 lg:px-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
          
          {/* Text Side */}
          <div className="lg:w-1/2 space-y-6">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-semibold text-[#E6C2FF] mb-4">
              About the Webinar
            </h2>

            {/* Body Text */}
            <div className="space-y-6 text-[#FFFFFF] text-lg leading-relaxed font-normal">
              {description.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            <div className="pt-4">
              <h3 className="text-[#bf94e4] font-bold text-xl mb-1">
                Organized by:
              </h3>
              <p className="text-gray-200 text-lg">
                {organizedBy}
              </p>
            </div>
          </div>

          {/* Image Side (static, unchanged) */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/assets/group.png"
              className="rounded-4xl w-full max-w-lg object-cover border border-white/10 shadow-[0_0_40px_20px_rgba(255,255,255,0.6)]"
              alt="Webinar Group"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
