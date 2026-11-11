import React, { useState } from "react";
import { CRM_SYSTEM_SCREENS } from "../data/brochureData";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

export default function OpeningCommandLedger() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = CRM_SYSTEM_SCREENS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? CRM_SYSTEM_SCREENS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CRM_SYSTEM_SCREENS.length);
  };

  return (
    <section
      id="crm-whatsapp"
      className="py-16 lg:py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Cabecera limpia y directa sin párrafos largos */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
          <div>
            <h2 className="font-display-progresis font-bold text-3xl sm:text-4xl text-[#274C9B] leading-tight">
              CRM & Agente IA en{" "}
              <span className="text-[#C2410C]">WhatsApp</span>
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#334155] font-medium">
              Atiende chats 24/7, agenda en Google Calendar y registra
              oportunidades automáticamente.
            </p>
          </div>

          {/* Selector de las 4 vistas clave */}
          <div
            role="tablist"
            aria-label="Vistas del CRM EmpresasPro"
            className="flex flex-wrap lg:flex-nowrap gap-2 shrink-0"
          >
            {CRM_SYSTEM_SCREENS.map((screen, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={screen.id}
                  role="tab"
                  aria-selected={isSelected}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#C2410C] text-[#FFFFFF] shadow-progresis-sm"
                      : "bg-[#EDF3FC] text-[#274C9B] border border-[#CBD5E1] hover:border-[#274C9B]"
                  }`}
                >
                  {screen.shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Marco Principal del Producto */}
        <div className="rounded-[28px] bg-[#EDF3FC] border border-[#CBD5E1] shadow-progresis-lg overflow-hidden">
          {/* Una sola barra superior limpia con etiquetas cortas */}
          <div className="bg-[#152B59] text-[#FFFFFF] px-5 sm:px-7 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-[#334E85]">
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="flex items-center gap-1.5 shrink-0"
                aria-hidden="true"
              >
                <span className="w-3 h-3 rounded-full bg-[#EB6828]" />
                <span className="w-3 h-3 rounded-full bg-[#FDBA74]" />
                <span className="w-3 h-3 rounded-full bg-[#7DD3FC]" />
              </div>
              <h2 className="font-display-progresis font-bold text-base sm:text-lg text-[#FFFFFF]">
                {activeScreen.title}
              </h2>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 ml-auto">
              <div className="hidden md:flex items-center gap-2">
                {activeScreen.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E386D] border border-[#3B5998] text-xs font-bold text-[#E2EAF6]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7DD3FC] shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Vista anterior"
                  className="w-8 h-8 rounded-full bg-[#1E386D] hover:bg-[#274C9B] border border-[#3B5998] text-[#FFFFFF] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Siguiente vista"
                  className="w-8 h-8 rounded-full bg-[#C2410C] hover:bg-[#9A3412] text-[#FFFFFF] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Captura de pantalla limpia a tamaño completo */}
          <div className="p-3 sm:p-5">
            <div className="rounded-[20px] overflow-hidden border border-[#CBD5E1] bg-[#FFFFFF] shadow-progresis-md">
              <img
                src={activeScreen.image}
                alt={activeScreen.title}
                width={1366}
                height={680}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        {/* 4 Tarjetas Visuales de Acceso Rápido */}
        <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {CRM_SYSTEM_SCREENS.map((screen, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group text-left rounded-[20px] p-2.5 transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-[#EDF3FC] border-2 border-[#274C9B] shadow-progresis-md"
                    : "bg-[#FFFFFF] border-[#CBD5E1] hover:border-[#274C9B]"
                }`}
              >
                <div className="rounded-[12px] overflow-hidden border border-[#E2E8F0] bg-[#F8FAFC] aspect-[16/9]">
                  <img
                    src={screen.image}
                    alt={screen.shortLabel}
                    loading="lazy"
                    width={400}
                    height={225}
                    className="w-full h-full object-cover object-left-top group-hover:scale-[1.02] transition-transform"
                  />
                </div>
                <div className="mt-2.5 px-1 flex items-center justify-between gap-2">
                  <span className="font-display-progresis font-bold text-sm text-[#1E293B]">
                    {screen.shortLabel}
                  </span>
                  <span
                    className={`text-xs font-extrabold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-[#C2410C] text-[#FFFFFF]"
                        : "bg-[#EDF3FC] text-[#274C9B]"
                    }`}
                  >
                    {screen.tags[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
