import Image from "next/image";
import Link from "next/link";
import { Calendar, Video } from "lucide-react";

export function EventCard({ event }) {
  const eventUrl =
    event.detailsPath ?? `/program/events/${event.id}/details`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Banner */}
      <div className="relative h-52">
        <Image
          src={event.bannerImage}
          alt={event.title}
          fill
          className="object-cover"
        />

        {/* Status badge */}
        <span
          className={`
            absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full
            ${
              event.status === "upcoming"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }
          `}
        >
          {event.status === "upcoming" ? "Upcoming" : "Completed"}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {event.tags?.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold">{event.title}</h3>

        {/* Meta */}
        <div className="text-sm text-gray-600 space-y-1">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            {event.date}
          </div>
          <div className="flex items-center gap-2">
            <Video size={14} />
            {event.mode}
          </div>
        </div>

        {/* CTA */}
        <Link
          href={eventUrl}
          className="inline-block mt-3 bg-purple-800 text-white px-6 py-2 rounded-lg text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
