'use client';

import { useState } from 'react';
import GuidelineContent from '@/components/modules/guideline/GuidelineContent';
import { useRouter } from 'next/navigation';

export default function GuidelinePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('pitch-guideline');

  const handleApplyNow = () => {
    router.push('/registration');
  };

  const tabs = [
    {
      id: 'pitch-guideline',
      label: 'Pitch Guideline',
      color: 'from-green-400 to-green-500',
    },
    {
      id: 'pitch-template',
      label: 'Pitch Template',
      color: 'from-green-400 to-green-500',
    },
    {
      id: 'sample-pitch-video',
      label: 'Sample Pitch Video',
      color: 'from-green-400 to-green-500',
    },
  ];

  return (
    <main className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#38174E] to-[#2d0f3d] py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8">
            <div className="w-full lg:w-auto text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Pitch Guideline
              </h1>
            </div>
            <div className="w-full lg:w-auto flex justify-center lg:justify-end">
              <button
                onClick={handleApplyNow}
                className="cursor-pointer bg-green-500 hover:bg-green-600 transition-colors duration-300 text-white font-bold py-3 px-8 rounded-lg text-lg whitespace-nowrap"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                        : 'bg-white text-gray-700 hover:bg-gray-100 border-l-4 border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <GuidelineContent activeTab={activeTab} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
