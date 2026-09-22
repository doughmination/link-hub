/* info/src/styles/theme.css.ts
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

import { createGlobalThemeContract } from "@vanilla-extract/css";

// Global contract gives literal names (color.bg -> --color-bg); Turbopack needs this
export const vars = createGlobalThemeContract(
  {
    color: {
      bg: null,
      surface: null,
      surfaceHover: null,
      border: null,
      text: null,
      muted: null,
      accent: null,
      accentBright: null,
      accentDeep: null,
    },
    font: {
      sans: null,
    },
    space: {
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
    },
    radius: {
      md: null,
      lg: null,
      full: null,
    },
  },
  (_value, path) => path.join("-"),
);

// Blood red palette. Swap hex values here to retune the whole site.
export const bloodValues = {
  color: {
    bg: "#0b090a",
    surface: "#161a1d",
    surfaceHover: "#1f1416",
    border: "#3a1417",
    text: "#f5f3f4",
    muted: "#b1a7a6",
    accent: "#ba181b",
    accentBright: "#e5383b",
    accentDeep: "#660708",
  },
  font: {
    sans: "'Comic Code', ui-monospace, monospace",
  },
  space: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "2rem",
    xl: "4rem",
  },
  radius: {
    md: "0.75rem",
    lg: "1.25rem",
    full: "999px",
  },
};
