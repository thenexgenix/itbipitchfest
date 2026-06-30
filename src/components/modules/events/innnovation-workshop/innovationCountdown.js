"use client";

import React, { useState, useEffect } from "react";

/* TIME BOX */
const TimeBox = ({ value, label }) => {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        w-16 h-20
        sm:w-20 sm:h-24
        md:w-24 md:h-28

        bg-linear-to-b from-[#4A1B6F] to-[#2A0F45]
        rounded-xl

        border border-white/70
        shadow-[0_0_18px_rgba(255,255,255,0.45)]
      "
    >
      {/* NUMBER */}
      <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-none">
        {value < 10 ? `0${value}` : value}
      </span>

      {/* LABEL */}
      <span className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-white tracking-[0.2em] uppercase">
        {label}
      </span>
    </div>
  );
};

const InnovationCountdown = () => {
  const [isMounted, setIsMounted] = useState(false);

  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-06-19T09:30:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setIsMounted(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    return null;
  }

  const isTimeUp =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <section className="w-full flex justify-center items-center pt-16 bg-[#32094C]">
      <div
        className="
          w-full max-w-3xl
          mx-4 sm:mx-6
          px-6 sm:px-10 py-10

          rounded-2xl
          bg-purple-900/40
          backdrop-blur-md

          border border-white/20
          shadow-[0_0_40px_rgba(0,0,0,0.35)]

          text-center
        "
      >
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-wide mb-8 uppercase">
          {isTimeUp
            ? "Thank you for participating!"
            : "Join us for our upcoming event!"}
        </h3>

        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
};

export default InnovationCountdown;
