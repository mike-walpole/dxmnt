import { createClient } from '@sanity/client';

import groq from 'groq';

export const client = createClient({
	projectId: '53nurxcz',
	dataset: 'production',
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2024-03-20' // date of setup
});

export async function getPosts() {
	return await client.fetch(
		groq`*[_type == "prod" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getPost(slug) {
	return await client.fetch(groq`*[_type == "prod" && slug.current == $slug][0]`, {
		slug
	});
}
