/* info/src/app/Arrival.tsx
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

"use client";

import DoodleIcon from "@app/DoodleIcon";

import {
  arrival,
  arrivalLine,
  arrivalHost,
  arrivalRoot,
  icon,
} from "@styles/home.css";
import {
  greetingFor,
  primarySubdomain,
  rootDomain,
} from "@data/subdomains";
import { siteForHost } from "@data/sites";
import {
  useCurrentSubdomain,
  useReferrerHost,
} from "@app/useArrival";

export default function Arrival() {
  const currentSubdomain = useCurrentSubdomain() ?? primarySubdomain;
  const referrerHost = useReferrerHost();
  const referrerSite = referrerHost ? siteForHost(referrerHost) : null;

  return (
    <div className={arrival}>
      <p className={arrivalLine}>
        <DoodleIcon
          name="locationPin"
          className={icon}
          aria-hidden
        />
        <span>
          you arrived on{" "}
          <span className={arrivalHost}>{currentSubdomain}</span>
          <span className={arrivalRoot}>.{rootDomain}</span>
        </span>
      </p>

      {referrerHost && (
        <p className={arrivalLine}>
          <DoodleIcon
            name="link"
            className={icon}
            aria-hidden
          />
          <span>
            came over from{" "}
            <span className={arrivalHost}>
              {referrerSite?.title ?? referrerHost}
            </span>
          </span>
        </p>
      )}

      <p className={arrivalLine}>
        <DoodleIcon
          name="message"
          className={icon}
          aria-hidden
        />
        <span>{greetingFor(currentSubdomain)}</span>
      </p>
    </div>
  );
}
