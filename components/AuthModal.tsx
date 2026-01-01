import React, { useState, useEffect } from 'react';
import { Lock, User, X, ShieldAlert, Cpu, CheckCircle2 } from 'lucide-react';
import { getSystemSignature, checkBinding, bindSystem } from '../utils/auth';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    panelName: string;
    authorizedUsers?: { username: string; password: string }[];
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess, panelName, authorizedUsers }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [signature, setSignature] = useState('');
    const [step, setStep] = useState<'login' | 'binding' | 'success'>('login');

    useEffect(() => {
        if (isOpen) {
            setSignature(getSystemSignature());
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!authorizedUsers || authorizedUsers.length === 0) {
            onSuccess();
            return;
        }

        // Check if any user in the array matches the entered credentials
        const matchedUser = authorizedUsers.find(
            (u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password
        );

        if (matchedUser) {
            const boundSig = checkBinding(username.toLowerCase());

            if (!boundSig) {
                setStep('binding');
            } else if (boundSig !== signature) {
                setError('HARDWARE ID MISMATCH: This account is locked to another system.');
            } else {
                setStep('success');
                setTimeout(() => onSuccess(), 1500);
            }
        } else {
            setError('INVALID CREDENTIALS: Access denied.');
        }
    };

    const handleBind = () => {
        bindSystem(username, signature);
        setStep('success');
        setTimeout(() => onSuccess(), 1500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-zinc-950 border border-brand-500/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(99,102,241,0.2)] animate-in fade-in zoom-in duration-300">

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
                        {step === 'success' ? (
                            <CheckCircle2 size={32} className="text-brand-400 animate-bounce" />
                        ) : step === 'binding' ? (
                            <Cpu size={32} className="text-brand-400 animate-pulse" />
                        ) : (
                            <Lock size={32} className="text-brand-400" />
                        )}
                    </div>
                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">
                        {step === 'success' ? 'Authorized' : step === 'binding' ? 'Hardware Binding' : 'Security Check'}
                    </h2>
                    <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mt-1">
                        Accessing: <span className="text-brand-400">{panelName}</span>
                    </p>
                </div>

                {step === 'login' && (
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-black text-zinc-400 tracking-widest flex items-center gap-2">
                                <User size={12} /> Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500/50 transition-colors font-mono"
                                placeholder="Enter authorized username..."
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-black text-zinc-400 tracking-widest flex items-center gap-2">
                                <Lock size={12} /> Password / Key
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500/50 transition-colors font-mono"
                                placeholder="Enter protected key..."
                                required
                            />
                        </div>

                        {error && (
                            <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-[10px] font-bold uppercase tracking-wider animate-shake">
                                <ShieldAlert size={14} />
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-black text-xs uppercase italic tracking-widest rounded-lg transition-all shadow-[0_0_20px_rgba(99,102,241,0.2)] active:scale-95"
                        >
                            Verify Identity
                        </button>
                    </form>
                )}

                {step === 'binding' && (
                    <div className="space-y-6 text-center">
                        <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
                            <p className="text-xs text-yellow-500 font-bold uppercase tracking-wide leading-relaxed">
                                New System Detected. Bind this account to this Hardware Signature permanently?
                            </p>
                        </div>

                        <div className="text-[10px] font-mono text-zinc-600 bg-black/40 p-2 rounded border border-zinc-900">
                            SIGNATURE: {signature}
                        </div>

                        <button
                            onClick={handleBind}
                            className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-black text-xs uppercase italic tracking-widest rounded-lg transition-all"
                        >
                            Confirm System Binding
                        </button>
                    </div>
                )}

                {step === 'success' && (
                    <div className="py-8 text-center animate-pulse">
                        <p className="text-brand-400 font-black uppercase italic tracking-widest">
                            Identity Confirmed...
                        </p>
                        <p className="text-zinc-500 text-[10px] mt-2">ACCESS GRANTED TO {signature.substring(0, 15)}...</p>
                    </div>
                )}

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-600 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};

export default AuthModal;
