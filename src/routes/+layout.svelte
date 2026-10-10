<!-- linkhub-beta/src/routes/+layout.svelte
     Copyright (c) 2026 Clove Nytrix Doughmination Twilight
     Licensed under the DASL-1.2 Licence.
     See LICENCE.md in the project root for full licence information.
-->

<script lang="ts">
	// Components
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	// Themes
	import '$lib/styles/global.css';
	import '$lib/styles/theme.css';
	import '$lib/styles/fonts.css';
	// Scripts
	import { readArrival } from '$lib/scripts/arrival.svelte';

	// Other imports
	import { onMount } from 'svelte';

	// In-page scripts
	let { children } = $props();
	onMount(readArrival);
</script>

<svelte:head>
	<title>Clove's Portal</title>
	<meta name="description" content="" />
	<meta name="theme-color" content="" />
	<link rel="canonical" href="" />
	<link rel="icon" href="/favicon.svg" />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="" />
	<meta property="og:description" content="" />
	<meta property="og:url" content="" />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:image" content="/favicon.png" />

	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap"
	/>
</svelte:head>

<Header />
{@render children()}
<Footer />
