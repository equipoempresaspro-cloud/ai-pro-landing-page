import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "#comparativa-erp", label: "ERP vs. Agent PRO" },
  { href: "#modelos-implementacion", label: "Modelos A / B" },
  { href: "#circuito-agentes", label: "7 Agentes IA" },
  { href: "#modulos-suite", label: "6 Módulos Suite" },
  { href: "#planes-saas", label: "Planes SaaS" },
];

export default function CommandHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 pb-2 pointer-events-none">
      <div className="max-w-[1180px] mx-auto pointer-events-auto">
        <div className="cabecera-capsula flex items-center justify-between px-5 sm:px-7 py-2.5">
          <a
            href="#inicio"
            aria-label="Prógresis SAC — Inicio"
            className="flex items-center shrink-0 py-0.5"
          >
            <img
              src="./logo-progresis.png"
              alt="Prógresis SAC · Consultoría y Tecnología"
              width={254}
              height={95}
              className="h-10 sm:h-11 w-auto object-contain block"
            />
          </a>

          <nav
            aria-label="Navegación de secciones Agent PRO"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link-progresis"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#paso-cero" className="btn-pill-ml6">
              <span>
                <span className="hidden sm:inline">Agendar </span>Paso Cero
              </span>
              <span className="icono-circulo" aria-hidden="true">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menú de navegación"
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#CBD5E1] bg-[#F8FAFC] text-[#274C9B] hover:bg-[#EDF3FC] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            aria-label="Menú móvil"
            className="lg:hidden mt-2 rounded-[20px] bg-[#FFFFFF] border border-[#CBD5E1] shadow-progresis-md p-4 flex flex-col gap-2"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-[12px] font-bold text-sm text-[#1E293B] hover:bg-[#EDF3FC] hover:text-[#274C9B] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
