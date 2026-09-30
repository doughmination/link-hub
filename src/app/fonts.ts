/* info/src/app/fonts.ts
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

import { Hachi_Maru_Pop } from "next/font/google";

// Single-weight font, so weight must be set explicitly
export const mainFont = Hachi_Maru_Pop({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--main-font",
});
