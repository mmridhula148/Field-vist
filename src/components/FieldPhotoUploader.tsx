import React, { useState } from 'react';
import {
  Camera,
  Upload,
  Image as ImageIcon,
  Tag,
  MapPin,
  CheckCircle2,
  Trash2,
  Eye,
  Info,
  Sparkles,
  Building2,
  Route,
  Trees,
  Wheat,
  Waves,
  Mountain
} from 'lucide-react';
import { FIELD_OBSERVATIONS } from '../data/projectData';
import { FieldObservation } from '../types';

export const FieldPhotoUploader: React.FC = () => {
  const [selectedObs, setSelectedObs] = useState<FieldObservation>(FIELD_OBSERVATIONS[0]);
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});
  const [previewModalImage, setPreviewModalImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-red-400" />;
      case 'Route': return <Route className="w-5 h-5 text-amber-400" />;
      case 'Trees': return <Trees className="w-5 h-5 text-emerald-400" />;
      case 'Wheat': return <Wheat className="w-5 h-5 text-yellow-400" />;
      case 'Waves': return <Waves className="w-5 h-5 text-cyan-400" />;
      case 'Mountain': return <Mountain className="w-5 h-5 text-orange-400" />;
      default: return <Camera className="w-5 h-5 text-cyan-400" />;
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, obsId: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomPhotos((prev) => ({
            ...prev,
            [obsId]: event.target?.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = (obsId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomPhotos((prev) => {
      const updated = { ...prev };
      delete updated[obsId];
      return updated;
    });
  };

  const categories = ['All', 'Built Environment', 'Infrastructure', 'Natural Canopy', 'Agriculture', 'Hydrology', 'Terrestrial Surface'];

  const filteredObservations = activeFilter === 'All'
    ? FIELD_OBSERVATIONS
    : FIELD_OBSERVATIONS.filter(obs => obs.category === activeFilter);

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="text-xs font-mono text-cyan-400/90 flex items-center gap-1.5 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Preview Enabled</span>
        </div>
      </div>

      {/* Grid of Observation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredObservations.map((obs) => {
          const hasCustomPhoto = !!customPhotos[obs.id];
          const isCurrentSelected = selectedObs.id === obs.id;

          return (
            <div
              key={obs.id}
              onClick={() => setSelectedObs(obs)}
              className={`group cursor-pointer rounded-2xl bg-slate-900/80 border transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:shadow-cyan-500/5 ${
                isCurrentSelected
                  ? 'border-cyan-500/70 ring-2 ring-cyan-500/20 bg-slate-900/95'
                  : 'border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {/* Photo Card Preview Area with Placeholder Graphic */}
              <div className="relative h-48 w-full bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-800/80">
                {hasCustomPhoto ? (
                  <img
                    src={customPhotos[obs.id]}
                    alt={obs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  /* Professional Academic Placeholder Graphic */
                  <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-900/90 to-slate-950/95">
                    {/* SVG Abstract Grid Pattern representing ground capture */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    
                    <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center mb-3 shadow-inner group-hover:border-cyan-500/40 transition-colors">
                      {getIcon(obs.iconName)}
                    </div>

                    <div className="space-y-1 relative z-10">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300/90 font-medium flex items-center justify-center gap-1">
                        <MapPin className="w-3 h-3 text-cyan-400" /> Study Area &bull; Ground Camera
                      </span>
                      <p className="text-xs text-slate-300 font-medium line-clamp-2 px-2">
                        {obs.photoPlaceholder}
                      </p>
                    </div>

                    <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      Field Photo Placeholder
                    </span>
                  </div>
                )}

                {/* Top status overlay badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-slate-900/90 backdrop-blur-md text-slate-300 border border-slate-700/80 shadow-sm">
                    {obs.category}
                  </span>
                </div>

                {/* Upload or action buttons */}
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
                  {hasCustomPhoto ? (
                    <button
                      onClick={(e) => handleRemovePhoto(obs.id, e)}
                      className="p-1.5 rounded-md bg-red-950/80 hover:bg-red-900 text-red-300 border border-red-500/30 transition-colors"
                      title="Remove uploaded photograph"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <label
                      onClick={(e) => e.stopPropagation()}
                      className="cursor-pointer p-1.5 rounded-md bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/40 transition-colors flex items-center gap-1 text-[10px] font-mono"
                      title="Upload your field study photograph"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, obs.id)}
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Card Body Information */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{obs.title}</span>
                  </h4>
                  
                  {/* Ground Observation note */}
                  <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-1 flex items-center gap-1">
                      <Eye className="w-3 h-3" /> Ground Field Observation
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {obs.groundDescription}
                    </p>
                  </div>

                  {/* Satellite Challenge note */}
                  <div className="bg-amber-950/20 p-3 rounded-xl border border-amber-500/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold block mb-1 flex items-center gap-1">
                      <Info className="w-3 h-3" /> 10m Satellite Challenge
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {obs.satelliteChallenge}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {obs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Field Photo Upload Note Banner */}
      <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-cyan-900/50 text-cyan-300 shrink-0">
            <Camera className="w-4 h-4" />
          </div>
          <div className="text-xs text-slate-300 space-y-0.5">
            <span className="font-semibold text-white block">
              Field Study Documentation Standard
            </span>
            <p className="text-slate-400">
              All field cards feature standardized academic placeholders (<code className="text-cyan-300 font-mono">“Study Area”</code>, <code className="text-cyan-300 font-mono">“Field Observation Photo”</code>, <code className="text-cyan-300 font-mono">“Location to be added”</code>). Use the interactive upload buttons above to preview actual field photographs seamlessly during presentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
