<!-- linkhub-beta/src/lib/components/Arrival.svelte
     Copyright (c) 2026 Clove Nytrix Doughmination Twilight
     Licensed under the DASL-1.0 Licence.
     See LICENCE.md in the project root for full licence information.
-->

<script lang="ts">
	import { Link, MapPin, MessageCircle } from '@lucide/svelte';

	import { arrival } from '$lib/app/arrival.svelte';
	import { greetingFor, primarySubdomain, rootDomain } from '$lib/data/subdomains';
	import { siteForHost } from '$lib/data/sites';

	const currentSubdomain = $derived(arrival.subdomain ?? primarySubdomain);
	const referrerSite = $derived(arrival.referrerHost ? siteForHost(arrival.referrerHost) : null);
</script>

<div class="arrival">
	<p class="arrivalLine">
		<MapPin class="icon" aria-hidden="true" />

		<span>
			you arrived on
			<span class="arrivalHost">{currentSubdomain}</span><span class="arrivalRoot"
				>.{rootDomain}</span
			>
		</span>
	</p>

	{#if arrival.referrerHost}
		<p class="arrivalLine">
			<Link class="icon" aria-hidden="true" />

			<span>
				came over from
				<span class="arrivalHost">
					{referrerSite?.title ?? arrival.referrerHost}
				</span>
			</span>
		</p>
	{/if}

	<p class="arrivalLine">
		<MessageCircle class="icon" aria-hidden="true" />

		<span>{greetingFor(currentSubdomain)}</span>
	</p>
</div>
