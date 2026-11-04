import React, { useState } from "react";
import {
  LIVE_AUDIT_SCENARIOS,
  PRICING_PLANS,
  ROI_METRICS,
} from "../data/brochureData";
import { CheckCircle2, Play, FileCheck2, Clock } from "lucide-react";

export default function OpeningCommandLedger({ onSelectQuickPlan }) {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [highlightedStep, setHighlightedStep] = useState(0);

  const activeScenario = LIVE_AUDIT_SCENARIOS[activeScenarioIndex];

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
      className="pt-6 pb-16 lg:pt-10 lg:pb-24 bg-[#FFFFFF] border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Columna Izquierda: Propuesta Ejecutiva al estilo progresissac.com */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h1 className="font-display-progresis font-bold text-4xl sm:text-5xl leading-[1.08] text-[#274C9B] uppercase">
                Impulsamos tu operación con{" "}
                <span className="text-[#C2410C]">Agent PRO:</span> Sistema
                Agéntico de Backoffice B2B
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EDF3FC] border border-[#CBD5E1] text-xs font-bold uppercase tracking-wider text-[#274C9B]">
                  Prógresis SAC · Consultoría & Tecnología
                </span>
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#FFF5EF] border border-[#FDBA74] text-xs font-bold uppercase tracking-wider text-[#9A3412]">
                  Atención 24/7 en WhatsApp, ERP y SUNAT
                </span>
              </div>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#1E293B] font-medium measure-prose">
                El sistema agéntico de backoffice que simplifica la operación
                comercial, logística y financiera de tu empresa. Tus{" "}
                <strong className="font-bold text-[#274C9B]">
                  7 agentes especializados de IA
                </strong>{" "}
                cotizan, validan inventario multialmacén, procesan órdenes de
                compra y emiten facturación electrónica SUNAT sin digitación
                humana.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a href="#paso-cero" className="btn-pill-ml6">
                  <span>Solicitar Auditoría Paso Cero</span>
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
                  <span>Ver los 7 Agentes en Acción</span>
                </a>
              </div>
            </div>

            {/* Indicadores de Impacto y Selector Rápido de Planes (Sin anidar tarjetas) */}
            <div className="mt-9 space-y-5">
              <div className="rounded-[20px] bg-[#F8FAFC] border border-[#CBD5E1] grid grid-cols-3 divide-x divide-[#CBD5E1] overflow-hidden shadow-progresis-sm">
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

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#334155] mb-2.5">
                  Modalidades en Alquiler Mensual (SaaS) — Selecciona para
                  cotizar:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {PRICING_PLANS.map((plan) => (
                    <a
                      key={plan.id}
                      href="#paso-cero"
                      onClick={() =>
                        onSelectQuickPlan(
                          `${plan.name} · ${plan.price} ${plan.period}`
                        )
                      }
                      className="rounded-[14px] bg-[#F8FAFC] hover:bg-[#EDF3FC] border border-[#CBD5E1] hover:border-[#274C9B] px-3.5 py-3 transition-all flex flex-col justify-between"
                    >
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#9A3412]">
                        {plan.badge}
                      </span>
                      <span className="text-xs font-bold text-[#1E293B] mt-0.5">
                        {plan.name}
                      </span>
                      <span className="font-tabular-data text-sm font-extrabold text-[#274C9B] mt-1">
                        {plan.price}{" "}
                        <span className="text-xs font-medium text-[#475569]">
                          + IGV
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Simulador Operativo Agent PRO en Vivo */}
          <div className="lg:col-span-6">
            <div className="rounded-[28px] bg-[#FFFFFF] border border-[#CBD5E1] shadow-progresis-lg overflow-hidden">
              {/* Cabecera Marina estilo progresissac.com */}
              <div className="surface-navy-gradient px-6 py-5 text-[#FFFFFF] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="font-display-progresis font-bold text-xl sm:text-2xl text-[#FFFFFF]">
                    Demostración en Vivo · Agent PRO
                  </h2>
                  <p className="text-xs sm:text-sm text-[#E2EAF6] mt-1">
                    Inspecciona cómo colaboran los agentes ante un requerimiento
                    real B2B
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAdvanceStep}
                  className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-full bg-[#C2410C] hover:bg-[#9A3412] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Siguiente Paso ({highlightedStep + 1}/
                  {activeScenario.steps.length})
                </button>
              </div>

              {/* Pestañas Píldora de Casos B2B */}
              <div
                role="tablist"
                aria-label="Casos operativos de Agent PRO"
                className="bg-[#EDF3FC] px-4 py-3 border-b border-[#CBD5E1] flex flex-wrap gap-2"
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
                      className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#274C9B] text-[#FFFFFF] shadow-progresis-sm"
                          : "bg-[#FFFFFF] text-[#1E293B] border border-[#CBD5E1] hover:border-[#274C9B] hover:text-[#274C9B]"
                      }`}
                    >
                      {scenario.label}
                    </button>
                  );
                })}
              </div>

              {/* Disparador Entrante */}
              <div className="px-6 py-4 bg-[#F8FAFC] border-b border-[#CBD5E1]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[#274C9B]">
                    Canal: {activeScenario.triggerChannel} ·{" "}
                    {activeScenario.triggerSender}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-tabular-data text-xs font-bold text-[#9A3412] bg-[#FFF5EF] border border-[#FDBA74] px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5" />
                    Agent PRO: {activeScenario.elapsedTotal} (vs.{" "}
                    {activeScenario.manualEquivalent})
                  </span>
                </div>
                <p className="mt-2.5 text-sm text-[#1E293B] font-semibold leading-snug">
                  «{activeScenario.triggerInput}»
                </p>
              </div>

              {/* Secuencia de Ejecución de los Agentes (Filas continuas sin anidar tarjetas) */}
              <div className="divide-y divide-[#E2E8F0] bg-[#FFFFFF]">
                {activeScenario.steps.map((step, idx) => {
                  const isCurrent = idx === highlightedStep;
                  return (
                    <div
                      key={`${step.agentCode}-${idx}`}
                      onClick={() => setHighlightedStep(idx)}
                      className={`px-6 py-4 transition-colors cursor-pointer ${
                        isCurrent
                          ? "bg-[#EDF3FC]"
                          : "bg-[#FFFFFF] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <h3 className="font-display-progresis font-bold text-base text-[#1E293B]">
                            {step.agentName}
                          </h3>
                          <span
                            className={`font-tabular-data text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                              isCurrent
                                ? "bg-[#274C9B] text-[#FFFFFF]"
                                : "bg-[#F8FAFC] text-[#274C9B] border border-[#CBD5E1]"
                            }`}
                          >
                            {step.agentCode}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="font-tabular-data text-xs font-bold text-[#334155]">
                            {step.timeDelta}
                          </span>
                          <span className="inline-flex items-center gap-1 font-tabular-data text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-[#FFF5EF] text-[#9A3412] border border-[#FDBA74]">
                            <CheckCircle2 className="w-3 h-3" />
                            {step.status}
                          </span>
                        </div>
                      </div>

                      <p className="mt-1.5 text-xs font-semibold text-[#334155]">
                        Señal de entrada: {step.inputSignal}
                      </p>
                      <p className="mt-1 text-sm text-[#1E293B] leading-snug">
                        {step.actionTaken}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Pie de Resultado Verificado */}
              <div className="px-6 py-4 bg-[#EDF3FC] border-t border-[#CBD5E1] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1E293B]">
                  <FileCheck2 className="w-4 h-4 text-[#274C9B] shrink-0" />
                  <span>Resultado emitido sin digitación:</span>
                </div>
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
