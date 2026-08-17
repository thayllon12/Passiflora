import React from "react";
import { Atom, ArrowUp, Award, ExternalLink, Heart, Sparkles, Building } from "lucide-react";
import { ScienceProject } from "../types";

interface FooterProps {
  project: ScienceProject;
  onOpenPoster: () => void;
  onOpenJudgesRubric: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  project,
  onOpenPoster,
  onOpenJudgesRubric,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-slate-900">
          
          {/* Col 1: Logo & Fair info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-600 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                  <Atom className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <span className="font-display font-bold text-base text-white">
                FEIRA DE CIÊNCIAS & TECNOLOGIA
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Portfólio científico oficial de apresentação do projeto{" "}
              <strong className="text-slate-200">"{project.shortTitle}"</strong>.
              Desenvolvido com rigor metodológico, reprodutibilidade e conformidade com as normas ABNT e comitês de ética em pesquisa.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
              <span>{project.standNumber}</span>
              <span>•</span>
              <span>{project.institution}</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
              Seções da Pesquisa
            </span>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#resumo" className="hover:text-emerald-400 transition">Resumo & Objetivos</a>
              </li>
              <li>
                <a href="#hipotese" className="hover:text-emerald-400 transition">Problema & Hipótese</a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-emerald-400 transition">Metodologia Científica</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-emerald-400 transition">Simulador Virtual</a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-emerald-400 transition">Dados & Gráficos</a>
              </li>
              <li>
                <a href="#diario" className="hover:text-emerald-400 transition">Diário de Bordo</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Fair Resources (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
              Recursos para Avaliadores & Visitantes
            </span>
            
            <div className="space-y-2">
              <button
                onClick={onOpenJudgesRubric}
                className="w-full text-left p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs text-slate-200 flex items-center justify-between transition cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Guia & Ficha de Avaliação para Jurados</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </button>

              <button
                onClick={onOpenPoster}
                className="w-full text-left p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs text-slate-200 flex items-center justify-between transition cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Gerador do Pôster Científico A0</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            © {project.year} {project.shortTitle}. Apresentado na {project.fairName}.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition cursor-pointer text-xs"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
