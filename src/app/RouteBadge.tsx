/* info/src/app/RouteBadge.tsx
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

"use client";

import { Undo } from "pixelarticons/react";

import {
  routeBadge,
  icon,
} from "@styles/home.css";
import { hostOf } from "@data/sites";
import { useReferrerHost } from "@app/useArrival";

// Tags the route card the visitor just came from
export default function RouteBadge({ href }: { href: string }) {
  const referrerHost = useReferrerHost();

  if (referrerHost !== hostOf(href)) {
    return null;
  }

  return (
    <span className={routeBadge}>
      <Undo
        className={icon}
        aria-hidden
      />
      you came from here
    </span>
  );
}
