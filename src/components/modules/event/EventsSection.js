"use client";

import { EventCard } from "./EventCard";

export default function EventsSection({ events }) {
  if (!events) return null;

  const { upcoming = [], past = [] } = events;

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        {/* FEATURED / UPCOMING — only show if exists */}
        {upcoming.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Featured Event
            </h2>

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-8
              "
            >
              {upcoming.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  featured
                />
              ))}
            </div>
          </div>
        )}

        {/* PAST EVENTS */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Past Events
          </h2>

          {past.length === 0 ? (
            <p className="text-gray-500">
              No past events available.
            </p>
          ) : (
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-8
              "
            >
              {past.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
