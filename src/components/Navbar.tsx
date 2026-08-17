import React, { useState } from "react";
import { 
  Atom, 
  FlaskConical, 
  Layers, 
  Sliders, 
  BarChart3, 
  Image, 
  BookOpen, 
  Users, 
  FileText, 
  Award, 
  Sun, 
  Moon, 
  Sparkles, 
  Edit3, 
  Menu, 
  X,
  Share2,
  Printer
} from "lucide-react";
import { ScienceProject, ThemeMode } from "../types";

interface NavbarProps {
  currentProject: ScienceProject;
  projects: ScienceProject[];
  onSelectProject: (id: string) => void;
  onOpenEditor: () => void;
  onOpenPoster: () => void;
  onOpenJudgesRubric: () => void;
  theme: ThemeMode;
  onToggleTheme: (t: ThemeMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentProject,
  projects,
  onSelectProject,
  onOpenEditor,
  onOpenPoster,
  onOpenJudgesRubric,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const navLinks = [
    { name: "Resumo", href: "#resumo", icon: FileText },
    { name: "Problema & Hipótese", href: "#hipotese", icon: FlaskConical },
    { name: "Metodologia", href: "#metodologia", icon: Layers },
    { name: "Laboratório Virtual", href: "#simulador", icon: Sliders, badge: "Interativo" },
    { name: "Resultados & Dados", href: "#resultados", icon: BarChart3 },
    { name: "Galeria", href: "#galeria", icon: Image },
    { name: "Diário de Bordo", href: "#diario", icon: BookOpen },
    { name: "Equipe", href: "#equipe", icon: Users },
  ];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/85 border-b border-slate-800/80 transition-all">
      {/* Top Banner Notice for Scientific Fair */}
      <div className="bg-gradient-to-r from-emerald-900/60 via-cyan-900/40 to-slate-900/80 px-4 py-1.5 text-xs text-slate-300 border-b border-emerald-500/20 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-medium text-emerald-300">{currentProject.fairName}</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300 font-mono">{currentProject.standNumber}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenJudgesRubric}
            className="flex items-center gap-1 text-amber-300 hover:text-amber-200 transition font-medium hover:underline cursor-pointer"
            title="Abrir critérios de avaliação e ficha técnica para jurados"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Guia para Avaliadores / Jurados</span>
          </button>
          <span className="text-slate-600">|</span>
          <button
            onClick={onOpenPoster}
            className="flex items-center gap-1 text-cyan-300 hover:text-cyan-200 transition font-medium cursor-pointer"
            title="Visualizar e Imprimir Banner / Pôster Científico A0"
          >
            <Printer className="w-3.5 h-3.5 text-cyan-400" />
            <span>Pôster Científico A0</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo and Project Dropdown */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Atom className="w-5 h-5 text-emerald-400 animate-spin-slow" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-tight text-white flex items-center gap-1.5">
                  CIÊNCIA & INOVAÇÃO
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    EXPO 2026
                  </span>
                </span>
                <span className="text-xs text-slate-400 truncate max-w-[200px] sm:max-w-[280px]">
                  {currentProject.shortTitle}
                </span>
              </div>
            </a>

            {/* Project Switcher Pill */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setProjectDropdownOpen(!projectDropdownOpen)}
                className="flex items-center gap-1.5 text-xs bg-slate-900/90 hover:bg-slate-800 text-slate-300 px-2.5 py-1.5 rounded-lg border border-slate-700/60 transition cursor-pointer"
                title="Trocar projeto de exemplo da feira"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-medium">Mudar Projeto</span>
                <span className="text-[10px] text-slate-500">({projects.length})</span>
              </button>

              {projectDropdownOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-2 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Selecione o Projeto Científico:
                  </div>
                  <div className="space-y-1 mt-1">
                    {projects.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          onSelectProject(p.id);
                          setProjectDropdownOpen(false);
                        }}
                        className={`w-full text-left p-2 rounded-lg text-xs transition flex flex-col gap-0.5 cursor-pointer ${
                          p.id === currentProject.id
                            ? "bg-emerald-500/20 text-emerald-200 border border-emerald-500/40"
                            : "hover:bg-slate-800 text-slate-300"
                        }`}
                      >
                        <span className="font-semibold text-white truncate">{p.shortTitle}</span>
                        <span className="text-[11px] text-slate-400 truncate">{p.category}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 transition flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 animate-pulse">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            
            {/* Customise Project Button */}
            <button
              onClick={onOpenEditor}
              className="hidden sm:flex items-center gap-1.5 text-xs bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold px-3 py-2 rounded-lg shadow-md shadow-emerald-900/30 transition transform active:scale-95 cursor-pointer"
              title="Personalizar dados com seu próprio trabalho"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Editar Trabalho</span>
            </button>

            {/* Share / Copy URL button */}
            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/60 transition cursor-pointer"
              title="Copiar link do portfólio"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => {
                if (theme === "dark-sci") onToggleTheme("emerald-cyber");
                else if (theme === "emerald-cyber") onToggleTheme("light-academic");
                else onToggleTheme("dark-sci");
              }}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/60 transition cursor-pointer"
              title={`Tema atual: ${theme}. Clique para alternar`}
            >
              {theme === "dark-sci" && <Moon className="w-4 h-4 text-cyan-400" />}
              {theme === "emerald-cyber" && <Sparkles className="w-4 h-4 text-emerald-400" />}
              {theme === "light-academic" && <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Share feedback toast */}
      {copied && (
        <div className="bg-emerald-500 text-slate-950 text-xs font-semibold py-1 px-4 text-center animate-in fade-in">
          Link do projeto copiado para a área de transferência!
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2">
              Navegar nas Seções:
            </span>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-emerald-400" />
                    <span>{link.name}</span>
                  </div>
                  {link.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenEditor();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold text-sm"
            >
              <Edit3 className="w-4 h-4" />
              <span>Editar Dados do Projeto</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onOpenJudgesRubric();
                  setMobileMenuOpen(false);
                }}
                className="py-2 px-3 bg-slate-900 border border-amber-500/40 text-amber-300 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Para Jurados</span>
              </button>
              <button
                onClick={() => {
                  onOpenPoster();
                  setMobileMenuOpen(false);
                }}
                className="py-2 px-3 bg-slate-900 border border-cyan-500/40 text-cyan-300 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5"
              >
                <Printer className="w-4 h-4 text-cyan-400" />
                <span>Pôster A0</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
