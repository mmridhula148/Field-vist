import React from 'react';
import {
  Compass,
  Layers,
  MapPin,
  Sparkles,
  Info,
  ShieldAlert,
  Activity,
  Maximize2
} from 'lucide-react';
import { LeafletMapDemo } from '../components/LeafletMapDemo';

export const InteractiveMapSection: React.FC = () => {
  return (
    <section id="interactive-demo" className="py-24 relative border-t border-slate-800/80 bg-[#070b16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Compass className="w-3.5 h-3.5" />
              <span>06 &bull; Interactive WebGIS Cartography</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive Map & Output Simulation Demo
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore the simulated WebGIS output dashboard demonstrating the interaction between raw Sentinel-2 granules, deep learning super-resolved imagery, multi-class land-cover masks, and Bayesian uncertainty layers.
            </p>
          </div>

          {/* Academic Prototype Notice */}
          <div className="bg-amber-950/40 border border-amber-500/40 p-3.5 rounded-xl max-w-sm shrink-0">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold font-mono">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Prototype Visualization</span>
            </div>
            <p className="text-[11px] text-slate-300 mt-1 leading-snug">
              Layers represent pre-computed simulation mosaics and test tiles. Live inference weights and full training checkpoints remain under active development.
            </p>
          </div>
        </div>

        {/* Leaflet Interactive Map Workspace Component */}
        <LeafletMapDemo />

      </div>
    </section>
  );
};
