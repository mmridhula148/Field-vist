import React from 'react';
import {
  Satellite,
  ArrowRight,
  Workflow,
  Sparkles,
  MapPin,
  Layers,
  GraduationCap,
  Eye,
  ShieldCheck,
  Cpu,
  Globe2
} from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Geospatial Orbital Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep Space / Atmospheric Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-600/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        
        {/* Orbital Ellipse Lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/10 rounded-full animate-spin [animation-duration:90s]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-cyan-500/5 rounded-full border-dashed animate-spin [animation-duration:150s]"></div>

        {/* Coordinate Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10">
        
        {/* Academic Project Type Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-lg shadow-cyan-500/10 animate-fade-in">
          <GraduationCap className="w-4 h-4 text-cyan-400" />
          <span>College Immersion Field Research Project</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-slate-400">{PROJECT_METADATA.academicYear}</span>
        </div>

        {/* Main Title & Subtitle */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Land Cover Analysis Using{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Satellite Imagery
            </span>{' '}
            and Deep Learning
          </h1>

          <p className="text-lg sm:text-2xl font-medium text-slate-300 tracking-wide font-sans">
            “Connecting Ground Observations with Intelligent Satellite-Based Mapping”
          </p>
        </div>

        {/* Academic Abstract / Context Summary */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
          Synthesizing real-world terrestrial field study observations with Sentinel-2 multispectral remote sensing. 
          Addressing the fundamental spatial resolution and mixed-pixel barrier through deep neural super-resolution 
          and semantic land-cover segmentation.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#field-observations"
            className="px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] flex items-center gap-2"
          >
            <Eye className="w-4 h-4 text-slate-950" />
            <span>Explore Project</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>

          <a
            href="#methodology"
            className="px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900/90 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600 shadow-md transition-all hover:scale-[1.02] flex items-center gap-2"
          >
            <Workflow className="w-4 h-4 text-cyan-400" />
            <span>View Methodology</span>
          </a>

          <a
            href="#interactive-demo"
            className="px-6 py-3 rounded-xl text-sm font-semibold bg-cyan-950/60 text-cyan-300 hover:bg-cyan-900/60 border border-cyan-500/40 shadow-md transition-all hover:scale-[1.02] flex items-center gap-2"
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Launch Map Demo</span>
          </a>
        </div>

        {/* Key Project Spec Badges (Academic / Geospatial Telemetry) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10 text-left">
          
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm shadow-md">
            <div className="flex items-center justify-between text-cyan-400 mb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Data Source</span>
              <Globe2 className="w-4 h-4" />
            </div>
            <div className="text-lg font-bold text-white">Sentinel-2 MSI</div>
            <p className="text-[11px] text-slate-400 font-mono">13 Spectral Bands (10m–60m)</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm shadow-md">
            <div className="flex items-center justify-between text-emerald-400 mb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Native Res</span>
              <Eye className="w-4 h-4" />
            </div>
            <div className="text-lg font-bold text-white">10 m GSD</div>
            <p className="text-[11px] text-slate-400 font-mono">100 m² Pixel Footprint</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm shadow-md">
            <div className="flex items-center justify-between text-cyan-400 mb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Target Scale</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-lg font-bold text-white">4x Super-Res</div>
            <p className="text-[11px] text-slate-400 font-mono">~2.5 m Reconstructed GSD</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm shadow-md">
            <div className="flex items-center justify-between text-purple-400 mb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Classification</span>
              <Layers className="w-4 h-4" />
            </div>
            <div className="text-lg font-bold text-white">6 LULC Classes</div>
            <p className="text-[11px] text-slate-400 font-mono">+ Uncertainty Heatmap</p>
          </div>

        </div>

      </div>
    </section>
  );
};
