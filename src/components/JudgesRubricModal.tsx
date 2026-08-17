import React, { useState, useMemo } from "react";
import { X, Award, CheckCircle2, Star, FileSpreadsheet, Sparkles, HelpCircle } from "lucide-react";
import { ScienceProject } from "../types";

interface JudgesRubricModalProps {
  project: ScienceProject;
  onClose: () => void;
}

export const JudgesRubricModal: React.FC<JudgesRubricModalProps> = ({
  project,
  onClose,
}) => {
  // 5 Standard Scoring Dimensions
  const [scoreMethod, setScoreMethod] = useState<number>(28); // 0-30
  const [scoreCreativity, setScoreCreativity] = useState<number>(19); // 0-20
  const [scoreClarity, setScoreClarity] = useState<number>(19); // 0-20
  const [scoreLogbook, setScoreLogbook] = useState<number>(14); // 0-15
  const [scoreImpact, setScoreImpact] = useState<number>(15); // 0-15

  const [judgeFeedback, setJudgeFeedback] = useState<string>(
    "Excelente trabalho de iniciação científica. O domínio do delineamento fatorial, os testes normatizados ASTM e a autenticidade do diário de bordo com correções de rota demonstram maturidade científica exemplar."
  );

  const totalScore = useMemo(() => {
    return scoreMethod + scoreCreativity + scoreClarity + scoreLogbook + scoreImpact;
  }, [scoreMethod, scoreCreativity, scoreClarity, scoreLogbook, scoreImpact]);

  const awardTier = useMemo(() => {
    if (totalScore >= 95) return { title: "Candidato a 1º Lugar Geral / Grande Prêmio", color: "text-amber-400 bg-amber-500/20 border-amber-500/40" };
    if (totalScore >= 85) return { title: "Excelente (Faixa de Premiação / Menção Honrosa)", color: "text-emerald-400 bg-emerald-500/20 border-emerald-500/40" };
    if (totalScore >= 70) return { title: "Bom Trabalho (Qualificado)", color: "text-cyan-400 bg-cyan-500/20 border-cyan-500/40" };
    return { title: "Em Desenvolvimento", color: "text-slate-400 bg-slate-800 border-slate-700" };
  }, [totalScore]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md overflow-y-auto p-4 sm:p-6 flex items-start justify-center">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden my-4">
        
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-display font-bold text-white">
                Guia de Avaliação & Rubrica de Jurados
              </h3>
              <span className="text-xs text-slate-400">
                Critérios oficiais de avaliação (Padrão FEBRACE & Intel ISEF)
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Project Summary Banner */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold block">
                {project.standNumber}
              </span>
              <h4 className="text-sm font-semibold text-white">
                {project.shortTitle}
              </h4>
            </div>

            {/* Total Score Badge */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                  Pontuação Total:
                </span>
                <span className="text-2xl font-display font-extrabold text-amber-400">
                  {totalScore} <span className="text-xs text-slate-500">/ 100</span>
                </span>
              </div>
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-xl border ${awardTier.color}`}>
                {awardTier.title}
              </span>
            </div>
          </div>

          {/* 5 Scoring Criteria Sliders */}
          <div className="space-y-4">
            
            {/* 1. Rigor do Método Científico */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-slate-200">
                  1. Rigor do Método Científico, Triplicatas & Delineamento (0 a 30 pts):
                </label>
                <span className="font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  {scoreMethod} / 30 pts
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                value={scoreMethod}
                onChange={(e) => setScoreMethod(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <p className="text-[11px] text-slate-400">
                Avalia a formulação da hipótese, controle estrito de variáveis e normas técnicas (ASTM).
              </p>
            </div>

            {/* 2. Criatividade e Inovação */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-slate-200">
                  2. Criatividade, Originalidade & Solução de Problemas (0 a 20 pts):
                </label>
                <span className="font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                  {scoreCreativity} / 20 pts
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                value={scoreCreativity}
                onChange={(e) => setScoreCreativity(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <p className="text-[11px] text-slate-400">
                Aproveitamento engenhoso de resíduos e substituição de materiais petroquímicos.
              </p>
            </div>

            {/* 3. Clareza da Exposição Oral */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-slate-200">
                  3. Clareza da Apresentação Oral & Domínio do Conteúdo (0 a 20 pts):
                </label>
                <span className="font-mono font-bold text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/30">
                  {scoreClarity} / 20 pts
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                value={scoreClarity}
                onChange={(e) => setScoreClarity(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
              />
              <p className="text-[11px] text-slate-400">
                Segurança nas respostas à banca, fluência e qualidade dos recursos visuais.
              </p>
            </div>

            {/* 4. Diário de Bordo */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-slate-200">
                  4. Diário de Bordo, Caderno de Campo & Honestidade Intelectual (0 a 15 pts):
                </label>
                <span className="font-mono font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                  {scoreLogbook} / 15 pts
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                value={scoreLogbook}
                onChange={(e) => setScoreLogbook(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <p className="text-[11px] text-slate-400">
                Registros cronológicos detalhados evidenciando testes, falhas e correções de desvio.
              </p>
            </div>

            {/* 5. Impacto Socioambiental e ODS */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-slate-200">
                  5. Impacto Socioambiental, Viabilidade Econômica & ODS (0 a 15 pts):
                </label>
                <span className="font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  {scoreImpact} / 15 pts
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                value={scoreImpact}
                onChange={(e) => setScoreImpact(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>

          </div>

          {/* Feedback Text Area */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">
              Parecer Descritivo do Avaliador / Sugestões para os Estudantes:
            </label>
            <textarea
              rows={3}
              value={judgeFeedback}
              onChange={(e) => setJudgeFeedback(e.target.value)}
              className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition cursor-pointer"
            >
              Concluir Avaliação
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
