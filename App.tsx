import React, { useState, useRef } from 'react';
import SystemStatusWidget from './components/SystemStatusWidget';
import Dashboard from './components/Dashboard';
import PanelDetails from './components/PanelDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background';
import { PRODUCTS, ANNOUNCEMENTS, APP_NAME } from './constants';
import { Bell } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'panel'>('dashboard');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const statusListRef = useRef<HTMLDivElement>(null);

  const handleCheckOverview = (id: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedProductId(id);
      setCurrentView('panel');
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  const handleBackToDashboard = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView('dashboard');
      setSelectedProductId(null);
      setIsTransitioning(false);
    }, 300);
  };

  const handleStatusClick = () => {
    handleBackToDashboard();
    if (statusListRef.current) {
      statusListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const selectedProduct = PRODUCTS.find(p => p.id === selectedProductId);

  return (
    <div className="min-h-screen text-zinc-100 font-sans selection:bg-brand-500/30 selection:text-brand-200 flex flex-col">
      <Background />
      <Header />

      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">

        {/* Header Section */}
        <div className={`mb-8 text-center transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-500/5 border border-brand-500/20 text-xs text-brand-400 mb-6 font-mono">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            System Operational
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 uppercase font-mono">
            {APP_NAME} <span className="text-brand-500">{currentView === 'dashboard' ? 'Dashboard' : 'Portal'}</span>
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            {currentView === 'dashboard'
              ? "Access our complete suite of internal panels. Select a panel to view detailed information and download."
              : `Viewing details for ${selectedProduct?.name}. Check features, status, and download links below.`
            }
          </p>
        </div>

        {/* Content Section */}
        <div ref={statusListRef} className={`scroll-mt-24 mb-12 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {currentView === 'dashboard' ? (
            <Dashboard
              products={PRODUCTS}
              onCheckOverview={handleCheckOverview}
            />
          ) : (
            selectedProduct && (
              <div className="flex flex-col gap-8">
                <PanelDetails
                  product={selectedProduct}
                  onBack={handleBackToDashboard}
                />

                {/* Bottom Section Grid: System Status (Left) & Announcements (Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                  <div className="h-full">
                    <SystemStatusWidget />
                  </div>

                  <div className="h-full flex flex-col gap-4">
                    {/* General Global Announcements (Warnings/Info) */}
                    {ANNOUNCEMENTS.filter(ann => ann.id !== 'ann_update_1').map(ann => (
                      <div
                        key={ann.id}
                        className={`group relative p-5 rounded-xl border backdrop-blur-sm flex flex-col items-start gap-3 transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] ${ann.type === 'success' ? 'bg-zinc-900/40 border-brand-500/30 hover:border-brand-500/50' :
                          ann.type === 'warning' ? 'bg-zinc-900/40 border-orange-500/30 hover:border-orange-500/50' :
                            'bg-zinc-900/40 border-zinc-800'
                          }`}>
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 to-transparent opacity-0 group-hover:opacity-10 transition-opacity blur duration-500 rounded-lg pointer-events-none" />
                        <div className="flex items-center gap-2 w-full border-b border-zinc-800/50 pb-3">
                          <Bell size={18} className={`flex-shrink-0 ${ann.type === 'success' ? 'text-brand-400' : ann.type === 'warning' ? 'text-orange-400' : 'text-zinc-300'}`} />
                          <h3 className={`text-base font-black uppercase italic tracking-wider ${ann.type === 'success' ? 'text-brand-400' : ann.type === 'warning' ? 'text-orange-400' : 'text-zinc-300'}`}>{ann.title}</h3>
                        </div>
                        <div className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-mono w-full">
                          {ann.content.split('\n').map((line, i) => (
                            <div key={i} className="mb-1 last:mb-0">{line}</div>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Panel-Specific Changelog */}
                    {selectedProduct.changelog && (
                      <div className="group relative p-5 rounded-xl border border-brand-500/30 bg-zinc-900/40 backdrop-blur-sm flex flex-col items-start gap-3 transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:border-brand-500/50">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 to-transparent opacity-0 group-hover:opacity-10 transition-opacity blur duration-500 rounded-lg pointer-events-none" />
                        <div className="flex items-center gap-2 w-full border-b border-zinc-800/50 pb-3">
                          <Bell size={18} className="text-brand-400 flex-shrink-0" />
                          <h3 className="text-base font-black uppercase italic tracking-wider text-brand-400">
                            {selectedProduct.changelog.title}
                          </h3>
                        </div>
                        <div className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-mono w-full">
                          {selectedProduct.changelog.items.map((item, i) => (
                            <div key={i} className="mb-1 last:mb-0 flex items-start gap-2">
                              <span className="text-brand-500">•</span>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default App;