<!-- linkhub-beta/src/lib/components/SubdomainList.svelte
     Copyright (c) 2026 Clove Nytrix Doughmination Twilight
     Licensed under the DASL-1.0 Licence.
     See LICENCE.md in the project root for full licence information.
-->

<script lang="ts">
	import { MapPin } from '@lucide/svelte';

	import { arrival } from '$lib/app/arrival.svelte';
	import { subdomains, subdomainUrl } from '$lib/data/subdomains';
</script>

<ul class="chipList">
	{#each subdomains as subdomain (subdomain)}
		{@const isCurrent = subdomain === arrival.subdomain}

		<li>
			<a
				class={['chip', isCurrent && 'chipCurrent']}
				href={subdomainUrl(subdomain)}
				aria-current={isCurrent ? 'page' : undefined}
				title={isCurrent ? 'you are here' : undefined}
			>
				{#if isCurrent}
					<MapPin class="icon" aria-hidden="true" />
				{/if}
				{subdomain}
			</a>
		</li>
	{/each}
</ul>
