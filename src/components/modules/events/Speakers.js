import React from "react";

export default function Speakers({ data }) {
  if (!data) return null;

  const { speakers = [], host } = data;

  return (
    <section id="speakers" className="bg-[#38174E] py-20 relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/20 hidden xl:block"></div>
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-500/20 hidden xl:block"></div>

      <div className="container mx-auto px-2 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6C2FF]">
            Our Speakers
          </h2>
          <p className="text-white text-sm md:text-base">
            Learn from interns who are making their mark in technology
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border-3 border-[#9d4edd]/50 bg-[#24123b]/50 p-6 transition-all hover:bg-[#2a1545]"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">

                {/* Avatar */}
                <div className="shrink-0 mx-auto sm:mx-0">
                  <div className="w-32 h-32 rounded-full p-1 bg-white">
                    <img
                      src={speaker.img}
                      alt={speaker.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    {speaker.name}
                  </h3>

                  <div className="inline-block rounded-full border-2 border-[#9d4edd] px-3 py-1 bg-[#38174E]">
                    <p className="text-[10px] md:text-xs text-[#E6C2FF] font-medium tracking-wide">
                      {speaker.role}
                    </p>
                  </div>

                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light">
                    {speaker.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hosted By */}
        {host && (
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[#8a2be2] font-semibold text-xl mb-6">
              Hosted by
            </h3>

            <div className="w-full max-w-md rounded-2xl border-3 border-[#9d4edd]/50 bg-[#24123b]/50 p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-28 h-28 rounded-full p-1 bg-white">
                  <img
                    src={host.img}
                    alt={host.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {host.name}
                </h3>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
