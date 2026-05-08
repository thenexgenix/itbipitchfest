import React from "react";

/* STATIC ICON MAP (not from backend) */
const ICONS = ["💻", "🎯", "📚", "🗺️", "🎓", "🚀"];

export default function KeyDiscussionPoints({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="key-topics" className="bg-[#38174E] py-20">
      <div className="container mx-auto px-2 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#E6C2FF]">
            Key Discussion Points
          </h2>
          <p className="text-white text-sm md:text-base">
            Topics that will shape your understanding of tech careers
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {data.map((point, index) => (
            <div
              key={index}
              className="rounded-2xl border-3 border-[#9d4edd]/50 bg-[#24123b]/50 p-8 text-center"
            >
              {/* STATIC ICON */}
              <div className="text-4xl mb-6">
                {ICONS[index % ICONS.length]}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {point.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed font-light">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Live Q&A (static block stays static) */}
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-2xl border-3 border-[#9d4edd]/50 bg-[#24123b]/50 p-8 text-center">
            <div className="text-4xl mb-4 text-red-500 font-bold">?</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Live Q&A
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed font-light">
              Direct guidance and answers from interns and mentors
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
