import React from "react";

export default function InnovationKeyDiscussion() {
  const points = [
    {
      icon: "💻",
      title: "Session on Mobile App",
      desc: "Comprehensive workshop covering mobile application development fundamentals and best practices",
    },
    {
      icon: "🚀",
      title: "Python & Server Deployment",
      desc: "Deep dive into Python Django framework and learn practical server deployment techniques",
    },
    {
      icon: "🏢",
      title: "Startup Ecosystem Tour",
      desc: "Visit startups at the incubator and network with successful founders",
    },
    {
      icon: "⏰",
      title: "Time Management Skills",
      desc: "Proven strategies to boost productivity and manage your academic and professional life",
    },
    {
      icon: "📝",
      title: "Career Guidance",
      desc: "Professional resume building and LinkedIn optimization for tech careers",
    },
    {
      icon: "🎯",
      title: "Industry Exposure",
      desc: "Bridge the gap between academic learning and real-world tech industry applications",
    },
  ];

  return (
    <section className="w-full bg-[#32094C]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#E6C2FF] mb-3">
            Key Discussion Points
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Topics that will shape your understanding of tech careers
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
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
              <div className="text-3xl mb-5">{item.icon}</div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Center Card */}
        <div className="flex justify-center">
          <div
            className="
              w-full max-w-md
              rounded-2xl
              border border-[#9d4edd]/50
              bg-[#24123b]/60
              p-7
              text-center
            "
          >
            <div className="text-3xl mb-4">🤝</div>

            <h3 className="text-lg font-semibold text-white mb-2">
              Networking Opportunities
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed">
              Connect with industry professionals, mentors, and fellow tech enthusiasts
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
