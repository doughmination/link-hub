/* info/src/app/SubdomainList.tsx
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

"use client";

import DoodleIcon from "@app/DoodleIcon";

import {
  chipList,
  chip,
  chipCurrent,
  icon,
} from "@styles/home.css";
import {
  subdomains,
  subdomainUrl,
} from "@data/subdomains";
import { useCurrentSubdomain } from "@app/useArrival";

export default function SubdomainList() {
  const currentSubdomain = useCurrentSubdomain();

  return (
    <ul className={chipList}>
      {subdomains.map((subdomain) => {
        const isCurrent = subdomain === currentSubdomain;

        return (
          <li key={subdomain}>
            <a
              className={isCurrent ? `${chip} ${chipCurrent}` : chip}
              href={subdomainUrl(subdomain)}
              aria-current={isCurrent ? "page" : undefined}
              title={isCurrent ? "you are here" : undefined}
            >
              {isCurrent && (
                <DoodleIcon
                  name="locationPin"
                  className={icon}
                  aria-hidden
                />
              )}
              {subdomain}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
