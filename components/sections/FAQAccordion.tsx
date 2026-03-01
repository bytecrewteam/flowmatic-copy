'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-[#1f1f3d] rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-4 text-left bg-[#0d0d1f] hover:bg-[#13132a] transition-colors"
            aria-expanded={openIndex === index}
            aria-controls={`faq-content-${index}`}
          >
            <span className="font-medium text-[#eeeef8]">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-[#6868a0] transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            id={`faq-content-${index}`}
            role="region"
            aria-hidden={openIndex !== index}
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <p className="px-4 pb-4 pt-2 text-sm text-[#6868a0]">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
