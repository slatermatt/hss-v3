module.exports = {
	mode: 'jit',
	content: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
	],
	theme: {
		colors: {
			brand: {
				primary: '#2b5542',
				secondary: '#23382e',
			},
			'off-white': '#f5f5f5',
			black: '#000000',
			white: '#ffffff',
		},
		extend: {},
	},
	variants: {},
	plugins: [],
};
