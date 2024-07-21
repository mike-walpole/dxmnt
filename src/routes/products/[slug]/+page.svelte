<script>
	export let data;
	import { page } from '$app/stores';
	import { urlFor } from '$lib/utils/image';
</script>

<p>{data.post.name}</p>
<p>{data.post.brand}</p>

<img
	class="object-contain"
	src={urlFor(data.post.images[0]).width(300).height(300).format('webp').url()}
	alt="Cover image for {data.nazwa}"
	rel="preload"
	as="image"
/>

{#each data.post.images as image}
	<img
		class="w-full h-full object-contain"
		src={urlFor(image).width(300).height(300).format('webp').url()}
		alt="Cover image for {data.nazwa}"
		rel="preload"
		as="image"
	/>
{/each}
