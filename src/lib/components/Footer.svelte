<!-- src/lib/components/Footer.svelte
     DASL-1.2 — (c) Clove Twilight
-->

<script lang="ts">
	import '$lib/styles/footer.css';
</script>

<footer>
	<p class="footer-line">
		<span class="footer-brand">
			<img src="/favicon.svg" alt="" width="20" height="20" />
			Clove's is-a.dev
		</span>

		<span>
			made fully by hand with zero AI-generated code
			<iconsax-icon name="heart" type="bulk" size="16" class="beat"></iconsax-icon>
		</span>

		<span>Clove Twilight &copy; 2026</span>
	</p>

	<a class="no-ai" href="/" title="Read my AI statement">
		<img src='/no-ai.svg' alt="Developed by a human, not by AI" width="131" height="42" />
	</a>
</footer>
