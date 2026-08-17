import React, { useEffect, useRef, useState } from "react";
import { 
  FlaskConical, 
  Sliders, 
  BarChart3, 
  Volume2, 
  VolumeX, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Sparkles,
  Building,
  Calendar
} from "lucide-react";
import { ScienceProject } from "../types";

interface HeroSectionProps {
  project: ScienceProject;
  onOpenSimulation: () => void;
  onOpenResults: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  project,
  onOpenSimulation,
  onOpenResults,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlayingPitch, setIsPlayingPitch] = useState(false);

  // Live Molecular / Node Particle Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(width / 22), 55);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      baseColor: string;
      charge: number;
    }> = [];

    const colors = ["#10b981", "#06b6d4", "#3b82f6", "#a855f7", "#34d399"];

    for (let i = 0; i < particleCount; i++) {
      const color = colors[i % colors.length];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.8 + 1.5,
        color: color,
        baseColor: color,
        charge: Math.random() > 0.5 ? 1 : -1,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(52, 211, 153, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // Draw & Update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse interaction (gentle repulsion)
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130 && dist > 0) {
          const force = (130 - dist) / 130;
          p.x += (dx / dist) * force * 2.5;
          p.y += (dy / dist) * force * 2.5;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Text-to-speech elevator pitch (Portuguese)
  const toggleAudioPitch = () => {
    if (!("speechSynthesis" in window)) {
      alert("Seu navegador não suporta sintetizador de voz nativo.");
      return;
    }

    if (isPlayingPitch) {
      window.speechSynthesis.cancel();
      setIsPlayingPitch(false);
    } else {
      window.speechSynthesis.cancel();
      const pitchText = `Apresentamos o projeto ${project.shortTitle}. ${project.tagline}. Nossa pesquisa sintetizou um novo material utilizando resíduos agroindustriais, alcançando ${project.stats[0]?.value}${project.stats[0]?.unit || ""} de ${project.stats[0]?.label} e resistência de ${project.stats[1]?.value} ${project.stats[1]?.unit || ""}. O projeto valida a transição para a bioeconomia circular de forma acessível e sustentável.`;
      
      const utterance = new SpeechSynthesisUtterance(pitchText);
      utterance.lang = "pt-BR";
      utterance.rate = 1.05;
      utterance.pitch = 1.0;

      utterance.onend = () => setIsPlayingPitch(false);
      utterance.onerror = () => setIsPlayingPitch(false);

      window.speechSynthesis.speak(utterance);
      setIsPlayingPitch(true);
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 border-b border-slate-800/80 sci-grid">
      {/* Background Canvas for Molecular Nodes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto opacity-70 z-0"
      />

      {/* Radial Gradient Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Tag & Credentials */}
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 shadow-sm shadow-emerald-950">
            <FlaskConical className="w-3.5 h-3.5 text-emerald-400" />
            <span>{project.category}</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800">
            <Building className="w-3 h-3 text-slate-400" />
            <span className="truncate max-w-[240px] sm:max-w-none">{project.institution}</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-slate-900/60 border border-slate-800/70">
            <Calendar className="w-3 h-3 text-slate-500" />
            <span>Edição {project.year}</span>
          </span>
        </div>

        {/* Main Title and Tagline */}
        <div className="max-w-4xl space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.15] text-balance">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-light text-balance">
            {project.tagline}
          </p>

          {/* Badges / Certifications */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.badges.map((badge, idx) => (
              <span
                key={idx}
                className={`text-xs font-medium px-2.5 py-1 rounded-md border ${badge.color}`}
              >
                {badge.label}
              </span>
            ))}
          </div>

          {/* Award Banner if any */}
          {project.awards && project.awards.length > 0 && (
            <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-amber-500/15 via-amber-600/10 to-slate-900/50 border border-amber-500/30 flex items-start sm:items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Premiações & Reconhecimento
                </div>
                <div className="text-xs sm:text-sm text-slate-200 font-medium">
                  {project.awards.join(" • ")}
                </div>
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href="#resumo"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition transform active:scale-95 cursor-pointer"
            >
              <span>Explorar Pesquisa</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenSimulation}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-sm border border-slate-700 hover:border-cyan-500/50 shadow-md transition transform active:scale-95 cursor-pointer"
            >
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>Simulador Virtual</span>
            </button>

            <button
              onClick={onOpenResults}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-sm border border-slate-700 hover:border-emerald-500/50 shadow-md transition transform active:scale-95 cursor-pointer"
            >
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <span>Ver Dados & Gráficos</span>
            </button>

            <button
              onClick={toggleAudioPitch}
              className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-medium border transition cursor-pointer ${
                isPlayingPitch
                  ? "bg-amber-500/20 text-amber-300 border-amber-500 animate-pulse"
                  : "bg-slate-950/60 text-slate-300 border-slate-800 hover:bg-slate-900"
              }`}
              title="Ouvir apresentação rápida de 60 segundos com sintetizador de voz"
            >
              {isPlayingPitch ? (
                <>
                  <VolumeX className="w-4 h-4 text-amber-400" />
                  <span>Pausar Pitch</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-slate-400" />
                  <span>Ouvir Pitch (60s)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 4 Research Metric Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {project.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden p-5 rounded-2xl border transition-all duration-300 hover:translate-y-[-2px] ${
                stat.highlight
                  ? "bg-gradient-to-b from-emerald-950/40 to-slate-900/80 border-emerald-500/40 shadow-lg shadow-emerald-950/50"
                  : "bg-slate-900/70 border-slate-800/80 hover:border-slate-700"
              }`}
            >
              {stat.highlight && (
                <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
              )}
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </span>
                {stat.highlight ? (
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                ) : (
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                )}
              </div>

              <div className="flex items-baseline gap-1 my-1">
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="text-base font-bold text-emerald-400 font-mono">
                    {stat.unit}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-400 leading-snug">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
