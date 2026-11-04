import React, { useState } from "react";
import { SEVEN_AGENTS, SUITE_MODULES } from "../data/brochureData";
import { ArrowRight } from "lucide-react";

export default function SevenAgentsCircuit() {
  const [selectedAgentCode, setSelectedAgentCode] = useState("AG-01");

  const activeAgent =
    SEVEN_AGENTS.find((a) => a.code === selectedAgentCode) || SEVEN_AGENTS[0];

  const commercialAgents = SEVEN_AGENTS.slice(0, 3);
  const supplyFinanceAgents = SEVEN_AGENTS.slice(3, 7);

  return (
    <div className="bg-[#F5F8FD] text-[#091536]">
      {/* Slide 4: The 7 Specialized Agents */}
      <section
        id="agentes"
        className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-16 lg:py-24 border-b border-[#B8C7E6]"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#B8C7E6]">
          <div>
            <h2 className="font-display-condensed font-extrabold text-4xl sm:text-5xl text-[#091536] tracking-tight">
              Los 7 Agentes Especializados de PRO-IA
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#24345E] measure-prose">
              Circuito autónomo de backoffice dividido entre el Frente Comercial y la Cadena de Suministro, Finanzas y{"\u00A0"}Dirección.
            </p>
          </div>

          <div className="font-tabular-data text-xs font-semibold text-[#0B2D9E] bg-[#DCE6FF] border border-[#0B2D9E]/30 px-4 py-2.5 shrink-0">
            ECOSISTEMA AGÉNTICO · AG-01 A AG-07
          </div>
        </div>

        {/* Continuous Operational Circuit Strip */}
        <div className="mt-8 bg-[#091536] text-white p-5 sm:p-6 border border-[#2347BA]">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#1E326E]">
            <span className="text-xs sm:text-sm font-semibold text-[#DCE6FF]">
              Circuito de Operación Coordinada (Haz clic en cualquier nodo para auditar su función)
            </span>
            <span className="font-tabular-data text-xs text-[#FFD2B8]">
              Activo: {activeAgent.code} · {activeAgent.name}
            </span>
          </div>

          {/* Interactive 7-Node Connected Track */}
          <div className="mt-5 relative">
            <svg
              className="hidden lg:block absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 pointer-events-none"
              viewBox="0 0 1200 8"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <line
                x1="30"
                y1="4"
                x2="1170"
                y2="4"
                stroke="#2347BA"
                strokeWidth="2"
              />
              <line
                x1="30"
                y1="4"
                x2="1170"
                y2="4"
                stroke="#FF7A33"
                strokeWidth="2"
                className="circuit-line-active"
              />
            </svg>

            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {SEVEN_AGENTS.map((agent) => {
                const isSelected = agent.code === activeAgent.code;
                return (
                  <button
                    key={agent.code}
                    type="button"
                    onClick={() => setSelectedAgentCode(agent.code)}
                    className={`p-3 text-left border transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#C23800] text-white border-[#C23800]"
                        : "bg-[#0B2D9E] text-white border-[#2E56D8] hover:bg-[#1540C7]"
                    }`}
                  >
                    <div className="font-tabular-data text-xs font-bold text-white">
                      {agent.code}
                    </div>
                    <div className="mt-1 text-xs font-semibold leading-tight line-clamp-2 text-white">
                      {agent.number}. {agent.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Ledger Grid: Left 8 Cols (All 7 Brochure Agents by Front) + Right 4 Cols (Live Technical Sheet) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 border border-[#B8C7E6] bg-[#EDF2FA]">
          {/* Left 8 Columns: The Two Brochure Fronts */}
          <div className="lg:col-span-8 divide-y divide-[#B8C7E6] border-b lg:border-b-0 lg:border-r border-[#B8C7E6]">
            {/* Group 1: Frente Comercial & Clientes */}
            <div>
              <div className="px-5 py-3.5 bg-[#DCE6FF] border-b border-[#B8C7E6] flex items-center justify-between">
                <h3 className="font-heading-arch font-bold text-sm tracking-wide uppercase text-[#0B2D9E]">
                  Frente Comercial & Clientes
                </h3>
                <span className="font-tabular-data text-xs text-[#24345E]">
                  AG-01 · AG-02 · AG-03
                </span>
              </div>

              <div className="divide-y divide-[#B8C7E6]">
                {commercialAgents.map((agent) => {
                  const isCurrent = agent.code === activeAgent.code;
                  return (
                    <div
                      key={agent.code}
                      onClick={() => setSelectedAgentCode(agent.code)}
                      className={`p-5 sm:p-6 transition-colors cursor-pointer grid grid-cols-1 sm:grid-cols-12 gap-4 items-start ${
                        isCurrent
                          ? "bg-[#DCE6FF]/75"
                          : "bg-[#F5F8FD] hover:bg-[#EDF2FA]"
                      }`}
                    >
                      <div className="sm:col-span-4 flex sm:flex-col justify-between gap-1">
                        <span
                          className={`font-tabular-data text-xs font-semibold px-2 py-0.5 w-fit ${
                            isCurrent
                              ? "bg-[#C23800] text-white"
                              : "bg-[#0B2D9E] text-white"
                          }`}
                        >
                          {agent.code}
                        </span>
                        <div className="font-heading-arch font-bold text-base sm:text-lg text-[#091536] mt-1">
                          {agent.number}. {agent.name}
                        </div>
                      </div>

                      <div className="sm:col-span-8">
                        <p className="text-sm sm:text-base text-[#24345E] leading-relaxed">
                          {agent.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Group 2: Cadena de Suministro, Finanzas & Dirección */}
            <div>
              <div className="px-5 py-3.5 bg-[#FFF0E8] border-b border-[#B8C7E6] flex items-center justify-between">
                <h3 className="font-heading-arch font-bold text-sm tracking-wide uppercase text-[#9E2D00]">
                  Cadena de Suministro, Finanzas & Dirección
                </h3>
                <span className="font-tabular-data text-xs text-[#7A2500]">
                  AG-04 · AG-05 · AG-06 · AG-07
                </span>
              </div>

              <div className="divide-y divide-[#B8C7E6]">
                {supplyFinanceAgents.map((agent) => {
                  const isCurrent = agent.code === activeAgent.code;
                  return (
                    <div
                      key={agent.code}
                      onClick={() => setSelectedAgentCode(agent.code)}
                      className={`p-5 sm:p-6 transition-colors cursor-pointer grid grid-cols-1 sm:grid-cols-12 gap-4 items-start ${
                        isCurrent
                          ? "bg-[#FFF0E8]"
                          : "bg-[#F5F8FD] hover:bg-[#EDF2FA]"
                      }`}
                    >
                      <div className="sm:col-span-4 flex sm:flex-col justify-between gap-1">
                        <span
                          className={`font-tabular-data text-xs font-semibold px-2 py-0.5 w-fit ${
                            isCurrent
                              ? "bg-[#C23800] text-white"
                              : "bg-[#091536] text-white"
                          }`}
                        >
                          {agent.code}
                        </span>
                        <div className="font-heading-arch font-bold text-base sm:text-lg text-[#091536] mt-1">
                          {agent.number}. {agent.name}
                        </div>
                      </div>

                      <div className="sm:col-span-8">
                        <p className="text-sm sm:text-base text-[#24345E] leading-relaxed">
                          {agent.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right 4 Columns: Selected Agent Audit Dossier */}
          <div className="lg:col-span-4 bg-[#0B2D9E] text-white p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#2347BA]">
                <span className="font-tabular-data text-xs font-semibold bg-[#C23800] text-white px-2.5 py-1">
                  FICHA TÉCNICA · {activeAgent.code}
                </span>
                <span className="font-tabular-data text-xs text-[#DCE6FF]">
                  AGENTE {activeAgent.number} DE 7
                </span>
              </div>

              <div className="mt-5">
                <h3 className="font-heading-arch font-bold text-2xl text-white">
                  {activeAgent.number}. {activeAgent.name}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#FFD2B8]">
                  {activeAgent.front}
                </p>
              </div>

              <p className="mt-4 text-sm sm:text-base text-[#DCE6FF] leading-relaxed border-b border-[#2347BA] pb-5">
                {activeAgent.description}
              </p>

              <dl className="mt-5 space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 bg-[#08227A] border border-[#2E56D8]">
                  <dt className="font-tabular-data text-xs text-[#FFD2B8]">
                    SEÑAL DE ENTRADA
                  </dt>
                  <dd className="mt-1 text-white font-normal">
                    {activeAgent.inputs}
                  </dd>
                </div>

                <div className="p-3.5 bg-[#08227A] border border-[#2E56D8]">
                  <dt className="font-tabular-data text-xs text-[#DCE6FF]">
                    RESULTADO AUTÓNOMO
                  </dt>
                  <dd className="mt-1 text-white font-normal">
                    {activeAgent.outputs}
                  </dd>
                </div>

                <div className="p-3.5 bg-[#08227A] border border-[#2E56D8]">
                  <dt className="font-tabular-data text-xs text-[#DCE6FF]">
                    MÓDULO VINCULADO
                  </dt>
                  <dd className="mt-1 font-tabular-data text-xs text-white">
                    {activeAgent.connectedModule}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 pt-4 border-t border-[#2347BA]">
              <a
                href="#paso-cero"
                className="w-full inline-flex items-center justify-between px-4 py-3 bg-[#C23800] hover:bg-[#9E2D00] text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>Evaluar {activeAgent.code} en mi operación</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Brochure Slide 4 Bottom Synthesis Bar */}
        <div className="mt-6 px-6 py-4 bg-[#DCE6FF] border border-[#0B2D9E]/30 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm sm:text-base text-[#091536]">
            <strong className="font-bold text-[#0B2D9E]">
              Operación Coordinada:
            </strong>{" "}
            Los 7 agentes colaboran entre sí eliminando la fricción y el traslado manual de datos entre{"\u00A0"}áreas.
          </p>
          <span className="font-tabular-data text-xs font-semibold text-[#0B2D9E]">
            FLUJO CONTINUO 24/7
          </span>
        </div>
      </section>

      {/* Slide 5: Administrative Software Modules Ledger */}
      <section
        id="modulos"
        className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-16 lg:py-24 border-b border-[#B8C7E6]"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#B8C7E6]">
          <div>
            <h2 className="font-display-condensed font-extrabold text-4xl sm:text-5xl text-[#091536] tracking-tight">
              Módulos del Software Administrativo PRO-IA
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#24345E] measure-prose">
              Suite administrativa integral lista para operar como sistema central de la empresa o conectarse de forma híbrida a tu ERP{"\u00A0"}actual.
            </p>
          </div>

          <div className="font-tabular-data text-xs font-semibold text-[#091536] bg-[#DFE7F5] border border-[#B8C7E6] px-4 py-2.5 shrink-0">
            SUITE INTEGRAL · 6 MÓDULOS CORE
          </div>
        </div>

        {/* Ruled Architectural Table of the 6 Modules */}
        <div className="mt-8 border border-[#B8C7E6] bg-[#EDF2FA] divide-y divide-[#B8C7E6]">
          {SUITE_MODULES.map((mod) => (
            <div
              key={mod.code}
              className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center hover:bg-[#F5F8FD] transition-colors"
            >
              <div className="lg:col-span-2 flex items-center gap-3">
                <span className="font-tabular-data text-xs font-bold px-2.5 py-1 bg-[#091536] text-white">
                  {mod.code}
                </span>
              </div>

              <div className="lg:col-span-3">
                <h3 className="font-heading-arch font-bold text-lg sm:text-xl text-[#091536]">
                  {mod.name}
                </h3>
              </div>

              <div className="lg:col-span-4">
                <p className="text-sm sm:text-base text-[#24345E]">
                  {mod.description}
                </p>
              </div>

              <div className="lg:col-span-3 flex flex-wrap items-center lg:justify-end gap-1.5">
                <span className="text-xs text-[#24345E] mr-1">
                  Agentes activos:
                </span>
                {mod.linkedAgents.map((agentId) => (
                  <button
                    key={`${mod.code}-${agentId}`}
                    type="button"
                    onClick={() => {
                      setSelectedAgentCode(agentId);
                      const el = document.getElementById("agentes");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-tabular-data text-xs font-semibold px-2 py-0.5 bg-[#DCE6FF] hover:bg-[#0B2D9E] text-[#0B2D9E] hover:text-white border border-[#0B2D9E]/30 transition-colors cursor-pointer"
                  >
                    {agentId}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Brochure Slide 5 Bottom Bar */}
        <div className="mt-6 px-6 py-4 bg-[#DFE7F5] border border-[#B8C7E6] flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm sm:text-base text-[#091536]">
            <strong className="font-bold">Conectividad Híbrida:</strong> Puedes usar estos módulos como tu sistema principal o complementarlos con tu ERP{"\u00A0"}actual.
          </p>
          <span className="font-tabular-data text-xs font-bold text-[#091536] bg-[#F5F8FD] border border-[#B8C7E6] px-3 py-1">
            FULL SUITE READY
          </span>
        </div>
      </section>
    </div>
  );
}
