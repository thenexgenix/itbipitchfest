import React from 'react';

const WhoShouldAttend = () => {
  const row1 = [
    {
      icon: "🎓",
      title: "Undergraduate & Diploma Students",
      desc: "Students currently pursuing technology-related degrees"
    },
    {
      icon: "👨‍🎓",
      title: "Fresh Graduates",
      desc: "Recent graduates interested in technology careers"
    },
    {
      icon: "💡",
      title: "Tech Enthusiasts",
      desc: "Students passionate about digital skills, AI, web & software development"
    }
  ];

  const row2 = [
    {
      icon: "🌟",
      title: "Aspiring Interns",
      desc: "Those seeking real-world industry exposure through internships"
    },
    {
      icon: "🚀",
      title: "Career Explorers",
      desc: "Beginners exploring career paths in the tech industry"
    }
  ];

  const Card = ({ item }) => (
    <div className="group h-full flex items-start gap-4 rounded-2xl border-3 border-[#9d4edd]/50 bg-[#24123b]/50 p-6 transition-all ">
      <div className="text-3xl shrink-0 mt-1">{item.icon}</div>
      <div className="text-left">
        <h3 className="text-lg font-semibold text-white  mb-2">
          {item.title}
        </h3>
        <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light ">
          {item.desc}
        </p>
      </div>
    </div>
  );

  return (
    <section className="bg-[#38174E] py-20 relative">
      <div className="container mx-auto px-3 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl md:text-5xl  font-semibold text-[#E6C2FF]">
            Who Should Attend?
          </h2>
          <p className="text-white text-sm md:text-base">
            This webinar is perfect for anyone looking to build a career in technology
          </p>
        </div>

        {/* Row 1: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {row1.map((item, index) => (
            <Card key={`r1-${index}`} item={item} />
          ))}
        </div>

        {/* Row 2: 2 Columns Centered */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {row2.map((item, index) => (
            <div key={`r2-${index}`} className="w-full md:w-1/2 lg:w-1/3">
              <Card item={item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhoShouldAttend;