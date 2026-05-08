import React from "react";

export default function SpecialGuest({ data }) {
  if (!data) return null;

  const { name, roles = [], description, image } = data;

  return (
    <section className="bg-[#38174E] py-16">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold text-[#E6C2FF] mb-12">
          Special Appearance
        </h2>

        {/* Card Container */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-4xl border-3 border-[#bf94e4] p-12 text-center bg-[#38174E]">

            {/* Avatar */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/90 shadow-lg">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name */}
            <h3 className="text-3xl font-semibold text-white mb-4">
              {name}
            </h3>

            {/* Roles */}
            <div className="text-[#bf94e4] font-medium text-lg space-y-1 mb-8">
              {roles.map((role, index) => (
                <p key={index}>{role}</p>
              ))}
            </div>

            {/* Description */}
            <p className="text-white text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light opacity-90">
              {description}
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
