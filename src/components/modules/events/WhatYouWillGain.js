import React from 'react';

const WhatYouWillGain = () => {
  const row1 = [
    {
      icon: "✅",
      title: "Clear Understanding",
      desc: "Gain comprehensive knowledge of in-demand digital skills and technologies"
    },
    {
      icon: "💼",
      title: "Practical Insights",
      desc: "Learn about real-world internship-based learning experiences"
    },
    {
      icon: "🤝",
      title: "Human-Centric Awareness",
      desc: "Understand the importance of human-centric technology development"
    }
  ];

  const row2 = [
    {
      icon: "🎯",
      title: "Career Direction",
      desc: "Get motivated and find clear direction for tech-driven roles"
    },
    {
      icon: "🚀",
      title: "Confidence to Apply",
      desc: "Build confidence to apply for internships and skill programs"
    }
  ];

  const Card = ({ item }) => (
    <div className="group h-full flex flex-col items-center justify-center rounded-2xl border-3 border-[#9d4edd]/50 bg-[#24123b]/50 p-8 text-center transition-all">
      <div className="text-4xl mb-4">{item.icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">
        {item.title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed font-light ">
        {item.desc}
      </p>
    </div>
  );

  return (
    <section className="bg-[#38174E] py-20 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#E6C2FF]">
            What You’ll Gain
          </h2>
          <p className="text-white text-sm md:text-base">
            Expected outcomes from attending this webinar
          </p>
        </div>

        {/* Row 1: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {row1.map((item, index) => (
            <Card key={`gain-r1-${index}`} item={item} />
          ))}
        </div>

        {/* Row 2: 2 Columns Centered */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {row2.map((item, index) => (
            <div key={`gain-r2-${index}`} className="w-full md:w-1/2 lg:w-1/3">
              <Card item={item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatYouWillGain;