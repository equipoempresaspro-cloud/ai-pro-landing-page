import React from "react";
import { COMPANY_DATA } from "../data/brochureData";
import { PhoneCall, ArrowUpRight } from "lucide-react";

export default function CommandHeader({ activePlanLabel }) {
  return (
    <header className="sticky top-0 z-50 bg-[#08227A] text-white border-b border-[#2347BA]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Official Prógresis Logo Only */}
        <a
          href="#inicio"
          className="inline-flex items-center shrink-0 focus:outline-none"
          aria-label="Prógresis SAC - Inicio"
        >
          <img
            src="./progresis-logo.png"
            alt="Prógresis"
            className="h-10 sm:h-11 w-auto object-contain block"
          />
        </a>

        {/* Ledger Section Navigation */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#DCE6FF]"
        >
          <a
            href="#comparativa"
            className="hover:text-white transition-colors py-1"
          >
            ERP vs. PRO-IA
          </a>
          <a
            href="#implementacion"
            className="hover:text-white transition-colors py-1"
          >
            Modelos A / B
          </a>
          <a
            href="#agentes"
            className="hover:text-white transition-colors py-1"
          >
            Los 7 Agentes
          </a>
          <a
            href="#modulos"
            className="hover:text-white transition-colors py-1"
          >
            6 Módulos Suite
          </a>
          <a
            href="#retorno"
            className="hover:text-white transition-colors py-1"
          >
            ROI & Planes SaaS
          </a>
        </nav>

        {/* Direct Action Bar */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:+51${COMPANY_DATA.phone.replace(/\s+/g, "")}`}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-tabular-data text-[#DCE6FF] hover:text-white border border-[#2E56D8] bg-[#0B2D9E] transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#FF7A33]" />
            <span>{COMPANY_DATA.phone}</span>
          </a>

          <a
            href="#paso-cero"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold bg-[#C23800] hover:bg-[#9E2D00] text-white transition-colors"
          >
            <span>El Paso Cero</span>
            {activePlanLabel && (
              <span className="hidden md:inline font-tabular-data text-[11px] bg-[#061858]/50 px-1.5 py-0.5">
                {activePlanLabel.split("·")[0].trim()}
              </span>
            )}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
