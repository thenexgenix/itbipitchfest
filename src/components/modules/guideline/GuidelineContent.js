import React from 'react';
import PitchGuidelineContent from './PitchGuidelineContent';
import PitchTemplateContent from './PitchTemplateContent';
import SamplePitchVideoContent from './SamplePitchVideoContent';

export default function GuidelineContent({ activeTab }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
      {activeTab === 'pitch-guideline' && <PitchGuidelineContent />}
      {activeTab === 'pitch-template' && <PitchTemplateContent />}
      {activeTab === 'sample-pitch-video' && <SamplePitchVideoContent />}
    </div>
  );
}
