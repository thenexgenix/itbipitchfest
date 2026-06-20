import React from "react";

export default function InnovationSpeaker() {
  const speakers = [
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
    <section className="w-full bg-[#32094C] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#E6C2FF] mb-3">
            Meet Our Speakers
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Learn more from the industry leaders and visionaries
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="
                w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-22px)]
                flex flex-col items-center text-center
                rounded-2xl
                border border-[#9d4edd]/50
                bg-[#24123b]/60
                p-5
                hover:bg-[#3A0F5C] transition-colors duration-300
              "
            >
              <div className="mb-5">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-28 h-28 md:w-25 md:h-25 rounded-full object-cover border-2 border-[#CFA8FF]/30 shadow-lg"
                />
              </div>

              <h3 className="text-lg md:text-lg font-semibold text-white mb-2">
                {speaker.name}
              </h3>

              <div className="flex flex-col gap-1 w-full">
                {speaker.roles.map((role, roleIndex) => (
                  <p
                    key={roleIndex}
                    className="text-sm text-gray-300 leading-relaxed"
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
