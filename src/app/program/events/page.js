"use client";

import { useEffect, useState } from "react";
import EventsSection from "@/components/modules/event/EventsSection";

const API_URL = "https://aspire-intern-server.thenexgenix.com/api/event/";

export default function Events() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch from API
        const apiRes = await fetch(API_URL);
        const apiData = apiRes.ok ? await apiRes.json() : [];

        // Fetch from local JSON
        const jsonRes = await fetch("/data/events.json");
        const jsonData = jsonRes.ok ? await jsonRes.json() : { events: { upcoming: [], past: [] } };
        
        // Handle both formats: if events.upcoming/events.past exist, use them; otherwise treat as array
        let localUpcoming = [];
        let localPast = [];
        
        if (jsonData.events) {
          if (Array.isArray(jsonData.events)) {
            // events is an array - filter by date
            localUpcoming = jsonData.events.filter((e) => new Date(e.event_date) > new Date());
            localPast = jsonData.events.filter((e) => new Date(e.event_date) <= new Date());
          } else if (jsonData.events.upcoming && jsonData.events.past) {
            // events has upcoming/past structure
            localUpcoming = jsonData.events.upcoming || [];
            localPast = jsonData.events.past || [];
          }
        }

        // Combine API and local events
        const upcoming = [
          ...apiData
            .filter((event) => {
              const eventDate = new Date(event.event_date);
              return eventDate > new Date();
            })
            .map((event) => ({
              id: event.id,
              title: event.title,
              status: "upcoming",
              bannerImage: event.img_url || "/events/innovation-workshop-2026.png",
              date: new Date(event.event_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              mode: event.platform || "Event",
              tags: event.discussion_key_points || [],
            })),
          ...localUpcoming,
        ];

        const past = [
          ...apiData
            .filter((event) => {
              const eventDate = new Date(event.event_date);
              return eventDate <= new Date();
            })
            .map((event) => ({
              id: event.id,
              title: event.title,
              status: "completed",
              bannerImage: event.img_url || "/events/aspire-talks-2025.jpeg",
              date: new Date(event.event_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              mode: event.platform || "Event",
              tags: event.discussion_key_points || [],
            })),
          ...localPast,
        ];

        setEvents({ upcoming, past });
      } catch (err) {
        console.error("Events fetch error:", err);
        setEvents({ upcoming: [], past: [] });
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section
        className="relative px-6 pt-20 pb-30 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/upperbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-white" />

        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Our Events</h1>
          <p className="max-w-xl text-purple-100 leading-relaxed">
            Join our workshops, seminars, and networking sessions.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mt-14 mx-6 pb-8 sm:m-12 md:m-20 lg:m-24 xl:m-36">
        {!events ? (
          <div className="text-center text-gray-500">
            Loading events…
          </div>
        ) : (
          <EventsSection events={events} />
        )}
      </div>
    </div>
  );
}
