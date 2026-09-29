import React from 'react';
import {
  Compass,
  MapPin,
  Eye,
  Camera,
  Layers,
  Sparkles,
  ArrowRight,
  Info,
  Scale
} from 'lucide-react';
import { FieldPhotoUploader } from '../components/FieldPhotoUploader';

export const FieldObservationsSection: React.FC = () => {
  return (
    <section id="field-observations" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>01 &bull; Immersion Field Study</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Field Observations & Ground Reality
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The foundation of this research emerges directly from our academic immersion field study. By traversing and documenting real-world ground conditions, six fundamental land categories were examined at eye level: <strong className="text-slate-200">buildings, roads, tree canopies, agricultural plots, water bodies, and open terrain</strong>.
          </p>
        </div>

        {/* Narrative Banner: From Ground Reality to Satellite Data */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/30 border border-cyan-500/30 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                From Ground Reality to Satellite Data
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                The Scale Mismatch Phenomenon
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <span className="font-semibold text-cyan-300 flex items-center gap-1.5 font-mono text-xs">
                <Eye className="w-4 h-4 text-cyan-400" /> Ground Field Perspective (Human Scale)
              </span>
              <p>
                Standing on the ground, human observers distinguish crisp structural edges, individual tree branches, narrow 3-meter asphalt lanes, 0.5-meter earthen agricultural bunds, and small roadside retention ponds. Every feature possesses sharp physical boundaries and distinct localized textural characteristics.
              </p>
            </div>

            <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <span className="font-semibold text-amber-300 flex items-center gap-1.5 font-mono text-xs">
                <Layers className="w-4 h-4 text-amber-400" /> Satellite Representation (10m–60m GSD)
              </span>
              <p>
                When observed from space via medium-resolution satellites (such as Sentinel-2), each detector pixel integrates radiance across a <strong className="text-amber-200">100 m² to 3,600 m² surface area</strong>. Fine sub-meter linear features, building geometries, and heterogeneous canopy patches blend together, resulting in spatial ambiguity.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Cards for Field Observations + Interactive Photo Preview */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-white">
                Observed Land Features & Photographic Catalog
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Standardized academic placeholders &bull; Interactive field photo preview tool
              </p>
            </div>
          </div>

          {/* Interactive Field Photo Uploader & Cards */}
          <FieldPhotoUploader />
        </div>

      </div>
    </section>
  );
};
