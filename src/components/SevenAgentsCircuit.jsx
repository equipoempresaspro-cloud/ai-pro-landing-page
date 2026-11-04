import React, { useState } from "react";
import { SEVEN_AGENTS, SUITE_MODULES } from "../data/brochureData";
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function SevenAgentsCircuit() {
  const [selectedAgentIndex, setSelectedAgentIndex] = useState(0);

  const activeAgent = SEVEN_AGENTS[selectedAgentIndex];

  const handlePrevAgent = () => {
    setSelectedAgentIndex((prev) =>
      prev === 0 ? SEVEN_AGENTS.length - 1 : prev - 1
    );
  };

  const handleNextAgent = () => {
    setSelectedAgentIndex((prev) => (prev + 1) % SEVEN_AGENTS.length);
  };

  return (
    <div>
      {/* SECCIÓN 1: Los 7 Agentes Especializados de Agent PRO — Estilo exacto .seccion-procesos de progresissac.com */}
      <section
        id="circuito-agentes"
        className="py-16 lg:py-20 surface-navy-gradient text-[#FFFFFF] border-b border-[#1E386D]"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <h2 className="font-display-progresis font-bold text-3xl sm:text-4xl text-[#FFFFFF] leading-tight">
              Los 7 Agentes Especializados de Agent PRO
            </h2>
            <p className="mt-2.5 text-base text-[#E2EAF6]">
              Selecciona cada agente para ver cómo ejecuta tu backoffice
              comercial, logístico y financiero.
            </p>
          </div>

          {/* Barra de Píldoras Interactivas (.procesos-barra de progresissac.com) */}
          <div
            role="tablist"
            aria-label="Selector de los 7 agentes de Agent PRO"
            className="flex flex-wrap gap-2 mb-7"
          >
            {SEVEN_AGENTS.map((agent, index) => {
              const isSelected = index === selectedAgentIndex;
              return (
                <button
                  key={agent.code}
                  role="tab"
                  aria-selected={isSelected}
                  type="button"
                  onClick={() => setSelectedAgentIndex(index)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-[#C2410C] text-[#FFFFFF] shadow-progresis-md"
                      : "bg-[#1E386D] text-[#E2EAF6] border border-[#3B5998] hover:border-[#7DD3FC] hover:text-[#FFFFFF]"
                  }`}
                >
                  <span className="font-tabular-data font-extrabold">
                    0{agent.number}
                  </span>
                  <span>{agent.name}</span>
                </button>
              );
            })}
          </div>

          {/* Visor Único del Agente Seleccionado (.proceso-visor de progresissac.com, sin listas duplicadas debajo) */}
          <div className="rounded-[28px] bg-[#1E386D] border border-[#3B5998] overflow-hidden shadow-progresis-lg">
            <div className="p-6 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display-progresis font-bold text-2xl sm:text-3xl text-[#FFFFFF]">
                    0{activeAgent.number}. {activeAgent.name}
                  </h3>
                  <span className="font-tabular-data text-xs font-extrabold px-3 py-1 rounded-full bg-[#152B59] text-[#7DD3FC] border border-[#3B5998]">
                    {activeAgent.front}
                  </span>
                </div>

                <p className="mt-3 text-base sm:text-lg text-[#E2EAF6] leading-relaxed">
                  {activeAgent.description}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#152B59] border border-[#3B5998] text-xs font-bold text-[#7DD3FC]">
                  <CheckCircle2 className="w-4 h-4 text-[#7DD3FC] shrink-0" />
                  <span>{activeAgent.connectedModule}</span>
                </div>
              </div>

              <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#334E85] pt-5 lg:pt-0 lg:pl-8 divide-y divide-[#334E85]">
                <div className="pb-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#7DD3FC]">
                    Entrada
                  </p>
                  <p className="mt-1 text-sm text-[#FFFFFF] font-medium">
                    {activeAgent.inputs}
                  </p>
                </div>

                <div className="pt-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#FDBA74]">
                    Resultado Autónomo
                  </p>
                  <p className="mt-1 text-sm text-[#FFFFFF] font-medium">
                    {activeAgent.outputs}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-9 py-4 bg-[#152B59] border-t border-[#334E85] flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrevAgent}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E386D] hover:bg-[#274C9B] border border-[#3B5998] text-xs font-bold text-[#FFFFFF] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Anterior
              </button>

              <span className="font-tabular-data text-xs font-bold text-[#E2EAF6]">
                0{activeAgent.number} / 07
              </span>

              <button
                type="button"
                onClick={handleNextAgent}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C2410C] hover:bg-[#9A3412] text-xs font-extrabold text-[#FFFFFF] transition-colors cursor-pointer"
              >
                Siguiente
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: Los 6 Módulos Administrativos + SUNAT (Compacto y directo sobre #EDF3FC) */}
      <section
        id="modulos-suite"
        className="py-16 lg:py-20 bg-[#EDF3FC] border-b border-[#CBD5E1]"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-9">
            <div className="max-w-xl">
              <h2 className="font-display-progresis font-bold text-3xl sm:text-4xl text-[#274C9B] leading-tight">
                6 Módulos Administrativos + Facturación SUNAT
              </h2>
              <p className="mt-2 text-base text-[#334155]">
                Plataforma web centralizada y actualizada en tiempo real por tus
                agentes.
              </p>
            </div>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#CBD5E1] text-xs font-extrabold text-[#274C9B] self-start lg:self-auto">
              <ShieldCheck className="w-4 h-4 text-[#C2410C]" />
              PSE Oficial Certificado por SUNAT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SUITE_MODULES.map((moduleItem) => (
              <article
                key={moduleItem.code}
                className="rounded-[24px] bg-[#FFFFFF] border border-[#CBD5E1] hover:border-[#274C9B] p-6 flex flex-col justify-between transition-all shadow-progresis-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display-progresis font-bold text-lg text-[#274C9B]">
                      {moduleItem.name}
                    </h3>
                    <span className="font-tabular-data text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-[#EDF3FC] text-[#274C9B] border border-[#CBD5E1]">
                      {moduleItem.code}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-[#334155]">
                    {moduleItem.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#475569]">
                    Agentes activos:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {moduleItem.linkedAgents.map((agCode) => (
                      <span
                        key={agCode}
                        className="font-tabular-data text-xs font-extrabold px-2 py-0.5 rounded-full bg-[#FFF5EF] text-[#9A3412] border border-[#FDBA74]"
                      >
                        {agCode}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
