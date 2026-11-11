import React, { useState } from "react";
import { COMPANY_DATA, PRICING_PLANS } from "../data/brochureData";
import {
  CheckCircle2,
  PhoneCall,
  Mail,
  TrendingUp,
  Send,
} from "lucide-react";

export default function RoiAndTariffLedger({
  selectedPlanLabel,
  onSelectPlan,
}) {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");

  const buildWhatsappUrl = () => {
    const text = [
      `Hola equipo de Prógresis SAC, me interesa *${selectedPlanLabel}*.`,
      companyName ? `• Empresa / RUC: ${companyName}` : null,
      contactName ? `• Contacto: ${contactName}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${COMPANY_DATA.whatsappIntl}?text=${encodeURIComponent(
      text
    )}`;
  };

  const buildMailtoUrl = () => {
    const subject = `Solicitud Agent PRO — ${companyName || "Empresa B2B"}`;
    const body = [
      `Hola equipo de Prógresis SAC,`,
      ``,
      `Solicito información sobre: ${selectedPlanLabel}`,
      `Empresa / RUC: ${companyName || "Por especificar"}`,
      `Contacto: ${contactName || "Por especificar"}`,
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
      {/* SECCIÓN: Planes en Alquiler Mensual (SaaS) */}
      <section
        id="planes-saas"
        className="py-16 lg:py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-9">
            <div>
              <h2 className="font-display-progresis font-bold text-3xl sm:text-4xl text-[#274C9B] leading-tight">
                Planes en Alquiler Mensual (SaaS)
              </h2>
              <p className="mt-1.5 text-sm sm:text-base text-[#334155]">
                Disponibilidad 24/7 por una fracción de ampliar personal
                administrativo.
              </p>
            </div>

            <div className="rounded-[14px] bg-[#FFF5EF] border border-[#FDBA74] px-4 py-2.5 flex items-center gap-2 self-start lg:self-auto">
              <TrendingUp className="w-4 h-4 text-[#9A3412] shrink-0" />
              <p className="text-xs sm:text-sm font-bold text-[#1E293B]">
                ROI Mes 1: Con recuperar{" "}
                <span className="text-[#9A3412] underline">
                  1 o 2 ventas al mes
                </span>
                , se paga solo.
              </p>
            </div>
          </div>

          {/* Tarjetas de los 3 Planes SaaS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {PRICING_PLANS.map((plan) => {
              const planFullString = `${plan.name} · ${plan.price} ${plan.period}`;
              const isSelected = selectedPlanLabel === planFullString;
              const isSuiteTotal = plan.id === "software-completo";

              return (
                <article
                  key={plan.id}
                  className={`rounded-[28px] p-7 flex flex-col justify-between transition-all ${
                    isSuiteTotal
                      ? "surface-navy-gradient text-[#FFFFFF] border-2 border-[#274C9B] shadow-progresis-lg"
                      : "bg-[#FFFFFF] text-[#1E293B] border border-[#CBD5E1] shadow-progresis-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`font-display-progresis font-bold text-xl sm:text-2xl ${
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

                    <div
                      className={`mt-5 pb-5 border-b flex items-baseline gap-2 ${
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

                    <ul className="mt-5 space-y-2.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm font-medium"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
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

                  <div className="mt-7 pt-3">
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
                        {isSelected ? "Seleccionado" : `Elegir ${plan.name}`}
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

          {/* Nota breve de Implementación */}
          <div className="mt-6 rounded-[20px] bg-[#EDF3FC] border border-[#CBD5E1] px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm text-[#1E293B]">
            <p>
              <strong className="font-bold text-[#274C9B]">
                Implementación y Puesta a Punto:
              </strong>{" "}
              Desde <strong className="font-tabular-data">S/ 1,790 + IGV</strong>{" "}
              (Pago único · 15 días a 3 meses).
            </p>
            <span className="text-xs text-[#475569]">
              *Consumos de WhatsApp Cloud API según Meta.
            </span>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO COMPACTA */}
      <section
        id="paso-cero"
        className="py-14 lg:py-16 surface-blue-gradient text-[#FFFFFF]"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-display-progresis font-bold text-2xl sm:text-3xl text-[#FFFFFF] leading-tight">
                Solicitar Demostración
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#E2EAF6]">
                Agenda una sesión directa por WhatsApp o correo.
              </p>

              <div className="mt-5 space-y-2.5">
                <a
                  href={`https://wa.me/${COMPANY_DATA.whatsappIntl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 rounded-[18px] bg-[#1E3A7A] hover:bg-[#152B59] border border-[#4364AD] p-3.5 transition-all"
                >
                  <span className="w-10 h-10 rounded-[12px] bg-[#C2410C] text-[#FFFFFF] flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </span>
                  <span className="font-display-progresis font-bold text-lg text-[#FFFFFF] font-tabular-data">
                    WhatsApp: {COMPANY_DATA.phone}
                  </span>
                </a>

                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="flex items-center gap-3.5 rounded-[18px] bg-[#1E3A7A] hover:bg-[#152B59] border border-[#4364AD] p-3.5 transition-all"
                >
                  <span className="w-10 h-10 rounded-[12px] bg-[#274C9B] border border-[#7DD3FC] text-[#FFFFFF] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </span>
                  <span className="font-bold text-sm text-[#FFFFFF] truncate">
                    {COMPANY_DATA.email}
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleFormSubmit}
                className="rounded-[24px] bg-[#FFFFFF] text-[#1E293B] p-6 sm:p-7 shadow-progresis-lg border border-[#CBD5E1]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label
                      htmlFor="empresa-input"
                      className="block text-xs font-extrabold uppercase tracking-wider text-[#1E293B] mb-1"
                    >
                      Empresa o RUC
                    </label>
                    <input
                      id="empresa-input"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Ej. Importadora SAC"
                      className="w-full rounded-[12px] bg-[#F8FAFC] border border-[#CBD5E1] px-3.5 py-2.5 text-sm text-[#1E293B] placeholder:text-[#475569] focus:bg-[#FFFFFF] focus:border-[#274C9B]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contacto-input"
                      className="block text-xs font-extrabold uppercase tracking-wider text-[#1E293B] mb-1"
                    >
                      Nombre
                    </label>
                    <input
                      id="contacto-input"
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Tu nombre"
                      className="w-full rounded-[12px] bg-[#F8FAFC] border border-[#CBD5E1] px-3.5 py-2.5 text-sm text-[#1E293B] placeholder:text-[#475569] focus:bg-[#FFFFFF] focus:border-[#274C9B]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="plan-select"
                      className="block text-xs font-extrabold uppercase tracking-wider text-[#1E293B] mb-1"
                    >
                      Plan
                    </label>
                    <select
                      id="plan-select"
                      value={selectedPlanLabel}
                      onChange={(e) => onSelectPlan(e.target.value)}
                      className="w-full rounded-[12px] bg-[#F8FAFC] border border-[#CBD5E1] px-3 py-2.5 text-sm font-semibold text-[#1E293B] focus:bg-[#FFFFFF] focus:border-[#274C9B]"
                    >
                      <option value="Software Completo · S/ 690 + IGV / mes">
                        Suite Total · S/ 690
                      </option>
                      <option value="Sólo Agentes (API) · S/ 490 + IGV / mes">
                        Sólo Agentes · S/ 490
                      </option>
                      <option value="Módulos + Agente 1 · S/ 350 + IGV / mes">
                        Comercial · S/ 350
                      </option>
                    </select>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="btn-pill-ml6 flex-1 justify-between py-2.5 cursor-pointer"
                  >
                    <span>Contactar por WhatsApp</span>
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
                    <span>Por Correo</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* PIE DE PÁGINA */}
      <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0] py-6 text-[#334155]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img
            src="./logo-progresis.png"
            alt="Prógresis SAC · Consultoría y Tecnología"
            width={254}
            height={95}
            className="h-8 w-auto object-contain block"
          />

          <p className="text-xs text-[#475569] font-medium text-center sm:text-right">
            © {new Date().getFullYear()} Prógresis SAC · WhatsApp:{" "}
            <strong className="font-tabular-data text-[#1E293B]">
              {COMPANY_DATA.phone}
            </strong>{" "}
            · {COMPANY_DATA.email}
          </p>
        </div>
      </footer>
    </div>
  );
}
