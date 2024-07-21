/** @type {import('tailwindcss').Config} */

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			fontFamily: {
				body: ['haas', 'sans-serif'],
				league: ['league', 'sans-serif']
			}
		}
	},
	plugins: [require('@michaelallenwarner/tailwind-grid-inner')]
};
