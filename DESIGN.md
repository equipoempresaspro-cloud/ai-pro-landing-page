---
name: Agent PRO · Sistema Agéntico de Backoffice B2B (Prógresis SAC)
description: Ecosistema ejecutivo B2B fiel a la identidad corporativa de progresissac.com para Agent PRO.
colors:
  primary-blue: "#274C9B"
  primary-hover: "#1D3A78"
  primary-subtle: "#EDF3FC"
  primary-dark: "#152B59"
  primary-deep: "#0D1D3D"
  navy-panel: "#1E386D"
  navy-border: "#3B5998"
  navy-divider: "#334E85"
  contact-panel: "#1E3A7A"
  contact-border: "#4364AD"
  navy-text: "#E2EAF6"
  accent-orange: "#C2410C"
  accent-bright: "#EB6828"
  accent-hover: "#9A3412"
  accent-subtle: "#FFF5EF"
  accent-border: "#FDBA74"
  spark-blue: "#7DD3FC"
  ink-strong: "#1E293B"
  ink-body: "#334155"
  ink-muted: "#475569"
  surface-white: "#FFFFFF"
  surface-alt: "#F8FAFC"
  line-subtle: "#E2E8F0"
  line-strong: "#CBD5E1"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  control:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.4
  label:
    fontFamily: "Fira Code, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    fontFeature: "tnum"
rounded:
  sm: "12px"
  md: "14px"
  lg: "20px"
  xl: "24px"
  xxl: "28px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  xxl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent-orange}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.pill}"
    padding: "10px 22px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.primary-blue}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.primary-subtle}"
---

# Design System: Agent PRO · Sistema Agéntico de Backoffice B2B (Prógresis SAC)

## Overview

**Creative North Star: "Ecosistema Ejecutivo Prógresis SAC — Agent PRO"**

El sistema visual de **Agent PRO** extiende fielmente la identidad corporativa oficial de `https://progresissac.com/`: una arquitectura luminosa, ejecutiva y consultiva donde las superficies limpias en blanco (`#FFFFFF`), gris pizarra sutil (`#F8FAFC`) y azul hielo institucional (`#EDF3FC`) alternan estratégicamente con bloques profundos en degradado azul marino (`#152B59 -> #0D1D3D`) y azul corporativo (`#274C9B -> #152B59`).

Cada sección está diseñada para decisores B2B en Perú que evalúan automatizar su operación comercial, logística y financiera: combina la cabecera flotante tipo cápsula (`.cabecera-capsula`) con el logo oficial de Prógresis, botones píldora naranjas con flecha diagonal rotatoria (`.btn-pill-ml6`), visores interactivos de procesos y pestañas píldora sobre azul hielo.

## Colors

### Primary
- **Prógresis Primary Blue** (`#274C9B`): Color institucional principal para titulares en `Space Grotesk`, pestañas activas, bordes destacados e indicadores financieros.
- **Prógresis Primary Dark & Deep** (`#152B59` / `#0D1D3D`): Superficies marinas profundas para el bloque diferenciador de Agent PRO, el visor interactivo de los 7 agentes y el plan SaaS Suite Total.
- **Prógresis Ice Blue** (`#EDF3FC`): Superficie secundaria institucional para la sección de los 6 módulos administrativos, cabeceras de pestañas y notas de implementación.

### Secondary
- **Prógresis Accent Orange** (`#C2410C` / `#9A3412` / `#EB6828`): Botones píldora de conversión primaria ("Solicitar Auditoría Paso Cero", "Enviar y Contactar por WhatsApp"), píldoras de agente activo y subrayados de navegación con contraste WCAG AA (`>= 4.5:1`) frente a texto blanco.
- **Spark Technical Blue** (`#7DD3FC`): Acentos técnicos y códigos seriales sobre superficies marinas (`#152B59` / `#1E386D`).

### Neutral
- **Pure Executive Surface** (`#FFFFFF` / `#F8FAFC`): Fondos principales de lectura ejecutiva y paneles elevados.
- **Slate Ink Hierarchy** (`#1E293B` / `#334155` / `#475569`): Jerarquía de texto de alto contraste sobre fondos claros.
- **Structural Borders** (`#CBD5E1` / `#E2E8F0`): Bordes limpios de `1px` en paneles, tablas y formularios.

## Typography

**Display & Headline Font:** `Space Grotesk` (`700`)
**Body Font:** `Inter` (`400`, `500`, `600`, `700`, `800`)
**Label/Mono Font:** `Fira Code` (`font-variant-numeric: tabular-nums`)

## Layout & Shapes

Contenedor centrado de `1180px` (`max-w-[1180px]`) con radios corporativos de `progresissac.com`: `14px` para inputs y botones de selección, `20px` y `24px` para paneles medios, `28px` para contenedores principales y `9999px` para la cabecera cápsula, pestañas y botones píldora.
