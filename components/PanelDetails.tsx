
import React from 'react';
import { Product } from '../types';
import StatusRow from './StatusRow';
import { ArrowLeft } from 'lucide-react';

interface PanelDetailsProps {
    product: Product;
    onBack: () => void;
}

const PanelDetails: React.FC<PanelDetailsProps> = ({ product, onBack }) => {
    const [isFeaturesOpen, setIsFeaturesOpen] = React.useState(false);

    return (
        <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 fill-mode-both">
            <button
                onClick={onBack}
                className="flex items-center gap-3 text-zinc-500 hover:text-brand-400 transition-all duration-300 mb-8 group bg-zinc-900/40 border border-zinc-800/50 px-4 py-2 rounded-full hover:border-brand-500/30 hover:bg-zinc-900/60"
            >
                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1.5" />
                <span className="text-[10px] uppercase font-black tracking-[0.2em] font-mono">Return to Dashboard</span>
            </button>

            <div className="relative">
                {/* Decorative background glow for the active panel */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />

                <StatusRow
                    product={product}
                    isFeaturesOpen={isFeaturesOpen}
                    onToggleFeatures={() => setIsFeaturesOpen(!isFeaturesOpen)}
                />
            </div>
        </div>
    );
};

export default PanelDetails;
