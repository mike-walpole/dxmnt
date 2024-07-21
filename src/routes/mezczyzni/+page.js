import { error } from '@sveltejs/kit';
import { getPostsMezczyzni } from '$lib/utils/sanity';

export const load = async () => {
	const posts = await getPostsMezczyzni();

	if (posts) {
		return {
			posts
		};
	}

	throw error(404, 'Not found');
};
