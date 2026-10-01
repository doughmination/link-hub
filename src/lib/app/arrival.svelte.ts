/* linkhub-beta/src/lib/app/arrival.svelte.ts
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

import { subdomainFromHost } from '$lib/data/subdomains';

// Prerendered page has no request, so both stay null until readArrival runs in the browser
export const arrival = $state({
	subdomain: null as string | null,
	referrerHost: null as string | null
});

// Host of the page that linked here, ignoring links from this same host
function referrerHost() {
	if (!document.referrer) {
		return null;
	}

	const host = new URL(document.referrer).host;

	return host === window.location.host ? null : host;
}

// Host and referrer never change during a visit, so this only needs to run once on mount
export function readArrival() {
	arrival.subdomain = subdomainFromHost(window.location.hostname);
	arrival.referrerHost = referrerHost();
}
