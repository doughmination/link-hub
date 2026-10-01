<!-- linkhub-beta/src/lib/components/RouteBadge.svelte
     Copyright (c) 2026 Clove Nytrix Doughmination Twilight
     Licensed under the DASL-1.0 Licence.
     See LICENCE.md in the project root for full licence information.
-->

<script lang="ts">
	import { ArrowLeft } from '@lucide/svelte';

	import { arrival } from '$lib/app/arrival.svelte';
	import { hostOf } from '$lib/data/sites';

	let { href }: { href: string } = $props();
</script>

<!-- Tags the route card the visitor just came from -->
{#if arrival.referrerHost === hostOf(href)}
	<span class="routeBadge">
		<ArrowLeft class="icon" aria-hidden="true" />
		you came from here
	</span>
{/if}
