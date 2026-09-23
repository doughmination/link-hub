/* info/src/styles/home.css.ts
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

import {
  style,
  keyframes,
} from "@vanilla-extract/css";

import { vars } from "./theme.css";

const riseIn = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(12px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const spin = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

const pulse = keyframes({
  "0%, 100%": {
    opacity: 0.45,
    transform: "scale(1)",
  },
  "50%": {
    opacity: 0.8,
    transform: "scale(1.08)",
  },
});

const bob = keyframes({
  "0%, 100%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(6px)",
  },
});

const heartbeat = keyframes({
  "0%, 100%": {
    transform: "scale(1)",
  },
  "15%": {
    transform: "scale(1.25)",
  },
  "30%": {
    transform: "scale(1)",
  },
});

const focusRing = {
  outline: `2px solid ${vars.color.accentBright}`,
  outlineOffset: "3px",
};

// Keeps only a thin band at the edge of a circle, turning a gradient disc into a ring
const ringMask = "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px))";

const ringSize = "220px";

// Shared by every inline doodle icon
export const icon = style({
  width: "1.25em",
  height: "1.25em",
  flexShrink: 0,
});

export const page = style({
  display: "flex",
  flexDirection: "column",
});

export const hero = style({
  position: "relative",
  minHeight: "100dvh",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  justifyItems: "center",
  gap: vars.space.lg,
  padding: `${vars.space.lg} ${vars.space.md}`,
  textAlign: "center",
});

export const arrival = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.35rem",
  padding: `${vars.space.sm} ${vars.space.md}`,
  fontSize: "0.85rem",
  color: vars.color.muted,
  background: "rgba(22, 26, 29, 0.6)",
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  backdropFilter: "blur(6px)",
  animation: `${riseIn} 0.6s ease-out both`,
});

export const arrivalLine = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
  textAlign: "left",
  overflowWrap: "anywhere",
});

export const arrivalHost = style({
  color: vars.color.accentBright,
  fontWeight: 700,
});

export const arrivalRoot = style({
  color: vars.color.muted,
});

export const heroCentre = style({
  alignSelf: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.lg,
  animation: `${riseIn} 0.6s ease-out 0.1s both`,
});

export const portalRing = style({
  position: "relative",
  width: ringSize,
  height: ringSize,
  display: "grid",
  placeItems: "center",
  "::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: vars.radius.full,
    background: `conic-gradient(${vars.color.accentDeep}, ${vars.color.accentBright}, ${vars.color.accent}, ${vars.color.accentDeep})`,
    mask: ringMask,
    WebkitMask: ringMask,
    animation: `${spin} 6s linear infinite`,
  },
  "::after": {
    content: '""',
    position: "absolute",
    inset: "-24px",
    zIndex: -1,
    borderRadius: vars.radius.full,
    background: `radial-gradient(circle, ${vars.color.accent} 0%, transparent 65%)`,
    filter: "blur(18px)",
    animation: `${pulse} 4s ease-in-out infinite`,
  },
});

export const avatar = style({
  width: "136px",
  height: "136px",
  borderRadius: vars.radius.full,
  border: `2px solid ${vars.color.border}`,
});

export const title = style({
  fontSize: "clamp(2rem, 7vw, 3.5rem)",
  fontWeight: 700,
  lineHeight: 1.1,
  textShadow: `0 0 24px ${vars.color.accentDeep}`,
});

export const tagline = style({
  maxWidth: "32rem",
  color: vars.color.muted,
});

export const scrollCue = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.25rem",
  padding: vars.space.xs,
  fontSize: "0.8rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: vars.color.muted,
  borderRadius: vars.radius.md,
  transition: "color 0.2s",
  selectors: {
    "&:hover": {
      color: vars.color.accentBright,
    },
    "&:focus-visible": focusRing,
  },
});

export const scrollCueIcon = style([
  icon,
  {
    width: "28px",
    height: "28px",
    color: vars.color.accentBright,
    animation: `${bob} 1.6s ease-in-out infinite`,
  },
]);

export const content = style({
  width: "100%",
  maxWidth: "64rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xl,
  padding: `${vars.space.lg} ${vars.space.md} ${vars.space.lg}`,
});

export const section = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
  scrollMarginTop: vars.space.lg,
});

export const sectionHeading = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  fontSize: "0.85rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: vars.color.accentBright,
  "::after": {
    content: '""',
    flex: 1,
    height: "1px",
    background: `linear-gradient(to right, ${vars.color.accentDeep}, transparent)`,
  },
});

export const sectionNote = style({
  marginBottom: vars.space.xs,
  color: vars.color.muted,
});

export const routeList = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(17rem, 1fr))",
  gap: vars.space.md,
  listStyle: "none",
});

export const route = style({
  position: "relative",
  height: "100%",
  minHeight: "13rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.35rem",
  padding: vars.space.md,
  overflow: "hidden",
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
  "::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: `radial-gradient(circle at 100% 0%, ${vars.color.accentDeep} 0%, transparent 60%)`,
    opacity: 0,
    transition: "opacity 0.2s",
    pointerEvents: "none",
  },
  selectors: {
    "&:hover": {
      borderColor: vars.color.accent,
      transform: "translateY(-3px)",
      boxShadow: `0 12px 32px -12px ${vars.color.accent}`,
    },
    "&:hover::before": {
      opacity: 1,
    },
    "&:focus-visible": focusRing,
  },
});

export const routeTop = style({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: vars.space.xs,
});

export const routeIcon = style([
  icon,
  {
    width: "40px",
    height: "40px",
    padding: "6px",
    color: vars.color.accentBright,
    background: vars.color.bg,
    border: `1px solid ${vars.color.border}`,
    borderRadius: vars.radius.md,
    transition: "border-color 0.2s",
    selectors: {
      [`${route}:hover &`]: {
        borderColor: vars.color.accent,
      },
    },
  },
]);

export const routeIndex = style({
  fontSize: "2rem",
  fontWeight: 700,
  lineHeight: 1,
  color: vars.color.border,
  transition: "color 0.2s",
  selectors: {
    [`${route}:hover &`]: {
      color: vars.color.accent,
    },
  },
});

export const routeHost = style({
  position: "relative",
  fontSize: "0.75rem",
  color: vars.color.accentBright,
});

export const routeTitle = style({
  position: "relative",
  fontSize: "1.1rem",
  fontWeight: 700,
});

export const routeDescription = style({
  position: "relative",
  fontSize: "0.9rem",
  color: vars.color.muted,
});

export const routeBadge = style({
  position: "relative",
  alignSelf: "flex-start",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.35rem",
  marginTop: vars.space.xs,
  padding: "0.2rem 0.6rem",
  fontSize: "0.75rem",
  background: vars.color.accentDeep,
  border: `1px solid ${vars.color.accentBright}`,
  borderRadius: vars.radius.full,
});

export const routeEnter = style({
  position: "relative",
  marginTop: "auto",
  paddingTop: vars.space.sm,
  display: "inline-flex",
  alignItems: "center",
  gap: "0.35rem",
  fontSize: "0.8rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: vars.color.muted,
  transition: "color 0.2s, transform 0.2s",
  selectors: {
    [`${route}:hover &`]: {
      color: vars.color.accentBright,
      transform: "translateX(4px)",
    },
  },
});

export const chipList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.xs,
  listStyle: "none",
});

export const chip = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.3rem",
  padding: "0.3rem 0.8rem",
  fontSize: "0.85rem",
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.full,
  transition: "border-color 0.15s, color 0.15s",
  selectors: {
    "&:hover": {
      borderColor: vars.color.accent,
      color: vars.color.accentBright,
    },
    "&:focus-visible": focusRing,
  },
});

export const chipCurrent = style({
  background: vars.color.accentDeep,
  borderColor: vars.color.accentBright,
});

export const footer = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.35rem",
  paddingTop: vars.space.lg,
  fontSize: "0.85rem",
  color: vars.color.muted,
  borderTop: `1px solid ${vars.color.border}`,
});

export const footerHeart = style([
  icon,
  {
    color: vars.color.accentBright,
    animation: `${heartbeat} 1.4s ease-in-out infinite`,
  },
]);

export const claimText = style({
  color: vars.color.muted,
  fontSize: "0.75rem"
});

export const emailAddress = style([
  
  {
    color: vars.color.accentBright
  }
])