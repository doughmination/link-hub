/* info/src/app/useArrival.ts
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

"use client";

import { useSyncExternalStore } from "react";

import { subdomainFromHost } from "@data/subdomains";

// Host and referrer never change during a visit, so there is nothing to subscribe to
function subscribe() {
  return () => {};
}

// Static export has no request, so the build always renders "unknown"
function getServerSnapshot() {
  return null;
}

function getSubdomainSnapshot() {
  return subdomainFromHost(window.location.hostname);
}

// Host of the page that linked here, ignoring links from this same host
function getReferrerSnapshot() {
  if (!document.referrer) {
    return null;
  }

  const referrerHost = new URL(document.referrer).host;

  return referrerHost === window.location.host ? null : referrerHost;
}

export function useCurrentSubdomain() {
  return useSyncExternalStore(
    subscribe,
    getSubdomainSnapshot,
    getServerSnapshot,
  );
}

export function useReferrerHost() {
  return useSyncExternalStore(
    subscribe,
    getReferrerSnapshot,
    getServerSnapshot,
  );
}
