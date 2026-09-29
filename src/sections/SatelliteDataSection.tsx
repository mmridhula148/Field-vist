import React, { useState } from 'react';
import {
  Satellite,
  Layers,
  Sparkles,
  Info,
  Sliders,
  CheckCircle2,
  Filter,
  Eye,
  Activity
} from 'lucide-react';
import { SATELLITE_BANDS } from '../data/projectData';
import { SatelliteBand } from '../types';

export const SatelliteDataSection: React.FC = () => {
  const [activeResolutionFilter, setActiveResolutionFilter] = useState<string>('All');
  const [selectedBand, setSelectedBand] = useState<SatelliteBand>(SATELLITE_BANDS[3]); // B4 Red default

  const resolutions = ['All', '10 m', '20 m', '60 m'];

  const filteredBands = activeResolutionFilter === 'All'
    ? SATELLITE_BANDS
    : SATELLITE_BANDS.filter(b => b.spatialResolution === activeResolutionFilter);

  const bandCombinations = [
    {
      name: "True Color Natural RGB",
      bands: "B4 (Red) + B3 (Green) + B2 (Blue)",
      purpose: "Natural human-eye visual interpretation, urban areas, surface water color.",
      nativeRes: "10 m native"
    },
    {
      name: "False Color Color-Infrared (CIR)",
      bands: "B8 (NIR) + B4 (Red) + B3 (Green)",
      purpose: "Vegetation health, biomass vigor (appears bright red), water/land boundary contrast.",
      nativeRes: "10 m native"
    },
    {
      name: "Agriculture & Moisture Analysis",
      bands: "B11 (SWIR-1) + B8 (NIR) + B2 (Blue)",
      purpose: "Crop moisture dynamics, bare soil vs active crop canopy, irrigation status.",
      nativeRes: "10 m / 20 m composite"
    },
    {
      name: "Vegetation Red-Edge Index",
      bands: "B8A (NIR) + B5 (Red Edge 1) + B4 (Red)",
      purpose: "Chlorophyll concentration, leaf area index, senescent vegetation stress.",
      nativeRes: "10 m / 20 m composite"
    }
  ];

  return (
    <section id="satellite-data" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Satellite className="w-3.5 h-3.5" />
            <span>05 &bull; Earth Observation Data</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Copernicus Sentinel-2 MSI Specifications
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The European Space Agency (ESA) Sentinel-2 constellation carries the MultiSpectral Instrument (MSI), capturing 13 spectral bands spanning the visible, near-infrared (VNIR), red-edge, and shortwave-infrared (SWIR) domains across three native spatial resolution regimes.
          </p>
        </div>

        {/* Spatial Resolution Regime Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950/40 border border-cyan-500/50 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-cyan-500 text-slate-950">
                10 m Native GSD
              </span>
              <span className="text-xs font-mono text-cyan-300 font-semibold">4 Bands</span>
            </div>
            <h3 className="text-lg font-bold text-white">Visible & Broad NIR</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Bands: B2 (Blue), B3 (Green), B4 (Red), B8 (NIR).</strong><br />
              Highest native spatial resolution available. Each pixel covers 100 m² ground area, serving as the spatial geometric backbone for super-resolution target alignment.
            </p>
            <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-cyan-400">
              Detector Pixel: 10 m x 10 m (100 m²)
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-slate-800 text-amber-300 border border-amber-500/30">
                20 m Spatial GSD
              </span>
              <span className="text-xs font-mono text-slate-400 font-semibold">6 Bands</span>
            </div>
            <h3 className="text-lg font-bold text-white">Red-Edge & SWIR Channels</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Bands: B5, B6, B7, B8A, B11, B12.</strong><br />
              Critical for biochemical vegetation stress, leaf chlorophyll estimation, soil moisture, and geological mineral discrimination. Each pixel covers 400 m².
            </p>
            <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-amber-400">
              Detector Pixel: 20 m x 20 m (400 m²)
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-slate-800 text-purple-300 border border-purple-500/30">
                60 m Atmospheric GSD
              </span>
              <span className="text-xs font-mono text-slate-400 font-semibold">3 Bands</span>
            </div>
            <h3 className="text-lg font-bold text-white">Atmospheric & Cirrus</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Bands: B1 (Coastal Aerosol), B9 (Water Vapour), B10 (Cirrus).</strong><br />
              Dedicated to radiative transfer correction, column water vapor modeling, and cloud contamination masking. Each pixel covers 3,600 m².
            </p>
            <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-purple-400">
              Detector Pixel: 60 m x 60 m (3,600 m²)
            </div>
          </div>

        </div>

        {/* 13 Bands Explorer Table / Cards */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white">
                13 Spectral Bands Directory
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Wavelengths &bull; Bandwidths &bull; Remote Sensing Applications
              </p>
            </div>

            {/* Resolution filter pills */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400">Filter GSD:</span>
              <div className="flex rounded-lg bg-slate-900 p-1 border border-slate-800">
                {resolutions.map((res) => (
                  <button
                    key={res}
                    onClick={() => setActiveResolutionFilter(res)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                      activeResolutionFilter === res
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {res}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredBands.map((b) => {
              const is10m = b.spatialResolution === '10 m';
              const is20m = b.spatialResolution === '20 m';
              return (
                <div
                  key={b.band}
                  onClick={() => setSelectedBand(b)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all flex flex-col justify-between space-y-3 ${
                    selectedBand.band === b.band
                      ? 'bg-cyan-950/80 border-cyan-500/80 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/40'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-mono font-bold text-white">
                        {b.band}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                        is10m
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : is20m
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                      }`}>
                        {b.spatialResolution}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-200">
                      {b.name}
                    </h4>

                    <div className="text-[11px] font-mono text-slate-400 space-y-0.5 pt-1">
                      <div>λ: <span className="text-slate-200">{b.centralWavelength}</span> (Δλ {b.bandwidth})</div>
                      <div>Domain: <span className="text-cyan-300">{b.category}</span></div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-snug line-clamp-2 pt-2 border-t border-slate-800/80">
                    {b.purpose}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Spectral Band Combinations Guide */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Standard Remote Sensing Band Combinations</span>
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Multispectral synthesis for target feature discrimination
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bandCombinations.map((combo, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                    Preset #{idx + 1}
                  </span>
                  <h4 className="text-xs font-bold text-white">{combo.name}</h4>
                  <div className="text-[11px] font-mono text-amber-300 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                    {combo.bands}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug pt-1">
                    {combo.purpose}
                  </p>
                </div>
                <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800">
                  Res: {combo.nativeRes}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
