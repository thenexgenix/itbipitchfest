import React from 'react';
import { PlayCircle } from 'lucide-react';

export default function SamplePitchVideo() {
  const videos = [
    {
      title: 'Pitching Guide - iDEA',
      channel: 'iDEA Project',
      videoId: 'dQw4w9WgXcQ', // Replace with actual video ID
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    },
    {
      title: 'TechStars Demo Day — Tred',
      channel: 'GeekWire',
      videoId: 'dQw4w9WgXcQ', // Replace with actual video ID
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Section Title */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#38174E] mb-4">
            Sample Pitch Video
          </h2>
          <p className="text-gray-700 text-lg">
            Watch these sample pitch videos to understand how to effectively present your startup
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {videos.map((video, index) => (
            <div key={index} className="group">
              {/* Video Container */}
              <div className="relative bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Placeholder with play button */}
                <div className="relative w-full aspect-video bg-gray-900 flex items-center justify-center overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <PlayCircle
                      size={80}
                      className="text-white opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      fill="currentColor"
                    />
                  </div>

                  {/* Link to YouTube */}
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                    aria-label={`Watch ${video.title}`}
                  />
                </div>

                {/* Video Info */}
                <div className="p-6 bg-gray-900">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-base">{video.channel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Guidelines */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-[#38174E] mb-6">Part 2: Video Pitch Guidelines</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 text-lg mb-3">Duration</h4>
              <p className="text-gray-700">Keep your video pitch between 2-3 minutes</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 text-lg mb-3">Quality</h4>
              <p className="text-gray-700">Ensure clear audio and good video resolution (minimum 1080p)</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 text-lg mb-3">Content</h4>
              <p className="text-gray-700">Follow the same structure as your pitch deck</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 text-lg mb-3">Submission</h4>
              <p className="text-gray-700">Submit as YouTube link or other video platform link</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
