/* info/src/app/page.tsx
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

import DoodleIcon from "@app/DoodleIcon";

import {
  page,
  hero,
  heroCentre,
  portalRing,
  avatar,
  claimText,
  emailAddress,
  title,
  tagline,
  scrollCue,
  scrollCueIcon,
  content,
  section,
  sectionHeading,
  sectionNote,
  routeList,
  route,
  routeTop,
  routeIcon,
  routeIndex,
  routeHost,
  routeTitle,
  routeDescription,
  routeEnter,
  footer,
  footerHeart,
  icon,
} from "@styles/home.css";
import { portal } from "@data/portal";
import {
  sites,
  hostOf,
} from "@data/sites";
import Arrival from "@app/Arrival";
import RouteBadge from "@app/RouteBadge";
import SubdomainList from "@app/SubdomainList";

// "01", "02", … so every route number has the same width
function routeNumber(position: number) {
  return String(position + 1).padStart(2, "0");
}

export default function Page() {
  return (
    <main className={page}>
      <header className={hero}>
        <Arrival />

        <div className={heroCentre}>
          <div className={portalRing}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={avatar}
              src={portal.avatarUrl}
              alt={`${portal.owner}'s avatar`}
              width={136}
              height={136}
            />
          </div>

          <h1 className={title}>{portal.greeting}</h1>
          <p className={tagline}>{portal.tagline}</p>
        </div>

        <a
          className={scrollCue}
          href="#routes"
        >
          scroll for the routes
          <DoodleIcon
            name="chevronsDown"
            className={scrollCueIcon}
            aria-hidden
          />
        </a>
      </header>

      <div className={content}>
        <section
          id="routes"
          className={section}
        >
          <h2 className={sectionHeading}>
            <DoodleIcon
              name="navigation"
              className={icon}
              aria-hidden
            />
            routes
          </h2>
          <p className={sectionNote}>Pick a door. They all go somewhere I made.</p>

          <ol className={routeList}>
            {sites.map((site, position) => {
              return (
                <li key={site.href}>
                  <a
                    className={route}
                    href={site.href}
                  >
                    <span className={routeTop}>
                      <DoodleIcon
                        name={site.icon}
                        className={routeIcon}
                        aria-hidden
                      />
                      <span className={routeIndex}>
                        {routeNumber(position)}
                      </span>
                    </span>
                    <span className={routeHost}>{hostOf(site.href)}</span>
                    <span className={routeTitle}>{site.title}</span>
                    <span className={routeDescription}>
                      {site.description}
                    </span>
                    <RouteBadge href={site.href} />
                    <span
                      className={routeEnter}
                      aria-hidden
                    >
                      step through
                      <DoodleIcon
                        name="arrowRight"
                        className={icon}
                      />
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </section>

        <section className={section}>
          <h2 className={sectionHeading}>
            <DoodleIcon
              name="globe"
              className={icon}
              aria-hidden
            />
            other entrances
          </h2>
          <p className={sectionNote}>Same portal, lots of front doors. they all lead here.</p>
          <SubdomainList />
          <p className={claimText}>Looking for a particular entrance? If you'd like to claim one of the subdomains I own, feel free to reach out at <a className={emailAddress} href="mailto:clove@doughmination.gay?subject=Claim%20a%20subdomain">clove@doughmination.gay</a> and we can figure something out! ^w^</p>
        </section>

        <footer className={footer}>
          made with
          <DoodleIcon
            name="heart"
            className={footerHeart}
            aria-label="love"
          />
          by {portal.owner} · © {new Date().getFullYear()} {portal.footer}
        </footer>
      </div>
    </main>
  );
}
