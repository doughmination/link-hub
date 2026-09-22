/* info/src/app/layout.tsx
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

import type {
  Metadata,
  Viewport,
} from "next";

import "@styles/global.css";

import { portal } from "@data/portal";
import DevtoolsGuard from "@app/DevtoolsGuard";
import {
  primarySubdomain,
  subdomainUrl,
} from "@data/subdomains";

const title = portal.name;

const description = portal.tagline;

const avatarUrl = portal.avatarUrl;

const siteUrl = subdomainUrl(primarySubdomain);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: avatarUrl,
  },
  openGraph: {
    type: "website",
    title,
    description,
    url: siteUrl,
    locale: "en_GB",
    images: [avatarUrl],
  },
};

export const viewport: Viewport = {
  themeColor: "#ba181b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://m.doughmination.gay"
          crossOrigin=""
        />
      </head>
      <body>
        {children}
        <DevtoolsGuard />
      </body>
    </html>
  );
}
