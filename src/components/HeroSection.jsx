import React, { useState } from "react";
import { HERO_DATA } from "../data/brochureData";
import { ArrowDown, MessageSquare, BarChart3, ExternalLink } from "lucide-react";

export default function HeroSection() {
  const [activePreview, setActivePreview] = useState("crm");

  const previews = {
    crm: {
      title: "CRM & WhatsApp con Agente IA",
      badge: "WhatsApp conectado · Atención con Agente",
      image: "./screenshots/crm-whatsapp-agente.png",
      target: "#crm-whatsapp",
    },
    comercial: {
      title: "Panel Ejecutivo · Gestión Comercial",
      badge: "Conversión 68% · 17 Órdenes confirmadas",
      image: "./screenshots/comercial-dashboard.png",
      target: "#gestion-comercial",
    },
  };

  const currentPreview = previews[activePreview];

  return (
    <section
      id="inicio"
      className="pt-8 pb-14 lg:pt-12 lg:pb-18 bg-[#FFFFFF] border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna Izquierda: Identidad Oficial, Opciones y Métricas */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="font-display-progresis font-bold text-5xl sm:text-6xl text-[#274C9B] leading-[1.02] tracking-tight">
              {HERO_DATA.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#334155] font-medium leading-relaxed measure-prose">
              {HERO_DATA.subtitle}
            </p>

            {/* Selector de las 2 Modalidades de Implementación */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HERO_DATA.options.map((opt, idx) => {
                const isOptionA = idx === 0;
                return (
                  <a
                    key={opt.badge}
                    href={opt.targetHref}
                    className={`p-3.5 rounded-[18px] border transition-all block ${
                      isOptionA
                        ? "bg-[#EDF3FC] border-[#CBD5E1] hover:border-[#274C9B]"
                        : "bg-[#FFF5EF] border-[#FDBA74] hover:border-[#C2410C]"
                    }`}
                  >
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider font-tabular-data ${
                        isOptionA ? "text-[#274C9B]" : "text-[#9A3412]"
                      }`}
                    >
                      {opt.badge}
                    </span>
                    <p className="mt-0.5 text-sm font-bold text-[#1E293B]">
                      {opt.title}
                    </p>
                    <p className="text-xs text-[#475569] mt-0.5 leading-snug">
                      {opt.desc}
                    </p>
                  </a>
                );
              })}
            </div>

            {/* Botones de Acción Inmediata */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#crm-whatsapp" className="btn-pill-ml6">
                <span>Explorar Sistemas</span>
                <span className="icono-circulo" aria-hidden="true">
                  <ArrowDown className="w-4 h-4" />
                </span>
              </a>

              <a href="#planes-saas" className="btn-secundario-ml6">
                <span>Ver Planes SaaS</span>
              </a>
            </div>

            {/* Franja de las 3 Métricas de Impacto Financiero */}
            <div className="mt-8 pt-6 border-t border-[#E2E8F0] grid grid-cols-3 gap-3">
              {HERO_DATA.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-display-progresis font-bold text-2xl sm:text-3xl text-[#274C9B] font-tabular-data leading-none">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-[#1E293B]">
                    {metric.label}
                  </p>
                  <p className="text-xs text-[#475569] leading-tight mt-0.5">
                    {metric.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Vista Interactiva del Sistema Real */}
          <div className="lg:col-span-6">
            <div className="rounded-[28px] bg-[#EDF3FC] border border-[#CBD5E1] shadow-progresis-lg overflow-hidden">
              {/* Barra superior con selector de sistema */}
              <div className="bg-[#152B59] text-[#FFFFFF] px-5 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-[#334E85]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-3 h-3 rounded-full bg-[#EB6828]" />
                    <span className="w-3 h-3 rounded-full bg-[#FDBA74]" />
                    <span className="w-3 h-3 rounded-full bg-[#7DD3FC]" />
                  </div>
                  <span className="text-xs font-bold text-[#E2EAF6] ml-1">
                    Sistema en Vivo
                  </span>
                </div>

                {/* Tabs de cambio entre CRM y Comercial */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActivePreview("crm")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                      activePreview === "crm"
                        ? "bg-[#C2410C] text-[#FFFFFF]"
                        : "bg-[#1E386D] text-[#E2EAF6] hover:bg-[#274C9B]"
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>CRM WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActivePreview("comercial")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                      activePreview === "comercial"
                        ? "bg-[#C2410C] text-[#FFFFFF]"
                        : "bg-[#1E386D] text-[#E2EAF6] hover:bg-[#274C9B]"
                    }`}
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Panel Comercial</span>
                  </button>
                </div>
              </div>

              {/* Sub-barra informativa con badge de estado y enlace directo */}
              <div className="bg-[#1E386D] px-5 sm:px-6 py-2.5 flex items-center justify-between gap-2 border-b border-[#334E85]">
                <span className="text-xs font-bold text-[#7DD3FC] truncate">
                  {currentPreview.badge}
                </span>

                <a
                  href={currentPreview.target}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#FFFFFF] hover:text-[#7DD3FC] transition-colors shrink-0"
                >
                  <span>Ver módulo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Imagen del Sistema en Vivo */}
              <div className="p-3 sm:p-4">
                <a
                  href={currentPreview.target}
                  className="group block rounded-[18px] overflow-hidden border border-[#CBD5E1] bg-[#FFFFFF] shadow-progresis-md relative"
                >
                  <img
                    src={currentPreview.image}
                    alt={currentPreview.title}
                    width={1366}
                    height={680}
                    className="w-full h-auto block group-hover:scale-[1.01] transition-transform"
                  />
                  <div className="absolute inset-0 bg-[#274C9B]/0 group-hover:bg-[#274C9B]/10 transition-colors pointer-events-none" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
