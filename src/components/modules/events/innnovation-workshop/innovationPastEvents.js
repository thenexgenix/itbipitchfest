import React from "react";

export default function InnovationPastEvent() {
  const gallery = [
    {
      id: 1,
      src: "/events/event-4.png",
      alt: "Engaged Audience",
      className:
        "col-span-1 sm:col-span-2 md:col-span-2 row-span-1 md:row-span-2",
    },
    {
      id: 2,
      src: "/events/event-2.png",
      alt: "Distinguished Guests",
      className: "col-span-1 sm:col-span-2 md:col-span-2 row-span-1",
    },
    {
      id: 3,
      src: "/events/event-3.png",
      alt: "Interactive Session",
      className: "col-span-1 row-span-1",
    },
    {
      id: 4,
      src: "/events/event-6.png",
      alt: "Startup Pitch Presentation",
      className: "col-span-1 row-span-1",
    },
    {
      id: 5,
      src: "/events/event-7.png",
      alt: "Mentorship & Networking",
      className:
        "col-span-1 sm:col-span-2 md:col-span-1 row-span-1 md:row-span-2",
    },
    {
      id: 6,
      src: "/events/event-1.png",
      alt: "Commemorative Group Photo",
      className:
        "col-span-1 sm:col-span-2 md:col-span-2 row-span-1 md:row-span-2",
    },
    {
      id: 7,
      src: "/events/event-5.png",
      alt: "Inspiring Keynote Address",
      className:
        "col-span-1 sm:col-span-2 md:col-span-1 row-span-1 md:row-span-2",
    },
  ];

  return (
    <section className="w-full bg-[#32094C] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#E6C2FF] mb-4 tracking-tight">
            Past Events Gallery
          </h2>
          <div className="w-20 h-1 bg-[#9d4edd] mx-auto rounded-full mb-6 opacity-60"></div>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto font-light">
            Take a look at some of our most memorable moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[220px] gap-4 md:gap-5">
          {gallery.map((item) => (
            <div
              key={item.id}
              className={`
                group relative rounded-2xl overflow-hidden bg-[#24123b] 
                border border-[#9d4edd]/20 shadow-lg 
                hover:border-[#CFA8FF]/60 hover:shadow-[0_8px_30px_rgba(157,78,221,0.2)]
                transition-all duration-500
                ${item.className}
              `}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover bg-[#4A1B6F] group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0529]/90 via-[#1a0529]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8 z-10">
                <span className="text-[#E6C2FF] font-semibold text-lg md:text-xl tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
