<script>
	export let data;
	import { page } from '$app/stores';
	import { urlFor } from '$lib/utils/image';
	import Footer from '../../../lib/components/footer.svelte';
	import Header from '../../../lib/components/header.svelte';
</script>

<Header />

<div class="flex flex-row max-w-4xl mx-auto overflow-x-auto">
	{#each data.post.images as image}
		<img
			class="w-full h-full object-contain p-2"
			src={urlFor(image).width(300).height(300).format('webp').url()}
			alt="Cover image for {data.nazwa}"
			rel="preload"
			as="image"
		/>
	{/each}
</div>
<div class="max-w-4xl mx-auto">
	<p class="font-league text-2xl uppercase text-center">{data.post.name}</p>
	<p class="font-body uppercase text-center">{data.post.currentprice} zł</p>
</div>

<div class="max-w-4xl mx-auto px-4 mt-20">
	<h2 class="font-league text-4xl mb-10 uppercase">Zamów juź teraz</h2>
	<a
		href="https://wa.me/48514127116?text=Chce%20kupic%20{data.post.slug}%20za%20{data.post
			.currentprice}"
		class="border border-black flex mx-auto py-3 mb-4 bg-white text-center"
	>
		<div class="w-3/6 flex justify-end">
			<img src="/whatsapp.svg" alt="tiktok" class="w-6 mr-6" />
		</div>
		<p>WhatsApp</p>
	</a>

	<a
		href="https://t.me/XXX"
		class="border border-black flex mx-auto py-3 mb-4 bg-white text-center"
	>
		<div class="w-3/6 flex justify-end">
			<img src="/telegram.svg" alt="tiktok" class="w-6 mr-6" />
		</div>

		<p>Telegram</p>
	</a>

	<a
		href="https://www.instagram.com/deuxmontee/"
		class="border border-black flex mx-auto py-3 mb-4 bg-white text-center"
	>
		<div class="w-3/6 flex justify-end">
			<img src="/instagram.svg" alt="tiktok" class="w-6 mr-6" />
		</div>
		<p>Instagram</p>
	</a>
</div>

<Footer />
