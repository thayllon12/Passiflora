import React, { useState, useEffect } from "react";
import { Leaf } from "lucide-react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
}

export function normalizeImageUrl(src?: string): string {
  if (!src) return "";
  if (src.includes("edgeone.dev") && !src.includes("/file.png") && !src.endsWith(".jpg") && !src.endsWith(".png")) {
    return src.endsWith("/") ? `${src}file.png` : `${src}/file.png`;
  }
  return src;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = "Imagem do Projeto Passiflora",
  className = "",
  fallbackText = "Registro Fotográfico Passiflora",
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const resolvedSrc = normalizeImageUrl(src);

  useEffect(() => {
    setHasError(false);
    setLoaded(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-[#f4eee5] w-full h-full flex items-center justify-center ${className}`}>
      {!hasError && resolvedSrc ? (
        <img
          src={resolvedSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} ${props.className || ""}`}
          {...props}
        />
      ) : null}

      {/* Fallback placeholder if image error or loading */}
      {(hasError || (!loaded && resolvedSrc)) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-[#f4eee5] text-[#8d6e63]">
          <div className="w-10 h-10 rounded-full bg-[#e8ded1] flex items-center justify-center mb-2 text-[#6b705c]">
            <Leaf className="w-5 h-5 text-[#6b705c]" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider font-sans-ui text-[#4e342e]">
            {alt || fallbackText}
          </span>
          <span className="text-[10px] text-[#8d6e63] mt-0.5 font-sans-ui">
            Passiflora • Saboaria Artesanal
          </span>
        </div>
      )}
    </div>
  );
};
