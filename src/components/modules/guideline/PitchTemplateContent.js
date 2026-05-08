import React from 'react';
import { Download } from 'lucide-react';

export default function PitchTemplateContent() {
  const templates = [
    {
      title: 'Pitch Template',
      description: 'Download the PowerPoint template to structure your pitch deck',
      downloadLink: 'https://idea.gov.bd/images/Knowledge-center/pitch-template/StartupPitchDeckTemplate.pptx',
    },
  ];

  return (
    <div>
      {/* <h2 className="text-3xl md:text-4xl font-bold text-[#38174E] mb-8">
        Resources
      </h2> */}
           <div className="overflow-x-auto rounded-lg border border-gray-200">
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
                className="border-t border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                {/* Title Cell */}
                <td className="px-6 py-6">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="text-gray-900 font-medium text-lg">
                        {template.title}
                      </p>
                      
                    </div>
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

      {/* Template Image */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <a
          href={templates[0].downloadLink}
          download
          className="block cursor-pointer hover:opacity-90 transition-opacity duration-300"
        >
          <img
            src="/events/pitch.png"
            alt="Pitch Template Preview"
            className="w-150 h-auto mx-auto object-cover"
          />
        </a>
      </div>

 
    </div>
  );
}
