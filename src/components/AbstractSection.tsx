import React, { useState } from "react";
import { 
  FileText, 
  Globe2, 
  Copy, 
  Check, 
  Target, 
  CheckCircle, 
  HelpCircle,
  Award
} from "lucide-react";
import { ScienceProject } from "../types";

interface AbstractSectionProps {
  project: ScienceProject;
}

export const AbstractSection: React.FC<AbstractSectionProps> = ({ project }) => {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const [copied, setCopied] = useState(false);

  const handleCopyAbstract = () => {
    const textToCopy = lang === "pt" ? project.abstractPt : project.abstractEn;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="resumo" className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Síntese da Investigação</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Resumo Científico & Objetivos
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Visão consolidada do escopo de pesquisa, motivação, métodos empregados e metas alcançadas segundo os padrões ABNT e comitês de feiras científicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Abstract Box with language tab (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative backdrop-blur-md">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLang("pt")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                    lang === "pt"
                      ? "bg-emerald-500 text-slate-950 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                  }`}
                >
                  <span>Português (Resumo)</span>
                </button>

                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                    lang === "en"
                      ? "bg-cyan-500 text-slate-950 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                  }`}
                >
                  <Globe2 className="w-3 h-3" />
                  <span>English (Abstract)</span>
                </button>
              </div>

              <button
                onClick={handleCopyAbstract}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 px-2.5 py-1.5 rounded-lg border border-slate-700 transition cursor-pointer"
                title="Copiar texto do resumo para citação"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copiado!" : "Copiar"}</span>
              </button>
            </div>

            {/* Abstract Text */}
            <div className="text-slate-200 leading-relaxed text-sm sm:text-base font-light text-justify">
              {lang === "pt" ? project.abstractPt : project.abstractEn}
            </div>

            {/* Keywords */}
            <div className="mt-6 pt-5 border-t border-slate-800">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                {lang === "pt" ? "Palavras-chave:" : "Keywords:"}
              </span>
              <div className="flex flex-wrap gap-2">
                {project.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/90 text-emerald-300 border border-slate-700"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: General & Specific Objectives + SDGs (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Objectives Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-base font-display font-bold text-white">
                  Objetivos do Projeto
                </h3>
              </div>

              {/* General Objective */}
              <div className="mb-4 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Objetivo Geral
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                  {project.generalObjective}
                </p>
              </div>

              {/* Specific Objectives Checklist */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Objetivos Específicos (Concluídos & Validados):
                </span>
                <div className="space-y-2.5">
                  {project.specificObjectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SDGs (ODS da ONU) Badges */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-display font-bold text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Alinhamento com os ODS da ONU</span>
                </h3>
                <span className="text-[11px] text-slate-400 font-mono">Agenda 2030</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {project.sdgs.map((sdg) => (
                  <div
                    key={sdg.number}
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-5 h-5 rounded-md ${sdg.color} text-white font-bold text-xs flex items-center justify-center`}>
                        {sdg.number}
                      </span>
                      <span className="text-xs font-semibold text-slate-200 truncate">
                        ODS {sdg.number}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-tight">
                      {sdg.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
