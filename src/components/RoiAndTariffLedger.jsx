import React, { useState } from "react";
import {
  COMPANY_DATA,
  PRICING_PLANS,
  ROI_METRICS,
} from "../data/brochureData";
import {
  ArrowUpRight,
  Check,
  Globe,
  Mail,
  Phone,
  Send,
} from "lucide-react";

export default function RoiAndTariffLedger({
  selectedPlanLabel,
  onSelectPlan,
}) {
  const [avgTicketSoles, setAvgTicketSoles] = useState(2500);
  const [recoveredOrders, setRecoveredOrders] = useState(2);
  const [companyInput, setCompanyInput] = useState("");
  const [erpSituation, setErpSituation] = useState(
    "Busco renovar todo (Suite Completa + SUNAT)"
  );

  const monthlyRecoveredRevenue = avgTicketSoles * recoveredOrders;
  const fullSuiteFee = 690;
  const netMultiple = Math.max(
    1,
    Math.round((monthlyRecoveredRevenue / fullSuiteFee) * 10) / 10
  );

  const buildWhatsAppHref = () => {
    const text = [
      `Hola ${COMPANY_DATA.company}, deseo agendar El Paso Cero: Consultoría Estratégica para evaluar PRO-IA.`,
      `• Plan de interés: ${selectedPlanLabel}`,
      `• Situación actual: ${erpSituation}`,
      companyInput.trim() ? `• Empresa / RUC: ${companyInput.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${COMPANY_DATA.whatsappIntl}?text=${encodeURIComponent(
      text
    )}`;
  };

  const buildMailtoHref = () => {
    const subject = `Solicitud El Paso Cero · PRO-IA (${selectedPlanLabel})`;
    const body = [
      `Estimado equipo de ${COMPANY_DATA.companyFull}:`,
      "",
      `Solicito agendar El Paso Cero (Consultoría Estratégica) para evaluar la implementación de PRO-IA.`,
      "",
      `Plan seleccionado: ${selectedPlanLabel}`,
      `Situación operativa: ${erpSituation}`,
      companyInput.trim() ? `Empresa: ${companyInput.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return `mailto:${COMPANY_DATA.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-[#EDF2FA] text-[#091536]">
      {/* Slide 6: Financial Impact & Measurable ROI */}
      <section
        id="retorno"
        className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-16 lg:py-24 border-b border-[#B8C7E6]"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#B8C7E6]">
          <div>
            <h2 className="font-display-condensed font-extrabold text-4xl sm:text-5xl text-[#091536] tracking-tight">
              Retorno de Inversión Medible desde el Mes 1
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#24345E] measure-prose">
              Impacto financiero y operativo directo al eliminar los cuellos de botella en cotizaciones, procesamiento de órdenes y{"\u00A0"}facturación.
            </p>
          </div>

          <div className="font-tabular-data text-xs font-semibold text-[#0B2D9E] bg-[#DCE6FF] border border-[#0B2D9E]/30 px-4 py-2.5 shrink-0">
            IMPACTO FINANCIERO · MES 1
          </div>
        </div>

        {/* 3 Ruled Ledger Columns + Interactive Amortization Sheet */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 border border-[#B8C7E6] bg-[#F5F8FD] divide-y lg:divide-y-0 lg:divide-x divide-[#B8C7E6]">
          {ROI_METRICS.map((item, idx) => (
            <div
              key={item.code}
              className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading-arch font-bold text-lg text-[#091536]">
                  {item.title}
                </h3>
                <div
                  className={`mt-3 font-display-condensed font-extrabold text-6xl sm:text-7xl tracking-tight ${
                    idx === 0
                      ? "text-[#0B2D9E]"
                      : idx === 1
                      ? "text-[#091536]"
                      : "text-[#C23800]"
                  }`}
                >
                  {item.figure}
                </div>
                <p className="mt-4 text-sm sm:text-base text-[#24345E] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#B8C7E6] flex items-center justify-between">
                <span className="font-tabular-data text-xs text-[#24345E]">
                  {item.code}
                </span>
                <span className="font-tabular-data text-xs font-semibold text-[#091536]">
                  VERIFICADO EN OPERACIÓN
                </span>
              </div>
            </div>
          ))}

          {/* 4th Column: Interactive B2B Recovery Simulator */}
          <div className="lg:col-span-3 p-6 sm:p-8 bg-[#091536] text-white flex flex-col justify-between">
            <div>
              <h3 className="font-heading-arch font-bold text-base sm:text-lg text-white">
                Simulador de Amortización Mensual
              </h3>
              <p className="mt-1 text-xs text-[#DCE6FF]">
                Estima cómo 1 o 2 pedidos B2B recuperados por respuesta rápida cubren la inversión{"\u00A0"}mensual.
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <label
                    htmlFor="ticket-range"
                    className="flex items-center justify-between text-xs text-[#DCE6FF]"
                  >
                    <span>Ticket promedio B2B</span>
                    <span className="font-tabular-data font-bold text-white">
                      S/ {avgTicketSoles.toLocaleString("es-PE")}
                    </span>
                  </label>
                  <input
                    id="ticket-range"
                    type="range"
                    min={800}
                    max={10000}
                    step={200}
                    value={avgTicketSoles}
                    onChange={(e) => setAvgTicketSoles(Number(e.target.value))}
                    className="mt-2 w-full accent-[#FF7A33] cursor-pointer"
                  />
                </div>

                <div>
                  <span className="block text-xs text-[#DCE6FF]">
                    Ventas recuperadas al mes
                  </span>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setRecoveredOrders(count)}
                        className={`py-1.5 font-tabular-data text-xs font-semibold border transition-colors cursor-pointer ${
                          recoveredOrders === count
                            ? "bg-[#C23800] text-white border-[#C23800]"
                            : "bg-[#0B2D9E] text-white border-[#2E56D8]"
                        }`}
                      >
                        {count} {count === 1 ? "venta" : "ventas"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1E326E]">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-[#DCE6FF]">
                  Venta recuperada/mes:
                </span>
                <span className="font-tabular-data font-bold text-lg text-[#FFD2B8]">
                  S/ {monthlyRecoveredRevenue.toLocaleString("es-PE")}
                </span>
              </div>
              <div className="mt-1 text-xs font-tabular-data text-white">
                Cubre {netMultiple}× el plan Software Completo (S/ 690)
              </div>
            </div>
          </div>
        </div>

        {/* Brochure Slide 6 Bottom Callout Bar */}
        <div className="mt-6 px-6 py-4 bg-[#DCE6FF] border border-[#0B2D9E]/30 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm sm:text-base font-semibold text-[#0B2D9E]">
            Con recuperar 1 o 2 ventas perdidas por respuesta tardía al mes, el costo de PRO-IA queda 100%{"\u00A0"}amortizado.
          </p>
          <span className="font-tabular-data text-xs font-bold text-[#0B2D9E] bg-[#F5F8FD] border border-[#0B2D9E]/30 px-3 py-1">
            ROI INMEDIATO
          </span>
        </div>
      </section>

      {/* Slide 7: Monthly SaaS Rental Plans */}
      <section
        id="planes"
        className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-16 lg:py-24"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#B8C7E6]">
          <div>
            <h2 className="font-display-condensed font-extrabold text-4xl sm:text-5xl text-[#091536] tracking-tight">
              Planes en Alquiler Mensual (SaaS)
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#24345E] measure-prose">
              Propuesta económica transparente en Soles adaptada al alcance operativo que tu empresa requiere{"\u00A0"}hoy.
            </p>
          </div>

          <div className="font-tabular-data text-xs font-semibold text-[#091536] bg-[#DFE7F5] border border-[#B8C7E6] px-4 py-2.5 shrink-0">
            PROPUESTA ECONÓMICA · ALQUILER MENSUAL
          </div>
        </div>

        {/* 3-Column Ruled Tariff Schedule */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 border border-[#B8C7E6] divide-y lg:divide-y-0 lg:divide-x divide-[#B8C7E6] bg-[#F5F8FD]">
          {PRICING_PLANS.map((plan) => {
            const fullPlanString = `${plan.name} · ${plan.price} ${plan.period}`;
            const isSelected = selectedPlanLabel === fullPlanString;

            return (
              <div
                key={plan.id}
                onClick={() => onSelectPlan && onSelectPlan(fullPlanString)}
                className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#DCE6FF]/65"
                    : "bg-[#F5F8FD] hover:bg-[#EDF2FA]"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading-arch font-bold text-2xl text-[#091536]">
                      {plan.name}
                    </h3>
                    <span
                      className={`font-tabular-data text-xs font-bold px-2.5 py-1 shrink-0 ${
                        plan.accent === "signal"
                          ? "bg-[#C23800] text-white"
                          : plan.accent === "cobalt"
                          ? "bg-[#0B2D9E] text-white"
                          : "bg-[#DFE7F5] text-[#091536] border border-[#B8C7E6]"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <p className="mt-2.5 text-sm text-[#24345E] min-h-[2.75rem]">
                    {plan.subtitle}
                  </p>

                  {/* Price Figure */}
                  <div className="mt-6 py-5 border-y border-[#B8C7E6] flex items-baseline gap-2">
                    <span
                      className={`font-display-condensed font-extrabold text-5xl sm:text-6xl tracking-tight ${
                        plan.accent === "signal"
                          ? "text-[#091536]"
                          : "text-[#0B2D9E]"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="font-tabular-data text-sm font-medium text-[#24345E]">
                      {plan.period}
                    </span>
                  </div>

                  {/* Feature List */}
                  <ul className="mt-6 space-y-3.5">
                    {plan.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-3 text-sm sm:text-base text-[#091536]"
                      >
                        <span
                          className={`mt-0.5 inline-flex items-center justify-center w-5 h-5 text-white shrink-0 ${
                            plan.accent === "signal"
                              ? "bg-[#C23800]"
                              : "bg-[#0B2D9E]"
                          }`}
                          aria-hidden="true"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-[#B8C7E6]">
                  <a
                    href="#paso-cero"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectPlan) onSelectPlan(fullPlanString);
                    }}
                    className={`w-full inline-flex items-center justify-between px-5 py-3.5 text-sm font-semibold transition-colors ${
                      plan.accent === "signal"
                        ? "bg-[#C23800] hover:bg-[#9E2D00] text-white"
                        : "bg-[#0B2D9E] hover:bg-[#08227A] text-white"
                    }`}
                  >
                    <span>
                      {isSelected
                        ? "Plan seleccionado · Ir a El Paso Cero"
                        : `Seleccionar ${plan.name}`}
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brochure Slide 7 Implementation & Meta Consumption Ledger Block */}
        <div className="mt-6 border border-[#B8C7E6] bg-[#F5F8FD] divide-y divide-[#B8C7E6]">
          <div className="p-6 sm:px-8 sm:py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h3 className="font-heading-arch font-bold text-lg sm:text-xl text-[#091536]">
                Implementación, Configuración y Puesta a Punto:{" "}
                <span className="text-[#0B2D9E] font-tabular-data">
                  Desde S/ 1,790 + IGV (Pago Único)
                </span>
              </h3>
              <p className="mt-1.5 text-sm text-[#24345E]">
                El plazo e inversión se correlacionan con la complejidad y alcance del modelo de negocio (varía entre 15 días y 3{"\u00A0"}meses).
              </p>
            </div>

            <span className="font-tabular-data text-xs font-bold text-[#0B2D9E] bg-[#DCE6FF] border border-[#0B2D9E]/30 px-3.5 py-2 shrink-0 self-start lg:self-center">
              15 DÍAS A 3 MESES
            </span>
          </div>

          <div className="px-6 sm:px-8 py-4 bg-[#DFE7F5] text-xs sm:text-sm text-[#24345E]">
            <strong className="font-semibold text-[#091536]">
              Consumos de Meta (WhatsApp Cloud API):
            </strong>{" "}
            Si los flujos del cliente incurren en gastos oficiales de mensajería de Meta, estos se facturan por separado según{"\u00A0"}consumo.
          </div>
        </div>
      </section>

      {/* Slide 8: Step Zero Strategic Consultancy & Closing Command Block */}
      <footer
        id="paso-cero"
        className="surface-cobalt text-white border-t border-[#2347BA]"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 7 Columns: Brochure Slide 8 Headline & Contact Ledger */}
            <div className="lg:col-span-7">
              <h2 className="font-display-condensed font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[0.98]">
                Moderniza la Operación de tu Empresa con PRO-IA
              </h2>

              <p className="mt-5 text-lg sm:text-xl text-[#DCE6FF] leading-relaxed">
                Auditamos tus flujos de trabajo antes del despliegue para asegurar que la inteligencia artificial resuelva problemas reales y genere{"\u00A0"}retorno{"\u00A0"}medible.
              </p>

              <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 bg-[#08227A] border border-[#2E56D8]">
                <span
                  className="w-2.5 h-2.5 bg-[#FF7A33]"
                  aria-hidden="true"
                />
                <span className="text-xs sm:text-sm font-semibold text-white">
                  El Paso Cero: Consultoría Estratégica · Diagnóstico Operativo B2B
                </span>
              </div>

              {/* Brochure Slide 8 Official Contact Strip */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 border border-[#2E56D8] bg-[#08227A] divide-y sm:divide-y-0 sm:divide-x divide-[#2E56D8]">
                <a
                  href={`https://wa.me/${COMPANY_DATA.whatsappIntl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 hover:bg-[#061858] transition-colors flex flex-col justify-between gap-2"
                >
                  <div className="flex items-center justify-between text-xs text-[#DCE6FF]">
                    <span>TELÉFONO / WHATSAPP</span>
                    <Phone className="w-4 h-4 text-[#FF7A33]" />
                  </div>
                  <div className="font-tabular-data font-bold text-base sm:text-lg text-white">
                    {COMPANY_DATA.phone}
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="p-5 hover:bg-[#061858] transition-colors flex flex-col justify-between gap-2"
                >
                  <div className="flex items-center justify-between text-xs text-[#DCE6FF]">
                    <span>CORREO ELECTRÓNICO</span>
                    <Mail className="w-4 h-4 text-[#FF7A33]" />
                  </div>
                  <div className="font-semibold text-sm text-white break-all">
                    {COMPANY_DATA.email}
                  </div>
                </a>

                <a
                  href={COMPANY_DATA.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 hover:bg-[#061858] transition-colors flex flex-col justify-between gap-2"
                >
                  <div className="flex items-center justify-between text-xs text-[#DCE6FF]">
                    <span>PÁGINA WEB</span>
                    <Globe className="w-4 h-4 text-[#FF7A33]" />
                  </div>
                  <div className="font-semibold text-base text-white">
                    {COMPANY_DATA.website}
                  </div>
                </a>
              </div>
            </div>

            {/* Right 5 Columns: Direct Step Zero Dispatch Configurator */}
            <div className="lg:col-span-5 bg-[#EDF2FA] text-[#091536] border border-[#B8C7E6] p-6 sm:p-8 shadow-ledger">
              <h3 className="font-heading-arch font-bold text-xl sm:text-2xl text-[#091536]">
                Solicitar El Paso Cero
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#24345E]">
                Configura tu requerimiento B2B para iniciar la auditoría de flujos por WhatsApp o correo con{"\u00A0"}Prógresis{"\u00A0"}SAC.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="plan-select"
                    className="block text-xs font-semibold text-[#091536]"
                  >
                    Plan o Modalidad de Interés
                  </label>
                  <select
                    id="plan-select"
                    value={selectedPlanLabel}
                    onChange={(e) =>
                      onSelectPlan && onSelectPlan(e.target.value)
                    }
                    className="mt-1.5 w-full px-3.5 py-2.5 bg-[#F5F8FD] border border-[#B8C7E6] text-sm font-medium text-[#091536]"
                  >
                    {PRICING_PLANS.map((p) => {
                      const val = `${p.name} · ${p.price} ${p.period}`;
                      return (
                        <option key={p.id} value={val}>
                          {val}
                        </option>
                      );
                    })}
                    <option value="Vibe Coding & Agentes a la Medida">
                      Vibe Coding & Agentes a la Medida
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="erp-select"
                    className="block text-xs font-semibold text-[#091536]"
                  >
                    Infraestructura Actual
                  </label>
                  <select
                    id="erp-select"
                    value={erpSituation}
                    onChange={(e) => setErpSituation(e.target.value)}
                    className="mt-1.5 w-full px-3.5 py-2.5 bg-[#F5F8FD] border border-[#B8C7E6] text-sm font-medium text-[#091536]"
                  >
                    <option value="Busco renovar todo (Suite Completa + SUNAT)">
                      Opción B: Busco renovar sistema (Suite Completa + SUNAT)
                    </option>
                    <option value="Ya tengo ERP (SAP, Softland, Spring o propio) y busco conectar vía API">
                      Opción A: Ya tengo ERP y busco conectar agentes vía API
                    </option>
                    <option value="Operamos con Excel / procesos manuales y WhatsApp">
                      Operamos con Excel / procesos manuales y WhatsApp
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="company-name"
                    className="block text-xs font-semibold text-[#091536]"
                  >
                    Empresa o RUC (Opcional)
                  </label>
                  <input
                    id="company-name"
                    type="text"
                    value={companyInput}
                    onChange={(e) => setCompanyInput(e.target.value)}
                    placeholder="Ej. Distribuidora Comercial SAC"
                    className="mt-1.5 w-full px-3.5 py-2.5 bg-[#F5F8FD] border border-[#B8C7E6] text-sm text-[#091536] placeholder:text-[#3E507D]"
                  />
                </div>

                <div className="pt-2 space-y-2.5">
                  <a
                    href={buildWhatsAppHref()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-[#C23800] hover:bg-[#9E2D00] text-white font-semibold text-sm transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud por WhatsApp ({COMPANY_DATA.phone})</span>
                  </a>

                  <a
                    href={buildMailtoHref()}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#091536] hover:bg-[#0B2D9E] text-white font-medium text-xs sm:text-sm transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#FF7A33]" />
                    <span>Solicitar por Correo ({COMPANY_DATA.email})</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Author Line */}
          <div className="mt-14 pt-6 border-t border-[#2347BA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#DCE6FF]">
            <div>
              © {new Date().getFullYear()} {COMPANY_DATA.companyFull} · Todos los derechos reservados.
            </div>
            <div className="font-tabular-data">
              PRO-IA · Transformación Digital & Automatización Operativa B2B
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
