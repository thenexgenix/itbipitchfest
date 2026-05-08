import React from "react";
import { PiFile, PiLightbulb, PiListChecks, PiMicrophone } from "react-icons/pi";

export default function InnovationWhatYouWillGain() {
   const row1 = [
    {
      icon: <PiListChecks className="text-white text-4xl" />,
      title: "Team Registration",
      desc: "Form a team of 3-5 members and complete the online team registration.",
    },
    {
      icon: <PiLightbulb className="text-white text-4xl" />,
      title: "Idea Submission",
      desc: "Submit a brief description of your innovative startup idea & Team",
    },
     {
      icon: <PiFile className="text-white text-4xl" />,
      title: "Pitch Deck",
      desc: "Upload your idea slide deck (maximum 8-10 slides) in PDF format.",
    }
  ];

  const row2 = [
    {
      icon: <PiMicrophone className="text-white text-4xl" />,
      title: "Live Pitch at Venue",
      desc: "Teams will present live in front of judges at ITBI, CUET (5 minutes pitch + 3 minutes Q&A).",
    },
  ];

  const Card = ({ item }) => (
    <div
      className="
        flex flex-col items-center text-center
        rounded-2xl
        border border-[#9d4edd]/50
        bg-[#24123b]/60
        p-8
      "
    >
      <div className="text-4xl text-[#E6C2FF] mb-5">
        {item.icon}
      </div>

      <h3 className="text-lg font-semibold text-white mb-3">
        {item.title}
      </h3>

      <p className="text-sm text-gray-300 leading-relaxed">
        {item.desc}
      </p>
    </div>
  );

  return (
    <section className="w-full bg-[#32094C]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#E6C2FF] mb-3">
            Application Process
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            How to participate in the event
          </p>
        </div>

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {row1.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

        {/* Bottom row (centered) */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {row2.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3">
              <Card item={item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
