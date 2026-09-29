import React from 'react';
import {
  Compass,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookOpen,
  GraduationCap
} from 'lucide-react';

export const ConclusionSection: React.FC = () => {
  return (
    <section id="conclusion" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>11 &bull; Academic Synthesis</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Immersion Study Conclusion & Scientific Summary
          </h2>
        </div>

        {/* Conclusion Card Narrative */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/40 shadow-2xl space-y-8 relative overflow-hidden">
          
          <div className="space-y-4 max-w-4xl text-sm sm:text-base text-slate-300 leading-relaxed">
            <p className="text-base sm:text-lg text-white font-medium">
              The immersion study played an indispensable role in grounding this research. By conducting on-site field surveys across diverse terrestrial environments, our team directly observed and cataloged the tangible spatial disparity between real-world ground features—such as narrow roadways, smallholder agricultural parcels, individual residential roof profiles, and localized water bodies—and their aggregated representations within medium-resolution Sentinel-2 satellite imagery.
            </p>

            <p>
              This critical observation highlighted the prevalence of the <strong className="text-cyan-300">mixed-pixel phenomenon</strong> and the loss of sub-pixel linear boundary detail in standard 10 m to 60 m earth observation products.
            </p>

            <p>
              To overcome these physical sensor constraints, the proposed project integrates <strong className="text-white">deep learning architectures, advanced multispectral image processing, and WebGIS cartography</strong> to estimate finer spatial information. By super-resolving Sentinel-2 imagery and producing multi-class semantic segmentation alongside Bayesian uncertainty surfaces, this framework bridges the gap between ground-level reality and orbital satellite data—paving the way for high-precision, open-access environmental monitoring.
            </p>
          </div>

          {/* Key Takeaways Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                01. Field Insight
              </span>
              <p className="text-xs text-slate-300">
                Ground reality is characterized by fine sub-meter boundaries lost to detector spatial averaging.
              </p>
            </div>

            <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                02. Neural Solution
              </span>
              <p className="text-xs text-slate-300">
                Deep convolutional super-resolution reconstructs high-frequency spatial textures and edges.
              </p>
            </div>

            <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold block">
                03. Applied Impact
              </span>
              <p className="text-xs text-slate-300">
                Enables high-fidelity agricultural, urban cadastre, hydrological, and conservation mapping.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
