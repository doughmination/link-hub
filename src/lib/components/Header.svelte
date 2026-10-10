<!-- src/lib/components/Header.svelte
     DASL-1.2 — (c) Clove Twilight
-->

<script lang="ts">
	import '$lib/styles/header.css';
	import { arrival } from '$lib/scripts/arrival.svelte';
	import { greetingFor, primarySubdomain, rootDomain } from '$lib/scripts/subdomains';
</script>

<!-- Fixed-height page backdrop, so every page gets the same amount of background -->
<div class="backdrop" aria-hidden="true"></div>

<header>
	<a class="brand" href="/">
		<img src="/favicon.svg" alt="Site Favicon" width="32" height="32" />
		<span>{arrival.subdomain || primarySubdomain}.{rootDomain}</span>
	</a>
	<span>
		<iconsax-icon name="lock" type="bulk" size="24"></iconsax-icon>
		{greetingFor(arrival.subdomain || primarySubdomain)}
	</span>
</header>
