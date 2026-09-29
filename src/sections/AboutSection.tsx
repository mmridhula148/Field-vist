import React from 'react';
import {
  GraduationCap,
  User,
  Building,
  School,
  Award,
  Calendar,
  BookOpen,
  Sparkles,
  Info
} from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

export const AboutSection: React.FC = () => {
  const academicDetails = [
    {
      label: "Student Name",
      value: "[Student Name Placeholder]",
      icon: <User className="w-5 h-5 text-cyan-400" />,
      tag: "Project Investigator"
    },
    {
      label: "Department",
      value: "[Department of Computer Science / Geo-Informatics / Civil Engineering]",
      icon: <Building className="w-5 h-5 text-emerald-400" />,
      tag: "Academic Discipline"
    },
    {
      label: "College / Institution",
      value: "[College / University Name Placeholder]",
      icon: <School className="w-5 h-5 text-blue-400" />,
      tag: "Institution"
    },
    {
      label: "Project Guide / Supervisor",
      value: "[Faculty Guide / Professor Name Placeholder]",
      icon: <Award className="w-5 h-5 text-amber-400" />,
      tag: "Faculty Advisory"
    },
    {
      label: "Academic Year",
      value: "2025 – 2026",
      icon: <Calendar className="w-5 h-5 text-purple-400" />,
      tag: "Curriculum Cycle"
    },
    {
      label: "Project Type",
      value: "College Immersion Field Study & Capstone Research Project",
      icon: <BookOpen className="w-5 h-5 text-rose-400" />,
      tag: "Academic Coursework"
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-800/80 bg-[#070b16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>12 &bull; Project Metadata & Academic Profile</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Affiliation & Project Information
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            This project represents an academic immersion research study submitted in fulfillment of undergraduate / postgraduate curriculum requirements.
          </p>
        </div>

        {/* Academic Profile Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicDetails.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-lg group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 group-hover:border-cyan-500/40 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    {item.label}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {item.value}
                  </h3>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-500">
                Official Academic Record
              </div>
            </div>
          ))}
        </div>

        {/* Academic Non-Commercial Declaration Banner */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 flex items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 shrink-0 mt-0.5 sm:mt-0">
              <Info className="w-4 h-4" />
            </div>
            <div className="text-xs text-slate-300 space-y-0.5">
              <span className="font-semibold text-white block">
                Academic Project Declaration
              </span>
              <p className="text-slate-400 leading-relaxed">
                This project is developed exclusively for academic immersion and educational research purposes. All satellite data utilized is provided by the European Space Agency (ESA) Copernicus Sentinel Program under open-access research license.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
