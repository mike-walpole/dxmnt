<script>
	import { urlFor } from '$lib/utils/image';
	import Footer from '../lib/components/footer.svelte';
	import Header from '../lib/components/header.svelte';
</script>

<Header />

<div class="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto font-league uppercase gap-4">
	<a class="relative max-w-xl mx-auto mt-20 h-64 w-64 m-4" href="/kobiety">
		<div>
			<img class="h-64 w-64 object-cover mr-4" src="/welcome-page-image-ww.png" alt="Random " />
		</div>
		<div class="h-64 w-64 absolute inset-0 flex items-center justify-center">
			<h2 class="text-white text-3xl font-bold">Kobiety</h2>
		</div>
	</a>
	<a class="relative max-w-xl mx-auto mt-20 h-64 w-64" href="/mezczyzni">
		<div>
			<img class="h-64 w-64 object-cover" src="/welcome-page-image-mw.png" alt="Random " />
		</div>
		<div class=" h-64 w-64 absolute inset-0 flex items-center justify-center">
			<h2 class="text-white text-3xl font-bold">Męzczyźni</h2>
		</div>
	</a>
	<a class="relative max-w-xl mx-auto mt-20 h-64 w-64" href="/akcesoria">
		<div>
			<img class="h-64 w-64 object-cover" src="accessories.avif" alt="Random " />
		</div>
		<div class=" h-64 w-64 absolute inset-0 flex items-center justify-center">
			<h2 class="text-white text-3xl font-bold">Akcesoria</h2>
		</div>
	</a>
	<a class="relative max-w-xl mx-auto mt-20 h-64 w-64" href="/dzieci">
		<div>
			<img class="h-64 w-64 object-cover" src="/welcome-page-image-kw.png" alt="Random " />
		</div>
		<div class=" h-64 w-64 absolute inset-0 flex items-center justify-center">
			<h2 class="text-white text-3xl font-bold">Dzieci</h2>
		</div>
	</a>
</div>

<Footer />
