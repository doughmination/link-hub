/* info/src/app/DevtoolsGuard.tsx
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

"use client";

import {
  useEffect,
  useState,
} from "react";
import {
  Close,
  Code,
  Hand,
} from "pixelarticons/react";

import {
  overlay,
  panel,
  bigIcon,
  heading,
  body,
  actions,
  dismiss,
  sourceLink,
} from "@styles/devtools.css";
import { icon } from "@styles/home.css";
import { portal } from "@data/portal";

const message = "yeah no, you're not doing this lol";

// Gap between window and viewport that means a docked devtools panel is open
const widthGap = 160;
const heightGap = 200;

const pollMs = 1000;

type Reason = "keys" | "open" | null;

// F12, Ctrl+Shift+I/J/C/K (Cmd+Option on macOS), and Ctrl+U for view-source
function isDevtoolsShortcut(event: KeyboardEvent) {
  const modifier = event.ctrlKey || event.metaKey;
  const inspectKeys = [
    "KeyI",
    "KeyJ",
    "KeyC",
    "KeyK",
  ];

  if (event.code === "F12") {
    return true;
  }

  if (modifier && (event.shiftKey || event.altKey) && inspectKeys.includes(event.code)) {
    return true;
  }

  return modifier && event.code === "KeyU";
}

function devtoolsLookOpen() {
  const gapWide = window.outerWidth - window.innerWidth > widthGap;
  const gapTall = window.outerHeight - window.innerHeight > heightGap;

  return gapWide || gapTall;
}

export default function DevtoolsGuard() {
  const [reason, setReason] = useState<Reason>(null);

  useEffect(() => {
    console.log(
      `%c${message}`,
      "color: #e5383b; font-size: 20px; font-weight: bold;",
    );

    function handleKeydown(event: KeyboardEvent) {
      if (!isDevtoolsShortcut(event)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      // Stays up until the visitor clicks "fine, i'll behave"
      setReason((current) => current ?? "keys");
    }

    // Size check is meaningless on touch devices, where window chrome varies wildly
    const canDetect = window.matchMedia("(pointer: fine)").matches;

    const pollTimer = setInterval(() => {
      if (!canDetect) {
        return;
      }

      const open = devtoolsLookOpen();

      setReason((current) => {
        if (open) {
          return "open";
        }

        return current === "open" ? null : current;
      });
    }, pollMs);

    window.addEventListener("keydown", handleKeydown, true);

    return () => {
      window.removeEventListener("keydown", handleKeydown, true);
      clearInterval(pollTimer);
    };
  }, []);

  if (!reason) {
    return null;
  }

  return (
    <div
      className={overlay}
      role="alert"
    >
      <div className={panel}>
        <Hand
          className={bigIcon}
          aria-hidden
        />
        <p className={heading}>{message}</p>
        <p className={body}>
          {reason === "open"
            ? "close devtools and the portal comes right back."
            : "nice try though. the page is right where you left it."}
        </p>

        <div className={actions}>
          <a
            className={sourceLink}
            href={portal.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Code
              className={icon}
              aria-hidden
            />
            Click for source code
          </a>

          {reason === "keys" && (
            <button
              className={dismiss}
              type="button"
              onClick={() => setReason(null)}
            >
              <Close
                className={icon}
                aria-hidden
              />
              fine, i&apos;ll behave
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
