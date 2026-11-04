import React, { useState } from "react";
import { LIVE_AUDIT_SCENARIOS, ROI_METRICS } from "../data/brochureData";
import { CheckCircle2, Play, FileCheck2, Clock } from "lucide-react";

export default function OpeningCommandLedger() {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [highlightedStep, setHighlightedStep] = useState(0);

  const activeScenario = LIVE_AUDIT_SCENARIOS[activeScenarioIndex];
  const currentStep = activeScenario.steps[highlightedStep];

  const handleScenarioChange = (index) => {
    setActiveScenarioIndex(index);
    setHighlightedStep(0);
  };

  const handleAdvanceStep = () => {
    setHighlightedStep((prev) => (prev + 1) % activeScenario.steps.length);
  };

  return (
    <section
      id="inicio"
      className="pt-8 pb-16 lg:pt-14 lg:pb-24 bg-[#FFFFFF] border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna Izquierda: Titular directo y respirable al estilo progresissac.com */}
          <div className="lg:col-span-6">
            <h1 className="font-display-progresis font-bold text-4xl sm:text-5xl leading-[1.08] text-[#274C9B] uppercase">
              Automatiza tu operación con{" "}
              <span className="text-[#C2410C]">Agent PRO:</span> Backoffice con
              IA 24/7
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#334155] font-medium measure-prose">
              <strong className="font-bold text-[#1E293B]">
                7 agentes especializados
              </strong>{" "}
              que atienden WhatsApp y correo, validan stock y emiten facturación
              SUNAT en menos de 3 minutos, sin digitación manual.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <a href="#paso-cero" className="btn-pill-ml6">
                <span>Agendar Paso Cero</span>
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

              <a href="#circuito-agentes" className="btn-secundario-ml6">
                <span>Explorar los 7 Agentes</span>
              </a>
            </div>

            {/* 3 Indicadores clave en una sola franja limpia */}
            <div className="mt-10 rounded-[20px] bg-[#F8FAFC] border border-[#CBD5E1] grid grid-cols-3 divide-x divide-[#CBD5E1] overflow-hidden shadow-progresis-sm">
              {ROI_METRICS.map((metric) => (
                <div key={metric.code} className="px-4 py-4">
                  <p className="font-display-progresis font-bold text-2xl sm:text-3xl text-[#274C9B] font-tabular-data leading-none">
                    {metric.figure}
                  </p>
                  <p className="mt-1.5 text-xs sm:text-sm font-bold text-[#1E293B]">
                    {metric.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Visor compacto de un paso a la vez */}
          <div className="lg:col-span-6">
            <div className="rounded-[28px] bg-[#FFFFFF] border border-[#CBD5E1] shadow-progresis-lg overflow-hidden">
              <div className="surface-navy-gradient px-6 py-5 text-[#FFFFFF] flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-display-progresis font-bold text-xl text-[#FFFFFF]">
                    Flujo en Vivo · Agent PRO
                  </h2>
                  <p className="text-xs text-[#E2EAF6] mt-0.5">
                    Ejecución automática sin intervención humana
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 font-tabular-data text-xs font-extrabold text-[#FFFFFF] bg-[#C2410C] px-3.5 py-1.5 rounded-full shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                  {activeScenario.elapsedTotal}
                </span>
              </div>

              {/* Selector de Caso */}
              <div
                role="tablist"
                aria-label="Casos operativos de Agent PRO"
                className="bg-[#EDF3FC] px-6 py-3 border-b border-[#CBD5E1] flex flex-wrap gap-2"
              >
                {LIVE_AUDIT_SCENARIOS.map((scenario, idx) => {
                  const isSelected = idx === activeScenarioIndex;
                  return (
                    <button
                      key={scenario.id}
                      role="tab"
                      aria-selected={isSelected}
                      type="button"
                      onClick={() => handleScenarioChange(idx)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#274C9B] text-[#FFFFFF]"
                          : "bg-[#FFFFFF] text-[#1E293B] border border-[#CBD5E1] hover:border-[#274C9B]"
                      }`}
                    >
                      {scenario.label}
                    </button>
                  );
                })}
              </div>

              {/* Mensaje Entrante Resumido */}
              <div className="px-6 py-4 bg-[#F8FAFC] border-b border-[#E2E8F0]">
                <p className="text-xs font-bold text-[#274C9B]">
                  Entrada ({activeScenario.triggerChannel}):
                </p>
                <p className="mt-1 text-sm text-[#1E293B] font-semibold">
                  «{activeScenario.triggerInput}»
                </p>
              </div>

              {/* Visor del Paso Activo (Progresivo, sin saturar con los 3 pasos abiertos) */}
              <div className="p-6 bg-[#FFFFFF]">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1.5">
                    {activeScenario.steps.map((step, idx) => (
                      <button
                        key={step.agentCode}
                        type="button"
                        onClick={() => setHighlightedStep(idx)}
                        className={`px-3 py-1 rounded-full font-tabular-data text-xs font-extrabold transition-colors cursor-pointer ${
                          idx === highlightedStep
                            ? "bg-[#274C9B] text-[#FFFFFF]"
                            : "bg-[#EDF3FC] text-[#274C9B] hover:bg-[#CBD5E1]"
                        }`}
                      >
                        Paso {idx + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleAdvanceStep}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#C2410C] hover:text-[#9A3412] cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Siguiente
                  </button>
                </div>

                <div className="py-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display-progresis font-bold text-lg text-[#1E293B]">
                      {currentStep.agentName}
                    </h3>
                    <span className="inline-flex items-center gap-1 font-tabular-data text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-[#FFF5EF] text-[#9A3412] border border-[#FDBA74]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {currentStep.status} ({currentStep.timeDelta})
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#334155] leading-relaxed">
                    {currentStep.actionTaken}
                  </p>
                </div>
              </div>

              {/* Documento Emitido */}
              <div className="px-6 py-3.5 bg-[#EDF3FC] border-t border-[#CBD5E1] flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E293B]">
                  <FileCheck2 className="w-4 h-4 text-[#274C9B]" />
                  Resultado:
                </span>
                <span className="font-tabular-data text-xs sm:text-sm font-extrabold text-[#274C9B]">
                  {activeScenario.documentGenerated}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
