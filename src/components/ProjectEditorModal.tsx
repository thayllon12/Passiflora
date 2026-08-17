import React, { useState } from "react";
import { X, Save, Edit3, Sparkles, Plus, Trash2, CheckCircle2 } from "lucide-react";
import { ScienceProject } from "../types";

interface ProjectEditorModalProps {
  project: ScienceProject;
  onSave: (updated: ScienceProject) => void;
  onClose: () => void;
}

export const ProjectEditorModal: React.FC<ProjectEditorModalProps> = ({
  project,
  onSave,
  onClose,
}) => {
  const [formData, setFormData] = useState<ScienceProject>({ ...project });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (field: keyof ScienceProject, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md overflow-y-auto p-3 sm:p-6 flex items-start justify-center">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-4">
        
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
              <Edit3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-display font-bold text-white">
                Personalizar Dados do Seu Trabalho de Feira de Ciências
              </h3>
              <span className="text-xs text-slate-400">
                Edite os campos abaixo para adaptar este site ao seu projeto de pesquisa
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

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 space-y-6">
          
          {/* Section 1: Identification */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              1. Identificação do Projeto & Estande
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Título Curto (Para Navbar e Botões):
                </label>
                <input
                  type="text"
                  value={formData.shortTitle}
                  onChange={(e) => handleChange("shortTitle", e.target.value)}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Categoria Científica:
                </label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Título Completo do Projeto de Pesquisa:
                </label>
                <textarea
                  rows={2}
                  value={formData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Subtítulo / Tagline de Impacto:
                </label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => handleChange("tagline", e.target.value)}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Escola / Instituição de Ensino:
                </label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => handleChange("institution", e.target.value)}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Nome da Feira / Número do Estande:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={formData.fairName}
                    onChange={(e) => handleChange("fairName", e.target.value)}
                    placeholder="Nome da Feira"
                    className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    value={formData.standNumber}
                    onChange={(e) => handleChange("standNumber", e.target.value)}
                    placeholder="Estande (Ex: BIO-42)"
                    className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Resumo e Hipótese */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              2. Resumo Científico & Hipótese
            </h4>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Resumo em Português:
              </label>
              <textarea
                rows={4}
                value={formData.abstractPt}
                onChange={(e) => handleChange("abstractPt", e.target.value)}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:border-cyan-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Declaração da Hipótese Científica:
              </label>
              <textarea
                rows={2}
                value={formData.hypothesis.statement}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    hypothesis: { ...prev.hypothesis, statement: e.target.value },
                  }))
                }
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:border-cyan-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Objetivo Geral:
              </label>
              <input
                type="text"
                value={formData.generalObjective}
                onChange={(e) => handleChange("generalObjective", e.target.value)}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:border-cyan-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Section 3: Primary Metrics */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              3. Métricas Principais em Destaque (Cards do Topo)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {formData.stats.map((stat, idx) => (
                <div key={idx} className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    Métrica 0{idx + 1}
                  </span>
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => {
                      const newStats = [...formData.stats];
                      newStats[idx].label = e.target.value;
                      handleChange("stats", newStats);
                    }}
                    placeholder="Rótulo"
                    className="w-full p-1.5 bg-slate-900 border border-slate-800 rounded text-xs text-white"
                  />
                  <div className="flex gap-1">
                    <input
                      type="text"
                      value={stat.value}
                      onChange={(e) => {
                        const newStats = [...formData.stats];
                        newStats[idx].value = e.target.value;
                        handleChange("stats", newStats);
                      }}
                      placeholder="Valor"
                      className="w-2/3 p-1.5 bg-slate-900 border border-slate-800 rounded text-xs font-bold text-emerald-400"
                    />
                    <input
                      type="text"
                      value={stat.unit || ""}
                      onChange={(e) => {
                        const newStats = [...formData.stats];
                        newStats[idx].unit = e.target.value;
                        handleChange("stats", newStats);
                      }}
                      placeholder="Unid (%)"
                      className="w-1/3 p-1.5 bg-slate-900 border border-slate-800 rounded text-xs text-slate-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            {savedSuccess ? (
              <span className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Dados atualizados com sucesso!</span>
              </span>
            ) : (
              <span className="text-xs text-slate-500">
                Suas alterações serão renderizadas instantaneamente no site.
              </span>
            )}

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer transition"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold shadow-md cursor-pointer transition"
              >
                <Save className="w-4 h-4" />
                <span>Salvar e Aplicar</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
