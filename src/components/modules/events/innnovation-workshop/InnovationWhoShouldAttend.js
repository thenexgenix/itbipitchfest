import React from "react";
import { PiLightbulb, PiRocket, PiStar, PiStudent } from "react-icons/pi";

export default function InnovationWhoShouldAttend() {
  const row1 = [
    {
      icon: <PiStudent className="text-white text-3xl shrink-0 mt-1" />,
      title: "University Students",
      desc: "Students currently pursuing any university degrees",
    },
    {
      icon: <PiLightbulb className="text-white text-3xl shrink-0 mt-1" />,
      title: "Tech Enthusiasts",
      desc: "Students passionate about digital skills, AI, web & software development",
    },
  ];

  const row2 = [
    {
      icon: <PiStar className="text-white text-3xl shrink-0 mt-1" />,
      title: "Aspiring Student Entrepreneurs",
      desc: "Students with ideas ready to develop their startup concepts",
    },
    {
      icon: <PiRocket className="text-white text-3xl shrink-0 mt-1" />,
      title: "Teams with Startup Ideas",
      desc: "Teams ready to pitch and validate their innovative business concepts",
    },
  ];

  const Card = ({ item }) => (
    <div
      className="
        flex items-start gap-4
        rounded-2xl
        border border-[#9d4edd]/50
        bg-[#24123b]/60
        p-6
      "
    >
      <div className="text-3xl shrink-0 mt-1">{item.icon}</div>

      <div className="text-left">
        <h3 className="text-lg font-semibold text-white mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#32094C] py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#E6C2FF] mb-3">
            Who Should Attend?
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            This webinar is perfect for anyone looking to build a career in technology
          </p>
        </div>

        {/* Row 1 – 3 cards */}
        <div className="flex flex-col md:flex-row justify-center mb-6 gap-6">
          {row1.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-full">
              <Card item={item} />
            </div>
          ))}
        </div>

        {/* Row 2 – centered 2 cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {row2.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-full">
              <Card item={item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
