import React from 'react';
import {
  Sparkles,
  ArrowDown,
  Layers,
  Cpu,
  Database,
  Filter,
  Activity,
  CheckCircle2,
  Workflow,
  Globe2
} from 'lucide-react';

export const ProposedSolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 &bull; Technical Architecture</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Deep Learning-Based Super-Resolution Mapping
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            To address the spatial resolution limitation discovered during field immersion, we propose an intelligent computational pipeline. By training a deep convolutional encoder-decoder neural network on paired spatial and spectral patterns, the model infers sub-pixel high-frequency structures—reconstructing finer spatial information from freely available Sentinel-2 imagery.
          </p>
        </div>

        {/* Visual Pipeline Flow Diagram */}
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          <div className="text-center max-w-xl mx-auto mb-10 space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              End-to-End Computational Flow
            </span>
            <h3 className="text-lg font-bold text-white">
              From Sentinel-2 Granules to Multi-Task Thematic Products
            </h3>
          </div>

          <div className="flex flex-col items-center space-y-4 relative z-10 max-w-4xl mx-auto">
            
            {/* Step 1: Sentinel-2 Imagery */}
            <div className="w-full sm:w-4/5 p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/30 shadow-lg flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                    Input Source
                  </span>
                  <h4 className="text-base font-bold text-white">Sentinel-2 Multispectral Imagery</h4>
                  <p className="text-xs text-slate-400 font-mono">13 Spectral Bands &bull; 10m / 20m / 60m GSD &bull; BOA Reflectance L2A</p>
                </div>
              </div>
              <span className="hidden md:inline-flex px-2.5 py-1 rounded bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700">
                L2A Ingestion
              </span>
            </div>

            {/* Down Arrow */}
            <div className="flex flex-col items-center text-cyan-400 py-1">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Step 2: Pre-processing */}
            <div className="w-full sm:w-4/5 p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-700 shadow-lg flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0">
                  <Filter className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                    Phase 01
                  </span>
                  <h4 className="text-base font-bold text-white">Pre-Processing & Spatial Harmonization</h4>
                  <p className="text-xs text-slate-400 font-mono">Cloud/Shadow SCL Masking &bull; Radiometric Normalization &bull; 10m Grid Alignment</p>
                </div>
              </div>
              <span className="hidden md:inline-flex px-2.5 py-1 rounded bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700">
                Rasterio &bull; NumPy
              </span>
            </div>

            {/* Down Arrow */}
            <div className="flex flex-col items-center text-cyan-400 py-1">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Step 3: Deep Learning Model */}
            <div className="w-full sm:w-4/5 p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-cyan-950/40 to-slate-950 border border-cyan-500/50 shadow-xl flex items-center justify-between gap-4 ring-2 ring-cyan-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-900/60 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold">
                    Phase 02 &bull; Core Engine
                  </span>
                  <h4 className="text-base font-bold text-white">Deep Learning Neural Architecture</h4>
                  <p className="text-xs text-slate-300 font-mono">Residual Convolutional U-Net &bull; Multi-Scale Feature Aggregation &bull; Sub-Pixel Upsampling</p>
                </div>
              </div>
              <span className="hidden md:inline-flex px-2.5 py-1 rounded bg-cyan-950 text-[10px] font-mono text-cyan-300 border border-cyan-500/30">
                PyTorch &bull; CUDA
              </span>
            </div>

            {/* Down Arrow */}
            <div className="flex flex-col items-center text-cyan-400 py-1">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Step 4: Super-Resolution Mapping */}
            <div className="w-full sm:w-4/5 p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-700 shadow-lg flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 shrink-0">
                  <Workflow className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                    Phase 03
                  </span>
                  <h4 className="text-base font-bold text-white">Super-Resolution Feature Synthesis</h4>
                  <p className="text-xs text-slate-400 font-mono">PixelShuffle Reconstruction &bull; 4x Spatial Scale Enhancement (~2.5m Ground Resolution)</p>
                </div>
              </div>
              <span className="hidden md:inline-flex px-2.5 py-1 rounded bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700">
                4x Upscaling
              </span>
            </div>

            {/* Branching Down Connectors */}
            <div className="flex flex-col items-center text-cyan-400 py-2">
              <ArrowDown className="w-5 h-5 animate-bounce" />
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-1">Multi-Task Synthesis Outputs</span>
            </div>

            {/* Step 5: Tri-Partite Output Matrix */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              
              {/* Output 1: Fine-Resolution Imagery */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/40 flex flex-col justify-between space-y-3 shadow-lg">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                    <span className="text-[10px] font-mono text-cyan-300">Deliverable 01</span>
                  </div>
                  <h5 className="text-sm font-bold text-white">Fine-Resolution Reconstructed Imagery</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Sub-pixel reconstructed multispectral raster with sharp road corridors, individual building perimeters, and parcel edges.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Format: 4-Band 32-bit GeoTIFF</span>
                  <a href="#interactive-map" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                    View in GIS &rarr;
                  </a>
                </div>
              </div>

              {/* Output 2: Land-Cover Map */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/40 flex flex-col justify-between space-y-3 shadow-lg">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="text-[10px] font-mono text-emerald-300">Deliverable 02</span>
                  </div>
                  <h5 className="text-sm font-bold text-white">Thematic Land-Cover Map</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Semantic segmentation raster classifying ground into 6 categories: Water, Built-up, Forest, Cropland, Shrub, and Bare Soil.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Format: Categorical Raster + Vector GeoJSON</span>
                  <a href="#interactive-map" className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1">
                    View in GIS &rarr;
                  </a>
                </div>
              </div>

              {/* Output 3: Confidence / Uncertainty Map */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-purple-500/40 flex flex-col justify-between space-y-3 shadow-lg">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                    <span className="text-[10px] font-mono text-purple-300">Deliverable 03</span>
                  </div>
                  <h5 className="text-sm font-bold text-white">Confidence & Uncertainty Map</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Per-pixel Bayesian entropy matrix quantifying spatial confidence and flagging mixed-pixel transition boundaries.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Format: Calibrated Entropy Float32 Array</span>
                  <a href="#interactive-map" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1">
                    View in GIS &rarr;
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
