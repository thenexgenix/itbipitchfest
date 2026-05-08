import React, { useState } from "react";

export default function SamplePitchVideoContent() {
  const youtubeUrls = [
    "https://youtu.be/k47WifoCHkM?si=x1piQGFF8CKBDv0y",
    "https://youtu.be/EjJjKxsRDlU?si=vhQ9eNNOhQeSGyAC",
  ];

  // Extract video ID
  const getId = (url) => {
    if (url.includes("youtu.be/")) {
      return url.split("youtu.be/")[1].split("?")[0];
    }
    return url.split("v=")[1]?.split("&")[0];
  };

  // Initialize videos with play state
  const [videos, setVideos] = useState(
    youtubeUrls.map((url) => ({
      id: getId(url),
      play: false,
    }))
  );

  const getThumbnail = (id) =>
    `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  const handlePlay = (index) => {
    const updated = [...videos];
    updated[index].play = true;
    setVideos(updated);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <div className="relative w-full aspect-video bg-black">
              {!video.play ? (
                <div
                  onClick={() => handlePlay(index)}
                  className="cursor-pointer relative w-full h-full group"
                >
                  {/* Thumbnail */}
                  <img
                    src={getThumbnail(video.id)}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-600 hover:bg-red-700 transition rounded-full p-4 group-hover:scale-110">
                      <svg
                        className="w-8 h-8 text-white fill-white"
                        viewBox="0 0 24 24"
                      >
                        <polygon points="5 3 19 12 5 21" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}