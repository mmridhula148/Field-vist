import React, { useState, useRef, useCallback } from 'react';
import {
  Grid,
  ZoomIn,
  Eye,
  AlertTriangle,
  Sparkles,
  Maximize2,
  Info,
  HelpCircle
} from 'lucide-react';

export const SliderCompare: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [showGrid, setShowGrid] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const hotspots = [
    {
      id: 'road',
      x: 32,
      y: 48,
      title: 'Sub-Pixel Asphalt Corridor (4m Width)',
      groundDetail: 'Clear single-lane asphalt roadway with painted edge lines and pedestrian path.',
      satelliteIssue: 'Width is less than half a 10m pixel; pixel values blend asphalt with grassy verge, creating broken gray fragments.'
    },
    {
      id: 'building',
      x: 65,
      y: 35,
      title: 'Residential Structure (12m x 10m)',
      groundDetail: 'Terracotta tiled roof with crisp geometric corners and distinct courtyard separation.',
      satelliteIssue: 'Spans roughly 1.2 pixels; corner pixels overlap lawn soil and vegetation, losing structural geometry.'
    },
    {
      id: 'bund',
      x: 78,
      y: 72,
      title: 'Agricultural Plot Bund (0.8m Width)',
      groundDetail: 'Raised earthen embankment separating wheat crop from adjacent fallow soil.',
      satelliteIssue: 'Completely unresolvable. Both parcels blend into a single intermediate spectral reflectance reading.'
    }
  ];

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
      {/* Top Header Bar */}
      <div className="px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-950/60">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
            <Eye className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              Visual Resolution Comparison Simulator
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Ground Observation Reality vs. Medium-Resolution 10 m Sentinel-2 Footprint
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowGrid(!showGrid)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
              showGrid
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-slate-200'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>10m Detector Grid (100 m²)</span>
          </button>
        </div>
      </div>

      {/* Comparison Canvas Area */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        className="relative h-[360px] sm:h-[460px] w-full select-none cursor-ew-resize overflow-hidden bg-slate-950"
      >
        {/* Layer 1: Medium-Resolution Satellite Simulated View (Base) */}
        <div className="absolute inset-0 w-full h-full">
          {/* Simulated 10m Pixelated Landscape */}
          <div className="w-full h-full relative overflow-hidden">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 460">
              <defs>
                {/* Pixelated Pattern Gradients */}
                <pattern id="pixelGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />
                </pattern>
              </defs>

              {/* Pixelated Rectangles representing 10m pixels */}
              <g id="satellite-pixels">
                {/* Background blended vegetation/soil */}
                <rect x="0" y="0" width="800" height="460" fill="#1e3a2b" />

                {/* Blurry Agricultural / Soil zones (low res blocks) */}
                <rect x="0" y="0" width="280" height="240" fill="#2d4a22" />
                <rect x="280" y="0" width="240" height="200" fill="#3d5a32" />
                <rect x="520" y="0" width="280" height="200" fill="#6e5a32" />
                <rect x="520" y="200" width="280" height="260" fill="#7a633a" />
                
                {/* Blurry Water Body */}
                <rect x="0" y="240" width="200" height="220" fill="#0f4559" />
                <rect x="200" y="240" width="80" height="220" fill="#1b5368" />
                
                {/* Blurry Road corridor (averaged into mixed gray-green pixels) */}
                <rect x="240" y="0" width="40" height="460" fill="#425559" opacity="0.8" />
                <rect x="280" y="160" width="240" height="40" fill="#4b5e62" opacity="0.85" />

                {/* Blurry Urban Built-up cluster (red-gray mixed pixels) */}
                <rect x="440" y="120" width="80" height="80" fill="#7c433c" />
                <rect x="520" y="120" width="80" height="80" fill="#884d46" />
                <rect x="480" y="200" width="80" height="80" fill="#693b35" />
              </g>

              {/* Pixel grid overlay */}
              {showGrid && (
                <rect x="0" y="0" width="800" height="460" fill="url(#pixelGrid)" />
              )}
            </svg>

            {/* Simulated Pixelation Filter Accent */}
            <div className="absolute inset-0 backdrop-blur-[2px] pointer-events-none opacity-40 bg-cyan-950/10"></div>
          </div>

          {/* Label for Right Side */}
          <div className="absolute top-4 right-4 bg-slate-900/90 border border-slate-700 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg">
            <span className="text-xs font-mono font-semibold text-amber-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              Medium-Res Satellite (10 m GSD)
            </span>
            <p className="text-[10px] text-slate-400 font-mono mt-0.5">
              Mixed pixel averaging &bull; Feature blur
            </p>
          </div>
        </div>

        {/* Layer 2: Ground Reality High-Definition View (Clipped via Slider) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="w-[800px] h-full relative" style={{ width: containerRef.current?.clientWidth || '100%' }}>
            {/* Fine Detailed Vector Landscape Representation */}
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 460">
              {/* High Detail Ground Reality */}
              <rect x="0" y="0" width="800" height="460" fill="#143423" />

              {/* Cultivated Fields with distinct rows and bunds */}
              <rect x="10" y="10" width="220" height="210" fill="#2d6a3f" rx="4" />
              <line x1="10" y1="60" x2="230" y2="60" stroke="#40916c" strokeWidth="2" strokeDasharray="4 2" />
              <line x1="10" y1="110" x2="230" y2="110" stroke="#40916c" strokeWidth="2" strokeDasharray="4 2" />
              <line x1="10" y1="160" x2="230" y2="160" stroke="#40916c" strokeWidth="2" strokeDasharray="4 2" />

              {/* Field 2 - Golden Wheat */}
              <rect x="290" y="10" width="220" height="135" fill="#52792e" rx="4" />
              <line x1="290" y1="50" x2="510" y2="50" stroke="#74a12e" strokeWidth="2" />
              <line x1="290" y1="90" x2="510" y2="90" stroke="#74a12e" strokeWidth="2" />

              {/* Field 3 - Fallow Brown soil with sharp 0.5m bund boundary */}
              <rect x="540" y="10" width="250" height="175" fill="#8c6239" rx="4" />
              <rect x="540" y="195" width="250" height="255" fill="#a07144" rx="4" />
              <line x1="540" y1="190" x2="790" y2="190" stroke="#d4a373" strokeWidth="3" />

              {/* Clear Water Pond with crisp shoreline and reeds */}
              <path d="M 10 250 Q 80 240, 150 270 T 210 380 Q 180 440, 60 450 T 10 420 Z" fill="#0284c7" />
              <path d="M 10 250 Q 80 240, 150 270 T 210 380 Q 180 440, 60 450 T 10 420 Z" fill="none" stroke="#38bdf8" strokeWidth="2" />

              {/* Sharp Asphalt Road with white center divider and shoulders */}
              <path d="M 255 0 L 255 460" stroke="#1e293b" strokeWidth="18" />
              <path d="M 255 0 L 255 460" stroke="#475569" strokeWidth="14" />
              <path d="M 255 0 L 255 460" stroke="#f8fafc" strokeWidth="1.5" strokeDasharray="8 6" />

              {/* Crossing Secondary Road */}
              <path d="M 255 180 L 530 180" stroke="#334155" strokeWidth="12" />
              <path d="M 255 180 L 530 180" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="6 4" />

              {/* Individual Residential Buildings with roof angles */}
              {/* House 1 */}
              <rect x="460" y="130" width="45" height="35" fill="#b91c1c" rx="2" stroke="#fca5a5" strokeWidth="1" />
              <polygon points="460,130 482,120 505,130" fill="#991b1b" />
              
              {/* House 2 */}
              <rect x="530" y="130" width="55" height="40" fill="#c2410c" rx="2" stroke="#fdba74" strokeWidth="1" />
              <line x1="557" y1="130" x2="557" y2="170" stroke="#7c2d12" strokeWidth="2" />

              {/* House 3 */}
              <rect x="475" y="210" width="50" height="40" fill="#9a3412" rx="2" stroke="#fed7aa" strokeWidth="1" />

              {/* Individual Tree Crowns (Circles with shadows) */}
              <circle cx="80" cy="180" r="14" fill="#15803d" stroke="#166534" strokeWidth="2" />
              <circle cx="110" cy="195" r="12" fill="#16a34a" stroke="#15803d" strokeWidth="2" />
              <circle cx="230" cy="90" r="10" fill="#15803d" />
              <circle cx="230" cy="120" r="11" fill="#16a34a" />
              <circle cx="430" cy="150" r="13" fill="#15803d" />
              <circle cx="440" cy="220" r="15" fill="#166534" />
            </svg>

            {/* Subtle Gradient Shadow along the split edge */}
            <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/40 to-transparent pointer-events-none"></div>
          </div>

          {/* Label for Left Side */}
          <div className="absolute top-4 left-4 bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg">
            <span className="text-xs font-mono font-semibold text-cyan-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Ground Reality (Sub-Meter Detail)
            </span>
            <p className="text-[10px] text-slate-400 font-mono mt-0.5">
              Sharp boundaries &bull; True geometries
            </p>
          </div>
        </div>

        {/* Hotspot Markers */}
        {hotspots.map((spot) => (
          <div
            key={spot.id}
            className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveHotspot(activeHotspot === spot.id ? null : spot.id);
              }}
              className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-lg shadow-cyan-500/40 hover:scale-125 transition-transform border border-white"
              title={spot.title}
            >
              !
            </button>
          </div>
        ))}

        {/* Interactive Hotspot Popover */}
        {activeHotspot && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 bg-slate-900/95 border border-cyan-500/50 rounded-xl p-4 max-w-md shadow-2xl backdrop-blur-xl animate-fade-in text-xs">
            {(() => {
              const spot = hotspots.find((h) => h.id === activeHotspot);
              if (!spot) return null;
              return (
                <div>
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800">
                    <span className="font-bold text-cyan-300 flex items-center gap-1.5">
                      <Info className="w-4 h-4 text-cyan-400" />
                      {spot.title}
                    </span>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="text-slate-400 hover:text-white text-xs px-1.5 py-0.5 rounded bg-slate-800"
                    >
                      Close
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-[11px]">
                    <div className="bg-cyan-950/30 p-2 rounded border border-cyan-500/20">
                      <span className="text-cyan-300 font-semibold block mb-0.5">Ground Reality:</span>
                      <p className="text-slate-300">{spot.groundDetail}</p>
                    </div>
                    <div className="bg-amber-950/30 p-2 rounded border border-amber-500/20">
                      <span className="text-amber-300 font-semibold block mb-0.5">10m Satellite:</span>
                      <p className="text-slate-300">{spot.satelliteIssue}</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Draggable Divider Line & Handle */}
        <div
          className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-[2px] h-full bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]"></div>
          <div className="absolute w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-xl flex items-center justify-center text-cyan-300 pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Footer Metrics & Explanation */}
      <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-4">
          <span><strong className="text-slate-200">Native Sentinel GSD:</strong> 10.0 m (100 m²/px)</span>
          <span><strong className="text-cyan-300">Target Super-Res GSD:</strong> 2.5 m (6.25 m²/px)</span>
        </div>
        <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>Drag slider horizontally or click numbered exclamation markers to inspect resolution bottlenecks.</span>
        </div>
      </div>
    </div>
  );
};
