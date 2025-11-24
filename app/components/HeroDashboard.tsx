'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    ShieldCheck,
    FileText,
    AlertCircle,
    Search,
    Bell,
    Menu,
    LayoutDashboard,
    Settings,
    Users,
    CheckCircle2,
    Clock,
    FileBox
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function HeroDashboard() {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const rotateX = useTransform(mouseY, [0, 675], [2, -2]);
    const rotateY = useTransform(mouseX, [0, 1200], [-2, 2]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            style={{
                perspective: 1000,
            }}
            className="w-full h-full flex items-center justify-center p-4 sm:p-8"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                }}
                className="relative w-full max-w-5xl aspect-[16/9] bg-slate-900/90 rounded-xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col"
            >
                {/* Glow Effect */}
                <motion.div
                    style={{
                        background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(99, 91, 255, 0.15),
                transparent 80%
              )
            `,
                    }}
                    className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                />

                {/* Top Bar */}
                <div className="h-14 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-sm z-10">
                    <div className="flex items-center gap-4">
                        <Menu className="w-5 h-5 text-slate-400" />
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-indigo-500 rounded-md flex items-center justify-center">
                                <ShieldCheck className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-semibold text-slate-200">LexPort</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative hidden sm:block">
                            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search classifications..."
                                className="bg-slate-800/50 border border-slate-700 rounded-full py-1.5 pl-9 pr-4 text-sm text-slate-300 focus:outline-none focus:border-indigo-500/50 w-64"
                            />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center relative">
                            <Bell className="w-4 h-4 text-slate-400" />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-slate-700"></div>
                    </div>
                </div>

                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-16 sm:w-64 border-r border-slate-800 bg-slate-900/30 flex flex-col py-6 gap-2 z-10">
                        <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
                        <SidebarItem icon={FileText} label="Classifications" />
                        <SidebarItem icon={FileBox} label="Products" />
                        <SidebarItem icon={Users} label="Team" />
                        <div className="flex-1"></div>
                        <SidebarItem icon={Settings} label="Settings" />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 bg-slate-950/50 p-6 sm:p-8 overflow-y-auto z-10">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-1">Compliance Overview</h2>
                                <p className="text-slate-400 text-sm">Real-time export control status</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium transition-colors">Export Report</button>
                                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-indigo-500/20">New Scan</button>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            <StatCard title="Pending Review" value="12" change="+2" trend="up" icon={Clock} color="text-amber-400" />
                            <StatCard title="Classified Today" value="148" change="+24%" trend="up" icon={CheckCircle2} color="text-emerald-400" />
                            <StatCard title="Flagged Items" value="3" change="-1" trend="down" icon={AlertCircle} color="text-red-400" />
                        </div>

                        {/* Recent Activity List */}
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                                <h3 className="font-semibold text-slate-200">Recent Classifications</h3>
                                <button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">View All</button>
                            </div>
                            <div className="divide-y divide-slate-800/50">
                                <ListItem
                                    name="Turbine_Blade_v4.sldprt"
                                    id="PN-8842-X"
                                    status="ITAR Controlled"
                                    statusColor="text-red-400 bg-red-400/10"
                                    date="2 mins ago"
                                />
                                <ListItem
                                    name="Housing_Assembly_Main.asm"
                                    id="PN-9921-A"
                                    status="EAR99"
                                    statusColor="text-emerald-400 bg-emerald-400/10"
                                    date="15 mins ago"
                                />
                                <ListItem
                                    name="Bracket_Mount_L.step"
                                    id="PN-3321-C"
                                    status="Review Needed"
                                    statusColor="text-amber-400 bg-amber-400/10"
                                    date="1 hour ago"
                                />
                                <ListItem
                                    name="Sensor_Array_Spec.pdf"
                                    id="DOC-112-9"
                                    status="EAR99"
                                    statusColor="text-emerald-400 bg-emerald-400/10"
                                    date="2 hours ago"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function SidebarItem({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) {
    return (
        <div className={cn(
            "flex items-center gap-3 px-6 py-3 cursor-pointer transition-colors relative group",
            active ? "text-indigo-400 bg-indigo-500/10" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
        )}>
            {active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>}
            <Icon className="w-5 h-5" />
            <span className="font-medium hidden sm:block">{label}</span>
        </div>
    );
}

function StatCard({ title, value, change, trend, icon: Icon, color }: any) {
    return (
        <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl hover:border-slate-700 transition-colors group cursor-default">
            <div className="flex justify-between items-start mb-4">
                <div className={cn("p-2 rounded-lg bg-slate-800 group-hover:bg-slate-800/80 transition-colors", color)}>
                    <Icon className="w-5 h-5" />
                </div>
                <span className={cn("text-xs font-medium px-2 py-1 rounded-full", trend === 'up' ? "text-emerald-400 bg-emerald-400/10" : "text-slate-400 bg-slate-400/10")}>
                    {change}
                </span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{value}</div>
            <div className="text-slate-400 text-sm">{title}</div>
        </div>
    );
}

function ListItem({ name, id, status, statusColor, date }: any) {
    return (
        <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
                    <FileBox className="w-5 h-5" />
                </div>
                <div>
                    <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{name}</div>
                    <div className="text-xs text-slate-500">{id}</div>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full border border-transparent", statusColor)}>
                    {status}
                </span>
                <span className="text-xs text-slate-500 hidden sm:block">{date}</span>
            </div>
        </div>
    );
}
