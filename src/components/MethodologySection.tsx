import React, { useState } from "react";
import { 
  Layers, 
  Clock, 
  Wrench, 
  CheckCircle2, 
  HelpCircle, 
  DollarSign, 
  Cpu, 
  GitCommit,
  FlaskRound
} from "lucide-react";
import { ScienceProject } from "../types";

interface MethodologySectionProps {
  project: ScienceProject;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ project }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="metodologia" className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Rigor Experimental</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Metodologia & Protocolos
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Etapas padronizadas de síntese, calibração, controle de variáveis e ensaios normatizados que garantem a reprodutibilidade científica.
          </p>
        </div>

        {/* Methodology Overview */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 mb-12">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.methodology.overview}
          </p>
        </div>

        {/* Interactive Steps Pipeline */}
        <div className="mb-16">
          <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
            <GitCommit className="w-5 h-5 text-emerald-400" />
            <span>Fluxograma das Etapas Experimentais</span>
          </h3>

          {/* Step Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
            {project.methodology.steps.map((step) => (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(step.stepNumber)}
                className={`p-3 rounded-xl border text-left transition cursor-pointer flex flex-col gap-1 ${
                  activeStep === step.stepNumber
                    ? "bg-emerald-500/20 border-emerald-500 text-white shadow-lg shadow-emerald-950/50"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                    Etapa 0{step.stepNumber}
                  </span>
                  <span className="text-[10px] text-slate-400">{step.timeframe}</span>
                </div>
                <span className="text-xs font-semibold text-slate-200 truncate">
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Step Detailed Card */}
          {project.methodology.steps.find((s) => s.stepNumber === activeStep) && (
            (() => {
              const current = project.methodology.steps.find((s) => s.stepNumber === activeStep)!;
              return (
                <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative animate-in fade-in duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800 mb-5">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 font-display font-extrabold text-lg flex items-center justify-center border border-emerald-500/30">
                        {current.stepNumber}
                      </span>
                      <div>
                        <h4 className="text-base sm:text-lg font-display font-bold text-white">
                          {current.title}
                        </h4>
                        <span className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                          <span>Duração: {current.timeframe}</span>
                        </span>
                      </div>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                      Concluído em Triplicata
                    </div>
                  </div>

                  {/* Step Description */}
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
                    {current.description}
                  </p>

                  {/* Key Outcome Box */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 mb-6">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                      Resultado / Entregável da Etapa:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      {current.keyOutcome}
                    </p>
                  </div>

                  {/* Equipment Used */}
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-slate-500" />
                      <span>Equipamentos e Instrumentos Utilizados:</span>
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {current.equipmentUsed.map((eq, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs border border-slate-700 font-mono"
                        >
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()
          )}
        </div>

        {/* Matrix of Variables & Materials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Variables (6 Cols) */}
          <div className="lg:col-span-6 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-base font-display font-bold text-white mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Matriz de Controle de Variáveis</span>
            </h3>

            <div className="space-y-4 text-xs">
              
              {/* Independent */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                  1. Variáveis Independentes (Manipuladas)
                </span>
                <ul className="space-y-1 text-slate-300 list-disc list-inside">
                  {project.methodology.variables.independent.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              </div>

              {/* Dependent */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  2. Variáveis Dependentes (Respostas Medidas)
                </span>
                <ul className="space-y-1 text-slate-300 list-disc list-inside">
                  {project.methodology.variables.dependent.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              </div>

              {/* Controlled */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  3. Variáveis Controladas (Constantes)
                </span>
                <ul className="space-y-1 text-slate-300 list-disc list-inside">
                  {project.methodology.variables.controlled.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Reagents & Materials Cost Table (6 Cols) */}
          <div className="lg:col-span-6 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-base font-display font-bold text-white mb-4 flex items-center gap-2">
              <FlaskRound className="w-4 h-4 text-purple-400" />
              <span>Insumos, Reagentes & Viabilidade Financeira</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-semibold">
                    <th className="pb-2">Material / Reagente</th>
                    <th className="pb-2">Função Química / Papel</th>
                    <th className="pb-2">Custo Unitário</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {project.methodology.materials.map((mat, i) => (
                    <tr key={i} className="hover:bg-slate-800/30">
                      <td className="py-2.5 font-medium text-white pr-2">{mat.name}</td>
                      <td className="py-2.5 text-slate-400 pr-2">{mat.function}</td>
                      <td className="py-2.5 font-mono text-emerald-400">{mat.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>* 70% dos insumos provêm de biomassa residual gratuita</span>
              <span className="font-bold text-emerald-400">Baixo Custo Comprovado</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
