<!-- linkhub-beta/src/routes/+page.svelte
     Copyright (c) 2026 Clove Nytrix Doughmination Twilight
     Licensed under the DASL-1.0 Licence.
     See LICENCE.md in the project root for full licence information.
-->

<script lang="ts">
	import { ArrowRight, ChevronsDown, Globe, Heart, Navigation } from '@lucide/svelte';

	import Arrival from '$lib/components/Arrival.svelte';
	import RouteBadge from '$lib/components/RouteBadge.svelte';
	import SubdomainList from '$lib/components/SubdomainList.svelte';

	import { portal } from '$lib/data/portal';
	import { sites, hostOf } from '$lib/data/sites';

	// "01", "02", … so every route number has the same width
	function routeNumber(position: number) {
		return String(position + 1).padStart(2, '0');
	}
</script>

<main class="page">
	<header class="hero">
		<Arrival />

		<div class="heroCentre">
			<div class="portalRing">
				<img
					class="avatar"
					src={portal.avatarUrl}
					alt={`${portal.owner}'s avatar`}
					width="136"
					height="136"
				/>
			</div>

			<h1 class="title">{portal.greeting}</h1>
			<p class="tagline">{portal.tagline}</p>
		</div>

		<a class="scrollCue" href="#routes">
			scroll for the routes
			<ChevronsDown class="scrollCueIcon" aria-hidden="true" />
		</a>
	</header>

	<div class="content">
		<section id="routes" class="section">
			<h2 class="sectionHeading">
				<Navigation class="icon" aria-hidden="true" />
				routes
			</h2>

			<p class="sectionNote">Pick a door. They all go somewhere I made.</p>

			<ol class="routeList">
				{#each sites as site, position (site.href)}
					<li>
						<a class="route" href={site.href}>
							<span class="routeTop">
								<site.icon class="routeIcon" aria-hidden="true" />

								<span class="routeIndex">
									{routeNumber(position)}
								</span>
							</span>

							<span class="routeHost">
								{hostOf(site.href)}
							</span>

							<span class="routeTitle">
								{site.title}
							</span>

							<span class="routeDescription">
								{site.description}
							</span>

							<RouteBadge href={site.href} />

							<span class="routeEnter" aria-hidden="true">
								step through
								<ArrowRight class="icon" />
							</span>
						</a>
					</li>
				{/each}
			</ol>
		</section>

		<section class="section">
			<h2 class="sectionHeading">
				<Globe class="icon" aria-hidden="true" />
				other entrances
			</h2>

			<p class="sectionNote">Same portal, lots of front doors. they all lead here.</p>

			<SubdomainList />

			<p class="claimText">
				Looking for a particular entrance? If you'd like to claim one of the subdomains I own, feel
				free to reach out at
				<a class="emailAddress" href="mailto:clove@doughmination.gay?subject=Claim%20a%20subdomain">
					clove@doughmination.gay
				</a>
				and we can figure something out! ^w^
			</p>
		</section>

		<footer class="footer">
			made with
			<Heart class="footerHeart" aria-label="love" role="img" />
			by {portal.owner} · © {new Date().getFullYear()}
			{portal.footer}
		</footer>
	</div>
</main>
