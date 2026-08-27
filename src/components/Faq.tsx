"use client";

import { useState } from "react";

type QA = { q: string; a: string };

// NOTE: Questions come from the copy doc. Answers were not supplied in the copy
// ("Le risposte non sono nel copy: da scrivere") — these are sensible drafts to
// be reviewed/replaced by the client.
const items: QA[] = [
  {
    q: "Do I need to book in advance or can I drop in?",
    a: "You're welcome to do either. Classes can fill up, so booking ahead through Momence guarantees your spot — but if there's space, you can always drop in.",
  },
  {
    q: "I'm new to yoga — which class should I start with?",
    a: "Any of our beginner-friendly classes are a great place to begin. Come as you are — our teachers will guide you, and there's no experience or flexibility required.",
  },
  {
    q: "What time should I arrive before class?",
    a: "We recommend arriving about 10 minutes early so you can settle in, set up your space and start the class feeling relaxed.",
  },
  {
    q: "What happens if I arrive late?",
    a: "Life happens. If you're less than five minutes late we'll try to get you in. Anything more and we'll rebook you for free — we never fine you for being late.",
  },
  {
    q: "Do I need to bring my own mat?",
    a: "You're welcome to bring your own, but we have mats available at the studio if you'd prefer to travel light.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="shell faq" aria-labelledby="faq-title">
      <h2 id="faq-title" className="section-title">
        <span className="italic">Frequently </span>asked questions
      </h2>
      <div className="faq__list">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className={`faq-item${isOpen ? " faq-item--open" : ""}`}
            >
              <button
                type="button"
                className="faq-item__q"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                <svg
                  className="faq-item__icon"
                  viewBox="0 0 36 37"
                  width={36}
                  height={37}
                  aria-hidden="true"
                  focusable="false"
                >
                  <ellipse cx="18" cy="18.5" rx="18" ry="18.5" fill="#FFE9B6" />
                  <path
                    d={isOpen ? "M11 18.5H25" : "M11 18.5H25M18 11.5V25.5"}
                    stroke="#4D5E6D"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              {isOpen && (
                <p id={`faq-panel-${i}`} className="faq-item__a">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
