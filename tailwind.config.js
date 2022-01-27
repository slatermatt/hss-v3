module.exports = {
	mode: 'jit',
	content: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			inherit: 'inherit',
			brand: {
				primary: '#2b5542',
				secondary: '#23382e',
			},
			'off-white': '#f5f5f5',
			black: '#000000',
			gray: '#444444',
			white: '#ffffff',
		},
		extend: {},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
	],
};
