"use client";

import React, { useState, useEffect } from "react";

/* TIME BOX */
const TimeBox = ({ value, label }) => (
  <div
    className="
      flex flex-col items-center justify-center
      w-24 h-32 md:w-32 md:h-40
      bg-linear-to-b from-[#4A1B6F] to-[#2A0F45]
      rounded-xl
      border border-white/80
      shadow-[0_0_25px_rgba(255,255,255,0.65)]
      relative
    "
  >
    <span className="text-4xl md:text-6xl font-semibold text-white leading-none">
      {value < 10 ? `0${value}` : value}
    </span>

    <span className="mt-3 text-xs md:text-sm font-normal text-white tracking-[0.25em] uppercase">
      {label}
    </span>
  </div>
);

const Countdown = ({ data }) => {
  if (!data?.date) return null;

  const targetDate = new Date(data.date);

  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [data.date]);

  return (
    <section className="py-20 w-full bg-[#38174E] flex flex-col items-center justify-center">

      {/* TITLE */}
      <h2 className="text-3xl md:text-5xl font-semibold text-[#E6C2FF] mb-4 text-center">
        {data.title}
      </h2>

      {/* SUBTITLE */}
      <p className="text-white text-sm md:text-lg font-semibold tracking-[0.15em] uppercase mb-12 text-center">
        {data.subtitle}
      </p>

      {/* COUNTDOWN */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </section>
  );
};

export default Countdown;
