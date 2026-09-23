/* info/src/app/DoodleIcon.tsx
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

import type { SVGProps } from "react";

import {
  doodleIcons,
  type DoodleName,
} from "@data/doodle-icons";

type DoodleIconProps = SVGProps<SVGSVGElement> & {
  name: DoodleName;
};

// Keep only the <path> tags: drops the clip-path wrapper so pasted ids never clash
function parseDoodle(rawSvg: string) {
  const viewBox = rawSvg.match(/viewBox="([^"]+)"/)?.[1] ?? "0 0 160 160";
  const paths = rawSvg.match(/<path[^>]*\/>/g) ?? [];

  const markup = paths
    .join("")
    .replaceAll('fill="black"', 'fill="currentColor"');

  return {
    viewBox,
    markup,
  };
}

export default function DoodleIcon({
  name,
  ...svgProps
}: DoodleIconProps) {
  const {
    viewBox,
    markup,
  } = parseDoodle(doodleIcons[name]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="none"
      {...svgProps}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
