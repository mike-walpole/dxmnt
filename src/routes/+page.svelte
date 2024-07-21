<script>
	import { urlFor } from '$lib/utils/image';
	import Footer from '../lib/components/footer.svelte';
	import Header from '../lib/components/header.svelte';

	export let data;
</script>

<Header />
<div class="overflow-hidden max-w-4xl mx-auto">
	<div class="text-black grid grid-inner-2 border-black">
		{#if data.posts.length}
			{#each data.posts as post}
				<a class="p-4" href={`/products/${post.slug.current}`}>
					<div class="relative flex flex-col grid-cols-1 mx-2 items-center justify-center">
						<img
							class="object-contain h-64 mx-auto"
							src={urlFor(post.images[0]).width(300).height(300).format('webp').url()}
							alt="Cover image for {post.name}"
							rel="preload"
							as="image"
						/>
						<h3 class="text-xl mt-3 uppercase font-bold font-body text-xs">
							{post.name}
						</h3>
						<p class="font-body text-sm">{post.currentprice} zł</p>
					</div>
				</a>
			{/each}
		{:else}
			<p>no posts available</p>
		{/if}
	</div>
</div>
<Footer />
