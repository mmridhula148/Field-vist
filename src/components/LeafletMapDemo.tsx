import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Layers,
  Eye,
  Sliders,
  Sparkles,
  Compass,
  Crosshair,
  Activity,
  MapPin,
  Tag
} from 'lucide-react';
import { STUDY_PRESETS, LAND_COVER_CLASSES } from '../data/projectData';
import { StudyAreaPreset } from '../types';

export const LeafletMapDemo: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const layersGroupRef = useRef<any>(null);
  const markersGroupRef = useRef<any>(null);
  const probeMarkerRef = useRef<any>(null);

  const [selectedPreset, setSelectedPreset] = useState<StudyAreaPreset>(STUDY_PRESETS[0]);
  const [activeLayer, setActiveLayer] = useState<'sentinel' | 'superres' | 'landcover' | 'uncertainty'>('landcover');
  const [opacity, setOpacity] = useState<number>(85);
  const [showDemoMarkers, setShowDemoMarkers] = useState<boolean>(true);
  const [probeData, setProbeData] = useState<{
    lat: number;
    lng: number;
    predictedClass: string;
    classColor: string;
    confidence: number;
    b2: number;
    b3: number;
    b4: number;
    b8: number;
    uncertaintyScore: number;
  }>({
    lat: STUDY_PRESETS[0].coordinates[0],
    lng: STUDY_PRESETS[0].coordinates[1],
    predictedClass: 'Agricultural Cropland',
    classColor: '#eab308',
    confidence: 94.2,
    b2: 0.082,
    b3: 0.124,
    b4: 0.068,
    b8: 0.485,
    uncertaintyScore: 0.12
  });

  // Helper to initialize Leaflet Map safely with OpenStreetMap tiles
  useEffect(() => {
    let isMounted = true;

    const initMap = async () => {
      if (typeof window === 'undefined' || !mapContainerRef.current) return;

      const leaflet = L || (window as any).L;
      if (!leaflet) {
        console.warn('Leaflet not loaded yet.');
        return;
      }

      if (!mapInstanceRef.current && mapContainerRef.current) {
        const map = L.map(mapContainerRef.current, {
          center: selectedPreset.coordinates,
          zoom: selectedPreset.zoom,
          zoomControl: false,
        });

        // Add Standard OpenStreetMap Base Tile Layer (No API Key Required)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map);

        // Add Zoom Control at bottom right
        L.control.zoom({ position: 'bottomright' }).addTo(map);

        // Create overlay layers group and demo markers group
        const layerGroup = L.layerGroup().addTo(map);
        const markersGroup = L.layerGroup().addTo(map);
        layersGroupRef.current = layerGroup;
        markersGroupRef.current = markersGroup;
        mapInstanceRef.current = map;

        // Click handler for pixel probing
        map.on('click', (e: any) => {
          const lat = parseFloat(e.latlng.lat.toFixed(5));
          const lng = parseFloat(e.latlng.lng.toFixed(5));
          
          // Deterministic remote sensing simulated spectral values
          const hash = Math.abs(Math.sin(lat * 1000 + lng * 2000));
          const classIdx = Math.floor(hash * LAND_COVER_CLASSES.length);
          const chosenClass = LAND_COVER_CLASSES[classIdx];
          const conf = 85 + (hash * 14.5);
          const uncert = parseFloat(((100 - conf) / 100).toFixed(3));

          setProbeData({
            lat,
            lng,
            predictedClass: chosenClass.name,
            classColor: chosenClass.hex,
            confidence: parseFloat(conf.toFixed(1)),
            b2: parseFloat((0.04 + hash * 0.08).toFixed(3)),
            b3: parseFloat((0.06 + hash * 0.10).toFixed(3)),
            b4: parseFloat((0.03 + hash * 0.09).toFixed(3)),
            b8: parseFloat((0.25 + hash * 0.45).toFixed(3)),
            uncertaintyScore: uncert,
          });

          // Move or create probe marker
          if (probeMarkerRef.current) {
            probeMarkerRef.current.setLatLng([lat, lng]);
          } else {
            const probeIcon = L.divIcon({
              className: 'custom-probe-pin',
              html: `<div class="w-6 h-6 rounded-full bg-cyan-500 border-2 border-white shadow-lg flex items-center justify-center animate-pulse"><div class="w-2 h-2 rounded-full bg-slate-950"></div></div>`,
              iconSize: [24, 24],
              iconAnchor: [12, 12]
            });
            probeMarkerRef.current = L.marker([lat, lng], { icon: probeIcon }).addTo(map);
          }
        });
      }

      renderSimulatedLayers();
      renderDemoMarkers();
    };

    initMap();

    return () => {
      isMounted = false;
    };
  }, []);

  // Update map view when preset changes
  useEffect(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(selectedPreset.coordinates, selectedPreset.zoom, {
        duration: 1.2
      });
      renderSimulatedLayers();
      renderDemoMarkers();
    }
  }, [selectedPreset]);

  // Re-render simulated overlay layers when activeLayer or opacity changes
  useEffect(() => {
    renderSimulatedLayers();
  }, [activeLayer, opacity]);

  // Toggle demo markers
  useEffect(() => {
    renderDemoMarkers();
  }, [showDemoMarkers, selectedPreset]);

  // Render sample markers for: Vegetation, Built-up Area, Agricultural Area, Water Body
  const renderDemoMarkers = () => {
    if (!L || !markersGroupRef.current) return;

    markersGroupRef.current.clearLayers();
    if (!showDemoMarkers) return;

    const [centerLat, centerLng] = selectedPreset.coordinates;

    const demoPoints = [
      {
        name: 'Vegetation Sample',
        category: 'Dense Tree Canopy',
        color: '#10b981',
        bgClass: 'bg-emerald-500',
        coords: [centerLat + 0.0045, centerLng - 0.0055],
        iconSymbol: '🌲',
        description: 'Sample point for canopy boundary segmentation in demo zone.'
      },
      {
        name: 'Built-up Area Sample',
        category: 'Urban / Residential',
        color: '#ef4444',
        bgClass: 'bg-red-500',
        coords: [centerLat - 0.0035, centerLng + 0.0045],
        iconSymbol: '🏢',
        description: 'Sample point for sub-pixel building footprint detection.'
      },
      {
        name: 'Agricultural Area Sample',
        category: 'Cropland & Cultivation',
        color: '#eab308',
        bgClass: 'bg-yellow-500',
        coords: [centerLat + 0.0055, centerLng + 0.0050],
        iconSymbol: '🌾',
        description: 'Sample point for agricultural parcel delineation and NDVI probe.'
      },
      {
        name: 'Water Body Sample',
        category: 'Surface Water Basin',
        color: '#0ea5e9',
        bgClass: 'bg-cyan-500',
        coords: [centerLat - 0.0050, centerLng - 0.0045],
        iconSymbol: '💧',
        description: 'Sample point for water mask demarcation and NDWI analysis.'
      }
    ];

    demoPoints.forEach((pt) => {
      const customIcon = L.divIcon({
        className: 'custom-demo-pin',
        html: `
          <div class="group relative cursor-pointer flex items-center justify-center">
            <div class="w-7 h-7 rounded-full ${pt.bgClass} text-white shadow-lg border-2 border-slate-900 flex items-center justify-center text-xs font-bold transform transition-transform hover:scale-125">
              ${pt.iconSymbol}
            </div>
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      const popupHtml = `
        <div style="min-width: 190px; font-family: 'Inter', sans-serif; color: #0f172a; padding: 2px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 10px; font-weight: 700; color: ${pt.color}; text-transform: uppercase; letter-spacing: 0.5px;">
              ${pt.category}
            </span>
            <span style="font-size: 9px; background: #e2e8f0; color: #475569; padding: 1px 5px; border-radius: 4px; font-family: monospace;">
              Demo Data
            </span>
          </div>
          <div style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 3px;">
            ${pt.name}
          </div>
          <div style="font-size: 11px; color: #64748b; line-height: 1.4; margin-bottom: 6px;">
            ${pt.description}
          </div>
          <div style="border-top: 1px solid #e2e8f0; padding-top: 4px; font-size: 9px; color: #94a3b8; font-family: monospace;">
            Lat: ${pt.coords[0].toFixed(4)}°N, Lng: ${pt.coords[1].toFixed(4)}°E<br>
            <span style="color: #ea580c; font-weight: 600;">[Demo Study Area — Prototype Visualization]</span>
          </div>
        </div>
      `;

      const marker = L.marker(pt.coords, { icon: customIcon }).bindPopup(popupHtml, {
        closeButton: true,
        className: 'custom-leaflet-popup'
      });
      markersGroupRef.current.addLayer(marker);
    });
  };

  const renderSimulatedLayers = () => {
    if (!L || !mapInstanceRef.current || !layersGroupRef.current) return;

    layersGroupRef.current.clearLayers();

    const [centerLat, centerLng] = selectedPreset.coordinates;
    const delta = 0.012; // Bounding box offset ~ 1.5 km x 1.5 km

    const bounds = [
      [centerLat - delta, centerLng - delta],
      [centerLat + delta, centerLng + delta]
    ];

    // Generate Canvas Overlay for layer simulation
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.clearRect(0, 0, 512, 512);

      if (activeLayer === 'sentinel') {
        // Simulated 10m Sentinel-2 Pixels (Coarse blocks)
        const blockSize = 16;
        for (let x = 0; x < 512; x += blockSize) {
          for (let y = 0; y < 512; y += blockSize) {
            const noise = Math.sin(x * 0.05) * Math.cos(y * 0.05);
            const r = Math.floor(60 + noise * 30 + (x > 250 ? 50 : 0));
            const g = Math.floor(110 + noise * 40 + (y < 200 ? 40 : 0));
            const b = Math.floor(70 + noise * 20 + (x < 150 && y > 300 ? 80 : 0));
            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.fillRect(x, y, blockSize, blockSize);
          }
        }
      } else if (activeLayer === 'superres') {
        // Simulated 4x Super-Resolution Reconstructed Layer
        const gradient = ctx.createLinearGradient(0, 0, 512, 512);
        gradient.addColorStop(0, '#2d6a4f');
        gradient.addColorStop(0.35, '#52796f');
        gradient.addColorStop(0.7, '#84a98c');
        gradient.addColorStop(1, '#cad2c5');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 512, 512);

        // Sharp linear features
        ctx.strokeStyle = '#f8fafc';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(180, 0);
        ctx.lineTo(180, 512);
        ctx.stroke();

        ctx.strokeStyle = '#0284c7';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(0, 320);
        ctx.quadraticCurveTo(256, 280, 512, 360);
        ctx.stroke();

        // Sharp building footprints
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(260, 140, 36, 28);
        ctx.fillRect(320, 150, 44, 32);
        ctx.fillRect(280, 220, 40, 30);
      } else if (activeLayer === 'landcover') {
        // Simulated 6-Class Semantic Land-Cover Raster
        // Water Body Polygon
        ctx.fillStyle = 'rgba(14, 165, 233, 0.88)'; // Water #0ea5e9
        ctx.beginPath();
        ctx.ellipse(120, 380, 100, 70, Math.PI / 6, 0, 2 * Math.PI);
        ctx.fill();

        // Dense Forest / Vegetation
        ctx.fillStyle = 'rgba(16, 185, 129, 0.85)'; // Forest #10b981
        ctx.fillRect(0, 0, 220, 220);

        // Agricultural Cropland
        ctx.fillStyle = 'rgba(234, 179, 8, 0.85)'; // Cropland #eab308
        ctx.fillRect(230, 0, 282, 200);

        // Shrubland
        ctx.fillStyle = 'rgba(132, 204, 22, 0.85)'; // Shrub #84cc16
        ctx.fillRect(0, 230, 200, 120);

        // Built-up Urban
        ctx.fillStyle = 'rgba(239, 68, 68, 0.88)'; // Built-up #ef4444
        ctx.fillRect(240, 210, 272, 160);

        // Bare Soil / Open Land
        ctx.fillStyle = 'rgba(217, 119, 6, 0.85)'; // Bare Soil #d97706
        ctx.fillRect(240, 380, 272, 132);
      } else if (activeLayer === 'uncertainty') {
        // Simulated Uncertainty Heatmap
        const grad = ctx.createRadialGradient(256, 256, 40, 256, 256, 250);
        grad.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
        grad.addColorStop(0.5, 'rgba(234, 179, 8, 0.7)');
        grad.addColorStop(1, 'rgba(239, 68, 68, 0.85)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 512, 512);

        ctx.strokeStyle = 'rgba(239, 68, 68, 0.9)';
        ctx.lineWidth = 8;
        ctx.strokeRect(220, 0, 20, 512);
        ctx.strokeRect(0, 200, 512, 20);
      }

      const imageUrl = canvas.toDataURL();
      const imageOverlay = L.imageOverlay(imageUrl, bounds, {
        opacity: opacity / 100,
        interactive: false
      });
      layersGroupRef.current.addLayer(imageOverlay);
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Banner with Demo Badges */}
      <div className="px-4 sm:px-6 py-4 border-b border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-bold text-white">
                Interactive WebGIS Layer Visualization
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                Demo Study Area
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-950/80 text-amber-300 border border-amber-500/40">
                Demo / Prototype Data
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Powered by OpenStreetMap &bull; Sample Tamil Nadu Demo Extents &bull; Not actual field survey coordinates
            </p>
          </div>
        </div>

        {/* Study Area Presets */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400 hidden xl:inline">Demo Region:</span>
          <div className="flex flex-wrap rounded-lg bg-slate-900 p-1 border border-slate-800 gap-1">
            {STUDY_PRESETS.map((preset, index) => (
              <button
                key={preset.id}
                onClick={() => setSelectedPreset(preset)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                  selectedPreset.id === preset.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Demo Zone {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Map + Dashboard Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[560px]">
        {/* Map Viewport (3 Cols on Desktop) */}
        <div className="lg:col-span-3 relative h-[440px] sm:h-[540px] lg:h-full w-full bg-slate-950">
          <div ref={mapContainerRef} className="w-full h-full z-10" />

          {/* Floating Top Left: Demo Notice & Study Area Label */}
          <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 max-w-[95%] sm:max-w-md pointer-events-none">
            <div className="bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/40 text-xs font-mono flex items-center gap-2 shadow-lg pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-white font-bold">Demo Study Area:</span>
              <span className="text-cyan-300 truncate">{selectedPreset.name.replace('Demo Study Area: ', '')}</span>
            </div>

            {/* Layer Selector Bar */}
            <div className="bg-slate-900/90 backdrop-blur-md p-1.5 rounded-xl border border-slate-700/80 shadow-xl flex flex-wrap gap-1.5 pointer-events-auto">
              <button
                onClick={() => setActiveLayer('sentinel')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
                  activeLayer === 'sentinel'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Sentinel-2 (10m)</span>
              </button>

              <button
                onClick={() => setActiveLayer('superres')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
                  activeLayer === 'superres'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Super-Res (4x)</span>
              </button>

              <button
                onClick={() => setActiveLayer('landcover')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
                  activeLayer === 'landcover'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Land-Cover Map</span>
              </button>

              <button
                onClick={() => setActiveLayer('uncertainty')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
                  activeLayer === 'uncertainty'
                    ? 'bg-red-500/20 text-red-300 border border-red-500/40 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Uncertainty Heatmap</span>
              </button>
            </div>
          </div>

          {/* Floating Controls (Bottom Left): Opacity & Demo Markers Toggle */}
          <div className="absolute bottom-4 left-4 z-20 flex flex-wrap items-center gap-2">
            {/* Opacity Slider */}
            <div className="bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-700/80 shadow-xl flex items-center gap-2.5 text-xs font-mono text-slate-300">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              <span>Layer Opacity:</span>
              <input
                type="range"
                min="10"
                max="100"
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
                className="w-20 accent-cyan-400 cursor-pointer"
              />
              <span className="w-8 text-right font-bold text-cyan-300">{opacity}%</span>
            </div>

            {/* Demo Markers Toggle */}
            <button
              onClick={() => setShowDemoMarkers(!showDemoMarkers)}
              className={`px-3 py-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all shadow-xl backdrop-blur-md ${
                showDemoMarkers
                  ? 'bg-cyan-950/90 text-cyan-300 border-cyan-500/50 font-medium'
                  : 'bg-slate-900/90 text-slate-400 border-slate-700/80 hover:text-white'
              }`}
            >
              <Tag className="w-3.5 h-3.5" />
              <span>{showDemoMarkers ? 'Hide Demo Markers' : 'Show Demo Markers'}</span>
            </button>
          </div>

          {/* Click probe helper tip */}
          <div className="absolute bottom-4 right-14 z-20 hidden md:flex items-center gap-1.5 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-400 shadow-md">
            <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
            <span>Click any pixel to probe spectra & confidence</span>
          </div>
        </div>

        {/* Sidebar: Spatial Telemetry & Legend (1 Col on Desktop) */}
        <div className="p-5 bg-slate-950/95 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-between space-y-5">
          
          {/* Active Probe Telemetry Box */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                <Crosshair className="w-4 h-4" /> Pixel Inspector Probe
              </span>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                Demo Coordinates
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-500 block">Latitude</span>
                <span className="text-slate-200 font-bold">{probeData.lat}° N</span>
              </div>
              <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-500 block">Longitude</span>
                <span className="text-slate-200 font-bold">{probeData.lng}° E</span>
              </div>
            </div>

            {/* Predicted Class Card */}
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                  Predicted Class (Demo)
                </span>
                <span className="text-[10px] font-mono text-cyan-300">
                  Confidence: {probeData.confidence}%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-3.5 h-3.5 rounded-md shrink-0 shadow-sm"
                  style={{ backgroundColor: probeData.classColor }}
                ></span>
                <span className="text-sm font-bold text-white">
                  {probeData.predictedClass}
                </span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${probeData.confidence}%` }}
                ></div>
              </div>
            </div>

            {/* Simulated Spectral Bands Reflectance */}
            <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                Simulated BOA Reflectance (Level-2A)
              </span>
              <div className="grid grid-cols-4 gap-1 text-center font-mono text-[11px]">
                <div className="p-1.5 bg-slate-950 rounded border border-slate-800">
                  <span className="text-[9px] text-blue-400 block">B2 (Blue)</span>
                  <span className="text-slate-200">{probeData.b2}</span>
                </div>
                <div className="p-1.5 bg-slate-950 rounded border border-slate-800">
                  <span className="text-[9px] text-green-400 block">B3 (Green)</span>
                  <span className="text-slate-200">{probeData.b3}</span>
                </div>
                <div className="p-1.5 bg-slate-950 rounded border border-slate-800">
                  <span className="text-[9px] text-red-400 block">B4 (Red)</span>
                  <span className="text-slate-200">{probeData.b4}</span>
                </div>
                <div className="p-1.5 bg-slate-950 rounded border border-slate-800">
                  <span className="text-[9px] text-purple-400 block">B8 (NIR)</span>
                  <span className="text-slate-200">{probeData.b8}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Prototype Markers Legend */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold block">
              Demo Sample Points (Tamil Nadu)
            </span>
            <div className="grid grid-cols-2 gap-1.5 text-[10px] font-mono">
              <div className="flex items-center gap-1.5 p-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <span>🌲</span>
                <span className="truncate text-emerald-300">Vegetation</span>
              </div>
              <div className="flex items-center gap-1.5 p-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <span>🏢</span>
                <span className="truncate text-red-300">Built-up</span>
              </div>
              <div className="flex items-center gap-1.5 p-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <span>🌾</span>
                <span className="truncate text-yellow-300">Agriculture</span>
              </div>
              <div className="flex items-center gap-1.5 p-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <span>💧</span>
                <span className="truncate text-cyan-300">Water Body</span>
              </div>
            </div>
          </div>

          {/* Study Area Context Note */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-200">Demo Study Area</span>
              <span className="text-[9px] font-mono text-amber-400 bg-amber-950/50 px-1.5 py-0.5 rounded">Prototype Notice</span>
            </div>
            <p className="leading-snug text-slate-400">{selectedPreset.description}</p>
            <span className="text-[10px] text-slate-500 block pt-1 border-t border-slate-800/80">
              * The mapped region represents sample demo coordinates in Tamil Nadu for interactive prototype testing.
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
