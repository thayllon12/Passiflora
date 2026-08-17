import React, { useState } from "react";
import { 
  BookOpen, 
  Calendar, 
  User, 
  AlertCircle, 
  CheckCircle2, 
  Filter, 
  Sparkles,
  PenTool
} from "lucide-react";
import { ScienceProject, ProjectPhase } from "../types";

interface LogbookSectionProps {
  project: ScienceProject;
}

export const LogbookSection: React.FC<LogbookSectionProps> = ({ project }) => {
  const [selectedPhase, setSelectedPhase] = useState<string>("Todas");

  const phases = ["Todas", "Planejamento", "Síntese", "Análise Crítica", "Ensaios", "Conclusão"];

  const filteredEntries = project.logbook.filter((entry) => {
    if (selectedPhase === "Todas") return true;
    return entry.phase === selectedPhase;
  });

  return (
    <section id="diario" className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-950/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Caderno de Campo & Histórico de Laboratório</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Diário de Bordo Digital
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Registro cronológico autêntico de hipóteses, tentativas, identificação de desvios experimentais e soluções adotadas pela equipe.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {phases.map((phase) => (
            <button
              key={phase}
              onClick={() => setSelectedPhase(phase)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                selectedPhase === phase
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-950/50 font-bold"
                  : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {phase}
            </button>
          ))}
        </div>

        {/* Timeline Entries */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredEntries.map((entry, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl relative overflow-hidden transition hover:border-slate-700"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-amber-400 bg-amber-950/50 px-2.5 py-1 rounded-md border border-amber-500/30">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{entry.date}</span>
                  </span>

                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    Fase: {entry.phase}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  <span>Registrado por: <strong>{entry.author}</strong></span>
                </div>
              </div>

              <h4 className="text-base sm:text-lg font-display font-bold text-white mb-2">
                {entry.title}
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {entry.entry}
              </p>

              {/* Highlight Divergence & Correction if any */}
              {entry.divergenceOrError && entry.solutionFound && (
                <div className="mt-4 p-4 rounded-xl bg-slate-950/90 border border-amber-500/30 space-y-2">
                  <div className="flex items-start gap-2 text-xs text-amber-300">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-amber-400">Desvio Experimental Identificado:</strong>
                      <span>{entry.divergenceOrError}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-emerald-300 pt-2 border-t border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-emerald-400">Solução & Correção Metodológica:</strong>
                      <span>{entry.solutionFound}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
