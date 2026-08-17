import React, { useState, useMemo } from "react";
import { 
  Sliders, 
  Leaf, 
  Sparkles, 
  Activity, 
  RotateCcw, 
  ShieldCheck, 
  AlertCircle, 
  Calculator, 
  Droplet, 
  Thermometer, 
  Flame,
  CheckCircle2
} from "lucide-react";
import { ScienceProject } from "../types";

interface VirtualLabSimulatorProps {
  project: ScienceProject;
}

export const VirtualLabSimulator: React.FC<VirtualLabSimulatorProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<"lab" | "calculator">("lab");

  // Simulator Sliders
  const [nanocellulose, setNanocellulose] = useState<number>(project.simulation?.defaultNanocellulose || 3.5);
  const [glycerol, setGlycerol] = useState<number>(project.simulation?.defaultGlycerol || 25);
  const [soilMoisture, setSoilMoisture] = useState<number>(project.simulation?.defaultMoisture || 65);
  const [temperature, setTemperature] = useState<number>(project.simulation?.defaultTemp || 28);

  // Carbon Impact Calculator State
  const [plasticKgReplaced, setPlasticKgReplaced] = useState<number>(500);

  // Mathematical Physics Simulation Model for the Biopolymer
  const simulationModel = useMemo(() => {
    // Base strength from starch: 9.8 MPa
    // CNC effect: increases up to 3.5%, beyond that clusters form and strength drops
    let cncFactor = 0;
    if (nanocellulose <= 3.5) {
      cncFactor = nanocellulose * 5.4; // up to +18.9 MPa
    } else {
      cncFactor = 3.5 * 5.4 - (nanocellulose - 3.5) * 4.2; // agglomeration penalty
    }

    // Glycerol effect: plasticizer softens matrix. 25% is optimal balance.
    const glycerolPenalty = (glycerol - 25) * 0.45;
    const tensileStrength = Math.max(5.0, Number((9.8 + cncFactor - glycerolPenalty).toFixed(1)));

    // Elongation: increased by glycerol, slightly reduced by high CNC
    const elongation = Math.max(10, Number((68.4 + (glycerol - 25) * 1.8 - nanocellulose * 5.2).toFixed(1)));

    // Water Solubility %
    const waterSolubility = Math.max(8.0, Number((45 - nanocellulose * 7.5 + (glycerol - 25) * 0.6).toFixed(1)));

    // Biodegradation speed in days: faster with high moisture, higher temp, but high CNC slows slightly
    const moistureFactor = soilMoisture / 65; // baseline 65%
    const tempFactor = (temperature + 10) / 38; // baseline 28C
    const daysToDecompose = Math.max(25, Math.round(45 / (moistureFactor * tempFactor) * (1 + nanocellulose * 0.04)));

    // Quality diagnosis
    let diagnosis = "Excelente equilíbrio entre tração, flexibilidade e biodegradabilidade (Formulação de Alta Performance).";
    let statusColor = "text-emerald-400";
    let isOptimal = false;

    if (nanocellulose >= 3.0 && nanocellulose <= 3.8 && glycerol >= 22 && glycerol <= 28) {
      diagnosis = "Formulação ÓTIMA: Atende à norma ASTM D882 para substituição de sacolas e filmes agrícolas.";
      statusColor = "text-emerald-400";
      isOptimal = true;
    } else if (nanocellulose > 4.2) {
      diagnosis = "Atenção: Alta concentração de nanocelulose provoca aglomeração de partículas e microtrincas.";
      statusColor = "text-amber-400";
    } else if (glycerol < 20) {
      diagnosis = "Filme rígido e quebradiço devido à baixa concentração de plastificante.";
      statusColor = "text-rose-400";
    } else if (glycerol > 30) {
      diagnosis = "Excesso de plastificante: filme pegajoso com alta suscetibilidade à umidade.";
      statusColor = "text-amber-400";
    }

    return {
      tensileStrength,
      elongation,
      waterSolubility,
      daysToDecompose,
      diagnosis,
      statusColor,
      isOptimal,
    };
  }, [nanocellulose, glycerol, soilMoisture, temperature]);

  // Carbon and Ecological Calculator Outputs
  const ecoMetrics = useMemo(() => {
    // 1 kg conventional PE plastic = ~6.0 kg CO2 eq lifecycle.
    // 1 kg cassava/sugarcane biopolymer = ~1.3 kg CO2 eq lifecycle.
    // Savings = 4.7 kg CO2 per kg replaced.
    const co2SavedKg = Math.round(plasticKgReplaced * 4.7);
    const petroleumSavedLiters = Math.round(plasticKgReplaced * 2.0); // 2L crude oil per 1kg PE
    const microplasticsPreventedMillions = (plasticKgReplaced * 1.8).toFixed(1);
    const oceanDegradationSavedYears = 400; // 450 years down to < 2 months

    return {
      co2SavedKg,
      petroleumSavedLiters,
      microplasticsPreventedMillions,
      oceanDegradationSavedYears,
    };
  }, [plasticKgReplaced]);

  const handleReset = () => {
    setNanocellulose(project.simulation?.defaultNanocellulose || 3.5);
    setGlycerol(project.simulation?.defaultGlycerol || 25);
    setSoilMoisture(project.simulation?.defaultMoisture || 65);
    setTemperature(project.simulation?.defaultTemp || 28);
  };

  return (
    <section id="simulador" className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-950 sci-radial-glow relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 mb-3 animate-pulse">
            <Sliders className="w-3.5 h-3.5" />
            <span>Laboratório Virtual & Simulador Computacional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Ambiente de Simulação Interativa
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Explore em tempo real a física dos materiais, alterando os parâmetros de síntese do bio-nanocompósito ou calculando o impacto ecológico em escala real.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-900 p-1 rounded-xl border border-slate-800 flex gap-1">
            <button
              onClick={() => setActiveTab("lab")}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center gap-2 ${
                activeTab === "lab"
                  ? "bg-emerald-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Simulador de Propriedades dos Materiais</span>
            </button>

            <button
              onClick={() => setActiveTab("calculator")}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center gap-2 ${
                activeTab === "calculator"
                  ? "bg-cyan-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Calculadora de Impacto Ambiental</span>
            </button>
          </div>
        </div>

        {/* TAB 1: BIOPOLYMER PHYSICAL PROPERTIES SIMULATOR */}
        {activeTab === "lab" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls Panel (5 Cols) */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-base font-display font-bold text-white">
                    Parâmetros Experimentais
                  </h3>
                  <span className="text-xs text-slate-400">Ajuste os controles deslizantes</span>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-emerald-400 transition cursor-pointer"
                  title="Restaurar parâmetros padrão da pesquisa"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Redefinir</span>
                </button>
              </div>

              <div className="space-y-6">
                
                {/* 1. Nanocellulose concentration slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Nanocelulose (CNC):</span>
                    </label>
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                      {nanocellulose.toFixed(1)} % m/m
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5.0"
                    step="0.1"
                    value={nanocellulose}
                    onChange={(e) => setNanocellulose(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>0% (Sem reforço)</span>
                    <span className="text-emerald-400 font-bold">3.5% (Ótimo)</span>
                    <span>5.0% (Aglomeração)</span>
                  </div>
                </div>

                {/* 2. Glycerol plasticizer slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                      <Droplet className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Glicerol (Plastificante):</span>
                    </label>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      {glycerol} % m/m
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="35"
                    step="1"
                    value={glycerol}
                    onChange={(e) => setGlycerol(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>15% (Rígido)</span>
                    <span className="text-emerald-400 font-bold">25% (Balanceado)</span>
                    <span>35% (Muito maleável)</span>
                  </div>
                </div>

                {/* 3. Soil moisture slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                      <Droplet className="w-3.5 h-3.5 text-blue-400" />
                      <span>Umidade do Solo (Compostagem):</span>
                    </label>
                    <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
                      {soilMoisture} %
                    </span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="90"
                    step="5"
                    value={soilMoisture}
                    onChange={(e) => setSoilMoisture(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
                  />
                </div>

                {/* 4. Temperature slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                      <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                      <span>Temperatura do Ambiente:</span>
                    </label>
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                      {temperature} °C
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="45"
                    step="1"
                    value={temperature}
                    onChange={(e) => setTemperature(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>

              </div>
            </div>

            {/* Right Live Simulation Output & Molecular Visualization (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Dynamic Physical Result Gauges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                
                {/* Tensile Strength */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Tensão de Ruptura
                  </span>
                  <div className="flex items-baseline gap-1 my-1">
                    <span className="text-2xl font-display font-bold text-emerald-400">
                      {simulationModel.tensileStrength}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">MPa</span>
                  </div>
                  <span className="text-[10px] text-slate-400">
                    {simulationModel.tensileStrength >= 24 ? "✓ Supera PEBD (24 MPa)" : "Abaixo do padrão"}
                  </span>
                </div>

                {/* Elongation at break */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Alongamento
                  </span>
                  <div className="flex items-baseline gap-1 my-1">
                    <span className="text-2xl font-display font-bold text-cyan-400">
                      {simulationModel.elongation}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">%</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Flexibilidade elástica</span>
                </div>

                {/* Water Solubility */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Solubilidade
                  </span>
                  <div className="flex items-baseline gap-1 my-1">
                    <span className="text-2xl font-display font-bold text-blue-400">
                      {simulationModel.waterSolubility}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">%</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Barreira à água</span>
                </div>

                {/* Days to decompose */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Biodegradação 90%
                  </span>
                  <div className="flex items-baseline gap-1 my-1">
                    <span className="text-2xl font-display font-bold text-amber-400">
                      {simulationModel.daysToDecompose}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">dias</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Em solo vivo</span>
                </div>

              </div>

              {/* Visual Biopolymer Film Simulation Representation */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-display font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>Estrutura Macromolecular & Morfologia do Filme</span>
                  </h4>
                  {simulationModel.isOptimal && (
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Formula Ótima (F3)</span>
                    </span>
                  )}
                </div>

                {/* Visual Canvas Box */}
                <div className="relative h-44 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-4">
                  
                  {/* Visual representation of biopolymer matrix sheet */}
                  <div 
                    className="w-4/5 h-28 rounded-lg shadow-2xl transition-all duration-500 flex flex-col items-center justify-center border relative overflow-hidden"
                    style={{
                      backgroundColor: `rgba(16, 185, 129, ${Math.min(0.85, 0.2 + nanocellulose * 0.12)})`,
                      borderColor: nanocellulose > 4.2 ? "rgba(245, 158, 11, 0.8)" : "rgba(52, 211, 153, 0.6)",
                      opacity: 0.95,
                      filter: `blur(${Math.max(0, (glycerol - 25) * 0.05)}px)`
                    }}
                  >
                    {/* Internal micro-crystals grid texture */}
                    <div className="absolute inset-0 opacity-40 sci-grid-emerald pointer-events-none" />

                    <div className="relative z-10 text-center px-4">
                      <span className="font-mono text-xs font-bold text-white drop-shadow">
                        Bio-Nanocompósito: TPS-{nanocellulose.toFixed(1)}% CNC
                      </span>
                      <p className="text-[11px] text-slate-100/90 font-medium drop-shadow mt-0.5">
                        Espessura: 0,12 mm | Matriz: Amido de Mandioca Plastificado
                      </p>
                    </div>
                  </div>

                  {/* Microbe decomposers / ambient indicators */}
                  <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-400 flex items-center gap-2">
                    <span>Solo: {soilMoisture}% Umid.</span>
                    <span>|</span>
                    <span>T: {temperature}°C</span>
                  </div>
                </div>

                {/* Quality Diagnosis Banner */}
                <div className={`mt-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs ${simulationModel.statusColor} font-medium flex items-start gap-2.5`}>
                  <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-200 mb-0.5">Diagnóstico da Formulação:</strong>
                    <span>{simulationModel.diagnosis}</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 2: ECOLOGICAL & CARBON IMPACT CALCULATOR */}
        {activeTab === "calculator" && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto animate-in fade-in duration-200">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white">
                  Calculadora de Economia Circular & Pegada de Carbono
                </h3>
                <p className="text-xs text-slate-400">
                  Projeção de impacto ambiental gerado pela substituição de plásticos petroquímicos pelo biopolímero sintetizado.
                </p>
              </div>
            </div>

            {/* Slider for kg of plastic */}
            <div className="mb-8 p-5 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs sm:text-sm font-semibold text-slate-200">
                  Volume de Plástico Tradicional Substituído por Mês:
                </label>
                <span className="text-sm font-mono font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-lg border border-emerald-500/30">
                  {plasticKgReplaced.toLocaleString("pt-BR")} kg / mês
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={plasticKgReplaced}
                onChange={(e) => setPlasticKgReplaced(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                <span>50 kg (Escola / Pequeno Comércio)</span>
                <span>1.000 kg (Cooperativa)</span>
                <span>5.000 kg (Média Indústria)</span>
              </div>
            </div>

            {/* Calculated Metric Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center">
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider block mb-1">
                  CO₂ Evitado Anual
                </span>
                <span className="text-3xl font-display font-extrabold text-white block my-1">
                  {(ecoMetrics.co2SavedKg * 12 / 1000).toFixed(1)}
                </span>
                <span className="text-xs text-emerald-400 font-medium">toneladas de CO₂ eq/ano</span>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-center">
                <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider block mb-1">
                  Petróleo Poupado
                </span>
                <span className="text-3xl font-display font-extrabold text-white block my-1">
                  {(ecoMetrics.petroleumSavedLiters * 12).toLocaleString("pt-BR")}
                </span>
                <span className="text-xs text-cyan-400 font-medium">litros de petróleo bruto/ano</span>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 text-center">
                <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider block mb-1">
                  Microplásticos Barrados
                </span>
                <span className="text-3xl font-display font-extrabold text-white block my-1">
                  {(parseFloat(ecoMetrics.microplasticsPreventedMillions) * 12).toFixed(0)} M
                </span>
                <span className="text-xs text-purple-400 font-medium">partículas que não vão ao mar</span>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 text-center">
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider block mb-1">
                  Tempo no Ecossistema
                </span>
                <span className="text-3xl font-display font-extrabold text-white block my-1">
                  - 400
                </span>
                <span className="text-xs text-amber-400 font-medium">anos a menos de persistência</span>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Base de Cálculo Normatizada:</strong> Fatores de emissão obtidos segundo inventário de Avaliação de Ciclo de Vida (ACV) Ecoinvent 3.8 e diretrizes do IPCC para polímeros de amido versus polietileno fóssil de baixa densidade (PEBD).
              </span>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
