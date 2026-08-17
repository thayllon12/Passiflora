import React, { useState, useEffect } from "react";
import {
  Leaf,
  Sparkles,
  FlaskConical,
  Heart,
  ShieldCheck,
  Calendar,
  User,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Search,
  ImageIcon,
  FileText,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowUp,
  Home,
  Info,
  Menu,
  Droplet,
  Sun,
  PackageCheck,
  GraduationCap,
  School,
  Activity,
  Layers,
  Sparkle,
} from "lucide-react";
import { SafeImage } from "./components/SafeImage";
import passifloraCapaImg from "./assets/images/passiflora_capa_oficial.png";

interface GalleryPhoto {
  url: string;
  title: string;
  category: string;
  description: string;
}

const galleryPhotos: GalleryPhoto[] = [
  {
    url: "https://damp-pink-b8cgnxhb.edgeone.dev/file.png",
    title: "Embalagem Artesanal",
    category: "Papel Kraft e fio de ráfia",
    description: "Pacote em papel kraft com laço de ráfia e adesivo oficial do projeto.",
  },
  {
    url: "https://spatial-crimson-jfydfgkh.edgeone.dev/file.png",
    title: "Teste de pH",
    category: "Controle de acidez da formulação",
    description: "Aferição do pH da mistura líquida em tubos de ensaio para segurança da pele.",
  },
  {
    url: "https://silent-green-cjsbqudq.edgeone.dev/file.png",
    title: "Sabonete em Barra",
    category: "Glicerina e sementes de maracujá",
    description: "Sabonete pronto para ser embalado com sementes esfoliantes visíveis.",
  },
  {
    url: "https://rubber-blush-pj4fspsh.edgeone.dev/file.png",
    title: "Corte da Glicerina",
    category: "Preparo para o banho-maria",
    description: "Base glicerinada sendo cortada em fatias finas para facilitar o derretimento.",
  },
  {
    url: "https://stingy-amethyst-qzxbeqax.edgeone.dev/file.png",
    title: "Lote Produzido",
    category: "Sabonetes embalados individualmente",
    description: "Unidades de sabonete em barra embaladas em película protetora dispostas na mesa.",
  },
  {
    url: "https://associated-teal-mqdmwync.edgeone.dev/file.png",
    title: "Secagem das Sementes",
    category: "Preparo das sementes ao sol",
    description: "Sementes de maracujá limpas e dispostas em papel absorvente para secar ao sol.",
  },
  {
    url: "https://plastic-purple-lgdfevty.edgeone.dev/file.png",
    title: "Banho-Maria",
    category: "Fusão controlada da base",
    description: "Panela de banho-maria mantendo a glicerina derretida em consistência fluida.",
  },
  {
    url: "https://cautious-violet-rkkgquvw.edgeone.dev/file.png",
    title: "Dosagem Precisa",
    category: "Envasamento em frascos borrifadores",
    description: "Envasamento cuidadoso do sabonete líquido nos frascos com o auxílio de seringa.",
  },
  {
    url: "https://rapid-aquamarine-v5soy2o2.edgeone.dev/file.png",
    title: "Mistura Amarelada",
    category: "Base fluida pronta para envasar",
    description: "Homogeneização da solução líquida no recipiente transparente com espátula.",
  },
  {
    url: "https://angry-lavender-wronqmo2.edgeone.dev/file.png",
    title: "Ativos Concentrados",
    category: "Mistura de extrato e essência",
    description: "Integração dos óleos e extratos na mistura aquosa do sabonete.",
  },
  {
    url: "https://dependent-beige-ztga8ous.edgeone.dev/file.png",
    title: "Consistência da Mistura",
    category: "Mexendo suavemente sem aerar",
    description: "Mexendo a mistura fluida no recipiente com espátula de silicone vermelha.",
  },
  {
    url: "https://splendid-maroon-zvsnbeo8.edgeone.dev/file.png",
    title: "Aquecimento Contínuo",
    category: "Manutenção da temperatura",
    description: "Controle do fogo na panela para manter a glicerina líquida durante o trabalho.",
  },
  {
    url: "https://hissing-azure-bcimegrf.edgeone.dev/file.png",
    title: "Frascos Prontos",
    category: "Linha de sabonetes líquidos finalizada",
    description: "Frascos de sabonete líquido organizados após a aplicação dos dosadores.",
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolledHeader, setScrolledHeader] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Scroll & Progress handlers
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      setScrolledHeader(scrollTop > 20);
      setShowTopBtn(scrollTop > 400);

      // Section spy
      const sections = [
        "inicio",
        "projeto",
        "objetivos",
        "metodologia",
        "galeria",
        "experimento",
        "diario",
        "resultados",
        "conclusao",
        "equipe",
        "referencias",
      ];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop - 150;
          if (scrollTop >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryPhotos.length : 0));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryPhotos.length) % galleryPhotos.length : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentLightboxPhoto = lightboxIndex !== null ? galleryPhotos[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#4e342e] flex flex-col font-serif pb-28 sm:pb-0">
      
      {/* READING PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#d4a373] via-[#e9c46a] to-[#6b705c] z-[9999] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* =========================================================
           HEADER
      ========================================================= */}
      <header
        id="header"
        className={`sticky top-0 z-[1000] h-[88px] bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#e6ded6] transition-all duration-300 ${
          scrolledHeader ? "shadow-[0_8px_30px_rgba(62,39,35,0.08)]" : ""
        }`}
      >
        <div className="max-w-[1180px] w-[calc(100%-36px)] h-full mx-auto flex items-center justify-between">
          
          {/* Brand Logo & Tagline */}
          <a href="#inicio" className="flex items-center gap-3.5 text-[#3e2723] group">
            {/* Official Logo */}
            <div className="w-12 h-12 rounded-full border border-[#d4a373] bg-[#f4eee5] overflow-hidden flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <SafeImage
                src={passifloraCapaImg}
                alt="Logo Passiflora Oficial"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <strong className="block text-xl tracking-[1.5px] font-serif font-bold text-[#3e2723]">
                PASSIFLORA
              </strong>
              <span className="block mt-0.5 text-xs text-[#8d6e63] font-medium font-sans-ui italic">
                Sua pele merece o toque da natureza!
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 font-sans-ui">
            {[
              { href: "#inicio", label: "Início" },
              { href: "#projeto", label: "Projeto" },
              { href: "#objetivos", label: "Objetivos" },
              { href: "#metodologia", label: "Metodologia" },
              { href: "#galeria", label: "Galeria" },
              { href: "#experimento", label: "Experimento" },
              { href: "#resultados", label: "Resultados" },
              { href: "#equipe", label: "Equipe" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#4e342e] text-sm font-semibold relative py-1 hover:text-[#d4a373] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button (SVG Icon) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-[#3e2723] rounded-xl hover:bg-[#f4eee5] transition cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <nav className="fixed inset-x-0 top-[88px] z-[999] bg-[#faf7f2]/98 backdrop-blur-xl p-5 shadow-2xl border-b border-[#e6ded6] font-sans-ui flex flex-col md:hidden animate-fade-in">
          {[
            { href: "#inicio", label: "Início" },
            { href: "#projeto", label: "Sobre o Projeto" },
            { href: "#objetivos", label: "Objetivos" },
            { href: "#metodologia", label: "Metodologia" },
            { href: "#galeria", label: "Galeria de Fotos" },
            { href: "#experimento", label: "Experimento" },
            { href: "#diario", label: "Registros e Etapas" },
            { href: "#resultados", label: "Resultados" },
            { href: "#conclusao", label: "Conclusão" },
            { href: "#equipe", label: "Equipe" },
            { href: "#referencias", label: "Referências" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-3.5 px-3 border-b border-[#e6ded6] text-[#3e2723] font-bold text-sm flex items-center justify-between"
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-[#8d6e63]" />
            </a>
          ))}
        </nav>
      )}

      <main className="flex-1">
        
        {/* =====================================================
             HERO SECTION
        ====================================================== */}
        <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-[#f7f1e5] via-[#faf7f2] to-[#e8ded1] border-b border-[#e6ded6]">
          
          {/* Subtle botanical backdrop ornament */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-5 pointer-events-none text-[#3e2723]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12C2 6.5 6.5 2 12 2z" />
            </svg>
          </div>

          <div className="max-w-[1180px] w-[calc(100%-36px)] min-h-[580px] mx-auto py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#d4a373] bg-white/80 backdrop-blur-xs rounded-full text-xs font-bold text-[#3e2723] font-sans-ui shadow-xs">
                <Leaf className="w-4 h-4 text-[#6b705c]" />
                <span>PROJETO DE SABOARIA ARTESANAL & SUSTENTABILIDADE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#3e2723] leading-[1.12]">
                DO FRUTO À AÇÃO:<br />
                <span className="text-[#d4a373] italic font-normal">SABONETE QUE FAZ A DIFERENÇA</span>
              </h1>

              <p className="text-base sm:text-lg text-[#4e342e] leading-relaxed max-w-xl">
                Desenvolvimento de sabonetes artesanais de maracujá em barra e líquido, aproveitando as propriedades hidratantes, esfoliantes e calmantes da fruta para unir o cuidado com a pele à preservação ambiental.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 font-sans-ui pt-4">
                <a
                  href="#projeto"
                  className="min-h-[52px] px-8 inline-flex items-center justify-center gap-2 rounded-full font-bold text-sm bg-[#3e2723] hover:bg-[#2c1a17] text-white shadow-lg shadow-[#3e2723]/15 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Conhecer o projeto</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#galeria"
                  className="min-h-[52px] px-8 inline-flex items-center justify-center gap-2 rounded-full font-bold text-sm border-2 border-[#3e2723] text-[#3e2723] hover:bg-[#3e2723]/5 transition-all duration-200 cursor-pointer"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>Ver galeria de fotos</span>
                </a>
              </div>

            </div>

            {/* Right Featured Cover Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md min-h-[420px] sm:min-h-[480px] rounded-[28px] bg-white p-3 border-8 border-white shadow-[0_20px_50px_rgba(62,39,35,0.14)] -rotate-1 overflow-hidden group">
                <div className="w-full h-full min-h-[400px] sm:min-h-[460px] rounded-[20px] overflow-hidden border border-[#d4a373] relative">
                  <SafeImage
                    src={passifloraCapaImg}
                    alt="Capa oficial Passiflora: Sabonetes artesanais de maracujá líquido, em barra e embalagem kraft"
                    className="w-full h-full min-h-[400px] sm:min-h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 inset-x-3 bg-[#3e2723]/90 backdrop-blur-xs text-white p-3 rounded-xl text-xs font-sans-ui flex items-center justify-between shadow-lg">
                    <div>
                      <strong className="block text-white font-bold">Linha Completa Passiflora</strong>
                      <span className="text-[#e9c46a] text-[11px]">Sua pele merece o toque da natureza!</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#e9c46a] text-[#3e2723] text-[10px] font-extrabold uppercase shrink-0">
                      Oficial
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
             SOBRE O PROJETO & CONTEXTUALIZAÇÃO
        ====================================================== */}
        <section id="projeto" className="py-20 border-b border-[#e6ded6]">
          <div className="max-w-[1180px] w-[calc(100%-36px)] mx-auto">
            
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-extrabold tracking-[2px] text-[#6b705c] uppercase font-sans-ui block mb-2">
                Contextualização & Pesquisa
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3e2723]">
                Sobre o Projeto
              </h2>
              <p className="text-base sm:text-lg text-[#4e342e] mt-4 leading-relaxed">
                Fundamentação teórica, pergunta de pesquisa e motivações sustentáveis da equipe.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Main Narrative Sections from PDF */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 1. Introdução */}
                <article className="bg-white border border-[#e6ded6] rounded-[20px] p-8 shadow-[0_10px_30px_rgba(62,39,35,0.04)] space-y-3">
                  <div className="flex items-center gap-2.5 text-[#3e2723]">
                    <div className="w-9 h-9 rounded-lg bg-[#f4eee5] flex items-center justify-center text-[#6b705c]">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">1. Introdução e Contextualização</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#4e342e] leading-relaxed">
                    O cuidado com a pele e o meio ambiente tem motivado o uso de produtos naturais e sustentáveis. Este projeto apresenta a produção de um sabonete artesanal de maracujá, feito sem produtos químicos, aproveitando as propriedades hidratantes e calmantes da fruta. Além de beneficiar a pele, o projeto valoriza a sustentabilidade por meio do uso de potes reutilizáveis para o armazenamento dos sabonetes, reduzindo o desperdício e incentivando o reaproveitamento de materiais. Dessa forma, busca-se unir o cuidado pessoal à preservação ambiental.
                  </p>
                </article>

                {/* 2. Problematização & 3. Hipótese */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  <article className="bg-white border border-[#e6ded6] rounded-[20px] p-6 sm:p-7 shadow-[0_10px_30px_rgba(62,39,35,0.04)] space-y-2.5">
                    <div className="flex items-center gap-2 text-[#3e2723]">
                      <div className="w-8 h-8 rounded-lg bg-[#f4eee5] flex items-center justify-center text-[#6b705c]">
                        <Search className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-base">2. Problematização</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4e342e] leading-relaxed italic">
                      "Como podemos produzir sabonetes de maracujá de forma sustentável e acessível para a comunidade, utilizando recursos naturais e de baixo custo?"
                    </p>
                  </article>

                  <article className="bg-white border border-[#e6ded6] rounded-[20px] p-6 sm:p-7 shadow-[0_10px_30px_rgba(62,39,35,0.04)] space-y-2.5">
                    <div className="flex items-center gap-2 text-[#3e2723]">
                      <div className="w-8 h-8 rounded-lg bg-[#f4eee5] flex items-center justify-center text-[#6b705c]">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-base">3. Hipótese</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4e342e] leading-relaxed">
                      Acredita-se que o sabonete artesanal de maracujá, feito com ingredientes naturais e embalagens reutilizáveis, possa melhorar a saúde da pele, incentivar o reaproveitamento de materiais e fortalecer a economia local.
                    </p>
                  </article>

                </div>

                {/* 5. Justificativa & 6. Referencial Teórico */}
                <article className="bg-white border border-[#e6ded6] rounded-[20px] p-8 shadow-[0_10px_30px_rgba(62,39,35,0.04)] space-y-4">
                  <div>
                    <h4 className="font-bold text-base text-[#3e2723] flex items-center gap-2 mb-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#6b705c]" />
                      5. Justificativa
                    </h4>
                    <p className="text-sm text-[#4e342e] leading-relaxed">
                      O projeto é importante por incentivar o uso de ingredientes naturais e sustentáveis na produção de um sabonete artesanal de maracujá, que cuida da pele sem produtos químicos. Além disso, promove a consciência ambiental por meio do reaproveitamento de potes e embalagens, unindo bem-estar, economia e respeito ao meio ambiente.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#e6ded6]">
                    <h4 className="font-bold text-base text-[#3e2723] flex items-center gap-2 mb-1.5">
                      <FileText className="w-4 h-4 text-[#6b705c]" />
                      6. Referencial Teórico
                    </h4>
                    <p className="text-sm text-[#4e342e] leading-relaxed">
                      Estudos como os de Santos (2021) e Oliveira (2022) mostram que o maracujá possui vitaminas e compostos naturais com ação hidratante e antioxidante, que melhoram a saúde da pele. Esses autores destacam a importância dos ingredientes naturais e sustentáveis na produção de cosméticos, servindo de base para este projeto.
                    </p>
                  </div>
                </article>

              </div>

              {/* Project Card Sheet (Cleaned - Turma Removed as Requested) */}
              <aside className="lg:col-span-5 bg-[#f4eee5] border border-[#e6ded6] rounded-[20px] p-8 sm:p-10 shadow-[0_10px_30px_rgba(62,39,35,0.05)] text-[#3e2723]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#e8ded1] flex items-center justify-center text-[#6b705c]">
                    <School className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-extrabold tracking-[2px] text-[#6b705c] uppercase font-sans-ui block">
                    Ficha do Projeto
                  </span>
                </div>

                <div className="space-y-4 font-sans-ui text-sm divide-y divide-[#e6ded6]">
                  
                  <div className="pt-2 first:pt-0">
                    <small className="block text-[11px] font-bold uppercase tracking-wider text-[#8d6e63]">
                      Título Oficial
                    </small>
                    <strong className="block text-sm sm:text-base text-[#3e2723] mt-1">
                      Do Fruto à Ação: Sabonete que Faz a Diferença
                    </strong>
                  </div>

                  <div className="pt-3">
                    <small className="block text-[11px] font-bold uppercase tracking-wider text-[#8d6e63]">
                      Área de Estudo
                    </small>
                    <strong className="block text-sm sm:text-base text-[#3e2723] mt-1">
                      Química & Biologia Cosmética Sustentável
                    </strong>
                  </div>

                  <div className="pt-3">
                    <small className="block text-[11px] font-bold uppercase tracking-wider text-[#8d6e63]">
                      Produtos Desenvolvidos
                    </small>
                    <strong className="block text-sm sm:text-base text-[#3e2723] mt-1">
                      Sabonete de Maracujá em Barra e Líquido
                    </strong>
                  </div>

                  <div className="pt-3">
                    <small className="block text-[11px] font-bold uppercase tracking-wider text-[#8d6e63]">
                      Autores da Pesquisa
                    </small>
                    <strong className="block text-sm sm:text-base text-[#3e2723] mt-1">
                      Brenda, Lays, Miqueias, Nandielly, Paulo & Thayllon
                    </strong>
                  </div>

                  <div className="pt-3">
                    <small className="block text-[11px] font-bold uppercase tracking-wider text-[#8d6e63]">
                      Testes Realizados
                    </small>
                    <strong className="block text-sm sm:text-base text-[#3e2723] mt-1">
                      Aferição de pH, Solubilidade, Ação Hidratante & Esfoliação
                    </strong>
                  </div>

                </div>
              </aside>

            </div>

          </div>
        </section>

        {/* =====================================================
             OBJETIVOS GERAIS E ESPECÍFICOS
        ====================================================== */}
        <section id="objetivos" className="py-20 border-b border-[#e6ded6]">
          <div className="max-w-[1180px] w-[calc(100%-36px)] mx-auto">
            
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-extrabold tracking-[2px] text-[#6b705c] uppercase font-sans-ui block mb-2">
                4. Metas da Pesquisa
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3e2723]">
                Objetivos
              </h2>
              <p className="text-base sm:text-lg text-[#4e342e] mt-4 leading-relaxed">
                Diretrizes que orientaram a fabricação, testes e propósitos comunitários da iniciativa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Objetivo Geral */}
              <article className="p-8 sm:p-10 bg-white border border-[#e6ded6] rounded-[24px] shadow-[0_10px_30px_rgba(62,39,35,0.05)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#f4eee5] border border-[#e6ded6] flex items-center justify-center text-[#6b705c] mb-6">
                  <CheckCircle2 className="w-7 h-7 text-[#6b705c]" />
                </div>
                <span className="text-xs font-extrabold tracking-[1.5px] uppercase text-[#8d6e63] font-sans-ui block mb-1">
                  Diretriz Principal
                </span>
                <h3 className="text-2xl font-bold text-[#3e2723] mb-4">
                  Objetivo Geral
                </h3>
                <p className="text-base text-[#4e342e] leading-relaxed">
                  Produzir um sabonete artesanal de maracujá totalmente natural, que proporcione benefícios à pele e promova práticas sustentáveis na comunidade.
                </p>
              </article>

              {/* Objetivos Específicos */}
              <article className="p-8 sm:p-10 bg-white border border-[#e6ded6] rounded-[24px] shadow-[0_10px_30px_rgba(62,39,35,0.05)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#f4eee5] border border-[#e6ded6] flex items-center justify-center text-[#d4a373] mb-6">
                  <Layers className="w-7 h-7 text-[#d4a373]" />
                </div>
                <span className="text-xs font-extrabold tracking-[1.5px] uppercase text-[#8d6e63] font-sans-ui block mb-1">
                  Desdobramentos Práticos
                </span>
                <h3 className="text-2xl font-bold text-[#3e2723] mb-4">
                  Objetivos Específicos
                </h3>
                <ul className="space-y-3 font-sans-ui text-sm text-[#4e342e]">
                  {[
                    "Pesquisar as propriedades do maracujá e seus benefícios para a pele;",
                    "Desenvolver a receita e o processo de produção do sabonete sem o uso de produtos químicos;",
                    "Utilizar potes e embalagens reutilizáveis, reduzindo o impacto ambiental;",
                    "Testar a qualidade e os efeitos do sabonete na hidratação e bem-estar da pele;",
                    "Divulgar o projeto em feiras e atividades escolares, incentivando o uso de cosméticos naturais e sustentáveis.",
                  ].map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4a373] mt-2 shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </article>

            </div>

          </div>
        </section>

        {/* =====================================================
             METODOLOGIA & CRONOGRAMA
        ====================================================== */}
        <section id="metodologia" className="py-20 bg-[#f4eee5] border-b border-[#e6ded6]">
          <div className="max-w-[1180px] w-[calc(100%-36px)] mx-auto">
            
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-extrabold tracking-[2px] text-[#6b705c] uppercase font-sans-ui block mb-2">
                7 & 8. Materiais, Métodos e Cronograma
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3e2723]">
                Metodologia Científica
              </h2>
              <p className="text-base sm:text-lg text-[#4e342e] mt-4 leading-relaxed">
                Formulação das receitas, insumos utilizados e cronograma executado ao longo das 5 semanas de desenvolvimento.
              </p>
            </div>

            {/* Receitas Comparativas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              
              {/* Sabonete Líquido */}
              <div className="bg-white border border-[#e6ded6] rounded-[24px] p-8 shadow-[0_10px_30px_rgba(62,39,35,0.04)]">
                <div className="flex items-center gap-3 mb-4 text-[#3e2723]">
                  <div className="w-10 h-10 rounded-xl bg-[#f4eee5] flex items-center justify-center text-[#6b705c]">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Sabonete Líquido</h3>
                    <span className="text-xs text-[#8d6e63] font-sans-ui">Fórmula Hidratante & Aferição de pH</span>
                  </div>
                </div>
                
                <p className="text-xs font-bold uppercase tracking-wider text-[#6b705c] font-sans-ui mb-2">
                  Materiais e Proporções:
                </p>
                <ul className="space-y-2 font-sans-ui text-sm text-[#4e342e]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6b705c]" />
                    <span><strong>300ml</strong> de base líquida neutra</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6b705c]" />
                    <span><strong>100ml</strong> de água filtrada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6b705c]" />
                    <span><strong>30ml</strong> de extrato de maracujá</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6b705c]" />
                    <span><strong>10ml</strong> de glicerina líquida & <strong>10ml</strong> de essência</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6b705c]" />
                    <span><strong>15 gotas</strong> de óleo vegetal de amêndoa & corante amarelo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6b705c]" />
                    <span>1 seringa dosadora, sementes de maracujá e frascos reutilizáveis</span>
                  </li>
                </ul>
              </div>

              {/* Sabonete em Barra */}
              <div className="bg-white border border-[#e6ded6] rounded-[24px] p-8 shadow-[0_10px_30px_rgba(62,39,35,0.04)]">
                <div className="flex items-center gap-3 mb-4 text-[#3e2723]">
                  <div className="w-10 h-10 rounded-xl bg-[#f4eee5] flex items-center justify-center text-[#d4a373]">
                    <PackageCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Sabonete em Barra</h3>
                    <span className="text-xs text-[#8d6e63] font-sans-ui">Glicerina, Esfoliação & Papel Kraft</span>
                  </div>
                </div>
                
                <p className="text-xs font-bold uppercase tracking-wider text-[#d4a373] font-sans-ui mb-2">
                  Materiais e Proporções:
                </p>
                <ul className="space-y-2 font-sans-ui text-sm text-[#4e342e]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a373]" />
                    <span><strong>1 kg</strong> de base glicerinada cristal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a373]" />
                    <span><strong>2 colheres (sopa)</strong> de extrato de maracujá</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a373]" />
                    <span><strong>1 colher (sopa)</strong> de glicerina líquida</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a373]" />
                    <span><strong>15 gotas</strong> de essência de maracujá & corante cosmético</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a373]" />
                    <span>Algumas gotas de óleo vegetal de amêndoa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a373]" />
                    <span>Sementes desidratadas ao sol, moldes ovais de silicone e papel kraft</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Cronograma (5 Semanas) */}
            <div className="bg-white border border-[#e6ded6] rounded-[24px] p-8 sm:p-10 shadow-[0_10px_30px_rgba(62,39,35,0.04)]">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-[#6b705c]" />
                <h3 className="text-xl font-bold text-[#3e2723]">8. Cronograma de Atividades</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-sans-ui">
                {[
                  { sem: "Semana 1", desc: "Pesquisa teórica e definição dos objetivos" },
                  { sem: "Semana 2", desc: "Procura e aquisição dos materiais e insumos" },
                  { sem: "Semana 3", desc: "Montagem dos sabonetes, testes e banho-maria" },
                  { sem: "Semana 4", desc: "Análise e registro formal dos resultados" },
                  { sem: "Semana 5", desc: "Preparação para apresentação e divulgação" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#f4eee5] border border-[#e6ded6] flex flex-col justify-between"
                  >
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#6b705c] block mb-2">
                      {item.sem}
                    </span>
                    <p className="text-xs text-[#4e342e] leading-snug">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
             GALERIA DO PROJETO (SEM O TEXTO 13 FOTOS)
        ====================================================== */}
        <section id="galeria" className="py-20 border-b border-[#e6ded6]">
          <div className="max-w-[1180px] w-[calc(100%-36px)] mx-auto">
            
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-extrabold tracking-[2px] text-[#6b705c] uppercase font-sans-ui block mb-2">
                Registros Práticos
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3e2723]">
                Galeria do Projeto
              </h2>
              <p className="text-base sm:text-lg text-[#4e342e] mt-4 leading-relaxed">
                Registros fotográficos de cada etapa da manipulação, testes de consistência, moldagem e embalagens finais.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {galleryPhotos.map((photo, idx) => (
                <figure
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative h-64 rounded-[20px] overflow-hidden bg-[#f4eee5] border border-[#e6ded6] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <SafeImage
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e120f]/90 via-[#1e120f]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white font-sans-ui">
                    <strong className="text-sm font-bold block leading-tight">
                      {photo.title}
                    </strong>
                    <span className="text-xs text-white/85 block mt-1">
                      {photo.category}
                    </span>
                  </div>
                </figure>
              ))}
            </div>

          </div>
        </section>

        {/* =====================================================
             EXPERIMENTO & CONTROLE DE PH
        ====================================================== */}
        <section id="experimento" className="py-20 bg-[#f4eee5] border-b border-[#e6ded6]">
          <div className="max-w-[1180px] w-[calc(100%-36px)] mx-auto">
            
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-extrabold tracking-[2px] text-[#6b705c] uppercase font-sans-ui block mb-2">
                Prática de Laboratório
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3e2723]">
                O Experimento
              </h2>
              <p className="text-base sm:text-lg text-[#4e342e] mt-4 leading-relaxed">
                Cuidados de temperatura, proporção dos insumos e controle rigoroso de acidez para uso seguro na pele.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Experiment Photo */}
              <div className="lg:col-span-5 min-h-[380px] rounded-[24px] overflow-hidden bg-white border border-[#e6ded6] shadow-[0_10px_30px_rgba(62,39,35,0.05)]">
                <SafeImage
                  src="https://spatial-crimson-jfydfgkh.edgeone.dev/file.png"
                  alt="Aferição do pH do sabonete líquido com tubos de ensaio"
                  className="w-full h-full min-h-[380px] object-cover"
                />
              </div>

              {/* Experiment Protocols */}
              <div className="lg:col-span-7 flex flex-col gap-4 justify-between">
                
                <article className="bg-white border border-[#e6ded6] rounded-[18px] p-6 shadow-[0_10px_30px_rgba(62,39,35,0.04)]">
                  <h3 className="text-lg font-bold text-[#3e2723] flex items-center gap-2 mb-2">
                    <FlaskConical className="w-5 h-5 text-[#6b705c]" />
                    <span>Insumos Ativos & Segurança Cutânea</span>
                  </h3>
                  <p className="text-sm text-[#4e342e] leading-relaxed">
                    Base glicerinada cristal pura, extrato glicólico concentrado de maracujá, essência aromática natural, óleo vegetal de amêndoa para emoliência e sementes in natura devidamente desidratadas ao sol.
                  </p>
                </article>

                <article className="bg-white border border-[#e6ded6] rounded-[18px] p-6 shadow-[0_10px_30px_rgba(62,39,35,0.04)]">
                  <h3 className="text-lg font-bold text-[#3e2723] flex items-center gap-2 mb-2">
                    <Sun className="w-5 h-5 text-[#d4a373]" />
                    <span>Desidratação das Sementes ao Sol</span>
                  </h3>
                  <p className="text-sm text-[#4e342e] leading-relaxed">
                    A lavagem e secagem prévia em papel absorvente sob luz solar direta eliminou a umidade biológica das sementes de maracujá, prevenindo proliferação de microrganismos e mantendo sua textura esfoliante perfeita.
                  </p>
                </article>

                <article className="bg-white border border-[#e6ded6] rounded-[18px] p-6 shadow-[0_10px_30px_rgba(62,39,35,0.04)]">
                  <h3 className="text-lg font-bold text-[#3e2723] flex items-center gap-2 mb-2">
                    <Activity className="w-5 h-5 text-[#6b705c]" />
                    <span>Aferição do pH com Tubos de Ensaio</span>
                  </h3>
                  <p className="text-sm text-[#4e342e] leading-relaxed">
                    O teste de pH indicou índice compatível com o manto ácido da pele humana, garantindo higienização profunda sem causar ressecamento ou descamação da epiderme.
                  </p>
                </article>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
             REGISTROS DO DIÁRIO DE BORDO
        ====================================================== */}
        <section id="diario" className="py-20 border-b border-[#e6ded6]">
          <div className="max-w-[1180px] w-[calc(100%-36px)] mx-auto">
            
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-extrabold tracking-[2px] text-[#6b705c] uppercase font-sans-ui block mb-2">
                Acompanhamento das Etapas
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3e2723]">
                Registros de Execução
              </h2>
              <p className="text-base sm:text-lg text-[#4e342e] mt-4 leading-relaxed">
                Relatos transcritos a partir do acompanhamento contínuo dos encontros do grupo.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              
              {/* REGISTRO 01 */}
              <article className="bg-white border border-[#e6ded6] rounded-[20px] p-7 sm:p-8 shadow-[0_16px_40px_rgba(62,39,35,0.08)]">
                <span className="inline-block px-3 py-1 bg-[#f4eee5] text-[#3e2723] border border-[#e6ded6] rounded-full text-[11px] font-extrabold tracking-[1px] font-sans-ui uppercase mb-3">
                  2 DE OUTUBRO DE 2025
                </span>

                <h3 className="text-xl font-bold text-[#3e2723] mb-3">
                  Primeiro Encontro e Escolha Inicial
                </h3>

                <p className="text-sm text-[#4e342e] leading-relaxed">
                  Nosso primeiro encontro foi na casa de Lays, foram Nandielly, Paulo, Thayllon e Miquéias, todos do grupo estavam presentes. Escrevemos o formulário e decidimos o que trataria o nosso trabalho. Escolhemos fazer um sabonete artesanal líquido e em barra de pitaya.
                </p>
              </article>

              {/* REGISTRO 02 */}
              <article className="bg-white border border-[#e6ded6] rounded-[20px] p-7 sm:p-8 shadow-[0_16px_40px_rgba(62,39,35,0.08)]">
                <span className="inline-block px-3 py-1 bg-[#f4eee5] text-[#3e2723] border border-[#e6ded6] rounded-full text-[11px] font-extrabold tracking-[1px] font-sans-ui uppercase mb-3">
                  9 DE OUTUBRO DE 2025
                </span>

                <h3 className="text-xl font-bold text-[#3e2723] mb-3">
                  Substituição da Fruta para Maracujá
                </h3>

                <p className="text-sm text-[#4e342e] leading-relaxed">
                  Nos reunimos na casa de Paulo, faltou somente Nandielly (por questões pessoais). Nesse dia resolvemos trocar de fruta, pois descobrimos que a pitaya não vai se desenvolver porque está fora de época. Escolhemos a fruta maracujá.
                </p>
              </article>

              {/* REGISTRO 03 */}
              <article className="bg-white border border-[#e6ded6] rounded-[20px] p-7 sm:p-8 shadow-[0_16px_40px_rgba(62,39,35,0.08)]">
                <span className="inline-block px-3 py-1 bg-[#f4eee5] text-[#3e2723] border border-[#e6ded6] rounded-full text-[11px] font-extrabold tracking-[1px] font-sans-ui uppercase mb-3">
                  31 DE OUTUBRO DE 2025
                </span>

                <h3 className="text-xl font-bold text-[#3e2723] mb-3">
                  Procura de Insumos & Nova Integrante
                </h3>

                <p className="text-sm text-[#4e342e] leading-relaxed">
                  Nos encontramos na casa de Paulo, estavam presentes Paulo, Nandielly, Lays, Brenda (a nova integrante do grupo) e Thayllon, faltando apenas Miquéias pois ele está viajando. Nesse dia estava programado para fazermos o sabonete e fomos todos nas lojas procurar os ingredientes, não achamos nenhum ingrediente na cidade de onde moramos. Voltamos para a casa de Paulo para comprarmos pela internet, pesquisamos e compramos. Deixamos para fazer o sabonete outro dia.
                </p>
              </article>

              {/* REGISTRO 04 */}
              <article className="bg-white border border-[#e6ded6] rounded-[20px] p-7 sm:p-8 shadow-[0_16px_40px_rgba(62,39,35,0.08)]">
                <span className="inline-block px-3 py-1 bg-[#f4eee5] text-[#3e2723] border border-[#e6ded6] rounded-full text-[11px] font-extrabold tracking-[1px] font-sans-ui uppercase mb-3">
                  7 DE NOVEMBRO DE 2025
                </span>

                <h3 className="text-xl font-bold text-[#3e2723] mb-3">
                  Fabricação Inicial (Líquido e Barra)
                </h3>

                <p className="text-sm text-[#4e342e] leading-relaxed">
                  O dia em que fizemos o sabonete líquido e em barra de maracujá. Reunimo-nos na casa de Lays, foram Nandielly, Paulo, Brenda e Lays, faltando Thayllon (questões pessoais) e Miquéias (viajando). Nesse dia já haviam chegado todos os ingredientes. Começamos a fazer o sabonete líquido: Lays foi colocando os itens e Nandielly misturando no recipiente, Paulo e Brenda foram colocando as sementes de maracujá para secar no sol. Depois Lays estava triturando as sementes que já haviam secado para colocar no pote. Lays e Nandielly foram colocando o líquido nos potes com ajuda de uma seringa, e Paulo e Brenda limpando e fechando. Testamos o sabonete e ficou impecável! Logo após terminarmos o sabonete líquido fomos fazer o em barra. Derretemos a glicerina em banho-maria, em seguida colocamos os itens da receita. Brenda, Paulo e Lays estavam colocando as sementes na forma de silicone e Nandielly mexendo o sabonete no banho-maria para não endurecer. Colocamos o líquido na forma e acrescentamos mais sementes para ficar mais bonito. Deixamos secar e mais tarde Lays testou o sabonete e ficou impecável também!
                </p>
              </article>

              {/* REGISTRO 05 */}
              <article className="bg-white border border-[#e6ded6] rounded-[20px] p-7 sm:p-8 shadow-[0_16px_40px_rgba(62,39,35,0.08)]">
                <span className="inline-block px-3 py-1 bg-[#f4eee5] text-[#3e2723] border border-[#e6ded6] rounded-full text-[11px] font-extrabold tracking-[1px] font-sans-ui uppercase mb-3">
                  10 DE NOVEMBRO DE 2025
                </span>

                <h3 className="text-xl font-bold text-[#3e2723] mb-3">
                  Segunda Remessa & Embalagens
                </h3>

                <p className="text-sm text-[#4e342e] leading-relaxed">
                  O encontro foi na casa de Lays, estavam presentes nesse dia Lays, Paulo, Brenda e Thayllon (Nandielly não foi por motivos pessoais e Miquéias por estar viajando). Enquanto os participantes não chegavam, Lays já tinha lavado e colocado as sementes no sol. Brenda e Thayllon chegaram e foram tirar as sementes do sol que já haviam secado. Paulo atrasou um pouco, mas assim que chegou foram preparar a segunda remessa dos sabonetes em barra, enquanto Thayllon e Brenda organizavam as sementes no molde de silicone, Lays e Paulo faziam o sabonete: primeiro cortamos a glicerina e fomos derreter, começamos a preparar os ingredientes e fomos despejando na glicerina e misturando devagar. Assim que terminou de colocar os ingredientes, Lays e Paulo foram colocar o sabonete no molde que já estavam prontas as sementes. Foram limpar e organizar a mesa para começar a preparar as embalagens dos sabonetes em barra e escolher também os adesivos que iríamos colocar. No decorrer do tempo Brenda teve que ir embora, ficando somente Paulo, Lays e Thayllon. Enquanto Paulo foi na loja para imprimir os adesivos para colocar na embalagem do sabonete líquido, Thayllon e Lays foram pesquisando maneiras de fazer embalagens para o sabonete em barra. Depois de quase 2 horas pesquisando, Lays já tinha terminado de colocar os adesivos na embalagem do sabonete líquido enquanto Thayllon e Paulo procuravam por embalagens, até que Lida (mãe de Lays) e Débora (tia de Lays) começaram a ajudar. A Débora teve uma excelente ideia e conseguimos fazer a embalagem, ficando nós Lays, Paulo e Thayllon até as 19h da noite fazendo o trabalho, deixando tudo organizado e pronto.
                </p>
              </article>

            </div>

          </div>
        </section>

        {/* =====================================================
             9. RESULTADOS E DISCUSSÃO (DO PDF)
        ====================================================== */}
        <section id="resultados" className="py-20 bg-[#3e2723] text-white">
          <div className="max-w-[1180px] w-[calc(100%-36px)] mx-auto">
            
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-extrabold tracking-[2px] text-[#e9c46a] uppercase font-sans-ui block mb-2">
                9. Avaliação Prática
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Resultados e Discussão
              </h2>
              <p className="text-base sm:text-lg text-white/75 mt-4 leading-relaxed">
                Desempenho comprovado do sabonete líquido e em barra nas análises de hidratação, aroma e acabamento estético.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Sabonete Líquido */}
              <article className="p-8 sm:p-9 rounded-[24px] bg-white/5 border border-white/10 space-y-3">
                <span className="text-3xl font-extrabold text-[#e9c46a] font-sans-ui block mb-1">
                  Sabonete Líquido
                </span>
                <h3 className="text-xl font-bold text-white">
                  Eficácia, Maciez & Aroma Relaxante
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Após a produção e os testes, observou-se que o sabonete líquido artesanal de maracujá apresentou resultados satisfatórios em relação à proposta inicial. O produto mostrou-se eficaz na limpeza suave da pele, mantendo-a macia e hidratada, conforme esperado. Além disso, o agradável aroma do maracujá destacou-se como um dos principais diferenciais, proporcionando uma sensação refrescante e relaxante durante o uso. Dessa forma, o sabonete líquido atendeu ao objetivo de oferecer um produto artesanal de qualidade, com benefícios sensoriais e de cuidado para a pele.
                </p>
              </article>

              {/* Sabonete em Barra */}
              <article className="p-8 sm:p-9 rounded-[24px] bg-white/5 border border-white/10 space-y-3">
                <span className="text-3xl font-extrabold text-[#e9c46a] font-sans-ui block mb-1">
                  Sabonete em Barra
                </span>
                <h3 className="text-xl font-bold text-white">
                  Textura Cremosa & Ação Hidratante
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Da mesma forma, o sabonete artesanal de maracujá em barra também demonstrou excelente desempenho. Sua textura cremosa e aparência estética, com coloração e design atrativos, tornaram o produto visualmente bonito e agradável. Além da beleza, o sabonete em barra apresentou uma ação hidratante intensa, deixando a pele suave e nutrida após o uso com as sementes agindo como esfoliante natural.
                </p>
              </article>

            </div>

          </div>
        </section>

        {/* =====================================================
             10. CONCLUSÕES (DO PDF)
        ====================================================== */}
        <section id="conclusao" className="py-20 border-b border-[#e6ded6]">
          <div className="max-w-[1180px] w-[calc(100%-36px)] mx-auto">
            
            <div className="relative overflow-hidden p-8 sm:p-14 rounded-[28px] bg-gradient-to-br from-[#4e342e] to-[#2c1a17] text-white shadow-xl">
              
              <div className="relative z-10">
                <span className="text-xs font-extrabold tracking-[2px] text-[#e9c46a] uppercase font-sans-ui block mb-3">
                  10. Considerações Finais
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                  Conclusões
                </h2>

                <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl">
                  O projeto do sabonete artesanal de maracujá, nas versões líquida e em barra, atingiu seus objetivos ao produzir sabonetes naturais, hidratantes e aromáticos, que cuidam da pele de forma suave. Além disso, destacou-se pelo compromisso sustentável, utilizando materiais reutilizáveis e valorizando o reaproveitamento de recursos. Assim, comprovou ser possível unir cuidado pessoal, economia e preservação ambiental por meio da produção artesanal e ecológica.
                </p>
              </div>

              {/* Decorative clean botanical SVG vector mark in background */}
              <div className="absolute right-6 -bottom-6 w-56 h-56 text-white/5 pointer-events-none select-none">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12C2 6.5 6.5 2 12 2z" />
                </svg>
              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
             EQUIPE (MEMBROS DO GRUPO - SEM EMOJI / SEM LISTA DE TAREFAS INDIVIDUAIS)
        ====================================================== */}
        <section id="equipe" className="py-20 border-b border-[#e6ded6]">
          <div className="max-w-[1180px] w-[calc(100%-36px)] mx-auto">
            
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-extrabold tracking-[2px] text-[#6b705c] uppercase font-sans-ui block mb-2">
                Autoria da Pesquisa
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3e2723]">
                Membros do Grupo
              </h2>
              <p className="text-base sm:text-lg text-[#4e342e] mt-4 leading-relaxed">
                Estudantes autores do projeto Passiflora.
              </p>
            </div>

            {/* Students Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { name: "Brenda Nogueira Marques dos Santos", initials: "BN" },
                { name: "Lays Dias Araújo", initials: "LD" },
                { name: "Miqueias Souza Chaves", initials: "MS" },
                { name: "Nandielly Thauanny de Oliveira", initials: "NT" },
                { name: "Paulo Henrique Paz Garcia de Almeida", initials: "PH" },
                { name: "Thayllon Rik dos Santos", initials: "TR" },
              ].map((member, i) => (
                <article
                  key={i}
                  className="p-6 bg-white border border-[#e6ded6] rounded-[20px] shadow-[0_10px_30px_rgba(62,39,35,0.04)] flex items-center gap-4 hover:-translate-y-1 transition-transform duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f4eee5] border border-[#d4a373] flex items-center justify-center font-sans-ui font-extrabold text-sm text-[#3e2723] shrink-0">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#3e2723] leading-snug">
                      {member.name}
                    </h3>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* =====================================================
             11. REFERÊNCIAS (DO PDF)
        ====================================================== */}
        <section id="referencias" className="py-20 border-b border-[#e6ded6]">
          <div className="max-w-[1180px] w-[calc(100%-36px)] mx-auto">
            
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-extrabold tracking-[2px] text-[#6b705c] uppercase font-sans-ui block mb-2">
                11. Fontes Consultadas
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3e2723]">
                Referências Bibliográficas
              </h2>
            </div>

            <div className="bg-white border border-[#e6ded6] rounded-[24px] p-8 sm:p-10 shadow-[0_10px_30px_rgba(62,39,35,0.04)] space-y-4 font-sans-ui text-xs sm:text-sm text-[#4e342e] leading-relaxed">
              <p className="pb-3 border-b border-[#e6ded6]">
                <strong>BRASIL. Agência Nacional de Vigilância Sanitária (ANVISA).</strong> Guia para produtos cosméticos: aspectos de segurança e eficácia. Brasília, 2018.
              </p>
              <p className="pb-3 border-b border-[#e6ded6]">
                <strong>COSTA, Aline R.; FERREIRA, Marcos P.</strong> Sustentabilidade na produção artesanal de cosméticos: práticas ecológicas e econômicas. <em>Revista Verde de Agroecologia e Desenvolvimento Sustentável</em>, v. 15, n. 3, p. 102–110, 2021.
              </p>
              <p className="pb-3 border-b border-[#e6ded6]">
                <strong>OLIVEIRA, Carla Mendes de.</strong> <em>Produção artesanal de sabonetes: práticas sustentáveis e uso de ingredientes naturais.</em> Rio de Janeiro: EcoArte, 2022.
              </p>
              <p className="pb-3 border-b border-[#e6ded6]">
                <strong>SANTOS, Maria Lúcia dos.</strong> <em>Cosméticos naturais e seus benefícios para a pele: uma abordagem sustentável.</em> São Paulo: Editora Natura Viva, 2021.
              </p>
              <p>
                <strong>SILVA, Joana Pereira; ALMEIDA, Ricardo T.</strong> Propriedades cosméticas do maracujá (Passiflora edulis): aplicações e benefícios para a pele. <em>Revista Brasileira de Cosméticos Naturais</em>, v. 8, n. 2, p. 45–52, 2020.
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* =========================================================
           FOOTER
      ========================================================= */}
      <footer className="bg-[#3e2723] text-white py-14 px-5 text-center font-sans-ui">
        <div className="max-w-[1180px] mx-auto flex flex-col items-center">
          <div className="w-14 h-14 rounded-full border border-[#d4a373] bg-[#f4eee5] overflow-hidden flex items-center justify-center shadow-md mb-3">
            <SafeImage
              src={passifloraCapaImg}
              alt="Logo Passiflora Oficial"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-2xl font-bold font-serif tracking-[1.5px]">
            PASSIFLORA
          </div>

          <p className="text-xs text-[#e9c46a] italic mt-1 font-serif">
            Sua pele merece o toque da natureza!
          </p>

          <div className="w-12 h-0.5 bg-[#d4a373] my-5 mx-auto rounded-full" />

          <p className="text-sm text-white/80">
            Do Fruto à Ação: Sabonete que Faz a Diferença
          </p>
        </div>
      </footer>

      {/* =========================================================
           LIGHTBOX MODAL (WITH SVG CONTROLS)
      ========================================================= */}
      {currentLightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-[10000] bg-[#190f0c]/95 flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            className="fixed top-5 right-5 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition z-20"
            aria-label="Fechar visualização"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryPhotos.length) % galleryPhotos.length : 0));
            }}
            className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition z-20"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryPhotos.length : 0));
            }}
            className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition z-20"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[950px] w-full max-h-[90vh] flex flex-col items-center"
          >
            <div className="max-h-[72vh] w-auto overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl">
              <SafeImage
                src={currentLightboxPhoto.url}
                alt={currentLightboxPhoto.title}
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="w-full mt-4 text-center text-white font-sans-ui space-y-1">
              <strong className="text-base sm:text-lg block font-bold">
                {currentLightboxPhoto.title}
              </strong>
              <span className="text-xs sm:text-sm text-white/75 block">
                {currentLightboxPhoto.description}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
           FLOATING TOP BUTTON
      ========================================================= */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed right-5 bottom-[98px] sm:bottom-8 w-12 h-12 rounded-full bg-[#3e2723] hover:bg-[#2c1a17] text-white flex items-center justify-center shadow-xl z-[900] transition cursor-pointer"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* =========================================================
           MOBILE BOTTOM NAVIGATION: FLOATING PILL BAR (CLEAN, ROUNDED, CENTERED)
      ========================================================= */}
      <div className="fixed inset-x-0 bottom-4 z-[2000] sm:hidden flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto bg-[#3e2723]/95 backdrop-blur-xl border border-white/15 rounded-full px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.35)] flex items-center gap-2 font-sans-ui">
          
          <a
            href="#inicio"
            className={`px-4 py-2 rounded-full flex items-center gap-1.5 text-xs font-bold transition-all ${
              activeSection === "inicio"
                ? "bg-[#e9c46a] text-[#3e2723] shadow-sm"
                : "text-white/80 hover:text-white"
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Início</span>
          </a>

          <a
            href="#projeto"
            className={`px-4 py-2 rounded-full flex items-center gap-1.5 text-xs font-bold transition-all ${
              activeSection === "projeto" || activeSection === "objetivos" || activeSection === "metodologia"
                ? "bg-[#e9c46a] text-[#3e2723] shadow-sm"
                : "text-white/80 hover:text-white"
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            <span>Sobre</span>
          </a>

          <a
            href="#galeria"
            className={`px-4 py-2 rounded-full flex items-center gap-1.5 text-xs font-bold transition-all ${
              activeSection === "galeria" || activeSection === "experimento" || activeSection === "diario" || activeSection === "resultados"
                ? "bg-[#e9c46a] text-[#3e2723] shadow-sm"
                : "text-white/80 hover:text-white"
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Galeria</span>
          </a>

        </nav>
      </div>

    </div>
  );
}
