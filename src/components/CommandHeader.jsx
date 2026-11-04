import React from "react";
import { COMPANY_DATA } from "../data/brochureData";
import { PhoneCall, ArrowUpRight } from "lucide-react";

export default function CommandHeader({ activePlanLabel }) {
  return (
    <header className="sticky top-0 z-50 bg-[#08227A] text-white border-b border-[#2347BA]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Emblem & Proposal Identity */}
        <div className="flex items-center gap-4">
          <a
            href="#inicio"
            className="inline-flex items-center gap-3 group focus:outline-none"
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="shrink-0"
            >
              <rect width="36" height="36" fill="#0B2D9E" />
              <rect
                x="0.5"
                y="0.5"
                width="35"
                height="35"
                stroke="#2E56D8"
              />
              <path
                d="M9 27C13.5 22.5 15.5 16.5 15.5 9.5"
                stroke="#FF7A33"
                strokeWidth="2.8"
                strokeLinecap="square"
              />
              <path
                d="M14 27C18.5 23 21.5 18 24.5 11.5"
                stroke="#FFFFFF"
                strokeWidth="2.4"
                strokeLinecap="square"
              />
              <circle cx="15.5" cy="8.5" r="2.5" fill="#FF7A33" />
              <circle cx="25" cy="10.5" r="2.2" fill="#FFFFFF" />
            </svg>
            <div className="flex items-baseline gap-2.5">
              <span className="font-heading-arch font-extrabold text-lg tracking-tight text-white">
                Prógresis
              </span>
              <span className="font-tabular-data text-xs font-medium text-[#C8D8FF] border-l border-[#2E56D8] pl-2.5">
                PRO-IA B2B
              </span>
            </div>
          </a>

          <span className="hidden xl:inline-block text-xs text-[#DCE6FF] bg-[#0B2D9E] border border-[#2E56D8] px-3 py-1">
            {COMPANY_DATA.proposalLabel}
          </span>
        </div>

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
