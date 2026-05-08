import React from "react";

export default function InnovationWhoShouldAttend() {
  const row1 = [
    {
      icon: "🎓",
      title: "Undergraduate & Diploma Students",
      desc: "Students currently pursuing technology-related degrees",
    },
    {
      icon: "👨‍🎓",
      title: "Fresh Graduates",
      desc: "Recent graduates interested in technology careers",
    },
    {
      icon: "💡",
      title: "Tech Enthusiasts",
      desc: "Students passionate about digital skills, AI, web & software development",
    },
  ];

  const row2 = [
    {
      icon: "⭐",
      title: "Aspiring Interns",
      desc: "Those seeking real-world industry exposure through internships",
    },
    {
      icon: "🚀",
      title: "Career Explorers",
      desc: "Beginners exploring career paths in the tech industry",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {row1.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

        {/* Row 2 – centered 2 cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
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
