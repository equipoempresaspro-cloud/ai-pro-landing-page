---
name: PRO-IA · Sistema Agéntico de Backoffice B2B
description: Pizarra ejecutiva de operaciones y libro mayor de auditoría B2B para Prógresis SAC.
colors:
  cobalt-command: "#0B2D9E"
  cobalt-deep: "#08227A"
  cobalt-midnight: "#091536"
  cobalt-tint-text: "#DCE6FF"
  signal-vermilion: "#C23800"
  signal-vermilion-deep: "#9E2D00"
  signal-spark: "#FF7A33"
  sheet-ground: "#EDF2FA"
  sheet-elevated: "#F5F8FD"
  sheet-header: "#DFE7F5"
  sheet-rule: "#B8C7E6"
  ink-secondary: "#24345E"
  pure-white: "#FFFFFF"
typography:
  display:
    fontFamily: "Barlow Condensed, Archivo, sans-serif"
    fontSize: "4.75rem"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Barlow Condensed, Archivo, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Fira Code, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    fontFeature: "tnum"
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  xxl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.signal-vermilion}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.signal-vermilion-deep}"
  button-secondary:
    backgroundColor: "{colors.cobalt-command}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
  button-secondary-hover:
    backgroundColor: "{colors.cobalt-deep}"
---

# Design System: PRO-IA · Sistema Agéntico de Backoffice B2B

## Overview

**Creative North Star: "La Pizarra Ejecutiva de Operaciones & Auditoría B2B"**

El sistema visual de PRO-IA (Prógresis SAC) trata la interfaz como un pliego arquitectónico de control operativo y auditoría financiera B2B. En lugar de recurrir a plantillas SaaS de tarjetas flotantes con bordes redondeados e íconos decorativos, la superficie divide el espacio mediante bloques estructurales en azul cobalto institucional y hojas técnicas regladas de `1px` donde los procesos comerciales, logísticos y financieros se auditan paso a paso.

La densidad está calibrada para gerentes generales y directores de operaciones en Perú que evalúan flujos de órdenes de compra, facturación electrónica SUNAT y conciliación bancaria: cada sección combina titulares condensados de escala dramática con celdas tabulares precisas e índices seriales permanentes (`AG-01` a `AG-07`, `MOD-01` a `MOD-06`, `PLAN-01` a `PLAN-03`).

**Key Characteristics:**
- Contraste estructural entre campos a sangre en Azul Cobalto Institucional (`#0B2D9E`) y pliegos técnicos tintados en cobalto frío (`#EDF2FA` / `#F5F8FD`).
- Geometría ortogonal estricta (`0px` border-radius) gobernada por costuras visibles de `1px` (`#B8C7E6` en pliego claro, `#2347BA` en cobalto).
- Escala tipográfica industrial con `Barlow Condensed` para titulares y cifras de impacto (`-80%`, `3×`, `0%`), `Archivo` para títulos de módulo, `Public Sans` para lectura fluida y `Fira Code` exclusivamente para códigos, tiempos y precios en Soles (`S/`).
- Cero etiquetas decorativas sobre titulares (sin kickers ni eyebrows): los encabezados abren cada bloque por su propio peso.

## Colors

La paleta articula la identidad corporativa de Prógresis SAC mediante un sistema bicolor de alta autoridad (cobalto profundo y bermellón señal) donde cada superficie neutra está tintada desde el propio azul cobalto para mantener cohesión térmica y cumplir contraste WCAG AA en todos los textos.

### Primary
- **Prógresis Cobalt Command** (`#0B2D9E`): Superficie dominante del primer viewport, cabeceras de columna comparativa, fichas técnicas de agentes y cierre ejecutivo de El Paso Cero.
- **Prógresis Cobalt Deep** (`#08227A`): Barra de navegación superior fija, sub-contenedores sobre cobalto y estados hover de controles institucionales.
- **Cobalt Midnight Ink** (`#091536`): Tinta principal sobre pliegos claros, cabeceras de circuito operativo y simulador financiero.

### Secondary
- **Signal Vermilion** (`#C23800`): Botones de conversión primaria ("Agendar El Paso Cero", "Enviar Solicitud por WhatsApp"), nodos activos del circuito de agentes y sellos de estado verificado con contraste AA (`5.35:1`) frente a texto blanco.
- **Signal Vermilion Deep** (`#9E2D00`): Estado `:hover` y `:active` de acciones primarias y textos de alerta sobre fondos cálidos.
- **Signal Spark** (`#FF7A33`): Acentos gráficos no textuales (trazos de circuito activo, reglas divisoras e íconos puntuales sobre fondo cobalto oscuro).

### Neutral
- **Technical Cobalt Sheet** (`#EDF2FA`): Fondo base del documento que reemplaza el blanco genérico o el crema cálido por un papel técnico frío derivado del azul institucional.
- **Elevated Ledger Sheet** (`#F5F8FD`): Celdas activas de tabla, filas de módulos y contenedores de formulario.
- **Ledger Header Wash** (`#DFE7F5`): Cabeceras de tabla comparativa, barras de síntesis y pestañas inactivas.
- **Structural Hairline Rule** (`#B8C7E6`): Líneas divisorias continuas de `1px` que estructuran todas las tablas y matrices.
- **Cobalt Tinted Secondary Ink** (`#24345E` sobre claro / `#DCE6FF` sobre cobalto): Texto secundario tintado desde el azul de fondo; nunca se emplea gris neutro puro.

### Named Rules
**The Tinted Ground Rule.** Ninguna superficie secundaria ni texto de apoyo utiliza grises neutros puros ni cremas cálidos; todo fondo claro (`#EDF2FA`, `#F5F8FD`, `#DFE7F5`) y todo texto secundario (`#24345E`, `#DCE6FF`) lleva tinte azul cobalto.

**The AA Signal Rule.** Cuando el acento naranja/bermellón porta texto blanco, debe usar obligatoriamente `#C23800` (o más oscuro) para garantizar una relación de contraste mínima de `4.5:1`.

## Typography

**Display Font:** `Barlow Condensed` (con fallback a `Archivo`, `sans-serif`)
**Headline / Title Font:** `Archivo` (con fallback a `sans-serif`)
**Body Font:** `Public Sans` (con fallback a `-apple-system`, `BlinkMacSystemFont`, `sans-serif`)
**Label/Mono Font:** `Fira Code` (con `font-variant-numeric: tabular-nums`)

**Character:** Un emparejamiento de autoridad industrial y precisión contable: `Barlow Condensed` entrega impacto vertical inmediato en titulares e indicadores de retorno, `Public Sans` asegura lectura clara en descripciones técnicas B2B y `Fira Code` alinea códigos de catálogo, tiempos de ejecución y tarifas en Soles.

### Hierarchy
- **Display** (`800`, `3.25rem` a `4.75rem`, `line-height: 0.94`, `letter-spacing: -0.02em`): Titular principal del primer viewport y cifras monumentales de ROI (`-80%`, `3×`, `0%`, `S/ 350`, `S/ 490`, `S/ 690`).
- **Headline** (`800`, `2.25rem` a `3rem`, `line-height: 1.02`, `letter-spacing: -0.02em`): Encabezados de sección (`<h2>`) que abren cada bloque sin ningún texto encima.
- **Title** (`700`, `1.125rem` a `1.5rem`, `line-height: 1.2`, `letter-spacing: -0.025em`): Nombres de los 7 agentes, los 6 módulos administrativos y las opciones de implementación (`<h3>`).
- **Body** (`400` / `500`, `0.875rem` a `1.125rem`, `line-height: 1.6`, medida máxima `68ch`): Explicaciones operativas, entradas/salidas de agentes y notas contractuales con `text-wrap: pretty`.
- **Label** (`600`, `0.75rem`, `line-height: 1.4`, `tabular-nums`): Índices seriales (`AG-01`–`AG-07`, `MOD-01`–`MOD-06`, `COMP-01`–`COMP-03`), deltas de tiempo (`+18s`) y precios.

### Named Rules
**The Self-Sufficient Heading Rule.** Todo `<h1>`, `<h2>` y `<h3>` debe abrir su contenedor como primer hijo directo; están prohibidos los kickers o eyebrows encima de los titulares.

**The Strict Monospace Rule.** `Fira Code` se reserva exclusivamente para datos cuantitativos, códigos seriales, marcas de tiempo, documentos SUNAT y montos en Soles (`S/`), nunca como decoración estilística en párrafos.

## Layout

El layout se organiza sobre un contenedor máximo de `1440px` (`max-w-[1440px]`) con una retícula estructural de 12 columnas en desktop (`grid-cols-12`) que se pliega limpiamente a 1 columna en móvil:

- **Primer Viewport Asimétrico (5 + 7 columnas):** La columna izquierda (5 columnas) sostiene la tesis ejecutiva sobre fondo cobalto (`#0B2D9E`), mientras la columna derecha (7 columnas) aloja la Pizarra de Auditoría Operativa en vivo sobre pliego técnico (`#EDF2FA`).
- **Tablas de Balance y Matrices Regladas:** Las secciones de comparativa ERP (2 + 5 + 5 columnas), ecosistema de 7 agentes (8 + 4 columnas), suite de 6 módulos (2 + 3 + 4 + 3 columnas) y planes SaaS (3 columnas iguales divididas por bordes de `1px`) comparten el mismo ritmo vertical (`py-16 lg:py-24` entre secciones, `p-5 sm:p-6` o `p-6 sm:p-8` dentro de celdas).

## Elevation & Depth

El sistema es arquitectónico y plano por defecto: la jerarquía espacial se construye mediante cambios de tono de superficie (`#0B2D9E` vs. `#EDF2FA` vs. `#F5F8FD`) y divisiones continuas de `1px` (`#B8C7E6` / `#2347BA`), reservando una única sombra direccional suave para los pliegos de auditoría y despacho cuando se superponen sobre el campo azul cobalto.

### Shadow Vocabulary
- **Ledger Sheet Elevation** (`box-shadow: 0 18px 40px -16px rgba(6, 24, 88, 0.24)`): Aplicada únicamente al pliego de auditoría en vivo del primer viewport y al configurador de El Paso Cero sobre fondo cobalto.

### Named Rules
**The Ruled Seam Rule.** La separación entre elementos hermanos dentro de una matriz se resuelve con bordes compartidos de `1px` (`divide-x` / `divide-y` sobre un contenedor con `border`), nunca con tarjetas sueltas separadas por sombras individuales.

## Shapes

Toda la geometría del sistema utiliza esquinas rectas a `90°` (`border-radius: 0px`), evocando pliegos técnicos, manifiestos de despacho y estados financieros auditados. Los bordes son siempre de `1px solid` a todo el perímetro de la celda o tabla, evitando franjas laterales gruesas (`border-left` > `1px`) o recortes poligonales decorativos.

## Components

### Buttons
- **Shape:** Esquinas rectas (`0px` radius) con alineación interna entre etiqueta e ícono de acción.
- **Primary (`button-primary`):** Fondo `#C23800`, texto `#FFFFFF` en `Public Sans` semibold (`600`), padding `16px 24px` (`px-6 py-4` en hero, `px-4 py-2` en barra superior).
- **Hover / Focus:** Transición de color a `#9E2D00` y anillo de foco visible de `2px solid #C23800` con `outline-offset: 2px`.
- **Secondary (`button-secondary`):** Fondo `#0B2D9E` (o `#08227A` sobre cobalto) con borde `1px solid #2E56D8` y texto `#FFFFFF`.

### Chips
- **Style:** Sellos rectangulares compactos (`px-2 py-0.5` o `px-2.5 py-1`, `0px` radius) en tipografía tabular `Fira Code` (`12px`, `600`).
- **State:** En reposo usan `#0B2D9E` con texto `#FFFFFF` o `#DCE6FF` con texto `#0B2D9E`; el estado activo o seleccionado cambia a `#C23800` con texto `#FFFFFF`.

### Cards / Containers
- **Corner Style:** `0px` radius en todos los contenedores.
- **Background:** `#F5F8FD` y `#EDF2FA` para celdas operativas; `#0B2D9E` y `#091536` para paneles de inspección técnica y simuladores.
- **Shadow Strategy:** Plano sobre pliego claro; `shadow-ledger` únicamente cuando el contenedor descansa sobre el campo cobalto.
- **Border:** `1px solid #B8C7E6` en superficies claras; `1px solid #2E56D8` en superficies cobalto.
- **Internal Padding:** `20px` a `32px` (`p-5` a `p-8`) según la jerarquía del bloque.

### Inputs / Fields
- **Style:** Campos rectangulares (`0px` radius) con fondo `#F5F8FD`, borde `1px solid #B8C7E6`, texto `#091536` y placeholder `#3E507D`.
- **Focus:** Contorno `2px solid #C23800` con `outline-offset: 2px` y `caret-color: #C23800`.

### Navigation
- **Style:** Barra superior fija (`h-16`) en `#08227A` con borde inferior `#2347BA`, emblema geométrico SVG a la izquierda, enlaces de anclaje en `#DCE6FF` (`hover:text-white`) al centro y teléfono directo más CTA `#C23800` a la derecha.

### Pizarra de Auditoría Operativa & Circuito de 7 Agentes
- **Character:** El componente firma del sistema combina pestañas de casos B2B reales, fila de evidencia del disparador entrante, pasos de ejecución numerados por código de agente (`AG-01`–`AG-07`) y barra inferior de comprobante SUNAT emitido, conectado visualmente con la pista SVG animada (`stroke-dasharray: 6 6`) de la sección de agentes.

## Do's and Don'ts

### Do:
- **Do** iniciar cada bloque o celda con el titular (`<h1>`, `<h2>`, `<h3>`) como primer elemento directo y colocar los códigos seriales (`AG-01`, `MOD-01`, `PLAN-01`) al costado o debajo.
- **Do** mantener todas las superficies claras dentro de la gama fría tintada en cobalto (`#EDF2FA`, `#F5F8FD`, `#DFE7F5`) con bordes `#B8C7E6`.
- **Do** usar `Fira Code` con `tabular-nums` para todos los precios en Soles (`S/ 350`, `S/ 490`, `S/ 690`, `S/ 1,790`), porcentajes (`-80%`, `0%`), multiplicadores (`3×`) y códigos de documento (`F001-009482`).

### Don't:
- **Don't** colocar etiquetas pequeñas en mayúsculas (kickers o eyebrows) encima de los titulares.
- **Don't** usar tarjetas repetidas con íconos dentro de recuadros redondeados ni anidar tarjetas dentro de tarjetas.
- **Don't** usar texto blanco sobre naranjas claros (`#F95715` o `#FF7A33`) donde el contraste caiga por debajo de `4.5:1`; para texto blanco sobre acento cálido usa siempre `#C23800` o `#9E2D00`.
- **Don't** usar fondos crema/beige (`#F5F3EE`, `#FAF7F2`) ni rejillas decorativas CSS de fondo (`linear-gradient` grid).
