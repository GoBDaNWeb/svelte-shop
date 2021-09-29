<script>
	import Main from './components/Main.svelte'
	import {Router} from 'svelte-navigator'
</script>

<Router>
	<Main/>
</Router>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer components {
		.nav-link {
			@apply text-lg font-semibold py-2 px-3 transition hover:bg-warmGray-800 hover:text-lime-400 rounded;
		}
		.nav-link.active {
			@apply bg-warmGray-800 text-lime-400
		}
		h1,h2,h3,h4 {
			@apply font-bold focus:outline-none
		}
		h4 {
			@apply text-lg
		}
		h3 {
			@apply text-xl
		}
		h2 {
			@apply text-2xl
		}
		h1 {
			@apply text-3xl
		}
	}
</style>