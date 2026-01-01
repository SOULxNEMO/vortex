
import React from 'react';
import { Shield, Activity, Users, Globe } from 'lucide-react';

const SystemStatus: React.FC = () => {
    return (
        <div className="group relative overflow-hidden bg-zinc-900/40 border border-zinc-800 transition-all duration-500 rounded-xl p-5 hover:border-brand-500/30 hover:shadow-[0_0_30_rgba(99,102,241,0.1)] h-full flex flex-col justify-between">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 blur-3xl rounded-full pointer-events-none" />

            <div>
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-zinc-800/50">
                    <Activity size={18} className="text-brand-500 animate-pulse" />
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white font-mono italic">Global Network Status</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase font-bold tracking-wider font-mono">
                            <Globe size={10} /> Region
                        </div>
                        <div className="text-xs font-black text-zinc-300 uppercase italic">Global / Distributed</div>
                    </div>

                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase font-bold tracking-wider font-mono">
                            <Shield size={10} /> Protection
                        </div>
                        <div className="text-xs font-black text-brand-500 uppercase italic">Kernel-Level Active</div>
                    </div>

                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase font-bold tracking-wider font-mono">
                            <Users size={10} /> Active Users
                        </div>
                        <div className="text-xs font-black text-zinc-300 uppercase italic">12,482 Online</div>
                    </div>

                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase font-bold tracking-wider font-mono">
                            <Activity size={10} /> Server Load
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden max-w-[40px]">
                                <div className="h-full bg-brand-500 w-[42%] animate-pulse" />
                            </div>
                            <span className="text-[10px] font-black text-brand-500 font-mono">42%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-3 rounded-lg bg-black/40 border border-zinc-800/50 flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-[9px] uppercase font-bold text-zinc-600 font-mono tracking-tighter">Security Protocol</span>
                    <span className="text-[10px] font-black text-zinc-400 uppercase italic">ACEVortexGuard v4.8</span>
                </div>
                <div className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </div>
            </div>
        </div>
    );
};

export default SystemStatus;
