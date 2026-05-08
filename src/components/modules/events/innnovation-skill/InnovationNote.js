import React from "react";
import { FiInfo, FiCheckCircle } from "react-icons/fi";

export default function InnovationNote() {
  return (
    <section className="w-full bg-[#32094C] py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Card */}
        <div
          className="
            rounded-2xl
            border border-purple-400/40
            bg-[#3A0F5C]
            px-8 sm:px-12 py-10
          "
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <FiInfo className="text-[#CFA8FF] text-xl" />
            <h3 className="text-[#CFA8FF] text-lg md:text-xl font-semibold">
              Important Notes
            </h3>
          </div>

          {/* Notes */}
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-white text-sm md:text-base">
              <FiCheckCircle className="text-green-400 text-lg shrink-0" />
              <span>Formal dress code must be maintained</span>
            </li>

            <li className="flex items-center gap-3 text-white text-sm md:text-base">
              <FiCheckCircle className="text-green-400 text-lg shrink-0" />
              <span>Registration Fee: BDT 1,050</span>
            </li>

            <li className="flex items-center gap-3 text-white text-sm md:text-base">
              <FiCheckCircle className="text-green-400 text-lg shrink-0" />
              <span>Session Location: Cyber Security Lab, ITBI, CUET</span>
            </li>

            <li className="flex items-center gap-3 text-white text-sm md:text-base">
              <FiCheckCircle className="text-green-400 text-lg shrink-0" />
              <span>Join us at 09:30 AM</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
