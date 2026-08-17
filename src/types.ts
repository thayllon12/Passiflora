export type ProjectPhase = "Planejamento" | "Síntese" | "Ensaios" | "Análise Crítica" | "Conclusão";
export type GalleryCategory = "Microscopia" | "Bancada" | "Protótipos" | "Ensaios";

export interface ScienceProject {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: string;
  subCategory: string;
  level: string;
  institution: string;
  year: string;
  fairName: string;
  standNumber: string;
  awards: string[];
  badges: { label: string; color: string }[];
  stats: { label: string; value: string; unit?: string; sub: string; highlight?: boolean }[];
  abstractPt: string;
  abstractEn: string;
  keywords: string[];
  generalObjective: string;
  specificObjectives: string[];
  sdgs: { number: number; name: string; description: string; color: string }[];
  problem: {
    context: string;
    impacts: { title: string; desc: string; icon: string }[];
    comparison: {
      conventional: { title: string; items: string[]; disadvantage: string };
      proposed: { title: string; items: string[]; advantage: string };
    };
  };
  hypothesis: {
    statement: string;
    rationale: string;
    validationCriteria: string[];
    status: "Confirmada" | "Parcialmente Confirmada" | "Em Análise";
    confidenceRate: string;
  };
  methodology: {
    overview: string;
    steps: {
      stepNumber: number;
      title: string;
      description: string;
      timeframe: string;
      keyOutcome: string;
      equipmentUsed: string[];
    }[];
    variables: {
      independent: string[];
      dependent: string[];
      controlled: string[];
    };
    materials: {
      name: string;
      function: string;
      source: string;
      cost: string;
    }[];
  };
  simulation: {
    defaultMoisture: number;
    defaultTemp: number;
    defaultGlycerol: number;
    defaultNanocellulose: number;
  };
  results: {
    summary: string;
    statisticalAnalysis: {
      anovaPValue: string;
      rSquared: string;
      samplesTested: number;
      confidenceInterval: string;
    };
    charts: {
      degradation: {
        labels: string[];
        datasets: { name: string; color: string; data: number[] }[];
      };
      tensileStrength: {
        labels: string[];
        values: number[];
        colors: string[];
      };
      costComparison: {
        labels: string[];
        values: number[];
      };
    };
    rawTable: {
      id: string;
      sample: string;
      composition: string;
      tensileMPa: number;
      elongationPct: number;
      degradation30DaysPct: number;
      waterAbsorptionPct: number;
    }[];
  };
  logbook: {
    date: string;
    phase: ProjectPhase;
    title: string;
    entry: string;
    divergenceOrError?: string;
    solutionFound?: string;
    author: string;
  }[];
  gallery: {
    id: string;
    title: string;
    category: GalleryCategory;
    caption: string;
    url: string;
    tag: string;
  }[];
  conclusions: {
    mainTakeaway: string;
    points: string[];
    futureWork: string[];
    patentsOrApplicability: string;
  };
  team: {
    researchers: {
      name: string;
      role: string;
      school: string;
      bio: string;
      avatar: string;
      email?: string;
      lattes?: string;
    }[];
    mentors: {
      name: string;
      role: "Orientador" | "Coorientador" | "Orientadora" | "Coorientadora" | string;
      title: string;
      institution: string;
      bio: string;
      avatar: string;
    }[];
    collaborators: string[];
  };
  references: {
    authors: string;
    year: string;
    title: string;
    publication: string;
    doi?: string;
    link?: string;
  }[];
}

export type ThemeMode = "dark-sci" | "light-academic" | "emerald-cyber";
