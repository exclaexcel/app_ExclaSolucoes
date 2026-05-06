/* Documentos: PNGs locais servidos sem pipeline de otimização (evita 500 no dev/Windows). */
/* eslint-disable @next/next/no-img-element */

import type { CSSProperties, ReactNode } from "react";

export type DocumentShellProps = {
  headerInfo: ReactNode;
  children: ReactNode;
  footerLeft: string;
  footerPage: number | string;
  /** Imagem de papel timbrado (ex.: PNG exportado) — opcional */
  timbradoImageSrc?: string;
  logoSrc?: string | null;
  logoAlt?: string;
  /** Escudo / arte só de marca d'água. `null` desliga. `undefined` = `/marca-dagua-excla.png` */
  watermarkSrc?: string | null;
  /** Opacidade da marca d'água (0 a 1) */
  watermarkOpacity?: number;
  /** Proposta usava py-3 (12px); contrato py-[10px] — valores originais do HTML */
  footerPaddingClass?: string;
};

/** Caminho padrão: escudo (só imagem), independente do logo do cabeçalho */
const DEFAULT_WATERMARK_SRC = "/marca-dagua-excla.png";

/** Altura A4 + faixas empilhadas (marca ao meio de cada “folha” virtual) */
const A4_H = "29.7cm";
/** Nº máx. de folhas virtuais com marca (documentos muito longos) */
const WATERMARK_PAGE_STRIPS = 30;

function resolveWatermarkSrc(
  watermarkSrc: string | null | undefined,
): string | null {
  if (watermarkSrc === null) return null;
  if (watermarkSrc) return watermarkSrc;
  return DEFAULT_WATERMARK_SRC;
}

/**
 * Uma faixa = uma folha A4 de altura; o escudo fica ao meio da faixa, à direita,
 * com metade para fora (translateX 50%), cortado pelo `overflow-hidden` da faixa.
 */
function WatermarkPageStrips({
  src,
  opacity,
}: {
  src: string;
  opacity: number;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {Array.from({ length: WATERMARK_PAGE_STRIPS }, (_, i) => (
        <div
          key={i}
          className="absolute left-0 right-0 overflow-hidden"
          style={{
            top: `calc(${A4_H} * ${i})`,
            height: A4_H,
          }}
        >
          <img
            src={src}
            alt=""
            decoding="async"
            className="absolute top-1/2 right-0 h-[12.5cm] w-auto max-w-none -translate-y-1/2 translate-x-1/2 object-contain object-right"
            style={{ opacity }}
          />
        </div>
      ))}
    </div>
  );
}

/**
 * Usa `<img>` em vez de `next/image` para logo e marca d'água: evita falhas do
 * pipeline Sharp / otimização no dev (Windows), que costumam gerar 500 genérico.
 */
export function DocumentShell({
  headerInfo,
  children,
  footerLeft,
  footerPage,
  timbradoImageSrc,
  logoSrc = "/logo-excla.png",
  logoAlt = "Exclã Soluções",
  watermarkSrc,
  watermarkOpacity = 0.085,
  footerPaddingClass = "py-3",
}: DocumentShellProps) {
  const resolvedWatermark = resolveWatermarkSrc(watermarkSrc);

  const sheetStyle: CSSProperties = {
    ...(timbradoImageSrc
      ? {
          backgroundImage: `url(${timbradoImageSrc})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }
      : {}),
  };

  return (
    <div
      className="excla-document-sheet relative mx-auto my-5 box-border flex min-h-[29.7cm] w-[21cm] flex-col overflow-hidden border-x-[8px] border-excla-dark bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] print:shadow-none"
      style={sheetStyle}
    >
      {resolvedWatermark ? (
        <WatermarkPageStrips src={resolvedWatermark} opacity={watermarkOpacity} />
      ) : null}

      <div className="relative z-[1] flex min-h-[29.7cm] flex-1 flex-col print:shadow-none">
        <header className="relative border-b-[3px] border-excla-dark bg-gradient-to-b from-white to-[#f9faf7] px-[45px] pb-[15px] pt-[35px] text-center">
          <div className="flex justify-center">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={logoAlt}
                width={260}
                height={84}
                decoding="async"
                fetchPriority="high"
                className="mx-auto h-auto max-h-[76px] w-auto object-contain"
              />
            ) : (
              <div className="font-serif text-[28px] font-bold tracking-tight text-excla-dark">
                Exclã <span className="text-excla-green">Soluções</span>
              </div>
            )}
          </div>
        </header>

        <div className="relative px-[45px] py-5 text-[11px] leading-[1.8] text-gray-600 [&_strong]:font-semibold [&_strong]:text-excla-dark">
          {headerInfo}
        </div>

        {children}

        <footer
          className={`relative mt-auto flex justify-between border-t-[3px] border-excla-dark bg-excla-muted/95 px-[45px] text-[9px] text-gray-600 backdrop-blur-[0.5px] ${footerPaddingClass}`}
        >
          <div>{footerLeft}</div>
          <div>
            Página <strong className="text-excla-dark">{footerPage}</strong>
          </div>
        </footer>
      </div>
    </div>
  );
}
