<!-- src/routes/+page.svelte
     Copyright (c) 2026 Clove Nytrix Doughmination Twilight
     Licensed under the DASL-1.2 Licence.
     See LICENCE.md in the project root for full licence information.
-->

<script lang="ts">
	import '$lib/styles/index.css';

	import { arrival } from '$lib/scripts/arrival.svelte';
	import { sites, hostOf } from '$lib/scripts/sites';
	import { rootDomain, subdomains, subdomainUrl } from '$lib/scripts/subdomains';
</script>

<main class="page">
	<section class="intro">
		<p class="eyebrow">link hub</p>
		<h1>Hi! I'm Clove</h1>
		<p class="lede">
			This is my little corner of the internet. Everything I make lives just through here.
		</p>
	</section>

	<section class="section">
		<h2 class="section-heading">
			<iconsax-icon name="global" type="bulk" size="20"></iconsax-icon>
			Sites
		</h2>

		<ul class="site-grid">
			{#each sites as site (site.href)}
				<li>
					<a class="site" href={site.href}>
						<span class="site-icon">
							<iconsax-icon name={site.icon} type="bulk" size="22"></iconsax-icon>
						</span>

						<span class="site-text">
							<span class="site-title">{site.title}</span>
							<span class="site-description">{site.description}</span>
							<span class="site-host">{hostOf(site.href)}</span>
						</span>

						<span class="site-arrow" aria-hidden="true">
							<iconsax-icon name="arrow-right-02" type="linear" size="18"></iconsax-icon>
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>

	<section class="section">
		<h2 class="section-heading">
			<iconsax-icon name="link" type="bulk" size="20"></iconsax-icon>
			Other doors
		</h2>

		<p class="section-note">Every one of these lands you right here.</p>

		<ul class="door-list">
			{#each subdomains as subdomain (subdomain)}
				<li>
					<a
						class="door"
						class:current={subdomain === arrival.subdomain}
						href={subdomainUrl(subdomain)}
					>
						{subdomain}<span class="door-root">.{rootDomain}</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</main>
