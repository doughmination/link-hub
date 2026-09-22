/* info/src/data/subdomains.ts
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

// Parent domain every subdomain below hangs off
export const rootDomain = "is-a.dev";

// Used for canonical URLs and as the fallback name before the browser knows the host
export const primarySubdomain = "clove";

// Edit me: add or remove one subdomain per line. Nothing else needs to change.
export const subdomains = [
  "bun",
  "clove",
  "colonthree",
  "dough",
  "doughmination",
  "doughnut",
  "femboy",
  "genderfluid",
  "ghostwire",
  "goober",
  "heart",
  "light-blue",
  "light-blue-heart",
  "linux",
  "linkin",
  "meow",
  "mrrp",
  "nextjs",
  "pink",
  "pink-heart",
  "plural",
  "trans",
  "transbian",
  "transgender",
  "ts",
  "typescript",
];

// Edit me: optional line shown to visitors who came in on that subdomain
export const greetings: Record<string, string> = {
  bun: "fresh out of the oven. hi!",
  clove: "the front door. come on in.",
  colonthree: ":3",
  dough: "you knead to see this.",
  doughnut: "sweet choice of door.",
  goober: "hello fellow goober.",
  heart: "you came in through the heart. cute.",
  linux: "sudo make me a sandwich.",
  meow: "mrrp! you found the cat flap.",
  mrrp: "mrrp mrrp. welcome in.",
  nextjs: "server components not included.",
  ts: "type-safe entry confirmed.",
  typescript: "no `any` beyond this point.",
};

export function greetingFor(subdomain: string) {
  return greetings[subdomain] ?? `you took the ${subdomain} door. good choice.`;
}

export function subdomainUrl(subdomain: string) {
  return `https://${subdomain}.${rootDomain}`;
}

// Returns the subdomain part of a hostname, or null if it isn't one of ours
export function subdomainFromHost(hostname: string) {
  const suffix = `.${rootDomain}`;

  if (!hostname.endsWith(suffix)) {
    return null;
  }

  const subdomain = hostname.slice(0, -suffix.length);

  return subdomains.includes(subdomain) ? subdomain : null;
}
