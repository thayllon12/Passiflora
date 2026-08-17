import React from "react";
import { 
  AlertTriangle, 
  FlaskConical, 
  CheckCircle2, 
  Sparkles, 
  Scale, 
  XCircle, 
  CheckCircle,
  HelpCircle,
  TrendingUp,
  Flame,
  Trash2,
  Clock,
  DollarSign,
  AlertOctagon,
  Zap
} from "lucide-react";
import { ScienceProject } from "../types";

interface HypothesisProblemSectionProps {
  project: ScienceProject;
}

export const HypothesisProblemSection: React.FC<HypothesisProblemSectionProps> = ({
  project,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Flame": return <Flame className="w-5 h-5 text-rose-400" />;
      case "Trash2": return <Trash2 className="w-5 h-5 text-amber-400" />;
      case "Clock": return <Clock className="w-5 h-5 text-cyan-400" />;
      case "DollarSign": return <DollarSign className="w-5 h-5 text-emerald-400" />;
      case "AlertOctagon": return <AlertOctagon className="w-5 h-5 text-purple-400" />;
      case "Zap": return <Zap className="w-5 h-5 text-yellow-400" />;
      default: return <AlertTriangle className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="hipotese" className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-950/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Fundamentação Científica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Problema, Justificativa & Hipótese
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            A gênese do método científico: identificação da lacuna no estado da arte, formulação da pergunta norteadora e teste da hipótese experimental.
          </p>
        </div>

        {/* 1. Problem Statement & Impact Cards */}
        <div className="mb-14">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2 rounded-lg bg-rose-500/20 text-rose-400">
                <AlertTriangle className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-display font-bold text-white">
                Contextualização do Problema
              </h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.problem.context}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.problem.impacts.map((imp, idx) => (
              <div
                key={idx}
                className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-slate-800/80">
                    {getIcon(imp.icon)}
                  </div>
                  <h4 className="font-semibold text-white text-sm">
                    {imp.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-snug">
                  {imp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Direct Solution Comparison: Conventional vs Proposed */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-display font-bold text-white flex items-center gap-2">
              <Scale className="w-4 h-4 text-emerald-400" />
              <span>Análise Comparativa de Soluções</span>
            </h3>
            <span className="text-xs text-slate-400">Estado da Arte vs Inovação Proposta</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Conventional Card */}
            <div className="bg-slate-900/60 border border-rose-500/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-400" />
                  <h4 className="font-display font-bold text-white text-base">
                    {project.problem.comparison.conventional.title}
                  </h4>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30">
                  Status Quo
                </span>
              </div>

              <ul className="space-y-2.5 mb-5 text-xs sm:text-sm text-slate-300">
                {project.problem.comparison.conventional.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/20 text-xs text-rose-300">
                <strong>Gargalo Crítico:</strong> {project.problem.comparison.conventional.disadvantage}
              </div>
            </div>

            {/* Proposed Innovation Card */}
            <div className="bg-slate-900/90 border border-emerald-500/50 rounded-2xl p-6 relative overflow-hidden shadow-lg shadow-emerald-950/40">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <h4 className="font-display font-bold text-white text-base">
                    {project.problem.comparison.proposed.title}
                  </h4>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-semibold">
                  Inovação Científica
                </span>
              </div>

              <ul className="space-y-2.5 mb-5 text-xs sm:text-sm text-slate-200">
                {project.problem.comparison.proposed.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300">
                <strong>Diferencial Comprovado:</strong> {project.problem.comparison.proposed.advantage}
              </div>
            </div>

          </div>
        </div>

        {/* 3. The Scientific Hypothesis Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/30 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
          
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                <Sparkles className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  Declaração Formal
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                  Hipótese da Pesquisa
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Status: {project.hypothesis.status}</span>
              </span>
              <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
                {project.hypothesis.confidenceRate}
              </span>
            </div>
          </div>

          {/* Statement Quote */}
          <blockquote className="text-base sm:text-lg text-slate-100 font-medium italic border-l-4 border-emerald-500 pl-4 py-1 mb-6 bg-emerald-500/5 rounded-r-lg">
            "{project.hypothesis.statement}"
          </blockquote>

          {/* Rationale */}
          <div className="mb-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
              Fundamentação Físico-Química e Mecânica:
            </span>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.hypothesis.rationale}
            </p>
          </div>

          {/* Validation Criteria */}
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Critérios Experimentais de Aceitação da Hipótese:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.hypothesis.validationCriteria.map((crit, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2"
                >
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{crit}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
