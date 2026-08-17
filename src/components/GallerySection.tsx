import React, { useState } from "react";
import { Image as ImageIcon, ZoomIn, X, Tag, ExternalLink } from "lucide-react";
import { ScienceProject, GalleryCategory } from "../types";

interface GallerySectionProps {
  project: ScienceProject;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ project }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [activeImage, setActiveImage] = useState<(typeof project.gallery)[0] | null>(null);

  const categories = ["Todas", "Microscopia", "Protótipos", "Ensaios", "Bancada"];

  const filteredImages = project.gallery.filter((item) => {
    if (selectedCategory === "Todas") return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="galeria" className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Evidências Fotográficas & Microscopia</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Galeria do Laboratório & Protótipos
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Registros de microscopia eletrônica de varredura (MEV), ensaios destrutivos e protótipos funcionais desenvolvidos no projeto.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-950/50 font-bold"
                  : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={img.url}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[11px] font-mono text-cyan-300 border border-cyan-500/30">
                  {img.tag}
                </span>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-xs">
                  <span className="p-3 rounded-full bg-cyan-500 text-slate-950 shadow-lg transform scale-90 group-hover:scale-100 transition">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                    {img.category}
                  </span>
                  <h4 className="text-base font-display font-bold text-white mb-2">
                    {img.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {img.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Clique para ampliar</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Zoom Preview */}
        {activeImage && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-slate-700 max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl relative">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeImage.url}
                  alt={activeImage.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[60vh] w-auto object-contain"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono">
                    {activeImage.tag}
                  </span>
                  <span className="text-xs text-slate-400">
                    Categoria: {activeImage.category}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  {activeImage.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
