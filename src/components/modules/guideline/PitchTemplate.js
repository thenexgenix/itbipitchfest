import React from 'react';
import { Download } from 'lucide-react';

export default function PitchTemplate() {
  const templates = [
    {
      title: 'Pitch Template',
      description: 'Download the PowerPoint template to structure your pitch deck',
      downloadLink: '#',
      icon: '📊',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Section Title */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#38174E] mb-4">
            Resources
          </h2>
        </div>

        {/* Templates Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md">
          <table className="w-full">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#38174E] text-white">
                <th className="px-6 py-4 text-left text-lg font-semibold">Title</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Download Link</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {templates.map((template, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-200 hover:bg-gray-50 transition-colors duration-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  {/* Title Cell */}
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{template.icon}</span>
                      <span className="text-gray-900 font-medium text-lg">
                        {template.title}
                      </span>
                    </div>
                  </td>

                  {/* Download Link Cell */}
                  <td className="px-6 py-6">
                    <a
                      href={template.downloadLink}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-300 hover:underline"
                    >
                      <Download size={20} />
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-blue-700">💡 Tip:</span> Use the provided template to maintain consistency and ensure you cover all required sections in your pitch deck.
          </p>
        </div>
      </div>
    </section>
  );
}
