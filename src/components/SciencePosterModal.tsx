import React from "react";
import { X, Printer, Download, Atom, CheckCircle2, Award, Building, Sparkles } from "lucide-react";
import { ScienceProject } from "../types";

interface SciencePosterModalProps {
  project: ScienceProject;
  onClose: () => void;
}

export const SciencePosterModal: React.FC<SciencePosterModalProps> = ({
  project,
  onClose,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md overflow-y-auto p-2 sm:p-6 flex items-start justify-center">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden my-4">
        
        {/* Modal Top Action Bar */}
        <div className="no-print bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="text-sm font-display font-bold text-white">
                Visualização do Pôster / Banner Científico (Formato A0)
              </h3>
              <span className="text-xs text-slate-400">
                Layout formatado para apresentação em estande e impressão acadêmica
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Salvar PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Poster Canvas Area */}
        <div className="p-6 sm:p-10 bg-slate-950 text-slate-100 print:bg-white print:text-black">
          
          {/* POSTER HEADER */}
          <div className="border-4 border-emerald-500/60 print:border-emerald-600 rounded-2xl p-6 mb-6 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 print:bg-white text-center">
            
            {/* Event and Stand Info */}
            <div className="flex justify-between items-center text-xs text-emerald-400 print:text-emerald-700 font-mono font-bold uppercase tracking-wider mb-2 border-b border-slate-800 print:border-slate-300 pb-2">
              <span>{project.fairName}</span>
              <span>{project.standNumber}</span>
              <span>Edição {project.year}</span>
            </div>

            {/* Main Poster Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white print:text-black tracking-tight leading-snug my-2 uppercase">
              {project.title}
            </h1>

            {/* Researchers & School */}
            <div className="text-xs sm:text-sm text-slate-300 print:text-slate-800 mt-3 space-y-1">
              <p className="font-semibold">
                <strong>Pesquisadores:</strong> {project.team.researchers.map((r) => r.name).join(", ")}
              </p>
              <p>
                <strong>Orientação:</strong> {project.team.mentors.map((m) => `${m.name} (${m.role})`).join(" • ")}
              </p>
              <p className="text-xs text-slate-400 print:text-slate-600 italic">
                {project.institution}
              </p>
            </div>
          </div>

          {/* 3-COLUMN POSTER GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 print:text-slate-800">
            
            {/* Column 1: Introdução, Problema & Hipótese */}
            <div className="space-y-4">
              
              <div className="p-4 rounded-xl border border-slate-800 print:border-slate-300 bg-slate-900/50 print:bg-white">
                <h3 className="font-display font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-wider text-xs border-b border-slate-800 print:border-slate-300 pb-1 mb-2">
                  1. Introdução & Contextualização
                </h3>
                <p className="leading-relaxed text-justify">
                  {project.problem.context}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 print:border-slate-300 bg-slate-900/50 print:bg-white">
                <h3 className="font-display font-bold text-cyan-400 print:text-cyan-700 uppercase tracking-wider text-xs border-b border-slate-800 print:border-slate-300 pb-1 mb-2">
                  2. Hipótese de Pesquisa
                </h3>
                <p className="italic font-medium leading-relaxed mb-2">
                  "{project.hypothesis.statement}"
                </p>
                <div className="text-[11px] text-slate-400 print:text-slate-600">
                  <strong>Status:</strong> {project.hypothesis.status} ({project.hypothesis.confidenceRate})
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 print:border-slate-300 bg-slate-900/50 print:bg-white">
                <h3 className="font-display font-bold text-purple-400 print:text-purple-700 uppercase tracking-wider text-xs border-b border-slate-800 print:border-slate-300 pb-1 mb-2">
                  3. Objetivos
                </h3>
                <p className="mb-2 font-medium">{project.generalObjective}</p>
                <ul className="list-disc list-inside space-y-1 text-[11px]">
                  {project.specificObjectives.slice(0, 3).map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Column 2: Metodologia & Procedimentos */}
            <div className="space-y-4">
              
              <div className="p-4 rounded-xl border border-slate-800 print:border-slate-300 bg-slate-900/50 print:bg-white">
                <h3 className="font-display font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-wider text-xs border-b border-slate-800 print:border-slate-300 pb-1 mb-2">
                  4. Metodologia Experimental
                </h3>
                <p className="mb-3 leading-relaxed">
                  {project.methodology.overview}
                </p>
                <div className="space-y-2">
                  {project.methodology.steps.slice(0, 4).map((st) => (
                    <div key={st.stepNumber} className="text-[11px] p-2 rounded bg-slate-950 print:bg-slate-100">
                      <strong className="text-emerald-400 print:text-emerald-800">
                        {st.stepNumber}. {st.title}:
                      </strong>{" "}
                      {st.description}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 print:border-slate-300 bg-slate-900/50 print:bg-white">
                <h3 className="font-display font-bold text-amber-400 print:text-amber-700 uppercase tracking-wider text-xs border-b border-slate-800 print:border-slate-300 pb-1 mb-2">
                  5. Variáveis Controladas
                </h3>
                <p className="text-[11px]">
                  <strong>Independentes:</strong> {project.methodology.variables.independent.join("; ")}
                </p>
                <p className="text-[11px] mt-1">
                  <strong>Dependentes:</strong> {project.methodology.variables.dependent.join("; ")}
                </p>
              </div>

            </div>

            {/* Column 3: Resultados, Conclusões & Referências */}
            <div className="space-y-4">
              
              <div className="p-4 rounded-xl border border-slate-800 print:border-slate-300 bg-slate-900/50 print:bg-white">
                <h3 className="font-display font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-wider text-xs border-b border-slate-800 print:border-slate-300 pb-1 mb-2">
                  6. Resultados & Discussão
                </h3>
                <p className="mb-2 leading-relaxed">
                  {project.results.summary}
                </p>
                
                {/* Mini Metric Highlights */}
                <div className="grid grid-cols-2 gap-2 my-2">
                  {project.stats.slice(0, 2).map((st, i) => (
                    <div key={i} className="p-2 rounded bg-slate-950 print:bg-slate-100 text-center">
                      <span className="font-display font-bold text-base text-emerald-400 print:text-emerald-700 block">
                        {st.value}{st.unit || ""}
                      </span>
                      <span className="text-[9px] uppercase text-slate-400 print:text-slate-600 block">
                        {st.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 print:border-slate-300 bg-slate-900/50 print:bg-white">
                <h3 className="font-display font-bold text-cyan-400 print:text-cyan-700 uppercase tracking-wider text-xs border-b border-slate-800 print:border-slate-300 pb-1 mb-2">
                  7. Conclusões Principais
                </h3>
                <ul className="space-y-1 text-[11px]">
                  {project.conclusions.points.slice(0, 3).map((p, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <span className="text-emerald-400 print:text-emerald-700">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 print:border-slate-300 bg-slate-900/50 print:bg-white">
                <h3 className="font-display font-bold text-slate-400 uppercase tracking-wider text-xs border-b border-slate-800 print:border-slate-300 pb-1 mb-2">
                  8. Referências Principais
                </h3>
                <div className="space-y-1 text-[9px] text-slate-400 print:text-slate-600">
                  {project.references.slice(0, 2).map((r, i) => (
                    <p key={i}>• {r.authors} ({r.year}). {r.title}.</p>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* POSTER FOOTER */}
          <div className="mt-6 pt-4 border-t border-slate-800 print:border-slate-300 flex flex-wrap items-center justify-between text-[10px] text-slate-400 print:text-slate-600">
            <div>Apoio Institucional: {project.team.collaborators.join(" • ")}</div>
            <div className="font-mono">Pôster Oficial Feira de Ciências 2026</div>
          </div>

        </div>

      </div>
    </div>
  );
};
