import React, { useState } from "react";
import { BookMarked, ExternalLink, Copy, Check, Quote } from "lucide-react";
import { ScienceProject } from "../types";

interface ReferencesSectionProps {
  project: ScienceProject;
}

export const ReferencesSection: React.FC<ReferencesSectionProps> = ({ project }) => {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [copiedProjectCitation, setCopiedProjectCitation] = useState(false);

  const handleCopyRef = (refText: string, idx: number) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(refText);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    }
  };

  const projectCitationText = `${project.team.researchers.map(r => r.name.toUpperCase()).join("; ")}; ${project.team.mentors.map(m => m.name.toUpperCase()).join("; ")}. ${project.title}. In: ${project.fairName}, ${project.year}, ${project.institution}.`;

  const handleCopyProjectCitation = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(projectCitationText);
      setCopiedProjectCitation(true);
      setTimeout(() => setCopiedProjectCitation(false), 2000);
    }
  };

  return (
    <section className="py-16 md:py-20 border-b border-slate-800/80 bg-slate-950/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Fundamentação Teórica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Referências Bibliográficas & Normas
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Fontes primárias, artigos indexados e normas técnicas internacionais consultadas.
          </p>
        </div>

        {/* Citations List */}
        <div className="max-w-4xl mx-auto space-y-4 mb-10">
          {project.references.map((ref, idx) => {
            const fullRefString = `${ref.authors} (${ref.year}). ${ref.title}. ${ref.publication}. ${ref.doi ? `DOI: ${ref.doi}` : ""}`;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start justify-between gap-4 hover:border-slate-700 transition"
              >
                <div className="space-y-1 text-xs sm:text-sm text-slate-300 flex-1">
                  <span className="font-bold text-white block">{ref.authors} ({ref.year})</span>
                  <span className="italic text-slate-200 block">{ref.title}</span>
                  <span className="text-slate-400 text-xs block">{ref.publication}</span>
                  {ref.doi && (
                    <span className="font-mono text-[11px] text-cyan-400 block pt-1">
                      DOI: {ref.doi}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <button
                    onClick={() => handleCopyRef(fullRefString, idx)}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition text-xs flex items-center gap-1 border border-slate-700 cursor-pointer"
                    title="Copiar referência em formato ABNT"
                  >
                    {copiedIdx === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedIdx === idx ? "Copiado" : "Copiar"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* How to cite this science project */}
        <div className="max-w-4xl mx-auto bg-slate-900/60 border border-emerald-500/30 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <Quote className="w-4 h-4" />
              <span>Como Citar Este Trabalho:</span>
            </div>
            <p className="text-xs text-slate-300 font-mono leading-relaxed">
              {projectCitationText}
            </p>
          </div>

          <button
            onClick={handleCopyProjectCitation}
            className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shrink-0 transition flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            {copiedProjectCitation ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedProjectCitation ? "Citação Copiada!" : "Copiar Citação"}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
