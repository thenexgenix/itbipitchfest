"use client";

import { CheckCircle, Home, RotateCcw, Download, Presentation } from "lucide-react";

const PITCH_TEMPLATE_URL = "https://idea.gov.bd/images/Knowledge-center/pitch-template/StartupPitchDeckTemplate.pptx";

export default function SuccessMessage({ onReset, isLoading = false }) {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          {isLoading ? (
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full">
              <div className="w-10 h-10 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
            </div>
          ) : (
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          )}
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {isLoading ? "Submitting..." : "Registration Submitted!"}
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          {isLoading
            ? "Please wait while we process your registration..."
            : "Thank you! We've received your team's information and will review it shortly."}
        </p>

        {!isLoading && (
          <div className="space-y-3">
            <a
              href={PITCH_TEMPLATE_URL}
              download
              className="w-full inline-flex items-center justify-center gap-2 bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-700 font-semibold py-3 rounded-xl transition-colors duration-200"
            >
              <Presentation className="w-4 h-4" />
              Download Pitch Template
              <Download className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onReset}
              className="w-full inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-colors duration-200"
            >
              <RotateCcw className="w-4 h-4" />
              Register Another Team
            </button>
            <a
              href="/"
              className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl transition-colors duration-200"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </a>
          </div>
        )}
      </div>
    </div>
  );
}