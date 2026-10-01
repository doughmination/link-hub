<!-- linkhub-beta/src/lib/components/DevtoolsGuard.svelte
     Copyright (c) 2026 Clove Nytrix Doughmination Twilight
     Licensed under the DASL-1.0 Licence.
     See LICENCE.md in the project root for full licence information.
-->

<script lang="ts">
	import { FileCode, Hand, X } from '@lucide/svelte';

	import { portal } from '$lib/data/portal';

	type Reason = 'keys' | 'open' | null;

	const message = "Access or Operation Denied";

	// Gap between window and viewport that means a docked devtools panel is open
	const widthGap = 160;
	const heightGap = 200;

	const pollMs = 1000;

	let reason = $state<Reason>(null);

	// F12, Ctrl+Shift+I/J/C/K (Cmd+Option on macOS), and Ctrl+U for view-source
	function isDevtoolsShortcut(event: KeyboardEvent) {
		const modifier = event.ctrlKey || event.metaKey;
		const inspectKeys = ['KeyI', 'KeyJ', 'KeyC', 'KeyK'];

		if (event.code === 'F12') {
			return true;
		}

		if (modifier && (event.shiftKey || event.altKey) && inspectKeys.includes(event.code)) {
			return true;
		}

		return modifier && event.code === 'KeyU';
	}

	function devtoolsLookOpen() {
		const gapWide = window.outerWidth - window.innerWidth > widthGap;
		const gapTall = window.outerHeight - window.innerHeight > heightGap;

		return gapWide || gapTall;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!isDevtoolsShortcut(event)) {
			return;
		}

		event.preventDefault();
		event.stopPropagation();

		// Stays up until the visitor clicks "fine, i'll behave"
		reason ??= 'keys';
	}

	$effect(() => {
		console.log(`%c${message}`, 'color: #e5383b; font-size: 20px; font-weight: bold;');

		// Size check is meaningless on touch devices, where window chrome varies wildly
		const canDetect = window.matchMedia('(pointer: fine)').matches;

		const pollTimer = setInterval(() => {
			if (!canDetect) {
				return;
			}

			if (devtoolsLookOpen()) {
				reason = 'open';
			} else if (reason === 'open') {
				reason = null;
			}
		}, pollMs);

		window.addEventListener('keydown', handleKeydown, true);

		return () => {
			window.removeEventListener('keydown', handleKeydown, true);
			clearInterval(pollTimer);
		};
	});
</script>

{#if reason}
	<div class="devtoolsOverlay" role="alert">
		<div class="devtoolsPanel">
			<Hand class="devtoolsBigIcon" aria-hidden="true" />

			<p class="devtoolsHeading">{message}</p>

			<p class="devtoolsBody">
				{reason === 'open'
					? 'close devtools and the portal comes right back.'
					: 'nice try though. the page is right where you left it.'}
			</p>

			<div class="devtoolsActions">
				<a class="devtoolsSourceLink" href={portal.sourceUrl} target="_blank" rel="noreferrer">
					<FileCode class="icon" aria-hidden="true" />
					Click for source code
				</a>

				{#if reason === 'keys'}
					<button class="devtoolsDismiss" type="button" onclick={() => (reason = null)}>
						<X class="icon" aria-hidden="true" />
						fine, i'll behave
					</button>
				{/if}
			</div>
		</div>
	</div>
{/if}
