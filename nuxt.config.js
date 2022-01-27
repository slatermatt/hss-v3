export default {
	ssr: false,

	target: 'static',

	head: {
		title: 'Harrogate Storage Solutions',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
	},

	css: [
		'@/assets/css/main.css',
	],

	plugins: [
		'@/assets/js/include.js',
	],

	components: false,

	buildModules: [
		'@nuxt/postcss8',
	],

	modules: [
		'@nuxtjs/strapi',
	],

	strapi: {
		url: process.env.STRAPI_URL,
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {},
			},
		},
	}
}
