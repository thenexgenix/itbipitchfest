import React from "react";
import { FaBuilding, FaRocket, FaUser } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

export default function InnovationKeyDiscussion() {
  const points = [
    {
      icon: <FaRocket className="text-white"/>,
      title: "Startup Idea Pitch Battle",
      desc: "Present your innovative startup ideas to a panel of expert judges and get valuable feedback",
    },
    {
      icon: <FaUser className="text-white"/>,
      title: "Expert Judging & Mentoring",
      desc: "Receive constructive feedback and guidance from experienced investors and industry mentors",
    },
    {
      icon: <FaBuilding className="text-white"/>,
      title: "Incubator Tour & Founder Interaction",
      desc: "Visit thriving startups at the incubator and network with successful founders and entrepreneurs",
    },
    {
      icon: <FiTarget className="text-white"/>,
      title: "Pathway to Incubation & Industry Readiness",
      desc: "Learn the roadmap to get your startup incubated and prepared for the industry market",
    },
  ];

  return (
    <section className="w-full bg-[#32094C] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#E6C2FF] mb-3">
            Key Highlights of the Event
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Discover what makes this event special
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-10">
          {points.map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border border-[#9d4edd]/50
                bg-[#24123b]/60
                p-7
              "
            >
              <div className="text-4xl mb-5">{item.icon}</div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
