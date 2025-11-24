'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Is my data secure? How do you handle ITAR/EAR data?",
            answer: "Security is our top priority. LexPort can be deployed entirely on-premise or in a GovCloud environment. We are SOC2 Type II certified and compliant with NIST 800-171. Your technical data never leaves your secure enclave for training purposes."
        },
        {
            question: "Does it integrate with my specific PLM?",
            answer: "Yes. We have native connectors for Siemens Teamcenter, SolidWorks PDM, and PTC Windchill. For custom PLM solutions, we offer a robust API and can build custom integrations in as little as 2 weeks."
        },
        {
            question: "How accurate is the AI classification?",
            answer: "Our models are fine-tuned on millions of export control rulings and achieve over 99% accuracy on routine classifications. For ambiguous cases, the system flags them for human review, ensuring you never risk a violation."
        },
        {
            question: "Can I customize the rule sets?",
            answer: "Absolutely. While we come pre-loaded with the latest USML and CCL regulations, you can add your own internal classification policies, jurisdiction rules, and company-specific guidelines."
        }
    ];

    return (
        <section className="py-24 bg-slate-950">
            <div className="container max-w-3xl">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20 mb-4">
                        <HelpCircle className="w-4 h-4" />
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Questions</h2>
                    <p className="text-slate-400">Everything you need to know about the product and billing.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-xl transition-all duration-300 overflow-hidden ${openIndex === index
                                    ? 'bg-slate-900/50 border-indigo-500/30 shadow-lg shadow-indigo-500/10'
                                    : 'bg-slate-900/20 border-white/5 hover:border-white/10'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-indigo-400' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
