import { error } from '@sveltejs/kit';
import { getPostsDzieci } from '$lib/utils/sanity';

export const load = async () => {
	const posts = await getPostsDzieci();

	if (posts) {
		return {
			posts
		};
	}

	throw error(404, 'Not found');
};
