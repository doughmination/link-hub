/* info/src/data/sites.ts
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

import type {
  ComponentType,
  SVGProps,
} from "react";
import {
  Code,
  ClipboardNote,
  GitBranch,
  Home,
  Mail,
  Shield,
  Users,
  Globe,
  AvatarCircle,
} from "pixelarticons/react";

export type Site = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

// Edit me: add or change your sites here. Icon names: https://pixelarticons.com
export const sites: Site[] = [
  {
    title: "Doughmination Gay",
    description: "My personal website",
    href: "https://doughmination.gay",
    icon: Home,
  },
  {
    title: "CDN",
    description: "My random assets and images",
    href: "https://m.doughmination.gay",
    icon: Globe,
  },
  {
    title: "Doughmination Auth",
    description: "My auth server for public access",
    href: "https://auth.doughmination.gay",
    icon: Shield,
  },
  {
    title: "Dough Git",
    description: "My public git backup system",
    href: "https://backup.doughmination.gay",
    icon: GitBranch,
  },
  {
    title: "Pastebin",
    description: "My public dump location",
    href: "https://pastes.doughmination.gay",
    icon: ClipboardNote,
  },
  {
    title: "Doughmination Mail",
    description: "My private email service",
    href: "https://mail.doughmination.gay",
    icon: Mail,
  },
  {
    title: "Doughmination API",
    description: "Public API I have made",
    href: "https://doughmination.uk",
    icon: Code,
  },
  {
    title: "Doughmination System",
    description: "System tracker and headmate management",
    href: "https://doughmination.co.uk",
    icon: Users,
  },
  {
    title: "PKViewer",
    description: "Lookup public PluralKit systems and their members, with full customization!",
    href: "https://pkviewer.xyz",
    icon: AvatarCircle,
  },
];

export function hostOf(href: string) {
  return new URL(href).host;
}

export function siteForHost(host: string) {
  return sites.find((site) => hostOf(site.href) === host) ?? null;
}
