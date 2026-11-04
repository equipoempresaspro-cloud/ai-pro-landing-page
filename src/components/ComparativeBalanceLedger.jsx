import React from "react";
import { COMPARISON_ROWS, IMPLEMENTATION_MODELS } from "../data/brochureData";
import { AlertCircle, CheckCircle2, Sparkles, Layers, Cpu } from "lucide-react";

export default function ComparativeBalanceLedger({ onSelectPlan }) {
  return (
    <div className="bg-[#FFFFFF]">
      {/* SECCIÓN 1: ERP Tradicional vs. Agent PRO (Concisa y escaneable) */}
      <section
        id="comparativa-erp"
        className="py-16 lg:py-20 border-b border-[#E2E8F0]"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display-progresis font-bold text-3xl sm:text-4xl text-[#274C9B] leading-tight">
              ¿Por qué un ERP tradicional frena a tu equipo?
            </h2>
            <p className="mt-3 text-base text-[#334155]">
              Un ERP solo guarda datos.{" "}
              <strong className="font-bold text-[#1E293B]">Agent PRO</strong>{" "}
              ejecuta el trabajo administrativo de principio a fin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* ERP Tradicional */}
            <div className="lg:col-span-5 rounded-[28px] bg-[#F8FAFC] border border-[#CBD5E1] overflow-hidden flex flex-col justify-between shadow-progresis-sm">
              <div className="p-6 sm:px-8 border-b border-[#CBD5E1] flex items-center justify-between gap-3 bg-[#FFFFFF]">
                <h3 className="font-display-progresis font-bold text-xl text-[#1E293B]">
                  ERP Tradicional
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF5EF] border border-[#FDBA74] text-xs font-extrabold text-[#9A3412]">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Manual
                </span>
              </div>

              <div className="divide-y divide-[#CBD5E1] flex-1">
                {COMPARISON_ROWS.map((row) => (
                  <div key={row.rowCode} className="p-5 sm:px-8">
                    <h4 className="font-display-progresis font-bold text-base text-[#9A3412]">
                      {row.traditionalTitle}
                    </h4>
                    <p className="mt-1 text-sm text-[#334155]">
                      {row.traditionalDesc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* La Ventaja de Agent PRO */}
            <div className="lg:col-span-7 rounded-[28px] surface-navy-gradient text-[#FFFFFF] border border-[#1E386D] overflow-hidden shadow-progresis-lg flex flex-col justify-between">
              <div className="p-6 sm:px-9 border-b border-[#334E85] flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display-progresis font-bold text-2xl text-[#FFFFFF]">
                  La Ventaja de Agent PRO
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C2410C] text-xs font-extrabold uppercase tracking-wider text-[#FFFFFF]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Ejecución 24/7
                </span>
              </div>

              <div className="divide-y divide-[#334E85] flex-1">
                {COMPARISON_ROWS.map((row, idx) => (
                  <div key={row.rowCode} className="p-5 sm:px-9">
                    <h4 className="font-display-progresis font-bold text-lg text-[#7DD3FC]">
                      0{idx + 1}. {row.agenticTitle}
                    </h4>
                    <p className="mt-1 text-sm sm:text-base text-[#E2EAF6]">
                      {row.agenticDesc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: Modelos de Implementación (Opción A vs. Opción B, directo al grano) */}
      <section
        id="modelos-implementacion"
        className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display-progresis font-bold text-3xl sm:text-4xl text-[#274C9B] leading-tight">
              ¿Tienes ERP o Buscas Renovar?
            </h2>
            <p className="mt-3 text-base text-[#334155]">
              Elige conectar nuestros agentes a tu sistema actual o usar nuestra
              suite completa con facturación SUNAT.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {IMPLEMENTATION_MODELS.map((model, index) => {
              const isOptionB = index === 1;
              return (
                <article
                  key={model.code}
                  className={`rounded-[28px] p-7 sm:p-8 flex flex-col justify-between transition-all ${
                    isOptionB
                      ? "bg-[#FFFFFF] border-2 border-[#274C9B] shadow-progresis-lg"
                      : "bg-[#FFFFFF] border border-[#CBD5E1] shadow-progresis-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display-progresis font-bold text-2xl text-[#274C9B]">
                        {model.optionLabel}: {model.title}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shrink-0 ${
                          isOptionB
                            ? "bg-[#274C9B] text-[#FFFFFF]"
                            : "bg-[#EDF3FC] text-[#274C9B] border border-[#CBD5E1]"
                        }`}
                      >
                        {isOptionB ? (
                          <Layers className="w-3.5 h-3.5" />
                        ) : (
                          <Cpu className="w-3.5 h-3.5" />
                        )}
                        {model.optionLabel}
                      </span>
                    </div>

                    <p className="mt-3 text-sm sm:text-base text-[#334155]">
                      {model.summary}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {model.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-sm font-semibold text-[#1E293B]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#C2410C] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 pt-5 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <span className="font-tabular-data text-sm font-extrabold text-[#274C9B]">
                      {model.recommendedPlan}
                    </span>

                    <a
                      href="#paso-cero"
                      onClick={() => onSelectPlan(model.recommendedPlan)}
                      className="btn-pill-ml6 self-start sm:self-auto shrink-0"
                    >
                      <span>Elegir {model.optionLabel}</span>
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
                  </div>
                </article>
              );
            })}
          </div>

          {/* Nota breve de Vibe Coding */}
          <div className="mt-6 rounded-[20px] bg-[#EDF3FC] border border-[#CBD5E1] px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <h3 className="font-display-progresis font-bold text-base sm:text-lg text-[#274C9B]">
                Vibe Coding & Agentes a la Medida:
              </h3>
              <Sparkles className="w-4 h-4 text-[#C2410C] shrink-0" />
              <span className="text-sm text-[#1E293B]">
                Desarrollamos flujos personalizados para reglas únicas de tu
                industria.
              </span>
            </div>
            <a
              href="#paso-cero"
              onClick={() =>
                onSelectPlan(
                  "Vibe Coding & Agentes a la Medida · Evaluación Paso Cero"
                )
              }
              className="text-xs font-extrabold uppercase tracking-wider text-[#274C9B] hover:underline shrink-0"
            >
              Consultar a medida →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
