import React, { useState } from 'react';
import {
  Workflow,
  ChevronRight,
  Cpu,
  Layers,
  Sparkles,
  Database,
  Sliders,
  CheckCircle2,
  Clock,
  ArrowRight,
  ExternalLink,
  Info
} from 'lucide-react';
import { METHODOLOGY_STEPS, MODEL_ARCHITECTURES } from '../data/projectData';
import { MethodologyStep } from '../types';

export const MethodologySection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<MethodologyStep>(METHODOLOGY_STEPS[0]);

  return (
    <section id="methodology" className="py-24 relative border-t border-slate-800/80 bg-[#070b16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Workflow className="w-3.5 h-3.5" />
            <span>04 &bull; Technical Methodology</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            10-Step Algorithmic & Processing Pipeline
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The project methodology spans ten systematically structured stages—from raw L2A multispectral ingestion to cloud masking, band interpolation, deep learning super-resolution, land-cover segmentation, Bayesian uncertainty estimation, and interactive WebGIS cartography.
          </p>
        </div>

        {/* 10-Step Interactive Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Step Selector List (5 Cols) */}
          <div className="lg:col-span-5 space-y-2 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
            {METHODOLOGY_STEPS.map((step) => {
              const isSelected = selectedStep.stepNumber === step.stepNumber;
              return (
                <div
                  key={step.stepNumber}
                  onClick={() => setSelectedStep(step)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-cyan-950/70 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold px-2 py-1 rounded-md ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-800 text-cyan-400'
                    }`}>
                      {step.stepNumber}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        {step.shortDesc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-cyan-300 translate-x-1' : 'text-slate-600'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Detailed Step Inspector Card (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6">
            <div className="space-y-6">
              
              {/* Step Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl font-mono font-extrabold text-cyan-400">
                    {selectedStep.stepNumber}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Pipeline Phase {parseInt(selectedStep.stepNumber)} of 10
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {selectedStep.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* In-depth description */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold block">
                  Methodology Description
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  {selectedStep.detailedDesc}
                </p>
              </div>

              {/* Inputs and Outputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Input Data
                  </span>
                  <p className="text-xs text-slate-200 font-medium">
                    {selectedStep.inputs}
                  </p>
                </div>

                <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block">
                    Output Product
                  </span>
                  <p className="text-xs text-slate-200 font-medium">
                    {selectedStep.outputs}
                  </p>
                </div>
              </div>

              {/* Tools & Modules Used */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  Algorithms, Libraries & Frameworks:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedStep.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Step navigation buttons */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              <button
                onClick={() => {
                  const idx = parseInt(selectedStep.stepNumber) - 1;
                  if (idx > 0) setSelectedStep(METHODOLOGY_STEPS[idx - 1]);
                }}
                disabled={parseInt(selectedStep.stepNumber) === 1}
                className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300 transition-colors"
              >
                &larr; Previous Step
              </button>

              <span className="text-slate-500">
                Step {parseInt(selectedStep.stepNumber)} / 10
              </span>

              <button
                onClick={() => {
                  const idx = parseInt(selectedStep.stepNumber) - 1;
                  if (idx < METHODOLOGY_STEPS.length - 1) setSelectedStep(METHODOLOGY_STEPS[idx + 1]);
                }}
                disabled={parseInt(selectedStep.stepNumber) === METHODOLOGY_STEPS.length}
                className="px-3 py-1.5 rounded bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Next Step &rarr;
              </button>
            </div>

          </div>

        </div>

        {/* Model Architecture Matrix: Initial Approach vs Future Scope */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span>Deep Learning Architecture Strategy</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Initial Implemented Baseline vs. Proposed Future Architectural Enhancements
              </p>
            </div>
            <span className="text-xs font-mono text-amber-400 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-md self-start sm:self-auto">
              Future scopes labeled for research clarity
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MODEL_ARCHITECTURES.map((model, idx) => {
              const isInitial = model.category === 'Initial Approach';
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-4 ${
                    isInitial
                      ? 'bg-gradient-to-br from-slate-900 to-cyan-950/40 border-cyan-500/50 shadow-lg ring-1 ring-cyan-500/20'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold ${
                        isInitial
                          ? 'bg-cyan-500 text-slate-950'
                          : 'bg-slate-800 text-purple-300 border border-purple-500/30'
                      }`}>
                        {model.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {model.status}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white">
                      {model.name}
                    </h4>

                    <p className="text-xs text-slate-300 font-mono bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                      <strong>Architecture:</strong> {model.architecture}
                    </p>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-emerald-400 font-semibold block text-[11px] font-mono">Strengths:</span>
                        <p className="text-slate-400">{model.strengths}</p>
                      </div>
                      <div>
                        <span className="text-amber-400 font-semibold block text-[11px] font-mono">Research Trade-offs:</span>
                        <p className="text-slate-400">{model.limitations}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                    <span>{isInitial ? 'Baseline Implementation' : 'Planned Future Investigation'}</span>
                    <span className={isInitial ? 'text-cyan-400 font-bold' : 'text-slate-500'}>
                      {isInitial ? 'Active Pipeline' : 'Academic Scope'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
