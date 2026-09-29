import React from 'react';
import {
  Code2,
  Cpu,
  Layers,
  Database,
  Binary,
  MapPin,
  Server,
  Send,
  Monitor,
  Box,
  Terminal,
  Sparkles
} from 'lucide-react';
import { TECH_STACK_ITEMS } from '../data/projectData';

export const TechStackSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-yellow-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-red-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Binary': return <Binary className="w-5 h-5 text-blue-400" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-green-400" />;
      case 'Server': return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Send': return <Send className="w-5 h-5 text-teal-400" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-sky-400" />;
      case 'Box': return <Box className="w-5 h-5 text-purple-400" />;
      default: return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  const categories = [
    { name: "Programming & Deep Learning", items: TECH_STACK_ITEMS.filter(t => t.category === 'Programming' || t.category === 'Deep Learning') },
    { name: "Geospatial & Image Processing", items: TECH_STACK_ITEMS.filter(t => t.category === 'Image Processing' || t.category === 'GIS & Spatial') },
    { name: "Backend, WebGIS & Infrastructure", items: TECH_STACK_ITEMS.filter(t => t.category === 'Backend API' || t.category === 'Mapping & UI' || t.category === 'Deployment') },
  ];

  return (
    <section id="tech-stack" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>09 &bull; Technology Architecture</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Scientific & Geospatial Technology Stack
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Engineered using industry-standard scientific Python libraries, PyTorch deep learning frameworks, high-performance GDAL raster bindings, PostGIS spatial databases, and Leaflet WebGIS cartography.
          </p>
        </div>

        {/* Categorized Tech Stack */}
        <div className="space-y-10">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2 border-b border-slate-800 pb-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>{cat.name}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cat.items.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between space-y-3 shadow-md hover:shadow-cyan-500/5 group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 group-hover:border-cyan-500/40 transition-colors">
                          {getIcon(tech.icon)}
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {tech.versionOrSpec}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {tech.name}
                        </h4>
                        <span className="text-[10px] font-mono text-cyan-400">
                          {tech.category}
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {tech.purpose}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
                      Core Research Pipeline
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
