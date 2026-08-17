import { ScienceProject } from "../types";

export const initialProjects: ScienceProject[] = [
  {
    id: "ecopolymer-cassava",
    title: "Síntese e Caracterização de Bioplástico Termoplástico Reforçado com Nanocelulose a partir de Resíduos Agroindustriais da Mandioca e Cana-de-Açúcar",
    shortTitle: "EcoPolymer: Bioplástico de Mandioca & Nanocelulose",
    tagline: "Uma alternativa sustentável aos plásticos petroquímicos de uso único com degradação acelerada em compostagem e alta resistência mecânica.",
    category: "Biotecnologia & Ciências Ambientais",
    subCategory: "Polímeros Verdes e Economia Circular",
    level: "Ensino Médio e Técnico Integrado",
    institution: "Instituto Federal de Educação, Ciência e Tecnologia (IFSP / IF)",
    year: "2026",
    fairName: "Mostra Nacional de Ciência e Tecnologia & FEBRACE",
    standNumber: "Estande BIO-42 (Pavilhão de Inovação)",
    awards: [
      "1º Lugar Geral - Feira de Ciências e Tecnologia Estadual",
      "Prêmio Jovem Cientista Inovador - Sociedade Brasileira de Polímeros",
      "Credencial de Excelência para Feira Internacional de Ciências"
    ],
    badges: [
      { label: "Pesquisa Experimental", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" },
      { label: "Patente em Depósito (INPI)", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40" },
      { label: "ODS 12 & 13 ONU", color: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
      { label: "Norma ASTM D882 & D6400", color: "bg-purple-500/20 text-purple-300 border-purple-500/40" }
    ],
    stats: [
      { label: "Taxa de Biodegradação", value: "96.4", unit: "%", sub: "em solo compostável em 45 dias", highlight: true },
      { label: "Tensão de Ruptura", value: "28.5", unit: "MPa", sub: "comparável ao PEBD comercial (24 MPa)" },
      { label: "Redução de Custo", value: "62", unit: "%", sub: "frente a bioplásticos importados (PLA)" },
      { label: "Amostras Ensaiadas", value: "144", unit: "unid", sub: "triplicatas com p-valor < 0,001" }
    ],
    abstractPt: "A crise global da poluição por plásticos sintéticos derivados de petróleo exige o desenvolvimento de materiais alternativos biodegradáveis e de baixo custo. O presente trabalho investigou a síntese e caracterização físico-química, mecânica e de biodegradabilidade de um bioplástico termoplástico (TPS) formulado a partir do amido residual extraído de cascas de mandioca (Manihot esculenta) reforçado com nanocelulose obtida por hidrólise ácida do bagaço de cana-de-açúcar. Foram produzidas cinco formulações variando a concentração de nanocelulose (0% a 5% m/m) e glicerol como plastificante (20% a 30% m/m). Os filmes foram submetidos a ensaios de tração mecânica (ASTM D882), espectroscopia de infravermelho por transformada de Fourier (FTIR), ensaio de solubilidade em água e teste de perda de massa por compostagem controlada em solo (ASTM D6400). A formulação com 3,5% de nanocelulose apresentou tensão de ruptura máxima de 28,5 MPa e alongamento de 42%, superando filmes de amido puro em 190% e atingindo 96,4% de biodegradação em 45 dias sem liberar resíduos fitotóxicos. O material demonstrou viabilidade técnico-econômica para fabricação de embalagens flexíveis descartáveis e mudas agrícolas.",
    abstractEn: "The global environmental crisis caused by single-use petroleum-based plastics necessitates the development of cost-effective, high-performance biodegradable materials. This study investigated the synthesis, characterization, and biodegradation of a thermoplastic biopolymer (TPS) derived from cassava peel waste (Manihot esculenta) reinforced with cellulose nanocrystals (CNC) extracted via acid hydrolysis from sugarcane bagasse. Five formulation variants were prepared by adjusting glycerol plasticizer content and nanocellulose concentration (0% to 5% wt). Samples underwent mechanical tensile strength testing (ASTM D882), FTIR spectroscopy, water solubility analysis, and accelerated soil burial biodegradation tests (ASTM D6400). The formulation containing 3.5% CNC achieved a peak tensile strength of 28.5 MPa and 42% elongation at break, outperforming pure starch films by 190% while achieving 96.4% complete biodegradation in 45 days with zero phytotoxicity. The proposed bio-nanocomposite presents a viable, circular-economy alternative for flexible packaging and agricultural mulching films.",
    keywords: ["Bioplásticos", "Nanocelulose", "Amido de Mandioca", "Biodegradabilidade", "Economia Circular", "Ensaios Mecânicos"],
    generalObjective: "Desenvolver, caracterizar e validar um bio-nanocompósito termoplástico biodegradável utilizando amido de cascas de mandioca residual reforçado com nanocelulose de bagaço de cana-de-açúcar como alternativa sustentável a polímeros fósseis de uso único.",
    specificObjectives: [
      "Otimizar o processo de extração de amido a partir de resíduos de casca de mandioca com rendimento superior a 70%.",
      "Sintetizar nanocelulose por hidrólise ácida controlada (H₂SO₄ 64% m/m) a partir do bagaço de cana-de-açúcar.",
      "Avaliar o efeito de diferentes concentrações de reforço nanométrico na resistência à tração e módulo de elasticidade segundo a norma ASTM D882.",
      "Monitorar a cinética de biodegradação do filme em condições de compostagem simulada e verificar ausência de ecotoxicidade em sementes de Lactuca sativa."
    ],
    sdgs: [
      { number: 9, name: "Indústria, Inovação e Infraestrutura", description: "Desenvolvimento de novos materiais sustentáveis de alta tecnologia.", color: "bg-amber-600" },
      { number: 12, name: "Consumo e Produção Responsáveis", description: "Aproveitamento integral de resíduos agrícolas locais em lógica circular.", color: "bg-orange-600" },
      { number: 13, name: "Ação Contra a Mudança Global do Clima", description: "Substituição de polímeros fósseis reduzindo pegada de carbono em até 78%.", color: "bg-emerald-600" },
      { number: 14, name: "Vida na Água", description: "Zero formação de microplásticos persistentes e degradação em meio aquoso.", color: "bg-blue-600" }
    ],
    problem: {
      context: "Anualmente são produzidas mais de 400 milhões de toneladas de plástico no mundo, das quais cerca de 85% acabam em aterros sanitários ou ecossistemas aquáticos, levando até 500 anos para se fragmentar em microplásticos nocivos. Simultaneamente, o setor sucroalcooleiro e a cadeia da mandioca no Brasil geram milhões de toneladas de subprodutos agroindustriais subutilizados.",
      impacts: [
        { title: "Persistência Ambiental", desc: "450+ anos para degradação do polietileno em aterros e oceanos.", icon: "AlertTriangle" },
        { title: "Emissão de Gases Fósseis", desc: "6 kg de CO₂ emitidos por kg de plástico de petróleo tradicional.", icon: "Flame" },
        { title: "Desperdício de Biomassa", desc: "Milhões de toneladas de bagaço e cascas queimadas ou descartadas.", icon: "Trash2" }
      ],
      comparison: {
        conventional: {
          title: "Plástico Convencional (PEBD / PP)",
          items: [
            "Origem fóssil não renovável (Petróleo)",
            "Tempo de decomposição: 200 a 450 anos",
            "Fragmenta em microplásticos bioacumulativos",
            "Liberação de bisfenóis e ftalatos tóxicos"
          ],
          disadvantage: "Impacto ecológico crítico e dependência fóssil"
        },
        proposed: {
          title: "EcoPolymer (Bioplástico Desenvolvido)",
          items: [
            "100% matéria-prima vegetal e resíduos agroindustriais",
            "Biodegradação em solo: < 60 dias em compostagem",
            "Atóxico e biocompatível com fertilização do solo",
            "Reforço mecânico nanométrico de alta performance (28,5 MPa)"
          ],
          advantage: "Economia circular real com custo 62% menor que PLA importado"
        }
      }
    },
    hypothesis: {
      statement: "A incorporação de cristais de nanocelulose extraídos do bagaço de cana-de-açúcar (na faixa de 2% a 4% m/m) em matriz termoplástica de amido de casca de mandioca proporcionará um aumento significativo (> 150%) na resistência mecânica à tração e barreira à umidade, mantendo taxa de biodegradação superior a 90% em 60 dias.",
      rationale: "As pontes de hidrogênio formadas entre a rede de nanocelulose de alta razão de aspecto e as cadeias poliméricas de amilose/amilopectina reduzem a mobilidade segmental da matriz, agindo como reforço estrutural nanométrico sem impedir o ataque enzimático de microrganismos decompositores do solo.",
      validationCriteria: [
        "Aumento da tensão de ruptura de 9,8 MPa (matriz pura) para > 25 MPa.",
        "Redução da permeabilidade ao vapor d'água em pelo menos 35%.",
        "Perda de massa por biodegradação em solo superior a 85% em 45 dias."
      ],
      status: "Confirmada",
      confidenceRate: "99.8% (p < 0,001)"
    },
    methodology: {
      overview: "A metodologia adotada seguiu rigoroso delineamento experimental fatorial 3x2 em triplicata, compreendendo extração, síntese química, conformação de filmes por casting e ensaios normatizados de caracterização física, mecânica e biológica.",
      steps: [
        {
          stepNumber: 1,
          title: "Coleta e Beneficiamento de Resíduos",
          description: "Higienização, secagem em estufa a 50°C por 24h e moagem das cascas de mandioca e do bagaço de cana até granulometria de 60 mesh.",
          timeframe: "Semanas 1 a 3",
          keyOutcome: "Obtenção de 4,2 kg de farinha de amido residual e 2,8 kg de celulose purificada.",
          equipmentUsed: ["Moinho de Facas", "Estufa de Circulação de Ar", "Peneirador Vibratório"]
        },
        {
          stepNumber: 2,
          title: "Isolamento de Nanocelulose (CNC)",
          description: "Hidrólise ácida com H₂SO₄ 64% (p/p) a 45°C sob agitação mecânica por 45 min, seguida de centrifugação a 10.000 rpm e diálise até pH neutro (7.0).",
          timeframe: "Semanas 4 a 6",
          keyOutcome: "Suspensão coloidal estável de nanocristais de celulose com rendimento de 38,4%.",
          equipmentUsed: ["Ultrassom de Ponteira (Sonics 500W)", "Centrífuga Refrigerada", "Membrana de Diálise"]
        },
        {
          stepNumber: 3,
          title: "Síntese dos Filmes por Solução-Casting",
          description: "Gelatinização do amido de mandioca (5% m/v) a 85°C sob agitação por 20 min com glicerol (25% p/p em relação ao amido) e incorporação das frações de nanocelulose (0%, 1%, 2.5%, 3.5% e 5%).",
          timeframe: "Semanas 7 a 9",
          keyOutcome: "Moldagem de 60 corpos de prova com espessura controlada de 0,12 ± 0,01 mm.",
          equipmentUsed: ["Agitador Magnético Aquecido", "Micrômetro Digital Mitutoyo", "Placas de Teflon"]
        },
        {
          stepNumber: 4,
          title: "Ensaios Mecânicos (ASTM D882)",
          description: "Condicionamento a 23°C e 50% UR por 48h. Testes de tração com velocidade de ensaio de 12,5 mm/min para determinação de Tensão de Ruptura, Módulo de Young e Alongamento.",
          timeframe: "Semanas 10 a 12",
          keyOutcome: "Curvas de tensão-deformação completas e identificação da formulação ótima (F4 - 3.5% CNC).",
          equipmentUsed: ["Máquina Universal de Ensaios EMIC", "Extensômetro Óptico"]
        },
        {
          stepNumber: 5,
          title: "Ensaios de Biodegradabilidade & Fitotoxidade",
          description: "Amostras enterradas em solo com teor de matéria orgânica controlada a 28°C e 65% de umidade. Pesagens periódicas aos 7, 14, 21, 30 e 45 dias. Teste de germinação com Lactuca sativa.",
          timeframe: "Semanas 13 a 18",
          keyOutcome: "Decomposição de 96,4% aos 45 dias e taxa de germinação de sementes de 98% no solo resultante.",
          equipmentUsed: ["Balança Analítica de Precisão (0,0001g)", "Câmara Climática BOD", "Microscópio Óptico"]
        }
      ],
      variables: {
        independent: [
          "Concentração de Nanocelulose (0%, 1.0%, 2.5%, 3.5%, 5.0% m/m)",
          "Percentual de Glicerol Plastificante (20%, 25%, 30% m/m)"
        ],
        dependent: [
          "Tensão de Ruptura na Tração (MPa)",
          "Alongamento percentual na ruptura (%)",
          "Taxa de Perda de Massa por Biodegradação (%)",
          "Solubilidade em Água e Permeabilidade ao Vapor (g/m·dia·kPa)"
        ],
        controlled: [
          "Espessura do filme (0,12 mm)",
          "Temperatura e tempo de gelatinização (85°C / 20 min)",
          "Umidade do solo de teste (65% ± 5%)",
          "Temperatura ambiente dos ensaios (23°C ± 2°C)"
        ]
      },
      materials: [
        { name: "Casca de Mandioca Residual", function: "Fonte de amido (matriz polimérica)", source: "Farinheiras locais e feiras livres", cost: "R$ 0,00 (Resíduo)" },
        { name: "Bagaço de Cana-de-Açúcar", function: "Fonte de nanocelulose (fase de reforço)", source: "Engenho local / Usina regional", cost: "R$ 0,00 (Resíduo)" },
        { name: "Glicerol Grau P.A.", function: "Plastificante hidrofílico", source: "Reagente de laboratório", cost: "R$ 14,50 / L" },
        { name: "Ácido Sulfúrico (H₂SO₄ 64%)", function: "Agente de hidrólise seletiva", source: "Laboratório de Química", cost: "R$ 18,00 / L" },
        { name: "Água Deionizada", function: "Solvente de dispersão", source: "Destilador laboratorial", cost: "R$ 2,00 / L" }
      ]
    },
    simulation: {
      defaultMoisture: 65,
      defaultTemp: 28,
      defaultGlycerol: 25,
      defaultNanocellulose: 3.5
    },
    results: {
      summary: "Os resultados comprovaram a sinergia entre o amido de mandioca e a nanocelulose de bagaço de cana. A adição de 3,5% de nanocelulose elevou a resistência à tração de 9,8 MPa para 28,5 MPa (+190,8%) e reduziu a solubilidade em água de 38,2% para 14,6%. No teste de biodegradação acelerada em solo, a perda de massa atingiu 96,4% em 45 dias, sem geração de microplásticos nem fitotoxidade.",
      statisticalAnalysis: {
        anovaPValue: "p < 0,0001 (Estatisticamente Significativo)",
        rSquared: "R² = 0,984",
        samplesTested: 144,
        confidenceInterval: "95% (IC: 27,6 - 29,4 MPa)"
      },
      charts: {
        degradation: {
          labels: ["Dia 0", "Dia 7", "Dia 14", "Dia 21", "Dia 30", "Dia 45", "Dia 60"],
          datasets: [
            { name: "EcoPolymer (3.5% CNC - Formulação Ótima)", color: "#10b981", data: [0, 18, 41, 68, 88, 96.4, 99.2] },
            { name: "Amido Puro (Controle sem Nanocelulose)", color: "#38bdf8", data: [0, 29, 62, 85, 98, 100, 100] },
            { name: "PLA Comercial (Bioplástico Importado)", color: "#fbbf24", data: [0, 4, 11, 24, 45, 72, 84] },
            { name: "PEBD Fóssil (Plástico Convencional)", color: "#f43f5e", data: [0, 0, 0.1, 0.1, 0.2, 0.3, 0.4] }
          ]
        },
        tensileStrength: {
          labels: ["F0: Amido Puro (0% CNC)", "F1: 1.0% CNC", "F2: 2.5% CNC", "F3: 3.5% CNC (Ótima)", "F4: 5.0% CNC (Aglomeração)", "PEBD Comercial"],
          values: [9.8, 15.2, 22.4, 28.5, 24.1, 24.0],
          colors: ["#64748b", "#38bdf8", "#0ea5e9", "#10b981", "#f59e0b", "#e11d48"]
        },
        costComparison: {
          labels: ["EcoPolymer (Este Trabalho)", "PLA Industrial Importado", "PBS (Polisuccinato de Butileno)", "PEBD Virgem Petroquímico"],
          values: [6.40, 24.80, 31.50, 11.20]
        }
      },
      rawTable: [
        { id: "S-01", sample: "F0 (Controle)", composition: "Amido 100% + Glicerol 25%", tensileMPa: 9.8, elongationPct: 68.4, degradation30DaysPct: 98.0, waterAbsorptionPct: 52.3 },
        { id: "S-02", sample: "F1 (1.0% CNC)", composition: "Amido 99% + CNC 1% + Glicerol 25%", tensileMPa: 15.2, elongationPct: 55.1, degradation30DaysPct: 94.2, waterAbsorptionPct: 41.8 },
        { id: "S-03", sample: "F2 (2.5% CNC)", composition: "Amido 97.5% + CNC 2.5% + Glicerol 25%", tensileMPa: 22.4, elongationPct: 48.7, degradation30DaysPct: 91.5, waterAbsorptionPct: 32.1 },
        { id: "S-04", sample: "F3 (3.5% CNC) ★", composition: "Amido 96.5% + CNC 3.5% + Glicerol 25%", tensileMPa: 28.5, elongationPct: 42.0, degradation30DaysPct: 88.0, waterAbsorptionPct: 24.6 },
        { id: "S-05", sample: "F4 (5.0% CNC)", composition: "Amido 95% + CNC 5% + Glicerol 25%", tensileMPa: 24.1, elongationPct: 28.3, degradation30DaysPct: 84.7, waterAbsorptionPct: 26.2 },
        { id: "S-06", sample: "PEBD Comercial", composition: "Polietileno de Baixa Densidade 100%", tensileMPa: 24.0, elongationPct: 150.0, degradation30DaysPct: 0.2, waterAbsorptionPct: 0.8 }
      ]
    },
    logbook: [
      {
        date: "14/02/2026",
        phase: "Planejamento",
        title: "Definição do Delineamento Experimental e Levantamento Bibliográfico",
        entry: "Reunião de planejamento com orientadores no laboratório do campus. Definidas as faixas de hidrólise ácida da celulose e o cronograma para obtenção das cascas em feira agroecológica municipal.",
        author: "Mariana & Carlos"
      },
      {
        date: "03/03/2026",
        phase: "Síntese",
        title: "Primeira Batelada de Hidrólise Ácida do Bagaço",
        entry: "Realizada hidrólise com H2SO4 a 64%. O tempo de agitação a 45°C precisou de rigoroso controle térmico com banho ultratermostatizado. Observou-se suspensão leitosa translúcida após diálise de 5 dias.",
        author: "Mariana Silva"
      },
      {
        date: "22/03/2026",
        phase: "Análise Crítica",
        title: "Detecção de Bolhas de Ar nos Filmes de Casting (Desvio Corrigido)",
        entry: "Os primeiros corpos de prova apresentaram microbolhas causadas pela agitação magnética vigorosa que fragilizavam os filmes. Adicionamos etapa de sonicação em banho de ultrassom por 15 minutos antes da vazagem em placa.",
        divergenceOrError: "Microbolhas de ar reduziam a tensão de ruptura para apenas 12 MPa.",
        solutionFound: "Desgaseificação por ultrassom e vazagem lenta a 60°C eliminaram 100% dos poros microscópicos.",
        author: "Carlos Eduardo"
      },
      {
        date: "18/04/2026",
        phase: "Ensaios",
        title: "Ensaios de Tração Mecânica no Dinamômetro EMIC",
        entry: "Testados 30 corpos de prova em formato haltere segundo norma ASTM D882. A formulação F3 (3.5% CNC) atingiu o pico de 28.5 MPa, superando a meta inicial estabelecida no projeto.",
        author: "Equipe"
      },
      {
        date: "10/05/2026",
        phase: "Conclusão",
        title: "Fechamento dos Dados de Biodegradação e Análise Estatística",
        entry: "Aos 45 dias de enterro em solo, as amostras de F3 apresentaram desintegração visual completa e 96.4% de perda de massa por gravimetria. Teste de germinação com sementes de alface atingiu 98% de índice de vigor.",
        author: "Mariana Silva"
      }
    ],
    gallery: [
      {
        id: "gal-1",
        title: "Microscopia Eletrônica de Varredura (MEV)",
        category: "Microscopia",
        caption: "Fratura criogênica revelando a excelente dispersão e ancoragem interfacial dos nanocristais de celulose na matriz de amido (aumento 10.000x).",
        url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
        tag: "MEV 10.000x"
      },
      {
        id: "gal-2",
        title: "Filme Bioplástico Termoplástico Flexível",
        category: "Protótipos",
        caption: "Filme flexível e transparente obtido por casting com espessura uniforme de 0,12 mm, apto para termoformagem e selagem térmica.",
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        tag: "Protótipo F3"
      },
      {
        id: "gal-3",
        title: "Ensaio de Tração Mecânica (ASTM D882)",
        category: "Ensaios",
        caption: "Corpo de prova posicionado nas garras de aperto pneumático do dinamômetro durante o registro em tempo real da curva de tensão x deformação.",
        url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
        tag: "Ensaio Mecânico"
      },
      {
        id: "gal-4",
        title: "Bancada de Extração de Nanocelulose",
        category: "Bancada",
        caption: "Reator de vidro borossilicato sob controle de temperatura e agitação mecânica durante a etapa de hidrólise ácida com ácido sulfúrico.",
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        tag: "Laboratório"
      },
      {
        id: "gal-5",
        title: "Monitoramento de Biodegradação em Solo",
        category: "Ensaios",
        caption: "Sequência comparativa de perda de integridade física e colonização por fungos e bactérias decompositoras aos dias 0, 15, 30 e 45.",
        url: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
        tag: "Bioensaio Solo"
      },
      {
        id: "gal-6",
        title: "Sacola e Embalagem Agrícola Biodegradável",
        category: "Protótipos",
        caption: "Protótipos funcionais aplicados: tubete biodegradável para mudas florestais nativas que dispensa descarte e se transforma em adubo no plantio.",
        url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
        tag: "Aplicação Real"
      }
    ],
    conclusions: {
      mainTakeaway: "A pesquisa validou com sucesso a viabilidade científica, tecnológica e econômica da transformação de resíduos agroindustriais de baixo valor agregado em bioplásticos de alta resistência e degradação sustentável.",
      points: [
        "A adição de 3,5% de nanocelulose conferiu ganho mecânico de 190,8% em relação à matriz de amido puro, alcançando resistência à tração de 28,5 MPa (superior ao PEBD petroquímico).",
        "A biodegradação de 96,4% aos 45 dias em solo comprovou descarte seguro sem risco de contaminação por microplásticos ou lixiviados ecotóxicos.",
        "O custo estimado de produção em escala piloto é de R$ 6,40/kg, apresentando vantagem competitiva direta de 62% frente ao PLA comercial importado.",
        "O processo gera valor em comunidades agrícolas locais, fomentando a bioeconomia circular e o cumprimento de 4 ODS da Agenda 2030."
      ],
      futureWork: [
        "Desenvolver processo de extrusão de filme soprado contínuo (Blow Film Extrusion) para escalabilidade industrial.",
        "Incorporar extratos antioxidantes de casca de uva/jabuticaba para criar embalagens bioativas inteligentes que aumentam o shelf-life de alimentos.",
        "Testes de certificação laboratorial ABNT NBR 15448 para compostabilidade comercial."
      ],
      patentsOrApplicability: "Processo sob registro de Patente de Invenção junto ao INPI sob título 'Processo de Síntese de Bioplástico Nanoestruturado a partir de Coprodutos da Mandiocultura e Cana'."
    },
    team: {
      researchers: [
        {
          name: "Mariana Silva Santos",
          role: "Estudante Pesquisadora Principal",
          school: "Curso Técnico Integrado em Química - Instituto Federal",
          bio: "Pesquisadora apaixonada por química verde, novos materiais e sustentabilidade ambiental. Bolsista de Iniciação Científica Júnior com foco em polímeros sustentáveis.",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
          email: "mariana.santos@exemplo.edu.br"
        },
        {
          name: "Carlos Eduardo Oliveira",
          role: "Estudante Co-Pesquisador",
          school: "Curso Técnico Integrado em Biotecnologia - Instituto Federal",
          bio: "Especialista no tratamento biológico de resíduos, ensaios de biodegradabilidade em solo e modelagem estatística de dados experimentais.",
          avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
          email: "carlos.oliveira@exemplo.edu.br"
        }
      ],
      mentors: [
        {
          name: "Prof. Dr. Roberto Albuquerque",
          role: "Orientador",
          title: "Doutor em Engenharia de Materiais e Nanotecnologia",
          institution: "Departamento de Química e Materiais Avançados",
          bio: "Orientador de projetos de iniciação científica há mais de 12 anos, com publicações internacionais em nanocompósitos e biopolímeros.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Profa. Me. Amanda Fontes",
          role: "Coorientadora",
          title: "Mestre em Biotecnologia e Processos Ambientais",
          institution: "Laboratório de Ecotoxicologia e Microbiologia",
          bio: "Pesquisadora com foco em avaliação de ciclo de vida (ACV) e toxicidade ambiental de novos insumos biobaseados.",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
        }
      ],
      collaborators: [
        "Laboratório Multiusuário de Microscopia e Caracterização Estrutural",
        "Cooperativa Regional de Produtores de Mandioca e Derivados",
        "Núcleo de Inovação Tecnológica (NIT)"
      ]
    },
    references: [
      {
        authors: "AVÉROUS, L.; POLLET, E.",
        year: "2024",
        title: "Biodegradable Polymers and Green Nanocomposites: Processing, Characterization and Applications",
        publication: "Springer International Publishing, 2nd Edition",
        doi: "10.1007/978-3-030-88090-1"
      },
      {
        authors: "SILVA, R. M.; FERREIRA, J. P.; SOUZA, A. C.",
        year: "2025",
        title: "Extração e Caracterização de Nanocristais de Celulose a partir de Bagaço de Cana-de-Açúcar para Reforço em Matrizes Amiláceas",
        publication: "Revista Brasileira de Polímeros e Meio Ambiente, v. 34, n. 2, p. 145-158",
        doi: "10.1590/0104-1428.2025032"
      },
      {
        authors: "ASTM INTERNATIONAL",
        year: "2023",
        title: "ASTM D882-18: Standard Test Method for Tensile Properties of Thin Plastic Sheeting",
        publication: "West Conshohocken, PA: ASTM International",
        doi: "10.1520/D0882-18"
      },
      {
        authors: "ASTM INTERNATIONAL",
        year: "2022",
        title: "ASTM D6400-19: Standard Specification for Labeling of Plastics Designed to be Aerobically Composted in Municipal or Industrial Facilities",
        publication: "West Conshohocken, PA: ASTM International",
        doi: "10.1520/D6400-19"
      }
    ]
  },
  {
    id: "aquasense-iot",
    title: "AquaSense: Sistema Autônomo e de Baixo Custo para Detecção Espectrofotométrica de Microplásticos e Turbidez em Mananciais Urbanos com IoT",
    shortTitle: "AquaSense: Monitoramento Inteligente de Mananciais",
    tagline: "Bóia sensorial autônoma alimentada por energia solar com processamento em microcontrolador ESP32 e telemetria aberta.",
    category: "Engenharia & Ciência da Computação",
    subCategory: "Robótica, Internet das Coisas e Meio Ambiente",
    level: "Ensino Médio e Técnico",
    institution: "Colégio Técnico e Escola Estadual de Educação Profissional",
    year: "2026",
    fairName: "Feira Brasileira de Ciências e Engenharia (FEBRACE)",
    standNumber: "Estande ENG-18",
    awards: [
      "1º Lugar na Categoria Engenharia Eletrônica",
      "Prêmio Especial de Inovação em Recursos Hídricos"
    ],
    badges: [
      { label: "Hardware Aberto", color: "bg-blue-500/20 text-blue-300 border-blue-500/40" },
      { label: "IoT & Telemetria LoRa", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40" },
      { label: "ODS 6 & 11 ONU", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" }
    ],
    stats: [
      { label: "Precisão de Detecção", value: "94.2", unit: "%", sub: "comparado a espectrofotômetro de bancada", highlight: true },
      { label: "Custo por Unidade", value: "R$ 320", unit: "", sub: "vs R$ 15.000 de sondas comerciais" },
      { label: "Autonomia Energética", value: "100", unit: "%", sub: "painel fotovoltaico de 10W integrado" },
      { label: "Leituras em Tempo Real", value: "1.440", unit: "dia", sub: "uma amostra a cada minuto" }
    ],
    abstractPt: "A contaminação de mananciais por partículas de microplásticos representa uma ameaça crescente à saúde pública e à biodiversidade. Os métodos tradicionais de amostragem exigem coletas manuais e equipamentos de laboratório de custo proibitivo para pequenas bacias hidrográficas. Este projeto desenvolveu e validou o 'AquaSense', uma bóia sensorial flutuante autônoma que utiliza espectrofotometria óptica com LEDs ultravioleta/infravermelho e fotodiodos de silício para quantificar a dispersão de luz causada por partículas de microplásticos e turbidez em tempo real. Os dados são processados por microcontrolador ESP32 e transmitidos via protocolo LoRaWAN e rede celular para um painel web aberto. Os ensaios de calibração em laboratório revelaram acurácia de 94,2% com limite de detecção de 15 partículas/litro, viabilizando uma rede de alerta precoce e vigilância ambiental com custo 97% inferior às soluções comerciais.",
    abstractEn: "Microplastic contamination in urban water reservoirs poses a significant ecological and public health concern. Conventional monitoring requires labor-intensive manual sampling and costly laboratory equipment. This work introduces AquaSense, a low-cost, solar-powered autonomous sensing buoy equipped with an optical spectrophotometric sensor array using UV/NIR LEDs and silicon photodiodes to measure microplastic scattering and turbidity in real time. Sensor data is processed by an ESP32 microcontroller and broadcasted via LoRaWAN telemetry to an open-access cloud dashboard. Laboratory validation demonstrated 94.2% correlation with benchmark spectrophotometers and a limit of detection of 15 particles/L, demonstrating a democratic, scalable solution for water quality protection.",
    keywords: ["Microplásticos", "Qualidade da Água", "Internet das Coisas (IoT)", "Hardware Aberto", "Sensores Ópticos", "Monitoramento Ambiental"],
    generalObjective: "Desenvolver, calibrar e validar um sistema embarcado de monitoramento contínuo e de baixo custo para detecção de microplásticos e parâmetros físico-químicos em corpos hídricos superficiais.",
    specificObjectives: [
      "Projetar circuito optoeletrônico de absorção e espalhamento de luz para partículas entre 100 µm e 5 mm.",
      "Construir cápsula flutuante estanque em PETG reciclado impressa em 3D.",
      "Implementar telemetria LoRaWAN de longo alcance e transmissão de alertas em caso de picos de contaminação.",
      "Validar a correlação de dados em campo no Rio Municipal durante 30 dias contínuos."
    ],
    sdgs: [
      { number: 6, name: "Água Potável e Saneamento", description: "Monitoramento acessível de contaminantes em mananciais de abastecimento.", color: "bg-blue-600" },
      { number: 11, name: "Cidades e Comunidades Sustentáveis", description: "Infraestrutura urbana inteligente para resiliência hídrica.", color: "bg-amber-600" },
      { number: 14, name: "Vida na Água", description: "Prevenção da entrada de microplásticos na cadeia alimentar marinha.", color: "bg-teal-600" }
    ],
    problem: {
      context: "Mais de 70% dos corpos hídricos urbanos no Brasil não dispõem de monitoramento em tempo real devido ao alto custo das estações automáticas tradicionais, permitindo descargas clandestinas de efluentes e proliferação de microplásticos.",
      impacts: [
        { title: "Detecção Tardia", desc: "Amostragens manuais mensais falham em captar picos agudos de contaminação.", icon: "Clock" },
        { title: "Custo Excessivo", desc: "Sondas multiparâmetros importadas custam dezenas de milhares de reais.", icon: "DollarSign" },
        { title: "Ingestão Humana", desc: "Microplásticos penetram nas estações de tratamento convencionais.", icon: "AlertOctagon" }
      ],
      comparison: {
        conventional: {
          title: "Monitoramento Tradicional",
          items: ["Coletas manuais quinzenais", "Análise laboratorial lenta (dias)", "Custo de equipamento > R$ 15.000", "Dados isolados e fechados"],
          disadvantage: "Lento, caro e pontual"
        },
        proposed: {
          title: "Sistema AquaSense",
          items: ["Amostragem em tempo real (minuto a minuto)", "Transmissão remota sem fio LoRa", "Custo total de hardware < R$ 350", "Dados abertos para a comunidade"],
          advantage: "Acessível, autônomo e de alta frequência"
        }
      }
    },
    hypothesis: {
      statement: "A correlação matemática entre o índice de espalhamento óptico em comprimentos de onda de 380 nm e 850 nm permite quantificar a densidade de microplásticos em suspensão aquosa com coeficiente de determinação R² > 0,90.",
      rationale: "Polímeros plásticos microscópicos provocam dispersão Mie característica na luz ultravioleta próxima que difere do espalhamento produzido por argila e matéria orgânica coloidal.",
      validationCriteria: ["R² > 0,90 frente a curvas padrão de microesferas de polietileno", "Autonomia contínua superior a 30 dias sem intervenção humana"],
      status: "Confirmada",
      confidenceRate: "98.5%"
    },
    methodology: {
      overview: "O projeto combinou engenharia optoeletrônica, modelagem CAD 3D, calibração analítica em laboratório e testes de validação em ambiente fluvial real.",
      steps: [
        { stepNumber: 1, title: "Modelagem Óptica e Circuito", description: "Design do sensor espectrofotométrico com amplificadores operacionais de baixo ruído e fendas colimadoras.", timeframe: "Mês 1", keyOutcome: "Placa de circuito impresso (PCB) funcional de alta sensibilidade.", equipmentUsed: ["Osciloscópio Digital", "Software KiCad"] },
        { stepNumber: 2, title: "Prototipagem Mecânica e Estanqueidade", description: "Impressão 3D da carcaça hidrodinâmica em filamento PETG e vedação com juntas de silicone e resina epóxi.", timeframe: "Mês 2", keyOutcome: "Bóia com índice de proteção IP68 e equilíbrio hidrostático.", equipmentUsed: ["Impressora 3D Creality", "Câmara de Vácuo"] },
        { stepNumber: 3, title: "Calibração Analítica em Laboratório", description: "Preparação de padrões com concentrações conhecidas de micropartículas de PET, PE e PP (10 a 500 partículas/L).", timeframe: "Mês 3", keyOutcome: "Curva analítica de calibração com limite de detecção de 15 part/L.", equipmentUsed: ["Microscópio Óptico com Câmera", "Espectrofotômetro Hach"] },
        { stepNumber: 4, title: "Instalação em Campo e Telemetria", description: "Fixação da bóia em ponto estratégico de manancial urbano com transmissão diária via gateway LoRa.", timeframe: "Mês 4", keyOutcome: "Registro de 43.200 leituras ininterruptas e identificação de 3 eventos anômalos.", equipmentUsed: ["Gateway LoRaWAN", "Servidor Cloud"] }
      ],
      variables: {
        independent: ["Concentração de microplásticos em suspensão (partículas/L)", "Turbidez da água (NTU)"],
        dependent: ["Tensão analógica de saída do fotodiodo (mV)", "Índice espectral calculado"],
        controlled: ["Intensidade de emissão dos LEDs", "Comprimento do caminho óptico (10 mm)", "Temperatura da amostra"]
      },
      materials: [
        { name: "Microcontrolador ESP32-WROOM", function: "Processamento e rádio", source: "Comércio eletrônico", cost: "R$ 45,00" },
        { name: "Módulo Transceptor LoRa SX1276", function: "Comunicação sem fio de longo alcance", source: "Distribuidor nacional", cost: "R$ 68,00" },
        { name: "Painel Solar 10W + Módulo MPPT", function: "Autonomia energética solar", source: "Comércio local", cost: "R$ 75,00" },
        { name: "Filamento PETG e Resina", function: "Carcaça e vedação estanque", source: "Laboratório escolar", cost: "R$ 55,00" }
      ]
    },
    simulation: {
      defaultMoisture: 80,
      defaultTemp: 24,
      defaultGlycerol: 20,
      defaultNanocellulose: 4.0
    },
    results: {
      summary: "O AquaSense demonstrou acurácia analítica de 94,2% e manteve operação ininterrupta durante 30 dias de teste no rio municipal. O sistema detectou com sucesso dois picos críticos de contaminação por descarte clandestino, enviando alertas automáticos em menos de 15 segundos.",
      statisticalAnalysis: {
        anovaPValue: "p < 0,0001",
        rSquared: "R² = 0,962",
        samplesTested: 43200,
        confidenceInterval: "95% (IC: 92,8% - 95,6%)"
      },
      charts: {
        degradation: {
          labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
          datasets: [
            { name: "Microplásticos (part/L) - AquaSense", color: "#38bdf8", data: [18, 14, 48, 85, 120, 42, 22] },
            { name: "Turbidez (NTU)", color: "#10b981", data: [5.2, 4.8, 12.1, 24.5, 31.0, 14.2, 6.1] },
            { name: "Referência Bancada (Laboratório)", color: "#fbbf24", data: [19, 15, 45, 89, 115, 40, 20] }
          ]
        },
        tensileStrength: {
          labels: ["Faixa 0-50 part/L", "Faixa 50-150 part/L", "Faixa 150-300 part/L", "Faixa 300-500 part/L"],
          values: [96.2, 94.8, 93.1, 91.5],
          colors: ["#10b981", "#38bdf8", "#f59e0b", "#e11d48"]
        },
        costComparison: {
          labels: ["AquaSense (Proposto)", "Sonda Comercial YSI", "Estação de Monitoramento Fixa"],
          values: [320, 18500, 45000]
        }
      },
      rawTable: [
        { id: "A-01", sample: "Padrão 25 part/L", composition: "PET 250 µm em água destilada", tensileMPa: 24.8, elongationPct: 98.4, degradation30DaysPct: 95.2, waterAbsorptionPct: 0.1 },
        { id: "A-02", sample: "Padrão 100 part/L", composition: "PE 100 µm em água destilada", tensileMPa: 98.1, elongationPct: 95.8, degradation30DaysPct: 94.1, waterAbsorptionPct: 0.2 },
        { id: "A-03", sample: "Padrão 250 part/L", composition: "PP 500 µm em água destilada", tensileMPa: 242.0, elongationPct: 93.2, degradation30DaysPct: 92.8, waterAbsorptionPct: 0.3 },
        { id: "A-04", sample: "Amostra Rio Ponto 1 (Nascente)", composition: "Água natural com matéria orgânica", tensileMPa: 18.2, elongationPct: 96.0, degradation30DaysPct: 94.5, waterAbsorptionPct: 0.4 },
        { id: "A-05", sample: "Amostra Rio Ponto 2 (Efluente)", composition: "Água com presença de descarte", tensileMPa: 118.5, elongationPct: 91.4, degradation30DaysPct: 93.0, waterAbsorptionPct: 0.5 }
      ]
    },
    logbook: [
      { date: "10/01/2026", phase: "Planejamento", title: "Arquitetura do Sensor Óptico", entry: "Desenho inicial da câmara espectral em CAD e compra dos componentes de baixo custo.", author: "Felipe Souza" },
      { date: "15/02/2026", phase: "Síntese", title: "Primeiro Teste da Bóia na Piscina da Escola", entry: "Verificação da linha d'água e estabilidade com ondas induzidas. Estanqueidade 100% aprovada.", author: "Beatriz Lima" },
      { date: "12/03/2026", phase: "Ensaios", title: "Instalação no Rio Municipal com Autorização Ambiental", entry: "Ancoragem da bóia a 5 metros da margem e início da coleta remota via LoRa.", author: "Equipe" }
    ],
    gallery: [
      { id: "gal-aq1", title: "Bóia AquaSense Flutuando no Rio", category: "Protótipos", caption: "Bóia autônoma instalada em ponto de amostragem municipal.", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", tag: "Em Campo" },
      { id: "gal-aq2", title: "Circuito Eletrônico e Microcontrolador", category: "Bancada", caption: "Placa montada com transmissor LoRa e sistema fotovoltaico.", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", tag: "Hardware" }
    ],
    conclusions: {
      mainTakeaway: "O projeto provou que é possível construir sistemas de alta precisão para monitoramento ambiental aquático com investimento inferior a 3% das sondas importadas.",
      points: [
        "Atingiu 94,2% de acurácia na detecção de microplásticos.",
        "Operou 30 dias com 100% de energia solar autônoma.",
        "Código-fonte e esquemáticos disponibilizados como Open Hardware para a comunidade científica."
      ],
      futureWork: ["Desenvolver rede mesh de 10 bóias integradas", "Adicionar sensor de micro-algas e pH"],
      patentsOrApplicability: "Hardware e Software Livres licenciados sob GNU GPL v3 e CERN Open Hardware."
    },
    team: {
      researchers: [
        { name: "Felipe Souza Santos", role: "Pesquisador - Hardware & Firmware", school: "Curso Técnico em Informática", bio: "Focado em sistemas embarcados, sensores IoT e telemetria de rádio frequência.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
        { name: "Beatriz Lima Rocha", role: "Pesquisadora - Análise Química & CAD", school: "Curso Técnico em Meio Ambiente", bio: "Responsável pelas calibrações químicas e desenho 3D da estrutura hidrodinâmica.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80" }
      ],
      mentors: [
        { name: "Prof. Esp. Marcelo Ramos", role: "Orientador", title: "Engenheiro de Controle e Automação", institution: "Colégio Técnico Estadual", bio: "Professor de robótica e eletrônica aplicada.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80" }
      ],
      collaborators: ["Secretaria Municipal de Meio Ambiente", "Laboratório de Recursos Hídricos"]
    },
    references: [
      { authors: "ANDRADY, A. L.", year: "2023", title: "Microplastics in the Marine and Freshwater Environment", publication: "Marine Pollution Bulletin, v. 62, p. 1596-1605", doi: "10.1016/j.marpolbul.2023.05.002" }
    ]
  },
  {
    id: "solar-fruits",
    title: "Células Solares Sensibilizadas por Corantes Naturais (DSSC) Extraídos de Frutos Nativos do Cerrado Brasileiro",
    shortTitle: "SolarFruits: Células Fotovoltaicas com Corantes Naturais",
    tagline: "Geração de eletricidade limpa utilizando antocianinas de pequi, cagaita e açaí como foto-sensibilizadores não tóxicos.",
    category: "Física & Química Aplicada",
    subCategory: "Energia Renovável e Eletroquímica",
    level: "Ensino Médio",
    institution: "Escola de Aplicação e Centro de Ensino Médio Integrado",
    year: "2026",
    fairName: "Feira de Ciências da Educação Básica",
    standNumber: "Estande FIS-09",
    awards: ["Destaque em Sustentabilidade Energética"],
    badges: [
      { label: "Energia Limpa", color: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
      { label: "Química Verde", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" },
      { label: "ODS 7 ONU", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40" }
    ],
    stats: [
      { label: "Eficiência de Conversão", value: "3.82", unit: "%", sub: "recorde com extrato acidificado de açaí", highlight: true },
      { label: "Custo por Célula", value: "R$ 4,80", unit: "", sub: "sem uso de silício purificado de alta energia" },
      { label: "Tempo de Vida Útil", value: "180+", unit: "dias", sub: "estabilidade com eletrólito em gel" },
      { label: "Toxicidade Residual", value: "0", unit: "%", sub: "sem metais pesados cádmio ou chumbo" }
    ],
    abstractPt: "As células solares tradicionais de silício demandam processos industriais de alta energia e geram resíduos tóxicos no refino. Células de Grätzel sensibilizadas por corantes (DSSC) despontam como promessa de energia fotovoltaica acessível. Este estudo investigou a eficiência de conversão fotoelétrica de células DSSC construídas com filmes de dióxido de titânio (TiO₂) nanoestruturado e sensibilizadas com pigmentos de antocianina extraídos de frutos nativos do Cerrado (açaí, cagaita e pequi). A célula sensibilizada com extrato de açaí acidificado atingiu tensão de circuito aberto de 0,62 V e eficiência de conversão de 3,82%, demonstrando potencial para dispositivos de baixa potência e sensores agrícolas autônomos.",
    abstractEn: "Dye-sensitized solar cells (DSSCs) present an eco-friendly, low-cost photovoltaic alternative to energy-intensive silicon solar panels. This research evaluated the photoelectric conversion efficiency of DSSCs fabricated with mesoporous titanium dioxide (TiO2) films sensitized with natural anthocyanin dyes extracted from Brazilian Cerrado and Amazonian fruits (Açai, Cagaita, and Pequi). The cell sensitized with acidified açai extract achieved an open-circuit voltage (Voc) of 0.62 V, a short-circuit current density (Jsc) of 8.9 mA/cm², and a power conversion efficiency of 3.82%, highlighting the viability of bio-based photovoltaics.",
    keywords: ["Células Solares", "DSSC", "Antocianinas", "Energia Solar", "Química Verde", "Sustentabilidade"],
    generalObjective: "Construir e avaliar a eficiência fotovoltaica de células solares de Grätzel utilizando corantes naturais de frutos nativos como fotossensibilizadores sustentáveis.",
    specificObjectives: [
      "Extrair e purificar antocianinas de frutos com solventes ecológicos (etanol/água).",
      "Depositar filmes de TiO₂ mesoporoso sobre vidro condutor FTO por Doctor Blade.",
      "Montar células solares completas com contra-eletrodo de platina/grafite e eletrólito iodeto/triiodeto.",
      "Medir curvas Corrente-Tensão (J-V) sob simulador solar calibrado (AM 1.5G)."
    ],
    sdgs: [
      { number: 7, name: "Energia Limpa e Acessível", description: "Democratização da geração de energia solar fotovoltaica biobaseada.", color: "bg-yellow-600" },
      { number: 15, name: "Vida Terrestre", description: "Valorização da biodiversidade e dos frutos do Cerrado brasileiro.", color: "bg-emerald-600" }
    ],
    problem: {
      context: "A produção de silício fotovoltaico consome temperaturas de até 1.900°C e emite gases fluorados de alto efeito estufa.",
      impacts: [
        { title: "Alta Pegada Energética", desc: "Painéis de silício levam 2 a 3 anos de operação apenas para pagar sua energia de fabricação.", icon: "Zap" },
        { title: "Resíduos no Descarte", desc: "Presença de chumbo e cádmio em painéis solares descartados sem reciclagem.", icon: "AlertTriangle" }
      ],
      comparison: {
        conventional: {
          title: "Painel de Silício Monocristalino",
          items: ["Processamento a 1.900°C", "Custo fabril elevado", "Opaco e pesado", "Eficiência cai em dias nublados"],
          disadvantage: "Alto custo inicial e impacto de fabricação"
        },
        proposed: {
          title: "Células DSSC SolarFruits",
          items: ["Processamento em temperatura branda (< 450°C)", "Uso de corantes naturais comestíveis", "Translúcido e flexível para janelas fotovoltaicas", "Excelente desempenho com luz difusa e interna"],
          advantage: "100% sustentável e de fabricação escolar/laboratorial"
        }
      }
    },
    hypothesis: {
      statement: "A presença de grupos carboxila e hidroxila nas antocianinas do açaí promove quimiossorção estável na superfície do TiO₂, viabilizando injeção eletrônica ultra-rápida e eficiência > 3,5%.",
      rationale: "Os grupos fenólicos atuam como âncoras moleculares facilitando a transferência de elétrons do corante excitado para a banda de condução do semicondutor.",
      validationCriteria: ["Eficiência > 3.0%", "Estabilidade fotoquímica > 90 dias"],
      status: "Confirmada",
      confidenceRate: "97.8%"
    },
    methodology: {
      overview: "Processo em 4 etapas: extração de pigmentos, preparação do fotoanodo, montagem e caracterização eletroquímica.",
      steps: [
        { stepNumber: 1, title: "Extração dos Pigmentos Naturais", description: "Maceração dos frutos em solução hidroalcoólica acidificada com HCl 0.1% a frio por 24 horas.", timeframe: "Semana 1", keyOutcome: "Extratos concentrados com absorbância máxima em 535 nm.", equipmentUsed: ["Espectrofotômetro UV-Vis"] },
        { stepNumber: 2, title: "Deposição da Camada de TiO₂", description: "Técnica Doctor Blade sobre vidro FTO seguida de sinterização a 450°C por 30 minutos.", timeframe: "Semana 2", keyOutcome: "Filmes mesoporosos homogêneos com 12 µm de espessura.", equipmentUsed: ["Forno Mufla"] },
        { stepNumber: 3, title: "Sensibilização e Selagem", description: "Imersão do fotoanodo na solução de corante por 12h e selagem com filme termoplástico Surlyn.", timeframe: "Semana 3", keyOutcome: "20 células fotovoltaicas montadas.", equipmentUsed: ["Seladora Térmica"] },
        { stepNumber: 4, title: "Caracterização Fotoelétrica (J-V)", description: "Ensaios sob simulador solar padrão 100 mW/cm² (AM 1.5G) com fonte medidora Keithley.", timeframe: "Semana 4", keyOutcome: "Determinação de Voc, Jsc, Fator de Preenchimento (FF) e Eficiência (η).", equipmentUsed: ["Simulador Solar", "Multímetro Digital"] }
      ],
      variables: {
        independent: ["Tipo de fruto/corante natural (Açaí, Cagaita, Pequi)", "pH da solução de extração"],
        dependent: ["Tensão de circuito aberto Voc (V)", "Densidade de corrente Jsc (mA/cm²)", "Eficiência η (%)"],
        controlled: ["Espessura da camada de TiO₂ (12 µm)", "Área ativa da célula (0,25 cm²)", "Intensidade luminosa (1000 W/m²)"]
      },
      materials: [
        { name: "Frutos Nativos (Açaí, Pequi, Cagaita)", function: "Fonte de corantes fotossensibilizadores", source: "Feira de produtores rurais", cost: "R$ 15,00" },
        { name: "Vidro Condutor FTO (15 Ω/sq)", function: "Substrato condutor transparente", source: "Importador científico", cost: "R$ 40,00" },
        { name: "Nanopartículas de TiO₂ (P25)", function: "Semicondutor fotoanódico", source: "Laboratório de Química", cost: "R$ 25,00" }
      ]
    },
    simulation: {
      defaultMoisture: 45,
      defaultTemp: 25,
      defaultGlycerol: 15,
      defaultNanocellulose: 2.0
    },
    results: {
      summary: "A célula sensibilizada com extrato de açaí atingiu o melhor desempenho fotovoltaico do estudo com eficiência de 3,82% e densidade de corrente de 8,9 mA/cm², comprovando a eficácia dos pigmentos da flora brasileira.",
      statisticalAnalysis: {
        anovaPValue: "p < 0,001",
        rSquared: "R² = 0,978",
        samplesTested: 60,
        confidenceInterval: "95% (IC: 3,65% - 3,99%)"
      },
      charts: {
        degradation: {
          labels: ["Semana 0", "Semana 4", "Semana 8", "Semana 12", "Semana 16", "Semana 20", "Semana 24"],
          datasets: [
            { name: "Açaí (Eletrólito Gel)", color: "#10b981", data: [100, 98, 96, 94, 91, 89, 87] },
            { name: "Açaí (Eletrólito Líquido)", color: "#38bdf8", data: [100, 92, 81, 68, 54, 42, 30] },
            { name: "Cagaita", color: "#fbbf24", data: [100, 95, 91, 86, 80, 75, 71] }
          ]
        },
        tensileStrength: {
          labels: ["Açaí Acidificado", "Açaí Neutro", "Cagaita", "Pequi", "Sem Corante (Controle)"],
          values: [3.82, 2.45, 1.95, 1.10, 0.05],
          colors: ["#10b981", "#38bdf8", "#f59e0b", "#e11d48", "#64748b"]
        },
        costComparison: {
          labels: ["SolarFruits (Célula Proposta)", "Painel Silício Doméstico (proporcional)", "Célula DSSC Comercial com Rutênio"],
          values: [4.80, 18.50, 42.00]
        }
      },
      rawTable: [
        { id: "SF-01", sample: "Açaí pH 2.5", composition: "Antocianina acidificada", tensileMPa: 3.82, elongationPct: 0.62, degradation30DaysPct: 8.9, waterAbsorptionPct: 69.2 },
        { id: "SF-02", sample: "Açaí pH 5.0", composition: "Antocianina neutra", tensileMPa: 2.45, elongationPct: 0.54, degradation30DaysPct: 6.2, waterAbsorptionPct: 62.0 },
        { id: "SF-03", sample: "Cagaita", composition: "Carotenóides e flavonóides", tensileMPa: 1.95, elongationPct: 0.48, degradation30DaysPct: 4.8, waterAbsorptionPct: 58.5 },
        { id: "SF-04", sample: "Pequi", composition: "Carotenóides lipofílicos", tensileMPa: 1.10, elongationPct: 0.41, degradation30DaysPct: 3.1, waterAbsorptionPct: 52.0 }
      ]
    },
    logbook: [
      { date: "05/02/2026", phase: "Planejamento", title: "Coleta e Congelamento dos Frutos", entry: "Coleta dos frutos em área de preservação com autorização do comitê de ética e pesquisa.", author: "Ana Clara" },
      { date: "10/03/2026", phase: "Síntese", title: "Sinterização dos Eletrodos de TiO2", entry: "Calibração da rampa térmica do forno mufla para evitar trincas na camada cerâmica.", author: "Lucas Martins" }
    ],
    gallery: [
      { id: "gal-sf1", title: "Células DSSC com Corante de Açaí", category: "Protótipos", caption: "Células solares translúcidas exibindo coloração arroxeada característica.", url: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80", tag: "Célula DSSC" }
    ],
    conclusions: {
      mainTakeaway: "Comprovou-se a capacidade dos corantes do Cerrado em produzir energia solar limpa com processo de fabricação acessível e sem impacto tóxico.",
      points: [
        "Eficiência de 3,82% obtida com extrato de açaí acidificado.",
        "Eletrólito em gel estendeu a estabilidade fotoquímica para mais de 180 dias.",
        "Excelente aplicabilidade para sensores agrícolas autônomos e janelas fotovoltaicas."
      ],
      futureWork: ["Testar nanopartículas de óxido de zinco (ZnO)", "Montar protótipo de estufa agrícola autoalimentada"],
      patentsOrApplicability: "Artigo submetido à Revista Brasileira de Ensino de Física e Química Aplicada."
    },
    team: {
      researchers: [
        { name: "Ana Clara Mendes", role: "Pesquisadora - Extração & Eletroquímica", school: "Ensino Médio Integrado", bio: "Interessada em fotoquímica, transição energética e biomas brasileiros.", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80" },
        { name: "Lucas Martins Neves", role: "Pesquisador - Caracterização Óptica", school: "Ensino Médio Integrado", bio: "Responsável pelas medidas elétricas J-V e montagem dos fotoanodos.", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80" }
      ],
      mentors: [
        { name: "Prof. Dr. Vinícius Siqueira", role: "Orientador", title: "Doutor em Física da Matéria Condensada", institution: "Centro de Ciências Exatas", bio: "Pesquisador em física de semicondutores e energias renováveis.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" }
      ],
      collaborators: ["Laboratório de Fotoeletroquímica", "Parque Tecnológico Regional"]
    },
    references: [
      { authors: "O'REGAN, B.; GRÄTZEL, M.", year: "1991", title: "A low-cost, high-efficiency solar cell based on dye-sensitized colloidal TiO2 films", publication: "Nature, v. 353, p. 737-740", doi: "10.1038/353737a0" }
    ]
  }
];
