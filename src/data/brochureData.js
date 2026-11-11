export const COMPANY_DATA = {
  brand: "Agent PRO",
  company: "Prógresis SAC",
  website: "progresissac.com",
  websiteUrl: "https://progresissac.com",
  email: "yenizzacabeza@progresissac.com",
  phone: "999 910 178",
  whatsappIntl: "51999910178",
};

export const HERO_DATA = {
  title: "PRO-IA",
  subtitle:
    "El sistema agéntico de backoffice que simplifica la operación comercial, logística y financiera de tu empresa.",
  metrics: [
    {
      value: "-80%",
      label: "Tiempo Operativo",
      desc: "Atención en < 3 minutos",
    },
    {
      value: "3×",
      label: "Capacidad Comercial",
      desc: "Sin aumentar personal",
    },
    {
      value: "0%",
      label: "Errores de Digitación",
      desc: "Precios e IGV exactos",
    },
  ],
  options: [
    {
      badge: "Opción A",
      title: "Solo Agentes IA",
      desc: "Conexión vía API a tu ERP actual sin migrar.",
      targetHref: "#planes-saas",
    },
    {
      badge: "Opción B",
      title: "Software Completo",
      desc: "CRM, Compras y Facturación SUNAT.",
      targetHref: "#planes-saas",
    },
  ],
};

export const CRM_SYSTEM_SCREENS = [
  {
    id: "crm-whatsapp",
    title: "Bandeja de WhatsApp con Agente IA",
    shortLabel: "WhatsApp IA",
    image: "./screenshots/crm-whatsapp-agente.png",
    tags: ["Atención 24/7", "Resumen IA", "Pase a asesor"],
  },
  {
    id: "crm-oportunidades",
    title: "Pipeline de Oportunidades",
    shortLabel: "Oportunidades",
    image: "./screenshots/crm-oportunidades-pipeline.png",
    tags: ["Tablero Kanban", "Ficha con RUC", "Prioridad comercial"],
  },
  {
    id: "crm-calendario",
    title: "Agenda con Google Calendar",
    shortLabel: "Calendario",
    image: "./screenshots/crm-calendario-google.png",
    tags: ["Sincronización en vivo", "Citas por IA", "Bloques de 30 min"],
  },
  {
    id: "crm-seguimientos",
    title: "Seguimientos y Plantillas Meta",
    shortLabel: "Seguimientos",
    image: "./screenshots/crm-seguimientos-meta.png",
    tags: ["Recordatorios", "Plantillas Meta", "Envío automático"],
  },
];

export const COMERCIAL_SYSTEM_SCREENS = [
  {
    id: "comercial-dashboard",
    title: "Panel Ejecutivo de Gerencia",
    shortLabel: "Dashboard",
    image: "./screenshots/comercial-dashboard.png",
    tags: ["KPIs en tiempo real", "Embudo 5 etapas", "Alertas IA"],
  },
  {
    id: "comercial-pipeline",
    title: "Pipeline de Requerimientos y Cotizaciones",
    shortLabel: "Pipeline B2B",
    image: "./screenshots/comercial-requerimientos-pipeline.png",
    tags: ["Lectura de PDF", "Cotización a proveedores", "Cierre OCC"],
  },
  {
    id: "comercial-agentes",
    title: "Consola Multi-Agente: Ventas, Clientes y Proveedores",
    shortLabel: "3 Agentes IA",
    image: "./screenshots/comercial-agentes-ia.png",
    tags: ["Agente Ventas", "Agente Proveedores", "Cálculo de margen"],
  },
  {
    id: "comercial-catalogo",
    title: "Catálogo con Vectores IA",
    shortLabel: "Catálogo IA",
    image: "./screenshots/comercial-catalogo-vectores.png",
    tags: ["Búsqueda semántica", "Homologación SKU", "Precios de lista"],
  },
];

export const PRICING_PLANS = [
  {
    id: "comercial",
    code: "PLAN-01",
    badge: "COMERCIAL",
    name: "Módulos + Agente 1",
    price: "S/ 350",
    period: "+ IGV / mes",
    features: [
      "Módulos administrativos tradicionales",
      "Agente 1 de Leads en WhatsApp",
      "Cotizaciones y agenda automáticas",
    ],
  },
  {
    id: "solo-agentes",
    code: "PLAN-02",
    badge: "CONEXIÓN ERP",
    name: "Sólo Agentes (API)",
    price: "S/ 490",
    period: "+ IGV / mes",
    features: [
      "Agentes necesarios a elección",
      "Conexión vía API a tu ERP actual",
      "Cero migración ni cambio de software",
    ],
  },
  {
    id: "software-completo",
    code: "PLAN-03",
    badge: "SUITE TOTAL",
    name: "Software Completo",
    price: "S/ 690",
    period: "+ IGV / mes",
    features: [
      "Los 7 Agentes de Backoffice activos",
      "Suite administrativa total + SUNAT",
      "Automatización integral llave en mano",
    ],
  },
];
