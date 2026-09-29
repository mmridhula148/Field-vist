import React from 'react';
import {
  AlertTriangle,
  Grid,
  Minimize2,
  Blur,
  HelpCircle,
  FileQuestion,
  Sparkles,
  Layers
} from 'lucide-react';
import { SliderCompare } from '../components/SliderCompare';

export const ProblemIdentifiedSection: React.FC = () => {
  const problemPoints = [
    {
      title: "Limited Spatial Resolution",
      icon: <Grid className="w-5 h-5 text-amber-400" />,
      tag: "10 m – 60 m Footprint",
      description: "Open-access satellites like Sentinel-2 operate at 10m (VNIR), 20m (Red Edge/SWIR), and 60m (Atmospheric) Ground Sample Distance. A single 10m pixel covers 100 m² of physical terrain, exceeding the dimensions of many typical rural structures, road corridors, and smallholder plots."
    },
    {
      title: "The Mixed Pixel Phenomenon",
      icon: <AlertTriangle className="w-5 h-5 text-red-400" />,
      tag: "Spectral Averaging",
      description: "When multiple distinct land-cover materials (e.g., asphalt roadway, grassy shoulder, concrete curb, and bare soil) fall inside the same 100 m² detector element, their reflected radiances are linearly integrated into a composite hybrid spectrum that fails to match any pure material."
    },
    {
      title: "Loss of Fine & Linear Features",
      icon: <Minimize2 className="w-5 h-5 text-cyan-400" />,
      tag: "Sub-pixel Discontinuity",
      description: "Narrow linear features observed during field study—such as 3–5 m rural access roads, 0.8 m irrigation canals, field bunds, and hedgerows—frequently disappear or become fragmented into disconnected pixel artifacts across satellite rasters."
    },
    {
      title: "Reduced Analytical Detail & Precision",
      icon: <FileQuestion className="w-5 h-5 text-purple-400" />,
      tag: "Uncertainty in Decision-Making",
      description: "Coarse pixel boundaries introduce substantial spatial uncertainty for downstream applications such as precision agriculture cadastres, urban building footprint extraction, flood zone margin delineation, and local ecological monitoring."
    }
  ];

  return (
    <section id="problem" className="py-24 relative border-t border-slate-800/80 bg-[#070b16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-950/80 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>02 &bull; Problem Formulation</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Resolution Dilemma: Ground Reality vs. Satellite Data
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            While satellite remote sensing provides unmatched temporal frequency and global coverage, the fundamental laws of optical sensor diffraction and orbital altitude impose physical limits on spatial resolution for open-access satellite platforms.
          </p>
        </div>

        {/* 4 Core Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemPoints.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-lg hover:shadow-cyan-500/5 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 group-hover:border-amber-500/40 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Challenge #{idx + 1}</span>
                <span className="text-amber-400/80">Identified in Field</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Visual Comparison: Ground Reality vs Satellite Representation */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Illustrative Visual Comparison</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Interactive Ground Reality vs Medium-Resolution (10 m) detector visualization
              </p>
            </div>
          </div>

          {/* Interactive Split Slider */}
          <SliderCompare />
        </div>

      </div>
    </section>
  );
};
