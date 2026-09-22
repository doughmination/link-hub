/* info/src/styles/global.css.ts
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

import {
  globalStyle,
  globalFontFace,
  assignVars,
} from "@vanilla-extract/css";

import {
  vars,
  bloodValues,
} from "./theme.css";

// Declared one by one: Turbopack's vanilla-extract plugin breaks on top-level loops
globalFontFace("Comic Code", {
  src: "url('https://m.doughmination.gay/f/Comic-Code/woff2/ComicCode-Regular.woff2') format('woff2')",
  fontWeight: 400,
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalFontFace("Comic Code", {
  src: "url('https://m.doughmination.gay/f/Comic-Code/woff2/ComicCode-Bold.woff2') format('woff2')",
  fontWeight: 700,
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalStyle(":root", {
  vars: assignVars(vars, bloodValues),
  colorScheme: "dark",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html, body", {
  minHeight: "100%",
});

globalStyle("html", {
  scrollBehavior: "smooth",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      scrollBehavior: "auto",
    },
  },
});

globalStyle("body", {
  background: `radial-gradient(ellipse at top, ${vars.color.accentDeep} 0%, ${vars.color.bg} 60%)`,
  backgroundColor: vars.color.bg,
  backgroundAttachment: "fixed",
  color: vars.color.text,
  fontFamily: vars.font.sans,
  lineHeight: 1.5,
  WebkitFontSmoothing: "antialiased",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("::selection", {
  background: vars.color.accent,
  color: vars.color.text,
});

globalStyle("*, *::before, *::after", {
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animationDuration: "0.001ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.001ms !important",
    },
  },
});
