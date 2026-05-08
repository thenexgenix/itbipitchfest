import React from "react";
import {
  FiMic,
  FiSmartphone,
  FiCoffee,
  FiServer,
  FiClock,
  FiAward,
} from "react-icons/fi";

const agenda = [
  { side: "left", time: "09:30 AM", title: "Intro Session & Snack", icon: <FiMic /> },
  { side: "right", time: "10:00 AM", title: "Session on Mobile App", icon: <FiSmartphone /> },
  { side: "left", time: "01:00 PM", title: "Lunch Break", icon: <FiCoffee /> },
  { side: "right", time: "02:00 PM", title: "Python (Django) & Server Deployment", icon: <FiServer /> },
  {
    side: "left",
    time: "03:00 PM",
    title: "Soft Skill: Time Management – Strategies to Boost Productivity",
    icon: <FiClock />,
  },
  { side: "right", time: "04:00 PM", title: "Incubator Tour & Tea Session", icon: <FiCoffee /> },
  { side: "left", time: "04:30 PM", title: "Closing & Certificate Distribution", icon: <FiAward /> },
];

function AgendaCard({ item }) {
  return (
    <div
      className="
        w-full
        sm:max-w-[420px]
        md:max-w-[380px]
        rounded-xl
        border border-[#9b5cff]/40
        bg-[linear-gradient(100deg,#2a083f_0%,#4a0f73_38%,#7a2bc2_70%,#6b1fa3_100%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.12))]
        shadow-[0_0_14px_rgba(155,92,255,0.35)]
        px-6 py-5
      "
    >
      <div className="flex items-center gap-4">
        <span className="text-lg text-[#e3c8ff]">{item.icon}</span>

        <div className="text-left">
          <div className="text-[11px] tracking-wide text-[#d6baff]/90">
            {item.time}
          </div>
          <div className="mt-1 text-base font-semibold text-white">
            {item.title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InnovationAgenda() {
  return (
    <section className="relative w-full bg-[#32094C] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top pill */}
        <div className="flex justify-center mb-4">
          <div className="px-4 py-1 rounded-full bg-white/10 text-white/85 text-[11px] border border-white/10">
            Full Day Program
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-14">
          Event Agenda
        </h2>

        {/* Timeline */}
        <div className="relative">

          {/* Gradient Spine (desktop only) */}
          <div
            className="
              hidden md:block
              absolute left-1/2 -translate-x-1/2 top-0 bottom-0
              w-[6px] rounded-full
              bg-linear-to-b from-purple-300 via-purple-200 to-purple-300
              shadow-[0_0_30px_rgba(203,147,255,0.75)]
            "
          />

          {/* GRID */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-[1fr_120px_1fr]
              gap-0.5
              items-center
            "
          >
            {agenda.map((item, idx) => (
              <React.Fragment key={idx}>

                {/* Left */}
                <div className="flex justify-center md:justify-end md:pr-8">
                  {item.side === "left" ? <AgendaCard item={item} /> : null}
                </div>

                {/* Center Node */}
                <div className="relative hidden md:flex justify-center">
                  <div
                    className="
                      relative z-10
                      w-6 h-6 rounded-full bg-[#cfa8ff]
                      shadow-[0_0_18px_rgba(203,147,255,0.95)]
                    "
                  >
                    <div className="absolute inset-[5px] rounded-full bg-[#32094C]" />
                  </div>
                </div>

                {/* Right */}
                <div className="flex justify-center md:justify-start md:pl-8">
                  {item.side === "right" ? <AgendaCard item={item} /> : null}
                </div>

              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
