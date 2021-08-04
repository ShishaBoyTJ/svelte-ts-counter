<script lang="ts">
	import Router from "svelte-spa-router"
	import { routes } from "./router/index"
</script>

<main>
	<Router {routes} />
</main>

<style>
	main {
		/* text-align: center; */
		padding: 8px;
		/* max-width: 240px; */
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
