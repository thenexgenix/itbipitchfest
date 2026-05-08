import React from 'react';

export default function PitchGuidelineContent() {
    return (
        <div className="space-y-8">
            {/* Important Note */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-gray-800 text-base font-semibold">
                    Note: You need to submit both Pitch Deck and Video Pitch for a complete submission.
                </p>
            </div>

            {/* Part 1: Pitch Deck Guidelines */}
            <div>
                <h2 className="text-2xl font-bold text-[#38174E] mb-4">Part 1: Pitch Deck Guidelines</h2>
                <p className="text-gray-700 mb-6">
                    Please follow the guidelines below to prepare your pitch deck in PDF
                </p>

                <div className="space-y-6">
                    {/* Introduction – Company */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#38174E] mb-2">Introduction – Company</h3>
                        <ul className="space-y-2 ml-4 text-gray-700">
                            <li>• Company Name & logo. Tag line, if available.</li>
                        </ul>
                    </div>

                    {/* Problem & Solution Scenario */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#38174E] mb-2">Problem & Solution Scenario</h3>
                        <ul className="space-y-2 ml-4 text-gray-700">
                            <li>• Problems present in current market scenario.</li>
                            <li>• Focus on the solution your startup will be providing to address the problem.</li>
                        </ul>
                    </div>

                    {/* Market Size/ Possibilities */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#38174E] mb-2">Market Size / Possibilities</h3>
                        <ul className="space-y-2 ml-4 text-gray-700">
                            <li>• Please explain possibilities of the total market size, target market and quantity of market share.</li>
                        </ul>
                    </div>

                    {/* Competitive Advantage/ Unique features */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#38174E] mb-2">Competitive Advantage / Unique Features</h3>
                        <ul className="space-y-2 ml-4 text-gray-700">
                            <li>• Explore the competitions in the market & current status quo.</li>
                            <li>• Explain the competitive advantages your startup has over the competitors.</li>
                        </ul>
                    </div>

                    {/* What is your need? */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#38174E] mb-2">What is Your Need?</h3>
                        <ul className="space-y-2 ml-4 text-gray-700">
                            <li>• Funding? Mentoring? Operations supports etc.</li>
                        </ul>
                    </div>

                    {/* Technology Strategy */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#38174E] mb-2">Technology Strategy</h3>
                        <ul className="space-y-2 ml-4 text-gray-700">
                            <li>• Explain in short the technology architecture</li>
                        </ul>
                    </div>

                    {/* Business Strategy */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#38174E] mb-2">Business Strategy</h3>
                        <ul className="space-y-2 ml-4 text-gray-700">
                            <li>• Explain in short your business plan</li>
                        </ul>
                    </div>

                    {/* Financial Strategy */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#38174E] mb-2">Financial Strategy</h3>
                        <ul className="space-y-2 ml-4 text-gray-700">
                            <li>• Explain how the business will make money – market share, pricing, revenue model</li>
                        </ul>
                    </div>

                    {/* Management Team */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#38174E] mb-2">Management Team</h3>
                        <ul className="space-y-2 ml-4 text-gray-700">
                            <li>• Detail of the management Team.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Part 2: Video Pitch Guidelines */}
            <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-[#38174E] mb-4">Part 2: Video Pitch Guidelines</h2>
                <p className="text-gray-700 mb-6">
                    A video pitch should be prepared by your team following the Pitch Deck. Follow the Video Pitch guidelines to prepare the presentation.
                </p>

                {/* General Guidelines */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#38174E] mb-3">General Guidelines</h3>
                    <ul className="space-y-2 ml-4 text-gray-700">
                        <li>• Video time should be no more than 5 minutes</li>
                        <li>• Upload video in Google Drive or Youtube</li>
                        <li>• Everyone present in the video should actively participate.</li>
                        <li>• Do not read from the slides. Speak clearly.</li>
                        <li>• Power Point, if used should be simple, clean and easy to read.</li>
                    </ul>
                </div>

                {/* Video Pitch Guidelines */}
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-[#38174E]">Video Pitch Guidelines</h3>
                    <ol className="space-y-1 ml-4 text-gray-700">
                        <li>1. Describe your Business Plan</li>
                        <li>2. Describe your Technical Architecture</li>
                        <li>3. Introduce Management team</li>
                    </ol>
                    {/* Business Plan: 3 min */}
                    <div>
                        <h4 className="font-semibold text-[#38174E] mb-3">Business Plan (3 min)</h4>

                        <div className="ml-4 space-y-4">
                            <div>
                                <p className="font-semibold text-gray-800 mb-2">What is the business problem that you are trying to solve?</p>
                                <ul className="space-y-1 ml-4 text-gray-700">
                                    <li>• State the business problem.</li>
                                    <li>• State the solution/product.</li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800 mb-2">Who you are selling the product or service to?</p>
                                <ul className="space-y-1 ml-4 text-gray-700">
                                    <li>• State the target market.</li>
                                    <li>• What is the market size? What is the share of your company? Which industry?</li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800 mb-2">What is your business model?</p>
                                <ul className="space-y-1 ml-4 text-gray-700">
                                    <li>• How do you expect to make money? Is there other value your company provides?</li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800 mb-2">What is your timeline?</p>
                                <ul className="space-y-1 ml-4 text-gray-700">
                                    <li>• What is current status of your company?</li>
                                    <li>• Milestones the company has achieved, existing customers, partners, other funding received to date, etc.</li>
                                    
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800 mb-2">What is the future plan of the company?</p>
                                <ul className="space-y-1 ml-4 text-gray-700">
                                    <li>• Near term needs for technical expertise/other resources.</li>
                                    <li>• Plan to address these needs.</li>
                                </ul>
                            </div>
                                    

                            <div>
                                <p className="font-semibold text-gray-800 mb-2">Who is your competition?</p>
                                <ul className="space-y-1 ml-4 text-gray-700">
                                    <li>• Who are your direct competitors?</li>
                                    <li>• If you have no direct competitors, then how would you convince customers that they really need your product given that they have never needed it before.</li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800 mb-2">What is your competitive advantage?</p>
                                <ul className="space-y-1 ml-4 text-gray-700">
                                    <li>• How is your company different? What is your advantage over the competition? Better distribution channel? Key partners? Proprietary technology?</li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800 mb-2">What are you looking for?</p>
                                <ul className="space-y-1 ml-4 text-gray-700">
                                    <li>• Funding? Mentoring? Advisory panel? Cost for building a prototype?</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Technical Architecture: 1 min */}
                    <div>
                        <h4 className="font-semibold text-[#38174E] mb-2">Technical Architecture (1 min)</h4>
                        <ul className="space-y-1 ml-4 text-gray-700">
                            <li>• Product architecture overview? Key technologies & platforms?</li>
                        </ul>
                    </div>

                    {/* Management Team: 1 min */}
                    <div>
                        <h4 className="font-semibold text-[#38174E] mb-2">Management Team (1 min)</h4>
                        <ul className="space-y-1 ml-4 text-gray-700">
                            <li>• Tell us about your management team and briefly note about your team's background and achievements.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
