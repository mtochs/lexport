'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Globe, Shield, Anchor, Zap } from 'lucide-react';

export default function SocialProof() {
    const companies = [
        { name: "AeroSpace Dynamics", icon: Rocket },
        { name: "Global Defense Systems", icon: Shield },
        { name: "Orbital Tech", icon: Globe },
        { name: "Marine Systems", icon: Anchor },
        { name: "Future Energy", icon: Zap },
    ];

    return (
        <section className="py-12 border-b border-white/5 bg-slate-900/30">
            <div className="container">
                <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-wider">
                    Trusted by engineering teams at
                </p>

                {/* Logos Grid */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company, index) => (
                        <div key={index} className="flex items-center gap-2 group cursor-default">
                            <company.icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                            <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">{company.name}</span>
                        </div>
                    ))}
                </div>

                {/* Testimonial */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm"
                    >
                        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-indigo-500/20">
                            <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                        </div>

                        <blockquote className="text-xl md:text-2xl font-medium text-slate-200 text-center leading-relaxed mb-8 relative z-10">
                            "LexPort cut our classification time by <span className="text-indigo-400">90%</span>. What used to take our engineers weeks now happens in minutes, and the audit trail is actually better than what we were producing manually."
                        </blockquote>

                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden border-2 border-indigo-500/50">
                                <div className="w-full h-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                                    JD
                                </div>
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-white">James D.</div>
                                <div className="text-sm text-slate-400">Director of Compliance, AeroSpace Dynamics</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
