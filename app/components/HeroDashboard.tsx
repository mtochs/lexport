'use client';

import React, { useRef } from 'react';
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
    FileBox,
    ChevronRight
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
                className="relative w-full max-w-5xl aspect-[16/10] bg-slate-950/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col group"
            >
                {/* Glow Effect */}
                <motion.div
                    style={{
                        background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(99, 91, 255, 0.1),
                transparent 80%
              )
            `,
                    }}
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100 z-0"
                />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0 mix-blend-overlay"></div>

                {/* Top Bar */}
                <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-white/5 backdrop-blur-md z-10 relative">
                    <div className="flex items-center gap-4">
                        <div className="p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
                            <Menu className="w-5 h-5 text-slate-400" />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                <ShieldCheck className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-lg text-white tracking-tight">LexPort</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="relative hidden md:block group/search">
                            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within/search:text-indigo-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search classifications..."
                                className="bg-slate-900/50 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-slate-300 focus:outline-none focus:border-indigo-500/50 focus:bg-slate-900/80 w-64 transition-all"
                            />
                        </div>
                        <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                            <div className="relative cursor-pointer">
                                <Bell className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
                                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-slate-950"></span>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border-2 border-slate-800 shadow-lg cursor-pointer"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 overflow-hidden relative z-10">
                    {/* Sidebar */}
                    <div className="w-20 lg:w-64 border-r border-white/5 bg-slate-900/20 flex flex-col py-6 gap-1">
                        <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
                        <SidebarItem icon={FileText} label="Classifications" />
                        <SidebarItem icon={FileBox} label="Products" />
                        <SidebarItem icon={Users} label="Team" />
                        <div className="flex-1"></div>
                        <SidebarItem icon={Settings} label="Settings" />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 bg-slate-950/30 p-8 overflow-y-auto">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Compliance Overview</h2>
                                <p className="text-slate-400">Real-time export control status for <span className="text-indigo-400 font-medium">Project Alpha</span></p>
                            </div>
                            <div className="flex gap-3">
                                <button className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-sm font-medium transition-all border border-white/5 hover:border-white/10">Export Report</button>
                                <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 flex items-center gap-2">
                                    <span className="text-lg leading-none">+</span> New Scan
                                </button>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <StatCard title="Pending Review" value="12" change="+2" trend="up" icon={Clock} color="text-amber-400" bg="bg-amber-400/10" border="border-amber-400/20" />
                            <StatCard title="Classified Today" value="148" change="+24%" trend="up" icon={CheckCircle2} color="text-emerald-400" bg="bg-emerald-400/10" border="border-emerald-400/20" />
                            <StatCard title="Flagged Items" value="3" change="-1" trend="down" icon={AlertCircle} color="text-red-400" bg="bg-red-400/10" border="border-red-400/20" />
                        </div>

                        {/* Recent Activity List */}
                        <div className="bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">
                            <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between bg-white/5">
                                <h3 className="font-semibold text-white flex items-center gap-2">
                                    Recent Classifications
                                    <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs border border-indigo-500/20">Live</span>
                                </h3>
                                <button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 group/btn">
                                    View All <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                                </button>
                            </div>
                            <div className="divide-y divide-white/5">
                                <ListItem
                                    name="Turbine_Blade_v4.sldprt"
                                    id="PN-8842-X"
                                    status="ITAR Controlled"
                                    statusColor="text-red-400 bg-red-400/10 border-red-400/20"
                                    date="2 mins ago"
                                />
                                <ListItem
                                    name="Housing_Assembly_Main.asm"
                                    id="PN-9921-A"
                                    status="EAR99"
                                    statusColor="text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
                                    date="15 mins ago"
                                />
                                <ListItem
                                    name="Bracket_Mount_L.step"
                                    id="PN-3321-C"
                                    status="Review Needed"
                                    statusColor="text-amber-400 bg-amber-400/10 border-amber-400/20"
                                    date="1 hour ago"
                                />
                                <ListItem
                                    name="Sensor_Array_Spec.pdf"
                                    id="DOC-112-9"
                                    status="EAR99"
                                    statusColor="text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
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
            "flex items-center gap-3 px-6 py-3.5 cursor-pointer transition-all relative group mx-3 rounded-xl",
            active
                ? "text-indigo-300 bg-indigo-500/10 shadow-inner shadow-indigo-500/5"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
        )}>
            {active && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-r-full shadow-[0_0_10px_rgba(99,91,255,0.5)]"></div>}
            <Icon className={cn("w-5 h-5 transition-transform group-hover:scale-110", active && "text-indigo-400")} />
            <span className="font-medium hidden lg:block">{label}</span>
        </div>
    );
}

function StatCard({ title, value, change, trend, icon: Icon, color, bg, border }: any) {
    return (
        <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-all group cursor-default relative overflow-hidden">
            <div className={cn("absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity", color)}>
                <Icon className="w-24 h-24 -mr-4 -mt-4" />
            </div>
            <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={cn("p-2.5 rounded-xl border backdrop-blur-sm transition-colors", bg, border, color)}>
                    <Icon className="w-5 h-5" />
                </div>
                <span className={cn("text-xs font-bold px-2.5 py-1 rounded-full border", trend === 'up' ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" : "text-slate-400 bg-slate-400/10 border-slate-400/20")}>
                    {change}
                </span>
            </div>
            <div className="text-3xl font-bold text-white mb-1 tracking-tight relative z-10">{value}</div>
            <div className="text-slate-400 text-sm font-medium relative z-10">{title}</div>
        </div>
    );
}

function ListItem({ name, id, status, statusColor, date }: any) {
    return (
        <div className="px-6 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-white/5 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-all">
                    <FileBox className="w-5 h-5" />
                </div>
                <div>
                    <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{name}</div>
                    <div className="text-xs text-slate-500 font-mono mt-0.5">{id}</div>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <span className={cn("text-xs font-semibold px-3 py-1 rounded-full border", statusColor)}>
                    {status}
                </span>
                <span className="text-xs text-slate-500 hidden sm:block font-medium">{date}</span>
            </div>
        </div>
    );
}
