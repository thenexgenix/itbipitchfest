import React from "react";

const prizes = [
  {
    rank: "02",
    place: "Second Place",
    amount: "7,000",
    currency: "BDT",
    order: "sm:order-1",
    bottomLabel: "Runner-up recognition",
  },
  {
    rank: "01",
    place: "First Place",
    amount: "10,000",
    currency: "BDT",
    highlight: true,
    order: "sm:order-2",
    bottomLabel: "Winner takes the stage",
  },
  {
    rank: "03",
    place: "Third Place",
    amount: "5,000",
    currency: "BDT",
    order: "sm:order-3",
    bottomLabel: "Runner-up recognition",
  },
];

export default function PrizeMoney() {
  return (
    <section className="relative w-full bg-[#32094C] py-24 px-4 overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#7c3aed]/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C369FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Awards & Recognition
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Prize Money
          </h2>
          <div className="mt-4 h-px w-16 mx-auto" style={{ background: "linear-gradient(90deg, transparent, #C369FF, transparent)" }} />
        </div>

        {/* Cards — 2nd | 1st | 3rd, 1st in center and tallest */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 items-end">
          {prizes.map((prize) => (
            <div
              key={prize.rank}
              className={`relative rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${prize.order}`}
              style={{
                boxShadow: prize.highlight
                  ? "0 0 0 1px rgba(195,105,255,0.5), 0 8px 40px rgba(195,105,255,0.25)"
                  : "0 0 0 1px rgba(255,255,255,0.08), 0 4px 20px rgba(167,139,250,0.15)",
              }}
            >
              {/* Shimmer overlay for 1st */}
              {prize.highlight && (
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{ background: "linear-gradient(135deg, rgba(195,105,255,0.18) 0%, rgba(124,58,237,0.04) 50%, rgba(195,105,255,0.12) 100%)" }}
                />
              )}

              {/* Card body */}
              <div
                className="relative px-8 py-10 flex flex-col"
                style={{
                  background: prize.highlight
                    ? "linear-gradient(160deg, #3b0f5e 0%, #250a3d 60%, #1a0630 100%)"
                    : "linear-gradient(160deg, #28083f 0%, #1c0630 100%)",
                  minHeight: prize.highlight ? "300px" : "248px",
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: prize.highlight
                      ? "linear-gradient(90deg, transparent, #C369FF, #7c3aed, transparent)"
                      : "linear-gradient(90deg, transparent, rgba(167,139,250,0.3), transparent)",
                  }}
                />

                {/* Badge row */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                    style={{
                      background: prize.highlight ? "rgba(195,105,255,0.15)" : "rgba(255,255,255,0.06)",
                      border: `1px solid ${prize.highlight ? "rgba(195,105,255,0.35)" : "rgba(255,255,255,0.1)"}`,
                      color: prize.highlight ? "#E6C2FF" : "#9d7fc4",
                    }}
                  >
                    {prize.highlight ? "✦ Champion" : prize.place}
                  </span>
                  {/* Rank pill */}
                  <span
                    className="text-xs font-black tabular-nums"
                    style={{ color: prize.highlight ? "rgba(195,105,255,0.5)" : "rgba(255,255,255,0.12)" }}
                  >
                    #{prize.rank}
                  </span>
                </div>

                {/* Divider */}
                <div
                  className="mb-6 h-px w-full"
                  style={{
                    background: prize.highlight
                      ? "linear-gradient(90deg, rgba(195,105,255,0.4), transparent)"
                      : "linear-gradient(90deg, rgba(255,255,255,0.08), transparent)",
                  }}
                />

                {/* Currency label */}
                <p
                  className="text-xs font-semibold tracking-[0.15em] uppercase mb-1"
                  style={{ color: prize.highlight ? "#C369FF" : "#7c5fa3" }}
                >
                  Cash Prize
                </p>

                {/* Amount */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span
                    className="text-sm font-bold"
                    style={{ color: prize.highlight ? "#C369FF" : "#9d7fc4" }}
                  >
                    {prize.currency}
                  </span>
                  <span
                    className="font-extrabold tracking-tight leading-none"
                    style={{
                      fontSize: prize.highlight ? "3rem" : "2.5rem",
                      color: prize.highlight ? "#F0D9FF" : "#c4a8e8",
                    }}
                  >
                    {prize.amount}
                  </span>
                </div>

                {/* Bottom label */}
                <p
                  className="text-xs mt-auto"
                  style={{ color: prize.highlight ? "rgba(195,105,255,0.6)" : "rgba(255,255,255,0.2)" }}
                >
                  {prize.bottomLabel}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}