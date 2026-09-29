import React from 'react';
import {
  ShieldCheck,
  ArrowRight,
  ArrowDown,
  BarChart3,
  CheckCircle2,
  Clock,
  Info,
  Scale,
  Target,
  FileSpreadsheet
} from 'lucide-react';
import { VALIDATION_METRICS } from '../data/projectData';

export const FieldValidationSection: React.FC = () => {
  return (
    <section id="validation" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>07 &bull; Field Ground Truthing & Validation</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Field Validation & Quantitative Evaluation Framework
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A core scientific pillar of this immersion project is leveraging real-world field study observations as qualitative and quantitative ground truth benchmarks to systematically validate model outputs.
          </p>
        </div>

        {/* Validation Pipeline Flow */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Scale className="w-4 h-4 text-cyan-400" />
              <span>Ground Truth Validation Pipeline</span>
            </h3>
            <span className="text-xs font-mono text-cyan-300">Co-Registration Protocol</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            
            {/* Step 1: Field Observation */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-center md:text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                Stage 01
              </span>
              <h4 className="text-sm font-bold text-white">Field Observation</h4>
              <p className="text-[11px] text-slate-400 leading-snug">
                Geotagged ground photographs, polygon sketches, and feature field notes.
              </p>
            </div>

            {/* Step 2: Satellite Representation */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-center md:text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                Stage 02
              </span>
              <h4 className="text-sm font-bold text-white">Satellite Representation</h4>
              <p className="text-[11px] text-slate-400 leading-snug">
                Corresponding 10m Sentinel-2 multi-spectral footprint extracted via spatial CRS.
              </p>
            </div>

            {/* Step 3: Model Output */}
            <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/40 space-y-2 text-center md:text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                Stage 03
              </span>
              <h4 className="text-sm font-bold text-white">Model Output</h4>
              <p className="text-[11px] text-slate-400 leading-snug">
                Super-resolved raster and semantic land-cover segmentation prediction.
              </p>
            </div>

            {/* Step 4: Comparison / Validation */}
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 space-y-2 text-center md:text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                Stage 04
              </span>
              <h4 className="text-sm font-bold text-white">Comparison / Validation</h4>
              <p className="text-[11px] text-slate-400 leading-snug">
                Confusion matrix, IoU computation, and spectral reconstruction error analysis.
              </p>
            </div>

          </div>
        </div>

        {/* Academic Validation Metrics Grid (With Status Badges: Pending Model Training) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <span>Standard Remote Sensing Evaluation Metrics</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Formulae &bull; Evaluation Objectives &bull; Rigorous Non-Fabricated Status
              </p>
            </div>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>Evaluation metrics to be calculated after model training</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALIDATION_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                      {metric.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950/70 text-amber-300 border border-amber-500/30 font-semibold">
                      {metric.status}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white">
                      {metric.name}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-mono block">
                      {metric.fullName}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 text-[11px] font-mono text-cyan-300 text-center overflow-x-auto">
                    {metric.formula}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500">Benchmark Target:</span>
                  <span className="text-slate-300 font-medium">{metric.targetRange}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Integrity Note */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-200">Scientific Integrity Note:</strong> In accordance with strict academic guidelines, no synthetic numerical performance metrics are fabricated. Exact numerical values for IoU, F1-Score, PSNR, SSIM, and RMSE will be logged directly from testing checkpoints upon training finalization with ground reference datasets.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
