import React from "react";
import { FiSmartphone, FiCloud, FiClock, FiUsers } from "react-icons/fi";
import { SiPython } from "react-icons/si";

export default function InnovationWhatYouWillGain() {
  const row1 = [
    {
      icon: <FiSmartphone />,
      title: "Mobile App Development",
      desc: "Gain comprehensive knowledge of in-demand digital skills and technologies",
    },
    {
      icon: <SiPython />,
      title: "Python & Django",
      desc: "Learn backend development with Python Django framework essentials",
    },
    {
      icon: <FiCloud />,
      title: "Server Deployment Skills",
      desc: "Understand deployment strategies and techniques for production environments",
    },
  ];

  const row2 = [
    {
      icon: <FiClock />,
      title: "Time Management",
      desc: "Master productivity strategies to effectively manage your time and tasks",
    },
    {
      icon: <FiUsers />,
      title: "Networking",
      desc: "Connect with peers, mentors, and industry professionals",
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
            What You’ll Gain
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Expected outcomes from attending this webinar
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
