/* info/src/styles/devtools.css.ts
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

import {
  style,
  keyframes,
} from "@vanilla-extract/css";

import { vars } from "./theme.css";

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const wave = keyframes({
  "0%, 100%": {
    transform: "rotate(0deg)",
  },
  "25%": {
    transform: "rotate(-12deg)",
  },
  "75%": {
    transform: "rotate(12deg)",
  },
});

export const overlay = style({
  position: "fixed",
  inset: 0,
  zIndex: 1000,
  display: "grid",
  placeItems: "center",
  padding: vars.space.md,
  background: "rgba(11, 9, 10, 0.85)",
  backdropFilter: "blur(12px)",
  animation: `${fadeIn} 0.2s ease-out`,
});

export const panel = style({
  maxWidth: "26rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.sm,
  padding: vars.space.lg,
  textAlign: "center",
  background: vars.color.surface,
  border: `1px solid ${vars.color.accent}`,
  borderRadius: vars.radius.lg,
  boxShadow: `0 0 48px -8px ${vars.color.accent}`,
});

export const bigIcon = style({
  width: "64px",
  height: "64px",
  color: vars.color.accentBright,
  animation: `${wave} 0.8s ease-in-out 2`,
});

export const heading = style({
  fontSize: "1.25rem",
  fontWeight: 700,
});

export const body = style({
  color: vars.color.muted,
});

export const actions = style({
  marginTop: vars.space.sm,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: vars.space.xs,
});

const button = {
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.xs,
  padding: "0.5rem 1rem",
  font: "inherit",
  color: vars.color.text,
  background: vars.color.accentDeep,
  border: `1px solid ${vars.color.accentBright}`,
  borderRadius: vars.radius.full,
  cursor: "pointer",
};

const focusRing = {
  outline: `2px solid ${vars.color.accentBright}`,
  outlineOffset: "3px",
};

export const dismiss = style({
  ...button,
  selectors: {
    "&:hover": {
      background: vars.color.accent,
    },
    "&:focus-visible": focusRing,
  },
});

// Outlined, so the dismiss button stays the main action
export const sourceLink = style({
  ...button,
  background: "transparent",
  borderColor: vars.color.border,
  selectors: {
    "&:hover": {
      borderColor: vars.color.accentBright,
      color: vars.color.accentBright,
    },
    "&:focus-visible": focusRing,
  },
});
