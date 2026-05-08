import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function PitchGuideline() {
  const guidelineItems = [
    {
      title: 'Introduction – Company',
      points: ['Company Name & logo. Tag line, if available.'],
    },
    {
      title: 'Problem & Solution Scenario',
      points: [
        'Problems present in current market scenario.',
        'Focus on the solution your startup will be providing to address the problem.',
      ],
    },
    {
      title: 'Market Size/ Possibilities',
      points: [
        'Please explain possibilities of the total market size, target market and quantity of market share.',
      ],
    },
    {
      title: 'Business Model',
      points: [
        'How will your startup generate revenue?',
        'What are the pricing strategies?',
      ],
    },
    {
      title: 'Competitive Advantage',
      points: [
        'What makes your solution unique?',
        'How will you differentiate from competitors?',
      ],
    },
    {
      title: 'Financial Projections',
      points: [
        'Share your revenue projections for the next 3-5 years.',
        'Include break-even analysis.',
      ],
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Section Title */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#38174E] mb-4">
            Part 1: Pitch Deck Guidelines
          </h2>
          <p className="text-gray-700 text-lg">
            Please follow the guidelines below to prepare your pitch deck in MS PowerPoint (template attached)
          </p>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {guidelineItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#f8f4ff] to-[#f0e8ff] border border-[#e8deff] rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Item Title */}
              <div className="flex items-start gap-3 mb-4">
                <ChevronRight className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <h3 className="text-xl lg:text-2xl font-semibold text-[#38174E]">
                  {item.title}
                </h3>
              </div>

              {/* Points */}
              <ul className="space-y-3 ml-9">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-gray-700 text-base lg:text-lg leading-relaxed">
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
