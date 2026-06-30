import React from "react";

export default function InnovationSpeaker() {
  const speakers = [
    {
      name: "Dr. Mahmud Abdul Matin Bhuiyan",
      roles: [
        "Vice Chancellor, Chittagong University of Engineering and Technology",
      ],
      image: "/guests/guest8.1.png",
    },
    {
      name: "Prof. Dr. Sharif Uddin Ahmed Rana",
      roles: [
        "President, World Talent Economy",
        "CEO, Innovation Lab, USA",
        "Professor, Paris Graduate School, France",
        "Director, Solar Skyways | Mentor, MIT React",
      ],
      image: "/guests/guest1.png",
    },
    {
      name: "Prof. Dr. M. Moshiul Hoque",
      roles: [
        "Director, IT Business Incubator, CUET",
        "Chair, IEEE Bangladesh Section",
        "Director (IICT), CUET",
      ],
      image: "/guests/guest2.png",
    },
    {
      name: "Prof. Dr. Homayun Kabir",
      roles: ["Mechatronics & Industrial Engineering (MIE), CUET"],
      image: "/guests/guest3.png",
    },
    {
      name: "Ekhlas Uddin Ahmed",
      roles: ["CTO & CMO, Bangladesh Research & Education Network (BdREN)"],
      image: "/guests/guest7.1.png",
    },
    {
      name: "Prof. Dr. Md. Monjur Ul Hasan",
      roles: [
        "Associate Professor (CSE), CUET",
        "Associate Director (IICT), CUET",
      ],
      image: "/guests/guest4.png",
    },
    {
      name: "Mohammed Arifur Rahman",
      roles: [
        "Director & Head of Business Development, Intelliva",
        "National Program Coordinator, Accelerating Bangladesh",
      ],
      image: "/guests/guest5.png",
    },
  ];

  return (
    <section className="w-full bg-[#32094C] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Meet Our <span className="text-[#E6C2FF]">Speakers</span>
          </h2>
          <div className="w-24 h-1 bg-[#9d4edd] mx-auto rounded-full mb-6 opacity-60"></div>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto font-light">
            Learn more from the industry leaders and visionaries shaping the
            future of technology and innovation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-12 md:gap-y-14">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[260px]"
            >
              <div className="relative mb-5 mx-auto w-28 h-28 md:w-32 md:h-32">
                <div className="absolute inset-0 bg-[#CFA8FF] rounded-full blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>

                <div className="relative w-full h-full rounded-full bg-white p-1 md:p-1.5 shadow-[0_8px_25px_rgba(0,0,0,0.4)] group-hover:-translate-y-2 transition-transform duration-500 ease-out z-10">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
              </div>

              <h3 className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-[#E6C2FF] transition-colors duration-300">
                {speaker.name}
              </h3>

              <div className="flex flex-col gap-1 w-full">
                {speaker.roles.map((role, roleIndex) => (
                  <p
                    key={roleIndex}
                    className="text-[12px] md:text-[13px] text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                  >
                    {role}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
