/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				cheap: '"Cheap Pine",sans-serif'
			},
			screens: {
				portrait: { raw: '(orientation: portrait)' },
				landscape: { raw: '(orientation: landscape)' }
			}
		}
	},

	plugins: []
};
