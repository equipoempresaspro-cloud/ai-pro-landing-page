import React, { useState } from "react";
import { COMPANY_DATA, LIVE_AUDIT_SCENARIOS } from "../data/brochureData";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Globe,
  Mail,
  Phone,
  Play,
  RotateCcw,
} from "lucide-react";

export default function OpeningCommandLedger({ onSelectQuickPlan }) {
  const [selectedScenarioId, setSelectedScenarioId] = useState(
    LIVE_AUDIT_SCENARIOS[0].id
  );
  const [highlightedStepIdx, setHighlightedStepIdx] = useState(0);

  const activeScenario =
    LIVE_AUDIT_SCENARIOS.find((item) => item.id === selectedScenarioId) ||
    LIVE_AUDIT_SCENARIOS[0];

  const handleScenarioChange = (id) => {
    setSelectedScenarioId(id);
    setHighlightedStepIdx(0);
  };

  const handleAdvanceTrace = () => {
    setHighlightedStepIdx((prev) => (prev + 1) % activeScenario.steps.length);
  };

  return (
    <section
      id="inicio"
      className="surface-cobalt text-white border-b border-[#2347BA]"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left 5 Columns: Prógresis Cobalt Executive Brief */}
        <div className="lg:col-span-5 px-6 sm:px-10 lg:px-12 py-12 lg:py-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#2347BA]">
          <div>
            <h1 className="font-display-condensed font-extrabold text-5xl sm:text-6xl lg:text-[4.75rem] leading-[0.94] tracking-tight text-white">
              PRO-IA: Sistema Agéntico de Backoffice B2B
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-[#DCE6FF] leading-relaxed measure-prose font-normal">
              El sistema agéntico de backoffice que simplifica la operación comercial, logística y financiera de{"\u00A0"}tu{"\u00A0"}empresa.
            </p>

            {/* Brochure Slide 1 Signal Rule + Tagline */}
            <div className="mt-6 pt-5 border-t border-[#2347BA] flex flex-wrap items-center gap-3">
              <span
                className="inline-block w-12 h-1.5 bg-[#FF7A33]"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#FFD2B8]">
                {COMPANY_DATA.tagline}
              </span>
            </div>

            {/* Key Operational Proof Table inside First Viewport */}
            <dl className="mt-8 grid grid-cols-3 border border-[#2E56D8] bg-[#08227A] divide-x divide-[#2E56D8]">
              <div className="p-3.5 sm:p-4">
                <dt className="text-xs text-[#DCE6FF]">Tiempo Operativo</dt>
                <dd className="mt-1 font-tabular-data font-semibold text-2xl sm:text-3xl text-white">
                  -80%
                </dd>
              </div>
              <div className="p-3.5 sm:p-4">
                <dt className="text-xs text-[#DCE6FF]">Capacidad Comercial</dt>
                <dd className="mt-1 font-tabular-data font-semibold text-2xl sm:text-3xl text-[#FFD2B8]">
                  3×
                </dd>
              </div>
              <div className="p-3.5 sm:p-4">
                <dt className="text-xs text-[#DCE6FF]">Errores Digitación</dt>
                <dd className="mt-1 font-tabular-data font-semibold text-2xl sm:text-3xl text-white">
                  0%
                </dd>
              </div>
            </dl>

            {/* Primary Conversion Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#paso-cero"
                onClick={() =>
                  onSelectQuickPlan &&
                  onSelectQuickPlan("Software Completo · S/ 690 + IGV / mes")
                }
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#C23800] hover:bg-[#9E2D00] text-white font-semibold text-base transition-colors"
              >
                <span>Agendar El Paso Cero</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#agentes"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-[#08227A] hover:bg-[#061858] text-[#DCE6FF] hover:text-white border border-[#2E56D8] font-medium text-sm transition-colors"
              >
                <span>Inspeccionar los 7 Agentes</span>
              </a>
            </div>
          </div>

          {/* Brochure Slide 1 Footer Metadata Strip */}
          <div className="mt-12 pt-6 border-t border-[#2347BA] text-xs text-[#DCE6FF] space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-semibold text-white">
                Presentado por {COMPANY_DATA.companyFull}
              </span>
              <span className="font-tabular-data text-[#FFD2B8]">
                Desde S/ 350 + IGV / mes
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[#DCE6FF]">
              <a
                href={COMPANY_DATA.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#FF7A33]" />
                <span>{COMPANY_DATA.website}</span>
              </a>
              <a
                href={`mailto:${COMPANY_DATA.email}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF7A33]" />
                <span>{COMPANY_DATA.email}</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_DATA.whatsappIntl}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-tabular-data hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF7A33]" />
                <span>{COMPANY_DATA.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right 7 Columns: Live Backoffice Audit Ledger on Cobalt-Tinted Sheet */}
        <div className="lg:col-span-7 p-4 sm:p-8 lg:p-10 bg-[#08227A] flex flex-col justify-center">
          <div className="bg-[#EDF2FA] text-[#091536] border border-[#B8C7E6] shadow-ledger">
            {/* Ledger Top Bar */}
            <div className="px-5 py-4 bg-[#DFE7F5] border-b border-[#B8C7E6] flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-heading-arch font-bold text-base sm:text-lg text-[#091536]">
                  Auditoría en Vivo de Ejecución Agéntica B2B
                </h2>
                <p className="text-xs text-[#24345E]">
                  Selecciona un flujo operativo real para auditar cómo responden los agentes sin digitación{"\u00A0"}humana
                </p>
              </div>

              <button
                type="button"
                onClick={handleAdvanceTrace}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#0B2D9E] hover:bg-[#08227A] text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#FF7A33] fill-[#FF7A33]" />
                <span>Siguiente Paso del Flujo</span>
              </button>
            </div>

            {/* Scenario Selector Tabs */}
            <div
              role="tablist"
              aria-label="Casos operativos de backoffice"
              className="grid grid-cols-1 sm:grid-cols-3 border-b border-[#B8C7E6] divide-y sm:divide-y-0 sm:divide-x divide-[#B8C7E6] bg-[#F5F8FD]"
            >
              {LIVE_AUDIT_SCENARIOS.map((scenario) => {
                const isSelected = scenario.id === activeScenario.id;
                return (
                  <button
                    key={scenario.id}
                    role="tab"
                    aria-selected={isSelected}
                    type="button"
                    onClick={() => handleScenarioChange(scenario.id)}
                    className={`p-3.5 text-left transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#0B2D9E] text-white"
                        : "bg-[#F5F8FD] text-[#091536] hover:bg-[#DFE7F5]"
                    }`}
                  >
                    <div className="font-semibold text-xs sm:text-sm">
                      {scenario.label}
                    </div>
                    <div
                      className={`mt-1 font-tabular-data text-[11px] ${
                        isSelected ? "text-[#DCE6FF]" : "text-[#24345E]"
                      }`}
                    >
                      {scenario.code}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Incoming Trigger Evidence Row */}
            <div className="p-5 bg-[#F5F8FD] border-b border-[#B8C7E6]">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#24345E]">
                <span className="font-semibold text-[#091536]">
                  Disparador Entrante ({activeScenario.triggerChannel}) —{" "}
                  {activeScenario.triggerSender}
                </span>
                <span className="font-tabular-data text-xs px-2 py-0.5 bg-[#FFF0E8] text-[#9E2D00] border border-[#C23800]/35">
                  Tiempo total: {activeScenario.elapsedTotal} (vs.{" "}
                  {activeScenario.manualEquivalent} manual)
                </span>
              </div>
              <p className="mt-2 text-sm text-[#091536] bg-[#EDF2FA] p-3 border border-[#B8C7E6] font-normal">
                «{activeScenario.triggerInput}»
              </p>
            </div>

            {/* Ruled Execution Trace Rows */}
            <div className="divide-y divide-[#B8C7E6]">
              {activeScenario.steps.map((step, index) => {
                const isFocused = index === highlightedStepIdx;
                return (
                  <div
                    key={`${activeScenario.id}-${step.agentCode}-${index}`}
                    onClick={() => setHighlightedStepIdx(index)}
                    className={`p-4 sm:p-5 transition-colors cursor-pointer grid grid-cols-1 sm:grid-cols-12 gap-3 items-start ${
                      isFocused
                        ? "bg-[#DCE6FF]"
                        : "bg-[#EDF2FA] hover:bg-[#F5F8FD]"
                    }`}
                  >
                    <div className="sm:col-span-3 flex sm:flex-col justify-between sm:justify-start gap-1">
                      <span className="font-tabular-data text-xs font-semibold px-2 py-0.5 bg-[#0B2D9E] text-white inline-block w-fit">
                        {step.agentCode}
                      </span>
                      <span className="font-semibold text-xs sm:text-sm text-[#091536] mt-0.5">
                        {step.agentName}
                      </span>
                      <span className="font-tabular-data text-xs text-[#24345E]">
                        {step.timeDelta}
                      </span>
                    </div>

                    <div className="sm:col-span-7 space-y-1">
                      <div className="text-xs font-medium text-[#24345E]">
                        Entrada: {step.inputSignal}
                      </div>
                      <p className="text-sm text-[#091536] font-normal leading-snug">
                        {step.actionTaken}
                      </p>
                    </div>

                    <div className="sm:col-span-2 flex sm:justify-end">
                      <span
                        className={`inline-flex items-center gap-1 font-tabular-data text-[11px] font-semibold px-2 py-1 border ${
                          isFocused
                            ? "bg-[#C23800] text-white border-[#C23800]"
                            : "bg-[#F5F8FD] text-[#091536] border-[#B8C7E6]"
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3 shrink-0" />
                        <span>{step.status}</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Output Ledger Verification Footer */}
            <div className="px-5 py-3.5 bg-[#091536] text-white flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                <FileCheck2 className="w-4 h-4 text-[#FF7A33] shrink-0" />
                <span className="text-[#DCE6FF]">Comprobante / Salida:</span>
                <span className="font-tabular-data font-semibold text-white">
                  {activeScenario.documentGenerated}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setHighlightedStepIdx(0)}
                className="inline-flex items-center gap-1.5 text-xs text-[#DCE6FF] hover:text-white cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar traza</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
