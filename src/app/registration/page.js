"use client";

import EventForm from "@/components/modules/events/registration/EventForm";
import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin, Clock, Mail, Phone, HelpCircle } from "lucide-react";

const INNOVATION_WORKSHOP_EVENT = {
  title: "FROM IDEA TO INCUBATION ITBI Student Startup Pitch Fest",
  description:
    "Get Expert Feedback, Win Free Incubation Space, Transform Your Startup Idea into Reality with ITBI & Pathway Venture",
  date: "May 15th, 2026",
  location: "Auditorium, ITBI, CUET, Chittagong",
  time: "9:30 AM – 5:00 PM",
};

export default function InnovationWorkshopRegistrationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Event Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-purple-700 hover:text-purple-800 text-sm font-medium mb-5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Event
          </Link>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            {INNOVATION_WORKSHOP_EVENT.title}
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-6">
            {INNOVATION_WORKSHOP_EVENT.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-lg px-3.5 py-2 text-sm text-gray-700 font-medium">
              <CalendarDays className="w-4 h-4 text-purple-600" />
              {INNOVATION_WORKSHOP_EVENT.date}
            </div>
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-lg px-3.5 py-2 text-sm text-gray-700 font-medium">
              <MapPin className="w-4 h-4 text-purple-600" />
              {INNOVATION_WORKSHOP_EVENT.location}
            </div>
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-lg px-3.5 py-2 text-sm text-gray-700 font-medium">
              <Clock className="w-4 h-4 text-purple-600" />
              {INNOVATION_WORKSHOP_EVENT.time}
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-100 px-6 py-5 md:px-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Register Your Team</h2>
            <p className="text-gray-500 text-sm mt-1">
              Fill out the form below to register your team for the event.
            </p>
          </div>
          <div className="p-6 md:p-8">
            <EventForm />
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-5 h-5 text-purple-600" />
            <h3 className="font-bold text-gray-900">Need Help?</h3>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            If you have any questions about the registration process or the event, feel free to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            {/* <a
              href="mailto:aspireinternshiprogram.pda@gmail.com"
              className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 font-medium transition-colors"
            >
              <Mail className="w-4 h-4 text-purple-600" />
              aspireinternshiprogram.pda@gmail.com
            </a>
            <a
              href="tel:+8801973227349"
              className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-purple-600" />
              +880 1973-227349
            </a> */}
            <a
              href="tel:+8801897015708"
              className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-purple-600" />
              +880 1897-015708
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}