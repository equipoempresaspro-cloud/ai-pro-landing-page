import React, { useState } from "react";
import { SEVEN_AGENTS, SUITE_MODULES } from "../data/brochureData";
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function SevenAgentsCircuit() {
  const [selectedAgentIndex, setSelectedAgentIndex] = useState(0);
  const [moduleFilter, setModuleFilter] = useState("ALL");

  const activeAgent = SEVEN_AGENTS[selectedAgentIndex];

  const handlePrevAgent = () => {
    setSelectedAgentIndex((prev) =>
      prev === 0 ? SEVEN_AGENTS.length - 1 : prev - 1
    );
  };

  const handleNextAgent = () => {
    setSelectedAgentIndex((prev) => (prev + 1) % SEVEN_AGENTS.length);
  };

  const filteredModules = SUITE_MODULES.filter((mod) => {
    if (moduleFilter === "COMERCIAL") {
      return ["MOD-01", "MOD-02", "MOD-03"].includes(mod.code);
    }
    if (moduleFilter === "OPERACIONES") {
      return ["MOD-04", "MOD-05", "MOD-06"].includes(mod.code);
    }
    return true;
  });

  return (
    <div>
      {/* SECCIÓN 1: Los 7 Agentes Especializados de Agent PRO — Estilo .seccion-procesos de progresissac.com (Bloque Marino Interactivo) */}
      <section
        id="circuito-agentes"
        className="py-16 lg:py-24 surface-navy-gradient text-[#FFFFFF] border-b border-[#1E386D]"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-display-progresis font-bold text-3xl sm:text-4xl text-[#FFFFFF] leading-tight">
              Los 7 Agentes Especializados de Agent PRO
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#E2EAF6] leading-relaxed measure-prose">
              Tu nuevo equipo digital de backoffice trabajando en sincronía.
              Selecciona cualquier agente para inspeccionar sus señales de
              entrada, su ejecución autónoma y los módulos que actualiza.
            </p>
          </div>

          {/* Barra de Píldoras Interactivas (.procesos-barra de progresissac.com) */}
          <div
            role="tablist"
            aria-label="Selector de los 7 agentes de Agent PRO"
            className="flex flex-wrap gap-2.5 mb-8"
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
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
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

          {/* Visor Central del Agente Seleccionado (.proceso-visor de progresissac.com, sin anidar tarjetas) */}
          <div className="rounded-[28px] bg-[#1E386D] border border-[#3B5998] overflow-hidden shadow-progresis-lg">
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display-progresis font-bold text-2xl sm:text-3xl text-[#FFFFFF]">
                    0{activeAgent.number}. {activeAgent.name}
                  </h3>
                  <span className="font-tabular-data text-xs font-extrabold px-3.5 py-1 rounded-full bg-[#152B59] text-[#7DD3FC] border border-[#3B5998]">
                    {activeAgent.code} · {activeAgent.front}
                  </span>
                </div>

                <p className="mt-4 text-base sm:text-lg text-[#E2EAF6] leading-relaxed">
                  {activeAgent.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#152B59] border border-[#3B5998] text-xs sm:text-sm font-bold text-[#7DD3FC]">
                  <CheckCircle2 className="w-4 h-4 text-[#7DD3FC] shrink-0" />
                  <span>Módulo conectado: {activeAgent.connectedModule}</span>
                </div>
              </div>

              <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#334E85] pt-6 lg:pt-0 lg:pl-8 divide-y divide-[#334E85]">
                <div className="pb-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#7DD3FC]">
                    Disparador / Señal de Entrada
                  </p>
                  <p className="mt-1.5 text-sm sm:text-base text-[#FFFFFF] font-medium leading-snug">
                    {activeAgent.inputs}
                  </p>
                </div>

                <div className="pt-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#FDBA74]">
                    Resultado / Acción Autónoma
                  </p>
                  <p className="mt-1.5 text-sm sm:text-base text-[#FFFFFF] font-medium leading-snug">
                    {activeAgent.outputs}
                  </p>
                </div>
              </div>
            </div>

            {/* Controles Anterior / Siguiente (.proceso-controles de progresissac.com) */}
            <div className="px-6 sm:px-10 py-5 bg-[#152B59] border-t border-[#334E85] flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrevAgent}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E386D] hover:bg-[#274C9B] border border-[#3B5998] text-xs sm:text-sm font-bold text-[#FFFFFF] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Agente Anterior
              </button>

              <span className="font-tabular-data text-xs sm:text-sm font-bold text-[#E2EAF6]">
                Agente 0{activeAgent.number} de 07
              </span>

              <button
                type="button"
                onClick={handleNextAgent}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C2410C] hover:bg-[#9A3412] text-xs sm:text-sm font-extrabold text-[#FFFFFF] transition-colors cursor-pointer"
              >
                Siguiente Agente
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Vista Panorámica de los 2 Frentes Operativos (Filas continuas sin anidar tarjetas) */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-[24px] bg-[#152B59] border border-[#3B5998] overflow-hidden">
              <div className="px-6 py-4 bg-[#1E386D] border-b border-[#3B5998]">
                <h3 className="font-display-progresis font-bold text-lg sm:text-xl text-[#7DD3FC]">
                  Frente Comercial & Clientes (Agentes 01 – 03)
                </h3>
              </div>
              <div className="divide-y divide-[#334E85]">
                {SEVEN_AGENTS.slice(0, 3).map((agent, idx) => (
                  <button
                    key={agent.code}
                    type="button"
                    onClick={() => setSelectedAgentIndex(idx)}
                    className={`w-full text-left px-6 py-4 transition-colors cursor-pointer flex items-start justify-between gap-3 ${
                      selectedAgentIndex === idx
                        ? "bg-[#274C9B] text-[#FFFFFF]"
                        : "bg-[#152B59] text-[#E2EAF6] hover:bg-[#1E386D]"
                    }`}
                  >
                    <div>
                      <p className="font-bold text-sm text-[#FFFFFF]">
                        0{agent.number}. {agent.name}
                      </p>
                      <p className="text-xs text-[#E2EAF6] mt-1">
                        {agent.description}
                      </p>
                    </div>
                    <span className="font-tabular-data text-xs font-extrabold text-[#7DD3FC] shrink-0">
                      {agent.code}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] bg-[#152B59] border border-[#3B5998] overflow-hidden">
              <div className="px-6 py-4 bg-[#1E386D] border-b border-[#3B5998]">
                <h3 className="font-display-progresis font-bold text-lg sm:text-xl text-[#FDBA74]">
                  Cadena de Suministro, Finanzas & Dirección (Agentes 04 – 07)
                </h3>
              </div>
              <div className="divide-y divide-[#334E85]">
                {SEVEN_AGENTS.slice(3, 7).map((agent, offset) => {
                  const idx = offset + 3;
                  return (
                    <button
                      key={agent.code}
                      type="button"
                      onClick={() => setSelectedAgentIndex(idx)}
                      className={`w-full text-left px-6 py-4 transition-colors cursor-pointer flex items-start justify-between gap-3 ${
                        selectedAgentIndex === idx
                          ? "bg-[#274C9B] text-[#FFFFFF]"
                          : "bg-[#152B59] text-[#E2EAF6] hover:bg-[#1E386D]"
                      }`}
                    >
                      <div>
                        <p className="font-bold text-sm text-[#FFFFFF]">
                          0{agent.number}. {agent.name}
                        </p>
                        <p className="text-xs text-[#E2EAF6] mt-1">
                          {agent.description}
                        </p>
                      </div>
                      <span className="font-tabular-data text-xs font-extrabold text-[#FDBA74] shrink-0">
                        {agent.code}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: El Corazón de tu Operación — Software Administrativo Agent PRO (.seccion-soluciones de progresissac.com sobre #EDF3FC) */}
      <section
        id="modulos-suite"
        className="py-16 lg:py-24 bg-[#EDF3FC] border-b border-[#CBD5E1]"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <h2 className="font-display-progresis font-bold text-3xl sm:text-4xl text-[#274C9B] leading-tight">
                El Corazón de tu Operación: Software Administrativo Agent PRO
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#334155] leading-relaxed">
                Una plataforma web moderna e intuitiva que centraliza los{" "}
                <strong className="font-bold text-[#1E293B]">
                  6 módulos clave
                </strong>{" "}
                de tu negocio, alimentada en tiempo real por tus agentes de IA.
              </p>
            </div>

            {/* Pestañas Píldora estilo .soluciones-nav de progresissac.com */}
            <div
              role="tablist"
              aria-label="Filtrar módulos de Agent PRO"
              className="flex flex-wrap gap-2"
            >
              {[
                { id: "ALL", label: "Suite Completa (6 Módulos)" },
                { id: "COMERCIAL", label: "Comercial & Facturación SUNAT" },
                { id: "OPERACIONES", label: "Compras, Kardex & Tesorería" },
              ].map((tab) => {
                const isActive = moduleFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    type="button"
                    onClick={() => setModuleFilter(tab.id)}
                    className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#274C9B] text-[#FFFFFF] shadow-progresis-sm"
                        : "bg-[#FFFFFF] text-[#1E293B] border border-[#CBD5E1] hover:border-[#274C9B] hover:text-[#274C9B]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grilla de Módulos Directamente sobre #EDF3FC (sin anidar tarjetas) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModules.map((moduleItem) => (
              <article
                key={moduleItem.code}
                className="rounded-[24px] bg-[#FFFFFF] border border-[#CBD5E1] hover:border-[#274C9B] p-6 sm:p-7 flex flex-col justify-between transition-all shadow-progresis-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display-progresis font-bold text-xl text-[#274C9B]">
                      {moduleItem.name}
                    </h3>
                    <span className="font-tabular-data text-xs font-extrabold px-3 py-1 rounded-full bg-[#EDF3FC] text-[#274C9B] border border-[#CBD5E1]">
                      {moduleItem.code}
                    </span>
                  </div>

                  <p className="mt-3 text-sm sm:text-base text-[#334155] leading-relaxed">
                    {moduleItem.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E2E8F0]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">
                    Operado automáticamente por:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {moduleItem.linkedAgents.map((agCode) => (
                      <span
                        key={agCode}
                        className="font-tabular-data text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-[#FFF5EF] text-[#9A3412] border border-[#FDBA74]"
                      >
                        {agCode}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Banner de Facturación Electrónica SUNAT vía PSE Oficial Certificado */}
          <div className="mt-8 rounded-[24px] surface-blue-gradient text-[#FFFFFF] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 shadow-progresis-lg">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5">
                <h3 className="font-display-progresis font-bold text-xl sm:text-2xl text-[#FFFFFF]">
                  Facturación Electrónica SUNAT vía PSE Oficial Certificado
                </h3>
                <ShieldCheck className="w-6 h-6 text-[#7DD3FC] shrink-0" />
              </div>
              <p className="mt-2 text-sm sm:text-base text-[#E2EAF6] leading-relaxed">
                Emisión inmediata de facturas, boletas y notas de crédito
                electrónicas validadas ante SUNAT, integradas con tu Kardex
                multialmacén y conciliación bancaria en Soles.
              </p>
            </div>

            <a
              href="#paso-cero"
              className="btn-pill-ml6 self-start lg:self-auto shrink-0"
            >
              <span>Solicitar Demo de la Suite</span>
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
      </section>
    </div>
  );
}
