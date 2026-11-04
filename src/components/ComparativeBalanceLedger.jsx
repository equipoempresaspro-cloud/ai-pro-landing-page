import React from "react";
import { COMPARISON_ROWS, IMPLEMENTATION_MODELS } from "../data/brochureData";
import { AlertCircle, CheckCircle2, Sparkles, Layers, Cpu } from "lucide-react";

export default function ComparativeBalanceLedger({ onSelectPlan }) {
  return (
    <div className="bg-[#FFFFFF]">
      {/* SECCIÓN 1: El Diferenciador (.seccion-diferenciador de progresissac.com) — ERP Tradicional vs. Agent PRO */}
      <section
        id="comparativa-erp"
        className="py-16 lg:py-24 border-b border-[#E2E8F0]"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display-progresis font-bold text-3xl sm:text-4xl text-[#274C9B] leading-tight">
              ¿Por qué los ERP tradicionales frenan a tu equipo frente a Agent
              PRO?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#334155] leading-relaxed measure-prose">
              Un ERP tradicional solo almacena datos; exige un ejército de
              personas digitando todo el día.{" "}
              <strong className="font-bold text-[#1E293B]">Agent PRO</strong>{" "}
              opera con agentes de IA que ejecutan el trabajo administrativo de
              principio a fin.
            </p>
          </div>

          {/* Grilla asimétrica estilo .diferenciador-grid de progresissac.com */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Columna Izquierda (5 cols): El Cuello de Botella (ERP Tradicional) */}
            <div className="lg:col-span-5 rounded-[28px] bg-[#F8FAFC] border border-[#CBD5E1] overflow-hidden flex flex-col justify-between shadow-progresis-sm">
              <div>
                <div className="p-6 sm:p-8 pb-5 border-b border-[#CBD5E1] flex items-center justify-between gap-3 bg-[#FFFFFF]">
                  <h3 className="font-display-progresis font-bold text-xl sm:text-2xl text-[#1E293B]">
                    El Cuello de Botella (ERP Tradicional)
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF5EF] border border-[#FDBA74] text-xs font-extrabold text-[#9A3412] shrink-0">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Pasivo
                  </span>
                </div>

                <div className="divide-y divide-[#CBD5E1]">
                  {COMPARISON_ROWS.map((row) => (
                    <div key={row.rowCode} className="p-6 sm:px-8">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-display-progresis font-bold text-base sm:text-lg text-[#9A3412]">
                          {row.traditionalTitle}
                        </h4>
                        <span className="font-tabular-data text-xs font-bold text-[#475569] bg-[#FFFFFF] px-2.5 py-0.5 rounded-full border border-[#CBD5E1]">
                          {row.dimension}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-[#334155] leading-relaxed">
                        {row.traditionalDesc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:px-8 bg-[#EDF3FC] border-t border-[#CBD5E1]">
                <p className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                  Consecuencia directa: Cotizaciones tardías, ventas B2B
                  perdidas por demora y personal administrativo saturado en
                  tareas repetitivas.
                </p>
              </div>
            </div>

            {/* Columna Derecha (7 cols): La Ventaja de Agent PRO en Tarjeta Marina (.paso-cero-card de progresissac.com) */}
            <div className="lg:col-span-7 rounded-[28px] surface-navy-gradient text-[#FFFFFF] border border-[#1E386D] overflow-hidden shadow-progresis-lg flex flex-col justify-between">
              <div>
                <div className="p-6 sm:p-9 pb-6 border-b border-[#334E85] flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display-progresis font-bold text-2xl sm:text-3xl text-[#FFFFFF]">
                    La Ventaja de Agent PRO (Ejecución 24/7)
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C2410C] text-xs font-extrabold uppercase tracking-wider text-[#FFFFFF]">
                    <CheckCircle2 className="w-3.5 h-3.5" />7 Agentes Activos
                  </span>
                </div>

                <div className="divide-y divide-[#334E85]">
                  {COMPARISON_ROWS.map((row, idx) => (
                    <div
                      key={row.rowCode}
                      className="p-6 sm:px-9 hover:bg-[#1E386D] transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-display-progresis font-bold text-lg text-[#7DD3FC]">
                          0{idx + 1}. {row.agenticTitle}
                        </h4>
                        <span className="font-tabular-data text-xs font-bold text-[#E2EAF6] bg-[#152B59] px-3 py-1 rounded-full border border-[#3B5998]">
                          {row.dimension}
                        </span>
                      </div>
                      <p className="mt-2 text-sm sm:text-base text-[#E2EAF6] leading-relaxed">
                        {row.agenticDesc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:px-9 bg-[#0D1D3D] border-t border-[#334E85] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-sm text-[#E2EAF6] font-medium">
                  Tus agentes atienden WhatsApp y correo, consultan stock y
                  emiten documentos SUNAT en menos de 3 minutos.
                </p>
                <a href="#paso-cero" className="btn-pill-ml6 shrink-0">
                  <span>Auditar mi Operación</span>
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
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: Flexibilidad Total — ¿Tienes ERP o Buscas Renovar? (Opción A vs. Opción B) */}
      <section
        id="modelos-implementacion"
        className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display-progresis font-bold text-3xl sm:text-4xl text-[#274C9B] leading-tight">
              Flexibilidad Total: ¿Tienes ERP o Buscas Renovar?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#334155] leading-relaxed measure-prose">
              Nos adaptamos a la madurez tecnológica de tu empresa sin fricciones
              ni migraciones traumáticas. Elige conectar nuestros agentes a tu
              sistema actual o implementar la suite administrativa completa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {IMPLEMENTATION_MODELS.map((model, index) => {
              const isOptionB = index === 1;
              return (
                <article
                  key={model.code}
                  className={`rounded-[28px] overflow-hidden flex flex-col justify-between transition-all ${
                    isOptionB
                      ? "bg-[#FFFFFF] border-2 border-[#274C9B] shadow-progresis-lg"
                      : "bg-[#FFFFFF] border border-[#CBD5E1] shadow-progresis-md"
                  }`}
                >
                  <div>
                    <div className="p-7 sm:p-9 pb-6">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="font-display-progresis font-bold text-2xl sm:text-3xl text-[#274C9B]">
                          {model.optionLabel}: {model.title}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
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
                          {model.code}
                        </span>
                      </div>

                      <p className="mt-4 text-base text-[#334155] leading-relaxed">
                        {model.summary}
                      </p>
                    </div>

                    <div className="px-7 sm:px-9 py-4 bg-[#EDF3FC] border-y border-[#CBD5E1]">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-[#274C9B]">
                        Arquitectura de Conexión
                      </p>
                      <p className="mt-1 font-tabular-data text-xs sm:text-sm font-bold text-[#1E293B]">
                        {model.architectureSpec}
                      </p>
                    </div>

                    <ul className="p-7 sm:p-9 pt-6 space-y-3">
                      {model.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm sm:text-base font-semibold text-[#1E293B]"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#C2410C] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-7 sm:px-9 py-6 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                        Modalidad SaaS sugerida
                      </p>
                      <p className="font-tabular-data text-sm sm:text-base font-extrabold text-[#274C9B] mt-0.5">
                        {model.recommendedPlan}
                      </p>
                    </div>

                    <a
                      href="#paso-cero"
                      onClick={() => onSelectPlan(model.recommendedPlan)}
                      className="btn-pill-ml6 self-start sm:self-auto"
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

          {/* Bloque Vibe Coding & Agentes a la Medida */}
          <div className="mt-8 rounded-[24px] bg-[#EDF3FC] border border-[#CBD5E1] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 shadow-progresis-sm">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5">
                <h3 className="font-display-progresis font-bold text-xl sm:text-2xl text-[#274C9B]">
                  Vibe Coding & Agentes a la Medida
                </h3>
                <Sparkles className="w-5 h-5 text-[#C2410C] shrink-0" />
              </div>
              <p className="mt-2 text-sm sm:text-base text-[#1E293B] leading-relaxed">
                ¿Tu operación tiene reglas únicas de cotización, importación o
                despacho? Desarrollamos flujos y agentes personalizados para
                industrias y dinámicas específicas de tu negocio.
              </p>
            </div>

            <a
              href="#paso-cero"
              onClick={() =>
                onSelectPlan(
                  "Vibe Coding & Agentes a la Medida · Evaluación Paso Cero"
                )
              }
              className="btn-secundario-ml6 shrink-0 self-start lg:self-auto"
            >
              <span>Consultar Agente a la Medida</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
