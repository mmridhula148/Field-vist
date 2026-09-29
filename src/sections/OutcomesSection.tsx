import React from 'react';
import {
  Sparkles,
  Layers,
  MapPin,
  Activity,
  FileCheck2,
  CheckCircle,
  Database,
  Globe,
  Monitor
} from 'lucide-react';

export const OutcomesSection: React.FC = () => {
  const outcomes = [
    {
      title: "Enhanced Fine-Resolution Imagery",
      subtitle: "Sub-pixel Reconstructed 4-Band Rasters",
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      tag: "4x Spatial Upscaling (~2.5m GSD)",
      description: "Reconstructed multispectral image tiles exhibiting sharp structural boundaries, resolving sub-pixel roads, residential footprints, and distinct field bund lines previously merged in 10m pixels.",
      deliverable: "Cloud-Optimized GeoTIFF (COG)"
    },
    {
      title: "Fine-Resolution Land-Cover Maps",
      subtitle: "Multi-Class Semantic Segmentation",
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      tag: "6 Thematic Classes",
      description: "High-granularity thematic raster and vector shapefiles classifying ground reality into Water Bodies, Built-up Structures, Forest Canopies, Cropland, Shrubland, and Bare Soil.",
      deliverable: "Classified Thematic Raster + Vector Shapefile"
    },
    {
      title: "Confidence & Uncertainty Maps",
      subtitle: "Bayesian Entropy & Reliability Surface",
      icon: <Activity className="w-5 h-5 text-purple-400" />,
      tag: "Pixel-Level Epistemic Score",
      description: "Calibrated spatial uncertainty layers highlighting transition boundaries, ambiguous spectral mixtures, and model confidence scores across heterogeneous terrain.",
      deliverable: "Uncertainty Heatmap Array [0.0 - 1.0]"
    },
    {
      title: "Interactive WebGIS Visualization Platform",
      subtitle: "Dynamic Layer Blending & Query Tool",
      icon: <Monitor className="w-5 h-5 text-sky-400" />,
      tag: "Open-Access Web Interface",
      description: "A fully responsive, browser-accessible GIS cartographic platform featuring multi-layer toggles, opacity controllers, coordinates inspector, and downloadable spatial layers.",
      deliverable: "React + Leaflet Production WebGIS"
    }
  ];

  return (
    <section id="outcomes" className="py-24 relative border-t border-slate-800/80 bg-[#070b16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>10 &bull; Project Deliverables</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Expected Research Outputs & Deliverables
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The project delivers a cohesive suite of geospatial artifacts designed to advance academic research and support ground-informed decision-making.
          </p>
        </div>

        {/* 4 Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between space-y-5 shadow-xl group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 group-hover:border-cyan-500/40 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    {item.subtitle}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">Target Output:</span>
                <span className="text-cyan-300 font-semibold">{item.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
