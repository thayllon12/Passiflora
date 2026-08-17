import React, { useState, useMemo } from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Search, 
  ArrowUpDown, 
  ShieldCheck, 
  Check, 
  Layers, 
  Table, 
  FileSpreadsheet,
  LineChart
} from "lucide-react";
import { ScienceProject } from "../types";

interface DataResultsSectionProps {
  project: ScienceProject;
}

export const DataResultsSection: React.FC<DataResultsSectionProps> = ({ project }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<"sample" | "tensileMPa" | "degradation30DaysPct" | "waterAbsorptionPct">("tensileMPa");
  const [sortAsc, setSortAsc] = useState(false);
  const [activeDataset, setActiveDataset] = useState<string>("all");

  const results = project.results;

  // Filtered and Sorted Raw Data
  const sortedTable = useMemo(() => {
    return [...results.rawTable]
      .filter((row) => {
        const term = searchTerm.toLowerCase();
        return (
          row.sample.toLowerCase().includes(term) ||
          row.composition.toLowerCase().includes(term) ||
          row.id.toLowerCase().includes(term)
        );
      })
      .sort((a, b) => {
        let valA = a[sortField];
        let valB = b[sortField];
        if (typeof valA === "string") valA = (valA as string).toLowerCase();
        if (typeof valB === "string") valB = (valB as string).toLowerCase();

        if (valA < valB) return sortAsc ? -1 : 1;
        if (valA > valB) return sortAsc ? 1 : -1;
        return 0;
      });
  }, [results.rawTable, searchTerm, sortField, sortAsc]);

  // CSV Export Function
  const handleExportCSV = () => {
    const headers = "ID,Amostra,Composição,Tensão Ruptura (MPa),Alongamento (%),Biodegradação 30d (%),Absorção Água (%)\n";
    const rows = results.rawTable
      .map(
        (r) =>
          `"${r.id}","${r.sample}","${r.composition}",${r.tensileMPa},${r.elongationPct},${r.degradation30DaysPct},${r.waterAbsorptionPct}`
      )
      .join("\n");

    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `dados_experimentais_${project.id}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSort = (field: "sample" | "tensileMPa" | "degradation30DaysPct" | "waterAbsorptionPct") => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  // Max value calculation for Bar Chart
  const maxTensile = Math.max(...results.charts.tensileStrength.values, 30);

  return (
    <section id="resultados" className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Evidências Experimentais</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Resultados & Análise Estatística
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Tratamento quantitativo das amostras ensaiadas, validação de hipótese com análise de variância (ANOVA) e curvas comparativas de desempenho.
          </p>
        </div>

        {/* Results Executive Summary & Statistical Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
            <h3 className="text-base font-display font-bold text-white mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Síntese dos Achados Experimentais</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {results.summary}
            </p>
          </div>

          <div className="lg:col-span-4 bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Rigor Estatístico
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800 text-slate-300">
                  <span>Significância (ANOVA):</span>
                  <span className="font-mono font-bold text-white">{results.statisticalAnalysis.anovaPValue}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800 text-slate-300">
                  <span>Coef. Determinação (R²):</span>
                  <span className="font-mono font-bold text-emerald-400">{results.statisticalAnalysis.rSquared}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800 text-slate-300">
                  <span>Intervalo Confiança:</span>
                  <span className="font-mono text-slate-200">{results.statisticalAnalysis.confidenceInterval}</span>
                </div>
                <div className="flex justify-between py-1 text-slate-300">
                  <span>Amostras em Triplicata:</span>
                  <span className="font-mono font-bold text-cyan-400">{results.statisticalAnalysis.samplesTested} amostras</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 2 Main Interactive Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          
          {/* Chart 1: Degradation Kinetics (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="text-base font-display font-bold text-white flex items-center gap-2">
                  <LineChart className="w-4 h-4 text-emerald-400" />
                  <span>Cinética de Biodegradação em Solo (ASTM D6400)</span>
                </h3>
                <span className="text-xs text-slate-400">Perda de massa gravimétrica (%) vs Tempo (dias)</span>
              </div>
            </div>

            {/* SVG Line Chart */}
            <div className="relative h-64 w-full pt-4 pb-2">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200" preserveAspectRatio="none">
                {/* Grid Lines */}
                {[0, 25, 50, 75, 100].map((yVal, i) => {
                  const y = 180 - (yVal / 100) * 160;
                  return (
                    <g key={i}>
                      <line x1="40" y1={y} x2="490" y2={y} stroke="rgba(255,255,255,0.07)" strokeDasharray="3,3" />
                      <text x="32" y={y + 4} fill="#64748b" fontSize="10" textAnchor="end" fontFamily="monospace">
                        {yVal}%
                      </text>
                    </g>
                  );
                })}

                {/* X Axis Labels */}
                {results.charts.degradation.labels.map((lbl, idx) => {
                  const x = 40 + (idx / (results.charts.degradation.labels.length - 1)) * 450;
                  return (
                    <text key={idx} x={x} y="198" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">
                      {lbl}
                    </text>
                  );
                })}

                {/* Data Lines */}
                {results.charts.degradation.datasets.map((dataset, dIdx) => {
                  if (activeDataset !== "all" && activeDataset !== dataset.name) return null;
                  
                  const points = dataset.data.map((val, idx) => {
                    const x = 40 + (idx / (dataset.data.length - 1)) * 450;
                    const y = 180 - (val / 100) * 160;
                    return `${x},${y}`;
                  }).join(" ");

                  return (
                    <g key={dIdx}>
                      <polyline
                        fill="none"
                        stroke={dataset.color}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={points}
                      />
                      {dataset.data.map((val, idx) => {
                        const x = 40 + (idx / (dataset.data.length - 1)) * 450;
                        const y = 180 - (val / 100) * 160;
                        return (
                          <circle
                            key={idx}
                            cx={x}
                            cy={y}
                            r="4"
                            fill="#020617"
                            stroke={dataset.color}
                            strokeWidth="2.5"
                          />
                        );
                      })}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Legend Toggles */}
            <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-slate-800 text-xs">
              {results.charts.degradation.datasets.map((dataset, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDataset(activeDataset === dataset.name ? "all" : dataset.name)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                    activeDataset === "all" || activeDataset === dataset.name
                      ? "bg-slate-800 border-slate-700 text-white"
                      : "opacity-40 text-slate-500 border-transparent"
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: dataset.color }} />
                  <span className="font-medium truncate max-w-[180px]">{dataset.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chart 2: Tensile Strength Comparison (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-base font-display font-bold text-white mb-1 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                <span>Resistência Mecânica à Tração</span>
              </h3>
              <span className="text-xs text-slate-400 block mb-5">
                Tensão de Ruptura Máxima (MPa) segundo ASTM D882
              </span>

              {/* Custom Bar List */}
              <div className="space-y-3.5">
                {results.charts.tensileStrength.labels.map((lbl, idx) => {
                  const val = results.charts.tensileStrength.values[idx];
                  const color = results.charts.tensileStrength.colors[idx] || "#10b981";
                  const widthPct = (val / maxTensile) * 100;
                  const isHighlight = lbl.includes("3.5%") || lbl.includes("Ótima");

                  return (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span className={`truncate max-w-[200px] ${isHighlight ? "text-emerald-300 font-bold" : "text-slate-300"}`}>
                          {lbl}
                        </span>
                        <span className="font-mono font-bold text-white">
                          {val.toFixed(1)} MPa
                        </span>
                      </div>

                      <div className="h-3 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-0.5">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${widthPct}%`,
                            backgroundColor: color,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
              * A formulação F3 (3.5% CNC) atingiu 28,5 MPa, superando o polietileno fóssil (24 MPa).
            </div>
          </div>

        </div>

        {/* Raw Data Table with Search & CSV Export */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                <Table className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-display font-bold text-white">
                  Tabela Completa de Dados Brutos
                </h3>
                <span className="text-xs text-slate-400">Média de 3 triplicatas de ensaios</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Search input */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar amostra ou formulação..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 pr-3 py-1.5 bg-slate-950 text-xs text-slate-200 rounded-lg border border-slate-800 focus:outline-none focus:border-emerald-500 w-48 sm:w-60"
                />
              </div>

              {/* Export CSV Button */}
              <button
                onClick={handleExportCSV}
                className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-2 rounded-lg border border-slate-700 transition cursor-pointer font-medium"
                title="Baixar planilha CSV com dados brutos"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>Exportar CSV</span>
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800">
                <tr>
                  <th className="py-3 px-3">ID</th>
                  <th
                    onClick={() => handleSort("sample")}
                    className="py-3 px-3 cursor-pointer hover:text-white"
                  >
                    <div className="flex items-center gap-1">
                      <span>Amostra</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-500" />
                    </div>
                  </th>
                  <th className="py-3 px-3">Composição Fórmulada</th>
                  <th
                    onClick={() => handleSort("tensileMPa")}
                    className="py-3 px-3 cursor-pointer hover:text-white"
                  >
                    <div className="flex items-center gap-1">
                      <span>Tensão Ruptura (MPa)</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-500" />
                    </div>
                  </th>
                  <th className="py-3 px-3">Alongamento (%)</th>
                  <th
                    onClick={() => handleSort("degradation30DaysPct")}
                    className="py-3 px-3 cursor-pointer hover:text-white"
                  >
                    <div className="flex items-center gap-1">
                      <span>Degradação 30d (%)</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-500" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort("waterAbsorptionPct")}
                    className="py-3 px-3 cursor-pointer hover:text-white"
                  >
                    <div className="flex items-center gap-1">
                      <span>Absorção H₂O (%)</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-500" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {sortedTable.map((row) => (
                  <tr
                    key={row.id}
                    className={`hover:bg-slate-800/40 transition ${
                      row.sample.includes("★") ? "bg-emerald-950/20 font-medium" : ""
                    }`}
                  >
                    <td className="py-3 px-3 font-mono text-slate-400">{row.id}</td>
                    <td className="py-3 px-3 font-semibold text-white">{row.sample}</td>
                    <td className="py-3 px-3 text-slate-400">{row.composition}</td>
                    <td className="py-3 px-3 font-mono font-bold text-emerald-400">
                      {row.tensileMPa.toFixed(1)}
                    </td>
                    <td className="py-3 px-3 font-mono text-slate-200">
                      {row.elongationPct.toFixed(1)}%
                    </td>
                    <td className="py-3 px-3 font-mono text-cyan-400">
                      {row.degradation30DaysPct.toFixed(1)}%
                    </td>
                    <td className="py-3 px-3 font-mono text-slate-400">
                      {row.waterAbsorptionPct.toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
};
