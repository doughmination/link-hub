<!-- linkhub-beta/src/routes/+layout.svelte
     Copyright (c) 2026 Clove Nytrix Doughmination Twilight
     Licensed under the DASL-1.2 Licence.
     See LICENCE.md in the project root for full licence information.
-->

<script lang="ts">
	// Import order is the cascade order: keep tokens, then base, then page styles
	import '$lib/css/app.css';
	import '$lib/css/main.css';
	import '$lib/css/home.css';
	import '$lib/css/devtools.css';

	import { onMount } from 'svelte';
	import { setLucideProps } from '@lucide/svelte';

	import { readArrival } from '$lib/app/arrival.svelte';
	import { portal } from '$lib/data/portal';
	import { primarySubdomain, subdomainUrl } from '$lib/data/subdomains';

	let { children } = $props();

	const siteUrl = subdomainUrl(primarySubdomain);

	// Icons are sized in CSS, so nonScalingStroke (not the deprecated absoluteStrokeWidth) keeps strokes at 2.25px
	setLucideProps({
		strokeWidth: 2.25,
		nonScalingStroke: true
	});

	onMount(readArrival);
</script>

<svelte:head>
	<title>{portal.name}</title>
	<meta name="description" content={portal.tagline} />
	<meta name="theme-color" content={portal.themeColour} />
	<link rel="canonical" href={siteUrl} />
	<link rel="icon" href={portal.avatarUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={portal.name} />
	<meta property="og:description" content={portal.tagline} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:image" content={portal.avatarUrl} />

	<link rel="preconnect" href="https://m.doughmination.gay" crossorigin="" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap"
	/>
</svelte:head>

{@render children()}