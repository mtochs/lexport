'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, BrainCircuit, FileCheck, ArrowRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function ProcessWorkflow() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const steps = [
        {
            id: 1,
            title: "Ingest Data",
            description: "Connects to Teamcenter & SolidWorks PDM to pull CAD, BOMs, and specs.",
            icon: Database,
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            border: "border-blue-400/20"
        },
        {
            id: 2,
            title: "Analyze & Classify",
            description: "AI Agent evaluates technical data against USML/CCL knowledge graph.",
            icon: BrainCircuit,
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            border: "border-purple-400/20"
        },
        {
            id: 3,
            title: "Generate Report",
            description: "Defensible audit trail pushed back to PLM for export approval.",
            icon: FileCheck,
            color: "text-emerald-400",
            bg: "bg-emerald-400/10",
            border: "border-emerald-400/20"
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-8">
            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 hidden md:block"></div>

                {/* Animated Particles */}
                <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 hidden md:block overflow-hidden">
                    <motion.div
                        className="w-20 h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                        animate={{ x: [-100, 800] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className={cn(
                                "relative p-6 rounded-xl border bg-slate-900/80 backdrop-blur-sm transition-all duration-300 cursor-pointer group",
                                activeStep === step.id ? `border-indigo-500 shadow-lg shadow-indigo-500/20 scale-105` : "border-slate-800 hover:border-slate-700"
                            )}
                            onMouseEnter={() => setActiveStep(step.id)}
                            onMouseLeave={() => setActiveStep(null)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className={cn(
                                "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
                                step.bg,
                                step.color
                            )}>
                                <step.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-xs text-slate-400 border border-slate-700">
                                    {step.id}
                                </span>
                                {step.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed">
                                {step.description}
                            </p>

                            {/* Arrow for mobile */}
                            {index < steps.length - 1 && (
                                <div className="md:hidden flex justify-center mt-4 text-slate-600">
                                    <ArrowRight className="w-5 h-5 rotate-90" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
