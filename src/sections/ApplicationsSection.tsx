import React from 'react';
import {
  Wheat,
  Building,
  ShieldAlert,
  Leaf,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye
} from 'lucide-react';
import { APPLICATION_DOMAINS } from '../data/projectData';

export const ApplicationsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wheat': return <Wheat className="w-6 h-6 text-yellow-400" />;
      case 'Building': return <Building className="w-6 h-6 text-red-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-amber-400" />;
      case 'Leaf': return <Leaf className="w-6 h-6 text-emerald-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="applications" className="py-24 relative border-t border-slate-800/80 bg-[#070b16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 &bull; Real-World Impact</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Applied Geospatial & Research Domains
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Enhancing spatial resolution and reducing mixed-pixel ambiguity from Sentinel-2 imagery directly unlocks high-precision operational capabilities across key societal and environmental sectors.
          </p>
        </div>

        {/* 4 Application Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {APPLICATION_DOMAINS.map((app) => (
            <div
              key={app.id}
              className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-cyan-500/5 group"
            >
              <div className="space-y-5">
                {/* Card Top */}
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 group-hover:border-cyan-500/40 transition-colors">
                    {getIcon(app.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-800 text-cyan-300 border border-slate-700">
                    {app.badge}
                  </span>
                </div>

                {/* Title & Summary */}
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {app.summary}
                  </p>
                </div>

                {/* Key Use Cases */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Key Technical Deliverables:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {app.keyUseCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Field Study Ground Tie-in */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1">
                  <Eye className="w-3 h-3" /> Field Study Connection:
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed italic">
                  "{app.fieldRelevance}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
