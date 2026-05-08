"use client";

import EventForm from "@/components/modules/events/registration/EventForm";
import Link from "next/link";

// Mock innovation workshop event data
const INNOVATION_WORKSHOP_EVENT = {
  id: 1,
  title: "Industry-Oriented Skills & Innovation Workshop 2026",
  description:
    "Join us for an exciting innovation workshop where you'll develop industry-relevant skills, collaborate with peers, and showcase your innovative ideas. Connect with industry experts and compete for amazing prizes!",
  date: "April 15 - April 17, 2026",
  location: "CUET Campus, Chittagong",
  duration: "3 Days",
};

export default function InnovationWorkshopRegistrationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Event Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
          <Link
            href="/program/events/innovation-workshop"
            className="text-purple-600 hover:text-purple-700 text-sm font-medium mb-4 inline-block"
          >
            ← Back to Event
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {INNOVATION_WORKSHOP_EVENT.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {INNOVATION_WORKSHOP_EVENT.description}
          </p>
          <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-lg">📅</span>
              <span>{INNOVATION_WORKSHOP_EVENT.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📍</span>
              <span>{INNOVATION_WORKSHOP_EVENT.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">⏱️</span>
              <span>{INNOVATION_WORKSHOP_EVENT.duration}</span>
            </div>
          </div>
        </div>

        {/* Registration Form Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900">Register Your Team</h2>
            <p className="text-gray-600 mt-2">
              Fill out the form below to register your team for the Innovation Workshop.
            </p>
          </div>

          <div className="p-6 md:p-8">
            <EventForm eventId={1} />
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-3">Need Help?</h3>
          <p className="text-blue-800 text-sm">
            If you have any questions about the registration process or the Innovation Workshop,
            please contact us at{" "}
            <a href="mailto:contact@aspire-internship.com" className="font-medium underline">
              contact@aspire-internship.com
            </a>
            {" "}or call{" "}
            <a href="tel:+8801234567890" className="font-medium underline">
              +880 1234 567890
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
