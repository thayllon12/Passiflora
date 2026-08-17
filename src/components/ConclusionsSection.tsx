import React from "react";
import { CheckCircle2, ArrowRight, Lightbulb, Shield, FileCheck2 } from "lucide-react";
import { ScienceProject } from "../types";

interface ConclusionsSectionProps {
  project: ScienceProject;
}

export const ConclusionsSection: React.FC<ConclusionsSectionProps> = ({ project }) => {
  return (
    <section className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>Fechamento da Investigação</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Conclusões & Desdobramentos
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Validação das proposições centrais, impactos socioeconômicos e próximos passos rumo à escala industrial.
          </p>
        </div>

        {/* Main Takeaway Statement */}
        <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/30 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 mb-10 shadow-2xl">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
            Síntese Conclusiva Principal:
          </span>
          <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
            "{project.conclusions.mainTakeaway}"
          </p>
        </div>

        {/* 2 Columns: Points of Conclusion & Future Works */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Key Conclusions (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Pontos Comprovados Experimentalmente</span>
            </h3>

            <div className="space-y-3">
              {project.conclusions.points.map((point, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs sm:text-sm text-slate-200 flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Future Works (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-display font-bold text-white flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              <span>Próximas Etapas & Escalabilidade</span>
            </h3>

            <div className="space-y-3">
              {project.conclusions.futureWork.map((fw, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2.5"
                >
                  <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{fw}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Intellectual Property / Patent Box */}
        {project.conclusions.patentsOrApplicability && (
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4 text-xs text-slate-300">
            <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-white font-semibold text-sm mb-0.5">
                Propriedade Intelectual & Aplicação:
              </strong>
              <span>{project.conclusions.patentsOrApplicability}</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
