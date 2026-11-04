export const COMPANY_DATA = {
  brand: "PRO-IA",
  company: "Prógresis SAC",
  companyFull: "Prógresis SAC · Consultoría & Tecnología",
  tagline: "Transformación Digital & Automatización Operativa",
  proposalLabel: "Propuesta de Solución Agéntica B2B",
  heroHeadline:
    "El sistema agéntico de backoffice que simplifica la operación comercial, logística y financiera de tu empresa.",
  website: "progresissac.com",
  websiteUrl: "https://progresissac.com",
  email: "yenizzacabeza@progresissac.com",
  phone: "999 910 178",
  whatsappIntl: "51999910178",
};

export const LIVE_AUDIT_SCENARIOS = [
  {
    id: "importadora-oc",
    code: "CASO-01 · IMPORTACIÓN & DESPACHO",
    label: "Orden de Compra por WhatsApp",
    triggerChannel: "WhatsApp Cloud API",
    triggerSender: "Compras · Distribuidora Industrial Norte SAC",
    triggerInput:
      "Adjunto OC-2026-0841 en PDF (45 válvulas DN50 inox + 120 bridas ANSI). Confirmar stock en almacén Lurín y emitir factura electrónica.",
    elapsedTotal: "01m 42s",
    manualEquivalent: "4h 15m (4 áreas)",
    documentGenerated: "Factura SUNAT F001-009482 · S/ 18,450.00 inc. IGV",
    steps: [
      {
        agentCode: "AG-02",
        agentName: "Requerimientos de Clientes",
        inputSignal: "Lectura OCR de PDF OC-2026-0841 (2 ítems técnicos)",
        actionTaken:
          "Homologa códigos SKU-VL50 y SKU-BR120 en Kardex multialmacén; confirma disponibilidad en Lurín (Stock: 190 uds).",
        timeDelta: "+18s",
        status: "VERIFICADO",
      },
      {
        agentCode: "AG-03",
        agentName: "Atención de OC de Clientes",
        inputSignal: "Cruce contra Cotización previa COT-8812 y lista B2B",
        actionTaken:
          "Valida tarifa pactada sin discrepancias de IGV (18%) y libera guía de despacho interna GD-0419.",
        timeDelta: "+31s",
        status: "DESPACHO LIBERADO",
      },
      {
        agentCode: "AG-05",
        agentName: "Facturación & Cobranzas",
        inputSignal: "Orden validada + RUC 20548192011 activo/habido",
        actionTaken:
          "Emite Factura Electrónica F001-009482 vía PSE oficial certificado SUNAT y envía XML/PDF al cliente por WhatsApp y correo.",
        timeDelta: "+53s",
        status: "EMITIDO SUNAT",
      },
    ],
  },
  {
    id: "cotizacion-recurrente",
    code: "CASO-02 · COMERCIAL B2B 24/7",
    label: "Cotización Multicanal Instantánea",
    triggerChannel: "WhatsApp + Correo B2B",
    triggerSender: "Jefe de Planta · Agroexportadora Valle Sur",
    triggerInput:
      "Buenas noches, urgente cotización de 80 rollos film stretch industrial y 300 cajas corrugadas puestas en Ica mañana.",
    elapsedTotal: "01m 14s",
    manualEquivalent: "14h (espera al día siguiente)",
    documentGenerated: "Cotización Formal COT-2026-3109 · S/ 6,726.00 inc. IGV",
    steps: [
      {
        agentCode: "AG-01",
        agentName: "Agente de Gestión de Leads",
        inputSignal: "Mensaje entrante 22:40 hrs fuera de horario de oficina",
        actionTaken:
          "Registra oportunidad en pipeline CRM, identifica cliente recurrente y activa tarifario mayorista zona sur.",
        timeDelta: "+12s",
        status: "LEAD ACTIVO",
      },
      {
        agentCode: "AG-02",
        agentName: "Requerimientos de Clientes",
        inputSignal: "Consulta de costo reposición + margen mínimo B2B",
        actionTaken:
          "Calcula precio con flete a Ica, aplica descuento por volumen y genera PDF de cotización formal.",
        timeDelta: "+38s",
        status: "COTIZADO",
      },
      {
        agentCode: "AG-01",
        agentName: "Agente de Gestión de Leads",
        inputSignal: "Envío de propuesta y seguimiento automático",
        actionTaken:
          "Entrega COT-2026-3109 en WhatsApp y deja agendada llamada de cierre para las 08:30 hrs.",
        timeDelta: "+24s",
        status: "ENVIADO 24/7",
      },
    ],
  },
  {
    id: "abastecimiento-tesoreria",
    code: "CASO-03 · SUMINISTRO & FINANZAS",
    label: "Reposición de Stock y Conciliación",
    triggerChannel: "Alerta Kardex + Correo Proveedor",
    triggerSender: "Kardex Central / Proveedor Importaciones Pacífico",
    triggerInput:
      "Alerta de stock mínimo en rodamientos SKF-6205 + recepción de factura proveedor F004-00192 por orden previa.",
    elapsedTotal: "02m 08s",
    manualEquivalent: "6h 30m (cruces en Excel)",
    documentGenerated: "OC-PROV-0512 emitida + Pago programado conciliado",
    steps: [
      {
        agentCode: "AG-04",
        agentName: "Compras & Proveedores",
        inputSignal: "Stock de seguridad alcanzado en Almacén Central",
        actionTaken:
          "Consolida requerimientos, compara 3 cotizaciones vigentes de proveedores homologados y emite OC-PROV-0512.",
        timeDelta: "+44s",
        status: "OC EMITIDA",
      },
      {
        agentCode: "AG-06",
        agentName: "Cuentas por Pagar",
        inputSignal: "Factura XML F004-00192 recibida por correo",
        actionTaken:
          "Cruza montos e ítems contra OC emitida y guía de recepción sin diferencias; programa vencimiento en tesorería.",
        timeDelta: "+51s",
        status: "CONCILIADO",
      },
      {
        agentCode: "AG-07",
        agentName: "Agente de Informes",
        inputSignal: "Consulta de Gerencia: «¿Flujo de caja neto de esta semana?»",
        actionTaken:
          "Responde en lenguaje natural con saldo bancario conciliado, cuentas por cobrar y obligaciones programadas.",
        timeDelta: "+33s",
        status: "REPORTE LISTO",
      },
    ],
  },
];

export const COMPARISON_ROWS = [
  {
    rowCode: "COMP-01",
    dimension: "Ejecución Diaria",
    traditionalTitle: "Carga manual extrema",
    traditionalDesc:
      "El personal pasa hasta 60% del día transcribiendo cotizaciones, pedidos y facturas.",
    agenticTitle: "Operación 24/7 sin digitación",
    agenticDesc:
      "Agentes IA atienden requerimientos, validan stock y preparan cotizaciones al instante.",
  },
  {
    rowCode: "COMP-02",
    dimension: "Velocidad Comercial",
    traditionalTitle: "Respuesta comercial tardía",
    traditionalDesc:
      "Búsqueda manual de códigos de inventario; el prospecto B2B compra al primero que responde.",
    agenticTitle: "Atención multicanal nativa",
    agenticDesc:
      "Interacción natural con clientes y proveedores vía WhatsApp y correo sin interfaces rígidas.",
  },
  {
    rowCode: "COMP-03",
    dimension: "Coordinación Entre Áreas",
    traditionalTitle: "Silos y ceguera operativa",
    traditionalDesc:
      "Compras, ventas y finanzas descoordinados con cruces manuales en Excel propensos al error.",
    agenticTitle: "Equipo enfocado en valor",
    agenticDesc:
      "Tu personal pasa de ingresar datos a cerrar negociaciones y supervisar resultados.",
  },
];

export const IMPLEMENTATION_MODELS = [
  {
    code: "MODO-A",
    optionLabel: "Opción A",
    title: "Solo Agentes IA (Capa Conectora)",
    summary:
      "No necesitas cambiar tu sistema actual. Integramos nuestros agentes vía API a tu ERP existente (SAP, Softland, Spring o desarrollo in-house).",
    architectureSpec: "WhatsApp / Correo ⇄ 7 Agentes PRO-IA ⇄ API REST / Webhook ⇄ Tu ERP Actual",
    highlights: [
      "Cero disrupción operativa ni migración costosa",
      "Potencia inmediata sobre tus datos actuales",
    ],
    recommendedPlan: "Sólo Agentes (API) · S/ 490 + IGV / mes",
  },
  {
    code: "MODO-B",
    optionLabel: "Opción B",
    title: "Software Administrativo Integral",
    summary:
      "Para empresas que buscan una solución centralizada y moderna. Incluye todos los módulos administrativos con la capa de agentes ya integrada.",
    architectureSpec: "WhatsApp / Correo ⇄ 7 Agentes PRO-IA ⇄ 6 Módulos Nativos PRO-IA + PSE SUNAT",
    highlights: [
      "Suite completa con Facturación Electrónica SUNAT",
      "Costos mensuales accesibles en modelo SaaS",
    ],
    recommendedPlan: "Software Completo · S/ 690 + IGV / mes",
  },
];

export const SEVEN_AGENTS = [
  {
    code: "AG-01",
    number: "1",
    front: "FRENTE COMERCIAL & CLIENTES",
    name: "Agente de Gestión de Leads",
    description:
      "Agenda reuniones, cotiza, registra prospectos y actualiza etapas del embudo comercial en WhatsApp.",
    inputs: "Mensajes entrantes de WhatsApp, consultas web y correos de prospectos",
    outputs: "Prospecto calificado en CRM, reunión agendada y cotización preliminar",
    connectedModule: "MOD-01 · CRM & Clientes",
  },
  {
    code: "AG-02",
    number: "2",
    front: "FRENTE COMERCIAL & CLIENTES",
    name: "Requerimientos de Clientes",
    description:
      "Para distribuidoras e importadoras: contrasta inventario, verifica costos y cotiza requerimientos recurrentes.",
    inputs: "Listados de ítems B2B, códigos SKU o solicitudes de reposición de clientes",
    outputs: "Cotización formal con stock validado multialmacén y márgenes protegidos",
    connectedModule: "MOD-02 · Ventas & Cotizador + MOD-05 · Inventarios & Kardex",
  },
  {
    code: "AG-03",
    number: "3",
    front: "FRENTE COMERCIAL & CLIENTES",
    name: "Atención de OC de Clientes",
    description:
      "Recibe la Orden de Compra, valida contra precios pactados o cotización previa y la procesa para despacho.",
    inputs: "Orden de Compra del cliente en PDF, imagen o correo electrónico",
    outputs: "Pedido aprobado sin errores de precio/IGV y orden interna de despacho",
    connectedModule: "MOD-02 · Ventas & Cotizador + MOD-05 · Inventarios & Kardex",
  },
  {
    code: "AG-04",
    number: "4",
    front: "CADENA DE SUMINISTRO, FINANZAS & DIRECCIÓN",
    name: "Compras & Proveedores",
    description:
      "Consolida pedidos, solicita cotizaciones por stock mínimo, elabora comparativas y emite OC.",
    inputs: "Alertas de stock de seguridad y requerimientos internos de reposición",
    outputs: "Cuadro comparativo de proveedores y Orden de Compra emitida",
    connectedModule: "MOD-04 · Compras & Gastos + MOD-05 · Inventarios & Kardex",
  },
  {
    code: "AG-05",
    number: "5",
    front: "CADENA DE SUMINISTRO, FINANZAS & DIRECCIÓN",
    name: "Facturación & Cobranzas",
    description:
      "Emite facturas, gestiona la cobranza automática, pre-registra abonos y concilia cuentas bancarias.",
    inputs: "Despachos aprobados, RUC del cliente y constancias de abono bancario",
    outputs: "Factura/Boleta electrónica SUNAT emitida y cuenta por cobrar conciliada",
    connectedModule: "MOD-03 · Facturación SUNAT + MOD-06 · Tesorería & Bancos",
  },
  {
    code: "AG-06",
    number: "6",
    front: "CADENA DE SUMINISTRO, FINANZAS & DIRECCIÓN",
    name: "Cuentas por Pagar",
    description:
      "Recibe facturas de proveedores, cruza contra OC emitida, gestiona el calendario y concilia pagos.",
    inputs: "Comprobantes XML/PDF de proveedores y guías de recepción de almacén",
    outputs: "Factura validada contra OC, programación de vencimientos y conciliación",
    connectedModule: "MOD-04 · Compras & Gastos + MOD-06 · Tesorería & Bancos",
  },
  {
    code: "AG-07",
    number: "7",
    front: "CADENA DE SUMINISTRO, FINANZAS & DIRECCIÓN",
    name: "Agente de Informes",
    description:
      "Responde consultas sobre ventas, cobranza pendiente o flujos de caja en lenguaje natural.",
    inputs: "Preguntas directas de gerencia por WhatsApp o panel ejecutivo",
    outputs: "Indicadores al instante sobre ventas, liquidez, cobranza y rotación",
    connectedModule: "MOD-01 a MOD-06 · Consolidado Gerencial en Tiempo Real",
  },
];

export const SUITE_MODULES = [
  {
    code: "MOD-01",
    name: "CRM & Clientes",
    description: "Contactos, empresas y pipelines comerciales integrados a WhatsApp.",
    linkedAgents: ["AG-01", "AG-07"],
  },
  {
    code: "MOD-02",
    name: "Ventas & Cotizador",
    description: "Listas de precios flexibles, cotizaciones rápidas y emisión de pedidos.",
    linkedAgents: ["AG-02", "AG-03", "AG-07"],
  },
  {
    code: "MOD-03",
    name: "Facturación SUNAT",
    description: "Facturas, boletas y notas de crédito vía PSE oficial certificado.",
    linkedAgents: ["AG-05", "AG-07"],
  },
  {
    code: "MOD-04",
    name: "Compras & Gastos",
    description: "Registro de proveedores, emisión de órdenes de compra y control de recepción.",
    linkedAgents: ["AG-04", "AG-06"],
  },
  {
    code: "MOD-05",
    name: "Inventarios & Kardex",
    description: "Control multialmacén, homologación de códigos y stock de seguridad.",
    linkedAgents: ["AG-02", "AG-03", "AG-04"],
  },
  {
    code: "MOD-06",
    name: "Tesorería & Bancos",
    description: "Control de cuentas por cobrar y pagar con conciliación bancaria.",
    linkedAgents: ["AG-05", "AG-06", "AG-07"],
  },
];

export const ROI_METRICS = [
  {
    code: "KPI-01",
    figure: "-80%",
    title: "Tiempo Operativo",
    description: "Cotizaciones y órdenes atendidas en menos de 3 minutos, sin colas de espera.",
  },
  {
    code: "KPI-02",
    figure: "3×",
    title: "Capacidad Comercial",
    description:
      "Triplica el volumen de cotizaciones procesadas sin incrementar personal administrativo.",
  },
  {
    code: "KPI-03",
    figure: "0%",
    title: "Errores de Digitación",
    description:
      "Elimina discrepancias en listas de precios, códigos de producto o cálculos de IGV.",
  },
];

export const PRICING_PLANS = [
  {
    id: "comercial",
    code: "PLAN-01",
    badge: "COMERCIAL",
    name: "Módulos + Agente 1",
    subtitle: "Módulos tradicionales con gestión comercial automatizada.",
    price: "S/ 350",
    period: "+ IGV / mes",
    features: [
      "Módulos administrativos tradicionales",
      "Agente 1 de Leads en WhatsApp",
      "Cotizaciones y agenda automáticas",
    ],
    accent: "ivory",
  },
  {
    id: "solo-agentes",
    code: "PLAN-02",
    badge: "CONEXIÓN ERP",
    name: "Sólo Agentes (API)",
    subtitle: "Solo los agentes requeridos conectados a tu sistema actual.",
    price: "S/ 490",
    period: "+ IGV / mes",
    features: [
      "Agentes necesarios a elección",
      "Conexión vía API a tu ERP actual",
      "Cero migración ni cambio de software",
    ],
    accent: "cobalt",
  },
  {
    id: "software-completo",
    code: "PLAN-03",
    badge: "SUITE TOTAL",
    name: "Software Completo",
    subtitle: "Todos los módulos administrativos + suite completa de agentes.",
    price: "S/ 690",
    period: "+ IGV / mes",
    features: [
      "Los 7 Agentes de Backoffice activos",
      "Suite administrativa total + SUNAT",
      "Automatización integral llave en mano",
    ],
    accent: "signal",
  },
];
