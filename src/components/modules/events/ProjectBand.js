import React from "react";

export default function ProjectBand() {
  const logos = [
    "/logos/9.png",
    "/logos/28.png",
    "/logos/14.png",
    "/logos/31.webp",
  ];

  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="relative w-full">
        <div className="flex items-center gap-16 w-max animate-marquee">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0"
            >
              <img
                src={logo}
                alt="Project Logo"
                className="h-16 md:h-20 object-contain opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
