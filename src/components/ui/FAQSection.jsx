"use client";
import { useState } from "react";

export default function FAQSection({ faqs }) {
  const [active, setActive] = useState(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-4">
            <button
              onClick={() => setActive(active === index ? null : index)}
              className="w-full text-left flex justify-between items-center"
            >
              <span className="font-medium text-gray-700">{faq.question}</span>
              <span>{active === index ? "-" : "+"}</span>
            </button>

            {active === index && (
              <p className="mt-3 text-[var(--heading-text)] text-sm">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
