
import React from 'react';
import { Product } from '../types';
import { STATUS_CONFIG } from '../constants';
import { Tag, Clock, List, Play, ChevronRight } from 'lucide-react';

interface DashboardCardProps {
    product: Product;
    onCheckOverview: (id: string) => void;
}

const DashboardCard: React.FC<DashboardCardProps & { index?: number }> = ({ product, onCheckOverview, index = 0 }) => {
    const StatusIcon = STATUS_CONFIG[product.status].icon;
    const statusDetails = STATUS_CONFIG[product.status];

    return (
        <div
            className="group relative overflow-hidden bg-zinc-900/40 border border-zinc-800 transition-all duration-700 rounded-xl hover:border-brand-500/50 hover:shadow-[0_0_40px_rgba(99, 102, 241, 0.15)] animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Subtle glow background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl duration-700 pointer-events-none" />

            <div className="relative p-6">
                <div className="flex flex-col xl:flex-row items-start gap-6">

                    {/* Left Side: Info */}
                    <div className="flex-1 min-w-0 w-full flex flex-col items-start">
                        {/* Status & Version */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] uppercase font-black tracking-widest transition-all duration-500 group-hover:scale-105 ${statusDetails.bgColor} ${statusDetails.color} ${statusDetails.borderColor}`}>
                                <StatusIcon size={12} strokeWidth={3} className="animate-pulse" />
                                {statusDetails.label}
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-800/30 text-zinc-400 text-[10px] uppercase font-bold tracking-wider font-mono transition-colors group-hover:border-zinc-700 group-hover:bg-zinc-800/50">
                                <Tag size={12} />
                                {product.version}
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-500 text-[10px] uppercase font-bold tracking-wider font-mono">
                                <Clock size={12} />
                                {product.lastUpdated}
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-black text-white group-hover:text-brand-400 transition-all duration-500 uppercase italic tracking-tighter mb-4 group-hover:translate-x-1">
                            {product.name}
                        </h3>

                        {/* Description Box */}
                        <div className="bg-zinc-950/40 border border-zinc-800/50 rounded-xl p-4 w-full transition-all duration-500 group-hover:bg-zinc-950/60 group-hover:border-zinc-700/50">
                            <p className="text-sm text-zinc-400 font-sans leading-relaxed line-clamp-2 transition-colors group-hover:text-zinc-300">
                                {product.description || "Premium internal panel for ultimate gaming performance. Dominate with the cleanest features."}
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Action Column */}
                    <div className="flex flex-col gap-3 w-full xl:w-52 shrink-0 self-stretch justify-center">

                        {/* Primary Button: Check Overview */}
                        <button
                            onClick={() => onCheckOverview(product.id)}
                            className="group/btn relative overflow-hidden flex items-center justify-center gap-2 px-4 py-4 rounded-lg bg-brand-600 text-white font-black text-xs transition-all duration-500 shadow-[0_0_20px_rgba(99, 102, 241, 0.2)] hover:shadow-[0_0_35px_rgba(99, 102, 241, 0.4)] active:scale-[0.96] uppercase italic tracking-widest border border-brand-500/50"
                        >
                            {/* Button Shine Effect */}
                            <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                            <span>Check Overview</span>
                            <ChevronRight size={16} strokeWidth={3} className="transition-transform group-hover/btn:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCard;
