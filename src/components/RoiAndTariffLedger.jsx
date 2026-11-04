import React, { useState } from "react";
import {
  COMPANY_DATA,
  PRICING_PLANS,
  ROI_METRICS,
} from "../data/brochureData";
import {
  CheckCircle2,
  PhoneCall,
  Mail,
  Globe,
  TrendingUp,
  Send,
} from "lucide-react";

export default function RoiAndTariffLedger({
  selectedPlanLabel,
  onSelectPlan,
}) {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [currentErp, setCurrentErp] = useState(
    "SAP / Softland / Spring / Propio"
  );
  const [notes, setNotes] = useState("");

  const buildWhatsappUrl = () => {
    const text = [
      `Hola equipo de Prógresis SAC, deseo agendar *El Paso Cero: Consultoría Estratégica* para implementar *Agent PRO*.`,
      companyName ? `• Empresa / RUC: ${companyName}` : null,
      contactName ? `• Contacto: ${contactName}` : null,
      `• Modalidad de interés: ${selectedPlanLabel}`,
      `• Sistema actual: ${currentErp}`,
      notes ? `• Prioridad operativa: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${COMPANY_DATA.whatsappIntl}?text=${encodeURIComponent(
      text
    )}`;
  };

  const buildMailtoUrl = () => {
    const subject = `Solicitud Paso Cero Agent PRO — ${
      companyName || "Empresa B2B"
    }`;
    const body = [
      `Estimado equipo de Prógresis SAC,`,
      ``,
      `Solicito agendar El Paso Cero (Consultoría Estratégica) para evaluar Agent PRO en nuestra operación.`,
      ``,
      `Empresa / RUC: ${companyName || "Por especificar"}`,
      `Contacto y Cargo: ${contactName || "Por especificar"}`,
      `Modalidad seleccionada: ${selectedPlanLabel}`,
      `Sistema ERP actual: ${currentErp}`,
      `Comentarios adicionales: ${notes || "Sin comentarios adicionales"}`,
    ].join("\n");

    return `mailto:${COMPANY_DATA.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.open(buildWhatsappUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      {/* SECCIÓN 1: Un Retorno de Inversión Medible desde el Mes 1 & Planes SaaS */}
      <section
        id="planes-saas"
        className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          {/* Bloque de ROI Medible (Tarjetas de primer nivel, sin anidar) */}
          <div className="mb-16">
            <div className="max-w-3xl">
              <h2 className="font-display-progresis font-bold text-3xl sm:text-4xl text-[#274C9B] leading-tight">
                Un Retorno de Inversión Medible desde el Mes 1
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#334155] leading-relaxed">
                Automatizar con{" "}
                <strong className="font-bold text-[#1E293B]">Agent PRO</strong>{" "}
                no es un gasto informático: es liberar la capacidad comercial y
                financiera de tu empresa.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {ROI_METRICS.map((metric) => (
                <div
                  key={metric.code}
                  className="rounded-[24px] bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-7 shadow-progresis-sm"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display-progresis font-bold text-lg text-[#1E293B]">
                      {metric.title}
                    </h3>
                    <span className="font-tabular-data text-xs font-extrabold px-2.5 py-1 rounded-full bg-[#EDF3FC] text-[#274C9B] border border-[#CBD5E1]">
                      {metric.code}
                    </span>
                  </div>
                  <p className="mt-3 font-display-progresis font-bold text-4xl sm:text-5xl text-[#274C9B] font-tabular-data leading-none">
                    {metric.figure}
                  </p>
                  <p className="mt-3 text-sm text-[#334155] leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[20px] bg-[#FFF5EF] border border-[#FDBA74] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3">
                <TrendingUp className="w-5 h-5 text-[#9A3412] shrink-0 mt-0.5 sm:mt-0" />
                <p className="text-sm sm:text-base font-bold text-[#1E293B]">
                  El ROI es directo: con recuperar{" "}
                  <span className="text-[#9A3412] underline">
                    1 o 2 ventas perdidas por respuesta tardía al mes
                  </span>
                  , el costo de Agent PRO queda 100% amortizado.
                </p>
              </div>
              <span className="font-tabular-data text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#FFFFFF] text-[#9A3412] border border-[#FDBA74] shrink-0 self-start sm:self-auto">
                Amortización Mes 1
              </span>
            </div>
          </div>

          {/* Encabezado de Planes en Alquiler Mensual (SaaS) */}
          <div className="max-w-3xl mb-10">
            <h2 className="font-display-progresis font-bold text-3xl sm:text-4xl text-[#274C9B] leading-tight">
              Planes en Alquiler Mensual (SaaS)
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#334155] leading-relaxed">
              Una fracción de lo que cuesta contratar más personal
              administrativo, con disponibilidad 24/7.
            </p>
          </div>

          {/* Tarjetas de los 3 Planes SaaS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => {
              const planFullString = `${plan.name} · ${plan.price} ${plan.period}`;
              const isSelected = selectedPlanLabel === planFullString;
              const isSuiteTotal = plan.id === "software-completo";

              return (
                <article
                  key={plan.id}
                  className={`rounded-[28px] p-7 sm:p-8 flex flex-col justify-between transition-all ${
                    isSuiteTotal
                      ? "surface-navy-gradient text-[#FFFFFF] border-2 border-[#274C9B] shadow-progresis-lg"
                      : "bg-[#FFFFFF] text-[#1E293B] border border-[#CBD5E1] shadow-progresis-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`font-display-progresis font-bold text-2xl ${
                          isSuiteTotal ? "text-[#FFFFFF]" : "text-[#274C9B]"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <span
                        className={`font-tabular-data text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                          isSuiteTotal
                            ? "bg-[#C2410C] text-[#FFFFFF]"
                            : "bg-[#EDF3FC] text-[#274C9B] border border-[#CBD5E1]"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    </div>

                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        isSuiteTotal ? "text-[#E2EAF6]" : "text-[#334155]"
                      }`}
                    >
                      {plan.subtitle}
                    </p>

                    <div
                      className={`mt-6 pb-6 border-b flex items-baseline gap-2 ${
                        isSuiteTotal ? "border-[#334E85]" : "border-[#E2E8F0]"
                      }`}
                    >
                      <span
                        className={`font-display-progresis font-bold text-4xl sm:text-5xl font-tabular-data leading-none ${
                          isSuiteTotal ? "text-[#FFFFFF]" : "text-[#274C9B]"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`font-tabular-data text-sm font-bold ${
                          isSuiteTotal ? "text-[#7DD3FC]" : "text-[#475569]"
                        }`}
                      >
                        {plan.period}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm sm:text-base font-medium"
                        >
                          <CheckCircle2
                            className={`w-5 h-5 shrink-0 mt-0.5 ${
                              isSuiteTotal
                                ? "text-[#7DD3FC]"
                                : "text-[#C2410C]"
                            }`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <a
                      href="#paso-cero"
                      onClick={() => onSelectPlan(planFullString)}
                      className={
                        isSuiteTotal || isSelected
                          ? "btn-pill-ml6 w-full justify-between"
                          : "btn-secundario-ml6 w-full"
                      }
                    >
                      <span>
                        {isSelected
                          ? "Modalidad Seleccionada"
                          : `Elegir ${plan.name}`}
                      </span>
                      {(isSuiteTotal || isSelected) && (
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
                      )}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Nota de Implementación, Configuración y Puesta a Punto */}
          <div className="mt-8 rounded-[24px] bg-[#EDF3FC] border border-[#CBD5E1] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="font-display-progresis font-bold text-xl sm:text-2xl text-[#274C9B]">
                Implementación, Configuración y Puesta a Punto: Desde S/ 1,790 +
                IGV (Pago Único)
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#1E293B]">
                Plazo variable entre{" "}
                <strong className="font-bold">15 días y 3 meses</strong> según
                complejidad y alcance.{" "}
                <span className="text-[#334155]">
                  *Los consumos de Meta (WhatsApp Cloud API) son facturados por
                  separado según consumo oficial.
                </span>
              </p>
            </div>
            <span className="font-tabular-data text-xs font-extrabold uppercase tracking-wider px-4 py-2 rounded-full bg-[#FFFFFF] text-[#274C9B] border border-[#CBD5E1] shrink-0 self-start lg:self-auto">
              Despliegue Llave en Mano
            </span>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: El Paso Cero — Estilo exacto .seccion-contacto de progresissac.com */}
      <section
        id="paso-cero"
        className="py-16 lg:py-24 surface-blue-gradient text-[#FFFFFF]"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Columna Izquierda: Explicación del Paso Cero & Canales Directos (.canales-lista de progresissac.com) */}
            <div className="lg:col-span-5">
              <h2 className="font-display-progresis font-bold text-3xl sm:text-4xl text-[#FFFFFF] leading-tight">
                El Paso Cero: Consultoría Estratégica
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#E2EAF6] leading-relaxed">
                No vendemos software enlatado. Antes de desplegar cualquier
                agente, nuestro equipo de consultores audita los flujos de
                trabajo de tu empresa, identifica los cuellos de botella reales
                y diseña la arquitectura exacta que tu operación necesita para
                escalar.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`https://wa.me/${COMPANY_DATA.whatsappIntl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-[20px] bg-[#1E3A7A] hover:bg-[#152B59] border border-[#4364AD] p-5 transition-all"
                >
                  <span className="w-12 h-12 rounded-[14px] bg-[#C2410C] text-[#FFFFFF] flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7DD3FC]">
                      Teléfono / WhatsApp Directo
                    </p>
                    <p className="font-display-progresis font-bold text-xl text-[#FFFFFF] font-tabular-data mt-0.5">
                      {COMPANY_DATA.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="flex items-center gap-4 rounded-[20px] bg-[#1E3A7A] hover:bg-[#152B59] border border-[#4364AD] p-5 transition-all"
                >
                  <span className="w-12 h-12 rounded-[14px] bg-[#274C9B] border border-[#7DD3FC] text-[#FFFFFF] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7DD3FC]">
                      Correo Electrónico Corporativo
                    </p>
                    <p className="font-bold text-sm sm:text-base text-[#FFFFFF] truncate mt-0.5">
                      {COMPANY_DATA.email}
                    </p>
                  </div>
                </a>

                <a
                  href={COMPANY_DATA.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-[20px] bg-[#1E3A7A] hover:bg-[#152B59] border border-[#4364AD] p-5 transition-all"
                >
                  <span className="w-12 h-12 rounded-[14px] bg-[#274C9B] border border-[#7DD3FC] text-[#FFFFFF] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7DD3FC]">
                      Web Corporativa Oficial
                    </p>
                    <p className="font-bold text-base text-[#FFFFFF] mt-0.5">
                      {COMPANY_DATA.website}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Blanca de Formulario (.formulario-card de progresissac.com) */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleFormSubmit}
                className="rounded-[28px] bg-[#FFFFFF] text-[#1E293B] p-7 sm:p-10 shadow-progresis-lg border border-[#CBD5E1]"
              >
                <h3 className="font-display-progresis font-bold text-2xl sm:text-3xl text-[#274C9B]">
                  Agenda tu Diagnóstico Operativo
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#334155]">
                  Completa los datos de tu operación para iniciar la auditoría
                  del Paso Cero por WhatsApp o correo electrónico.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="empresa-input"
                      className="block text-xs font-extrabold uppercase tracking-wider text-[#1E293B] mb-2"
                    >
                      Empresa o RUC
                    </label>
                    <input
                      id="empresa-input"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Ej. Distribuidora Industrial SAC"
                      className="w-full rounded-[14px] bg-[#F8FAFC] border border-[#CBD5E1] px-4 py-3 text-sm text-[#1E293B] placeholder:text-[#475569] focus:bg-[#FFFFFF] focus:border-[#274C9B]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contacto-input"
                      className="block text-xs font-extrabold uppercase tracking-wider text-[#1E293B] mb-2"
                    >
                      Nombre y Cargo
                    </label>
                    <input
                      id="contacto-input"
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Ej. Carlos Mendoza · Gerente General"
                      className="w-full rounded-[14px] bg-[#F8FAFC] border border-[#CBD5E1] px-4 py-3 text-sm text-[#1E293B] placeholder:text-[#475569] focus:bg-[#FFFFFF] focus:border-[#274C9B]"
                    />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="plan-select"
                      className="block text-xs font-extrabold uppercase tracking-wider text-[#1E293B] mb-2"
                    >
                      Modalidad Agent PRO
                    </label>
                    <select
                      id="plan-select"
                      value={selectedPlanLabel}
                      onChange={(e) => onSelectPlan(e.target.value)}
                      className="w-full rounded-[14px] bg-[#F8FAFC] border border-[#CBD5E1] px-4 py-3 text-sm font-semibold text-[#1E293B] focus:bg-[#FFFFFF] focus:border-[#274C9B]"
                    >
                      <option value="Software Completo · S/ 690 + IGV / mes">
                        Software Completo · S/ 690 + IGV / mes
                      </option>
                      <option value="Sólo Agentes (API) · S/ 490 + IGV / mes">
                        Sólo Agentes (API) · S/ 490 + IGV / mes
                      </option>
                      <option value="Módulos + Agente 1 · S/ 350 + IGV / mes">
                        Módulos + Agente 1 · S/ 350 + IGV / mes
                      </option>
                      <option value="Vibe Coding & Agentes a la Medida · Evaluación Paso Cero">
                        Vibe Coding & Agentes a la Medida
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="erp-select"
                      className="block text-xs font-extrabold uppercase tracking-wider text-[#1E293B] mb-2"
                    >
                      Sistema Actual en tu Empresa
                    </label>
                    <select
                      id="erp-select"
                      value={currentErp}
                      onChange={(e) => setCurrentErp(e.target.value)}
                      className="w-full rounded-[14px] bg-[#F8FAFC] border border-[#CBD5E1] px-4 py-3 text-sm font-semibold text-[#1E293B] focus:bg-[#FFFFFF] focus:border-[#274C9B]"
                    >
                      <option value="SAP / Softland / Spring / Propio">
                        Contamos con ERP (SAP, Softland, Spring, otro)
                      </option>
                      <option value="Excel / Facturador suelto (Buscamos Suite Completa)">
                        Usamos Excel / sistemas aislados (Buscamos renovar)
                      </option>
                      <option value="Operación mixta por auditar en Paso Cero">
                        Operación mixta (Evaluar en Paso Cero)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="notas-textarea"
                    className="block text-xs font-extrabold uppercase tracking-wider text-[#1E293B] mb-2"
                  >
                    Principal cuello de botella a resolver (Opcional)
                  </label>
                  <textarea
                    id="notas-textarea"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ej. Demora en cotizar requerimientos por WhatsApp, cruce manual de órdenes de compra o facturación SUNAT..."
                    className="w-full rounded-[14px] bg-[#F8FAFC] border border-[#CBD5E1] px-4 py-3 text-sm text-[#1E293B] placeholder:text-[#475569] focus:bg-[#FFFFFF] focus:border-[#274C9B]"
                  />
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="btn-pill-ml6 flex-1 justify-between py-3.5 cursor-pointer"
                  >
                    <span>Enviar y Contactar por WhatsApp</span>
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
                  </button>

                  <a
                    href={buildMailtoUrl()}
                    className="btn-secundario-ml6 shrink-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar por Correo</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* PIE DE PÁGINA (.pie de progresissac.com sobre #F8FAFC) */}
      <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0] pt-14 pb-10 text-[#334155]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-[#E2E8F0]">
            <div className="lg:col-span-4">
              <img
                src="./logo-progresis.png"
                alt="Prógresis SAC · Consultoría y Tecnología"
                width={254}
                height={95}
                className="h-11 w-auto object-contain block"
              />
              <p className="mt-4 text-sm text-[#334155] leading-relaxed">
                <strong className="font-bold text-[#1E293B]">Agent PRO</strong>{" "}
                es la solución agéntica de backoffice B2B de{" "}
                <strong className="font-bold text-[#1E293B]">
                  Prógresis SAC
                </strong>{" "}
                que integra inteligencia artificial operativa, conexión ERP vía
                API y facturación electrónica SUNAT.
              </p>
            </div>

            <div className="lg:col-span-3">
              <h3 className="font-display-progresis font-bold text-base text-[#274C9B]">
                Ecosistema Agent PRO
              </h3>
              <ul className="mt-3 space-y-2 text-sm font-medium">
                <li>
                  <a
                    href="#comparativa-erp"
                    className="hover:text-[#274C9B] transition-colors"
                  >
                    ERP Tradicional vs. Agent PRO
                  </a>
                </li>
                <li>
                  <a
                    href="#modelos-implementacion"
                    className="hover:text-[#274C9B] transition-colors"
                  >
                    Opción A (API) & Opción B (Full Suite)
                  </a>
                </li>
                <li>
                  <a
                    href="#circuito-agentes"
                    className="hover:text-[#274C9B] transition-colors"
                  >
                    Los 7 Agentes Especializados
                  </a>
                </li>
                <li>
                  <a
                    href="#modulos-suite"
                    className="hover:text-[#274C9B] transition-colors"
                  >
                    6 Módulos Administrativos + SUNAT
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-display-progresis font-bold text-base text-[#274C9B]">
                Planes SaaS
              </h3>
              <ul className="mt-3 space-y-2 text-sm font-medium">
                <li>
                  <a
                    href="#planes-saas"
                    className="hover:text-[#274C9B] transition-colors"
                  >
                    Comercial · S/ 350 + IGV
                  </a>
                </li>
                <li>
                  <a
                    href="#planes-saas"
                    className="hover:text-[#274C9B] transition-colors"
                  >
                    Sólo Agentes API · S/ 490 + IGV
                  </a>
                </li>
                <li>
                  <a
                    href="#planes-saas"
                    className="hover:text-[#274C9B] transition-colors"
                  >
                    Suite Total · S/ 690 + IGV
                  </a>
                </li>
                <li>
                  <a
                    href="#paso-cero"
                    className="hover:text-[#274C9B] transition-colors"
                  >
                    El Paso Cero
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="font-display-progresis font-bold text-base text-[#274C9B]">
                Contacto Oficial
              </h3>
              <ul className="mt-3 space-y-2 text-sm font-medium">
                <li className="font-tabular-data font-bold text-[#1E293B]">
                  WhatsApp: {COMPANY_DATA.phone}
                </li>
                <li className="break-all">{COMPANY_DATA.email}</li>
                <li>
                  <a
                    href={COMPANY_DATA.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#274C9B] font-bold hover:underline"
                  >
                    {COMPANY_DATA.website}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[#475569] font-medium">
            <p>
              © {new Date().getFullYear()} Prógresis SAC · Consultoría &
              Tecnología. Todos los derechos reservados.
            </p>
            <p>Agent PRO · Transformación Digital & Automatización Operativa</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
