import React, { useState } from 'react';
import {
  Satellite,
  GraduationCap,
  Copy,
  Check,
  BookOpen,
  ArrowUp,
  FileCode2,
  ExternalLink
} from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

export const Footer: React.FC = () => {
  const [copiedBib, setCopiedBib] = useState(false);

  const bibtexCitation = `@mastersthesis{landcover_dl_2026,
  title  = {Land Cover Analysis Using Satellite Imagery and Deep Learning},
  author = {[Student Name Placeholder]},
  school = {[Department and College Name]},
  year   = {2026},
  note   = {Academic Immersion Field Research Project}
}`;

  const copyCitation = () => {
    navigator.clipboard.writeText(bibtexCitation);
    setCopiedBib(true);
    setTimeout(() => setCopiedBib(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Project Identity */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Satellite className="w-5 h-5" />
              </div>
              <span className="font-bold text-base text-white">
                GeoDL<span className="text-cyan-400">.Immersion</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Academic Immersion Research Project investigating ground-level field observations, 
              Sentinel-2 spatial limitations, and deep learning-based super-resolution mapping.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-1 rounded-md">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Non-Commercial Research</span>
            </div>
          </div>

          {/* Col 2: Research Narrative Sections */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono mb-4">
              Project Journey
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#field-observations" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> 01. Field Observations
                </a>
              </li>
              <li>
                <a href="#problem" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> 02. Problem Identified
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> 03. Proposed Solution
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> 04. 10-Step Methodology
                </a>
              </li>
              <li>
                <a href="#satellite-data" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> 05. Sentinel-2 Spectral Bands
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Technical & Validation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono mb-4">
              Outputs & GIS Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#interactive-demo" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Interactive Map Demo
                </a>
              </li>
              <li>
                <a href="#validation" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Field Validation Framework
                </a>
              </li>
              <li>
                <a href="#applications" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Applied Domains
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> PyTorch & GDAL Tech Stack
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Academic Info & Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Academic Citation Reference */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Academic Citation
              </h4>
              <button
                onClick={copyCitation}
                className="text-[11px] font-mono flex items-center gap-1 text-cyan-400 hover:text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded transition-colors"
                title="Copy BibTeX citation"
              >
                {copiedBib ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedBib ? 'Copied' : 'BibTeX'}</span>
              </button>
            </div>
            <pre className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-300 overflow-x-auto leading-tight selection:bg-cyan-900">
              {bibtexCitation}
            </pre>
            <p className="text-[10px] text-slate-400 mt-2">
              European Space Agency (ESA) Sentinel-2 open data is distributed under Copernicus open access terms.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Immersion Project: <span className="text-slate-300 font-medium">"{PROJECT_METADATA.title}"</span>. Academic research study.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Designed for GitHub Pages & Vercel</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-cyan-400 hover:text-cyan-300 transition-all flex items-center gap-1.5 text-xs"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
