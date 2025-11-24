'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, BrainCircuit, FileCheck, ArrowRight, Sparkles } from 'lucide-react';
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
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
            glow: "shadow-blue-500/20"
        },
        {
            id: 2,
            title: "Analyze & Classify",
            description: "AI Agent evaluates technical data against USML/CCL knowledge graph.",
            icon: BrainCircuit,
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20",
            glow: "shadow-purple-500/20"
        },
        {
            id: 3,
            title: "Generate Report",
            description: "Defensible audit trail pushed back to PLM for export approval.",
            icon: FileCheck,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20",
            glow: "shadow-emerald-500/20"
        }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto p-4 sm:p-8">
            <div className="relative">
                {/* Connecting Line Background */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 hidden md:block rounded-full"></div>

                {/* Animated Beam */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 hidden md:block overflow-hidden rounded-full">
                    <motion.div
                        className="w-40 h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-[1px]"
                        animate={{ x: [-200, 1200] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className={cn(
                                "relative p-8 rounded-2xl border bg-slate-950/80 backdrop-blur-xl transition-all duration-500 cursor-default group overflow-hidden",
                                activeStep === step.id
                                    ? `border-indigo-500/50 shadow-2xl ${step.glow} scale-105 z-20`
                                    : "border-white/5 hover:border-white/10 hover:bg-slate-900/80"
                            )}
                            onMouseEnter={() => setActiveStep(step.id)}
                            onMouseLeave={() => setActiveStep(null)}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
                        >
                            {/* Hover Gradient Background */}
                            <div className={cn(
                                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"
                            )} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg",
                                        step.bg,
                                        step.color,
                                        activeStep === step.id ? "scale-110 rotate-3" : ""
                                    )}>
                                        <step.icon className="w-7 h-7" />
                                    </div>
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-sm font-bold text-slate-500 border border-slate-800 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-colors">
                                        {step.id}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                    {step.description}
                                </p>
                            </div>

                            {/* Sparkle Effect on Active */}
                            {activeStep === step.id && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute top-4 right-4 text-indigo-400"
                                >
                                    <Sparkles className="w-5 h-5 animate-pulse" />
                                </motion.div>
                            )}

                            {/* Arrow for mobile */}
                            {index < steps.length - 1 && (
                                <div className="md:hidden flex justify-center mt-6 text-slate-700">
                                    <ArrowRight className="w-6 h-6 rotate-90" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
