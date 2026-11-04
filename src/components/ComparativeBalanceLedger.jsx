import React, { useState } from "react";
import { COMPARISON_ROWS, IMPLEMENTATION_MODELS } from "../data/brochureData";
import { Check, X, ArrowRight } from "lucide-react";

export default function ComparativeBalanceLedger({ onSelectPlan }) {
  const [selectedModelCode, setSelectedModelCode] = useState("MODO-A");

  return (
    <div className="bg-[#EDF2FA] text-[#091536]">
      {/* Slide 2: Comparative Ledger Table */}
      <section
        id="comparativa"
        className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-16 lg:py-24 border-b border-[#B8C7E6]"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#B8C7E6]">
          <div>
            <h2 className="font-display-condensed font-extrabold text-4xl sm:text-5xl text-[#091536] tracking-tight">
              ¿Por qué los ERP Tradicionales frenan a tu equipo?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#24345E] measure-prose">
              Contraste operativo directo entre los sistemas pasivos de registro manual y la ejecución autónoma de backoffice con{"\u00A0"}PRO-IA.
            </p>
          </div>

          <div className="font-tabular-data text-xs font-medium text-[#24345E] bg-[#DFE7F5] border border-[#B8C7E6] px-4 py-2.5 shrink-0">
            ANÁLISIS COMPARATIVO · 3 EJES OPERATIVOS
          </div>
        </div>

        {/* Ruled Balance Sheet Comparison Table */}
        <div className="mt-8 border border-[#B8C7E6] bg-[#F5F8FD]">
          {/* Column Headers */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#B8C7E6]">
            <div className="hidden lg:block lg:col-span-2 p-5 bg-[#DFE7F5] border-r border-[#B8C7E6]">
              <span className="font-tabular-data text-xs font-semibold text-[#24345E]">
                DIMENSIÓN
              </span>
            </div>

            <div className="lg:col-span-5 p-5 bg-[#FFF0E8] border-b lg:border-b-0 lg:border-r border-[#B8C7E6]">
              <h3 className="font-heading-arch font-bold text-lg text-[#7A1C08]">
                ERP Tradicional
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#9B2912]">
                Exceso de digitación y burocracia manual
              </p>
            </div>

            <div className="lg:col-span-5 p-5 bg-[#0B2D9E] text-white">
              <h3 className="font-heading-arch font-bold text-lg text-white">
                ERP Agéntico PRO-IA
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#DCE6FF]">
                Automatización autónoma y fluida
              </p>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-[#B8C7E6]">
            {COMPARISON_ROWS.map((row) => (
              <div
                key={row.rowCode}
                className="grid grid-cols-1 lg:grid-cols-12"
              >
                <div className="lg:col-span-2 p-4 sm:p-6 bg-[#DFE7F5] border-b lg:border-b-0 lg:border-r border-[#B8C7E6] flex lg:flex-col justify-between lg:justify-center gap-1">
                  <span className="font-semibold text-sm text-[#091536]">
                    {row.dimension}
                  </span>
                  <span className="font-tabular-data text-xs text-[#24345E]">
                    {row.rowCode}
                  </span>
                </div>

                {/* Traditional ERP Column */}
                <div className="lg:col-span-5 p-5 sm:p-6 bg-[#F5F8FD] border-b lg:border-b-0 lg:border-r border-[#B8C7E6] flex items-start gap-3.5">
                  <span
                    className="mt-0.5 inline-flex items-center justify-center w-6 h-6 bg-[#FDE4DC] text-[#9E2D00] shrink-0"
                    aria-hidden="true"
                  >
                    <X className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="font-semibold text-base text-[#091536]">
                      {row.traditionalTitle}
                    </div>
                    <p className="mt-1 text-sm text-[#24345E] leading-relaxed">
                      {row.traditionalDesc}
                    </p>
                  </div>
                </div>

                {/* PRO-IA Agentic Column */}
                <div className="lg:col-span-5 p-5 sm:p-6 bg-[#DCE6FF]/60 flex items-start gap-3.5">
                  <span
                    className="mt-0.5 inline-flex items-center justify-center w-6 h-6 bg-[#0B2D9E] text-white shrink-0"
                    aria-hidden="true"
                  >
                    <Check className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="font-semibold text-base text-[#091536]">
                      {row.agenticTitle}
                    </div>
                    <p className="mt-1 text-sm text-[#1E2E5C] leading-relaxed">
                      {row.agenticDesc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Brochure Slide 2 Bottom Callout Bar */}
          <div className="px-6 py-4 bg-[#DFE7F5] border-t border-[#B8C7E6] flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm sm:text-base font-semibold text-[#091536]">
              El valor no está en almacenar datos, sino en ejecutar las tareas administrativas de forma{"\u00A0"}autónoma.
            </p>
            <span className="font-tabular-data text-xs font-bold tracking-wide text-[#0B2D9E] bg-[#F5F8FD] border border-[#0B2D9E]/30 px-3 py-1">
              ENFOQUE LEAN
            </span>
          </div>
        </div>
      </section>

      {/* Slide 3: Implementation Models (Option A vs Option B) */}
      <section
        id="implementacion"
        className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-16 lg:py-24 border-b border-[#B8C7E6]"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#B8C7E6]">
          <div>
            <h2 className="font-display-condensed font-extrabold text-4xl sm:text-5xl text-[#091536] tracking-tight">
              Flexibilidad Total: ¿Tienes ERP o Buscas Renovar?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#24345E] measure-prose">
              Dos modelos de implementación diseñados para adaptarse a la infraestructura actual de tu empresa sin fricción{"\u00A0"}operativa.
            </p>
          </div>

          {/* Interactive Filter / Focus Switch */}
          <div className="inline-flex border border-[#B8C7E6] bg-[#DFE7F5] p-1 self-start">
            {IMPLEMENTATION_MODELS.map((model) => {
              const active = selectedModelCode === model.code;
              return (
                <button
                  key={model.code}
                  type="button"
                  onClick={() => setSelectedModelCode(model.code)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    active
                      ? "bg-[#0B2D9E] text-white"
                      : "text-[#24345E] hover:text-[#091536]"
                  }`}
                >
                  {model.optionLabel} ({model.code})
                </button>
              );
            })}
          </div>
        </div>

        {/* Dual Architectural Blueprint Columns */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 border border-[#B8C7E6] divide-y lg:divide-y-0 lg:divide-x divide-[#B8C7E6] bg-[#F5F8FD]">
          {IMPLEMENTATION_MODELS.map((model) => {
            const isHighlighted = selectedModelCode === model.code;
            return (
              <div
                key={model.code}
                onClick={() => setSelectedModelCode(model.code)}
                className={`p-6 sm:p-10 flex flex-col justify-between transition-colors cursor-pointer ${
                  isHighlighted ? "bg-[#F5F8FD]" : "bg-[#DFE7F5]/65"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading-arch font-bold text-2xl sm:text-3xl text-[#091536]">
                      {model.optionLabel}: {model.title}
                    </h3>
                    <span
                      className={`font-tabular-data text-xs font-semibold px-2.5 py-1 shrink-0 ${
                        isHighlighted
                          ? "bg-[#0B2D9E] text-white"
                          : "bg-[#DFE7F5] text-[#24345E] border border-[#B8C7E6]"
                      }`}
                    >
                      {model.code}
                    </span>
                  </div>

                  <p className="mt-4 text-base text-[#24345E] leading-relaxed measure-prose">
                    {model.summary}
                  </p>

                  {/* Technical Architecture Schematic Strip */}
                  <div className="mt-6 p-3.5 bg-[#DFE7F5] border border-[#B8C7E6]">
                    <div className="font-tabular-data text-xs text-[#091536] font-medium">
                      {model.architectureSpec}
                    </div>
                  </div>

                  {/* Brochure Checkpoints */}
                  <ul className="mt-6 space-y-3 border-t border-[#B8C7E6] pt-5">
                    {model.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm sm:text-base font-medium text-[#091536]"
                      >
                        <Check
                          className={`w-5 h-5 shrink-0 mt-0.5 ${
                            model.code === "MODO-A"
                              ? "text-[#0B2D9E]"
                              : "text-[#C23800]"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-[#B8C7E6] flex flex-wrap items-center justify-between gap-3">
                  <span className="font-tabular-data text-xs font-semibold text-[#24345E]">
                    Plan vinculado: {model.recommendedPlan}
                  </span>

                  <a
                    href="#paso-cero"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectPlan) onSelectPlan(model.recommendedPlan);
                    }}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B2D9E] hover:text-[#C23800] transition-colors"
                  >
                    <span>Elegir {model.optionLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brochure Slide 3 Cobalt Custom Flows Banner */}
        <div className="mt-6 bg-[#0B2D9E] text-white p-6 sm:px-8 sm:py-5 border border-[#2347BA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm sm:text-base font-semibold text-white">
            ¿Requieres flujos a la medida? Desarrollamos agentes personalizados para industrias y dinámicas{"\u00A0"}específicas.
          </p>
          <a
            href="#paso-cero"
            onClick={() =>
              onSelectPlan &&
              onSelectPlan("Vibe Coding & Agentes a la Medida")
            }
            className="font-tabular-data text-xs font-semibold bg-[#C23800] hover:bg-[#9E2D00] text-white px-4 py-2 shrink-0 text-center transition-colors"
          >
            VIBE CODING & AGENTES
          </a>
        </div>
      </section>
    </div>
  );
}
